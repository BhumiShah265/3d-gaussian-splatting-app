import cv2
import os
def extract_frames(video_path, output_dir, extract_rate=2.0):
    os.makedirs(output_dir, exist_ok=True)
    video = cv2.VideoCapture(video_path)
    frame_count,saved_count = 0,0
    
    if not video.isOpened():
        return 0

    fps = video.get(cv2.CAP_PROP_FPS)

    frame_skip_interval = max(1,int(fps/extract_rate))
    while video.isOpened():
        _,frame = video.read()

        if not _ :
            break

        if frame_count%frame_skip_interval==0:
            filename = f"frame_{saved_count:04d}.jpg"
            cv2.imwrite(os.path.join(output_dir, filename), frame)
            saved_count += 1
        
        frame_count += 1
    video.release()
    return saved_count
import cv2  # add this import at the top of video.py if not already there

def select_best_keyframe(frames_folder: str, extracted_files: list[str]) -> str:
    """Pick the sharpest (least blurry) frame using Laplacian variance."""
    best_file = extracted_files[0]
    best_score = -1
    for f in extracted_files:
        img_path = os.path.join(frames_folder, f)
        img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
        if img is None:
            continue
        score = cv2.Laplacian(img, cv2.CV_64F).var()
        if score > best_score:
            best_score = score
            best_file = f
    return best_file
