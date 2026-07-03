"""
Utilities for post-processing raw 3D Gaussian Splat (.ply) files.
"""
import numpy as np
from plyfile import PlyData, PlyElement


def rotate_gaussian_splat_ply(input_path: str, output_path: str, angle_deg: float = 180.0, axis: str = "x"):
    """
    Rotates a 3D Gaussian Splatting .ply file around a given axis.
    Rotates BOTH the point positions (x,y,z) AND each gaussian's
    orientation quaternion (rot_0..rot_3), since splats carry per-point
    rotation unlike normal meshes.

    Note: does not re-rotate spherical harmonic (f_rest_*) color
    coefficients for higher SH degrees. For a simple 180 deg flip this is
    usually visually negligible, but if you notice color/lighting
    weirdness after rotation, that's why.
    """
    ply = PlyData.read(input_path)
    vertex = ply["vertex"]
    data = vertex.data.copy()

    angle_rad = np.radians(angle_deg)
    half = angle_rad / 2.0

    if axis == "x":
        rot_axis = np.array([1.0, 0.0, 0.0])
    elif axis == "y":
        rot_axis = np.array([0.0, 1.0, 0.0])
    elif axis == "z":
        rot_axis = np.array([0.0, 0.0, 1.0])
    else:
        raise ValueError("axis must be 'x', 'y', or 'z'")

    # Rotation quaternion (w, x, y, z)
    qr_w = np.cos(half)
    qr_xyz = np.sin(half) * rot_axis
    qr = np.array([qr_w, *qr_xyz])

    # Build 3x3 rotation matrix from quaternion for position transform
    w, x, y, z = qr
    R = np.array([
        [1 - 2 * (y**2 + z**2), 2 * (x*y - z*w),       2 * (x*z + y*w)],
        [2 * (x*y + z*w),       1 - 2 * (x**2 + z**2), 2 * (y*z - x*w)],
        [2 * (x*z - y*w),       2 * (y*z + x*w),       1 - 2 * (x**2 + y**2)],
    ])

    # --- Rotate positions ---
    positions = np.stack([data["x"], data["y"], data["z"]], axis=-1)
    rotated_positions = positions @ R.T
    data["x"] = rotated_positions[:, 0].astype(np.float32)
    data["y"] = rotated_positions[:, 1].astype(np.float32)
    data["z"] = rotated_positions[:, 2].astype(np.float32)

    # --- Rotate per-splat orientation quaternions (rot_0=w, rot_1=x, rot_2=y, rot_3=z) ---
    q_w = data["rot_0"]
    q_x = data["rot_1"]
    q_y = data["rot_2"]
    q_z = data["rot_3"]

    # Quaternion multiplication: q_new = qr * q_original
    new_w = qr[0]*q_w - qr[1]*q_x - qr[2]*q_y - qr[3]*q_z
    new_x = qr[0]*q_x + qr[1]*q_w + qr[2]*q_z - qr[3]*q_y
    new_y = qr[0]*q_y - qr[1]*q_z + qr[2]*q_w + qr[3]*q_x
    new_z = qr[0]*q_z + qr[1]*q_y - qr[2]*q_x + qr[3]*q_w

    # normalize
    norm = np.sqrt(new_w**2 + new_x**2 + new_y**2 + new_z**2)
    data["rot_0"] = (new_w / norm).astype(np.float32)
    data["rot_1"] = (new_x / norm).astype(np.float32)
    data["rot_2"] = (new_y / norm).astype(np.float32)
    data["rot_3"] = (new_z / norm).astype(np.float32)

    new_vertex = PlyElement.describe(data, "vertex")
    PlyData([new_vertex], text=ply.text, byte_order=ply.byte_order).write(output_path)