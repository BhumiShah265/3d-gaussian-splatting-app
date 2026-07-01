var KS=Object.defineProperty;var $S=(n,e,t)=>e in n?KS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ue=(n,e,t)=>$S(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ZS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xg={exports:{}},Ec={},Qg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),JS=Symbol.for("react.portal"),eA=Symbol.for("react.fragment"),tA=Symbol.for("react.strict_mode"),nA=Symbol.for("react.profiler"),iA=Symbol.for("react.provider"),rA=Symbol.for("react.context"),sA=Symbol.for("react.forward_ref"),oA=Symbol.for("react.suspense"),aA=Symbol.for("react.memo"),lA=Symbol.for("react.lazy"),zh=Symbol.iterator;function cA(n){return n===null||typeof n!="object"?null:(n=zh&&n[zh]||n["@@iterator"],typeof n=="function"?n:null)}var jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qg=Object.assign,Yg={};function mo(n,e,t){this.props=n,this.context=e,this.refs=Yg,this.updater=t||jg}mo.prototype.isReactComponent={};mo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};mo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Kg(){}Kg.prototype=mo.prototype;function gf(n,e,t){this.props=n,this.context=e,this.refs=Yg,this.updater=t||jg}var vf=gf.prototype=new Kg;vf.constructor=gf;qg(vf,mo.prototype);vf.isPureReactComponent=!0;var Hh=Array.isArray,$g=Object.prototype.hasOwnProperty,Sf={current:null},Zg={key:!0,ref:!0,__self:!0,__source:!0};function Jg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$g.call(e,i)&&!Zg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ma,type:n,key:s,ref:o,props:r,_owner:Sf.current}}function uA(n,e){return{$$typeof:Ma,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Af(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ma}function dA(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Vh=/\/+/g;function Yc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?dA(""+n.key):e.toString(36)}function wl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ma:case JS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Yc(o,0):i,Hh(r)?(t="",n!=null&&(t=n.replace(Vh,"$&/")+"/"),wl(r,e,t,"",function(c){return c})):r!=null&&(Af(r)&&(r=uA(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Hh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Yc(s,a);o+=wl(s,e,t,l,r)}else if(l=cA(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Yc(s,a++),o+=wl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(n,e,t){if(n==null)return n;var i=[],r=0;return wl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function fA(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var gn={current:null},Rl={transition:null},hA={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Sf};function e0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Fa,forEach:function(n,e,t){Fa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Fa(n,function(){e++}),e},toArray:function(n){return Fa(n,function(e){return e})||[]},only:function(n){if(!Af(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=mo;Ke.Fragment=eA;Ke.Profiler=nA;Ke.PureComponent=gf;Ke.StrictMode=tA;Ke.Suspense=oA;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hA;Ke.act=e0;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=qg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)$g.call(e,l)&&!Zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ma,type:n.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(n){return n={$$typeof:rA,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:iA,_context:n},n.Consumer=n};Ke.createElement=Jg;Ke.createFactory=function(n){var e=Jg.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:sA,render:n}};Ke.isValidElement=Af;Ke.lazy=function(n){return{$$typeof:lA,_payload:{_status:-1,_result:n},_init:fA}};Ke.memo=function(n,e){return{$$typeof:aA,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=Rl.transition;Rl.transition={};try{n()}finally{Rl.transition=e}};Ke.unstable_act=e0;Ke.useCallback=function(n,e){return gn.current.useCallback(n,e)};Ke.useContext=function(n){return gn.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return gn.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return gn.current.useEffect(n,e)};Ke.useId=function(){return gn.current.useId()};Ke.useImperativeHandle=function(n,e,t){return gn.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return gn.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return gn.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return gn.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return gn.current.useReducer(n,e,t)};Ke.useRef=function(n){return gn.current.useRef(n)};Ke.useState=function(n){return gn.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return gn.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return gn.current.useTransition()};Ke.version="18.3.1";Qg.exports=Ke;var Ot=Qg.exports;const pA=ZS(Ot);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mA=Ot,gA=Symbol.for("react.element"),vA=Symbol.for("react.fragment"),SA=Object.prototype.hasOwnProperty,AA=mA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xA={key:!0,ref:!0,__self:!0,__source:!0};function t0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)SA.call(e,i)&&!xA.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gA,type:n,key:s,ref:o,props:r,_owner:AA.current}}Ec.Fragment=vA;Ec.jsx=t0;Ec.jsxs=t0;Xg.exports=Ec;var le=Xg.exports,ad={},n0={exports:{}},kn={},i0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,B){var H=F.length;F.push(B);e:for(;0<H;){var $=H-1>>>1,J=F[$];if(0<r(J,B))F[$]=B,F[H]=J,H=$;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var B=F[0],H=F.pop();if(H!==B){F[0]=H;e:for(var $=0,J=F.length,X=J>>>1;$<X;){var Y=2*($+1)-1,ee=F[Y],ie=Y+1,ce=F[ie];if(0>r(ee,H))ie<J&&0>r(ce,ee)?(F[$]=ce,F[ie]=H,$=ie):(F[$]=ee,F[Y]=H,$=Y);else if(ie<J&&0>r(ce,H))F[$]=ce,F[ie]=H,$=ie;else break e}}return B}function r(F,B){var H=F.sortIndex-B.sortIndex;return H!==0?H:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,g=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(F){for(var B=t(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=F)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(c)}}function x(F){if(S=!1,A(F),!g)if(t(l)!==null)g=!0,O(_);else{var B=t(c);B!==null&&V(x,B.startTime-F)}}function _(F,B){g=!1,S&&(S=!1,f(w),w=-1),p=!0;var H=h;try{for(A(B),d=t(l);d!==null&&(!(d.expirationTime>B)||F&&!D());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var J=$(d.expirationTime<=B);B=n.unstable_now(),typeof J=="function"?d.callback=J:d===t(l)&&i(l),A(B)}else i(l);d=t(l)}if(d!==null)var X=!0;else{var Y=t(c);Y!==null&&V(x,Y.startTime-B),X=!1}return X}finally{d=null,h=H,p=!1}}var C=!1,y=null,w=-1,E=5,M=-1;function D(){return!(n.unstable_now()-M<E)}function U(){if(y!==null){var F=n.unstable_now();M=F;var B=!0;try{B=y(!0,F)}finally{B?z():(C=!1,y=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(U)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,L=I.port2;I.port1.onmessage=U,z=function(){L.postMessage(null)}}else z=function(){m(U,0)};function O(F){y=F,C||(C=!0,z())}function V(F,B){w=m(function(){F(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,O(_))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var H=h;h=B;try{return F()}finally{h=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=h;h=F;try{return B()}finally{h=H}},n.unstable_scheduleCallback=function(F,B,H){var $=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,F){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=H+J,F={id:u++,callback:B,priorityLevel:F,startTime:H,expirationTime:J,sortIndex:-1},H>$?(F.sortIndex=H,e(c,F),t(l)===null&&F===t(c)&&(S?(f(w),w=-1):S=!0,V(x,H-$))):(F.sortIndex=J,e(l,F),g||p||(g=!0,O(_))),F},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(F){var B=h;return function(){var H=h;h=B;try{return F.apply(this,arguments)}finally{h=H}}}})(r0);i0.exports=r0;var yA=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _A=Ot,On=yA;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,ta={};function rs(n,e){to(n,e),to(n+"Capture",e)}function to(n,e){for(ta[n]=e,n=0;n<e.length;n++)s0.add(e[n])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,EA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gh={},Wh={};function CA(n){return ld.call(Wh,n)?!0:ld.call(Gh,n)?!1:EA.test(n)?Wh[n]=!0:(Gh[n]=!0,!1)}function MA(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function TA(n,e,t,i){if(e===null||typeof e>"u"||MA(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Jt[n]=new vn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Jt[e]=new vn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Jt[n]=new vn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Jt[n]=new vn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Jt[n]=new vn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Jt[n]=new vn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Jt[n]=new vn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Jt[n]=new vn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Jt[n]=new vn(n,5,!1,n.toLowerCase(),null,!1,!1)});var xf=/[\-:]([a-z])/g;function yf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(xf,yf);Jt[e]=new vn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(xf,yf);Jt[e]=new vn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(xf,yf);Jt[e]=new vn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Jt[n]=new vn(n,1,!1,n.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Jt[n]=new vn(n,1,!1,n.toLowerCase(),null,!0,!0)});function _f(n,e,t,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TA(e,t,r,i)&&(t=null),i||r===null?CA(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ki=_A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),Xh=Symbol.iterator;function _o(n){return n===null||typeof n!="object"?null:(n=Xh&&n[Xh]||n["@@iterator"],typeof n=="function"?n:null)}var Mt=Object.assign,Kc;function Bo(n){if(Kc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Kc=e&&e[1]||""}return`
`+Kc+n}var $c=!1;function Zc(n,e){if(!n||$c)return"";$c=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{$c=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Bo(n):""}function wA(n){switch(n.tag){case 5:return Bo(n.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return n=Zc(n.type,!1),n;case 11:return n=Zc(n.type.render,!1),n;case 1:return n=Zc(n.type,!0),n;default:return""}}function fd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ps:return"Fragment";case bs:return"Portal";case cd:return"Profiler";case Ef:return"StrictMode";case ud:return"Suspense";case dd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case a0:return(n.displayName||"Context")+".Consumer";case o0:return(n._context.displayName||"Context")+".Provider";case Cf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Mf:return e=n.displayName||null,e!==null?e:fd(n.type)||"Memo";case sr:e=n._payload,n=n._init;try{return fd(n(e))}catch{}}return null}function RA(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function c0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function IA(n){var e=c0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ua(n){n._valueTracker||(n._valueTracker=IA(n))}function u0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=c0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Hl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function hd(n,e){var t=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Qh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Mr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d0(n,e){e=e.checked,e!=null&&_f(n,"checked",e,!1)}function pd(n,e){d0(n,e);var t=Mr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?md(n,e.type,t):e.hasOwnProperty("defaultValue")&&md(n,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function jh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function md(n,e,t){(e!=="number"||Hl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Uo=Array.isArray;function Xs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Mr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function gd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Uo(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Mr(t)}}function f0(n,e){var t=Mr(e.value),i=Mr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Yh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function h0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?h0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Na,p0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function na(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bA=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(n){bA.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ko[e]=ko[n]})});function m0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ko.hasOwnProperty(n)&&ko[n]?(""+e).trim():e+"px"}function g0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=m0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var PA=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(n,e){if(e){if(PA[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Ad(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function Tf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yd=null,Qs=null,js=null;function Kh(n){if(n=Ra(n)){if(typeof yd!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=Rc(e),yd(n.stateNode,n.type,e))}}function v0(n){Qs?js?js.push(n):js=[n]:Qs=n}function S0(){if(Qs){var n=Qs,e=js;if(js=Qs=null,Kh(n),e)for(n=0;n<e.length;n++)Kh(e[n])}}function A0(n,e){return n(e)}function x0(){}var Jc=!1;function y0(n,e,t){if(Jc)return n(e,t);Jc=!0;try{return A0(n,e,t)}finally{Jc=!1,(Qs!==null||js!==null)&&(x0(),S0())}}function ia(n,e){var t=n.stateNode;if(t===null)return null;var i=Rc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var _d=!1;if(Xi)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){_d=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{_d=!1}function DA(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var zo=!1,Vl=null,Gl=!1,Ed=null,LA={onError:function(n){zo=!0,Vl=n}};function FA(n,e,t,i,r,s,o,a,l){zo=!1,Vl=null,DA.apply(LA,arguments)}function BA(n,e,t,i,r,s,o,a,l){if(FA.apply(this,arguments),zo){if(zo){var c=Vl;zo=!1,Vl=null}else throw Error(oe(198));Gl||(Gl=!0,Ed=c)}}function ss(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function _0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function $h(n){if(ss(n)!==n)throw Error(oe(188))}function UA(n){var e=n.alternate;if(!e){if(e=ss(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return $h(r),n;if(s===i)return $h(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function E0(n){return n=UA(n),n!==null?C0(n):null}function C0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=C0(n);if(e!==null)return e;n=n.sibling}return null}var M0=On.unstable_scheduleCallback,Zh=On.unstable_cancelCallback,NA=On.unstable_shouldYield,OA=On.unstable_requestPaint,Pt=On.unstable_now,kA=On.unstable_getCurrentPriorityLevel,wf=On.unstable_ImmediatePriority,T0=On.unstable_UserBlockingPriority,Wl=On.unstable_NormalPriority,zA=On.unstable_LowPriority,w0=On.unstable_IdlePriority,Cc=null,Ei=null;function HA(n){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Cc,n,void 0,(n.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:WA,VA=Math.log,GA=Math.LN2;function WA(n){return n>>>=0,n===0?32:31-(VA(n)/GA|0)|0}var Oa=64,ka=4194304;function No(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=No(a):(s&=o,s!==0&&(i=No(s)))}else o=t&~r,o!==0?i=No(o):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-fi(e),r=1<<t,i|=n[t],e&=~r;return i}function XA(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QA(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-fi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=XA(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Cd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function R0(){var n=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),n}function eu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ta(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-fi(e),n[e]=t}function jA(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-fi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Rf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-fi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var at=0;function I0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var b0,If,P0,D0,L0,Md=!1,za=[],hr=null,pr=null,mr=null,ra=new Map,sa=new Map,cr=[],qA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(n,e){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function Co(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&If(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function YA(n,e,t,i,r){switch(e){case"focusin":return hr=Co(hr,n,e,t,i,r),!0;case"dragenter":return pr=Co(pr,n,e,t,i,r),!0;case"mouseover":return mr=Co(mr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,Co(ra.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,Co(sa.get(s)||null,n,e,t,i,r)),!0}return!1}function F0(n){var e=Wr(n.target);if(e!==null){var t=ss(e);if(t!==null){if(e=t.tag,e===13){if(e=_0(t),e!==null){n.blockedOn=e,L0(n.priority,function(){P0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Il(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Td(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);xd=i,t.target.dispatchEvent(i),xd=null}else return e=Ra(t),e!==null&&If(e),n.blockedOn=t,!1;e.shift()}return!0}function ep(n,e,t){Il(n)&&t.delete(e)}function KA(){Md=!1,hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),mr!==null&&Il(mr)&&(mr=null),ra.forEach(ep),sa.forEach(ep)}function Mo(n,e){n.blockedOn===e&&(n.blockedOn=null,Md||(Md=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,KA)))}function oa(n){function e(r){return Mo(r,n)}if(0<za.length){Mo(za[0],n);for(var t=1;t<za.length;t++){var i=za[t];i.blockedOn===n&&(i.blockedOn=null)}}for(hr!==null&&Mo(hr,n),pr!==null&&Mo(pr,n),mr!==null&&Mo(mr,n),ra.forEach(e),sa.forEach(e),t=0;t<cr.length;t++)i=cr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cr.length&&(t=cr[0],t.blockedOn===null);)F0(t),t.blockedOn===null&&cr.shift()}var qs=Ki.ReactCurrentBatchConfig,Ql=!0;function $A(n,e,t,i){var r=at,s=qs.transition;qs.transition=null;try{at=1,bf(n,e,t,i)}finally{at=r,qs.transition=s}}function ZA(n,e,t,i){var r=at,s=qs.transition;qs.transition=null;try{at=4,bf(n,e,t,i)}finally{at=r,qs.transition=s}}function bf(n,e,t,i){if(Ql){var r=Td(n,e,t,i);if(r===null)uu(n,e,i,jl,t),Jh(n,i);else if(YA(r,n,e,t,i))i.stopPropagation();else if(Jh(n,i),e&4&&-1<qA.indexOf(n)){for(;r!==null;){var s=Ra(r);if(s!==null&&b0(s),s=Td(n,e,t,i),s===null&&uu(n,e,i,jl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(n,e,i,null,t)}}var jl=null;function Td(n,e,t,i){if(jl=null,n=Tf(i),n=Wr(n),n!==null)if(e=ss(n),e===null)n=null;else if(t=e.tag,t===13){if(n=_0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return jl=n,null}function B0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kA()){case wf:return 1;case T0:return 4;case Wl:case zA:return 16;case w0:return 536870912;default:return 16}default:return 16}}var dr=null,Pf=null,bl=null;function U0(){if(bl)return bl;var n,e=Pf,t=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return bl=r.slice(n,1<i?1-i:void 0)}function Pl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ha(){return!0}function tp(){return!1}function zn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:tp,this.isPropagationStopped=tp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=zn(go),wa=Mt({},go,{view:0,detail:0}),JA=zn(wa),tu,nu,To,Mc=Mt({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==To&&(To&&n.type==="mousemove"?(tu=n.screenX-To.screenX,nu=n.screenY-To.screenY):nu=tu=0,To=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),np=zn(Mc),ex=Mt({},Mc,{dataTransfer:0}),tx=zn(ex),nx=Mt({},wa,{relatedTarget:0}),iu=zn(nx),ix=Mt({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=zn(ix),sx=Mt({},go,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ox=zn(sx),ax=Mt({},go,{data:0}),ip=zn(ax),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ux[n])?!!e[n]:!1}function Lf(){return dx}var fx=Mt({},wa,{key:function(n){if(n.key){var e=lx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Pl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(n){return n.type==="keypress"?Pl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hx=zn(fx),px=Mt({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=zn(px),mx=Mt({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),gx=zn(mx),vx=Mt({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=zn(vx),Ax=Mt({},Mc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=zn(Ax),yx=[9,13,27,32],Ff=Xi&&"CompositionEvent"in window,Ho=null;Xi&&"documentMode"in document&&(Ho=document.documentMode);var _x=Xi&&"TextEvent"in window&&!Ho,N0=Xi&&(!Ff||Ho&&8<Ho&&11>=Ho),sp=" ",op=!1;function O0(n,e){switch(n){case"keyup":return yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function Ex(n,e){switch(n){case"compositionend":return k0(e);case"keypress":return e.which!==32?null:(op=!0,sp);case"textInput":return n=e.data,n===sp&&op?null:n;default:return null}}function Cx(n,e){if(Ds)return n==="compositionend"||!Ff&&O0(n,e)?(n=U0(),bl=Pf=dr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Mx[n.type]:e==="textarea"}function z0(n,e,t,i){v0(i),e=ql(e,"onChange"),0<e.length&&(t=new Df("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Vo=null,aa=null;function Tx(n){$0(n,0)}function Tc(n){var e=Bs(n);if(u0(e))return n}function wx(n,e){if(n==="change")return e}var H0=!1;if(Xi){var ru;if(Xi){var su="oninput"in document;if(!su){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),su=typeof lp.oninput=="function"}ru=su}else ru=!1;H0=ru&&(!document.documentMode||9<document.documentMode)}function cp(){Vo&&(Vo.detachEvent("onpropertychange",V0),aa=Vo=null)}function V0(n){if(n.propertyName==="value"&&Tc(aa)){var e=[];z0(e,aa,n,Tf(n)),y0(Tx,e)}}function Rx(n,e,t){n==="focusin"?(cp(),Vo=e,aa=t,Vo.attachEvent("onpropertychange",V0)):n==="focusout"&&cp()}function Ix(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tc(aa)}function bx(n,e){if(n==="click")return Tc(e)}function Px(n,e){if(n==="input"||n==="change")return Tc(e)}function Dx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pi=typeof Object.is=="function"?Object.is:Dx;function la(n,e){if(pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ld.call(e,r)||!pi(n[r],e[r]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dp(n,e){var t=up(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=up(t)}}function G0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?G0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function W0(){for(var n=window,e=Hl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Hl(n.document)}return e}function Bf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Lx(n){var e=W0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&G0(t.ownerDocument.documentElement,t)){if(i!==null&&Bf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=dp(t,s);var o=dp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fx=Xi&&"documentMode"in document&&11>=document.documentMode,Ls=null,wd=null,Go=null,Rd=!1;function fp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rd||Ls==null||Ls!==Hl(i)||(i=Ls,"selectionStart"in i&&Bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Go&&la(Go,i)||(Go=i,i=ql(wd,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ls)))}function Va(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Fs={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},ou={},X0={};Xi&&(X0=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function wc(n){if(ou[n])return ou[n];if(!Fs[n])return n;var e=Fs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in X0)return ou[n]=e[t];return n}var Q0=wc("animationend"),j0=wc("animationiteration"),q0=wc("animationstart"),Y0=wc("transitionend"),K0=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,e){K0.set(n,e),rs(e,[n])}for(var au=0;au<hp.length;au++){var lu=hp[au],Bx=lu.toLowerCase(),Ux=lu[0].toUpperCase()+lu.slice(1);Rr(Bx,"on"+Ux)}Rr(Q0,"onAnimationEnd");Rr(j0,"onAnimationIteration");Rr(q0,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Y0,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function pp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,BA(i,e,void 0,n),n.currentTarget=null}function $0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pp(r,a,c),s=l}}}if(Gl)throw n=Ed,Gl=!1,Ed=null,n}function ht(n,e){var t=e[Ld];t===void 0&&(t=e[Ld]=new Set);var i=n+"__bubble";t.has(i)||(Z0(e,n,2,!1),t.add(i))}function cu(n,e,t){var i=0;e&&(i|=4),Z0(t,n,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ga]){n[Ga]=!0,s0.forEach(function(t){t!=="selectionchange"&&(Nx.has(t)||cu(t,!1,n),cu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,cu("selectionchange",!1,e))}}function Z0(n,e,t,i){switch(B0(e)){case 1:var r=$A;break;case 4:r=ZA;break;default:r=bf}t=r.bind(null,e,t,n),r=void 0,!_d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function uu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}y0(function(){var c=s,u=Tf(t),d=[];e:{var h=K0.get(n);if(h!==void 0){var p=Df,g=n;switch(n){case"keypress":if(Pl(t)===0)break e;case"keydown":case"keyup":p=hx;break;case"focusin":g="focus",p=iu;break;case"focusout":g="blur",p=iu;break;case"beforeblur":case"afterblur":p=iu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gx;break;case Q0:case j0:case q0:p=rx;break;case Y0:p=Sx;break;case"scroll":p=JA;break;case"wheel":p=xx;break;case"copy":case"cut":case"paste":p=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rp}var S=(e&4)!==0,m=!S&&n==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var v=c,A;v!==null;){A=v;var x=A.stateNode;if(A.tag===5&&x!==null&&(A=x,f!==null&&(x=ia(v,f),x!=null&&S.push(ua(v,x,A)))),m)break;v=v.return}0<S.length&&(h=new p(h,g,null,t,u),d.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==xd&&(g=t.relatedTarget||t.fromElement)&&(Wr(g)||g[Qi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Wr(g):null,g!==null&&(m=ss(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=np,x="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(S=rp,x="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:Bs(p),A=g==null?h:Bs(g),h=new S(x,v+"leave",p,t,u),h.target=m,h.relatedTarget=A,x=null,Wr(u)===c&&(S=new S(f,v+"enter",g,t,u),S.target=A,S.relatedTarget=m,x=S),m=x,p&&g)t:{for(S=p,f=g,v=0,A=S;A;A=as(A))v++;for(A=0,x=f;x;x=as(x))A++;for(;0<v-A;)S=as(S),v--;for(;0<A-v;)f=as(f),A--;for(;v--;){if(S===f||f!==null&&S===f.alternate)break t;S=as(S),f=as(f)}S=null}else S=null;p!==null&&mp(d,h,p,S,!1),g!==null&&m!==null&&mp(d,m,g,S,!0)}}e:{if(h=c?Bs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var _=wx;else if(ap(h))if(H0)_=Px;else{_=Ix;var C=Rx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=bx);if(_&&(_=_(n,c))){z0(d,_,t,u);break e}C&&C(n,h,c),n==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&md(h,"number",h.value)}switch(C=c?Bs(c):window,n){case"focusin":(ap(C)||C.contentEditable==="true")&&(Ls=C,wd=c,Go=null);break;case"focusout":Go=wd=Ls=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,fp(d,t,u);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":fp(d,t,u)}var y;if(Ff)e:{switch(n){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ds?O0(n,t)&&(w="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(N0&&t.locale!=="ko"&&(Ds||w!=="onCompositionStart"?w==="onCompositionEnd"&&Ds&&(y=U0()):(dr=u,Pf="value"in dr?dr.value:dr.textContent,Ds=!0)),C=ql(c,w),0<C.length&&(w=new ip(w,n,null,t,u),d.push({event:w,listeners:C}),y?w.data=y:(y=k0(t),y!==null&&(w.data=y)))),(y=_x?Ex(n,t):Cx(n,t))&&(c=ql(c,"onBeforeInput"),0<c.length&&(u=new ip("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=y))}$0(d,e)})}function ua(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ql(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(n,t),s!=null&&i.unshift(ua(n,s,r)),s=ia(n,e),s!=null&&i.push(ua(n,s,r))),n=n.return}return i}function as(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ia(t,s),l!=null&&o.unshift(ua(t,l,a))):r||(l=ia(t,s),l!=null&&o.push(ua(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Ox=/\r\n?/g,kx=/\u0000|\uFFFD/g;function gp(n){return(typeof n=="string"?n:""+n).replace(Ox,`
`).replace(kx,"")}function Wa(n,e,t){if(e=gp(e),gp(n)!==e&&t)throw Error(oe(425))}function Yl(){}var Id=null,bd=null;function Pd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(n){return vp.resolve(null).then(n).catch(Vx)}:Dd;function Vx(n){setTimeout(function(){throw n})}function du(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),oa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);oa(e)}function gr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Sp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Ai="__reactFiber$"+vo,da="__reactProps$"+vo,Qi="__reactContainer$"+vo,Ld="__reactEvents$"+vo,Gx="__reactListeners$"+vo,Wx="__reactHandles$"+vo;function Wr(n){var e=n[Ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Qi]||t[Ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Sp(n);n!==null;){if(t=n[Ai])return t;n=Sp(n)}return e}n=t,t=n.parentNode}return null}function Ra(n){return n=n[Ai]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function Rc(n){return n[da]||null}var Fd=[],Us=-1;function Ir(n){return{current:n}}function gt(n){0>Us||(n.current=Fd[Us],Fd[Us]=null,Us--)}function ft(n,e){Us++,Fd[Us]=n.current,n.current=e}var Tr={},ln=Ir(Tr),Cn=Ir(!1),Zr=Tr;function no(n,e){var t=n.type.contextTypes;if(!t)return Tr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(n){return n=n.childContextTypes,n!=null}function Kl(){gt(Cn),gt(ln)}function Ap(n,e,t){if(ln.current!==Tr)throw Error(oe(168));ft(ln,e),ft(Cn,t)}function J0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,RA(n)||"Unknown",r));return Mt({},t,i)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,Zr=ln.current,ft(ln,n),ft(Cn,Cn.current),!0}function xp(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=J0(n,e,Zr),i.__reactInternalMemoizedMergedChildContext=n,gt(Cn),gt(ln),ft(ln,n)):gt(Cn),ft(Cn,t)}var Bi=null,Ic=!1,fu=!1;function ev(n){Bi===null?Bi=[n]:Bi.push(n)}function Xx(n){Ic=!0,ev(n)}function br(){if(!fu&&Bi!==null){fu=!0;var n=0,e=at;try{var t=Bi;for(at=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Bi=null,Ic=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(n+1)),M0(wf,br),r}finally{at=e,fu=!1}}return null}var Ns=[],Os=0,Zl=null,Jl=0,Wn=[],Xn=0,Jr=null,ki=1,zi="";function Nr(n,e){Ns[Os++]=Jl,Ns[Os++]=Zl,Zl=n,Jl=e}function tv(n,e,t){Wn[Xn++]=ki,Wn[Xn++]=zi,Wn[Xn++]=Jr,Jr=n;var i=ki;n=zi;var r=32-fi(i)-1;i&=~(1<<r),t+=1;var s=32-fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-fi(e)+r|t<<r|i,zi=s+n}else ki=1<<s|t<<r|i,zi=n}function Uf(n){n.return!==null&&(Nr(n,1),tv(n,1,0))}function Nf(n){for(;n===Zl;)Zl=Ns[--Os],Ns[Os]=null,Jl=Ns[--Os],Ns[Os]=null;for(;n===Jr;)Jr=Wn[--Xn],Wn[Xn]=null,zi=Wn[--Xn],Wn[Xn]=null,ki=Wn[--Xn],Wn[Xn]=null}var Un=null,Ln=null,At=!1,ci=null;function nv(n,e){var t=Kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function yp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Un=n,Ln=gr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Un=n,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Jr!==null?{id:ki,overflow:zi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Un=n,Ln=null,!0):!1;default:return!1}}function Bd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ud(n){if(At){var e=Ln;if(e){var t=e;if(!yp(n,e)){if(Bd(n))throw Error(oe(418));e=gr(t.nextSibling);var i=Un;e&&yp(n,e)?nv(i,t):(n.flags=n.flags&-4097|2,At=!1,Un=n)}}else{if(Bd(n))throw Error(oe(418));n.flags=n.flags&-4097|2,At=!1,Un=n}}}function _p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function Xa(n){if(n!==Un)return!1;if(!At)return _p(n),At=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Pd(n.type,n.memoizedProps)),e&&(e=Ln)){if(Bd(n))throw iv(),Error(oe(418));for(;e;)nv(n,e),e=gr(e.nextSibling)}if(_p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ln=gr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ln=null}}else Ln=Un?gr(n.stateNode.nextSibling):null;return!0}function iv(){for(var n=Ln;n;)n=gr(n.nextSibling)}function io(){Ln=Un=null,At=!1}function Of(n){ci===null?ci=[n]:ci.push(n)}var Qx=Ki.ReactCurrentBatchConfig;function wo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function Qa(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ep(n){var e=n._init;return e(n._payload)}function rv(n){function e(f,v){if(n){var A=f.deletions;A===null?(f.deletions=[v],f.flags|=16):A.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=xr(f,v),f.index=0,f.sibling=null,f}function s(f,v,A){return f.index=A,n?(A=f.alternate,A!==null?(A=A.index,A<v?(f.flags|=2,v):A):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,A,x){return v===null||v.tag!==6?(v=Au(A,f.mode,x),v.return=f,v):(v=r(v,A),v.return=f,v)}function l(f,v,A,x){var _=A.type;return _===Ps?u(f,v,A.props.children,x,A.key):v!==null&&(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===sr&&Ep(_)===v.type)?(x=r(v,A.props),x.ref=wo(f,v,A),x.return=f,x):(x=Ol(A.type,A.key,A.props,null,f.mode,x),x.ref=wo(f,v,A),x.return=f,x)}function c(f,v,A,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=xu(A,f.mode,x),v.return=f,v):(v=r(v,A.children||[]),v.return=f,v)}function u(f,v,A,x,_){return v===null||v.tag!==7?(v=Yr(A,f.mode,x,_),v.return=f,v):(v=r(v,A),v.return=f,v)}function d(f,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Au(""+v,f.mode,A),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:return A=Ol(v.type,v.key,v.props,null,f.mode,A),A.ref=wo(f,null,v),A.return=f,A;case bs:return v=xu(v,f.mode,A),v.return=f,v;case sr:var x=v._init;return d(f,x(v._payload),A)}if(Uo(v)||_o(v))return v=Yr(v,f.mode,A,null),v.return=f,v;Qa(f,v)}return null}function h(f,v,A,x){var _=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return _!==null?null:a(f,v,""+A,x);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ba:return A.key===_?l(f,v,A,x):null;case bs:return A.key===_?c(f,v,A,x):null;case sr:return _=A._init,h(f,v,_(A._payload),x)}if(Uo(A)||_o(A))return _!==null?null:u(f,v,A,x,null);Qa(f,A)}return null}function p(f,v,A,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(A)||null,a(v,f,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ba:return f=f.get(x.key===null?A:x.key)||null,l(v,f,x,_);case bs:return f=f.get(x.key===null?A:x.key)||null,c(v,f,x,_);case sr:var C=x._init;return p(f,v,A,C(x._payload),_)}if(Uo(x)||_o(x))return f=f.get(A)||null,u(v,f,x,_,null);Qa(v,x)}return null}function g(f,v,A,x){for(var _=null,C=null,y=v,w=v=0,E=null;y!==null&&w<A.length;w++){y.index>w?(E=y,y=null):E=y.sibling;var M=h(f,y,A[w],x);if(M===null){y===null&&(y=E);break}n&&y&&M.alternate===null&&e(f,y),v=s(M,v,w),C===null?_=M:C.sibling=M,C=M,y=E}if(w===A.length)return t(f,y),At&&Nr(f,w),_;if(y===null){for(;w<A.length;w++)y=d(f,A[w],x),y!==null&&(v=s(y,v,w),C===null?_=y:C.sibling=y,C=y);return At&&Nr(f,w),_}for(y=i(f,y);w<A.length;w++)E=p(y,f,w,A[w],x),E!==null&&(n&&E.alternate!==null&&y.delete(E.key===null?w:E.key),v=s(E,v,w),C===null?_=E:C.sibling=E,C=E);return n&&y.forEach(function(D){return e(f,D)}),At&&Nr(f,w),_}function S(f,v,A,x){var _=_o(A);if(typeof _!="function")throw Error(oe(150));if(A=_.call(A),A==null)throw Error(oe(151));for(var C=_=null,y=v,w=v=0,E=null,M=A.next();y!==null&&!M.done;w++,M=A.next()){y.index>w?(E=y,y=null):E=y.sibling;var D=h(f,y,M.value,x);if(D===null){y===null&&(y=E);break}n&&y&&D.alternate===null&&e(f,y),v=s(D,v,w),C===null?_=D:C.sibling=D,C=D,y=E}if(M.done)return t(f,y),At&&Nr(f,w),_;if(y===null){for(;!M.done;w++,M=A.next())M=d(f,M.value,x),M!==null&&(v=s(M,v,w),C===null?_=M:C.sibling=M,C=M);return At&&Nr(f,w),_}for(y=i(f,y);!M.done;w++,M=A.next())M=p(y,f,w,M.value,x),M!==null&&(n&&M.alternate!==null&&y.delete(M.key===null?w:M.key),v=s(M,v,w),C===null?_=M:C.sibling=M,C=M);return n&&y.forEach(function(U){return e(f,U)}),At&&Nr(f,w),_}function m(f,v,A,x){if(typeof A=="object"&&A!==null&&A.type===Ps&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ba:e:{for(var _=A.key,C=v;C!==null;){if(C.key===_){if(_=A.type,_===Ps){if(C.tag===7){t(f,C.sibling),v=r(C,A.props.children),v.return=f,f=v;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===sr&&Ep(_)===C.type){t(f,C.sibling),v=r(C,A.props),v.ref=wo(f,C,A),v.return=f,f=v;break e}t(f,C);break}else e(f,C);C=C.sibling}A.type===Ps?(v=Yr(A.props.children,f.mode,x,A.key),v.return=f,f=v):(x=Ol(A.type,A.key,A.props,null,f.mode,x),x.ref=wo(f,v,A),x.return=f,f=x)}return o(f);case bs:e:{for(C=A.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){t(f,v.sibling),v=r(v,A.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=xu(A,f.mode,x),v.return=f,f=v}return o(f);case sr:return C=A._init,m(f,v,C(A._payload),x)}if(Uo(A))return g(f,v,A,x);if(_o(A))return S(f,v,A,x);Qa(f,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,A),v.return=f,f=v):(t(f,v),v=Au(A,f.mode,x),v.return=f,f=v),o(f)):t(f,v)}return m}var ro=rv(!0),sv=rv(!1),ec=Ir(null),tc=null,ks=null,kf=null;function zf(){kf=ks=tc=null}function Hf(n){var e=ec.current;gt(ec),n._currentValue=e}function Nd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ys(n,e){tc=n,kf=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(En=!0),n.firstContext=null)}function ei(n){var e=n._currentValue;if(kf!==n)if(n={context:n,memoizedValue:e,next:null},ks===null){if(tc===null)throw Error(oe(308));ks=n,tc.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return e}var Xr=null;function Vf(n){Xr===null?Xr=[n]:Xr.push(n)}function ov(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Vf(e)):(t.next=r.next,r.next=t),e.interleaved=t,ji(n,i)}function ji(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var or=!1;function Gf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function av(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(n,t)}return r=i.interleaved,r===null?(e.next=e,Vf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(n,t)}function Dl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rf(n,t)}}function Cp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function nc(n,e,t,i){var r=n.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,S=a;switch(h=e,p=t,S.tag){case 1:if(g=S.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=Mt({},d,h);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,n.lanes=o,n.memoizedState=d}}function Mp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ia={},Ci=Ir(Ia),fa=Ir(Ia),ha=Ir(Ia);function Qr(n){if(n===Ia)throw Error(oe(174));return n}function Wf(n,e){switch(ft(ha,e),ft(fa,n),ft(Ci,Ia),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=vd(e,n)}gt(Ci),ft(Ci,e)}function so(){gt(Ci),gt(fa),gt(ha)}function lv(n){Qr(ha.current);var e=Qr(Ci.current),t=vd(e,n.type);e!==t&&(ft(fa,n),ft(Ci,t))}function Xf(n){fa.current===n&&(gt(Ci),gt(fa))}var Et=Ir(0);function ic(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function Qf(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var Ll=Ki.ReactCurrentDispatcher,pu=Ki.ReactCurrentBatchConfig,es=0,Ct=null,Nt=null,Qt=null,rc=!1,Wo=!1,pa=0,jx=0;function tn(){throw Error(oe(321))}function jf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pi(n[t],e[t]))return!1;return!0}function qf(n,e,t,i,r,s){if(es=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=n===null||n.memoizedState===null?$x:Zx,n=t(i,r),Wo){s=0;do{if(Wo=!1,pa=0,25<=s)throw Error(oe(301));s+=1,Qt=Nt=null,e.updateQueue=null,Ll.current=Jx,n=t(i,r)}while(Wo)}if(Ll.current=sc,e=Nt!==null&&Nt.next!==null,es=0,Qt=Nt=Ct=null,rc=!1,e)throw Error(oe(300));return n}function Yf(){var n=pa!==0;return pa=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ct.memoizedState=Qt=n:Qt=Qt.next=n,Qt}function ti(){if(Nt===null){var n=Ct.alternate;n=n!==null?n.memoizedState:null}else n=Nt.next;var e=Qt===null?Ct.memoizedState:Qt.next;if(e!==null)Qt=e,Nt=n;else{if(n===null)throw Error(oe(310));Nt=n,n={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Qt===null?Ct.memoizedState=Qt=n:Qt=Qt.next=n}return Qt}function ma(n,e){return typeof e=="function"?e(n):e}function mu(n){var e=ti(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=Nt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((es&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ct.lanes|=u,ts|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ct.lanes|=s,ts|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function gu(n){var e=ti(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function cv(){}function uv(n,e){var t=Ct,i=ti(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,Kf(hv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(t.flags|=2048,ga(9,fv.bind(null,t,i,r,e),void 0,null),jt===null)throw Error(oe(349));es&30||dv(t,e,r)}return r}function dv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function fv(n,e,t,i){e.value=t,e.getSnapshot=i,pv(e)&&mv(n)}function hv(n,e,t){return t(function(){pv(e)&&mv(n)})}function pv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pi(n,t)}catch{return!0}}function mv(n){var e=ji(n,1);e!==null&&hi(e,n,1,-1)}function Tp(n){var e=vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},e.queue=n,n=n.dispatch=Kx.bind(null,Ct,n),[e.memoizedState,n]}function ga(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function gv(){return ti().memoizedState}function Fl(n,e,t,i){var r=vi();Ct.flags|=n,r.memoizedState=ga(1|e,t,void 0,i===void 0?null:i)}function bc(n,e,t,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&jf(i,o.deps)){r.memoizedState=ga(e,t,s,i);return}}Ct.flags|=n,r.memoizedState=ga(1|e,t,s,i)}function wp(n,e){return Fl(8390656,8,n,e)}function Kf(n,e){return bc(2048,8,n,e)}function vv(n,e){return bc(4,2,n,e)}function Sv(n,e){return bc(4,4,n,e)}function Av(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function xv(n,e,t){return t=t!=null?t.concat([n]):null,bc(4,4,Av.bind(null,e,n),t)}function $f(){}function yv(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function _v(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ev(n,e,t){return es&21?(pi(t,e)||(t=R0(),Ct.lanes|=t,ts|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=t)}function qx(n,e){var t=at;at=t!==0&&4>t?t:4,n(!0);var i=pu.transition;pu.transition={};try{n(!1),e()}finally{at=t,pu.transition=i}}function Cv(){return ti().memoizedState}function Yx(n,e,t){var i=Ar(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Mv(n))Tv(e,t);else if(t=ov(n,e,t,i),t!==null){var r=mn();hi(t,n,i,r),wv(t,e,i)}}function Kx(n,e,t){var i=Ar(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Mv(n))Tv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Vf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ov(n,e,r,i),t!==null&&(r=mn(),hi(t,n,i,r),wv(t,e,i))}}function Mv(n){var e=n.alternate;return n===Ct||e!==null&&e===Ct}function Tv(n,e){Wo=rc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Rf(n,t)}}var sc={readContext:ei,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},$x={readContext:ei,useCallback:function(n,e){return vi().memoizedState=[n,e===void 0?null:e],n},useContext:ei,useEffect:wp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Fl(4194308,4,Av.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Fl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Fl(4,2,n,e)},useMemo:function(n,e){var t=vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Yx.bind(null,Ct,n),[i.memoizedState,n]},useRef:function(n){var e=vi();return n={current:n},e.memoizedState=n},useState:Tp,useDebugValue:$f,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Tp(!1),e=n[0];return n=qx.bind(null,n[1]),vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ct,r=vi();if(At){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),jt===null)throw Error(oe(349));es&30||dv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,wp(hv.bind(null,i,s,n),[n]),i.flags|=2048,ga(9,fv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vi(),e=jt.identifierPrefix;if(At){var t=zi,i=ki;t=(i&~(1<<32-fi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=pa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Zx={readContext:ei,useCallback:yv,useContext:ei,useEffect:Kf,useImperativeHandle:xv,useInsertionEffect:vv,useLayoutEffect:Sv,useMemo:_v,useReducer:mu,useRef:gv,useState:function(){return mu(ma)},useDebugValue:$f,useDeferredValue:function(n){var e=ti();return Ev(e,Nt.memoizedState,n)},useTransition:function(){var n=mu(ma)[0],e=ti().memoizedState;return[n,e]},useMutableSource:cv,useSyncExternalStore:uv,useId:Cv,unstable_isNewReconciler:!1},Jx={readContext:ei,useCallback:yv,useContext:ei,useEffect:Kf,useImperativeHandle:xv,useInsertionEffect:vv,useLayoutEffect:Sv,useMemo:_v,useReducer:gu,useRef:gv,useState:function(){return gu(ma)},useDebugValue:$f,useDeferredValue:function(n){var e=ti();return Nt===null?e.memoizedState=n:Ev(e,Nt.memoizedState,n)},useTransition:function(){var n=gu(ma)[0],e=ti().memoizedState;return[n,e]},useMutableSource:cv,useSyncExternalStore:uv,useId:Cv,unstable_isNewReconciler:!1};function ai(n,e){if(n&&n.defaultProps){e=Mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Od(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Pc={isMounted:function(n){return(n=n._reactInternals)?ss(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=mn(),r=Ar(n),s=Vi(i,r);s.payload=e,t!=null&&(s.callback=t),e=vr(n,s,r),e!==null&&(hi(e,n,r,i),Dl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=mn(),r=Ar(n),s=Vi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=vr(n,s,r),e!==null&&(hi(e,n,r,i),Dl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=mn(),i=Ar(n),r=Vi(t,i);r.tag=2,e!=null&&(r.callback=e),e=vr(n,r,i),e!==null&&(hi(e,n,i,t),Dl(e,n,i))}};function Rp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(t,i)||!la(r,s):!0}function Rv(n,e,t){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=Mn(e)?Zr:ln.current,i=e.contextTypes,s=(i=i!=null)?no(n,r):Tr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Pc.enqueueReplaceState(e,e.state,null)}function kd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Gf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=Mn(e)?Zr:ln.current,r.context=no(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Od(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),nc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,e){try{var t="",i=e;do t+=wA(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function vu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function zd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function Iv(n,e,t){t=Vi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ac||(ac=!0,Kd=i),zd(n,e)},t}function bv(n,e,t){t=Vi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){zd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zd(n,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function bp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ey;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=py.bind(null,n,e,t),e.then(n,n))}function Pp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Dp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vi(-1,1),e.tag=2,vr(t,e,1))),t.lanes|=1),n)}var ty=Ki.ReactCurrentOwner,En=!1;function fn(n,e,t,i){e.child=n===null?sv(e,null,t,i):ro(e,n.child,t,i)}function Lp(n,e,t,i,r){t=t.render;var s=e.ref;return Ys(e,r),i=qf(n,e,t,i,s,r),t=Yf(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(At&&t&&Uf(e),e.flags|=1,fn(n,e,i,r),e.child)}function Fp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!sh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Pv(n,e,s,i,r)):(n=Ol(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:la,t(o,i)&&n.ref===e.ref)return qi(n,e,r)}return e.flags|=1,n=xr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Pv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(la(s,i)&&n.ref===e.ref)if(En=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(En=!0);else return e.lanes=n.lanes,qi(n,e,r)}return Hd(n,e,t,i,r)}function Dv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Hs,Dn),Dn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ft(Hs,Dn),Dn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ft(Hs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ft(Hs,Dn),Dn|=i;return fn(n,e,r,t),e.child}function Lv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Hd(n,e,t,i,r){var s=Mn(t)?Zr:ln.current;return s=no(e,s),Ys(e,r),t=qf(n,e,t,i,s,r),i=Yf(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(At&&i&&Uf(e),e.flags|=1,fn(n,e,t,r),e.child)}function Bp(n,e,t,i,r){if(Mn(t)){var s=!0;$l(e)}else s=!1;if(Ys(e,r),e.stateNode===null)Bl(n,e),Rv(e,t,i),kd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=Mn(t)?Zr:ln.current,c=no(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ip(e,o,i,c),or=!1;var h=e.memoizedState;o.state=h,nc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Cn.current||or?(typeof u=="function"&&(Od(e,t,u,i),l=e.memoizedState),(a=or||Rp(e,t,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,av(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=Mn(t)?Zr:ln.current,l=no(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Ip(e,o,i,l),or=!1,h=e.memoizedState,o.state=h,nc(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||Cn.current||or?(typeof p=="function"&&(Od(e,t,p,i),g=e.memoizedState),(c=or||Rp(e,t,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Vd(n,e,t,i,s,r)}function Vd(n,e,t,i,r,s){Lv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xp(e,t,!1),qi(n,e,s);i=e.stateNode,ty.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ro(e,n.child,null,s),e.child=ro(e,null,a,s)):fn(n,e,a,s),e.memoizedState=i.state,r&&xp(e,t,!0),e.child}function Fv(n){var e=n.stateNode;e.pendingContext?Ap(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ap(n,e.context,!1),Wf(n,e.containerInfo)}function Up(n,e,t,i,r){return io(),Of(r),e.flags|=256,fn(n,e,t,i),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Wd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bv(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ft(Et,r&1),n===null)return Ud(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,i,0,null),n=Yr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Wd(t),e.memoizedState=Gd,n):Zf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ny(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=Yr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Wd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Gd,i}return s=n.child,n=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Zf(n,e){return e=Fc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ja(n,e,t,i){return i!==null&&Of(i),ro(e,n.child,null,t),n=Zf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ny(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=vu(Error(oe(422))),ja(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,n.child,null,o),e.child.memoizedState=Wd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return ja(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=vu(s,i,void 0),ja(n,e,o,i)}if(a=(o&n.childLanes)!==0,En||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(n,r),hi(i,n,r,-1))}return rh(),i=vu(Error(oe(421))),ja(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=my.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ln=gr(r.nextSibling),Un=e,At=!0,ci=null,n!==null&&(Wn[Xn++]=ki,Wn[Xn++]=zi,Wn[Xn++]=Jr,ki=n.id,zi=n.overflow,Jr=e),e=Zf(e,i.children),e.flags|=4096,e)}function Np(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Nd(n.return,e,t)}function Su(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Uv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(n,e,i.children,t),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,t,e);else if(n.tag===19)Np(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ft(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ic(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Su(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ic(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Su(e,!0,t,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ts|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=xr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=xr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function iy(n,e,t){switch(e.tag){case 3:Fv(e),io();break;case 5:lv(e);break;case 1:Mn(e.type)&&$l(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(Et,Et.current&1),e.flags|=128,null):t&e.child.childLanes?Bv(n,e,t):(ft(Et,Et.current&1),n=qi(n,e,t),n!==null?n.sibling:null);ft(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Uv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Dv(n,e,t)}return qi(n,e,t)}var Nv,Xd,Ov,kv;Nv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Xd=function(){};Ov=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Qr(Ci.current);var s=null;switch(t){case"input":r=hd(n,r),i=hd(n,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=gd(n,r),i=gd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yl)}Sd(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};kv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ro(n,e){if(!At)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function nn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ry(n,e,t){var i=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return Mn(e.type)&&Kl(),nn(e),null;case 3:return i=e.stateNode,so(),gt(Cn),gt(ln),Qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Xa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Jd(ci),ci=null))),Xd(n,e),nn(e),null;case 5:Xf(e);var r=Qr(ha.current);if(t=e.type,n!==null&&e.stateNode!=null)Ov(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return nn(e),null}if(n=Qr(Ci.current),Xa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[da]=s,n=(e.mode&1)!==0,t){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)ht(Oo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Qh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":qh(i,s),ht("invalid",i)}Sd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wa(i.textContent,a,n),r=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(t){case"input":Ua(i),jh(i,s,!0);break;case"textarea":Ua(i),Yh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=h0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ai]=e,n[da]=i,Nv(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ad(t,i),t){case"dialog":ht("cancel",n),ht("close",n),r=i;break;case"iframe":case"object":case"embed":ht("load",n),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)ht(Oo[r],n);r=i;break;case"source":ht("error",n),r=i;break;case"img":case"image":case"link":ht("error",n),ht("load",n),r=i;break;case"details":ht("toggle",n),r=i;break;case"input":Qh(n,i),r=hd(n,i),ht("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),ht("invalid",n);break;case"textarea":qh(n,i),r=gd(n,i),ht("invalid",n);break;default:r=i}Sd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&na(n,l):typeof l=="number"&&na(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",n):l!=null&&_f(n,s,l,o))}switch(t){case"input":Ua(n),jh(n,i,!1);break;case"textarea":Ua(n),Yh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Mr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Xs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(n&&e.stateNode!=null)kv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=Qr(ha.current),Qr(Ci.current),Xa(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==t)&&(n=Un,n!==null))switch(n.tag){case 3:Wa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return nn(e),null;case 13:if(gt(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(At&&Ln!==null&&e.mode&1&&!(e.flags&128))iv(),io(),e.flags|=98560,s=!1;else if(s=Xa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Ai]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ci!==null&&(Jd(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Et.current&1?kt===0&&(kt=3):rh())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return so(),Xd(n,e),n===null&&ca(e.stateNode.containerInfo),nn(e),null;case 10:return Hf(e.type._context),nn(e),null;case 17:return Mn(e.type)&&Kl(),nn(e),null;case 19:if(gt(Et),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(kt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ic(n),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ft(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&Pt()>ao&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(n=ic(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return nn(e),null}else 2*Pt()-s.renderingStartTime>ao&&t!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,t=Et.current,ft(Et,i?t&1|2:t&1),e):(nn(e),null);case 22:case 23:return ih(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function sy(n,e){switch(Nf(e),e.tag){case 1:return Mn(e.type)&&Kl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return so(),gt(Cn),gt(ln),Qf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(gt(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));io()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return gt(Et),null;case 4:return so(),null;case 10:return Hf(e.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var qa=!1,on=!1,oy=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function zs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){wt(n,e,i)}else t.current=null}function Qd(n,e,t){try{t()}catch(i){wt(n,e,i)}}var Op=!1;function ay(n,e){if(Id=Ql,n=W0(),Bf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bd={focusedElem:n,selectionRange:t},Ql=!1,Ce=e;Ce!==null;)if(e=Ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ce=n;else for(;Ce!==null;){e=Ce;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:ai(e.type,S),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){wt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}return g=Op,Op=!1,g}function Xo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qd(e,t,s)}r=r.next}while(r!==i)}}function Dc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function jd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function zv(n){var e=n.alternate;e!==null&&(n.alternate=null,zv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ai],delete e[da],delete e[Ld],delete e[Gx],delete e[Wx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hv(n){return n.tag===5||n.tag===3||n.tag===4}function kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(n=n.child,n!==null))for(qd(n,e,t),n=n.sibling;n!==null;)qd(n,e,t),n=n.sibling}function Yd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Yd(n,e,t),n=n.sibling;n!==null;)Yd(n,e,t),n=n.sibling}var Yt=null,li=!1;function $i(n,e,t){for(t=t.child;t!==null;)Vv(n,e,t),t=t.sibling}function Vv(n,e,t){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Cc,t)}catch{}switch(t.tag){case 5:on||zs(t,e);case 6:var i=Yt,r=li;Yt=null,$i(n,e,t),Yt=i,li=r,Yt!==null&&(li?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(li?(n=Yt,t=t.stateNode,n.nodeType===8?du(n.parentNode,t):n.nodeType===1&&du(n,t),oa(n)):du(Yt,t.stateNode));break;case 4:i=Yt,r=li,Yt=t.stateNode.containerInfo,li=!0,$i(n,e,t),Yt=i,li=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qd(t,e,o),r=r.next}while(r!==i)}$i(n,e,t);break;case 1:if(!on&&(zs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){wt(t,e,a)}$i(n,e,t);break;case 21:$i(n,e,t);break;case 22:t.mode&1?(on=(i=on)||t.memoizedState!==null,$i(n,e,t),on=i):$i(n,e,t);break;default:$i(n,e,t)}}function zp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new oy),e.forEach(function(i){var r=gy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ii(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,li=!1;break e;case 3:Yt=a.stateNode.containerInfo,li=!0;break e;case 4:Yt=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(Yt===null)throw Error(oe(160));Vv(s,o,r),Yt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,n),e=e.sibling}function Gv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(e,n),gi(n),i&4){try{Xo(3,n,n.return),Dc(3,n)}catch(S){wt(n,n.return,S)}try{Xo(5,n,n.return)}catch(S){wt(n,n.return,S)}}break;case 1:ii(e,n),gi(n),i&512&&t!==null&&zs(t,t.return);break;case 5:if(ii(e,n),gi(n),i&512&&t!==null&&zs(t,t.return),n.flags&32){var r=n.stateNode;try{na(r,"")}catch(S){wt(n,n.return,S)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&d0(r,s),Ad(a,o);var c=Ad(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?g0(r,d):u==="dangerouslySetInnerHTML"?p0(r,d):u==="children"?na(r,d):_f(r,u,d,c)}switch(a){case"input":pd(r,s);break;case"textarea":f0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(S){wt(n,n.return,S)}}break;case 6:if(ii(e,n),gi(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(S){wt(n,n.return,S)}}break;case 3:if(ii(e,n),gi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(S){wt(n,n.return,S)}break;case 4:ii(e,n),gi(n);break;case 13:ii(e,n),gi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(th=Pt())),i&4&&zp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(on=(c=on)||u,ii(e,n),on=c):ii(e,n),gi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ce=n,u=n.child;u!==null;){for(d=Ce=u;Ce!==null;){switch(h=Ce,p=h.child,h.tag){case 0:case 11:case 14:case 15:Xo(4,h,h.return);break;case 1:zs(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){wt(i,t,S)}}break;case 5:zs(h,h.return);break;case 22:if(h.memoizedState!==null){Vp(d);continue}}p!==null?(p.return=h,Ce=p):Vp(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m0("display",o))}catch(S){wt(n,n.return,S)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){wt(n,n.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ii(e,n),gi(n),i&4&&zp(n);break;case 21:break;default:ii(e,n),gi(n)}}function gi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Hv(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=kp(n);Yd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=kp(n);qd(n,a,o);break;default:throw Error(oe(161))}}catch(l){wt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ly(n,e,t){Ce=n,Wv(n)}function Wv(n,e,t){for(var i=(n.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=qa;var c=on;if(qa=o,(on=l)&&!c)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?Gp(r):l!==null?(l.return=o,Ce=l):Gp(r);for(;s!==null;)Ce=s,Wv(s),s=s.sibling;Ce=r,qa=a,on=c}Hp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):Hp(n)}}function Hp(n){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ai(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Mp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&oa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}on||e.flags&512&&jd(e)}catch(h){wt(e,e.return,h)}}if(e===n){Ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function Vp(n){for(;Ce!==null;){var e=Ce;if(e===n){Ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function Gp(n){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Dc(4,e)}catch(l){wt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{jd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{jd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===n){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var cy=Math.ceil,oc=Ki.ReactCurrentDispatcher,Jf=Ki.ReactCurrentOwner,$n=Ki.ReactCurrentBatchConfig,et=0,jt=null,Ft=null,Zt=0,Dn=0,Hs=Ir(0),kt=0,va=null,ts=0,Lc=0,eh=0,Qo=null,_n=null,th=0,ao=1/0,Fi=null,ac=!1,Kd=null,Sr=null,Ya=!1,fr=null,lc=0,jo=0,$d=null,Ul=-1,Nl=0;function mn(){return et&6?Pt():Ul!==-1?Ul:Ul=Pt()}function Ar(n){return n.mode&1?et&2&&Zt!==0?Zt&-Zt:Qx.transition!==null?(Nl===0&&(Nl=R0()),Nl):(n=at,n!==0||(n=window.event,n=n===void 0?16:B0(n.type)),n):1}function hi(n,e,t,i){if(50<jo)throw jo=0,$d=null,Error(oe(185));Ta(n,t,i),(!(et&2)||n!==jt)&&(n===jt&&(!(et&2)&&(Lc|=t),kt===4&&ur(n,Zt)),Tn(n,i),t===1&&et===0&&!(e.mode&1)&&(ao=Pt()+500,Ic&&br()))}function Tn(n,e){var t=n.callbackNode;QA(n,e);var i=Xl(n,n===jt?Zt:0);if(i===0)t!==null&&Zh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Zh(t),e===1)n.tag===0?Xx(Wp.bind(null,n)):ev(Wp.bind(null,n)),Hx(function(){!(et&6)&&br()}),t=null;else{switch(I0(i)){case 1:t=wf;break;case 4:t=T0;break;case 16:t=Wl;break;case 536870912:t=w0;break;default:t=Wl}t=Zv(t,Xv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Xv(n,e){if(Ul=-1,Nl=0,et&6)throw Error(oe(327));var t=n.callbackNode;if(Ks()&&n.callbackNode!==t)return null;var i=Xl(n,n===jt?Zt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=cc(n,i);else{e=i;var r=et;et|=2;var s=jv();(jt!==n||Zt!==e)&&(Fi=null,ao=Pt()+500,qr(n,e));do try{fy();break}catch(a){Qv(n,a)}while(!0);zf(),oc.current=s,et=r,Ft!==null?e=0:(jt=null,Zt=0,e=kt)}if(e!==0){if(e===2&&(r=Cd(n),r!==0&&(i=r,e=Zd(n,r))),e===1)throw t=va,qr(n,0),ur(n,i),Tn(n,Pt()),t;if(e===6)ur(n,i);else{if(r=n.current.alternate,!(i&30)&&!uy(r)&&(e=cc(n,i),e===2&&(s=Cd(n),s!==0&&(i=s,e=Zd(n,s))),e===1))throw t=va,qr(n,0),ur(n,i),Tn(n,Pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Or(n,_n,Fi);break;case 3:if(ur(n,i),(i&130023424)===i&&(e=th+500-Pt(),10<e)){if(Xl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){mn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Dd(Or.bind(null,n,_n,Fi),e);break}Or(n,_n,Fi);break;case 4:if(ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cy(i/1960))-i,10<i){n.timeoutHandle=Dd(Or.bind(null,n,_n,Fi),i);break}Or(n,_n,Fi);break;case 5:Or(n,_n,Fi);break;default:throw Error(oe(329))}}}return Tn(n,Pt()),n.callbackNode===t?Xv.bind(null,n):null}function Zd(n,e){var t=Qo;return n.current.memoizedState.isDehydrated&&(qr(n,e).flags|=256),n=cc(n,e),n!==2&&(e=_n,_n=t,e!==null&&Jd(e)),n}function Jd(n){_n===null?_n=n:_n.push.apply(_n,n)}function uy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(n,e){for(e&=~eh,e&=~Lc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-fi(e),i=1<<t;n[t]=-1,e&=~i}}function Wp(n){if(et&6)throw Error(oe(327));Ks();var e=Xl(n,0);if(!(e&1))return Tn(n,Pt()),null;var t=cc(n,e);if(n.tag!==0&&t===2){var i=Cd(n);i!==0&&(e=i,t=Zd(n,i))}if(t===1)throw t=va,qr(n,0),ur(n,e),Tn(n,Pt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Or(n,_n,Fi),Tn(n,Pt()),null}function nh(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(ao=Pt()+500,Ic&&br())}}function ns(n){fr!==null&&fr.tag===0&&!(et&6)&&Ks();var e=et;et|=1;var t=$n.transition,i=at;try{if($n.transition=null,at=1,n)return n()}finally{at=i,$n.transition=t,et=e,!(et&6)&&br()}}function ih(){Dn=Hs.current,gt(Hs)}function qr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,zx(t)),Ft!==null)for(t=Ft.return;t!==null;){var i=t;switch(Nf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:so(),gt(Cn),gt(ln),Qf();break;case 5:Xf(i);break;case 4:so();break;case 13:gt(Et);break;case 19:gt(Et);break;case 10:Hf(i.type._context);break;case 22:case 23:ih()}t=t.return}if(jt=n,Ft=n=xr(n.current,null),Zt=Dn=e,kt=0,va=null,eh=Lc=ts=0,_n=Qo=null,Xr!==null){for(e=0;e<Xr.length;e++)if(t=Xr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Xr=null}return n}function Qv(n,e){do{var t=Ft;try{if(zf(),Ll.current=sc,rc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rc=!1}if(es=0,Qt=Nt=Ct=null,Wo=!1,pa=0,Jf.current=null,t===null||t.return===null){kt=1,va=e,Ft=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Pp(o);if(p!==null){p.flags&=-257,Dp(p,o,a,s,e),p.mode&1&&bp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){bp(s,c,e),rh();break e}l=Error(oe(426))}}else if(At&&a.mode&1){var m=Pp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Dp(m,o,a,s,e),Of(oo(l,a));break e}}s=l=oo(l,a),kt!==4&&(kt=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Iv(s,l,e);Cp(s,f);break e;case 1:a=l;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Sr===null||!Sr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=bv(s,a,e);Cp(s,x);break e}}s=s.return}while(s!==null)}Yv(t)}catch(_){e=_,Ft===t&&t!==null&&(Ft=t=t.return);continue}break}while(!0)}function jv(){var n=oc.current;return oc.current=sc,n===null?sc:n}function rh(){(kt===0||kt===3||kt===2)&&(kt=4),jt===null||!(ts&268435455)&&!(Lc&268435455)||ur(jt,Zt)}function cc(n,e){var t=et;et|=2;var i=jv();(jt!==n||Zt!==e)&&(Fi=null,qr(n,e));do try{dy();break}catch(r){Qv(n,r)}while(!0);if(zf(),et=t,oc.current=i,Ft!==null)throw Error(oe(261));return jt=null,Zt=0,kt}function dy(){for(;Ft!==null;)qv(Ft)}function fy(){for(;Ft!==null&&!NA();)qv(Ft)}function qv(n){var e=$v(n.alternate,n,Dn);n.memoizedProps=n.pendingProps,e===null?Yv(n):Ft=e,Jf.current=null}function Yv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=sy(t,e),t!==null){t.flags&=32767,Ft=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{kt=6,Ft=null;return}}else if(t=ry(t,e,Dn),t!==null){Ft=t;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=n}while(e!==null);kt===0&&(kt=5)}function Or(n,e,t){var i=at,r=$n.transition;try{$n.transition=null,at=1,hy(n,e,t,i)}finally{$n.transition=r,at=i}return null}function hy(n,e,t,i){do Ks();while(fr!==null);if(et&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(jA(n,s),n===jt&&(Ft=jt=null,Zt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ya||(Ya=!0,Zv(Wl,function(){return Ks(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=at;at=1;var a=et;et|=4,Jf.current=null,ay(n,t),Gv(t,n),Lx(bd),Ql=!!Id,bd=Id=null,n.current=t,ly(t),OA(),et=a,at=o,$n.transition=s}else n.current=t;if(Ya&&(Ya=!1,fr=n,lc=r),s=n.pendingLanes,s===0&&(Sr=null),HA(t.stateNode),Tn(n,Pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ac)throw ac=!1,n=Kd,Kd=null,n;return lc&1&&n.tag!==0&&Ks(),s=n.pendingLanes,s&1?n===$d?jo++:(jo=0,$d=n):jo=0,br(),null}function Ks(){if(fr!==null){var n=I0(lc),e=$n.transition,t=at;try{if($n.transition=null,at=16>n?16:n,fr===null)var i=!1;else{if(n=fr,fr=null,lc=0,et&6)throw Error(oe(331));var r=et;for(et|=4,Ce=n.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ce=c;Ce!==null;){var u=Ce;switch(u.tag){case 0:case 11:case 15:Xo(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ce=d;else for(;Ce!==null;){u=Ce;var h=u.sibling,p=u.return;if(zv(u),u===c){Ce=null;break}if(h!==null){h.return=p,Ce=h;break}Ce=p}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ce=f;break e}Ce=s.return}}var v=n.current;for(Ce=v;Ce!==null;){o=Ce;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Ce=A;else e:for(o=v;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(_){wt(a,a.return,_)}if(a===o){Ce=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ce=x;break e}Ce=a.return}}if(et=r,br(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Cc,n)}catch{}i=!0}return i}finally{at=t,$n.transition=e}}return!1}function Xp(n,e,t){e=oo(t,e),e=Iv(n,e,1),n=vr(n,e,1),e=mn(),n!==null&&(Ta(n,1,e),Tn(n,e))}function wt(n,e,t){if(n.tag===3)Xp(n,n,t);else for(;e!==null;){if(e.tag===3){Xp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){n=oo(t,n),n=bv(e,n,1),e=vr(e,n,1),n=mn(),e!==null&&(Ta(e,1,n),Tn(e,n));break}}e=e.return}}function py(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=mn(),n.pingedLanes|=n.suspendedLanes&t,jt===n&&(Zt&t)===t&&(kt===4||kt===3&&(Zt&130023424)===Zt&&500>Pt()-th?qr(n,0):eh|=t),Tn(n,e)}function Kv(n,e){e===0&&(n.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var t=mn();n=ji(n,e),n!==null&&(Ta(n,e,t),Tn(n,t))}function my(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Kv(n,t)}function gy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Kv(n,t)}var $v;$v=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Cn.current)En=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return En=!1,iy(n,e,t);En=!!(n.flags&131072)}else En=!1,At&&e.flags&1048576&&tv(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(n,e),n=e.pendingProps;var r=no(e,ln.current);Ys(e,t),r=qf(null,e,i,n,r,t);var s=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,$l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gf(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,kd(e,i,n,t),e=Vd(null,e,i,!0,s,t)):(e.tag=0,At&&s&&Uf(e),fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sy(i),n=ai(i,n),r){case 0:e=Hd(null,e,i,n,t);break e;case 1:e=Bp(null,e,i,n,t);break e;case 11:e=Lp(null,e,i,n,t);break e;case 14:e=Fp(null,e,i,ai(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Hd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Bp(n,e,i,r,t);case 3:e:{if(Fv(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,av(n,e),nc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(oe(423)),e),e=Up(n,e,i,t,r);break e}else if(i!==r){r=oo(Error(oe(424)),e),e=Up(n,e,i,t,r);break e}else for(Ln=gr(e.stateNode.containerInfo.firstChild),Un=e,At=!0,ci=null,t=sv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(io(),i===r){e=qi(n,e,t);break e}fn(n,e,i,t)}e=e.child}return e;case 5:return lv(e),n===null&&Ud(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Pd(i,r)?o=null:s!==null&&Pd(i,s)&&(e.flags|=32),Lv(n,e),fn(n,e,o,t),e.child;case 6:return n===null&&Ud(e),null;case 13:return Bv(n,e,t);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ro(e,null,i,t):fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Lp(n,e,i,r,t);case 7:return fn(n,e,e.pendingProps,t),e.child;case 8:return fn(n,e,e.pendingProps.children,t),e.child;case 12:return fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(ec,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!Cn.current){e=qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Nd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Nd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,t),r=ei(r),i=i(r),e.flags|=1,fn(n,e,i,t),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Fp(n,e,i,r,t);case 15:return Pv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Bl(n,e),e.tag=1,Mn(i)?(n=!0,$l(e)):n=!1,Ys(e,t),Rv(e,i,r),kd(e,i,r,t),Vd(null,e,i,!0,n,t);case 19:return Uv(n,e,t);case 22:return Dv(n,e,t)}throw Error(oe(156,e.tag))};function Zv(n,e){return M0(n,e)}function vy(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,e,t,i){return new vy(n,e,t,i)}function sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sy(n){if(typeof n=="function")return sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Cf)return 11;if(n===Mf)return 14}return 2}function xr(n,e){var t=n.alternate;return t===null?(t=Kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ol(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")sh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ps:return Yr(t.children,r,s,e);case Ef:o=8,r|=8;break;case cd:return n=Kn(12,t,e,r|2),n.elementType=cd,n.lanes=s,n;case ud:return n=Kn(13,t,e,r),n.elementType=ud,n.lanes=s,n;case dd:return n=Kn(19,t,e,r),n.elementType=dd,n.lanes=s,n;case l0:return Fc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case o0:o=10;break e;case a0:o=9;break e;case Cf:o=11;break e;case Mf:o=14;break e;case sr:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=Kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Yr(n,e,t,i){return n=Kn(7,n,i,e),n.lanes=t,n}function Fc(n,e,t,i){return n=Kn(22,n,i,e),n.elementType=l0,n.lanes=t,n.stateNode={isHidden:!1},n}function Au(n,e,t){return n=Kn(6,n,null,e),n.lanes=t,n}function xu(n,e,t){return e=Kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ay(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function oh(n,e,t,i,r,s,o,a,l){return n=new Ay(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(s),n}function xy(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Jv(n){if(!n)return Tr;n=n._reactInternals;e:{if(ss(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(Mn(t))return J0(n,t,e)}return e}function eS(n,e,t,i,r,s,o,a,l){return n=oh(t,i,!0,n,r,s,o,a,l),n.context=Jv(null),t=n.current,i=mn(),r=Ar(t),s=Vi(i,r),s.callback=e??null,vr(t,s,r),n.current.lanes=r,Ta(n,r,i),Tn(n,i),n}function Bc(n,e,t,i){var r=e.current,s=mn(),o=Ar(r);return t=Jv(t),e.context===null?e.context=t:e.pendingContext=t,e=Vi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=vr(r,e,o),n!==null&&(hi(n,r,o,s),Dl(n,r,o)),o}function uc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ah(n,e){Qp(n,e),(n=n.alternate)&&Qp(n,e)}function yy(){return null}var tS=typeof reportError=="function"?reportError:function(n){console.error(n)};function lh(n){this._internalRoot=n}Uc.prototype.render=lh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));Bc(n,e,null,null)};Uc.prototype.unmount=lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ns(function(){Bc(null,n,null,null)}),e[Qi]=null}};function Uc(n){this._internalRoot=n}Uc.prototype.unstable_scheduleHydration=function(n){if(n){var e=D0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cr.length&&e!==0&&e<cr[t].priority;t++);cr.splice(t,0,n),t===0&&F0(n)}};function ch(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function _y(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=uc(o);s.call(c)}}var o=eS(e,i,n,0,null,!1,!1,"",jp);return n._reactRootContainer=o,n[Qi]=o.current,ca(n.nodeType===8?n.parentNode:n),ns(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=uc(l);a.call(c)}}var l=oh(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=l,n[Qi]=l.current,ca(n.nodeType===8?n.parentNode:n),ns(function(){Bc(e,l,t,i)}),l}function Oc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=uc(o);a.call(l)}}Bc(e,o,n,r)}else o=_y(t,e,n,r,i);return uc(o)}b0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=No(e.pendingLanes);t!==0&&(Rf(e,t|1),Tn(e,Pt()),!(et&6)&&(ao=Pt()+500,br()))}break;case 13:ns(function(){var i=ji(n,1);if(i!==null){var r=mn();hi(i,n,1,r)}}),ah(n,1)}};If=function(n){if(n.tag===13){var e=ji(n,134217728);if(e!==null){var t=mn();hi(e,n,134217728,t)}ah(n,134217728)}};P0=function(n){if(n.tag===13){var e=Ar(n),t=ji(n,e);if(t!==null){var i=mn();hi(t,n,e,i)}ah(n,e)}};D0=function(){return at};L0=function(n,e){var t=at;try{return at=n,e()}finally{at=t}};yd=function(n,e,t){switch(e){case"input":if(pd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Rc(i);if(!r)throw Error(oe(90));u0(i),pd(i,r)}}}break;case"textarea":f0(n,t);break;case"select":e=t.value,e!=null&&Xs(n,!!t.multiple,e,!1)}};A0=nh;x0=ns;var Ey={usingClientEntryPoint:!1,Events:[Ra,Bs,Rc,v0,S0,nh]},Io={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cy={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=E0(n),n===null?null:n.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Cc=Ka.inject(Cy),Ei=Ka}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;kn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ch(e))throw Error(oe(200));return xy(n,e,null,t)};kn.createRoot=function(n,e){if(!ch(n))throw Error(oe(299));var t=!1,i="",r=tS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=oh(n,1,!1,null,null,t,!1,i,r),n[Qi]=e.current,ca(n.nodeType===8?n.parentNode:n),new lh(e)};kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=E0(e),n=n===null?null:n.stateNode,n};kn.flushSync=function(n){return ns(n)};kn.hydrate=function(n,e,t){if(!Nc(e))throw Error(oe(200));return Oc(null,n,e,!0,t)};kn.hydrateRoot=function(n,e,t){if(!ch(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=tS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=eS(e,null,n,1,t??null,r,!1,s,o),n[Qi]=e.current,ca(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Uc(e)};kn.render=function(n,e,t){if(!Nc(e))throw Error(oe(200));return Oc(null,n,e,!1,t)};kn.unmountComponentAtNode=function(n){if(!Nc(n))throw Error(oe(40));return n._reactRootContainer?(ns(function(){Oc(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1};kn.unstable_batchedUpdates=nh;kn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Nc(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return Oc(n,e,t,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function nS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nS)}catch(n){console.error(n)}}nS(),n0.exports=kn;var My=n0.exports,qp=My;ad.createRoot=qp.createRoot,ad.hydrateRoot=qp.hydrateRoot;/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ty={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),So=(n,e)=>{const t=Ot.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>Ot.createElement("svg",{ref:u,...Ty,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${wy(n)}`,a].join(" "),...c},[...e.map(([d,h])=>Ot.createElement(d,h)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=So("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=So("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=So("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=So("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=So("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=So("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);function Ly({onUploadSuccess:n}){const[e,t]=Ot.useState(!1),[i,r]=Ot.useState(null),[s,o]=Ot.useState(!1),[a,l]=Ot.useState(null),c=Ot.useRef(null),u=m=>{m.preventDefault(),m.stopPropagation(),m.type==="dragenter"||m.type==="dragover"?t(!0):m.type==="dragleave"&&t(!1)},d=m=>{m.preventDefault(),m.stopPropagation(),t(!1),m.dataTransfer.files&&m.dataTransfer.files[0]&&p(m.dataTransfer.files[0])},h=m=>{m.target.files&&m.target.files[0]&&p(m.target.files[0])},p=m=>{l(null),m.type.startsWith("video/")||m.name.endsWith(".mp4")||m.name.endsWith(".mov")?r(m):(l("Please upload an MP4 or MOV video file."),r(null))},g=()=>{c.current.click()},S=async()=>{if(!i)return;o(!0),l(null);const m=new FormData;m.append("file",i);try{const f=await fetch("/api/upload",{method:"POST",body:m});if(!f.ok)throw new Error(`Upload failed with status ${f.status}`);const v=await f.json();n(v.job_id)}catch(f){console.error("Upload error:",f),l("Failed to upload video to the server. Make sure the backend is running.")}finally{o(!1)}};return le.jsxs("div",{className:"card",style:{maxWidth:"600px",margin:"0 auto"},children:[le.jsxs("div",{className:`dropzone ${e?"active":""}`,onDragEnter:u,onDragOver:u,onDragLeave:u,onDrop:d,children:[le.jsx("input",{ref:c,type:"file",style:{display:"none"},accept:"video/*,.mp4,.mov",onChange:h,disabled:s}),le.jsx("div",{className:"dropzone-icon",children:le.jsx(Py,{size:48})}),i?le.jsxs("div",{children:[le.jsxs("p",{style:{fontWeight:600,color:"var(--text-primary)",marginBottom:"0.25rem"},children:["Selected: ",i.name]}),le.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:["(",(i.size/(1024*1024)).toFixed(2)," MB)"]})]}):le.jsxs("div",{children:[le.jsx("p",{style:{fontWeight:500,marginBottom:"0.5rem"},children:"Drag and drop your smartphone video here"}),le.jsx("p",{className:"file-input-label",style:{fontSize:"0.85rem",opacity:.8},children:"Supports MP4 or MOV formats"})]}),!s&&le.jsx("button",{type:"button",className:"browse-btn",onClick:g,children:i?"Choose Another Video":"Browse Video"})]}),a&&le.jsxs("div",{style:{marginTop:"1.5rem",display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--color-error)",fontSize:"0.9rem"},children:[le.jsx(Ry,{size:18}),le.jsx("span",{children:a})]}),i&&le.jsx("button",{onClick:S,disabled:s,className:"browse-btn",style:{width:"100%",marginTop:"1.5rem",borderRadius:"12px",background:s?"#4a3f65":"linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)",boxShadow:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem"},children:s?le.jsxs(le.Fragment,{children:[le.jsx("div",{className:"spinner"}),le.jsx("span",{children:"Uploading Video..."})]}):le.jsxs(le.Fragment,{children:[le.jsx(Dy,{size:18}),le.jsx("span",{children:"Reconstruct in 3D"})]})})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="160",ls={ROTATE:0,DOLLY:1,PAN:2},cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fy=0,Kp=1,By=2,iS=1,Uy=2,Li=3,Mi=0,wn=1,qn=2,yr=0,_r=1,$p=2,Zp=3,Jp=4,rS=5,zr=100,Ny=101,Oy=102,em=103,tm=104,ky=200,zy=201,Hy=202,Vy=203,Sa=204,Aa=205,Gy=206,Wy=207,Xy=208,Qy=209,jy=210,qy=211,Yy=212,Ky=213,$y=214,Zy=0,Jy=1,e_=2,dc=3,t_=4,n_=5,i_=6,r_=7,sS=0,s_=1,o_=2,Er=0,a_=1,l_=2,c_=3,u_=4,d_=5,f_=6,oS=300,lo=301,co=302,ef=303,tf=304,kc=306,nf=1e3,di=1001,rf=1002,Kt=1003,nm=1004,yu=1005,Qn=1006,h_=1007,xa=1008,Gi=1009,p_=1010,m_=1011,dh=1012,aS=1013,Fn=1014,xi=1015,uo=1016,lS=1017,cS=1018,Kr=1020,g_=1021,pn=1023,v_=1024,S_=1025,Cr=1026,fo=1027,A_=1028,fh=1029,x_=1030,uS=1031,qo=1033,_u=33776,Eu=33777,Cu=33778,Mu=33779,im=35840,rm=35841,sm=35842,om=35843,dS=36196,am=37492,lm=37496,cm=37808,um=37809,dm=37810,fm=37811,hm=37812,pm=37813,mm=37814,gm=37815,vm=37816,Sm=37817,Am=37818,xm=37819,ym=37820,_m=37821,Tu=36492,Em=36494,Cm=36495,y_=36283,Mm=36284,Tm=36285,wm=36286,fS=3e3,$r=3001,__=3200,E_=3201,C_=0,M_=1,Yn="",$t="srgb",Yi="srgb-linear",hh="display-p3",zc="display-p3-linear",fc="linear",pt="srgb",hc="rec709",pc="p3",us=7680,Rm=519,T_=512,w_=513,R_=514,hS=515,I_=516,b_=517,P_=518,D_=519,Im=35044,L_=35048,bm="300 es",sf=1035,Hi=2e3,mc=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,of=180/Math.PI;function ba(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function F_(n,e){return(n%e+e)%e}function wu(n,e,t){return(1-t)*n+t*e}function Pm(n){return(n&n-1)===0&&n!==0}function af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pS={DEG2RAD:kl};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],S=r[0],m=r[3],f=r[6],v=r[1],A=r[4],x=r[7],_=r[2],C=r[5],y=r[8];return s[0]=o*S+a*v+l*_,s[3]=o*m+a*A+l*C,s[6]=o*f+a*x+l*y,s[1]=c*S+u*v+d*_,s[4]=c*m+u*A+d*C,s[7]=c*f+u*x+d*y,s[2]=h*S+p*v+g*_,s[5]=h*m+p*A+g*C,s[8]=h*f+p*x+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new ze;function mS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B_(){const n=gc("canvas");return n.style.display="block",n}const Dm={};function Yo(n){n in Dm||(Dm[n]=!0,console.warn(n))}const Lm=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fm=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$a={[Yi]:{transfer:fc,primaries:hc,toReference:n=>n,fromReference:n=>n},[$t]:{transfer:pt,primaries:hc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zc]:{transfer:fc,primaries:pc,toReference:n=>n.applyMatrix3(Fm),fromReference:n=>n.applyMatrix3(Lm)},[hh]:{transfer:pt,primaries:pc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fm),fromReference:n=>n.applyMatrix3(Lm).convertLinearToSRGB()}},U_=new Set([Yi,zc]),ct={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!U_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$a[e].toReference,r=$a[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $a[n].primaries},getTransfer:function(n){return n===Yn?fc:$a[n].transfer}};function $s(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Iu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class gS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=gc("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($s(t[i]/255)*255):t[i]=$s(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N_=0;class vS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ba(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bu(r[o].image)):s.push(bu(r[o]))}else s=bu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O_=0;class Rn extends os{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=di,r=di,s=Qn,o=xa,a=pn,l=Gi,c=Rn.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=ba(),this.name="",this.source=new vS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$r?$t:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?$r:fS}set encoding(e){Yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$r?$t:Yn}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=oS;Rn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(p+1)/2,_=(f+1)/2,C=(u+h)/4,y=(d+S)/4,w=(g+m)/4;return A>x&&A>_?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=C/i,s=y/i):x>_?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=w/r):_<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(_),i=y/s,r=w/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-S)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends os{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$r?$t:Yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends k_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class SS extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class z_ extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=S;return}if(d!==S||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*S,v=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const _=Math.sqrt(A),C=Math.atan2(_,f*v);m=Math.sin(m*C)/_,a=Math.sin(a*C)/_}const x=a*v;if(l=l*m+h*x,c=c*m+p*x,u=u*m+g*x,d=d*m+S*x,m===1-a){const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new P,Bm=new xt;class yi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Ja.subVectors(this.max,Po),fs.subVectors(e.a,Po),hs.subVectors(e.b,Po),ps.subVectors(e.c,Po),Zi.subVectors(hs,fs),Ji.subVectors(ps,hs),Lr.subVectors(fs,ps);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Lr.z,Lr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Lr.z,0,-Lr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Lr.y,Lr.x,0];return!Du(t,fs,hs,ps,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Du(t,fs,hs,ps,Ja))?!1:(el.crossVectors(Zi,Ji),t=[el.x,el.y,el.z],Du(t,fs,hs,ps,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new P,new P,new P,new P,new P,new P,new P,new P],ri=new P,Za=new yi,fs=new P,hs=new P,ps=new P,Zi=new P,Ji=new P,Lr=new P,Po=new P,Ja=new P,el=new P,Fr=new P;function Du(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const H_=new yi,Do=new P,Lu=new P;class ph{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):H_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const t=Do.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Lu)),this.expandByPoint(Do.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new P,Fu=new P,tl=new P,er=new P,Bu=new P,nl=new P,Uu=new P;let AS=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fu.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Fu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(tl),a=er.dot(this.direction),l=-er.dot(tl),c=er.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const S=1/u;d*=S,h*=S,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fu).addScaledVector(tl,h),p}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,r,s){Bu.subVectors(t,e),nl.subVectors(i,e),Uu.crossVectors(Bu,nl);let o=this.direction.dot(Uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(er,nl));if(l<0)return null;const c=a*this.direction.dot(Bu.cross(er));if(c<0||l+c>o)return null;const u=-a*er.dot(Uu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class He{constructor(e,t,i,r,s,o,a,l,c,u,d,h,p,g,S,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,p,g,S,m)}set(e,t,i,r,s,o,a,l,c,u,d,h,p,g,S,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,S=c*d;t[0]=h+S*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,S=c*d;t[0]=h-S*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+S,t[1]=l*d,t[5]=S*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-S*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+S,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V_,e,G_)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),tr.crossVectors(i,bn),tr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),tr.crossVectors(i,bn)),tr.normalize(),il.crossVectors(bn,tr),r[0]=tr.x,r[4]=il.x,r[8]=bn.x,r[1]=tr.y,r[5]=il.y,r[9]=bn.y,r[2]=tr.z,r[6]=il.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],S=i[6],m=i[10],f=i[14],v=i[3],A=i[7],x=i[11],_=i[15],C=r[0],y=r[4],w=r[8],E=r[12],M=r[1],D=r[5],U=r[9],z=r[13],I=r[2],L=r[6],O=r[10],V=r[14],F=r[3],B=r[7],H=r[11],$=r[15];return s[0]=o*C+a*M+l*I+c*F,s[4]=o*y+a*D+l*L+c*B,s[8]=o*w+a*U+l*O+c*H,s[12]=o*E+a*z+l*V+c*$,s[1]=u*C+d*M+h*I+p*F,s[5]=u*y+d*D+h*L+p*B,s[9]=u*w+d*U+h*O+p*H,s[13]=u*E+d*z+h*V+p*$,s[2]=g*C+S*M+m*I+f*F,s[6]=g*y+S*D+m*L+f*B,s[10]=g*w+S*U+m*O+f*H,s[14]=g*E+S*z+m*V+f*$,s[3]=v*C+A*M+x*I+_*F,s[7]=v*y+A*D+x*L+_*B,s[11]=v*w+A*U+x*O+_*H,s[15]=v*E+A*z+x*V+_*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],S=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],S=e[13],m=e[14],f=e[15],v=d*m*c-S*h*c+S*l*p-a*m*p-d*l*f+a*h*f,A=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,x=u*S*c-g*d*c+g*a*p-o*S*p-u*a*f+o*d*f,_=g*d*l-u*S*l-g*a*h+o*S*h+u*a*m-o*d*m,C=t*v+i*A+r*x+s*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/C;return e[0]=v*y,e[1]=(S*h*s-d*m*s-S*r*p+i*m*p+d*r*f-i*h*f)*y,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*f+i*l*f)*y,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*y,e[4]=A*y,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*y,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*y,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*y,e[8]=x*y,e[9]=(g*d*s-u*S*s-g*i*p+t*S*p+u*i*f-t*d*f)*y,e[10]=(o*S*s-g*a*s+g*i*c-t*S*c-o*i*f+t*a*f)*y,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*y,e[12]=_*y,e[13]=(u*S*r-g*d*r+g*i*h-t*S*h-u*i*m+t*d*m)*y,e[14]=(g*a*r-o*S*r-g*i*l+t*S*l+o*i*m-t*a*m)*y,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,S=o*u,m=o*d,f=a*d,v=l*c,A=l*u,x=l*d,_=i.x,C=i.y,y=i.z;return r[0]=(1-(S+f))*_,r[1]=(p+x)*_,r[2]=(g-A)*_,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(h+f))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+A)*y,r[9]=(m-v)*y,r[10]=(1-(h+S))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ms.set(r[0],r[1],r[2]).length();const o=ms.set(r[4],r[5],r[6]).length(),a=ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/o,d=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Hi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Hi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,S;if(a===Hi)g=(o+s)*d,S=-2*d;else if(a===mc)g=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ms=new P,si=new He,V_=new P(0,0,0),G_=new P(1,1,1),tr=new P,il=new P,bn=new P,Um=new He,Nm=new xt;class Hc{constructor(e=0,t=0,i=0,r=Hc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hc.DEFAULT_ORDER="XYZ";class xS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const Om=new P,gs=new xt,Ii=new He,rl=new P,Lo=new P,X_=new P,Q_=new xt,km=new P(1,0,0),zm=new P(0,1,0),Hm=new P(0,0,1),j_={type:"added"},q_={type:"removed"};class zt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new P,t=new Hc,i=new xt,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new ze}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rl.copy(e):rl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Lo,rl,this.up):Ii.lookAt(rl,Lo,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Ii),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(j_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new P(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new P,bi=new P,Nu=new P,Pi=new P,vs=new P,Ss=new P,Vm=new P,Ou=new P,ku=new P,zu=new P;let sl=!1;class ui{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),bi.subVectors(i,t),Nu.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(bi),l=oi.dot(Nu),c=bi.dot(bi),u=bi.dot(Nu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,t,i,r,s,o,a,l){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),bi.subVectors(e,t),oi.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),oi.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),ui.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;vs.subVectors(r,i),Ss.subVectors(s,i),Ou.subVectors(e,i);const l=vs.dot(Ou),c=Ss.dot(Ou);if(l<=0&&c<=0)return t.copy(i);ku.subVectors(e,r);const u=vs.dot(ku),d=Ss.dot(ku);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(vs,o);zu.subVectors(e,s);const p=vs.dot(zu),g=Ss.dot(zu);if(g>=0&&p<=g)return t.copy(s);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ss,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Vm.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Vm,a);const f=1/(m+S+h);return o=S*f,a=h*f,t.copy(i).addScaledVector(vs,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Hu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=F_(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Hu(o,s,e+1/3),this.g=Hu(o,s,e),this.b=Hu(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=yS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=Iu(e.r),this.g=Iu(e.g),this.b=Iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ct.fromWorkingColorSpace(sn.copy(this),e),Math.round(an(sn.r*255,0,255))*65536+Math.round(an(sn.g*255,0,255))*256+Math.round(an(sn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,s=sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=$t){ct.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(ol);const i=wu(nr.h,ol.h,t),r=wu(nr.s,ol.s,t),s=wu(nr.l,ol.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new nt;nt.NAMES=yS;let Y_=0;class Vc extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=_r,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Aa,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sa&&(i.blendSrc=this.blendSrc),this.blendDst!==Aa&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class is extends Vc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ni=K_();function K_(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function $_(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=an(n,-65504,65504),Ni.floatView[0]=n;const e=Ni.uint32View[0],t=e>>23&511;return Ni.baseTable[t]+((e&8388607)>>Ni.shiftTable[t])}function Z_(n){const e=n>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[e]+(n&1023)]+Ni.exponentTable[e],Ni.floatView[0]}const ya={toHalfFloat:$_,fromHalfFloat:Z_},Dt=new P,al=new we;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Im,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Im&&(e.usage=this.usage),e}}class _S extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ES extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let J_=0;const Vn=new He,Vu=new zt,As=new P,Pn=new yi,Fo=new yi,Xt=new P;class ni extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mS(e)?ES:_S)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ph);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Pn.min,Fo.min),Pn.expandByPoint(Xt),Xt.addVectors(Pn.max,Fo.max),Pn.expandByPoint(Xt)):(Pn.expandByPoint(Fo.min),Pn.expandByPoint(Fo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Xt.add(As)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new P,u[M]=new P;const d=new P,h=new P,p=new P,g=new we,S=new we,m=new we,f=new P,v=new P;function A(M,D,U){d.fromArray(r,M*3),h.fromArray(r,D*3),p.fromArray(r,U*3),g.fromArray(o,M*2),S.fromArray(o,D*2),m.fromArray(o,U*2),h.sub(d),p.sub(d),S.sub(g),m.sub(g);const z=1/(S.x*m.y-m.x*S.y);isFinite(z)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-S.y).multiplyScalar(z),v.copy(p).multiplyScalar(S.x).addScaledVector(h,-m.x).multiplyScalar(z),c[M].add(f),c[D].add(f),c[U].add(f),u[M].add(v),u[D].add(v),u[U].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let M=0,D=x.length;M<D;++M){const U=x[M],z=U.start,I=U.count;for(let L=z,O=z+I;L<O;L+=3)A(i[L+0],i[L+1],i[L+2])}const _=new P,C=new P,y=new P,w=new P;function E(M){y.fromArray(s,M*3),w.copy(y);const D=c[M];_.copy(D),_.sub(y.multiplyScalar(y.dot(D))).normalize(),C.crossVectors(w,D);const z=C.dot(u[M])<0?-1:1;l[M*4]=_.x,l[M*4+1]=_.y,l[M*4+2]=_.z,l[M*4+3]=z}for(let M=0,D=x.length;M<D;++M){const U=x[M],z=U.start,I=U.count;for(let L=z,O=z+I;L<O;L+=3)E(i[L+0]),E(i[L+1]),E(i[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Zn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new He,Br=new AS,ll=new ph,Wm=new P,xs=new P,ys=new P,_s=new P,Gu=new P,cl=new P,ul=new we,dl=new we,fl=new we,Xm=new P,Qm=new P,jm=new P,hl=new P,pl=new P;class Lt extends zt{constructor(e=new ni,t=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Gu.fromBufferAttribute(d,e),o?cl.addScaledVector(Gu,u):cl.addScaledVector(Gu.sub(t),u))}t.add(cl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(ll.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ll,Wm)===null||Br.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,_=A;x<_;x+=3){const C=a.getX(x),y=a.getX(x+1),w=a.getX(x+2);r=ml(this,f,e,i,c,u,d,C,y,w),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){const v=a.getX(m),A=a.getX(m+1),x=a.getX(m+2);r=ml(this,o,e,i,c,u,d,v,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,_=A;x<_;x+=3){const C=x,y=x+1,w=x+2;r=ml(this,f,e,i,c,u,d,C,y,w),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){const v=m,A=m+1,x=m+2;r=ml(this,o,e,i,c,u,d,v,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function eE(n,e,t,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mi,a),l===null)return null;pl.copy(a),pl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:n}}function ml(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,xs),n.getVertexPosition(l,ys),n.getVertexPosition(c,_s);const u=eE(n,e,t,i,xs,ys,_s,hl);if(u){r&&(ul.fromBufferAttribute(r,a),dl.fromBufferAttribute(r,l),fl.fromBufferAttribute(r,c),u.uv=ui.getInterpolation(hl,xs,ys,_s,ul,dl,fl,new we)),s&&(ul.fromBufferAttribute(s,a),dl.fromBufferAttribute(s,l),fl.fromBufferAttribute(s,c),u.uv1=ui.getInterpolation(hl,xs,ys,_s,ul,dl,fl,new we),u.uv2=u.uv1),o&&(Xm.fromBufferAttribute(o,a),Qm.fromBufferAttribute(o,l),jm.fromBufferAttribute(o,c),u.normal=ui.getInterpolation(hl,xs,ys,_s,Xm,Qm,jm,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};ui.getNormal(xs,ys,_s,d.normal),u.face=d}return u}class Ao extends ni{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(d,2));function g(S,m,f,v,A,x,_,C,y,w,E){const M=x/y,D=_/w,U=x/2,z=_/2,I=C/2,L=y+1,O=w+1;let V=0,F=0;const B=new P;for(let H=0;H<O;H++){const $=H*D-z;for(let J=0;J<L;J++){const X=J*M-U;B[S]=X*v,B[m]=$*A,B[f]=I,c.push(B.x,B.y,B.z),B[S]=0,B[m]=0,B[f]=C>0?1:-1,u.push(B.x,B.y,B.z),d.push(J/y),d.push(1-H/w),V+=1}}for(let H=0;H<w;H++)for(let $=0;$<y;$++){const J=h+$+L*H,X=h+$+L*(H+1),Y=h+($+1)+L*(H+1),ee=h+($+1)+L*H;l.push(J,X,ee),l.push(X,Y,ee),F+=6}a.addGroup(p,F,E),p+=F,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=ho(n[t]);for(const r in i)e[r]=i[r]}return e}function tE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function CS(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const nE={clone:ho,merge:dn};var iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Vc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=rE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=tE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class MS extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends MS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Cs=1;class sE extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(Es,Cs,e,t);r.layers=this.layers,this.add(r);const s=new jn(Es,Cs,e,t);s.layers=this.layers,this.add(s);const o=new jn(Es,Cs,e,t);o.layers=this.layers,this.add(o);const a=new jn(Es,Cs,e,t);a.layers=this.layers,this.add(a);const l=new jn(Es,Cs,e,t);l.layers=this.layers,this.add(l);const c=new jn(Es,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class TS extends Rn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oE extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$r?$t:Yn),this.texture=new TS(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ao(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:yr});s.uniforms.tEquirect.value=t;const o=new Lt(r,s),a=t.minFilter;return t.minFilter===xa&&(t.minFilter=Qn),new sE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wu=new P,aE=new P,lE=new ze;class ar{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wu.subVectors(i,t).cross(aE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lE.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ph,gl=new P;class wS{constructor(e=new ar,t=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],S=r[10],m=r[11],f=r[12],v=r[13],A=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-p,x-f).normalize(),i[1].setComponents(l+s,h+c,m+p,x+f).normalize(),i[2].setComponents(l+o,h+u,m+g,x+v).normalize(),i[3].setComponents(l-o,h-u,m-g,x-v).normalize(),i[4].setComponents(l-a,h-d,m-S,x-A).normalize(),t===Hi)i[5].setComponents(l+a,h+d,m+S,x+A).normalize();else if(t===mc)i[5].setComponents(a,d,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function RS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let S;if(d instanceof Float32Array)S=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=n.SHORT;else if(d instanceof Uint32Array)S=n.UNSIGNED_INT;else if(d instanceof Int32Array)S=n.INT;else if(d instanceof Int8Array)S=n.BYTE;else if(d instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let S=0,m=g.length;S<m;S++){const f=g[S];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class _a extends ni{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],S=[],m=[];for(let f=0;f<u;f++){const v=f*h-o;for(let A=0;A<c;A++){const x=A*d-s;g.push(x,-v,0),S.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const A=v+c*f,x=v+c*(f+1),_=v+1+c*(f+1),C=v+1+c*f;p.push(A,x,C),p.push(x,_,C)}this.setIndex(p),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_E=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zE="gl_FragColor = linearToOutputTexel( gl_FragColor );",HE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$E=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_C=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,QC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$C=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:uE,alphahash_pars_fragment:dE,alphamap_fragment:fE,alphamap_pars_fragment:hE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:vE,batching_pars_vertex:SE,batching_vertex:AE,begin_vertex:xE,beginnormal_vertex:yE,bsdfs:_E,iridescence_fragment:EE,bumpmap_pars_fragment:CE,clipping_planes_fragment:ME,clipping_planes_pars_fragment:TE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:RE,color_fragment:IE,color_pars_fragment:bE,color_pars_vertex:PE,color_vertex:DE,common:LE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:BE,displacementmap_pars_vertex:UE,displacementmap_vertex:NE,emissivemap_fragment:OE,emissivemap_pars_fragment:kE,colorspace_fragment:zE,colorspace_pars_fragment:HE,envmap_fragment:VE,envmap_common_pars_fragment:GE,envmap_pars_fragment:WE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:iC,envmap_vertex:QE,fog_vertex:jE,fog_pars_vertex:qE,fog_fragment:YE,fog_pars_fragment:KE,gradientmap_pars_fragment:$E,lightmap_fragment:ZE,lightmap_pars_fragment:JE,lights_lambert_fragment:eC,lights_lambert_pars_fragment:tC,lights_pars_begin:nC,lights_toon_fragment:rC,lights_toon_pars_fragment:sC,lights_phong_fragment:oC,lights_phong_pars_fragment:aC,lights_physical_fragment:lC,lights_physical_pars_fragment:cC,lights_fragment_begin:uC,lights_fragment_maps:dC,lights_fragment_end:fC,logdepthbuf_fragment:hC,logdepthbuf_pars_fragment:pC,logdepthbuf_pars_vertex:mC,logdepthbuf_vertex:gC,map_fragment:vC,map_pars_fragment:SC,map_particle_fragment:AC,map_particle_pars_fragment:xC,metalnessmap_fragment:yC,metalnessmap_pars_fragment:_C,morphcolor_vertex:EC,morphnormal_vertex:CC,morphtarget_pars_vertex:MC,morphtarget_vertex:TC,normal_fragment_begin:wC,normal_fragment_maps:RC,normal_pars_fragment:IC,normal_pars_vertex:bC,normal_vertex:PC,normalmap_pars_fragment:DC,clearcoat_normal_fragment_begin:LC,clearcoat_normal_fragment_maps:FC,clearcoat_pars_fragment:BC,iridescence_pars_fragment:UC,opaque_fragment:NC,packing:OC,premultiplied_alpha_fragment:kC,project_vertex:zC,dithering_fragment:HC,dithering_pars_fragment:VC,roughnessmap_fragment:GC,roughnessmap_pars_fragment:WC,shadowmap_pars_fragment:XC,shadowmap_pars_vertex:QC,shadowmap_vertex:jC,shadowmask_pars_fragment:qC,skinbase_vertex:YC,skinning_pars_vertex:KC,skinning_vertex:$C,skinnormal_vertex:ZC,specularmap_fragment:JC,specularmap_pars_fragment:eM,tonemapping_fragment:tM,tonemapping_pars_fragment:nM,transmission_fragment:iM,transmission_pars_fragment:rM,uv_pars_fragment:sM,uv_pars_vertex:oM,uv_vertex:aM,worldpos_vertex:lM,background_vert:cM,background_frag:uM,backgroundCube_vert:dM,backgroundCube_frag:fM,cube_vert:hM,cube_frag:pM,depth_vert:mM,depth_frag:gM,distanceRGBA_vert:vM,distanceRGBA_frag:SM,equirect_vert:AM,equirect_frag:xM,linedashed_vert:yM,linedashed_frag:_M,meshbasic_vert:EM,meshbasic_frag:CM,meshlambert_vert:MM,meshlambert_frag:TM,meshmatcap_vert:wM,meshmatcap_frag:RM,meshnormal_vert:IM,meshnormal_frag:bM,meshphong_vert:PM,meshphong_frag:DM,meshphysical_vert:LM,meshphysical_frag:FM,meshtoon_vert:BM,meshtoon_frag:UM,points_vert:NM,points_frag:OM,shadow_vert:kM,shadow_frag:zM,sprite_vert:HM,sprite_frag:VM},me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Si={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Si.physical={uniforms:dn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const vl={r:0,b:0,g:0};function GM(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(m,f){let v=!1,A=f.isScene===!0?f.background:null;A&&A.isTexture&&(A=(f.backgroundBlurriness>0?t:e).get(A)),A===null?S(a,l):A&&A.isColor&&(S(A,1),v=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===kc)?(u===void 0&&(u=new Lt(new Ao(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ho(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(_,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ct.getTransfer(A.colorSpace)!==pt,(d!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Lt(new _a(2,2),new Jn({name:"BackgroundMaterial",uniforms:ho(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ct.getTransfer(A.colorSpace)!==pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function S(m,f){m.getRGB(vl,CS(n)),i.buffers.color.setClear(vl.r,vl.g,vl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(a,l)},render:g}}function WM(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(I,L,O,V,F){let B=!1;if(o){const H=S(V,O,L);c!==H&&(c=H,p(c.object)),B=f(I,V,O,F),B&&v(I,V,O,F)}else{const H=L.wireframe===!0;(c.geometry!==V.id||c.program!==O.id||c.wireframe!==H)&&(c.geometry=V.id,c.program=O.id,c.wireframe=H,B=!0)}F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,w(I,L,O,V),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function S(I,L,O){const V=O.wireframe===!0;let F=a[I.id];F===void 0&&(F={},a[I.id]=F);let B=F[L.id];B===void 0&&(B={},F[L.id]=B);let H=B[V];return H===void 0&&(H=m(h()),B[V]=H),H}function m(I){const L=[],O=[],V=[];for(let F=0;F<r;F++)L[F]=0,O[F]=0,V[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:V,object:I,attributes:{},index:null}}function f(I,L,O,V){const F=c.attributes,B=L.attributes;let H=0;const $=O.getAttributes();for(const J in $)if($[J].location>=0){const Y=F[J];let ee=B[J];if(ee===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;H++}return c.attributesNum!==H||c.index!==V}function v(I,L,O,V){const F={},B=L.attributes;let H=0;const $=O.getAttributes();for(const J in $)if($[J].location>=0){let Y=B[J];Y===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),F[J]=ee,H++}c.attributes=F,c.attributesNum=H,c.index=V}function A(){const I=c.newAttributes;for(let L=0,O=I.length;L<O;L++)I[L]=0}function x(I){_(I,0)}function _(I,L){const O=c.newAttributes,V=c.enabledAttributes,F=c.attributeDivisors;O[I]=1,V[I]===0&&(n.enableVertexAttribArray(I),V[I]=1),F[I]!==L&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,L),F[I]=L)}function C(){const I=c.newAttributes,L=c.enabledAttributes;for(let O=0,V=L.length;O<V;O++)L[O]!==I[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function y(I,L,O,V,F,B,H){H===!0?n.vertexAttribIPointer(I,L,O,F,B):n.vertexAttribPointer(I,L,O,V,F,B)}function w(I,L,O,V){if(i.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const F=V.attributes,B=O.getAttributes(),H=L.defaultAttributeValues;for(const $ in B){const J=B[$];if(J.location>=0){let X=F[$];if(X===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const Y=X.normalized,ee=X.itemSize,ie=t.get(X);if(ie===void 0)continue;const ce=ie.buffer,Re=ie.type,Ie=ie.bytesPerElement,Ae=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||X.gpuType===aS);if(X.isInterleavedBufferAttribute){const Ue=X.data,G=Ue.stride,Xe=X.offset;if(Ue.isInstancedInterleavedBuffer){for(let xe=0;xe<J.locationSize;xe++)_(J.location+xe,Ue.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let xe=0;xe<J.locationSize;xe++)x(J.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let xe=0;xe<J.locationSize;xe++)y(J.location+xe,ee/J.locationSize,Re,Y,G*Ie,(Xe+ee/J.locationSize*xe)*Ie,Ae)}else{if(X.isInstancedBufferAttribute){for(let Ue=0;Ue<J.locationSize;Ue++)_(J.location+Ue,X.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ue=0;Ue<J.locationSize;Ue++)x(J.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Ue=0;Ue<J.locationSize;Ue++)y(J.location+Ue,ee/J.locationSize,Re,Y,ee*Ie,ee/J.locationSize*Ue*Ie,Ae)}}else if(H!==void 0){const Y=H[$];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(J.location,Y);break;case 3:n.vertexAttrib3fv(J.location,Y);break;case 4:n.vertexAttrib4fv(J.location,Y);break;default:n.vertexAttrib1fv(J.location,Y)}}}}C()}function E(){U();for(const I in a){const L=a[I];for(const O in L){const V=L[O];for(const F in V)g(V[F].object),delete V[F];delete L[O]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;const L=a[I.id];for(const O in L){const V=L[O];for(const F in V)g(V[F].object),delete V[F];delete L[O]}delete a[I.id]}function D(I){for(const L in a){const O=a[L];if(O[I.id]===void 0)continue;const V=O[I.id];for(const F in V)g(V[F].object),delete V[F];delete O[I.id]}}function U(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:x,disableUnusedAttributes:C}}function XM(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,h){if(h===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,d,h),t.update(d,s,h)}function c(u,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let S=0;S<h;S++)g+=d[S];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function QM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=h>0,x=o||e.has("OES_texture_float"),_=A&&x,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:S,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:A,floatFragmentTextures:x,floatVertexTextures:_,maxSamples:C}}function jM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ar,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,A=v*4;let x=f.clippingState||null;l.value=x,x=u(g,h,A,p);for(let _=0;_!==A;++_)x[_]=t[_];f.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const f=p+S*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,x=p;A!==S;++A,x+=4)o.copy(d[A]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function qM(n){let e=new WeakMap;function t(o,a){return a===ef?o.mapping=lo:a===tf&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ef||a===tf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new oE(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mh extends MS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vs=4,qm=[.125,.215,.35,.446,.526,.582],Hr=20,Xu=new mh,Ym=new nt;let Qu=null,ju=0,qu=0;const kr=(1+Math.sqrt(5))/2,Ms=1/kr,Km=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,kr,Ms),new P(0,kr,-Ms),new P(Ms,0,kr),new P(-Ms,0,kr),new P(kr,Ms,0),new P(-kr,Ms,0)];class $m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,ju,qu),e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:uo,format:pn,colorSpace:Yi,depthBuffer:!1},r=Zm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YM(s)),this._blurMaterial=KM(s,e,t)}return r}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Xu)}_sceneToCubeUV(e,t,i,r){const a=new jn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ym),u.toneMapping=Er,u.autoClear=!1;const p=new is({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new Lt(new Ao,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(Ym),S=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const A=this._cubeSize;Sl(r,v*A,f>2?A:0,A,A),u.setRenderTarget(r),S&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===lo||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Km[(r-1)%Km.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Lt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),S=s/g,m=isFinite(s)?1+Math.floor(u*S):Hr;m>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);const f=[];let v=0;for(let y=0;y<Hr;++y){const w=y/S,E=Math.exp(-w*w/2);f.push(E),y===0?v+=E:y<m&&(v+=2*E)}for(let y=0;y<f.length;y++)f[y]=f[y]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const x=this._sizeLods[r],_=3*x*(r>A-Vs?r-A+Vs:0),C=4*(this._cubeSize-x);Sl(t,_,C,3*x,2*x),l.setRenderTarget(t),l.render(d,Xu)}}function YM(n){const e=[],t=[],i=[];let r=n;const s=n-Vs+1+qm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Vs?l=qm[o-n+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,S=3,m=2,f=1,v=new Float32Array(S*g*p),A=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let C=0;C<p;C++){const y=C%3*2/3-1,w=C>2?0:-1,E=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];v.set(E,S*g*C),A.set(h,m*g*C);const M=[C,C,C,C,C,C];x.set(M,f*g*C)}const _=new ni;_.setAttribute("position",new Zn(v,S)),_.setAttribute("uv",new Zn(A,m)),_.setAttribute("faceIndex",new Zn(x,f)),e.push(_),r>Vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zm(n,e,t){const i=new wr(n,e,t);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function KM(n,e,t){const i=new Float32Array(Hr),r=new P(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Jm(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function eg(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $M(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ef||l===tf,u=l===lo||l===co;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new $m(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new $m(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ZM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JM(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const S=h.morphAttributes[g];for(let m=0,f=S.length;m<f;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const S=p[g];for(let m=0,f=S.length;m<f;m++)e.update(S[m],n.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let S=0;if(p!==null){const v=p.array;S=p.version;for(let A=0,x=v.length;A<x;A+=3){const _=v[A+0],C=v[A+1],y=v[A+2];h.push(_,C,C,y,y,_)}}else if(g!==void 0){const v=g.array;S=g.version;for(let A=0,x=v.length/3-1;A<x;A+=3){const _=A+0,C=A+1,y=A+2;h.push(_,C,C,y,y,_)}}else return;const m=new(mS(h)?ES:_S)(h,1);m.version=S;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eT(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function d(p,g,S){if(S===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,S),t.update(g,s,S)}function h(p,g,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<S;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,S);let f=0;for(let v=0;v<S;v++)f+=g[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function tT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nT(n,e){return n[0]-e[0]}function iT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==S){let L=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",L)};var p=L;m!==void 0&&m.texture.dispose();const A=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let E=0;A===!0&&(E=1),x===!0&&(E=2),_===!0&&(E=3);let M=u.attributes.position.count*E,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const U=new Float32Array(M*D*4*S),z=new SS(U,M,D,S);z.type=xi,z.needsUpdate=!0;const I=E*4;for(let O=0;O<S;O++){const V=C[O],F=y[O],B=w[O],H=M*D*4*O;for(let $=0;$<V.count;$++){const J=$*I;A===!0&&(o.fromBufferAttribute(V,$),U[H+J+0]=o.x,U[H+J+1]=o.y,U[H+J+2]=o.z,U[H+J+3]=0),x===!0&&(o.fromBufferAttribute(F,$),U[H+J+4]=o.x,U[H+J+5]=o.y,U[H+J+6]=o.z,U[H+J+7]=0),_===!0&&(o.fromBufferAttribute(B,$),U[H+J+8]=o.x,U[H+J+9]=o.y,U[H+J+10]=o.z,U[H+J+11]=B.itemSize===4?o.w:1)}}m={count:S,texture:z,size:new we(M,D)},s.set(u,m),u.addEventListener("dispose",L)}let f=0;for(let A=0;A<h.length;A++)f+=h[A];const v=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let S=i[u.id];if(S===void 0||S.length!==g){S=[];for(let x=0;x<g;x++)S[x]=[x,0];i[u.id]=S}for(let x=0;x<g;x++){const _=S[x];_[0]=x,_[1]=h[x]}S.sort(iT);for(let x=0;x<8;x++)x<g&&S[x][1]?(a[x][0]=S[x][0],a[x][1]=S[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(nT);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const _=a[x],C=_[0],y=_[1];C!==Number.MAX_SAFE_INTEGER&&y?(m&&u.getAttribute("morphTarget"+x)!==m[C]&&u.setAttribute("morphTarget"+x,m[C]),f&&u.getAttribute("morphNormal"+x)!==f[C]&&u.setAttribute("morphNormal"+x,f[C]),r[x]=y,v+=y):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),f&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const A=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function sT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class vh extends Rn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Cr,u!==Cr&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cr&&(i=Fn),i===void 0&&u===fo&&(i=Kr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const IS=new Rn,bS=new vh(1,1);bS.compareFunction=hS;const PS=new SS,DS=new z_,LS=new TS,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gc(n,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function lT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function cT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function uT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;sg.set(i),n.uniformMatrix2fv(this.addr,!1,sg),Vt(t,i)}}function dT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;rg.set(i),n.uniformMatrix3fv(this.addr,!1,rg),Vt(t,i)}}function fT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ig.set(i),n.uniformMatrix4fv(this.addr,!1,ig),Vt(t,i)}}function hT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function vT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function yT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?bS:IS;t.setTexture2D(e||s,r)}function _T(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||DS,r)}function ET(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||LS,r)}function CT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||PS,r)}function MT(n){switch(n){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return ST;case 36295:return AT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return CT}}function TT(n,e){n.uniform1fv(this.addr,e)}function wT(n,e){const t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function RT(n,e){const t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function IT(n,e){const t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function bT(n,e){const t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function PT(n,e){const t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function DT(n,e){const t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function LT(n,e){n.uniform1iv(this.addr,e)}function FT(n,e){n.uniform2iv(this.addr,e)}function BT(n,e){n.uniform3iv(this.addr,e)}function UT(n,e){n.uniform4iv(this.addr,e)}function NT(n,e){n.uniform1uiv(this.addr,e)}function OT(n,e){n.uniform2uiv(this.addr,e)}function kT(n,e){n.uniform3uiv(this.addr,e)}function zT(n,e){n.uniform4uiv(this.addr,e)}function HT(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||IS,s[o])}function VT(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||DS,s[o])}function GT(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||LS,s[o])}function WT(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||PS,s[o])}function XT(n){switch(n){case 5126:return TT;case 35664:return wT;case 35665:return RT;case 35666:return IT;case 35674:return bT;case 35675:return PT;case 35676:return DT;case 5124:case 35670:return LT;case 35667:case 35671:return FT;case 35668:case 35672:return BT;case 35669:case 35673:return UT;case 5125:return NT;case 36294:return OT;case 36295:return kT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class QT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MT(t.type)}}class jT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XT(t.type)}}class qT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function og(n,e){n.seq.push(e),n.map[e.id]=e}function YT(n,e,t){const i=n.name,r=i.length;for(Yu.lastIndex=0;;){const s=Yu.exec(i),o=Yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){og(t,c===void 0?new QT(a,n,e):new jT(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new qT(a),og(t,d)),t=d}}}class zl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);YT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ag(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const KT=37297;let $T=0;function ZT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function JT(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===pc&&t===hc?i="LinearDisplayP3ToLinearSRGB":e===hc&&t===pc&&(i="LinearSRGBToLinearDisplayP3"),n){case Yi:case zc:return[i,"LinearTransferOETF"];case $t:case hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function lg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ZT(n.getShaderSource(e),o)}else return r}function ew(n,e){const t=JT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tw(n,e){let t;switch(e){case a_:t="Linear";break;case l_:t="Reinhard";break;case c_:t="OptimizedCineon";break;case u_:t="ACESFilmic";break;case f_:t="AgX";break;case d_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function iw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gs).join(`
`)}function rw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function cg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(n){return n.replace(ow,lw)}const aw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lw(n,e){let t=Qe[e];if(t===void 0){const i=aw.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(n){return n.replace(cw,uw)}function uw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function fw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sS:e="ENVMAP_BLENDING_MULTIPLY";break;case s_:e="ENVMAP_BLENDING_MIX";break;case o_:e="ENVMAP_BLENDING_ADD";break}return e}function mw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dw(t),c=fw(t),u=hw(t),d=pw(t),h=mw(t),p=t.isWebGL2?"":nw(t),g=iw(t),S=rw(s),m=r.createProgram();let f,v,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Gs).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Gs).join(`
`),v.length>0&&(v+=`
`)):(f=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),v=[p,fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Er?tw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,ew("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=lf(o),o=cg(o,t),o=ug(o,t),a=lf(a),a=cg(a,t),a=ug(a,t),o=dg(o),a=dg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=A+f+o,_=A+v+a,C=ag(r,r.VERTEX_SHADER,x),y=ag(r,r.FRAGMENT_SHADER,_);r.attachShader(m,C),r.attachShader(m,y),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function w(U){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(C).trim(),L=r.getShaderInfoLog(y).trim();let O=!0,V=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,C,y);else{const F=lg(r,C,"vertex"),B=lg(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+F+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||L==="")&&(V=!1);V&&(U.diagnostics={runnable:O,programLog:z,vertexShader:{log:I,prefix:f},fragmentShader:{log:L,prefix:v}})}r.deleteShader(C),r.deleteShader(y),E=new zl(r,m),M=sw(r,m)}let E;this.getUniforms=function(){return E===void 0&&w(this),E};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,KT)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=y,this}let vw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Aw(e),t.set(e,i)),i}}class Aw{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}}function xw(n,e,t,i,r,s,o){const a=new xS,l=new Sw,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return E===0?"uv":`uv${E}`}function m(E,M,D,U,z){const I=U.fog,L=z.geometry,O=E.isMeshStandardMaterial?U.environment:null,V=(E.isMeshStandardMaterial?t:e).get(E.envMap||O),F=V&&V.mapping===kc?V.image.height:null,B=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=H!==void 0?H.length:0;let J=0;L.morphAttributes.position!==void 0&&(J=1),L.morphAttributes.normal!==void 0&&(J=2),L.morphAttributes.color!==void 0&&(J=3);let X,Y,ee,ie;if(B){const cn=Si[B];X=cn.vertexShader,Y=cn.fragmentShader}else X=E.vertexShader,Y=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),ie=l.getFragmentShaderID(E);const ce=n.getRenderTarget(),Re=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,Ae=!!E.map,Ue=!!E.matcap,G=!!V,Xe=!!E.aoMap,xe=!!E.lightMap,ye=!!E.bumpMap,_e=!!E.normalMap,Je=!!E.displacementMap,be=!!E.emissiveMap,b=!!E.metalnessMap,T=!!E.roughnessMap,Q=E.anisotropy>0,ae=E.clearcoat>0,re=E.iridescence>0,se=E.sheen>0,Pe=E.transmission>0,ve=Q&&!!E.anisotropyMap,Te=ae&&!!E.clearcoatMap,Ne=ae&&!!E.clearcoatNormalMap,Ge=ae&&!!E.clearcoatRoughnessMap,ne=re&&!!E.iridescenceMap,tt=re&&!!E.iridescenceThicknessMap,k=se&&!!E.sheenColorMap,te=se&&!!E.sheenRoughnessMap,Se=!!E.specularMap,he=!!E.specularColorMap,Fe=!!E.specularIntensityMap,$e=Pe&&!!E.transmissionMap,it=Pe&&!!E.thicknessMap,je=!!E.gradientMap,fe=!!E.alphaMap,N=E.alphaTest>0,de=!!E.alphaHash,ge=!!E.extensions,Be=!!L.attributes.uv1,De=!!L.attributes.uv2,rt=!!L.attributes.uv3;let ut=Er;return E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ut=n.toneMapping),{isWebGL2:u,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:X,fragmentShader:Y,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ie,instancing:Re,instancingColor:Re&&z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Yi,map:Ae,matcap:Ue,envMap:G,envMapMode:G&&V.mapping,envMapCubeUVHeight:F,aoMap:Xe,lightMap:xe,bumpMap:ye,normalMap:_e,displacementMap:h&&Je,emissiveMap:be,normalMapObjectSpace:_e&&E.normalMapType===M_,normalMapTangentSpace:_e&&E.normalMapType===C_,metalnessMap:b,roughnessMap:T,anisotropy:Q,anisotropyMap:ve,clearcoat:ae,clearcoatMap:Te,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ge,iridescence:re,iridescenceMap:ne,iridescenceThicknessMap:tt,sheen:se,sheenColorMap:k,sheenRoughnessMap:te,specularMap:Se,specularColorMap:he,specularIntensityMap:Fe,transmission:Pe,transmissionMap:$e,thicknessMap:it,gradientMap:je,opaque:E.transparent===!1&&E.blending===_r,alphaMap:fe,alphaTest:N,alphaHash:de,combine:E.combine,mapUv:Ae&&S(E.map.channel),aoMapUv:Xe&&S(E.aoMap.channel),lightMapUv:xe&&S(E.lightMap.channel),bumpMapUv:ye&&S(E.bumpMap.channel),normalMapUv:_e&&S(E.normalMap.channel),displacementMapUv:Je&&S(E.displacementMap.channel),emissiveMapUv:be&&S(E.emissiveMap.channel),metalnessMapUv:b&&S(E.metalnessMap.channel),roughnessMapUv:T&&S(E.roughnessMap.channel),anisotropyMapUv:ve&&S(E.anisotropyMap.channel),clearcoatMapUv:Te&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:k&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:te&&S(E.sheenRoughnessMap.channel),specularMapUv:Se&&S(E.specularMap.channel),specularColorMapUv:he&&S(E.specularColorMap.channel),specularIntensityMapUv:Fe&&S(E.specularIntensityMap.channel),transmissionMapUv:$e&&S(E.transmissionMap.channel),thicknessMapUv:it&&S(E.thicknessMap.channel),alphaMapUv:fe&&S(E.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_e||Q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:De,vertexUv3s:rt,pointsUvs:z.isPoints===!0&&!!L.attributes.uv&&(Ae||fe),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===pt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qn,flipSided:E.side===wn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ge&&E.extensions.derivatives===!0,extensionFragDepth:ge&&E.extensions.fragDepth===!0,extensionDrawBuffers:ge&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(M,E),A(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function A(E,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const M=g[E.type];let D;if(M){const U=Si[M];D=nE.clone(U.uniforms)}else D=E.uniforms;return D}function _(E,M){let D;for(let U=0,z=c.length;U<z;U++){const I=c[U];if(I.cacheKey===M){D=I,++D.usedTimes;break}}return D===void 0&&(D=new gw(n,M,E,s),c.push(D)),D}function C(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function y(E){l.remove(E)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:_,releaseProgram:C,releaseShaderCache:y,programs:c,dispose:w}}function yw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _w(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,g,S,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:S,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=S,f.group=m),e++,f}function a(d,h,p,g,S,m){const f=o(d,h,p,g,S,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,g,S,m){const f=o(d,h,p,g,S,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||_w),i.length>1&&i.sort(h||hg),r.length>1&&r.sort(h||hg)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ew(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new pg,n.set(i,[o])):r>=s.length?(o=new pg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new nt};break;case"SpotLight":t={position:new P,direction:new P,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Mw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tw=0;function ww(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rw(n,e){const t=new Cw,i=Mw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);const s=new P,o=new He,a=new He;function l(u,d){let h=0,p=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,m=0,f=0,v=0,A=0,x=0,_=0,C=0,y=0,w=0,E=0;u.sort(ww);const M=d===!0?Math.PI:1;for(let U=0,z=u.length;U<z;U++){const I=u[U],L=I.color,O=I.intensity,V=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=L.r*O*M,p+=L.g*O*M,g+=L.b*O*M;else if(I.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],O);E++}else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const H=I.shadow,$=i.get(I);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[S]=$,r.directionalShadowMap[S]=F,r.directionalShadowMatrix[S]=I.shadow.matrix,x++}r.directional[S]=B,S++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(L).multiplyScalar(O*M),B.distance=V,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[f]=B;const H=I.shadow;if(I.map&&(r.spotLightMap[y]=I.map,y++,H.updateMatrices(I),I.castShadow&&w++),r.spotLightMatrix[f]=H.matrix,I.castShadow){const $=i.get(I);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=F,C++}f++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(L).multiplyScalar(O),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=B,v++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*M),B.distance=I.distance,B.decay=I.decay,I.castShadow){const H=I.shadow,$=i.get(I);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=F,r.pointShadowMatrix[m]=I.shadow.matrix,_++}r.point[m]=B,m++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(O*M),B.groundColor.copy(I.groundColor).multiplyScalar(O*M),r.hemi[A]=B,A++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==S||D.pointLength!==m||D.spotLength!==f||D.rectAreaLength!==v||D.hemiLength!==A||D.numDirectionalShadows!==x||D.numPointShadows!==_||D.numSpotShadows!==C||D.numSpotMaps!==y||D.numLightProbes!==E)&&(r.directional.length=S,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=A,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=C+y-w,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=E,D.directionalLength=S,D.pointLength=m,D.spotLength=f,D.rectAreaLength=v,D.hemiLength=A,D.numDirectionalShadows=x,D.numPointShadows=_,D.numSpotShadows=C,D.numSpotMaps=y,D.numLightProbes=E,r.version=Tw++)}function c(u,d){let h=0,p=0,g=0,S=0,m=0;const f=d.matrixWorldInverse;for(let v=0,A=u.length;v<A;v++){const x=u[v];if(x.isDirectionalLight){const _=r.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(f),h++}else if(x.isSpotLight){const _=r.spot[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const _=r.rectArea[S];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(f),a.identity(),o.copy(x.matrixWorld),o.premultiply(f),a.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){const _=r.point[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const _=r.hemi[m];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function mg(n,e){const t=new Rw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Iw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new mg(n,e),t.set(s,[l])):o>=a.length?(l=new mg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class bw extends Vc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=__,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pw extends Vc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fw(n,e,t){let i=new wS;const r=new we,s=new we,o=new Bt,a=new bw({depthPacking:E_}),l=new Pw,c={},u=t.maxTextureSize,d={[Mi]:wn,[wn]:Mi,[qn]:qn},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Dw,fragmentShader:Lw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new ni;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iS;let f=this.type;this.render=function(C,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(yr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=f!==Li&&this.type===Li,I=f===Li&&this.type!==Li;for(let L=0,O=C.length;L<O;L++){const V=C[L],F=V.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const B=F.getFrameExtents();if(r.multiply(B),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,F.mapSize.y=s.y)),F.map===null||z===!0||I===!0){const $=this.type!==Li?{minFilter:Kt,magFilter:Kt}:{};F.map!==null&&F.map.dispose(),F.map=new wr(r.x,r.y,$),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const H=F.getViewportCount();for(let $=0;$<H;$++){const J=F.getViewport($);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),U.viewport(o),F.updateMatrices(V,$),i=F.getFrustum(),x(y,w,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===Li&&v(F,w),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,D)};function v(C,y){const w=e.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(y,null,w,h,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(y,null,w,p,S,null)}function A(C,y,w,E){let M=null;const D=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=w.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const U=M.uuid,z=y.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let L=I[z];L===void 0&&(L=M.clone(),I[z]=L,y.addEventListener("dispose",_)),M=L}if(M.visible=y.visible,M.wireframe=y.wireframe,E===Li?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:d[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=w}return M}function x(C,y,w,E,M){if(C.visible===!1)return;if(C.layers.test(y.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const z=e.update(C),I=C.material;if(Array.isArray(I)){const L=z.groups;for(let O=0,V=L.length;O<V;O++){const F=L[O],B=I[F.materialIndex];if(B&&B.visible){const H=A(C,B,E,M);C.onBeforeShadow(n,C,y,w,z,H,F),n.renderBufferDirect(w,null,z,H,C,F),C.onAfterShadow(n,C,y,w,z,H,F)}}}else if(I.visible){const L=A(C,I,E,M);C.onBeforeShadow(n,C,y,w,z,L,null),n.renderBufferDirect(w,null,z,L,C,null),C.onAfterShadow(n,C,y,w,z,L,null)}}const U=C.children;for(let z=0,I=U.length;z<I;z++)x(U[z],y,w,E,M)}function _(C){C.target.removeEventListener("dispose",_);for(const w in c){const E=c[w],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Bw(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const de=new Bt;let ge=null;const Be=new Bt(0,0,0,0);return{setMask:function(De){ge!==De&&!N&&(n.colorMask(De,De,De,De),ge=De)},setLocked:function(De){N=De},setClear:function(De,rt,ut,Gt,cn){cn===!0&&(De*=Gt,rt*=Gt,ut*=Gt),de.set(De,rt,ut,Gt),Be.equals(de)===!1&&(n.clearColor(De,rt,ut,Gt),Be.copy(de))},reset:function(){N=!1,ge=null,Be.set(-1,0,0,0)}}}function s(){let N=!1,de=null,ge=null,Be=null;return{setTest:function(De){De?Ie(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(De){de!==De&&!N&&(n.depthMask(De),de=De)},setFunc:function(De){if(ge!==De){switch(De){case Zy:n.depthFunc(n.NEVER);break;case Jy:n.depthFunc(n.ALWAYS);break;case e_:n.depthFunc(n.LESS);break;case dc:n.depthFunc(n.LEQUAL);break;case t_:n.depthFunc(n.EQUAL);break;case n_:n.depthFunc(n.GEQUAL);break;case i_:n.depthFunc(n.GREATER);break;case r_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=De}},setLocked:function(De){N=De},setClear:function(De){Be!==De&&(n.clearDepth(De),Be=De)},reset:function(){N=!1,de=null,ge=null,Be=null}}}function o(){let N=!1,de=null,ge=null,Be=null,De=null,rt=null,ut=null,Gt=null,cn=null;return{setTest:function(dt){N||(dt?Ie(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(dt){de!==dt&&!N&&(n.stencilMask(dt),de=dt)},setFunc:function(dt,un,mi){(ge!==dt||Be!==un||De!==mi)&&(n.stencilFunc(dt,un,mi),ge=dt,Be=un,De=mi)},setOp:function(dt,un,mi){(rt!==dt||ut!==un||Gt!==mi)&&(n.stencilOp(dt,un,mi),rt=dt,ut=un,Gt=mi)},setLocked:function(dt){N=dt},setClear:function(dt){cn!==dt&&(n.clearStencil(dt),cn=dt)},reset:function(){N=!1,de=null,ge=null,Be=null,De=null,rt=null,ut=null,Gt=null,cn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,S=[],m=null,f=!1,v=null,A=null,x=null,_=null,C=null,y=null,w=null,E=new nt(0,0,0),M=0,D=!1,U=null,z=null,I=null,L=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=B>=2);let $=null,J={};const X=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ee=new Bt().fromArray(X),ie=new Bt().fromArray(Y);function ce(N,de,ge,Be){const De=new Uint8Array(4),rt=n.createTexture();n.bindTexture(N,rt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<ge;ut++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(de+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return rt}const Re={};Re[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(dc),be(!1),b(Kp),Ie(n.CULL_FACE),_e(yr);function Ie(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Ae(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Ue(N,de){return p[N]!==de?(n.bindFramebuffer(N,de),p[N]=de,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function G(N,de){let ge=S,Be=!1;if(N)if(ge=g.get(de),ge===void 0&&(ge=[],g.set(de,ge)),N.isWebGLMultipleRenderTargets){const De=N.texture;if(ge.length!==De.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,ut=De.length;rt<ut;rt++)ge[rt]=n.COLOR_ATTACHMENT0+rt;ge.length=De.length,Be=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Be=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Xe(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const xe={[zr]:n.FUNC_ADD,[Ny]:n.FUNC_SUBTRACT,[Oy]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[em]=n.MIN,xe[tm]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(xe[em]=N.MIN_EXT,xe[tm]=N.MAX_EXT)}const ye={[ky]:n.ZERO,[zy]:n.ONE,[Hy]:n.SRC_COLOR,[Sa]:n.SRC_ALPHA,[jy]:n.SRC_ALPHA_SATURATE,[Xy]:n.DST_COLOR,[Gy]:n.DST_ALPHA,[Vy]:n.ONE_MINUS_SRC_COLOR,[Aa]:n.ONE_MINUS_SRC_ALPHA,[Qy]:n.ONE_MINUS_DST_COLOR,[Wy]:n.ONE_MINUS_DST_ALPHA,[qy]:n.CONSTANT_COLOR,[Yy]:n.ONE_MINUS_CONSTANT_COLOR,[Ky]:n.CONSTANT_ALPHA,[$y]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(N,de,ge,Be,De,rt,ut,Gt,cn,dt){if(N===yr){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(Ie(n.BLEND),f=!0),N!==rS){if(N!==v||dt!==D){if((A!==zr||C!==zr)&&(n.blendEquation(n.FUNC_ADD),A=zr,C=zr),dt)switch(N){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.ONE,n.ONE);break;case Zp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,_=null,y=null,w=null,E.set(0,0,0),M=0,v=N,D=dt}return}De=De||de,rt=rt||ge,ut=ut||Be,(de!==A||De!==C)&&(n.blendEquationSeparate(xe[de],xe[De]),A=de,C=De),(ge!==x||Be!==_||rt!==y||ut!==w)&&(n.blendFuncSeparate(ye[ge],ye[Be],ye[rt],ye[ut]),x=ge,_=Be,y=rt,w=ut),(Gt.equals(E)===!1||cn!==M)&&(n.blendColor(Gt.r,Gt.g,Gt.b,cn),E.copy(Gt),M=cn),v=N,D=!1}function Je(N,de){N.side===qn?Ae(n.CULL_FACE):Ie(n.CULL_FACE);let ge=N.side===wn;de&&(ge=!ge),be(ge),N.blending===_r&&N.transparent===!1?_e(yr):_e(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Be=N.stencilWrite;c.setTest(Be),Be&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(N){U!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),U=N)}function b(N){N!==Fy?(Ie(n.CULL_FACE),N!==z&&(N===Kp?n.cullFace(n.BACK):N===By?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),z=N}function T(N){N!==I&&(F&&n.lineWidth(N),I=N)}function Q(N,de,ge){N?(Ie(n.POLYGON_OFFSET_FILL),(L!==de||O!==ge)&&(n.polygonOffset(de,ge),L=de,O=ge)):Ae(n.POLYGON_OFFSET_FILL)}function ae(N){N?Ie(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function re(N){N===void 0&&(N=n.TEXTURE0+V-1),$!==N&&(n.activeTexture(N),$=N)}function se(N,de,ge){ge===void 0&&($===null?ge=n.TEXTURE0+V-1:ge=$);let Be=J[ge];Be===void 0&&(Be={type:void 0,texture:void 0},J[ge]=Be),(Be.type!==N||Be.texture!==de)&&($!==ge&&(n.activeTexture(ge),$=ge),n.bindTexture(N,de||Re[N]),Be.type=N,Be.texture=de)}function Pe(){const N=J[$];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(N){ee.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function $e(N){ie.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function it(N,de){let ge=d.get(de);ge===void 0&&(ge=new WeakMap,d.set(de,ge));let Be=ge.get(N);Be===void 0&&(Be=n.getUniformBlockIndex(de,N.name),ge.set(N,Be))}function je(N,de){const Be=d.get(de).get(N);u.get(de)!==Be&&(n.uniformBlockBinding(de,Be,N.__bindingPointIndex),u.set(de,Be))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,J={},p={},g=new WeakMap,S=[],m=null,f=!1,v=null,A=null,x=null,_=null,C=null,y=null,w=null,E=new nt(0,0,0),M=0,D=!1,U=null,z=null,I=null,L=null,O=null,ee.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ae,bindFramebuffer:Ue,drawBuffers:G,useProgram:Xe,setBlending:_e,setMaterial:Je,setFlipSided:be,setCullFace:b,setLineWidth:T,setPolygonOffset:Q,setScissorTest:ae,activeTexture:re,bindTexture:se,unbindTexture:Pe,compressedTexImage2D:ve,compressedTexImage3D:Te,texImage2D:Se,texImage3D:he,updateUBOMapping:it,uniformBlockBinding:je,texStorage2D:k,texStorage3D:te,texSubImage2D:Ne,texSubImage3D:Ge,compressedTexSubImage2D:ne,compressedTexSubImage3D:tt,scissor:Fe,viewport:$e,reset:fe}}function Uw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,T){return p?new OffscreenCanvas(b,T):gc("canvas")}function S(b,T,Q,ae){let re=1;if((b.width>ae||b.height>ae)&&(re=ae/Math.max(b.width,b.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=T?af:Math.floor,Pe=se(re*b.width),ve=se(re*b.height);d===void 0&&(d=g(Pe,ve));const Te=Q?g(Pe,ve):d;return Te.width=Pe,Te.height=ve,Te.getContext("2d").drawImage(b,0,0,Pe,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Pe+"x"+ve+")."),Te}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Pm(b.width)&&Pm(b.height)}function f(b){return a?!1:b.wrapS!==di||b.wrapT!==di||b.minFilter!==Kt&&b.minFilter!==Qn}function v(b,T){return b.generateMipmaps&&T&&b.minFilter!==Kt&&b.minFilter!==Qn}function A(b){n.generateMipmap(b)}function x(b,T,Q,ae,re=!1){if(a===!1)return T;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=T;if(T===n.RED&&(Q===n.FLOAT&&(se=n.R32F),Q===n.HALF_FLOAT&&(se=n.R16F),Q===n.UNSIGNED_BYTE&&(se=n.R8)),T===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(se=n.R8UI),Q===n.UNSIGNED_SHORT&&(se=n.R16UI),Q===n.UNSIGNED_INT&&(se=n.R32UI),Q===n.BYTE&&(se=n.R8I),Q===n.SHORT&&(se=n.R16I),Q===n.INT&&(se=n.R32I)),T===n.RG&&(Q===n.FLOAT&&(se=n.RG32F),Q===n.HALF_FLOAT&&(se=n.RG16F),Q===n.UNSIGNED_BYTE&&(se=n.RG8)),T===n.RGBA){const Pe=re?fc:ct.getTransfer(ae);Q===n.FLOAT&&(se=n.RGBA32F),Q===n.HALF_FLOAT&&(se=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(se=Pe===pt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(b,T,Q){return v(b,Q)===!0||b.isFramebufferTexture&&b.minFilter!==Kt&&b.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function C(b){return b===Kt||b===nm||b===yu?n.NEAREST:n.LINEAR}function y(b){const T=b.target;T.removeEventListener("dispose",y),E(T),T.isVideoTexture&&u.delete(T)}function w(b){const T=b.target;T.removeEventListener("dispose",w),D(T)}function E(b){const T=i.get(b);if(T.__webglInit===void 0)return;const Q=b.source,ae=h.get(Q);if(ae){const re=ae[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(b),Object.keys(ae).length===0&&h.delete(Q)}i.remove(b)}function M(b){const T=i.get(b);n.deleteTexture(T.__webglTexture);const Q=b.source,ae=h.get(Q);delete ae[T.__cacheKey],o.memory.textures--}function D(b){const T=b.texture,Q=i.get(b),ae=i.get(T);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(Q.__webglFramebuffer[re]))for(let se=0;se<Q.__webglFramebuffer[re].length;se++)n.deleteFramebuffer(Q.__webglFramebuffer[re][se]);else n.deleteFramebuffer(Q.__webglFramebuffer[re]);Q.__webglDepthbuffer&&n.deleteRenderbuffer(Q.__webglDepthbuffer[re])}else{if(Array.isArray(Q.__webglFramebuffer))for(let re=0;re<Q.__webglFramebuffer.length;re++)n.deleteFramebuffer(Q.__webglFramebuffer[re]);else n.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&n.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let re=0;re<Q.__webglColorRenderbuffer.length;re++)Q.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(Q.__webglColorRenderbuffer[re]);Q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,se=T.length;re<se;re++){const Pe=i.get(T[re]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(T[re])}i.remove(T),i.remove(b)}let U=0;function z(){U=0}function I(){const b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function L(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function O(b,T){const Q=i.get(b);if(b.isVideoTexture&&Je(b),b.isRenderTargetTexture===!1&&b.version>0&&Q.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Q,b,T);return}}t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+T)}function V(b,T){const Q=i.get(b);if(b.version>0&&Q.__version!==b.version){ee(Q,b,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+T)}function F(b,T){const Q=i.get(b);if(b.version>0&&Q.__version!==b.version){ee(Q,b,T);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+T)}function B(b,T){const Q=i.get(b);if(b.version>0&&Q.__version!==b.version){ie(Q,b,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+T)}const H={[nf]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[rf]:n.MIRRORED_REPEAT},$={[Kt]:n.NEAREST,[nm]:n.NEAREST_MIPMAP_NEAREST,[yu]:n.NEAREST_MIPMAP_LINEAR,[Qn]:n.LINEAR,[h_]:n.LINEAR_MIPMAP_NEAREST,[xa]:n.LINEAR_MIPMAP_LINEAR},J={[T_]:n.NEVER,[D_]:n.ALWAYS,[w_]:n.LESS,[hS]:n.LEQUAL,[R_]:n.EQUAL,[P_]:n.GEQUAL,[I_]:n.GREATER,[b_]:n.NOTEQUAL};function X(b,T,Q){if(Q?(n.texParameteri(b,n.TEXTURE_WRAP_S,H[T.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,H[T.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,H[T.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,$[T.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,$[T.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==di||T.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,C(T.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==Kt&&T.minFilter!==Qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Kt||T.minFilter!==yu&&T.minFilter!==xa||T.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===uo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Y(b,T){let Q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",y));const ae=T.source;let re=h.get(ae);re===void 0&&(re={},h.set(ae,re));const se=L(T);if(se!==b.__cacheKey){re[se]===void 0&&(re[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),re[se].usedTimes++;const Pe=re[b.__cacheKey];Pe!==void 0&&(re[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(T)),b.__cacheKey=se,b.__webglTexture=re[se].texture}return Q}function ee(b,T,Q){let ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=n.TEXTURE_3D);const re=Y(b,T),se=T.source;t.bindTexture(ae,b.__webglTexture,n.TEXTURE0+Q);const Pe=i.get(se);if(se.version!==Pe.__version||re===!0){t.activeTexture(n.TEXTURE0+Q);const ve=ct.getPrimaries(ct.workingColorSpace),Te=T.colorSpace===Yn?null:ct.getPrimaries(T.colorSpace),Ne=T.colorSpace===Yn||ve===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ge=f(T)&&m(T.image)===!1;let ne=S(T.image,Ge,!1,r.maxTextureSize);ne=be(T,ne);const tt=m(ne)||a,k=s.convert(T.format,T.colorSpace);let te=s.convert(T.type),Se=x(T.internalFormat,k,te,T.colorSpace,T.isVideoTexture);X(ae,T,tt);let he;const Fe=T.mipmaps,$e=a&&T.isVideoTexture!==!0&&Se!==dS,it=Pe.__version===void 0||re===!0,je=_(T,ne,tt);if(T.isDepthTexture)Se=n.DEPTH_COMPONENT,a?T.type===xi?Se=n.DEPTH_COMPONENT32F:T.type===Fn?Se=n.DEPTH_COMPONENT24:T.type===Kr?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:T.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Cr&&Se===n.DEPTH_COMPONENT&&T.type!==dh&&T.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Fn,te=s.convert(T.type)),T.format===fo&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,T.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Kr,te=s.convert(T.type))),it&&($e?t.texStorage2D(n.TEXTURE_2D,1,Se,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,k,te,null));else if(T.isDataTexture)if(Fe.length>0&&tt){$e&&it&&t.texStorage2D(n.TEXTURE_2D,je,Se,Fe[0].width,Fe[0].height);for(let fe=0,N=Fe.length;fe<N;fe++)he=Fe[fe],$e?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,he.width,he.height,k,te,he.data):t.texImage2D(n.TEXTURE_2D,fe,Se,he.width,he.height,0,k,te,he.data);T.generateMipmaps=!1}else $e?(it&&t.texStorage2D(n.TEXTURE_2D,je,Se,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,k,te,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,k,te,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Se,Fe[0].width,Fe[0].height,ne.depth);for(let fe=0,N=Fe.length;fe<N;fe++)he=Fe[fe],T.format!==pn?k!==null?$e?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,he.width,he.height,ne.depth,k,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Se,he.width,he.height,ne.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,he.width,he.height,ne.depth,k,te,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Se,he.width,he.height,ne.depth,0,k,te,he.data)}else{$e&&it&&t.texStorage2D(n.TEXTURE_2D,je,Se,Fe[0].width,Fe[0].height);for(let fe=0,N=Fe.length;fe<N;fe++)he=Fe[fe],T.format!==pn?k!==null?$e?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,he.width,he.height,k,he.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,he.width,he.height,k,te,he.data):t.texImage2D(n.TEXTURE_2D,fe,Se,he.width,he.height,0,k,te,he.data)}else if(T.isDataArrayTexture)$e?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,k,te,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ne.width,ne.height,ne.depth,0,k,te,ne.data);else if(T.isData3DTexture)$e?(it&&t.texStorage3D(n.TEXTURE_3D,je,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,k,te,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ne.width,ne.height,ne.depth,0,k,te,ne.data);else if(T.isFramebufferTexture){if(it)if($e)t.texStorage2D(n.TEXTURE_2D,je,Se,ne.width,ne.height);else{let fe=ne.width,N=ne.height;for(let de=0;de<je;de++)t.texImage2D(n.TEXTURE_2D,de,Se,fe,N,0,k,te,null),fe>>=1,N>>=1}}else if(Fe.length>0&&tt){$e&&it&&t.texStorage2D(n.TEXTURE_2D,je,Se,Fe[0].width,Fe[0].height);for(let fe=0,N=Fe.length;fe<N;fe++)he=Fe[fe],$e?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,k,te,he):t.texImage2D(n.TEXTURE_2D,fe,Se,k,te,he);T.generateMipmaps=!1}else $e?(it&&t.texStorage2D(n.TEXTURE_2D,je,Se,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,k,te,ne)):t.texImage2D(n.TEXTURE_2D,0,Se,k,te,ne);v(T,tt)&&A(ae),Pe.__version=se.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ie(b,T,Q){if(T.image.length!==6)return;const ae=Y(b,T),re=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+Q);const se=i.get(re);if(re.version!==se.__version||ae===!0){t.activeTexture(n.TEXTURE0+Q);const Pe=ct.getPrimaries(ct.workingColorSpace),ve=T.colorSpace===Yn?null:ct.getPrimaries(T.colorSpace),Te=T.colorSpace===Yn||Pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,Ge=T.image[0]&&T.image[0].isDataTexture,ne=[];for(let fe=0;fe<6;fe++)!Ne&&!Ge?ne[fe]=S(T.image[fe],!1,!0,r.maxCubemapSize):ne[fe]=Ge?T.image[fe].image:T.image[fe],ne[fe]=be(T,ne[fe]);const tt=ne[0],k=m(tt)||a,te=s.convert(T.format,T.colorSpace),Se=s.convert(T.type),he=x(T.internalFormat,te,Se,T.colorSpace),Fe=a&&T.isVideoTexture!==!0,$e=se.__version===void 0||ae===!0;let it=_(T,tt,k);X(n.TEXTURE_CUBE_MAP,T,k);let je;if(Ne){Fe&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,it,he,tt.width,tt.height);for(let fe=0;fe<6;fe++){je=ne[fe].mipmaps;for(let N=0;N<je.length;N++){const de=je[N];T.format!==pn?te!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,de.width,de.height,te,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,he,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,de.width,de.height,te,Se,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,he,de.width,de.height,0,te,Se,de.data)}}}else{je=T.mipmaps,Fe&&$e&&(je.length>0&&it++,t.texStorage2D(n.TEXTURE_CUBE_MAP,it,he,ne[0].width,ne[0].height));for(let fe=0;fe<6;fe++)if(Ge){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ne[fe].width,ne[fe].height,te,Se,ne[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,ne[fe].width,ne[fe].height,0,te,Se,ne[fe].data);for(let N=0;N<je.length;N++){const ge=je[N].image[fe].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,ge.width,ge.height,te,Se,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,he,ge.width,ge.height,0,te,Se,ge.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,te,Se,ne[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,te,Se,ne[fe]);for(let N=0;N<je.length;N++){const de=je[N];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,te,Se,de.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,he,te,Se,de.image[fe])}}}v(T,k)&&A(n.TEXTURE_CUBE_MAP),se.__version=re.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ce(b,T,Q,ae,re,se){const Pe=s.convert(Q.format,Q.colorSpace),ve=s.convert(Q.type),Te=x(Q.internalFormat,Pe,ve,Q.colorSpace);if(!i.get(T).__hasExternalTextures){const Ge=Math.max(1,T.width>>se),ne=Math.max(1,T.height>>se);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,se,Te,Ge,ne,T.depth,0,Pe,ve,null):t.texImage2D(re,se,Te,Ge,ne,0,Pe,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),_e(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,re,i.get(Q).__webglTexture,0,ye(T)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,re,i.get(Q).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(b,T,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,b),T.depthBuffer&&!T.stencilBuffer){let ae=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Q||_e(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===xi?ae=n.DEPTH_COMPONENT32F:re.type===Fn&&(ae=n.DEPTH_COMPONENT24));const se=ye(T);_e(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,ae,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ae,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(T.depthBuffer&&T.stencilBuffer){const ae=ye(T);Q&&_e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<ae.length;re++){const se=ae[re],Pe=s.convert(se.format,se.colorSpace),ve=s.convert(se.type),Te=x(se.internalFormat,Pe,ve,se.colorSpace),Ne=ye(T);Q&&_e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Te,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Te,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Te,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ae=i.get(T.depthTexture).__webglTexture,re=ye(T);if(T.depthTexture.format===Cr)_e(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(T.depthTexture.format===fo)_e(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const T=i.get(b),Q=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ie(T.__webglFramebuffer,b)}else if(Q){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]=n.createRenderbuffer(),Re(T.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Re(T.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(b,T,Q){const ae=i.get(b);T!==void 0&&ce(ae.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&Ae(b)}function G(b){const T=b.texture,Q=i.get(b),ae=i.get(T);b.addEventListener("dispose",w),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=T.version,o.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,Pe=m(b)||a;if(re){Q.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[ve]=[];for(let Te=0;Te<T.mipmaps.length;Te++)Q.__webglFramebuffer[ve][Te]=n.createFramebuffer()}else Q.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)Q.__webglFramebuffer[ve]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const ve=b.texture;for(let Te=0,Ne=ve.length;Te<Ne;Te++){const Ge=i.get(ve[Te]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&_e(b)===!1){const ve=se?T:[T];Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Ne=ve[Te];Q.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[Te]);const Ge=s.convert(Ne.format,Ne.colorSpace),ne=s.convert(Ne.type),tt=x(Ne.internalFormat,Ge,ne,Ne.colorSpace,b.isXRRenderTarget===!0),k=ye(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,k,tt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Q.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(Q.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),X(n.TEXTURE_CUBE_MAP,T,Pe);for(let ve=0;ve<6;ve++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)ce(Q.__webglFramebuffer[ve][Te],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else ce(Q.__webglFramebuffer[ve],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(T,Pe)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ve=b.texture;for(let Te=0,Ne=ve.length;Te<Ne;Te++){const Ge=ve[Te],ne=i.get(Ge);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),X(n.TEXTURE_2D,Ge,Pe),ce(Q.__webglFramebuffer,b,Ge,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,0),v(Ge,Pe)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ve=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ae.__webglTexture),X(ve,T,Pe),a&&T.mipmaps&&T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)ce(Q.__webglFramebuffer[Te],b,T,n.COLOR_ATTACHMENT0,ve,Te);else ce(Q.__webglFramebuffer,b,T,n.COLOR_ATTACHMENT0,ve,0);v(T,Pe)&&A(ve),t.unbindTexture()}b.depthBuffer&&Ae(b)}function Xe(b){const T=m(b)||a,Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,re=Q.length;ae<re;ae++){const se=Q[ae];if(v(se,T)){const Pe=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(se).__webglTexture;t.bindTexture(Pe,ve),A(Pe),t.unbindTexture()}}}function xe(b){if(a&&b.samples>0&&_e(b)===!1){const T=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],Q=b.width,ae=b.height;let re=n.COLOR_BUFFER_BIT;const se=[],Pe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(b),Te=b.isWebGLMultipleRenderTargets===!0;if(Te)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){se.push(n.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&se.push(Pe);const Ge=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ge===!1&&(b.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),Te&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]),Ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Pe])),Te){const ne=i.get(T[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,re,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]);const Ge=i.get(T[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ye(b){return Math.min(r.maxSamples,b.samples)}function _e(b){const T=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(b){const T=o.render.frame;u.get(b)!==T&&(u.set(b,T),b.update())}function be(b,T){const Q=b.colorSpace,ae=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===sf||Q!==Yi&&Q!==Yn&&(ct.getTransfer(Q)===pt?a===!1?e.has("EXT_sRGB")===!0&&ae===pn?(b.format=sf,b.minFilter=Qn,b.generateMipmaps=!1):T=gS.sRGBToLinear(T):(ae!==pn||re!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=F,this.setTextureCube=B,this.rebindTextures=Ue,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=_e}function FS(n,e,t){const i=t.isWebGL2;function r(s,o=Yn){let a;const l=ct.getTransfer(o);if(s===Gi)return n.UNSIGNED_BYTE;if(s===lS)return n.UNSIGNED_SHORT_4_4_4_4;if(s===cS)return n.UNSIGNED_SHORT_5_5_5_1;if(s===p_)return n.BYTE;if(s===m_)return n.SHORT;if(s===dh)return n.UNSIGNED_SHORT;if(s===aS)return n.INT;if(s===Fn)return n.UNSIGNED_INT;if(s===xi)return n.FLOAT;if(s===uo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===g_)return n.ALPHA;if(s===pn)return n.RGBA;if(s===v_)return n.LUMINANCE;if(s===S_)return n.LUMINANCE_ALPHA;if(s===Cr)return n.DEPTH_COMPONENT;if(s===fo)return n.DEPTH_STENCIL;if(s===sf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===A_)return n.RED;if(s===fh)return n.RED_INTEGER;if(s===x_)return n.RG;if(s===uS)return n.RG_INTEGER;if(s===qo)return n.RGBA_INTEGER;if(s===_u||s===Eu||s===Cu||s===Mu)if(l===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_u)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_u)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===im||s===rm||s===sm||s===om)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===im)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===om)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===am||s===lm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===am)return l===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cm||s===um||s===dm||s===fm||s===hm||s===pm||s===mm||s===gm||s===vm||s===Sm||s===Am||s===xm||s===ym||s===_m)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===um)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Am)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xm)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ym)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_m)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tu||s===Em||s===Cm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Tu)return l===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Em)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===y_||s===Mm||s===Tm||s===wm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Tu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Kr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Nw extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Al extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ow={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ow)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Al;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kw extends os{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const S=t.getContextAttributes();let m=null,f=null;const v=[],A=[],x=new we;let _=null;const C=new jn;C.layers.enable(1),C.viewport=new Bt;const y=new jn;y.layers.enable(2),y.viewport=new Bt;const w=[C,y],E=new Nw;E.layers.enable(1),E.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=v[X];return Y===void 0&&(Y=new Ku,v[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=v[X];return Y===void 0&&(Y=new Ku,v[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=v[X];return Y===void 0&&(Y=new Ku,v[X]=Y),Y.getHandSpace()};function U(X){const Y=A.indexOf(X.inputSource);if(Y===-1)return;const ee=v[Y];ee!==void 0&&(ee.update(X.inputSource,X.frame,c||o),ee.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",I);for(let X=0;X<v.length;X++){const Y=A[X];Y!==null&&(A[X]=null,v[X].disconnect(Y))}M=null,D=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",I),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new wr(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let Y=null,ee=null,ie=null;S.depth&&(ie=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=S.stencil?fo:Cr,ee=S.stencil?Kr:Fn);const ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new wr(h.textureWidth,h.textureHeight,{format:pn,type:Gi,depthTexture:new vh(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(X){for(let Y=0;Y<X.removed.length;Y++){const ee=X.removed[Y],ie=A.indexOf(ee);ie>=0&&(A[ie]=null,v[ie].disconnect(ee))}for(let Y=0;Y<X.added.length;Y++){const ee=X.added[Y];let ie=A.indexOf(ee);if(ie===-1){for(let Re=0;Re<v.length;Re++)if(Re>=A.length){A.push(ee),ie=Re;break}else if(A[Re]===null){A[Re]=ee,ie=Re;break}if(ie===-1)break}const ce=v[ie];ce&&ce.connect(ee)}}const L=new P,O=new P;function V(X,Y,ee){L.setFromMatrixPosition(Y.matrixWorld),O.setFromMatrixPosition(ee.matrixWorld);const ie=L.distanceTo(O),ce=Y.projectionMatrix.elements,Re=ee.projectionMatrix.elements,Ie=ce[14]/(ce[10]-1),Ae=ce[14]/(ce[10]+1),Ue=(ce[9]+1)/ce[5],G=(ce[9]-1)/ce[5],Xe=(ce[8]-1)/ce[0],xe=(Re[8]+1)/Re[0],ye=Ie*Xe,_e=Ie*xe,Je=ie/(-Xe+xe),be=Je*-Xe;Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(Je),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const b=Ie+Je,T=Ae+Je,Q=ye-be,ae=_e+(ie-be),re=Ue*Ae/T*b,se=G*Ae/T*b;X.projectionMatrix.makePerspective(Q,ae,re,se,b,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function F(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;E.near=y.near=C.near=X.near,E.far=y.far=C.far=X.far,(M!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),M=E.near,D=E.far);const Y=X.parent,ee=E.cameras;F(E,Y);for(let ie=0;ie<ee.length;ie++)F(ee[ie],Y);ee.length===2?V(E,C,y):E.projectionMatrix.copy(C.projectionMatrix),B(X,E,Y)};function B(X,Y,ee){ee===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(ee.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=of*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let H=null;function $(X,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){const ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ie=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,ie=!0);for(let ce=0;ce<ee.length;ce++){const Re=ee[ce];let Ie=null;if(p!==null)Ie=p.getViewport(Re);else{const Ue=d.getViewSubImage(h,Re);Ie=Ue.viewport,ce===0&&(e.setRenderTargetTextures(f,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(f))}let Ae=w[ce];Ae===void 0&&(Ae=new jn,Ae.layers.enable(ce),Ae.viewport=new Bt,w[ce]=Ae),Ae.matrix.fromArray(Re.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Re.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ce===0&&(E.matrix.copy(Ae.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ie===!0&&E.cameras.push(Ae)}}for(let ee=0;ee<v.length;ee++){const ie=A[ee],ce=v[ee];ie!==null&&ce!==void 0&&ce.update(ie,Y,c||o)}H&&H(X,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const J=new RS;J.setAnimationLoop($),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}}function zw(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,CS(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,A,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const A=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*A,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,A){const x=A.program;i.uniformBlockBinding(v,x)}function c(v,A){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const _=A.program;i.updateUBOMapping(v,_);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function u(v){const A=d();v.__bindingPointIndex=A;const x=n.createBuffer(),_=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,_,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const A=r[v.id],x=v.uniforms,_=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,y=x.length;C<y;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,M=w.length;E<M;E++){const D=w[E];if(p(D,C,E,_)===!0){const U=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let L=0;L<z.length;L++){const O=z[L],V=S(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,U+I,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,I),I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,A,x,_){const C=v.value,y=A+"_"+x;if(_[y]===void 0)return typeof C=="number"||typeof C=="boolean"?_[y]=C:_[y]=C.clone(),!0;{const w=_[y];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return _[y]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function g(v){const A=v.uniforms;let x=0;const _=16;for(let y=0,w=A.length;y<w;y++){const E=Array.isArray(A[y])?A[y]:[A[y]];for(let M=0,D=E.length;M<D;M++){const U=E[M],z=Array.isArray(U.value)?U.value:[U.value];for(let I=0,L=z.length;I<L;I++){const O=z[I],V=S(O),F=x%_;F!==0&&_-F<V.boundary&&(x+=_-F),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=V.storage}}}const C=x%_;return C>0&&(x+=_-C),v.__size=x,v.__cache={},this}function S(v){const A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),A}function m(v){const A=v.target;A.removeEventListener("dispose",m);const x=o.indexOf(A.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class BS{constructor(e={}){const{canvas:t=B_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let S=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=Er,this.toneMappingExposure=1;const A=this;let x=!1,_=0,C=0,y=null,w=-1,E=null;const M=new Bt,D=new Bt;let U=null;const z=new nt(0);let I=0,L=t.width,O=t.height,V=1,F=null,B=null;const H=new Bt(0,0,L,O),$=new Bt(0,0,L,O);let J=!1;const X=new wS;let Y=!1,ee=!1,ie=null;const ce=new He,Re=new we,Ie=new P,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return y===null?V:1}let G=i;function Xe(R,W){for(let q=0;q<R.length;q++){const K=R[q],j=t.getContext(K,W);if(j!==null)return j}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uh}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",de,!1),G===null){const W=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&W.shift(),G=Xe(W,R),G===null)throw Xe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xe,ye,_e,Je,be,b,T,Q,ae,re,se,Pe,ve,Te,Ne,Ge,ne,tt,k,te,Se,he,Fe,$e;function it(){xe=new ZM(G),ye=new QM(G,xe,e),xe.init(ye),he=new FS(G,xe,ye),_e=new Bw(G,xe,ye),Je=new tT(G),be=new yw,b=new Uw(G,xe,_e,be,ye,he,Je),T=new qM(A),Q=new $M(A),ae=new cE(G,ye),Fe=new WM(G,xe,ae,ye),re=new JM(G,ae,Je,Fe),se=new sT(G,re,ae,Je),k=new rT(G,ye,b),Ge=new jM(be),Pe=new xw(A,T,Q,xe,ye,Fe,Ge),ve=new zw(A,be),Te=new Ew,Ne=new Iw(xe,ye),tt=new GM(A,T,Q,_e,se,h,l),ne=new Fw(A,se,ye),$e=new Hw(G,Je,ye,_e),te=new XM(G,xe,Je,ye),Se=new eT(G,xe,Je,ye),Je.programs=Pe.programs,A.capabilities=ye,A.extensions=xe,A.properties=be,A.renderLists=Te,A.shadowMap=ne,A.state=_e,A.info=Je}it();const je=new kw(A,G);this.xr=je,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(L,O,!1))},this.getSize=function(R){return R.set(L,O)},this.setSize=function(R,W,q=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,O=W,t.width=Math.floor(R*V),t.height=Math.floor(W*V),q===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(L*V,O*V).floor()},this.setDrawingBufferSize=function(R,W,q){L=R,O=W,V=q,t.width=Math.floor(R*q),t.height=Math.floor(W*q),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,W,q,K){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,W,q,K),_e.viewport(M.copy(H).multiplyScalar(V).floor())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,W,q,K){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,q,K),_e.scissor(D.copy($).multiplyScalar(V).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){_e.setScissorTest(J=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,W=!0,q=!0){let K=0;if(R){let j=!1;if(y!==null){const Ee=y.texture.format;j=Ee===qo||Ee===uS||Ee===fh}if(j){const Ee=y.texture.type,Le=Ee===Gi||Ee===Fn||Ee===dh||Ee===Kr||Ee===lS||Ee===cS,Oe=tt.getClearColor(),ke=tt.getClearAlpha(),qe=Oe.r,Ve=Oe.g,We=Oe.b;Le?(p[0]=qe,p[1]=Ve,p[2]=We,p[3]=ke,G.clearBufferuiv(G.COLOR,0,p)):(g[0]=qe,g[1]=Ve,g[2]=We,g[3]=ke,G.clearBufferiv(G.COLOR,0,g))}else K|=G.COLOR_BUFFER_BIT}W&&(K|=G.DEPTH_BUFFER_BIT),q&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Te.dispose(),Ne.dispose(),be.dispose(),T.dispose(),Q.dispose(),se.dispose(),Fe.dispose(),$e.dispose(),Pe.dispose(),je.dispose(),je.removeEventListener("sessionstart",cn),je.removeEventListener("sessionend",dt),ie&&(ie.dispose(),ie=null),un.stop()};function fe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=Je.autoReset,W=ne.enabled,q=ne.autoUpdate,K=ne.needsUpdate,j=ne.type;it(),Je.autoReset=R,ne.enabled=W,ne.autoUpdate=q,ne.needsUpdate=K,ne.type=j}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ge(R){const W=R.target;W.removeEventListener("dispose",ge),Be(W)}function Be(R){De(R),be.remove(R)}function De(R){const W=be.get(R).programs;W!==void 0&&(W.forEach(function(q){Pe.releaseProgram(q)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,q,K,j,Ee){W===null&&(W=Ae);const Le=j.isMesh&&j.matrixWorld.determinant()<0,Oe=QS(R,W,q,K,j);_e.setMaterial(K,Le);let ke=q.index,qe=1;if(K.wireframe===!0){if(ke=re.getWireframeAttribute(q),ke===void 0)return;qe=2}const Ve=q.drawRange,We=q.attributes.position;let Rt=Ve.start*qe,In=(Ve.start+Ve.count)*qe;Ee!==null&&(Rt=Math.max(Rt,Ee.start*qe),In=Math.min(In,(Ee.start+Ee.count)*qe)),ke!==null?(Rt=Math.max(Rt,0),In=Math.min(In,ke.count)):We!=null&&(Rt=Math.max(Rt,0),In=Math.min(In,We.count));const Wt=In-Rt;if(Wt<0||Wt===1/0)return;Fe.setup(j,K,Oe,q,ke);let Ti,yt=te;if(ke!==null&&(Ti=ae.get(ke),yt=Se,yt.setIndex(Ti)),j.isMesh)K.wireframe===!0?(_e.setLineWidth(K.wireframeLinewidth*Ue()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(j.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),_e.setLineWidth(Ye*Ue()),j.isLineSegments?yt.setMode(G.LINES):j.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else j.isPoints?yt.setMode(G.POINTS):j.isSprite&&yt.setMode(G.TRIANGLES);if(j.isBatchedMesh)yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)yt.renderInstances(Rt,Wt,j.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Xc=Math.min(q.instanceCount,Ye);yt.renderInstances(Rt,Wt,Xc)}else yt.render(Rt,Wt)};function rt(R,W,q){R.transparent===!0&&R.side===qn&&R.forceSinglePass===!1?(R.side=wn,R.needsUpdate=!0,La(R,W,q),R.side=Mi,R.needsUpdate=!0,La(R,W,q),R.side=qn):La(R,W,q)}this.compile=function(R,W,q=null){q===null&&(q=R),m=Ne.get(q),m.init(),v.push(m),q.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),R!==q&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(A._useLegacyLights);const K=new Set;return R.traverse(function(j){const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Oe=Ee[Le];rt(Oe,q,j),K.add(Oe)}else rt(Ee,q,j),K.add(Ee)}),v.pop(),m=null,K},this.compileAsync=function(R,W,q=null){const K=this.compile(R,W,q);return new Promise(j=>{function Ee(){if(K.forEach(function(Le){be.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){j(R);return}setTimeout(Ee,10)}xe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ut=null;function Gt(R){ut&&ut(R)}function cn(){un.stop()}function dt(){un.start()}const un=new RS;un.setAnimationLoop(Gt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(R){ut=R,je.setAnimationLoop(R),R===null?un.stop():un.start()},je.addEventListener("sessionstart",cn),je.addEventListener("sessionend",dt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(W),W=je.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,y),m=Ne.get(R,v.length),m.init(),v.push(m),ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(ce),ee=this.localClippingEnabled,Y=Ge.init(this.clippingPlanes,ee),S=Te.get(R,f.length),S.init(),f.push(S),mi(R,W,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(F,B),this.info.render.frame++,Y===!0&&Ge.beginShadows();const q=m.state.shadowsArray;if(ne.render(q,R,W),Y===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(S,R),m.setupLights(A._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let j=0,Ee=K.length;j<Ee;j++){const Le=K[j];Fh(S,R,Le,Le.viewport)}}else Fh(S,R,W);y!==null&&(b.updateMultisampleRenderTarget(y),b.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(A,R,W),Fe.resetDefaultState(),w=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function mi(R,W,q,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){K&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ce);const Le=se.update(R),Oe=R.material;Oe.visible&&S.push(R,Le,Oe,q,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const Le=se.update(R),Oe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ie.copy(Le.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(ce)),Array.isArray(Oe)){const ke=Le.groups;for(let qe=0,Ve=ke.length;qe<Ve;qe++){const We=ke[qe],Rt=Oe[We.materialIndex];Rt&&Rt.visible&&S.push(R,Le,Rt,q,Ie.z,We)}}else Oe.visible&&S.push(R,Le,Oe,q,Ie.z,null)}}const Ee=R.children;for(let Le=0,Oe=Ee.length;Le<Oe;Le++)mi(Ee[Le],W,q,K)}function Fh(R,W,q,K){const j=R.opaque,Ee=R.transmissive,Le=R.transparent;m.setupLightsView(q),Y===!0&&Ge.setGlobalState(A.clippingPlanes,q),Ee.length>0&&XS(j,Ee,W,q),K&&_e.viewport(M.copy(K)),j.length>0&&Da(j,W,q),Ee.length>0&&Da(Ee,W,q),Le.length>0&&Da(Le,W,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function XS(R,W,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Ee=ye.isWebGL2;ie===null&&(ie=new wr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?uo:Gi,minFilter:xa,samples:Ee?4:0})),A.getDrawingBufferSize(Re),Ee?ie.setSize(Re.x,Re.y):ie.setSize(af(Re.x),af(Re.y));const Le=A.getRenderTarget();A.setRenderTarget(ie),A.getClearColor(z),I=A.getClearAlpha(),I<1&&A.setClearColor(16777215,.5),A.clear();const Oe=A.toneMapping;A.toneMapping=Er,Da(R,q,K),b.updateMultisampleRenderTarget(ie),b.updateRenderTargetMipmap(ie);let ke=!1;for(let qe=0,Ve=W.length;qe<Ve;qe++){const We=W[qe],Rt=We.object,In=We.geometry,Wt=We.material,Ti=We.group;if(Wt.side===qn&&Rt.layers.test(K.layers)){const yt=Wt.side;Wt.side=wn,Wt.needsUpdate=!0,Bh(Rt,q,K,In,Wt,Ti),Wt.side=yt,Wt.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(ie),b.updateRenderTargetMipmap(ie)),A.setRenderTarget(Le),A.setClearColor(z,I),A.toneMapping=Oe}function Da(R,W,q){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ee=R.length;j<Ee;j++){const Le=R[j],Oe=Le.object,ke=Le.geometry,qe=K===null?Le.material:K,Ve=Le.group;Oe.layers.test(q.layers)&&Bh(Oe,W,q,ke,qe,Ve)}}function Bh(R,W,q,K,j,Ee){R.onBeforeRender(A,W,q,K,j,Ee),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(A,W,q,K,R,Ee),j.transparent===!0&&j.side===qn&&j.forceSinglePass===!1?(j.side=wn,j.needsUpdate=!0,A.renderBufferDirect(q,W,K,j,R,Ee),j.side=Mi,j.needsUpdate=!0,A.renderBufferDirect(q,W,K,j,R,Ee),j.side=qn):A.renderBufferDirect(q,W,K,j,R,Ee),R.onAfterRender(A,W,q,K,j,Ee)}function La(R,W,q){W.isScene!==!0&&(W=Ae);const K=be.get(R),j=m.state.lights,Ee=m.state.shadowsArray,Le=j.state.version,Oe=Pe.getParameters(R,j.state,Ee,W,q),ke=Pe.getProgramCacheKey(Oe);let qe=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?Q:T).get(R.envMap||K.environment),qe===void 0&&(R.addEventListener("dispose",ge),qe=new Map,K.programs=qe);let Ve=qe.get(ke);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===Le)return Nh(R,Oe),Ve}else Oe.uniforms=Pe.getUniforms(R),R.onBuild(q,Oe,A),R.onBeforeCompile(Oe,A),Ve=Pe.acquireProgram(Oe,ke),qe.set(ke,Ve),K.uniforms=Oe.uniforms;const We=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Ge.uniform),Nh(R,Oe),K.needsLights=qS(R),K.lightsStateVersion=Le,K.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function Uh(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=zl.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Nh(R,W){const q=be.get(R);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function QS(R,W,q,K,j){W.isScene!==!0&&(W=Ae),b.resetTextureUnits();const Ee=W.fog,Le=K.isMeshStandardMaterial?W.environment:null,Oe=y===null?A.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Yi,ke=(K.isMeshStandardMaterial?Q:T).get(K.envMap||Le),qe=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!q.morphAttributes.position,Rt=!!q.morphAttributes.normal,In=!!q.morphAttributes.color;let Wt=Er;K.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Wt=A.toneMapping);const Ti=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=Ti!==void 0?Ti.length:0,Ye=be.get(K),Xc=m.state.lights;if(Y===!0&&(ee===!0||R!==E)){const Hn=R===E&&K.id===w;Ge.setState(K,R,Hn)}let Tt=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Xc.state.version||Ye.outputColorSpace!==Oe||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||Ye.envMap!==ke||K.fog===!0&&Ye.fog!==Ee||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ge.numPlanes||Ye.numIntersection!==Ge.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ve||Ye.morphTargets!==We||Ye.morphNormals!==Rt||Ye.morphColors!==In||Ye.toneMapping!==Wt||ye.isWebGL2===!0&&Ye.morphTargetsCount!==yt)&&(Tt=!0):(Tt=!0,Ye.__version=K.version);let Pr=Ye.currentProgram;Tt===!0&&(Pr=La(K,W,j));let Oh=!1,yo=!1,Qc=!1;const en=Pr.getUniforms(),Dr=Ye.uniforms;if(_e.useProgram(Pr.program)&&(Oh=!0,yo=!0,Qc=!0),K.id!==w&&(w=K.id,yo=!0),Oh||E!==R){en.setValue(G,"projectionMatrix",R.projectionMatrix),en.setValue(G,"viewMatrix",R.matrixWorldInverse);const Hn=en.map.cameraPosition;Hn!==void 0&&Hn.setValue(G,Ie.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&en.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&en.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,yo=!0,Qc=!0)}if(j.isSkinnedMesh){en.setOptional(G,j,"bindMatrix"),en.setOptional(G,j,"bindMatrixInverse");const Hn=j.skeleton;Hn&&(ye.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),en.setValue(G,"boneTexture",Hn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(en.setOptional(G,j,"batchingTexture"),en.setValue(G,"batchingTexture",j._matricesTexture,b));const jc=q.morphAttributes;if((jc.position!==void 0||jc.normal!==void 0||jc.color!==void 0&&ye.isWebGL2===!0)&&k.update(j,q,Pr),(yo||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,en.setValue(G,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Dr.envMap.value=ke,Dr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),yo&&(en.setValue(G,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&jS(Dr,Qc),Ee&&K.fog===!0&&ve.refreshFogUniforms(Dr,Ee),ve.refreshMaterialUniforms(Dr,K,V,O,ie),zl.upload(G,Uh(Ye),Dr,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(zl.upload(G,Uh(Ye),Dr,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&en.setValue(G,"center",j.center),en.setValue(G,"modelViewMatrix",j.modelViewMatrix),en.setValue(G,"normalMatrix",j.normalMatrix),en.setValue(G,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Hn=K.uniformsGroups;for(let qc=0,YS=Hn.length;qc<YS;qc++)if(ye.isWebGL2){const kh=Hn[qc];$e.update(kh,Pr),$e.bind(kh,Pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pr}function jS(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function qS(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,W,q){be.get(R.texture).__webglTexture=W,be.get(R.depthTexture).__webglTexture=q;const K=be.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const q=be.get(R);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,q=0){y=R,_=W,C=q;let K=!0,j=null,Ee=!1,Le=!1;if(R){const ke=be.get(R);ke.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):ke.__webglFramebuffer===void 0?b.setupRenderTarget(R):ke.__hasExternalTextures&&b.rebindTextures(R,be.get(R.texture).__webglTexture,be.get(R.depthTexture).__webglTexture);const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ve=be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[W])?j=Ve[W][q]:j=Ve[W],Ee=!0):ye.isWebGL2&&R.samples>0&&b.useMultisampledRTT(R)===!1?j=be.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[q]:j=Ve,M.copy(R.viewport),D.copy(R.scissor),U=R.scissorTest}else M.copy(H).multiplyScalar(V).floor(),D.copy($).multiplyScalar(V).floor(),U=J;if(_e.bindFramebuffer(G.FRAMEBUFFER,j)&&ye.drawBuffers&&K&&_e.drawBuffers(R,j),_e.viewport(M),_e.scissor(D),_e.setScissorTest(U),Ee){const ke=be.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,ke.__webglTexture,q)}else if(Le){const ke=be.get(R.texture),qe=W||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,q||0,qe)}w=-1},this.readRenderTargetPixels=function(R,W,q,K,j,Ee,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){_e.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const ke=R.texture,qe=ke.format,Ve=ke.type;if(qe!==pn&&he.convert(qe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===uo&&(xe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ve!==Gi&&he.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===xi&&(ye.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&q>=0&&q<=R.height-j&&G.readPixels(W,q,K,j,he.convert(qe),he.convert(Ve),Ee)}finally{const ke=y!==null?be.get(y).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,W,q=0){const K=Math.pow(2,-q),j=Math.floor(W.image.width*K),Ee=Math.floor(W.image.height*K);b.setTexture2D(W,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,R.x,R.y,j,Ee),_e.unbindTexture()},this.copyTextureToTexture=function(R,W,q,K=0){const j=W.image.width,Ee=W.image.height,Le=he.convert(q.format),Oe=he.convert(q.type);b.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),W.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,R.x,R.y,j,Ee,Le,Oe,W.image.data):W.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Le,W.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,R.x,R.y,Le,Oe,W.image),K===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(R,W,q,K,j=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=R.max.x-R.min.x+1,Le=R.max.y-R.min.y+1,Oe=R.max.z-R.min.z+1,ke=he.convert(K.format),qe=he.convert(K.type);let Ve;if(K.isData3DTexture)b.setTexture3D(K,0),Ve=G.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)b.setTexture2DArray(K,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const We=G.getParameter(G.UNPACK_ROW_LENGTH),Rt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),In=G.getParameter(G.UNPACK_SKIP_PIXELS),Wt=G.getParameter(G.UNPACK_SKIP_ROWS),Ti=G.getParameter(G.UNPACK_SKIP_IMAGES),yt=q.isCompressedTexture?q.mipmaps[j]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,R.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,R.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Ve,j,W.x,W.y,W.z,Ee,Le,Oe,ke,qe,yt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ve,j,W.x,W.y,W.z,Ee,Le,Oe,ke,yt.data)):G.texSubImage3D(Ve,j,W.x,W.y,W.z,Ee,Le,Oe,ke,qe,yt),G.pixelStorei(G.UNPACK_ROW_LENGTH,We),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Rt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,In),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ti),j===0&&K.generateMipmaps&&G.generateMipmap(Ve),_e.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),_e.unbindTexture()},this.resetState=function(){_=0,C=0,y=null,_e.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hh?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?$r:fS}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$r?$t:Yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vw extends BS{}Vw.prototype.isWebGL1Renderer=!0;class Gw extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ir extends Rn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Kt,u=Kt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ww extends Zn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ea extends ni{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const S=[],m=i/2;let f=0;v(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Nn(d,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(p,2));function v(){const x=new P,_=new P;let C=0;const y=(t-e)/i;for(let w=0;w<=s;w++){const E=[],M=w/s,D=M*(t-e)+e;for(let U=0;U<=r;U++){const z=U/r,I=z*l+a,L=Math.sin(I),O=Math.cos(I);_.x=D*L,_.y=-M*i+m,_.z=D*O,d.push(_.x,_.y,_.z),x.set(L,y,O).normalize(),h.push(x.x,x.y,x.z),p.push(z,1-M),E.push(g++)}S.push(E)}for(let w=0;w<r;w++)for(let E=0;E<s;E++){const M=S[E][w],D=S[E+1][w],U=S[E+1][w+1],z=S[E][w+1];u.push(M,D,z),u.push(D,U,z),C+=6}c.addGroup(f,C,0),f+=C}function A(x){const _=g,C=new we,y=new P;let w=0;const E=x===!0?e:t,M=x===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const D=g;for(let U=0;U<=r;U++){const I=U/r*l+a,L=Math.cos(I),O=Math.sin(I);y.x=E*O,y.y=m*M,y.z=E*L,d.push(y.x,y.y,y.z),h.push(0,M,0),C.x=L*.5+.5,C.y=O*.5*M+.5,p.push(C.x,C.y),g++}for(let U=0;U<r;U++){const z=_+U,I=D+U;x===!0?u.push(I,I+1,z):u.push(I+1,I,z),w+=3}c.addGroup(f,w,x===!0?1:2),f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sh extends Ea{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Sh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vc extends ni{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],g=[],S=[],m=[];for(let f=0;f<=i;f++){const v=[],A=f/i;let x=0;f===0&&o===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let _=0;_<=t;_++){const C=_/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+A*a),d.y=e*Math.cos(o+A*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+A*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(C+x,1-A),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const A=u[f][v+1],x=u[f][v],_=u[f+1][v],C=u[f+1][v+1];(f!==0||o>0)&&p.push(A,x,C),(f!==i-1||l<Math.PI)&&p.push(x,_,C)}this.setIndex(p),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xw extends ni{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(an(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);const Gr=class Gr{constructor(e,t){let i,r;this.promise=new Promise((c,u)=>{i=c,r=u});const s=i.bind(this),o=r.bind(this),a=(...c)=>{s(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=Gr.idGen++}then(e){return new Gr((t,i)=>{this.promise=this.promise.then((...r)=>{const s=e(...r);s instanceof Promise||s instanceof Gr?s.then((...o)=>{t(...o)}):t(s)}).catch(r=>{i(r)})},this.abortHandler)}catch(e){return new Gr(t=>{this.promise=this.promise.then((...i)=>{t(...i)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};ue(Gr,"idGen",0);let Ca=Gr;class US extends Error{constructor(e){super(e)}}(function(){const n=new Float32Array(1),e=new Int32Array(n.buffer);return function(t){n[0]=t;const i=e[0];let r=i>>16&32768,s=i>>12&2047;const o=i>>23&255;return o<103?r:o>142?(r|=31744,r|=(o==255?0:1)&&i&8388607,r):o<113?(s|=2048,r|=(s>>114-o)+(s>>113-o&1),r):(r|=o-112<<10|s>>1,r+=s&1,r)}})();const $u=function(){const n=new Float32Array(1),e=new Int32Array(n.buffer);return function(t){return n[0]=t,e[0]}}(),Qw=function(n,e){return n[e]+(n[e+1]<<8)+(n[e+2]<<16)+(n[e+3]<<24)},Wc=function(n,e,t=!0,i){const r=new AbortController,s=r.signal;let o=!1;const a=u=>{r.abort(u),o=!0};let l=!1;const c=(u,d,h,p)=>{e&&!l&&(e(u,d,h,p),u===100&&(l=!0))};return new Ca((u,d)=>{const h={signal:s};i&&(h.headers=i),fetch(n,h).then(async p=>{if(!p.ok){const A=await p.text();d(new Error(`Fetch failed: ${p.status} ${p.statusText} ${A}`));return}const g=p.body.getReader();let S=0,m=p.headers.get("Content-Length"),f=m?parseInt(m):void 0;const v=[];for(;!o;)try{const{value:A,done:x}=await g.read();if(x){if(c(100,"100%",A,f),t){const y=new Blob(v).arrayBuffer();u(y)}else u();break}S+=A.length;let _,C;f!==void 0&&(_=S/f*100,C=`${_.toFixed(2)}%`),t&&v.push(A),c(_,C,A,f)}catch(A){d(A);return}}).catch(p=>{d(new US(p))})},a)},St=function(n,e,t){return Math.max(Math.min(n,t),e)},Ts=function(){return performance.now()/1e3},Is=n=>{if(n.geometry&&(n.geometry.dispose(),n.geometry=null),n.material&&(n.material.dispose(),n.material=null),n.children)for(let e of n.children)Is(e)},Bn=(n,e)=>new Promise(t=>{window.setTimeout(()=>{t(n?n():void 0)},e?1:50)}),Zs=(n=0)=>{let e=0;if(n===1)e=9;else if(n===2)e=24;else if(n===3)e=45;else if(n>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},Ah=()=>{let n,e;return{promise:new Promise((i,r)=>{n=i,e=r}),resolve:n,reject:e}},Zu=n=>{let e,t;return n||(n=()=>{}),{promise:new Ca((r,s)=>{e=r,t=s},n),resolve:e,reject:t}};class jw{constructor(e,t,i){this.major=e,this.minor=t,this.patch=i}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function xh(){const n=navigator.userAgent;return n.indexOf("iPhone")>0||n.indexOf("iPad")>0}function NS(){if(xh()){const n=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new jw(parseInt(n[1]||0,10),parseInt(n[2]||0,10),parseInt(n[3]||0,10))}else return null}const qw=14,ea=class ea{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Zs(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+qw,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let i=Zs(e);for(let r=0;r<i;r++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=ea.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,i,r,s,o,a,l,c,u,d,h,p,g,...S){const m=[e,t,i,r,s,o,a,l,c,u,d,h,p,g,...this.defaultSphericalHarmonics];for(let f=0;f<S.length&&f<this.sphericalHarmonicsCount;f++)m[f]=S[f];return this.addSplat(m),m}addSplatFromArray(e,t){const i=e.splats[t],r=ea.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<i.length;s++)r[s]=i[s];this.addSplat(r)}};ue(ea,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let pe=ea;class Ze{}ue(Ze,"DefaultSplatSortDistanceMapPrecision",16),ue(Ze,"MemoryPageSize",65536),ue(Ze,"BytesPerFloat",4),ue(Ze,"BytesPerInt",4),ue(Ze,"MaxScenes",32),ue(Ze,"ProgressiveLoadSectionSize",262144),ue(Ze,"ProgressiveLoadSectionDelayDuration",15),ue(Ze,"SphericalHarmonics8BitCompressionRange",3);const Yw=Ze.SphericalHarmonics8BitCompressionRange,rr=Yw/2,Ut=ya.toHalfFloat.bind(ya),yh=ya.fromHalfFloat.bind(ya),vt=(n,e,t=!1,i,r)=>{if(e===0)return n;if(e===1||e===2&&!t)return ya.fromHalfFloat(n);if(e===2)return _h(n,i,r)},Ko=(n,e,t)=>{n=St(n,e,t);const i=t-e;return St(Math.floor((n-e)/i*255),0,255)},_h=(n,e,t)=>{const i=t-e;return n/255*i+e},OS=(n,e,t)=>Ko(yh(n,e,t)),Kw=(n,e,t)=>Ut(_h(n,e,t)),st=(n,e,t,i=!1)=>t===0?n.getFloat32(e*4,!0):t===1||t===2&&!i?n.getUint16(e*2,!0):n.getUint8(e,!0),$w=function(){const n=e=>e;return function(e,t,i,r=!1){if(t===i)return e;let s=n;return t===2&&r?i===1?s=Kw:i==0&&(s=_h):t===2||t===1?i===0?s=yh:i==2&&(r?s=OS:s=n):t===0&&(i===1?s=Ut:i==2&&(r?s=Ko:s=Ut)),s(e)}}(),ws=(n,e,t,i,r=0)=>{const s=new Uint8Array(n,e),o=new Uint8Array(t,i);for(let a=0;a<r;a++)o[a]=s[a]},Z=class Z{constructor(e,t=!0){ue(this,"getSplatScaleAndRotation",function(){const e=new He,t=new He,i=new He,r=new P,s=new P,o=new xt;return function(a,l,c,u,d){const h=this.globalSplatIndexToSectionMap[a],p=this.sections[h],g=a-p.splatCountOffset,S=p.bytesPerSplat*g+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,p.dataBase+S);s.set(vt(st(m,0,this.compressionLevel),this.compressionLevel),vt(st(m,1,this.compressionLevel),this.compressionLevel),vt(st(m,2,this.compressionLevel),this.compressionLevel)),d&&(d.x!==void 0&&(s.x=d.x),d.y!==void 0&&(s.y=d.y),d.z!==void 0&&(s.z=d.z)),o.set(vt(st(m,4,this.compressionLevel),this.compressionLevel),vt(st(m,5,this.compressionLevel),this.compressionLevel),vt(st(m,6,this.compressionLevel),this.compressionLevel),vt(st(m,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(o),i.copy(e).multiply(t).multiply(u),i.decompose(r,c,l)):(l.copy(s),c.copy(o))}}());ue(this,"fillSplatScaleRotationArray",function(){const e=new He,t=new He,i=new He,r=new P,s=new xt,o=new P,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,d,h,p,g,S){const m=this.splatCount;d=d||0,h=h||m-1,p===void 0&&(p=d);const f=(v,A)=>$w(v,A,g);for(let v=d;v<=h;v++){const A=this.globalSplatIndexToSectionMap[v],x=this.sections[A],_=v-x.splatCountOffset,C=x.bytesPerSplat*_+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,y=(v-d+p)*Z.ScaleComponentCount,w=(v-d+p)*Z.RotationComponentCount,E=new DataView(this.bufferData,x.dataBase+C),M=S&&S.x!==void 0?S.x:st(E,0,this.compressionLevel),D=S&&S.y!==void 0?S.y:st(E,1,this.compressionLevel),U=S&&S.z!==void 0?S.z:st(E,2,this.compressionLevel),z=st(E,3,this.compressionLevel),I=st(E,4,this.compressionLevel),L=st(E,5,this.compressionLevel),O=st(E,6,this.compressionLevel);r.set(vt(M,this.compressionLevel),vt(D,this.compressionLevel),vt(U,this.compressionLevel)),s.set(vt(I,this.compressionLevel),vt(L,this.compressionLevel),vt(O,this.compressionLevel),vt(z,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(s),i.identity().premultiply(e).premultiply(t),i.premultiply(u),i.decompose(o,s,r),s.normalize()),a(s),l&&(l[y]=f(r.x,0),l[y+1]=f(r.y,0),l[y+2]=f(r.z,0)),c&&(c[w]=f(s.x,0),c[w+1]=f(s.y,0),c[w+2]=f(s.z,0),c[w+3]=f(s.w,0))}}}());ue(this,"fillSphericalHarmonicsArray",function(){for(let I=0;I<15;I++)new P;const e=new ze,t=new He,i=new P,r=new P,s=new xt,o=[],a=[],l=[],c=[],u=[],d=[],h=[],p=[],g=[],S=[],m=[],f=[],v=[],A=[],x=[],_=[],C=[],y=[],w=I=>I,E=(I,L,O,V)=>{I[0]=L,I[1]=O,I[2]=V},M=(I,L,O,V,F)=>{I[0]=st(L,V,F,!0),I[1]=st(L,V+O,F,!0),I[2]=st(L,V+O+O,F,!0)},D=(I,L)=>{L[0]=I[0],L[1]=I[1],L[2]=I[2]},U=(I,L,O,V)=>{L[O]=V(I[0]),L[O+1]=V(I[1]),L[O+2]=V(I[2])},z=(I,L,O,V,F)=>(L[0]=vt(I[0],O,!0,V,F),L[1]=vt(I[1],O,!0,V,F),L[2]=vt(I[2],O,!0,V,F),L);return function(I,L,O,V,F,B,H){const $=this.splatCount;V=V||0,F=F||$-1,B===void 0&&(B=V),O&&L>=1&&(t.copy(O),t.decompose(i,s,r),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),E(o,e.elements[4],-e.elements[7],e.elements[1]),E(a,-e.elements[5],e.elements[8],-e.elements[2]),E(l,e.elements[3],-e.elements[6],e.elements[0]));const J=Y=>OS(Y,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),X=Y=>Ko(Y,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Y=V;Y<=F;Y++){const ee=this.globalSplatIndexToSectionMap[Y],ie=this.sections[ee];L=Math.min(L,ie.sphericalHarmonicsDegree);const ce=Zs(L),Re=Y-ie.splatCountOffset,Ie=ie.bytesPerSplat*Re+Z.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Ae=new DataView(this.bufferData,ie.dataBase+Ie),Ue=(Y-V+B)*ce;let G=O?0:this.compressionLevel,Xe=w;G!==H&&(G===1?H===0?Xe=yh:H==2&&(Xe=J):G===0&&(H===1?Xe=Ut:H==2&&(Xe=X)));const xe=this.minSphericalHarmonicsCoeff,ye=this.maxSphericalHarmonicsCoeff;L>=1&&(M(g,Ae,3,0,this.compressionLevel),M(S,Ae,3,1,this.compressionLevel),M(m,Ae,3,2,this.compressionLevel),O?(z(g,g,this.compressionLevel,xe,ye),z(S,S,this.compressionLevel,xe,ye),z(m,m,this.compressionLevel,xe,ye),Z.rotateSphericalHarmonics3(g,S,m,o,a,l,A,x,_)):(D(g,A),D(S,x),D(m,_)),U(A,I,Ue,Xe),U(x,I,Ue+3,Xe),U(_,I,Ue+6,Xe),L>=2&&(M(g,Ae,5,9,this.compressionLevel),M(S,Ae,5,10,this.compressionLevel),M(m,Ae,5,11,this.compressionLevel),M(f,Ae,5,12,this.compressionLevel),M(v,Ae,5,13,this.compressionLevel),O?(z(g,g,this.compressionLevel,xe,ye),z(S,S,this.compressionLevel,xe,ye),z(m,m,this.compressionLevel,xe,ye),z(f,f,this.compressionLevel,xe,ye),z(v,v,this.compressionLevel,xe,ye),Z.rotateSphericalHarmonics5(g,S,m,f,v,o,a,l,c,u,d,h,p,A,x,_,C,y)):(D(g,A),D(S,x),D(m,_),D(f,C),D(v,y)),U(A,I,Ue+9,Xe),U(x,I,Ue+12,Xe),U(_,I,Ue+15,Xe),U(C,I,Ue+18,Xe),U(y,I,Ue+21,Xe)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const i=this.sections[t];(t===0||i.sphericalHarmonicsDegree<e)&&(e=i.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let i;const r=e.fullBucketCount*e.bucketSize;if(t<r)i=Math.floor(t/e.bucketSize);else{let s=r;i=e.fullBucketCount;let o=0;for(;s<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=s&&t<s+a)break;s+=a,i++,o++}}return i}getSplatCenter(e,t,i){const r=this.globalSplatIndexToSectionMap[e],s=this.sections[r],o=e-s.splatCountOffset,a=s.bytesPerSplat*o,l=new DataView(this.bufferData,s.dataBase+a),c=st(l,0,this.compressionLevel),u=st(l,1,this.compressionLevel),d=st(l,2,this.compressionLevel);if(this.compressionLevel>=1){const p=this.getBucketIndex(s,o)*Z.BucketStorageSizeFloats,g=s.compressionScaleFactor,S=s.compressionScaleRange;t.x=(c-S)*g+s.bucketArray[p],t.y=(u-S)*g+s.bucketArray[p+1],t.z=(d-S)*g+s.bucketArray[p+2]}else t.x=c,t.y=u,t.z=d;i&&t.applyMatrix4(i)}getSplatColor(e,t){const i=this.globalSplatIndexToSectionMap[e],r=this.sections[i],s=e-r.splatCountOffset,o=r.bytesPerSplat*s+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,r.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,i,r,s){const o=this.splatCount;i=i||0,r=r||o-1,s===void 0&&(s=i);const a=new P;for(let l=i;l<=r;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],d=l-u.splatCountOffset,h=(l-i+s)*Z.CenterComponentCount,p=u.bytesPerSplat*d,g=new DataView(this.bufferData,u.dataBase+p),S=st(g,0,this.compressionLevel),m=st(g,1,this.compressionLevel),f=st(g,2,this.compressionLevel);if(this.compressionLevel>=1){const A=this.getBucketIndex(u,d)*Z.BucketStorageSizeFloats,x=u.compressionScaleFactor,_=u.compressionScaleRange;a.x=(S-_)*x+u.bucketArray[A],a.y=(m-_)*x+u.bucketArray[A+1],a.z=(f-_)*x+u.bucketArray[A+2]}else a.x=S,a.y=m,a.z=f;t&&a.applyMatrix4(t),e[h]=a.x,e[h+1]=a.y,e[h+2]=a.z}}fillSplatCovarianceArray(e,t,i,r,s,o){const a=this.splatCount,l=new P,c=new xt;i=i||0,r=r||a-1,s===void 0&&(s=i);for(let u=i;u<=r;u++){const d=this.globalSplatIndexToSectionMap[u],h=this.sections[d],p=u-h.splatCountOffset,g=(u-i+s)*Z.CovarianceComponentCount,S=h.bytesPerSplat*p+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,h.dataBase+S);l.set(vt(st(m,0,this.compressionLevel),this.compressionLevel),vt(st(m,1,this.compressionLevel),this.compressionLevel),vt(st(m,2,this.compressionLevel),this.compressionLevel)),c.set(vt(st(m,4,this.compressionLevel),this.compressionLevel),vt(st(m,5,this.compressionLevel),this.compressionLevel),vt(st(m,6,this.compressionLevel),this.compressionLevel),vt(st(m,3,this.compressionLevel),this.compressionLevel)),Z.computeCovariance(l,c,t,e,g,o)}}fillSplatColorArray(e,t,i,r,s){const o=this.splatCount;i=i||0,r=r||o-1,s===void 0&&(s=i);for(let a=i;a<=r;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],u=a-c.splatCountOffset,d=(a-i+s)*Z.ColorComponentCount,h=c.bytesPerSplat*u+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,p=new Uint8Array(this.bufferData,c.dataBase+h);let g=p[3];g=g>=t?g:0,e[d]=p[0],e[d+1]=p[1],e[d+2]=p[2],e[d+3]=g}}static parseHeader(e){const t=new Uint8Array(e,0,Z.HeaderSizeBytes),i=new Uint16Array(e,0,Z.HeaderSizeBytes/2),r=new Uint32Array(e,0,Z.HeaderSizeBytes/4),s=new Float32Array(e,0,Z.HeaderSizeBytes/4),o=t[0],a=t[1],l=r[1],c=r[2],u=r[3],d=r[4],h=i[10],p=new P(s[6],s[7],s[8]),g=s[9]||-rr,S=s[10]||rr;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:d,compressionLevel:h,sceneCenter:p,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:S}}static writeHeaderCountsToBuffer(e,t,i){const r=new Uint32Array(i,0,Z.HeaderSizeBytes/4);r[2]=e,r[4]=t}static writeHeaderToBuffer(e,t){const i=new Uint8Array(t,0,Z.HeaderSizeBytes),r=new Uint16Array(t,0,Z.HeaderSizeBytes/2),s=new Uint32Array(t,0,Z.HeaderSizeBytes/4),o=new Float32Array(t,0,Z.HeaderSizeBytes/4);i[0]=e.versionMajor,i[1]=e.versionMinor,i[2]=0,i[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,r[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-rr,o[10]=e.maxSphericalHarmonicsCoeff||rr}static parseSectionHeaders(e,t,i=0,r){const s=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,i,o*Z.SectionHeaderSizeBytes/2),l=new Uint32Array(t,i,o*Z.SectionHeaderSizeBytes/4),c=new Float32Array(t,i,o*Z.SectionHeaderSizeBytes/4),u=[];let d=0,h=d/2,p=d/4,g=Z.HeaderSizeBytes+e.maxSectionCount*Z.SectionHeaderSizeBytes,S=0;for(let m=0;m<o;m++){const f=l[p+1],v=l[p+2],A=l[p+3],x=c[p+4],_=x/2,C=a[h+10],y=l[p+6]||Z.CompressionLevels[s].ScaleRange,w=l[p+8],E=l[p+9],M=E*4,D=C*A+M,U=a[h+20],{bytesPerSplat:z}=Z.calculateComponentStorage(s,U),I=z*f,L=I+D,O={bytesPerSplat:z,splatCountOffset:S,splatCount:r?f:0,maxSplatCount:f,bucketSize:v,bucketCount:A,bucketBlockSize:x,halfBucketBlockSize:_,bucketStorageSizeBytes:C,bucketsStorageSizeBytes:D,splatDataStorageSizeBytes:I,storageSizeBytes:L,compressionScaleRange:y,compressionScaleFactor:_/y,base:g,bucketsBase:g+M,dataBase:g+D,fullBucketCount:w,partiallyFilledBucketCount:E,sphericalHarmonicsDegree:U};u[m]=O,g+=L,d+=Z.SectionHeaderSizeBytes,h=d/2,p=d/4,S+=f}return u}static writeSectionHeaderToBuffer(e,t,i,r=0){const s=new Uint16Array(i,r,Z.SectionHeaderSizeBytes/2),o=new Uint32Array(i,r,Z.SectionHeaderSizeBytes/4),a=new Float32Array(i,r,Z.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?Z.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,i=0){const r=new Uint32Array(t,i,Z.SectionHeaderSizeBytes/4);r[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const i=Z.parseHeader(this.bufferData);this.versionMajor=i.versionMajor,this.versionMinor=i.versionMinor,this.maxSectionCount=i.maxSectionCount,this.sectionCount=t?i.maxSectionCount:0,this.maxSplatCount=i.maxSplatCount,this.splatCount=t?i.maxSplatCount:0,this.compressionLevel=i.compressionLevel,this.sceneCenter=new P().copy(i.sceneCenter),this.minSphericalHarmonicsCoeff=i.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=i.maxSphericalHarmonicsCoeff,this.sections=Z.parseSectionHeaders(i,this.bufferData,Z.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const i=Z.CompressionLevels[e].BytesPerCenter,r=Z.CompressionLevels[e].BytesPerScale,s=Z.CompressionLevels[e].BytesPerRotation,o=Z.CompressionLevels[e].BytesPerColor,a=Zs(t),l=Z.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=i+r+s+o+l;return{bytesPerCenter:i,bytesPerScale:r,bytesPerRotation:s,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*Z.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const i=this.sections[t];for(let r=0;r<i.maxSplatCount;r++){const s=e+r;this.globalSplatIndexToLocalSplatIndexMap[s]=r,this.globalSplatIndexToSectionMap[s]=t}e+=i.maxSplatCount}}updateLoadedCounts(e,t){Z.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const i=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*e;Z.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,i),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,i,r,s,o,a=[]){let l=0;for(let _=0;_<e.length;_++){const C=e[_];l=Math.max(C.sphericalHarmonicsDegree,l)}let c,u;for(let _=0;_<e.length;_++){const C=e[_];for(let y=0;y<C.splats.length;y++){const w=C.splats[y];for(let E=pe.OFFSET.FRC0;E<pe.OFFSET.FRC23&&E<w.length;E++)(!c||w[E]<c)&&(c=w[E]),(!u||w[E]>u)&&(u=w[E])}}c=c||-rr,u=u||rr;const{bytesPerSplat:d}=Z.calculateComponentStorage(i,l),h=Z.CompressionLevels[i].ScaleRange,p=[],g=[];let S=0;for(let _=0;_<e.length;_++){const C=e[_],y=new pe(l);for(let ee=0;ee<C.splatCount;ee++){const ie=C.splats[ee];(ie[pe.OFFSET.OPACITY]||0)>=t&&y.addSplat(ie)}const w=a[_]||{},E=(w.blockSizeFactor||1)*(s||Z.BucketBlockSize),M=Math.ceil((w.bucketSizeFactor||1)*(o||Z.BucketSize)),D=Z.computeBucketsForUncompressedSplatArray(y,E,M),U=D.fullBuckets.length,z=D.partiallyFullBuckets.map(ee=>ee.splats.length),I=z.length,L=[...D.fullBuckets,...D.partiallyFullBuckets],O=y.splats.length*d,V=I*4,F=i>=1?L.length*Z.BucketStorageSizeBytes+V:0,B=O+F,H=new ArrayBuffer(B),$=h/(E*.5),J=new P;let X=0;for(let ee=0;ee<L.length;ee++){const ie=L[ee];J.fromArray(ie.center);for(let ce=0;ce<ie.splats.length;ce++){let Re=ie.splats[ce];const Ie=y.splats[Re],Ae=F+X*d;Z.writeSplatDataToSectionBuffer(Ie,H,Ae,i,l,J,$,h,c,u),X++}}if(S+=X,i>=1){const ee=new Uint32Array(H,0,z.length*4);for(let ce=0;ce<z.length;ce++)ee[ce]=z[ce];const ie=new Float32Array(H,V,L.length*Z.BucketStorageSizeFloats);for(let ce=0;ce<L.length;ce++){const Re=L[ce],Ie=ce*3;ie[Ie]=Re.center[0],ie[Ie+1]=Re.center[1],ie[Ie+2]=Re.center[2]}}p.push(H);const Y=new ArrayBuffer(Z.SectionHeaderSizeBytes);Z.writeSectionHeaderToBuffer({maxSplatCount:X,splatCount:X,bucketSize:M,bucketCount:L.length,bucketBlockSize:E,compressionScaleRange:h,storageSizeBytes:B,fullBucketCount:U,partiallyFilledBucketCount:I,sphericalHarmonicsDegree:l},i,Y,0),g.push(Y)}let m=0;for(let _ of p)m+=_.byteLength;const f=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*p.length+m,v=new ArrayBuffer(f);Z.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:p.length,sectionCount:p.length,maxSplatCount:S,splatCount:S,compressionLevel:i,sceneCenter:r,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},v);let A=Z.HeaderSizeBytes;for(let _ of g)new Uint8Array(v,A,Z.SectionHeaderSizeBytes).set(new Uint8Array(_)),A+=Z.SectionHeaderSizeBytes;for(let _ of p)new Uint8Array(v,A,_.byteLength).set(new Uint8Array(_)),A+=_.byteLength;return new Z(v)}static computeBucketsForUncompressedSplatArray(e,t,i){let r=e.splatCount;const s=t/2,o=new P,a=new P;for(let S=0;S<r;S++){const m=e.splats[S],f=[m[pe.OFFSET.X],m[pe.OFFSET.Y],m[pe.OFFSET.Z]];(S===0||f[0]<o.x)&&(o.x=f[0]),(S===0||f[0]>a.x)&&(a.x=f[0]),(S===0||f[1]<o.y)&&(o.y=f[1]),(S===0||f[1]>a.y)&&(a.y=f[1]),(S===0||f[2]<o.z)&&(o.z=f[2]),(S===0||f[2]>a.z)&&(a.z=f[2])}const l=new P().copy(a).sub(o),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),d=new P,h=[],p={};for(let S=0;S<r;S++){const m=e.splats[S],f=[m[pe.OFFSET.X],m[pe.OFFSET.Y],m[pe.OFFSET.Z]],v=Math.floor((f[0]-o.x)/t),A=Math.floor((f[1]-o.y)/t),x=Math.floor((f[2]-o.z)/t);d.x=v*t+o.x+s,d.y=A*t+o.y+s,d.z=x*t+o.z+s;const _=v*(c*u)+A*u+x;let C=p[_];C||(p[_]=C={splats:[],center:d.toArray()}),C.splats.push(S),C.splats.length>=i&&(h.push(C),p[_]=null)}const g=[];for(let S in p)if(p.hasOwnProperty(S)){const m=p[S];m&&g.push(m)}return{fullBuckets:h,partiallyFullBuckets:g}}static preallocateUncompressed(e,t){const i=Z.CompressionLevels[0].SphericalHarmonicsDegrees[t],r=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes,s=r+i.BytesPerSplat*e,o=new ArrayBuffer(s);return Z.writeHeaderToBuffer({versionMajor:Z.CurrentMajorVersion,versionMinor:Z.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new P},o),Z.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,o,Z.HeaderSizeBytes),{splatBuffer:new Z(o,!0),splatBufferDataOffsetBytes:r}}};ue(Z,"CurrentMajorVersion",0),ue(Z,"CurrentMinorVersion",1),ue(Z,"CenterComponentCount",3),ue(Z,"ScaleComponentCount",3),ue(Z,"RotationComponentCount",4),ue(Z,"ColorComponentCount",4),ue(Z,"CovarianceComponentCount",6),ue(Z,"SplatScaleOffsetFloat",3),ue(Z,"SplatRotationOffsetFloat",6),ue(Z,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),ue(Z,"CovarianceSizeFloats",6),ue(Z,"HeaderSizeBytes",4096),ue(Z,"SectionHeaderSizeBytes",1024),ue(Z,"BucketStorageSizeBytes",12),ue(Z,"BucketStorageSizeFloats",3),ue(Z,"BucketBlockSize",5),ue(Z,"BucketSize",256),ue(Z,"computeCovariance",function(){const e=new He,t=new ze,i=new ze,r=new ze,s=new ze,o=new ze,a=new ze;return function(l,c,u,d,h=0,p){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),i.setFromMatrix4(e),r.copy(i).multiply(t),s.copy(r).transpose().premultiply(r),u&&(o.setFromMatrix4(u),a.copy(o).transpose(),s.multiply(a),s.premultiply(o)),p>=1?(d[h]=Ut(s.elements[0]),d[h+1]=Ut(s.elements[3]),d[h+2]=Ut(s.elements[6]),d[h+3]=Ut(s.elements[4]),d[h+4]=Ut(s.elements[7]),d[h+5]=Ut(s.elements[8])):(d[h]=s.elements[0],d[h+1]=s.elements[3],d[h+2]=s.elements[6],d[h+3]=s.elements[4],d[h+4]=s.elements[7],d[h+5]=s.elements[8])}}()),ue(Z,"dot3",(e,t,i,r,s)=>{s[0]=s[1]=s[2]=0;const o=r[0],a=r[1],l=r[2];Z.addInto3(e[0]*o,e[1]*o,e[2]*o,s),Z.addInto3(t[0]*a,t[1]*a,t[2]*a,s),Z.addInto3(i[0]*l,i[1]*l,i[2]*l,s)}),ue(Z,"addInto3",(e,t,i,r)=>{r[0]=r[0]+e,r[1]=r[1]+t,r[2]=r[2]+i}),ue(Z,"dot5",(e,t,i,r,s,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],u=o[2],d=o[3],h=o[4];Z.addInto3(e[0]*l,e[1]*l,e[2]*l,a),Z.addInto3(t[0]*c,t[1]*c,t[2]*c,a),Z.addInto3(i[0]*u,i[1]*u,i[2]*u,a),Z.addInto3(r[0]*d,r[1]*d,r[2]*d,a),Z.addInto3(s[0]*h,s[1]*h,s[2]*h,a)}),ue(Z,"rotateSphericalHarmonics3",(e,t,i,r,s,o,a,l,c)=>{Z.dot3(e,t,i,r,a),Z.dot3(e,t,i,s,l),Z.dot3(e,t,i,o,c)}),ue(Z,"rotateSphericalHarmonics5",(e,t,i,r,s,o,a,l,c,u,d,h,p,g,S,m,f,v)=>{const A=Math.sqrt(.25),x=Math.sqrt(3/4),_=Math.sqrt(1/3),C=Math.sqrt(4/3),y=Math.sqrt(1/12);c[0]=A*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=x*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=A*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),Z.dot5(e,t,i,r,s,c,g),u[0]=A*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),u[1]=a[1]*o[0]+o[1]*a[0],u[2]=x*(a[1]*o[1]+o[1]*a[1]),u[3]=a[1]*o[2]+o[1]*a[2],u[4]=A*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),Z.dot5(e,t,i,r,s,u,S),d[0]=_*(a[2]*a[0]+a[0]*a[2])+-y*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),d[1]=C*a[1]*a[0]+-_*(l[1]*l[0]+o[1]*o[0]),d[2]=a[1]*a[1]+-A*(l[1]*l[1]+o[1]*o[1]),d[3]=C*a[1]*a[2]+-_*(l[1]*l[2]+o[1]*o[2]),d[4]=_*(a[2]*a[2]-a[0]*a[0])+-y*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),Z.dot5(e,t,i,r,s,d,m),h[0]=A*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),h[1]=a[1]*l[0]+l[1]*a[0],h[2]=x*(a[1]*l[1]+l[1]*a[1]),h[3]=a[1]*l[2]+l[1]*a[2],h[4]=A*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),Z.dot5(e,t,i,r,s,h,f),p[0]=A*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),p[1]=l[1]*l[0]-o[1]*o[0],p[2]=x*(l[1]*l[1]-o[1]*o[1]),p[3]=l[1]*l[2]-o[1]*o[2],p[4]=A*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),Z.dot5(e,t,i,r,s,p,v)}),ue(Z,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),i=new ArrayBuffer(16),r=new ArrayBuffer(4),s=new ArrayBuffer(256),o=new xt,a=new P,l=new P,{X:c,Y:u,Z:d,SCALE0:h,SCALE1:p,SCALE2:g,ROTATION0:S,ROTATION1:m,ROTATION2:f,ROTATION3:v,FDC0:A,FDC1:x,FDC2:_,OPACITY:C,FRC0:y,FRC9:w}=pe.OFFSET,E=(M,D,U)=>{const z=U*2+1;return M=Math.round(M*D)+U,St(M,0,z)};return function(M,D,U,z,I,L,O,V,F=-rr,B=rr){const H=Zs(I),$=Z.CompressionLevels[z].BytesPerCenter,J=Z.CompressionLevels[z].BytesPerScale,X=Z.CompressionLevels[z].BytesPerRotation,Y=Z.CompressionLevels[z].BytesPerColor,ee=U,ie=ee+$,ce=ie+J,Re=ce+X,Ie=Re+Y;if(M[S]!==void 0?(o.set(M[S],M[m],M[f],M[v]),o.normalize()):o.set(1,0,0,0),M[h]!==void 0?a.set(M[h]||0,M[p]||0,M[g]||0):a.set(0,0,0),z===0){const Ue=new Float32Array(D,ee,Z.CenterComponentCount),G=new Float32Array(D,ce,Z.RotationComponentCount),Xe=new Float32Array(D,ie,Z.ScaleComponentCount);if(G.set([o.x,o.y,o.z,o.w]),Xe.set([a.x,a.y,a.z]),Ue.set([M[c],M[u],M[d]]),I>0){const xe=new Float32Array(D,Ie,H);if(I>=1){for(let ye=0;ye<9;ye++)xe[ye]=M[y+ye]||0;if(I>=2)for(let ye=0;ye<15;ye++)xe[ye+9]=M[w+ye]||0}}}else{const Ue=new Uint16Array(e,0,Z.CenterComponentCount),G=new Uint16Array(i,0,Z.RotationComponentCount),Xe=new Uint16Array(t,0,Z.ScaleComponentCount);if(G.set([Ut(o.x),Ut(o.y),Ut(o.z),Ut(o.w)]),Xe.set([Ut(a.x),Ut(a.y),Ut(a.z)]),l.set(M[c],M[u],M[d]).sub(L),l.x=E(l.x,O,V),l.y=E(l.y,O,V),l.z=E(l.z,O,V),Ue.set([l.x,l.y,l.z]),I>0){const xe=z===1?Uint16Array:Uint8Array,ye=z===1?2:1,_e=new xe(s,0,H);if(I>=1){for(let be=0;be<9;be++){const b=M[y+be]||0;_e[be]=z===1?Ut(b):Ko(b,F,B)}const Je=9*ye;if(ws(_e.buffer,0,D,Ie,Je),I>=2){for(let be=0;be<15;be++){const b=M[w+be]||0;_e[be+9]=z===1?Ut(b):Ko(b,F,B)}ws(_e.buffer,Je,D,Ie+Je,15*ye)}}}ws(Ue.buffer,0,D,ee,6),ws(Xe.buffer,0,D,ie,6),ws(G.buffer,0,D,ce,8)}const Ae=new Uint8ClampedArray(r,0,4);Ae.set([M[A]||0,M[x]||0,M[_]||0]),Ae[3]=M[C]||0,ws(Ae.buffer,0,D,Re,4)}}());let Me=Z;const vg=new Uint8Array([112,108,121,10]),Sg=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Ju="end_header",ed=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),_i=(n,e)=>{const t=(1<<e)-1;return(n&t)/t},Ag=(n,e)=>{n.x=_i(e>>>21,11),n.y=_i(e>>>11,10),n.z=_i(e,11)},Zw=(n,e)=>{n.x=_i(e>>>24,8),n.y=_i(e>>>16,8),n.z=_i(e>>>8,8),n.w=_i(e,8)},Jw=(n,e)=>{const t=1/(Math.sqrt(2)*.5),i=(_i(e>>>20,10)-.5)*t,r=(_i(e>>>10,10)-.5)*t,s=(_i(e,10)-.5)*t,o=Math.sqrt(1-(i*i+r*r+s*s));switch(e>>>30){case 0:n.set(o,i,r,s);break;case 1:n.set(i,o,r,s);break;case 2:n.set(i,r,o,s);break;case 3:n.set(i,r,s,o);break}},Di=(n,e,t)=>n*(1-t)+e*t,_t=(n,e)=>{var t;return(t=n.properties.find(i=>i.name===e&&i.storage))==null?void 0:t.storage},lt=class lt{static decodeHeaderText(e){let t,i,r,s;const o=e.split(`
`).filter(d=>!d.startsWith("comment "));let a=0,l=!1;for(let d=1;d<o.length;++d){const h=o[d].split(" ");switch(h[0]){case"format":if(h[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:h[1],count:parseInt(h[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?i=t:t.name==="vertex"?r=t:t.name==="sh"&&(s=t);break;case"property":{if(!ed.has(h[1]))throw new Error(`Unrecognized property data type '${h[1]}' in ply header`);const p=ed.get(h[1]),g=p.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(a+=p.BYTES_PER_ELEMENT),t.properties.push({type:h[1],name:h[2],storage:null,byteSize:p.BYTES_PER_ELEMENT,storageSizeByes:g}),t.storageSizeBytes+=g;break}case Ju:l=!0;break;default:throw new Error(`Unrecognized header value '${h[0]}' in ply header`)}if(l)break}let c=0,u=0;return s&&(u=s.properties.length,s.properties.length>=45?c=3:s.properties.length>=24?c=2:s.properties.length>=9&&(c=1)),{chunkElement:i,vertexElement:r,shElement:s,bytesPerSplat:a,headerSizeBytes:e.indexOf(Ju)+Ju.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:u}}static decodeHeader(e){const t=(p,g)=>{const S=p.length-g.length;let m,f;for(m=0;m<=S;++m){for(f=0;f<g.length&&p[m+f]===g[f];++f);if(f===g.length)return m}return-1},i=(p,g)=>{if(p.length<g.length)return!1;for(let S=0;S<g.length;++S)if(p[S]!==g[S])return!1;return!0};let r=new Uint8Array(e),s;if(r.length>=vg.length&&!i(r,vg))throw new Error("Invalid PLY header");if(s=t(r,Sg),s===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(r.slice(0,s)),{chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:d,bytesPerSplat:h}=lt.decodeHeaderText(o);return{headerSizeBytes:s+Sg.length,bytesPerSplat:h,chunkElement:a,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:d}}static readElementData(e,t,i,r,s,o=null){let a=t instanceof DataView?t:new DataView(t);r=r||0,s=s||e.count-1;for(let l=r;l<=s;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],d=ed.get(u.type),h=d.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<h)&&(!o||o(u.name))&&(u.storage=new d(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=a.getInt8(i);break;case"uchar":u.storage[l]=a.getUint8(i);break;case"short":u.storage[l]=a.getInt16(i,!0);break;case"ushort":u.storage[l]=a.getUint16(i,!0);break;case"int":u.storage[l]=a.getInt32(i,!0);break;case"uint":u.storage[l]=a.getUint32(i,!0);break;case"float":u.storage[l]=a.getFloat32(i,!0);break;case"double":u.storage[l]=a.getFloat64(i,!0);break}i+=u.byteSize}return i}static readPly(e,t=null){const i=lt.decodeHeader(e);let r=lt.readElementData(i.chunkElement,e,i.headerSizeBytes,null,null,t);return r=lt.readElementData(i.vertexElement,e,r,null,null,t),lt.readElementData(i.shElement,e,r,null,null,t),{chunkElement:i.chunkElement,vertexElement:i.vertexElement,shElement:i.shElement,sphericalHarmonicsDegree:i.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:i.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,i){const r={};if(t){const s=_t(e,"min_r"),o=_t(e,"min_g"),a=_t(e,"min_b"),l=_t(e,"max_r"),c=_t(e,"max_g"),u=_t(e,"max_b"),d=_t(e,"min_x"),h=_t(e,"min_y"),p=_t(e,"min_z"),g=_t(e,"max_x"),S=_t(e,"max_y"),m=_t(e,"max_z"),f=_t(e,"min_scale_x"),v=_t(e,"min_scale_y"),A=_t(e,"min_scale_z"),x=_t(e,"max_scale_x"),_=_t(e,"max_scale_y"),C=_t(e,"max_scale_z"),y=_t(t,"packed_position"),w=_t(t,"packed_rotation"),E=_t(t,"packed_scale"),M=_t(t,"packed_color");r.colorExtremes={minR:s,maxR:l,minG:o,maxG:c,minB:a,maxB:u},r.positionExtremes={minX:d,maxX:g,minY:h,maxY:S,minZ:p,maxZ:m},r.scaleExtremes={minScaleX:f,maxScaleX:x,minScaleY:v,maxScaleY:_,minScaleZ:A,maxScaleZ:C},r.position=y,r.rotation=w,r.scale=E,r.color=M}if(i){const s={};for(let o=0;o<45;o++){const a=`f_rest_${o}`,l=_t(i,a);if(l)s[a]=l;else break}r.sh=s}return r}static parseToUncompressedSplatBufferSection(e,t,i,r,s,o,a,l,c=null){lt.readElementData(t,o,0,i,r,c);const u=Me.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:d,scaleExtremes:h,colorExtremes:p,position:g,rotation:S,scale:m,color:f}=lt.getElementStorageArrays(e,t),v=pe.createSplat();for(let A=i;A<=r;++A){lt.decompressBaseSplat(A,s,g,d,m,h,S,p,f,v);const x=A*u+l;Me.writeSplatDataToSectionBuffer(v,a,x,0,0)}}static parseToUncompressedSplatArraySection(e,t,i,r,s,o,a,l=null){lt.readElementData(t,o,0,i,r,l);const{positionExtremes:c,scaleExtremes:u,colorExtremes:d,position:h,rotation:p,scale:g,color:S}=lt.getElementStorageArrays(e,t);for(let m=i;m<=r;++m){const f=pe.createSplat();lt.decompressBaseSplat(m,s,h,c,g,u,p,d,S,f),a.addSplat(f)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,i,r,s,o,a,l,c,u=null){lt.readElementData(t,s,o,i,r,u);const{sh:d}=lt.getElementStorageArrays(e,void 0,t),h=Object.values(d);for(let p=i;p<=r;++p)lt.decompressSphericalHarmonics(p,h,a,l,c.splats[p])}static parseToUncompressedSplatArray(e,t){const{chunkElement:i,vertexElement:r,shElement:s,sphericalHarmonicsDegree:o}=lt.readPly(e);t=Math.min(t,o);const a=new pe(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:u,position:d,rotation:h,scale:p,color:g}=lt.getElementStorageArrays(i,r);let S;if(t>0){const{sh:m}=lt.getElementStorageArrays(i,void 0,s);S=Object.values(m)}for(let m=0;m<r.count;++m){a.addDefaultSplat();const f=a.getSplat(a.splatCount-1);lt.decompressBaseSplat(m,0,d,l,p,c,h,u,g,f),t>0&&lt.decompressSphericalHarmonics(m,S,t,o,f)}return a}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:i,vertexElement:r,shElement:s,sphericalHarmonicsDegree:o}=lt.readPly(e);t=Math.min(t,o);const{splatBuffer:a,splatBufferDataOffsetBytes:l}=Me.preallocateUncompressed(r.count,t),{positionExtremes:c,scaleExtremes:u,colorExtremes:d,position:h,rotation:p,scale:g,color:S}=lt.getElementStorageArrays(i,r);let m;if(t>0){const{sh:A}=lt.getElementStorageArrays(i,void 0,s);m=Object.values(A)}const f=Me.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,v=pe.createSplat(t);for(let A=0;A<r.count;++A){lt.decompressBaseSplat(A,0,h,c,g,u,p,d,S,v),t>0&&lt.decompressSphericalHarmonics(A,m,t,o,v);const x=A*f+l;Me.writeSplatDataToSectionBuffer(v,a.bufferData,x,0,t)}return a}};ue(lt,"decompressBaseSplat",function(){const e=new P,t=new xt,i=new P,r=new Bt,s=pe.OFFSET;return function(o,a,l,c,u,d,h,p,g,S){S=S||pe.createSplat();const m=Math.floor((a+o)/256);return Ag(e,l[o]),Jw(t,h[o]),Ag(i,u[o]),Zw(r,g[o]),S[s.X]=Di(c.minX[m],c.maxX[m],e.x),S[s.Y]=Di(c.minY[m],c.maxY[m],e.y),S[s.Z]=Di(c.minZ[m],c.maxZ[m],e.z),S[s.ROTATION0]=t.x,S[s.ROTATION1]=t.y,S[s.ROTATION2]=t.z,S[s.ROTATION3]=t.w,S[s.SCALE0]=Math.exp(Di(d.minScaleX[m],d.maxScaleX[m],i.x)),S[s.SCALE1]=Math.exp(Di(d.minScaleY[m],d.maxScaleY[m],i.y)),S[s.SCALE2]=Math.exp(Di(d.minScaleZ[m],d.maxScaleZ[m],i.z)),p.minR&&p.maxR?S[s.FDC0]=St(Math.round(Di(p.minR[m],p.maxR[m],r.x)*255),0,255):S[s.FDC0]=St(Math.floor(r.x*255),0,255),p.minG&&p.maxG?S[s.FDC1]=St(Math.round(Di(p.minG[m],p.maxG[m],r.y)*255),0,255):S[s.FDC1]=St(Math.floor(r.y*255),0,255),p.minB&&p.maxB?S[s.FDC2]=St(Math.round(Di(p.minB[m],p.maxB[m],r.z)*255),0,255):S[s.FDC2]=St(Math.floor(r.z*255),0,255),S[s.OPACITY]=St(Math.floor(r.w*255),0,255),S}}()),ue(lt,"decompressSphericalHarmonics",function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(i,r,s,o,a){a=a||pe.createSplat();let l=e[s],c=e[o];for(let u=0;u<3;++u)for(let d=0;d<15;++d){const h=t[u*15+d];d<l&&d<c&&(a[pe.OFFSET.FRC0+h]=r[u*c+d][i]*(8/255)-4)}return a}}());let Oi=lt;const hn={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[kS,Eh,Ch,Mh,Th,wh,Rh]=[0,1,2,3,4,5,6],xg={double:kS,int:Eh,uint:Ch,float:Mh,short:Th,ushort:wh,uchar:Rh},e1={[kS]:8,[Eh]:4,[Ch]:4,[Mh]:4,[Th]:2,[wh]:2,[Rh]:1},An=class An{static decodeSectionHeader(e,t,i=0){const r=[];let s=!1,o=-1,a=0,l=!1,c=null;const u=[],d=[],h=[],p={};for(let f=i;f<e.length;f++){const v=e[f].trim();if(v.startsWith("element"))if(s){o--;break}else{s=!0,i=f,o=f;const A=v.split(" ");let x=0;for(let _ of A){const C=_.trim();C.length>0&&(x++,x===2?c=C:x===3&&(a=parseInt(C)))}}else if(v.startsWith("property")){const A=v.match(/(\w+)\s+(\w+)\s+(\w+)/);if(A){const x=A[2],_=A[3];h.push(_);const C=t[_];p[_]=x;const y=xg[x];C!==void 0&&(u.push(C),d[C]=y)}}if(v===An.HeaderEndToken){l=!0;break}s&&(r.push(v),o++)}const g=[];let S=0;for(let f of h){const v=p[f];if(p.hasOwnProperty(f)){const A=t[f];A!==void 0&&(g[A]=S)}S+=e1[xg[v]]}const m=An.decodeSphericalHarmonicsFromSectionHeader(h,t);return{headerLines:r,headerStartLine:i,headerEndLine:o,fieldTypes:d,fieldIds:u,fieldOffsets:g,bytesPerVertex:S,vertexCount:a,dataSizeBytes:S*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let i=0,r=0;for(let l of e)l.startsWith("f_rest")&&i++;r=i/3;let s=0;r>=3&&(s=1),r>=8&&(s=2);let o=[],a=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+r*l)]);if(s>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+r*l+3)])}return{degree:s,coefficientsPerChannel:r,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let i of e)if(i.startsWith("element")){const r=i.split(" ");let s=0;for(let o of r){const a=o.trim();a.length>0&&(s++,s===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(An.HeaderEndToken)}static checkBufferForEndHeader(e,t,i,r){const s=new Uint8Array(e,Math.max(0,t-i),i),o=r.decode(s);return An.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let i=0,r="";const s=100;for(;;){if(i+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,i,s);if(r+=t.decode(o),i+=s,An.checkBufferForEndHeader(e,i,s*2,t))break}return r}static readHeaderFromBuffer(e){const t=new TextDecoder;let i=0,r="";const s=100;for(;;){if(i+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,i,s);if(r+=t.decode(o),i+=s,An.checkBufferForEndHeader(e,i,s*2,t))break}return r}static convertHeaderTextToLines(e){const t=e.split(`
`),i=[];for(let r=0;r<t.length;r++){const s=t[r].trim();if(i.push(s),s===An.HeaderEndToken)break}return i}static determineHeaderFormatFromHeaderText(e){const t=An.convertHeaderTextToLines(e);let i=hn.INRIAV1;for(let r=0;r<t.length;r++){const s=t[r].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))i=hn.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))i=hn.INRIAV2;else if(s===An.HeaderEndToken)break}return i}static determineHeaderFormatFromPlyBuffer(e){const t=An.extractHeaderFromBufferToText(e);return An.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,i,r,s,o,a=!0){const l=i*t.bytesPerVertex+r,c=t.fieldOffsets,u=t.fieldTypes;for(let d of s){const h=u[d];h===Mh?o[d]=e.getFloat32(l+c[d],!0):h===Th?o[d]=e.getInt16(l+c[d],!0):h===wh?o[d]=e.getUint16(l+c[d],!0):h===Eh?o[d]=e.getInt32(l+c[d],!0):h===Ch?o[d]=e.getUint32(l+c[d],!0):h===Rh&&(a?o[d]=e.getUint8(l+c[d])/255:o[d]=e.getUint8(l+c[d]))}}};ue(An,"HeaderEndToken","end_header");let It=An;const zS=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],t1=zS.map((n,e)=>e),[yg,n1,i1,r1,s1,o1,a1,l1,c1,u1,_g,d1,f1,Eg,Cg,h1,p1,m1]=t1,Gn=class Gn{static decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let i=0;t>=45?i=45:t>=24?i=24:t>=9&&(i=9);let s=Array.from(Array(Math.max(i-1,0))).map((u,d)=>`f_rest_${d+1}`);const o=[...zS,...s],a=o.map((u,d)=>d),l=a.reduce((u,d)=>(u[o[d]]=d,u),{}),c=It.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}static decodeHeaderText(e){const t=It.convertHeaderTextToLines(e),i=Gn.decodeHeaderLines(t);return i.headerText=e,i.headerSizeBytes=e.indexOf(It.HeaderEndToken)+It.HeaderEndToken.length+1,i}static decodeHeaderFromBuffer(e){const t=It.readHeaderFromBuffer(e);return Gn.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,i,r,s,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=Me.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=i;u++){const d=Gn.parseToUncompressedSplat(r,u,e,s,l),h=u*c+a;Me.writeSplatDataToSectionBuffer(d,o,h,0,l)}}static parseToUncompressedSplatArraySection(e,t,i,r,s,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=i;l++){const c=Gn.parseToUncompressedSplat(r,l,e,s,a);o.addSplat(c)}}static decodeSectionSplatData(e,t,i,r,s=!0){if(r=Math.min(r,i.sphericalHarmonicsDegree),s){const o=new pe(r);for(let a=0;a<t;a++){const l=Gn.parseToUncompressedSplat(e,a,i,0,r);o.addSplat(l)}return o}else{const{splatBuffer:o,splatBufferDataOffsetBytes:a}=Me.preallocateUncompressed(t,r);return Gn.parseToUncompressedSplatBufferSection(i,0,t-1,e,0,o.bufferData,a,r),o}}static readSplat(e,t,i,r,s){return It.readVertex(e,t,i,r,t.fieldsToReadIndexes,s,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:i,splatCount:r,splatData:s}=Mg(e);return Gn.decodeSectionSplatData(s,r,i,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:i,splatCount:r,splatData:s}=Mg(e);return Gn.decodeSectionSplatData(s,r,i,t,!1)}};ue(Gn,"parseToUncompressedSplat",function(){let e=[];const t=new xt,i=pe.OFFSET.X,r=pe.OFFSET.Y,s=pe.OFFSET.Z,o=pe.OFFSET.SCALE0,a=pe.OFFSET.SCALE1,l=pe.OFFSET.SCALE2,c=pe.OFFSET.ROTATION0,u=pe.OFFSET.ROTATION1,d=pe.OFFSET.ROTATION2,h=pe.OFFSET.ROTATION3,p=pe.OFFSET.FDC0,g=pe.OFFSET.FDC1,S=pe.OFFSET.FDC2,m=pe.OFFSET.OPACITY,f=[];for(let v=0;v<45;v++)f[v]=pe.OFFSET.FRC0+v;return function(v,A,x,_=0,C=0){C=Math.min(C,x.sphericalHarmonicsDegree),Gn.readSplat(v,x,A,_,e);const y=pe.createSplat(C);if(e[yg]!==void 0?(y[o]=Math.exp(e[yg]),y[a]=Math.exp(e[n1]),y[l]=Math.exp(e[i1])):(y[o]=.01,y[a]=.01,y[l]=.01),e[_g]!==void 0){const w=.28209479177387814;y[p]=(.5+w*e[_g])*255,y[g]=(.5+w*e[d1])*255,y[S]=(.5+w*e[f1])*255}else e[Cg]!==void 0?(y[p]=e[Cg]*255,y[g]=e[h1]*255,y[S]=e[p1]*255):(y[p]=0,y[g]=0,y[S]=0);if(e[Eg]!==void 0&&(y[m]=1/(1+Math.exp(-e[Eg]))*255),y[p]=St(Math.floor(y[p]),0,255),y[g]=St(Math.floor(y[g]),0,255),y[S]=St(Math.floor(y[S]),0,255),y[m]=St(Math.floor(y[m]),0,255),C>=1&&e[m1]!==void 0){for(let w=0;w<9;w++)y[f[w]]=e[x.sphericalHarmonicsDegree1Fields[w]];if(C>=2)for(let w=0;w<15;w++)y[f[9+w]]=e[x.sphericalHarmonicsDegree2Fields[w]]}return t.set(e[r1],e[s1],e[o1],e[a1]),t.normalize(),y[c]=t.x,y[u]=t.y,y[d]=t.z,y[h]=t.w,y[i]=e[l1],y[r]=e[c1],y[s]=e[u1],y}}());let Wi=Gn;function Mg(n){const e=Wi.decodeHeaderFromBuffer(n),t=e.splatCount,i=Wi.findSplatData(n,e);return{header:e,splatCount:t,splatData:i}}const HS=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],xl=HS.map((n,e)=>e),[yl,g1,v1,Tg,_l,S1,td]=[0,1,4,16,17,18,19],VS=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],cf=VS.map((n,e)=>e),[wg,A1,x1,y1,_1,E1,C1,M1,T1,w1,uf,GS,WS,Rg]=cf,Ig=uf,R1=GS,I1=WS,El=n=>{const e=(31744&n)>>10,t=1023&n;return(n>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},xn=class xn{static decodeSectionHeadersFromHeaderLines(e){const t=cf.reduce((u,d)=>(u[VS[d]]=d,u),{}),i=xl.reduce((u,d)=>(u[HS[d]]=d,u),{}),r=It.getHeaderSectionNames(e);let s;for(let u=0;u<r.length;u++)r[u]==="codebook_centers"&&(s=u);let o=0,a=!1;const l=[];let c=0;for(;!a;){let u;c===s?u=It.decodeSectionHeader(e,i,o):u=It.decodeSectionHeader(e,t,o),a=u.endOfHeader,o=u.headerEndLine+1,a||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=It.convertHeaderTextToLines(e);return xn.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let i of e)i.sectionName!=="codebook_centers"&&(t+=i.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(It.HeaderEndToken)+It.HeaderEndToken.length+1,i=xn.decodeSectionHeadersFromHeaderText(e),r=xn.getSplatCountFromSectionHeaders(i);return{headerSizeBytes:t,sectionHeaders:i,splatCount:r}}static decodeHeaderFromBuffer(e){const t=It.readHeaderFromBuffer(e);return xn.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,i){let r=t.headerSizeBytes;for(let s=0;s<i&&s<t.sectionHeaders.length;s++){const o=t.sectionHeaders[s];r+=o.dataSizeBytes}return new DataView(e,r,t.sectionHeaders[i].dataSizeBytes)}static decodeCodeBook(e,t){const i=[],r=[];for(let s=0;s<t.vertexCount;s++){It.readVertex(e,t,s,0,xl,i);for(let o of xl){const a=xl[o];let l=r[a];l||(r[a]=l=[]),l.push(i[o])}}for(let s=0;s<r.length;s++){const o=r[s],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=El(o[l]);s===Tg?o[l]=Math.round(1/(1+Math.exp(-c))*255):s===yl?o[l]=Math.round((.5+a*c)*255):s===_l?o[l]=Math.exp(c):o[l]=c}}return r}static decodeSectionSplatData(e,t,i,r,s){s=Math.min(s,i.sphericalHarmonicsDegree);const o=new pe(s);for(let a=0;a<t;a++){const l=xn.parseToUncompressedSplat(e,a,i,r,0,s);o.addSplat(l)}return o}static readSplat(e,t,i,r,s){return It.readVertex(e,t,i,r,cf,s,!1)}static parseToUncompressedSplatArray(e,t=0){const i=[],r=xn.decodeHeaderFromBuffer(e,t);let s;for(let a=0;a<r.sectionHeaders.length;a++){const l=r.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=xn.findVertexData(e,r,a);s=xn.decodeCodeBook(c,l)}}for(let a=0;a<r.sectionHeaders.length;a++){const l=r.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=xn.findVertexData(e,r,a),d=xn.decodeSectionSplatData(u,c,l,s,t);i.push(d)}}const o=new pe(t);for(let a of i)for(let l of a.splats)o.addSplat(l);return o}};ue(xn,"parseToUncompressedSplat",function(){let e=[];const t=new xt,i=pe.OFFSET.X,r=pe.OFFSET.Y,s=pe.OFFSET.Z,o=pe.OFFSET.SCALE0,a=pe.OFFSET.SCALE1,l=pe.OFFSET.SCALE2,c=pe.OFFSET.ROTATION0,u=pe.OFFSET.ROTATION1,d=pe.OFFSET.ROTATION2,h=pe.OFFSET.ROTATION3,p=pe.OFFSET.FDC0,g=pe.OFFSET.FDC1,S=pe.OFFSET.FDC2,m=pe.OFFSET.OPACITY,f=[];for(let v=0;v<45;v++)f[v]=pe.OFFSET.FRC0+v;return function(v,A,x,_,C=0,y=0){y=Math.min(y,x.sphericalHarmonicsDegree),xn.readSplat(v,x,A,C,e);const w=pe.createSplat(y);if(e[wg]!==void 0?(w[o]=_[_l][e[wg]],w[a]=_[_l][e[A1]],w[l]=_[_l][e[x1]]):(w[o]=.01,w[a]=.01,w[l]=.01),e[uf]!==void 0?(w[p]=_[yl][e[uf]],w[g]=_[yl][e[GS]],w[S]=_[yl][e[WS]]):e[Ig]!==void 0?(w[p]=e[Ig]*255,w[g]=e[R1]*255,w[S]=e[I1]*255):(w[p]=0,w[g]=0,w[S]=0),e[Rg]!==void 0&&(w[m]=_[Tg][e[Rg]]),w[p]=St(Math.floor(w[p]),0,255),w[g]=St(Math.floor(w[g]),0,255),w[S]=St(Math.floor(w[S]),0,255),w[m]=St(Math.floor(w[m]),0,255),y>=1&&x.sphericalHarmonicsDegree>=1){for(let z=0;z<9;z++){const I=_[g1+z%3];w[f[z]]=I[e[x.sphericalHarmonicsDegree1Fields[z]]]}if(y>=2&&x.sphericalHarmonicsDegree>=2)for(let z=0;z<15;z++){const I=_[v1+z%5];w[f[9+z]]=I[e[x.sphericalHarmonicsDegree2Fields[z]]]}}const E=_[S1][e[y1]],M=_[td][e[_1]],D=_[td][e[E1]],U=_[td][e[C1]];return t.set(E,M,D,U),t.normalize(),w[c]=t.x,w[u]=t.y,w[d]=t.z,w[h]=t.w,w[i]=El(e[M1]),w[r]=El(e[T1]),w[s]=El(e[w1]),w}}());let df=xn;class bg{static parseToUncompressedSplatArray(e,t=0){const i=It.determineHeaderFormatFromPlyBuffer(e);if(i===hn.PlayCanvasCompressed)return Oi.parseToUncompressedSplatArray(e,t);if(i===hn.INRIAV1)return Wi.parseToUncompressedSplatArray(e,t);if(i===hn.INRIAV2)return df.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const i=It.determineHeaderFormatFromPlyBuffer(e);if(i===hn.PlayCanvasCompressed)return Oi.parseToUncompressedSplatBuffer(e,t);if(i===hn.INRIAV1)return Wi.parseToUncompressedSplatBuffer(e,t);if(i===hn.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class Ih{constructor(e,t,i,r){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=i,this.partitionGenerator=r}partitionUncompressedSplatArray(e){let t,i,r;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,i=o.sectionCount,r=o.sectionFilters}else t=this.groupingParameters,i=this.sectionCount,r=this.sectionFilters;const s=[];for(let o=0;o<i;o++){const a=new pe(e.sphericalHarmonicsDegree),l=r[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);s.push(a)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new P,i=Me.BucketBlockSize,r=Me.BucketSize){const s=o=>{const a=pe.OFFSET.X,l=pe.OFFSET.Y,c=pe.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new P,d=.5,h=f=>{f.x=Math.floor(f.x/d)*d,f.y=Math.floor(f.y/d)*d,f.z=Math.floor(f.z/d)*d};o.splats.forEach(f=>{u.set(f[a],f[l],f[c]).sub(t),h(u),f.centerDist=u.lengthSq()}),o.splats.sort((f,v)=>{let A=f.centerDist,x=v.centerDist;return A>x?1:-1});const p=[],g=[];e=Math.min(o.splatCount,e);const S=Math.ceil(o.splatCount/e);let m=0;for(let f=0;f<S;f++){let v=m;p.push(A=>A>=v&&A<v+e),g.push({blocksSize:i,bucketSize:r}),m+=e}return{sectionCount:p.length,sectionFilters:p,groupingParameters:g}};return new Ih(void 0,void 0,void 0,s)}}class Pa{constructor(e,t,i,r,s,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=i,this.sectionSize=r,this.sceneCenter=s?new P().copy(s):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Me.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,i=0,r=new P,s=Me.BucketBlockSize,o=Me.BucketSize){const a=Ih.getStandardPartitioner(i,r,s,o);return new Pa(a,e,t,i,r,s,o)}}const bt={Downloading:0,Processing:1,Done:2};class Sc extends Error{constructor(e){super(e)}}const mt={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function Pg(n,e){let t=0;for(let r of n)t+=r.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let i=0;for(let r of n)new Uint8Array(e,i,r.sizeBytes).set(r.data),i+=r.sizeBytes;return e}function Dg(n,e,t,i,r,s,o,a){return e?Pa.getStandardGenerator(t,i,r,s,o,a).generateFromUncompressedSplatArray(n):Me.generateFromUncompressedSplatArrays([n],t,0,new P)}class bh{static loadFromURL(e,t,i,r,s,o,a=!0,l=0,c,u,d,h,p){let g;!i&&!a?g=mt.DownloadBeforeProcessing:a?g=mt.ProgressiveToSplatArray:g=mt.ProgressiveToSplatBuffer;const S=Ze.ProgressiveLoadSectionSize,m=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes,f=1;let v,A,x,_,C,y=0,w=0,E=0,M=!1,D=!1,U=!1;const z=Ah();let I=0,L=0,O=0,V=0,F="",B=null,H=[],$;const J=new TextDecoder,X=(Y,ee,ie)=>{const ce=Y>=100;if(ie&&(H.push({data:ie,sizeBytes:ie.byteLength,startBytes:O,endBytes:O+ie.byteLength}),O+=ie.byteLength),g===mt.DownloadBeforeProcessing)ce&&z.resolve(H);else{if(M){if(v===hn.PlayCanvasCompressed&&!D){const Re=B.headerSizeBytes+B.chunkElement.storageSizeBytes;C=Pg(H,C),C.byteLength>=Re&&(Oi.readElementData(B.chunkElement,C,B.headerSizeBytes),I=Re,L=Re,D=!0)}}else if(F+=J.decode(ie),It.checkTextForEndHeader(F)){if(v=It.determineHeaderFormatFromHeaderText(F),v===hn.INRIAV1)B=Wi.decodeHeaderText(F),l=Math.min(l,B.sphericalHarmonicsDegree),y=B.splatCount,D=!0,V=B.headerSizeBytes+B.bytesPerSplat*y;else if(v===hn.PlayCanvasCompressed){if(B=Oi.decodeHeaderText(F),l=Math.min(l,B.sphericalHarmonicsDegree),g===mt.ProgressiveToSplatBuffer&&l>0)throw new Sc("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");y=B.vertexElement.count,V=B.headerSizeBytes+B.bytesPerSplat*y+B.chunkElement.storageSizeBytes}else{if(g===mt.ProgressiveToSplatBuffer)throw new Sc("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");g=mt.DownloadBeforeProcessing;return}if(g===mt.ProgressiveToSplatBuffer){const Re=Me.CompressionLevels[0].SphericalHarmonicsDegrees[l],Ie=m+Re.BytesPerSplat*y;x=new ArrayBuffer(Ie),Me.writeHeaderToBuffer({versionMajor:Me.CurrentMajorVersion,versionMinor:Me.CurrentMinorVersion,maxSectionCount:f,sectionCount:f,maxSplatCount:y,splatCount:0,compressionLevel:0,sceneCenter:new P},x)}else $=new pe(l);I=B.headerSizeBytes,L=B.headerSizeBytes,M=!0}if(M&&D&&H.length>0&&(A=Pg(H,A),O-I>S||O>=V&&!U||ce)){const Ie=U?B.sphericalHarmonicsPerSplat:B.bytesPerSplat,Ue=(U?O:Math.min(V,O))-L,G=Math.floor(Ue/Ie),Xe=G*Ie,xe=O-L-Xe,ye=L-H[0].startBytes,_e=new DataView(A,ye,Xe);if(U)v===hn.PlayCanvasCompressed&&g===mt.ProgressiveToSplatArray&&(Oi.parseSphericalHarmonicsToUncompressedSplatArraySection(B.chunkElement,B.shElement,E,E+G-1,_e,0,l,B.sphericalHarmonicsDegree,$),E+=G);else{if(g===mt.ProgressiveToSplatBuffer){const Je=Me.CompressionLevels[0].SphericalHarmonicsDegrees[l],be=w*Je.BytesPerSplat+m;v===hn.PlayCanvasCompressed?Oi.parseToUncompressedSplatBufferSection(B.chunkElement,B.vertexElement,0,G-1,w,_e,x,be):Wi.parseToUncompressedSplatBufferSection(B,0,G-1,_e,0,x,be,l)}else v===hn.PlayCanvasCompressed?Oi.parseToUncompressedSplatArraySection(B.chunkElement,B.vertexElement,0,G-1,w,_e,$):Wi.parseToUncompressedSplatArraySection(B,0,G-1,_e,0,$,l);w+=G,g===mt.ProgressiveToSplatBuffer&&(_||(Me.writeSectionHeaderToBuffer({maxSplatCount:y,splatCount:w,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,x,Me.HeaderSizeBytes),_=new Me(x,!1)),_.updateLoadedCounts(1,w)),O>=V&&(U=!0)}if(xe===0)H=[];else{let Je=[],be=0;for(let b=H.length-1;b>=0;b--){const T=H[b];if(be+=T.sizeBytes,Je.unshift(T),be>=xe)break}H=Je}I+=S,L+=Xe}r&&_&&r(_,ce),ce&&(g===mt.ProgressiveToSplatBuffer?z.resolve(_):z.resolve($))}t&&t(Y,ee,bt.Downloading)};return t&&t(0,"0%",bt.Downloading),Wc(e,X,!1,c).then(()=>(t&&t(0,"0%",bt.Processing),z.promise.then(Y=>{if(t&&t(100,"100%",bt.Done),g===mt.DownloadBeforeProcessing){const ee=H.map(ie=>ie.data);return new Blob(ee).arrayBuffer().then(ie=>bh.loadFromFileData(ie,s,o,a,l,u,d,h,p))}else return g===mt.ProgressiveToSplatBuffer?Y:Bn(()=>Dg(Y,a,s,o,u,d,h,p))})))}static loadFromFileData(e,t,i,r,s=0,o,a,l,c){return r?Bn(()=>bg.parseToUncompressedSplatArray(e,s)).then(u=>Dg(u,r,t,i,o,a,l,c)):Bn(()=>bg.parseToUncompressedSplatBuffer(e,s))}}const b1=n=>new ReadableStream({async start(e){e.enqueue(n),e.close()}});async function P1(n){try{const e=b1(n);if(!e)throw new Error("Failed to create stream from data");return await D1(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function D1(n){const e=n.pipeThrough(new DecompressionStream("gzip")),i=await new Response(e).arrayBuffer();return new Uint8Array(i)}const L1=1347635022,F1=1,B1=.15;function U1(n){const e=n>>15&1,t=n>>10&31,i=n&1023,r=e===1?-1:1;return t===0?r*Math.pow(2,-14)*i/1024:t===31?i!==0?NaN:r*(1/0):r*Math.pow(2,t-15)*(1+i/1024)}function N1(n){return(n-128)/128}function jr(n){switch(n){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${n}`),0}}const O1=function(){let n=[];const e=new xt,t=pe.OFFSET.X,i=pe.OFFSET.Y,r=pe.OFFSET.Z,s=pe.OFFSET.SCALE0,o=pe.OFFSET.SCALE1,a=pe.OFFSET.SCALE2,l=pe.OFFSET.ROTATION0,c=pe.OFFSET.ROTATION1,u=pe.OFFSET.ROTATION2,d=pe.OFFSET.ROTATION3,h=pe.OFFSET.FDC0,p=pe.OFFSET.FDC1,g=pe.OFFSET.FDC2,S=pe.OFFSET.OPACITY,m=[jr(0),jr(1),jr(2),jr(3)],f=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(v,A,x){x=Math.min(A,x);const _=pe.createSplat(x);v.scale[0]!==void 0?(_[s]=v.scale[0],_[o]=v.scale[1],_[a]=v.scale[2]):(_[s]=.01,_[o]=.01,_[a]=.01),v.color[0]!==void 0?(_[h]=v.color[0],_[p]=v.color[1],_[g]=v.color[2]):n[RED]!==void 0?(_[h]=n[RED]*255,_[p]=n[GREEN]*255,_[g]=n[BLUE]*255):(_[h]=0,_[p]=0,_[g]=0),v.alpha!==void 0&&(_[S]=v.alpha),_[h]=St(Math.floor(_[h]),0,255),_[p]=St(Math.floor(_[p]),0,255),_[g]=St(Math.floor(_[g]),0,255),_[S]=St(Math.floor(_[S]),0,255);let C=m[x],y=m[A];for(let w=0;w<3;++w)for(let E=0;E<15;++E){const M=f[w*15+E];E<C&&E<y&&(_[pe.OFFSET.FRC0+M]=v.sh[w*y+E])}return e.set(v.rotation[3],v.rotation[0],v.rotation[1],v.rotation[2]),e.normalize(),_[l]=e.x,_[c]=e.y,_[u]=e.z,_[d]=e.w,_[t]=v.position[0],_[i]=v.position[1],_[r]=v.position[2],_}}();function k1(n,e,t,i){return!(n.positions.length!==e*3*(i?2:3)||n.scales.length!==e*3||n.rotations.length!==e*3||n.alphas.length!==e||n.colors.length!==e*3||n.sh.length!==e*t*3)}function Lg(n,e,t,i,r){e=Math.min(e,n.shDegree);const s=n.numPoints,o=jr(n.shDegree),a=n.positions.length===s*3*2;if(!k1(n,s,o,a))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;a&&(c=new Uint16Array(n.positions.buffer,n.positions.byteOffset,s*3));const u=1/(1<<n.fractionalBits),d=jr(n.shDegree),h=.28209479177387814;for(let p=0;p<s;p++){if(a)for(let v=0;v<3;v++)l.position[v]=U1(c[p*3+v]);else for(let v=0;v<3;v++){const A=p*9+v*3;let x=n.positions[A];x|=n.positions[A+1]<<8,x|=n.positions[A+2]<<16,x|=x&8388608?4278190080:0,l.position[v]=x*u}for(let v=0;v<3;v++)l.scale[v]=Math.exp(n.scales[p*3+v]/16-10);const g=n.rotations.subarray(p*3,p*3+3),S=[g[0]/127.5-1,g[1]/127.5-1,g[2]/127.5-1];l.rotation[0]=S[0],l.rotation[1]=S[1],l.rotation[2]=S[2];const m=S[0]*S[0]+S[1]*S[1]+S[2]*S[2];l.rotation[3]=Math.sqrt(Math.max(0,1-m)),l.alpha=Math.floor(n.alphas[p]);for(let v=0;v<3;v++)l.color[v]=Math.floor(((n.colors[p*3+v]/255-.5)/B1*h+.5)*255);for(let v=0;v<3;v++)for(let A=0;A<d;A++)l.sh[v*d+A]=N1(n.sh[d*3*p+A*3+v]);const f=O1(l,n.shDegree,e);if(t){const v=Me.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,A=p*v+r;Me.writeSplatDataToSectionBuffer(f,i,A,0,e)}else i.addSplat(f)}}const z1=16,H1=1e7;function V1(n){const e=new DataView(n);let t=0;const i={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=z1,i.magic!==L1)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(i.version<1||i.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${i.version}`),null;if(i.numPoints>H1)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${i.numPoints}`),null;if(i.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${i.shDegree}`),null;const r=i.numPoints,s=jr(i.shDegree),o=i.version===1,a={numPoints:r,shDegree:i.shDegree,fractionalBits:i.fractionalBits,antialiased:(i.flags&F1)!==0,positions:new Uint8Array(r*3*(o?2:3)),scales:new Uint8Array(r*3),rotations:new Uint8Array(r*3),alphas:new Uint8Array(r),colors:new Uint8Array(r*3),sh:new Uint8Array(r*s*3)};try{const l=new Uint8Array(n);let c=a.positions.length,u=t;if(a.positions.set(l.slice(u,u+c)),u+=c,a.alphas.set(l.slice(u,u+a.alphas.length)),u+=a.alphas.length,a.colors.set(l.slice(u,u+a.colors.length)),u+=a.colors.length,a.scales.set(l.slice(u,u+a.scales.length)),u+=a.scales.length,a.rotations.set(l.slice(u,u+a.rotations.length)),u+=a.rotations.length,a.sh.set(l.slice(u,u+a.sh.length)),u+a.sh.length!==n.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return a}async function G1(n){try{const e=await P1(n);return V1(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class Ph{static loadFromURL(e,t,i,r,s=!0,o=0,a,l,c,u,d){return t&&t(0,"0%",bt.Downloading),Wc(e,t,!0,a).then(h=>(t&&t(0,"0%",bt.Processing),Ph.loadFromFileData(h,i,r,s,o,l,c,u,d)))}static async loadFromFileData(e,t,i,r,s=0,o,a,l,c){await Bn();const u=await G1(e);s=Math.min(u.shDegree,s);const d=new pe(s);if(r)return Lg(u,s,!1,d,0),Pa.getStandardGenerator(t,i,o,a,l,c).generateFromUncompressedSplatArray(d);{const{splatBuffer:h,splatBufferDataOffsetBytes:p}=Me.preallocateUncompressed(u.numPoints,s);return Lg(u,s,!0,h.bufferData,p),h}}}const ot=class ot{static parseToUncompressedSplatBufferSection(e,t,i,r,s,o){const a=Me.CompressionLevels[0].BytesPerCenter,l=Me.CompressionLevels[0].BytesPerScale,c=Me.CompressionLevels[0].BytesPerRotation,u=Me.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let d=e;d<=t;d++){const h=d*ot.RowSizeBytes+r,p=new Float32Array(i,h,3),g=new Float32Array(i,h+ot.CenterSizeBytes,3),S=new Uint8Array(i,h+ot.CenterSizeBytes+ot.ScaleSizeBytes,4),m=new Uint8Array(i,h+ot.CenterSizeBytes+ot.ScaleSizeBytes+ot.RotationSizeBytes,4),f=new xt((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);f.normalize();const v=d*u+o,A=new Float32Array(s,v,3),x=new Float32Array(s,v+a,3),_=new Float32Array(s,v+a+l,4),C=new Uint8Array(s,v+a+l+c,4);A[0]=p[0],A[1]=p[1],A[2]=p[2],x[0]=g[0],x[1]=g[1],x[2]=g[2],_[0]=f.w,_[1]=f.x,_[2]=f.y,_[3]=f.z,C[0]=S[0],C[1]=S[1],C[2]=S[2],C[3]=S[3]}}static parseToUncompressedSplatArraySection(e,t,i,r,s){for(let o=e;o<=t;o++){const a=o*ot.RowSizeBytes+r,l=new Float32Array(i,a,3),c=new Float32Array(i,a+ot.CenterSizeBytes,3),u=new Uint8Array(i,a+ot.CenterSizeBytes+ot.ScaleSizeBytes,4),d=new Uint8Array(i,a+ot.CenterSizeBytes+ot.ScaleSizeBytes+ot.RotationSizeBytes,4),h=new xt((d[1]-128)/128,(d[2]-128)/128,(d[3]-128)/128,(d[0]-128)/128);h.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],h.w,h.x,h.y,h.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/ot.RowSizeBytes,i=new pe;for(let r=0;r<t;r++){const s=r*ot.RowSizeBytes,o=new Float32Array(e,s,3),a=new Float32Array(e,s+ot.CenterSizeBytes,3),l=new Uint8Array(e,s+ot.CenterSizeBytes+ot.ScaleSizeBytes,4),c=new Uint8Array(e,s+ot.CenterSizeBytes+ot.ScaleSizeBytes+ot.ColorSizeBytes,4),u=new xt((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),i.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return i}};ue(ot,"RowSizeBytes",32),ue(ot,"CenterSizeBytes",12),ue(ot,"ScaleSizeBytes",12),ue(ot,"RotationSizeBytes",4),ue(ot,"ColorSizeBytes",4);let Vr=ot;function Fg(n,e,t,i,r,s,o,a){return e?Pa.getStandardGenerator(t,i,r,s,o,a).generateFromUncompressedSplatArray(n):Me.generateFromUncompressedSplatArrays([n],t,0,new P)}class Dh{static loadFromURL(e,t,i,r,s,o,a=!0,l,c,u,d,h){let p=i?mt.ProgressiveToSplatBuffer:mt.ProgressiveToSplatArray;a&&(p=mt.ProgressiveToSplatArray);const g=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes,S=Ze.ProgressiveLoadSectionSize,m=1;let f,v,A,x=0,_=0,C;const y=Ah();let w=0,E=0,M=[];const D=(U,z,I,L)=>{const O=U>=100;if(I&&M.push(I),p===mt.DownloadBeforeProcessing){O&&y.resolve(M);return}if(!L){if(i)throw new Sc("Cannon directly load .splat because no file size info is available.");p=mt.DownloadBeforeProcessing;return}if(!f){x=L/Vr.RowSizeBytes,f=new ArrayBuffer(L);const V=Me.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,F=g+V*x;p===mt.ProgressiveToSplatBuffer?(v=new ArrayBuffer(F),Me.writeHeaderToBuffer({versionMajor:Me.CurrentMajorVersion,versionMinor:Me.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:x,splatCount:_,compressionLevel:0,sceneCenter:new P},v)):C=new pe(0)}if(I){new Uint8Array(f,E,I.byteLength).set(new Uint8Array(I)),E+=I.byteLength;const V=E-w;if(V>S||O){const B=(O?V:S)/Vr.RowSizeBytes,H=_+B;p===mt.ProgressiveToSplatBuffer?Vr.parseToUncompressedSplatBufferSection(_,H-1,f,0,v,g):Vr.parseToUncompressedSplatArraySection(_,H-1,f,0,C),_=H,p===mt.ProgressiveToSplatBuffer&&(A||(Me.writeSectionHeaderToBuffer({maxSplatCount:x,splatCount:_,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,v,Me.HeaderSizeBytes),A=new Me(v,!1)),A.updateLoadedCounts(1,_),r&&r(A,O)),w+=S}}O&&(p===mt.ProgressiveToSplatBuffer?y.resolve(A):y.resolve(C)),t&&t(U,z,bt.Downloading)};return t&&t(0,"0%",bt.Downloading),Wc(e,D,!1,l).then(()=>(t&&t(0,"0%",bt.Processing),y.promise.then(U=>(t&&t(100,"100%",bt.Done),p===mt.DownloadBeforeProcessing?new Blob(M).arrayBuffer().then(z=>Dh.loadFromFileData(z,s,o,a,c,u,d,h)):p===mt.ProgressiveToSplatBuffer?U:Bn(()=>Fg(U,a,s,o,c,u,d,h))))))}static loadFromFileData(e,t,i,r,s,o,a,l){return Bn(()=>{const c=Vr.parseStandardSplatToUncompressedSplatArray(e);return Fg(c,r,t,i,s,o,a,l)})}}const Ws=class Ws{static checkVersion(e){const t=Me.CurrentMajorVersion,i=Me.CurrentMinorVersion,r=Me.parseHeader(e);if(r.versionMajor===t&&r.versionMinor>=i||r.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${r.versionMajor}.${r.versionMinor}. Minimum required: v${t}.${i}`)}static loadFromURL(e,t,i,r,s){let o,a,l,c,u=!1,d=!1,h,p=[],g=!1,S=!1,m=0,f=0,v=0,A=!1,x=!1,_=!1,C=[];const y=Ah(),w=()=>{!u&&!d&&m>=Me.HeaderSizeBytes&&(d=!0,new Blob(C).arrayBuffer().then(L=>{l=new ArrayBuffer(Me.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(L,0,Me.HeaderSizeBytes)),Ws.checkVersion(l),d=!1,u=!0,c=Me.parseHeader(l),window.setTimeout(()=>{D()},1)}))};let E=0;const M=()=>{E===0&&(E++,window.setTimeout(()=>{E--,U()},1))},D=()=>{const I=()=>{S=!0,new Blob(C).arrayBuffer().then(O=>{S=!1,g=!0,h=new ArrayBuffer(c.maxSectionCount*Me.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(O,Me.HeaderSizeBytes,c.maxSectionCount*Me.SectionHeaderSizeBytes)),p=Me.parseSectionHeaders(c,h,0,!1);let V=0;for(let B=0;B<c.maxSectionCount;B++)V+=p[B].storageSizeBytes;const F=Me.HeaderSizeBytes+c.maxSectionCount*Me.SectionHeaderSizeBytes+V;if(!o){o=new ArrayBuffer(F);let B=0;for(let H=0;H<C.length;H++){const $=C[H];new Uint8Array(o,B,$.byteLength).set(new Uint8Array($)),B+=$.byteLength}}v=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes*c.maxSectionCount;for(let B=0;B<=p.length&&B<c.maxSectionCount;B++)v+=p[B].storageSizeBytes;M()})};!S&&!g&&u&&m>=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes*c.maxSectionCount&&I()},U=()=>{if(_)return;_=!0;const I=()=>{if(_=!1,g){if(x)return;if(A=m>=v,m-f>Ze.ProgressiveLoadSectionSize||A){f+=Ze.ProgressiveLoadSectionSize,x=f>=v,a||(a=new Me(o,!1));const O=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes*c.maxSectionCount;let V=0,F=0,B=0;for(let J=0;J<c.maxSectionCount;J++){const X=p[J],Y=V+X.partiallyFilledBucketCount*4+X.bucketStorageSizeBytes*X.bucketCount,ee=O+Y;if(f>=ee){F++;const ie=f-ee,Ie=Me.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[X.sphericalHarmonicsDegree].BytesPerSplat;let Ae=Math.floor(ie/Ie);Ae=Math.min(Ae,X.maxSplatCount),B+=Ae,a.updateLoadedCounts(F,B),a.updateSectionLoadedCounts(J,Ae)}else break;V+=X.storageSizeBytes}r(a,x);const H=f/v*100,$=H.toFixed(2)+"%";t&&t(H,$,bt.Downloading),x?y.resolve(a):U()}}};window.setTimeout(I,Ze.ProgressiveLoadSectionDelayDuration)};return Wc(e,(I,L,O)=>{O&&(C.push(O),o&&new Uint8Array(o,m,O.byteLength).set(new Uint8Array(O)),m+=O.byteLength),i?(w(),D(),U()):t&&t(I,L,bt.Downloading)},!i,s).then(I=>(t&&t(0,"0%",bt.Processing),(i?y.promise:Ws.loadFromFileData(I)).then(O=>(t&&t(100,"100%",bt.Done),O))))}static loadFromFileData(e){return Bn(()=>(Ws.checkVersion(e),new Me(e)))}};ue(Ws,"downloadFile",function(){let e;return function(t,i){const r=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=i,e.href=URL.createObjectURL(r),e.click()}}());let ff=Ws;const yn={Splat:0,KSplat:1,Ply:2,Spz:3},Bg=n=>n.endsWith(".ply")?yn.Ply:n.endsWith(".splat")?yn.Splat:n.endsWith(".ksplat")?yn.KSplat:n.endsWith(".spz")?yn.Spz:null,Ug={type:"change"},nd={type:"start"},Ng={type:"end"},Cl=new AS,Og=new ar,W1=Math.cos(70*pS.DEG2RAD);class Ml extends os{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:cs.ROTATE,TWO:cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",se),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,this.clearDampedRotation(),this.clearDampedPan(),i.object.updateProjectionMatrix(),i.dispatchEvent(Ug),i.update(),s=r.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=function(){const k=new P,te=new xt().setFromUnitVectors(e.up,new P(0,1,0)),Se=te.clone().invert(),he=new P,Fe=new xt,$e=new P,it=2*Math.PI;return function(){te.setFromUnitVectors(e.up,new P(0,1,0)),Se.copy(te).invert();const fe=i.object.position;k.copy(fe).sub(i.target),k.applyQuaternion(te),a.setFromVector3(k),i.autoRotate&&s===r.NONE&&D(E()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let N=i.minAzimuthAngle,de=i.maxAzimuthAngle;isFinite(N)&&isFinite(de)&&(N<-Math.PI?N+=it:N>Math.PI&&(N-=it),de<-Math.PI?de+=it:de>Math.PI&&(de-=it),N<=de?a.theta=Math.max(N,Math.min(de,a.theta)):a.theta=a.theta>(N+de)/2?Math.max(N,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=B(a.radius):a.radius=B(a.radius*c),k.setFromSpherical(a),k.applyQuaternion(Se),fe.copy(i.target).add(k),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ge=!1;if(i.zoomToCursor&&C){let Be=null;if(i.object.isPerspectiveCamera){const De=k.length();Be=B(De*c);const rt=De-Be;i.object.position.addScaledVector(x,rt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const De=new P(_.x,_.y,0);De.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ge=!0;const rt=new P(_.x,_.y,0);rt.unproject(i.object),i.object.position.sub(rt).add(De),i.object.updateMatrixWorld(),Be=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Be!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Be).add(i.object.position):(Cl.origin.copy(i.object.position),Cl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Cl.direction))<W1?e.lookAt(i.target):(Og.setFromNormalAndCoplanarPoint(i.object.up,i.target),Cl.intersectPlane(Og,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ge=!0);return c=1,C=!1,ge||he.distanceToSquared(i.object.position)>o||8*(1-Fe.dot(i.object.quaternion))>o||$e.distanceToSquared(i.target)>0?(i.dispatchEvent(Ug),he.copy(i.object.position),Fe.copy(i.object.quaternion),$e.copy(i.target),ge=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Te),i.domElement.removeEventListener("pointerdown",be),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",T),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",se),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new gg,l=new gg;let c=1;const u=new P,d=new we,h=new we,p=new we,g=new we,S=new we,m=new we,f=new we,v=new we,A=new we,x=new P,_=new we;let C=!1;const y=[],w={};function E(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function D(k){l.theta-=k}function U(k){l.phi-=k}const z=function(){const k=new P;return function(Se,he){k.setFromMatrixColumn(he,0),k.multiplyScalar(-Se),u.add(k)}}(),I=function(){const k=new P;return function(Se,he){i.screenSpacePanning===!0?k.setFromMatrixColumn(he,1):(k.setFromMatrixColumn(he,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(Se),u.add(k)}}(),L=function(){const k=new P;return function(Se,he){const Fe=i.domElement;if(i.object.isPerspectiveCamera){const $e=i.object.position;k.copy($e).sub(i.target);let it=k.length();it*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Se*it/Fe.clientHeight,i.object.matrix),I(2*he*it/Fe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Se*(i.object.right-i.object.left)/i.object.zoom/Fe.clientWidth,i.object.matrix),I(he*(i.object.top-i.object.bottom)/i.object.zoom/Fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(k){if(!i.zoomToCursor)return;C=!0;const te=i.domElement.getBoundingClientRect(),Se=k.clientX-te.left,he=k.clientY-te.top,Fe=te.width,$e=te.height;_.x=Se/Fe*2-1,_.y=-(he/$e)*2+1,x.set(_.x,_.y,1).unproject(e).sub(e.position).normalize()}function B(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function H(k){d.set(k.clientX,k.clientY)}function $(k){F(k),f.set(k.clientX,k.clientY)}function J(k){g.set(k.clientX,k.clientY)}function X(k){h.set(k.clientX,k.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const te=i.domElement;D(2*Math.PI*p.x/te.clientHeight),U(2*Math.PI*p.y/te.clientHeight),d.copy(h),i.update()}function Y(k){v.set(k.clientX,k.clientY),A.subVectors(v,f),A.y>0?O(M()):A.y<0&&V(M()),f.copy(v),i.update()}function ee(k){S.set(k.clientX,k.clientY),m.subVectors(S,g).multiplyScalar(i.panSpeed),L(m.x,m.y),g.copy(S),i.update()}function ie(k){F(k),k.deltaY<0?V(M()):k.deltaY>0&&O(M()),i.update()}function ce(k){let te=!1;switch(k.code){case i.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(-i.keyPanSpeed,0),te=!0;break}te&&(k.preventDefault(),i.update())}function Re(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const k=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);d.set(k,te)}}function Ie(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const k=.5*(y[0].pageX+y[1].pageX),te=.5*(y[0].pageY+y[1].pageY);g.set(k,te)}}function Ae(){const k=y[0].pageX-y[1].pageX,te=y[0].pageY-y[1].pageY,Se=Math.sqrt(k*k+te*te);f.set(0,Se)}function Ue(){i.enableZoom&&Ae(),i.enablePan&&Ie()}function G(){i.enableZoom&&Ae(),i.enableRotate&&Re()}function Xe(k){if(y.length==1)h.set(k.pageX,k.pageY);else{const Se=tt(k),he=.5*(k.pageX+Se.x),Fe=.5*(k.pageY+Se.y);h.set(he,Fe)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const te=i.domElement;D(2*Math.PI*p.x/te.clientHeight),U(2*Math.PI*p.y/te.clientHeight),d.copy(h)}function xe(k){if(y.length===1)S.set(k.pageX,k.pageY);else{const te=tt(k),Se=.5*(k.pageX+te.x),he=.5*(k.pageY+te.y);S.set(Se,he)}m.subVectors(S,g).multiplyScalar(i.panSpeed),L(m.x,m.y),g.copy(S)}function ye(k){const te=tt(k),Se=k.pageX-te.x,he=k.pageY-te.y,Fe=Math.sqrt(Se*Se+he*he);v.set(0,Fe),A.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),O(A.y),f.copy(v)}function _e(k){i.enableZoom&&ye(k),i.enablePan&&xe(k)}function Je(k){i.enableZoom&&ye(k),i.enableRotate&&Xe(k)}function be(k){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",T)),Ne(k),k.pointerType==="touch"?Pe(k):Q(k))}function b(k){i.enabled!==!1&&(k.pointerType==="touch"?ve(k):ae(k))}function T(k){Ge(k),y.length===0&&(i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",T)),i.dispatchEvent(Ng),s=r.NONE}function Q(k){let te;switch(k.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ls.DOLLY:if(i.enableZoom===!1)return;$(k),s=r.DOLLY;break;case ls.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;J(k),s=r.PAN}else{if(i.enableRotate===!1)return;H(k),s=r.ROTATE}break;case ls.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;H(k),s=r.ROTATE}else{if(i.enablePan===!1)return;J(k),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(nd)}function ae(k){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(k);break;case r.DOLLY:if(i.enableZoom===!1)return;Y(k);break;case r.PAN:if(i.enablePan===!1)return;ee(k);break}}function re(k){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(k.preventDefault(),i.dispatchEvent(nd),ie(k),i.dispatchEvent(Ng))}function se(k){i.enabled===!1||i.enablePan===!1||ce(k)}function Pe(k){switch(ne(k),y.length){case 1:switch(i.touches.ONE){case cs.ROTATE:if(i.enableRotate===!1)return;Re(),s=r.TOUCH_ROTATE;break;case cs.PAN:if(i.enablePan===!1)return;Ie(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case cs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),s=r.TOUCH_DOLLY_PAN;break;case cs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(nd)}function ve(k){switch(ne(k),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Xe(k),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(k),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(k),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Je(k),i.update();break;default:s=r.NONE}}function Te(k){i.enabled!==!1&&k.preventDefault()}function Ne(k){y.push(k)}function Ge(k){delete w[k.pointerId];for(let te=0;te<y.length;te++)if(y[te].pointerId==k.pointerId){y.splice(te,1);return}}function ne(k){let te=w[k.pointerId];te===void 0&&(te=new we,w[k.pointerId]=te),te.set(k.pageX,k.pageY)}function tt(k){const te=k.pointerId===y[0].pointerId?y[1]:y[0];return w[te.pointerId]}i.domElement.addEventListener("contextmenu",Te),i.domElement.addEventListener("pointerdown",be),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",re,{passive:!1}),this.update()}}const X1=(n,e,t,i,r)=>{const s=performance.now();let o=n.style.display==="none"?0:parseFloat(n.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-s;let u=Math.min(c/i,1);u>.999&&(u=1);let d;e?(d=(1-u)*o,d<1e-4&&(d=0)):d=(1-o)*u+o,d>0?(n.style.display=t,n.style.opacity=d):n.style.display="none",u>=1&&(r&&r(),window.clearInterval(a))},16);return a},Q1=500,yc=class yc{constructor(e,t){this.taskIDGen=0,this.elementID=yc.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const i=document.createElement("style");i.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(i),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let i of this.tasks){if(i.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let i of this.tasks)if(i.id===e){i.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const i=(r,s,o,a,l)=>{o?r.style.display=s?a:"none":this.fadeTransitions[l]=X1(r,!s,a,Q1,()=>{this.fadeTransitions[l]=null})};i(this.spinnerContainerPrimary,!e,t,"block",0),i(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};ue(yc,"elementIDGen",0);let hf=yc;class j1{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class q1{constructor(e){ue(this,"update",function(e,t,i,r,s,o,a,l,c,u,d,h,p,g){const S=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==S&&(this.infoCells.cameraPosition.innerHTML=S),i){const f=i,v=`${f.x.toFixed(5)}, ${f.y.toFixed(5)}, ${f.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==v&&(this.infoCells.cameraLookAt.innerHTML=v)}const m=`${r.x.toFixed(5)}, ${r.y.toFixed(5)}, ${r.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",o){const f=o,v=`${f.x.toFixed(5)}, ${f.y.toFixed(5)}, ${f.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=v}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${d.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${h.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${p.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const i=document.createElement("style");i.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(i),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const r=document.createElement("div");r.style.display="table";for(let s of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${s[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),r.appendChild(o)}this.infoPanel.appendChild(r),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const kg=new P;class Y1 extends zt{constructor(e=new P(0,0,1),t=new P(0,0,0),i=1,r=.1,s=16776960,o=i*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new Ea(r,r,i,32);l.translate(0,i/2,0);const c=new Ea(0,a,o,32);c.translate(0,i,0),this.position.copy(t),this.line=new Lt(l,new is({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Lt(c,new is({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{kg.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(kg,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $o{constructor(e){ue(this,"updateFocusMarker",function(){const e=new P,t=new He,i=new P;return function(r,s,o){t.copy(s.matrixWorld).invert(),e.copy(r).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),i.copy(s.position).sub(r);const a=i.length();this.focusMarker.position.copy(r),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(r),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}}());ue(this,"positionAndOrientControlPlane",function(){const e=new xt,t=new P(0,1,0);return function(i,r){e.setFromUnitVectors(t,r),this.controlPlane.position.copy(i),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new wr(e,t,{format:pn,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new vh(e,t),this.splatRenderTarget.depthTexture.format=Cr,this.splatRenderTarget.depthTexture.type=Fn}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new Jn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:rS,blendSrc:Sa,blendSrcAlpha:Sa,blendDst:Aa,blendDstAlpha:Aa});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new Lt(new _a(2,2),t),this.renderTargetCopyCamera=new mh(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Is(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Sh(.5,1.5,32),t=new is({color:16777215}),i=new Lt(e,t);i.rotation.set(0,0,Math.PI),i.position.set(0,1,0);const r=new Lt(e,t);r.position.set(0,-1,0);const s=new Lt(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const o=new Lt(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new zt,this.meshCursor.add(i),this.meshCursor.add(r),this.meshCursor.add(s),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Is(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new vc(.5,32,32),t=$o.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new Lt(e,t)}}destroyFocusMarker(){this.focusMarker&&(Is(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new _a(1,1);e.rotateX(-Math.PI/2);const t=new is({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=qn;const i=new Lt(e,t),r=new P(0,1,0);r.normalize();const s=new P(0,0,0),o=.5,a=.01,l=56576,c=new Y1(r,s,o,a,l,.1,.03);this.controlPlane=new zt,this.controlPlane.add(i),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(Is(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Is(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new vc(1,32,32),i=new zt,r=(s,o)=>{let a=new Lt(t,$o.buildDebugMaterial(s));a.renderOrder=e,i.add(a),a.position.fromArray(o)};return r(16711680,[-50,0,0]),r(16711680,[50,0,0]),r(65280,[0,0,-50]),r(65280,[0,0,50]),r(16755200,[5,0,5]),i}createSecondaryDebugMeshes(e){const t=new Ao(3,3,3),i=new zt;let r=12303291;const s=a=>{let l=new Lt(t,$o.buildDebugMaterial(r));l.renderOrder=e,i.add(l),l.position.fromArray(a)};let o=10;return s([-o,0,-o]),s([-o,0,o]),s([o,0,-o]),s([o,0,o]),i}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,i=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,r={color:{type:"v3",value:new nt(e)}},s=new Jn({uniforms:r,vertexShader:t,fragmentShader:i,transparent:!1,depthTest:!0,depthWrite:!0,side:Mi});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,i=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,r={color:{type:"v3",value:new nt(e)},realFocusPosition:{type:"v3",value:new P},viewport:{type:"v2",value:new we},opacity:{value:0}};return new Jn({uniforms:r,vertexShader:t,fragmentShader:i,transparent:!0,depthTest:!1,depthWrite:!1,side:Mi})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const K1=new P(1,0,0),$1=new P(0,1,0),Z1=new P(0,0,1);class id{constructor(e=new P,t=new P){ue(this,"intersectBox",function(){const e=new P,t=[],i=[],r=[];return function(s,o){if(i[0]=this.origin.x,i[1]=this.origin.y,i[2]=this.origin.z,r[0]=this.direction.x,r[1]=this.direction.y,r[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(r[a]==0)continue;const l=a==0?K1:a==1?$1:Z1,c=r[a]<0?s.max:s.min;let u=-Math.sign(r[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let d=t[0]-i[a];if(d*u<0){const h=(a+1)%3,p=(a+2)%3;if(t[2]=r[h]/r[a]*d+i[h],t[1]=r[p]/r[a]*d+i[p],e.set(t[a],t[p],t[h]),this.boxContainsPoint(s,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}}());ue(this,"intersectSphere",function(){const e=new P;return function(t,i,r){e.copy(t).sub(this.origin);const s=e.dot(this.direction),o=s*s,l=e.dot(e)-o,c=i*i;if(l>c)return!1;const u=Math.sqrt(c-l),d=s-u,h=s+u;if(h<0)return!1;let p=d<0?h:d;return r&&(r.origin.copy(this.origin).addScaledVector(this.direction,p),r.normal.copy(r.origin).sub(t).normalize(),r.distance=p),!0}}());this.origin=new P,this.direction=new P,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,i){return!(t.x<e.min.x-i||t.x>e.max.x+i||t.y<e.min.y-i||t.y>e.max.y+i||t.z<e.min.z-i||t.z>e.max.z+i)}}class Lh{constructor(){this.origin=new P,this.normal=new P,this.distance=0,this.splatIndex=0}set(e,t,i,r){this.origin.copy(e),this.normal.copy(t),this.distance=i,this.splatIndex=r}clone(){const e=new Lh;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Ui={ThreeD:0,TwoD:1};class J1{constructor(e,t,i=!1){ue(this,"setFromCameraAndScreenPosition",function(){const e=new we;return function(t,i,r){if(e.x=i.x/r.x*2-1,e.y=(r.y-i.y)/r.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());ue(this,"intersectSplatMesh",function(){const e=new He,t=new He,i=new He,r=new id,s=new P;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,i),t.multiply(i)),e.copy(t).invert(),r.origin.copy(this.ray.origin).applyMatrix4(e),r.direction.copy(this.ray.origin).add(this.ray.direction),r.direction.applyMatrix4(e).sub(r.origin).normalize();const d=[];u.rootNode&&this.castRayAtSplatTreeNode(r,l,u.rootNode,d),d.forEach(h=>{h.origin.applyMatrix4(t),h.normal.applyMatrix4(t).normalize(),h.distance=s.copy(h.origin).sub(this.ray.origin).length()}),a.push(...d)}return a.sort((c,u)=>c.distance>u.distance?1:-1),a}}}());ue(this,"castRayAtSplatTreeNode",function(){const e=new Bt,t=new P,i=new P,r=new xt,s=new Lh,o=1e-7,a=new P(0,0,0),l=new He,c=new He,u=new He,d=new He,h=new He,p=new id;return function(g,S,m,f=[]){if(g.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let v=0;v<m.data.indexes.length;v++){const A=m.data.indexes[v],x=S.splatMesh.getSceneIndexForSplat(A);if(S.splatMesh.getScene(x).visible&&(S.splatMesh.getSplatColor(A,e),S.splatMesh.getSplatCenter(A,t),S.splatMesh.getSplatScaleAndRotation(A,i,r),!(i.x<=o||i.y<=o||S.splatMesh.splatRenderMode===Ui.ThreeD&&i.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(i.x,i.y,i.z),u.makeRotationFromQuaternion(r);const C=Math.log10(e.w)*2;if(l.makeScale(C,C,C),h.copy(l).multiply(u).multiply(c),d.copy(h).invert(),p.origin.copy(g.origin).sub(t).applyMatrix4(d),p.direction.copy(g.origin).add(g.direction).sub(t),p.direction.applyMatrix4(d).sub(p.origin).normalize(),p.intersectSphere(a,1,s)){const y=s.clone();y.splatIndex=A,y.origin.applyMatrix4(h).add(t),f.push(y)}}else{let C=i.x+i.y,y=2;if(S.splatMesh.splatRenderMode===Ui.ThreeD&&(C+=i.z,y=3),C=C/y,g.intersectSphere(t,C,s)){const w=s.clone();w.splatIndex=A,f.push(w)}}}if(m.children&&m.children.length>0)for(let v of m.children)this.castRayAtSplatTreeNode(g,S,v,f);return f}}}());this.ray=new id(e,t),this.raycastAgainstTrueSplatEllipsoid=i}}class Js{static buildVertexShaderBase(e=!1,t=!1,i=0,r=""){let s=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(s+=`
            uniform float sceneOpacity[${Ze.MaxScenes}];
            uniform int sceneVisibility[${Ze.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${Ze.MaxScenes}];
        `),s+=`
        ${r}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${Ze.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${Ze.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,i>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,i>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),i===1?s+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:i===2&&(s+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,i>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,i===2&&(s+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),s+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,i=0,r=1,s=!1){const o={sceneCenter:{type:"v3",value:new P},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new we},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new we},basisViewport:{type:"v2",value:new we},debugColor:{type:"v3",value:new nt},centersColorsTextureSize:{type:"v2",value:new we(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:i},sphericalHarmonicsTextureSize:{type:"v2",value:new we(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:r},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new we(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<Ze.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(Ze.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<Ze.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<Ze.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<Ze.MaxScenes;l++)a.push(new He);o.transforms={type:"mat4",value:a}}return o}}class Ac{static build(e=!1,t=!1,i=!1,r=2048,s=1,o=!1,a=0,l=.3){let u=Js.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);u+=Ac.buildVertexShaderProjection(i,t,r,l);const d=Ac.buildFragmentShader(),h=Js.getUniforms(e,t,a,s,o);return h.covariancesTextureSize={type:"v2",value:new we(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new Jn({uniforms:h,vertexShader:u,fragmentShader:d,transparent:!0,alphaTest:1,blending:_r,depthTest:!0,depthWrite:!1,side:qn})}static buildVertexShaderProjection(e,t,i,r){let s=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?s+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:s+=`
                cov2Dm[0][0] += ${r};
                cov2Dm[1][1] += ${r};
            `,s+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(i)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(i)}.0);
            `,t&&(s+=`
                vColor.a *= splatOpacityFromScene;
            `),s+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,s+=Js.getVertexShaderFadeIn(),s+="}",s}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class xc{static build(e=!1,t=!1,i=1,r=!1,s=0){let a=Js.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=xc.buildVertexShaderProjection();const l=xc.buildFragmentShader(),c=Js.getUniforms(e,t,s,i,r);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new we(1024,1024)},new Jn({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:_r,depthTest:!0,depthWrite:!1,side:qn})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Js.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class eR{static build(e){const t=new ni;t.setIndex([0,1,2,0,2,3]);const i=new Float32Array(4*3),r=new Zn(i,3);t.setAttribute("position",r),r.setXYZ(0,-1,-1,0),r.setXYZ(1,-1,1,0),r.setXYZ(2,1,1,0),r.setXYZ(3,1,-1,0),r.needsUpdate=!0;const s=new Xw().copy(t),o=new Uint32Array(e),a=new Ww(o,1,!1);return a.setUsage(L_),s.setAttribute("splatIndex",a),s.instanceCount=0,s}}class tR extends zt{constructor(e,t=new P,i=new xt,r=new P(1,1,1),s=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(i),this.scale.copy(r),this.transform=new He,this.minimumAlpha=s,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const _c=class _c{constructor(e,t,i,r){this.min=new P().copy(e),this.max=new P().copy(t),this.boundingBox=new yi(this.min,this.max),this.center=new P().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=i,this.children=[],this.data=null,this.id=r||_c.idGen++}};ue(_c,"idGen",0);let pf=_c;class Zo{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new P,this.sceneMin=new P,this.sceneMax=new P,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new P().fromArray(e.min),i=new P().fromArray(e.max),r=new pf(t,i,e.depth,e.id);if(e.data.indexes){r.data={indexes:[]};for(let s of e.data.indexes)r.data.indexes.push(s)}if(e.children)for(let s of e.children)r.children.push(Zo.convertWorkerSubTreeNode(s));return r}static convertWorkerSubTree(e,t){const i=new Zo(e.maxDepth,e.maxCentersPerNode);i.sceneMin=new P().fromArray(e.sceneMin),i.sceneMax=new P().fromArray(e.sceneMax),i.splatMesh=t,i.rootNode=Zo.convertWorkerSubTreeNode(e.rootNode);const r=(s,o)=>{s.children.length===0&&o(s);for(let a of s.children)r(a,o)};return i.nodesWithIndexes=[],r(i.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&i.nodesWithIndexes.push(s)}),i}}function nR(n){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class i{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class r{constructor(l,c,u,d){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=d||e++}}processSplatTreeNode=function(a,l,c,u){const d=l.data.indexes.length;if(d<a.maxCentersPerNode||l.depth>a.maxDepth){const v=[];for(let A=0;A<l.data.indexes.length;A++)a.addedIndexes[l.data.indexes[A]]||(v.push(l.data.indexes[A]),a.addedIndexes[l.data.indexes[A]]=!0);l.data.indexes=v,l.data.indexes.sort((A,x)=>A>x?1:-1),a.nodesWithIndexes.push(l);return}const h=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],p=[h[0]*.5,h[1]*.5,h[2]*.5],g=[l.min[0]+p[0],l.min[1]+p[1],l.min[2]+p[2]],S=[new t([g[0]-p[0],g[1],g[2]-p[2]],[g[0],g[1]+p[1],g[2]]),new t([g[0],g[1],g[2]-p[2]],[g[0]+p[0],g[1]+p[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+p[0],g[1]+p[1],g[2]+p[2]]),new t([g[0]-p[0],g[1],g[2]],[g[0],g[1]+p[1],g[2]+p[2]]),new t([g[0]-p[0],g[1]-p[1],g[2]-p[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-p[1],g[2]-p[2]],[g[0]+p[0],g[1],g[2]]),new t([g[0],g[1]-p[1],g[2]],[g[0]+p[0],g[1],g[2]+p[2]]),new t([g[0]-p[0],g[1]-p[1],g[2]],[g[0],g[1],g[2]+p[2]])],m=[];for(let v=0;v<S.length;v++)m[v]=[];const f=[0,0,0];for(let v=0;v<d;v++){const A=l.data.indexes[v],x=c[A];f[0]=u[x],f[1]=u[x+1],f[2]=u[x+2];for(let _=0;_<S.length;_++)S[_].containsPoint(f)&&m[_].push(A)}for(let v=0;v<S.length;v++){const A=new r(S[v].min,S[v].max,l.depth+1);A.data={indexes:m[v]},l.children.push(A)}l.data={};for(let v of l.children)processSplatTreeNode(a,v,c,u)};const s=(a,l,c)=>{const u=[0,0,0],d=[0,0,0],h=[],p=Math.floor(a.length/4);for(let S=0;S<p;S++){const m=S*4,f=a[m],v=a[m+1],A=a[m+2],x=Math.round(a[m+3]);(S===0||f<u[0])&&(u[0]=f),(S===0||f>d[0])&&(d[0]=f),(S===0||v<u[1])&&(u[1]=v),(S===0||v>d[1])&&(d[1]=v),(S===0||A<u[2])&&(u[2]=A),(S===0||A>d[2])&&(d[2]=A),h.push(x)}const g=new i(l,c);return g.sceneMin=u,g.sceneMax=d,g.rootNode=new r(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:h},g};function o(a,l,c){const u=[];for(let h of a){const p=Math.floor(h.length/4);for(let g=0;g<p;g++){const S=g*4,m=Math.round(h[S+3]);u[m]=S}}const d=[];for(let h of a){const p=s(h,l,c);d.push(p),processSplatTreeNode(p,p.rootNode,u,h)}n.postMessage({subTrees:d})}n.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function iR(n,e,t,i,r){n.postMessage({process:{centers:e,maxDepth:i,maxCentersPerNode:r}},t)}function rR(){return new Worker(URL.createObjectURL(new Blob(["(",nR.toString(),")(self)"],{type:"application/javascript"})))}class sR{constructor(e,t){ue(this,"processSplatMesh",function(e,t=()=>!0,i,r){this.splatTreeWorker||(this.splatTreeWorker=rR()),this.splatMesh=e,this.subTrees=[];const s=new P,o=(a,l)=>{const c=new Float32Array(l*4);let u=0;for(let d=0;d<l;d++){const h=d+a;if(t(h)){e.getSplatCenter(h,s);const p=u*4;c[p]=s.x,c[p+1]=s.y,c[p+2]=s.z,c[p+3]=h,u++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;i&&i(!1),Bn(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let d=0;d<e.scenes.length;d++){const p=e.getScene(d).splatBuffer.getSplatCount(),g=o(u,p);c.push(g),u+=p}}else{const u=o(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(r&&r(!1),Bn(()=>{if(!l()){for(let d of u.data.subTrees){const h=Zo.convertWorkerSubTree(d,e);this.subTrees.push(h)}this.diposeSplatTreeWorker(),r&&r(!0),Bn(()=>{a()})}}))},Bn(()=>{if(l())return;i&&i(!0);const u=c.map(d=>d.buffer);iR(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(i,r)=>{i.children.length===0&&r(i);for(let s of i.children)t(s,r)};for(let i of this.subTrees)t(i.rootNode,e)}}function oR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=h>0,x=o||e.has("OES_texture_float"),_=A&&x,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:S,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:A,floatFragmentTextures:x,floatVertexTextures:_,maxSamples:C}}const Jo={Default:0,Instant:2},eo={None:0,Info:3},zg=new ni,lR=new is,Tl=6,cR=4,uR=4,dR=4,fR=6,hR=8,rd=4,sd=4,Hg=1,pR=.012,mR=.003,Vg=1,Gg=16777216;class qt extends Lt{constructor(t=Ui.ThreeD,i=!1,r=!1,s=!1,o=1,a=!0,l=!1,c=!1,u=1024,d=eo.None,h=0,p=1,g=.3){super(zg,lR);ue(this,"buildSplatTree",function(t=[],i,r){return new Promise(s=>{this.disposeSplatTree(),this.baseSplatTree=new sR(8,1e3);const o=performance.now(),a=new Bt;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,a);const c=this.getSceneIndexForSplat(l),u=t[c]||1;return a.w>=u},i,r).then(()=>{const l=performance.now()-o;if(this.logLevel>=eo.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)s();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,u=0,d=0;this.splatTree.visitLeaves(h=>{const p=h.data.indexes.length;p>0&&(u+=p,d++,c++)}),this.logLevel>=eo.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),u=u/d,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),s()}})})});ue(this,"updateUniforms",function(){const t=new we;return function(i,r,s,o,a,l){if(this.getSplatCount()>0){if(t.set(i.x*this.devicePixelRatio,i.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(r,s),this.material.uniforms.orthographicMode.value=o?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=St(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());ue(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const i=this.getMaxSplatCount();if(!this.renderer)return;const r=this.lastRenderer!==this.renderer,s=t!==i;if(!r&&!s)return;r?this.disposeDistancesComputationGPUResources():s&&this.disposeDistancesComputationGPUBufferResources();const o=this.renderer.getContext(),a=(p,g,S)=>{const m=p.createShader(g);if(!m)return console.error("Fatal error: gl could not create a shader object."),null;if(p.shaderSource(m,S),p.compileShader(m),!p.getShaderParameter(m,p.COMPILE_STATUS)){let v="unknown";g===p.VERTEX_SHADER?v="vertex shader":g===p.FRAGMENT_SHADER&&(v="fragement shader");const A=p.getShaderInfoLog(m);return console.error("Failed to compile "+v+" with these errors:"+A),p.deleteShader(m),null}return m};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${Ze.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:l+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(l=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${Ze.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:l+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const c=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,u=o.getParameter(o.VERTEX_ARRAY_BINDING),d=o.getParameter(o.CURRENT_PROGRAM),h=d?o.getProgramParameter(d,o.DELETE_STATUS):!1;if(r&&(this.distancesTransformFeedback.vao=o.createVertexArray()),o.bindVertexArray(this.distancesTransformFeedback.vao),r){const p=o.createProgram(),g=a(o,o.VERTEX_SHADER,l),S=a(o,o.FRAGMENT_SHADER,c);if(!g||!S)throw new Error("Could not compile shaders for distances computation on GPU.");if(o.attachShader(p,g),o.attachShader(p,S),o.transformFeedbackVaryings(p,["distance"],o.SEPARATE_ATTRIBS),o.linkProgram(p),!o.getProgramParameter(p,o.LINK_STATUS)){const f=o.getProgramInfoLog(p);throw console.error("Fatal error: Failed to link program: "+f),o.deleteProgram(p),o.deleteShader(S),o.deleteShader(g),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=p,this.distancesTransformFeedback.vertexShader=g,this.distancesTransformFeedback.vertexShader=S}if(o.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=o.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let p=0;p<this.scenes.length;p++)this.distancesTransformFeedback.transformsLocs[p]=o.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${p}]`)}else this.distancesTransformFeedback.modelViewProjLoc=o.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(r||s)&&(this.distancesTransformFeedback.centersBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0))),(r||s)&&(this.distancesTransformFeedback.outDistancesBuffer=o.createBuffer()),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.bufferData(o.ARRAY_BUFFER,i*4,o.STATIC_READ),r&&(this.distancesTransformFeedback.id=o.createTransformFeedback()),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),d&&h!==!0&&o.useProgram(d),u&&o.bindVertexArray(u),this.lastRenderer=this.renderer,t=i}}());ue(this,"fillTransformsArray",function(){const t=[];return function(i){t.length!==i.length&&(t.length=i.length);for(let r=0;r<this.scenes.length;r++){const o=this.getScene(r).transform.elements;for(let a=0;a<16;a++)t[r*16+a]=o[a]}i.set(t)}}());ue(this,"computeDistancesOnGPU",function(){const t=new He;return function(i,r){if(!this.renderer)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING),a=s.getParameter(s.CURRENT_PROGRAM),l=a?s.getProgramParameter(a,s.DELETE_STATUS):!1;if(s.bindVertexArray(this.distancesTransformFeedback.vao),s.useProgram(this.distancesTransformFeedback.program),s.enable(s.RASTERIZER_DISCARD),this.dynamicMode)for(let d=0;d<this.scenes.length;d++)if(t.copy(this.getScene(d).transform),t.premultiply(i),this.integerBasedDistancesComputation){const h=qt.getIntegerMatrixArray(t),p=[h[2],h[6],h[10],h[14]];s.uniform4i(this.distancesTransformFeedback.transformsLocs[d],p[0],p[1],p[2],p[3])}else s.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[d],!1,t.elements);else if(this.integerBasedDistancesComputation){const d=qt.getIntegerMatrixArray(i),h=[d[2],d[6],d[10]];s.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}else{const d=[i.elements[2],i.elements[6],i.elements[10]];s.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0)),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),s.beginTransformFeedback(s.POINTS),s.drawArrays(s.POINTS,0,this.getSplatCount()),s.endTransformFeedback(),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,null),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,null),s.disable(s.RASTERIZER_DISCARD);const c=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);s.flush();const u=new Promise(d=>{const h=()=>{if(this.disposed)d();else switch(s.clientWaitSync(c,0,0)){case s.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(h),this.computeDistancesOnGPUSyncTimeout;case s.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,s.deleteSync(c);const m=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.getBufferSubData(s.ARRAY_BUFFER,0,r),s.bindBuffer(s.ARRAY_BUFFER,null),m&&s.bindVertexArray(m),d()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(h)});return a&&l!==!0&&s.useProgram(a),o&&s.bindVertexArray(o),u}}());ue(this,"getSplatCenter",function(){const t={};return function(i,r,s){this.getLocalSplatParameters(i,t,s),t.splatBuffer.getSplatCenter(t.localIndex,r,t.sceneTransform)}}());ue(this,"getSplatScaleAndRotation",function(){const t={},i=new P;return function(r,s,o,a){this.getLocalSplatParameters(r,t,a),i.x=void 0,i.y=void 0,i.z=void 0,this.splatRenderMode===Ui.TwoD&&(i.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,s,o,t.sceneTransform,i)}}());ue(this,"getSplatColor",function(){const t={};return function(i,r){this.getLocalSplatParameters(i,t),t.splatBuffer.getSplatColor(t.localIndex,r)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=i,this.enableOptionalEffects=r,this.halfPrecisionCovariancesOnGPU=s,this.devicePixelRatio=o,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=l,this.antialiased=c,this.kernel2DSize=g,this.maxScreenSpaceSplatSize=u,this.logLevel=d,this.sphericalHarmonicsDegree=h,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=p,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new yi,this.calculatedSceneCenter=new P,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,i,r){const s=[];s.length=i.length;for(let o=0;o<i.length;o++){const a=i[o],l=r[o]||{};let c=l.position||[0,0,0],u=l.rotation||[0,0,0,1],d=l.scale||[1,1,1];const h=new P().fromArray(c),p=new xt().fromArray(u),g=new P().fromArray(d),S=qt.createScene(a,h,p,g,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(S),s[o]=S}return s}static createScene(t,i,r,s,o,a=1,l=!0){return new tR(t,i,r,s,o,a,l)}static buildSplatIndexMaps(t){const i=[],r=[];let s=0;for(let o=0;o<t.length;o++){const l=t[o].getMaxSplatCount();for(let c=0;c<l;c++)i[s]=c,r[s]=o,s++}return{localSplatIndexMap:i,sceneIndexMap:r}}build(t,i,r=!0,s=!1,o,a,l=!0){this.sceneOptions=i,this.finalBuild=s;const c=qt.getTotalMaxSplatCountForSplatBuffers(t),u=qt.buildScenes(this,t,i);if(r)for(let m=0;m<this.scenes.length&&m<u.length;m++){const f=u[m],v=this.getScene(m);f.copyTransformData(v)}this.scenes=u;let d=3;for(let m of t){const f=m.getMinSphericalHarmonicsDegree();f<d&&(d=f)}this.minSphericalHarmonicsDegree=Math.min(d,this.sphericalHarmonicsDegree);let h=!1;if(t.length!==this.lastBuildScenes.length)h=!0;else for(let m=0;m<t.length;m++)if(t[m]!==this.lastBuildScenes[m].splatBuffer){h=!0;break}let p=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||h)&&(p=!1),!p){this.boundingBox=new yi,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=eR.build(c),this.splatRenderMode===Ui.ThreeD?this.material=Ac.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=xc.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const m=qt.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=m.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=m.sceneIndexMap}const g=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const S=this.refreshGPUDataFromSplatBuffers(p);for(let m=0;m<this.scenes.length;m++)this.lastBuildScenes[m]=this.scenes[m];return this.lastBuildSplatCount=g,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,s&&this.scenes.length>0&&this.buildSplatTree(i.map(m=>m.splatAlphaRemovalThreshold||1),o,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,S}freeIntermediateSplatData(){const t=i=>{delete i.source.data,delete i.image,i.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(i=>{i.needsUpdate=!0,i.onUpdate=()=>{t(i)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new yi,this.calculatedSceneCenter=new P,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==zg&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const i=this.splatDataTextures[t];i.texture&&(i.texture.dispose(),i.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,i){const r=this.integerBasedDistancesComputation?this.getIntegerCenters(t,i,!0):this.getFloatCenters(t,i,!0),s=this.getSceneIndexes(t,i);return{centers:r,sceneIndexes:s}}refreshGPUDataFromSplatBuffers(t){const i=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const r=t?this.lastBuildSplatCount:0,{centers:s,sceneIndexes:o}=this.getDataForDistancesComputation(r,i-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(s,o,t),{from:r,to:i-1,count:i-r,centers:s,sceneIndexes:o}}refreshGPUBuffersForDistancesComputation(t,i,r=!1){const s=r?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(r,t,s),this.updateGPUTransformIndexesBufferForDistancesComputation(r,i,s)}refreshDataTexturesFromSplatBuffers(t){const i=this.getSplatCount(!0),r=this.lastBuildSplatCount,s=i-1;t?this.updateBaseDataFromSplatBuffers(r,s):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(r,s),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),i=this.getSplatCount(!0);this.disposeTextures();const r=(w,E)=>{const M=new we(4096,1024);for(;M.x*M.y*w<t*E;)M.y*=2;return M},s=w=>w>=1?fR:uR,o=w=>{const E=s(w),M=r(E,6);return{elementsPerTexelStored:E,texSize:M}};let a=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let u,d,h;if(this.splatRenderMode===Ui.ThreeD){const w=o(a);w.texSize.x*w.texSize.y>Gg&&a===0&&(a=1),u=new Float32Array(t*Tl)}else d=new Float32Array(t*3),h=new Float32Array(t*4);const p=new Float32Array(t*3),g=new Uint8Array(t*4);let S=Float32Array;c===1?S=Uint16Array:c===2&&(S=Uint8Array);const m=Zs(this.minSphericalHarmonicsDegree),f=this.minSphericalHarmonicsDegree?new S(t*m):void 0,v=r(sd,4),A=new Uint32Array(v.x*v.y*sd);qt.updateCenterColorsPaddedData(0,i-1,p,g,A);const x=new ir(A,v.x,v.y,qo,Fn);if(x.internalFormat="RGBA32UI",x.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=x,this.material.uniforms.centersColorsTextureSize.value.copy(v),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:d,rotations:h,centers:p,colors:g,sphericalHarmonics:f},centerColors:{data:A,texture:x,size:v}},this.splatRenderMode===Ui.ThreeD){const w=o(a),E=w.elementsPerTexelStored,M=w.texSize;let D=a>=1?Uint32Array:Float32Array;const U=a>=1?hR:dR,z=new D(M.x*M.y*U);a===0?z.set(u):qt.updatePaddedCompressedCovariancesTextureData(u,z,0,0,u.length);let I;if(a>=1)I=new ir(z,M.x,M.y,qo,Fn),I.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=I;else{I=new ir(z,M.x,M.y,pn,xi),this.material.uniforms.covariancesTexture.value=I;const L=new ir(new Uint32Array(32),2,2,qo,Fn);L.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=L,L.needsUpdate=!0}I.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(M),this.splatDataTextures.covariances={data:z,texture:I,size:M,compressionLevel:a,elementsPerTexelStored:E,elementsPerTexelAllocated:U}}else{const E=r(rd,6);let M=Float32Array,D=xi;const U=new M(E.x*E.y*rd);qt.updateScaleRotationsPaddedData(0,i-1,d,h,U);const z=new ir(U,E.x,E.y,pn,D);z.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=z,this.material.uniforms.scaleRotationsTextureSize.value.copy(E),this.splatDataTextures.scaleRotations={data:U,texture:z,size:E,compressionLevel:l}}if(f){const w=c===2?Gi:uo;let E=m;E%2!==0&&E++;const M=4,D=pn;let U=r(M,E);if(U.x*U.y<=Gg){const z=U.x*U.y*M,I=new S(z);for(let O=0;O<i;O++){const V=m*O,F=E*O;for(let B=0;B<m;B++)I[F+B]=f[V+B]}const L=new ir(I,U.x,U.y,D,w);L.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=L,this.splatDataTextures.sphericalHarmonics={componentCount:m,paddedComponentCount:E,data:I,textureCount:1,texture:L,size:U,compressionLevel:c,elementsPerTexel:M}}else{const z=m/3;E=z,E%2!==0&&E++,U=r(M,E);const I=U.x*U.y*M,L=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],O=[],V=[];for(let F=0;F<3;F++){const B=new S(I);O.push(B);for(let $=0;$<i;$++){const J=m*$,X=E*$;if(z>=3){for(let Y=0;Y<3;Y++)B[X+Y]=f[J+F*3+Y];if(z>=8)for(let Y=0;Y<5;Y++)B[X+3+Y]=f[J+9+F*5+Y]}}const H=new ir(B,U.x,U.y,D,w);V.push(H),H.needsUpdate=!0,L[F].value=H}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:m,componentCountPerChannel:z,paddedComponentCount:E,data:O,textureCount:3,textures:V,size:U,compressionLevel:c,elementsPerTexel:M}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(U),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let z=0;z<this.scenes.length;z++){const I=this.scenes[z].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[z]=I.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[z]=I.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const _=r(Hg,4),C=new Uint32Array(_.x*_.y*Hg);for(let w=0;w<i;w++)C[w]=this.globalSplatIndexToSceneIndexMap[w];const y=new ir(C,_.x,_.y,fh,Fn);y.internalFormat="R32UI",y.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=y,this.material.uniforms.sceneIndexesTextureSize.value.copy(_),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:C,texture:y,size:_},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,i){const r=this.splatDataTextures.covariances,s=r?r.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,s,a,c,t,i,t)}updateDataTexturesFromBaseData(t,i){const r=this.splatDataTextures.covariances,s=r?r.compressionLevel:void 0,o=this.splatDataTextures.scaleRotations,a=o?o.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,u=this.splatDataTextures.centerColors,d=u.data,h=u.texture;qt.updateCenterColorsPaddedData(t,i,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,d);const p=this.renderer?this.renderer.properties.get(h):null;if(!p||!p.__webglTexture?h.needsUpdate=!0:this.updateDataTexture(d,u.texture,u.size,p,sd,cR,4,t,i),r){const A=r.texture,x=t*Tl,_=i*Tl;if(s===0)for(let y=x;y<=_;y++){const w=this.splatDataTextures.baseData.covariances[y];r.data[y]=w}else qt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,r.data,t*r.elementsPerTexelAllocated,x,_);const C=this.renderer?this.renderer.properties.get(A):null;!C||!C.__webglTexture?A.needsUpdate=!0:s===0?this.updateDataTexture(r.data,r.texture,r.size,C,r.elementsPerTexelStored,Tl,4,t,i):this.updateDataTexture(r.data,r.texture,r.size,C,r.elementsPerTexelAllocated,r.elementsPerTexelAllocated,2,t,i)}if(o){const A=o.data,x=o.texture,_=6,C=a===0?4:2;qt.updateScaleRotationsPaddedData(t,i,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,A);const y=this.renderer?this.renderer.properties.get(x):null;!y||!y.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(A,o.texture,o.size,y,rd,_,C,t,i)}const g=this.splatDataTextures.baseData.sphericalHarmonics;if(g){let A=4;c===1?A=2:c===2&&(A=1);const x=(y,w,E,M,D)=>{const U=this.renderer?this.renderer.properties.get(y):null;!U||!U.__webglTexture?y.needsUpdate=!0:this.updateDataTexture(M,y,w,U,E,D,A,t,i)},_=l.componentCount,C=l.paddedComponentCount;if(l.textureCount===1){const y=l.data;for(let w=t;w<=i;w++){const E=_*w,M=C*w;for(let D=0;D<_;D++)y[M+D]=g[E+D]}x(l.texture,l.size,l.elementsPerTexel,y,C)}else{const y=l.componentCountPerChannel;for(let w=0;w<3;w++){const E=l.data[w];for(let M=t;M<=i;M++){const D=_*M,U=C*M;if(y>=3){for(let z=0;z<3;z++)E[U+z]=g[D+w*3+z];if(y>=8)for(let z=0;z<5;z++)E[U+3+z]=g[D+9+w*5+z]}}x(l.textures[w],l.size,l.elementsPerTexel,E,C)}}}const S=this.splatDataTextures.sceneIndexes,m=S.data;for(let A=this.lastBuildSplatCount;A<=i;A++)m[A]=this.globalSplatIndexToSceneIndexMap[A];const f=S.texture,v=this.renderer?this.renderer.properties.get(f):null;!v||!v.__webglTexture?f.needsUpdate=!0:this.updateDataTexture(m,S.texture,S.size,v,1,1,1,this.lastBuildSplatCount,i)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let i=0;i<this.scenes.length;i++){const s=this.getScene(i).splatBuffer;(i===0||s.compressionLevel>t)&&(t=s.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let i=0;i<this.scenes.length;i++){const s=this.getScene(i).splatBuffer;(i===0||s.compressionLevel<t)&&(t=s.compressionLevel)}return t}static computeTextureUpdateRegion(t,i,r,s,o){const a=o/s,l=t*a,c=Math.floor(l/r),u=c*r*s,d=i*a,h=Math.floor(d/r),p=h*r*s+r*s;return{dataStart:u,dataEnd:p,startRow:c,endRow:h}}updateDataTexture(t,i,r,s,o,a,l,c,u){const d=this.renderer.getContext(),h=qt.computeTextureUpdateRegion(c,u,r.x,o,a),p=h.dataEnd-h.dataStart,g=new t.constructor(t.buffer,h.dataStart*l,p),S=h.endRow-h.startRow+1,m=this.webGLUtils.convert(i.type),f=this.webGLUtils.convert(i.format,i.colorSpace),v=d.getParameter(d.TEXTURE_BINDING_2D);d.bindTexture(d.TEXTURE_2D,s.__webglTexture),d.texSubImage2D(d.TEXTURE_2D,0,0,h.startRow,r.x,S,f,m,g),d.bindTexture(d.TEXTURE_2D,v)}static updatePaddedCompressedCovariancesTextureData(t,i,r,s,o){let a=new DataView(i.buffer),l=r,c=0;for(let u=s;u<=o;u+=2)a.setUint16(l*2,t[u],!0),a.setUint16(l*2+2,t[u+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,i,r,s,o){for(let a=t;a<=i;a++){const l=a*4,c=a*3,u=a*4;o[u]=Qw(s,l),o[u+1]=$u(r[c]),o[u+2]=$u(r[c+1]),o[u+3]=$u(r[c+2])}}static updateScaleRotationsPaddedData(t,i,r,s,o){for(let l=t;l<=i;l++){const c=l*3,u=l*4,d=l*6;o[d]=r[c],o[d+1]=r[c+1],o[d+2]=r[c+2],o[d+3]=s[u],o[d+4]=s[u+1],o[d+5]=s[u+2]}}updateVisibleRegion(t){const i=this.getSplatCount(!0),r=new P;if(!t){const o=new P;this.scenes.forEach(a=>{o.add(a.splatBuffer.sceneCenter)}),o.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(o),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const s=t?this.lastBuildSplatCount:0;for(let o=s;o<i;o++){this.getSplatCenter(o,r,!0);const a=r.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Vg&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Vg,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=Jo.Default){const i=pR*this.sceneFadeInRateMultiplier,r=mR*this.sceneFadeInRateMultiplier,s=this.finalBuild?i:r,o=t===Jo.Default?s:r;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*o+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===Jo.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,i){const r=this.geometry;r.attributes.splatIndex.set(t),r.attributes.splatIndex.needsUpdate=!0,i>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),r.instanceCount=i,r.setDrawRange(0,i)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?qt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let i=0;for(let r of t)r&&r.splatBuffer&&(i+=r.splatBuffer.getSplatCount());return i}static getTotalSplatCountForSplatBuffers(t){let i=0;for(let r of t)i+=r.getSplatCount();return i}getMaxSplatCount(){return qt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let i=0;for(let r of t)r&&r.splatBuffer&&(i+=r.splatBuffer.getMaxSplatCount());return i}static getTotalMaxSplatCountForSplatBuffers(t){let i=0;for(let r of t)i+=r.getMaxSplatCount();return i}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const i=this.renderer.getContext(),r=new oR(i),s=new aR(i,r,{});if(r.init(s),this.webGLUtils=new FS(i,r,s),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:o,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(o,a)}}}updateGPUCentersBufferForDistancesComputation(t,i,r){if(!this.renderer)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=r*l;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,c,i);else{const u=new a(this.getMaxSplatCount()*l);u.set(i),s.bufferData(s.ARRAY_BUFFER,u,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),o&&s.bindVertexArray(o)}updateGPUTransformIndexesBufferForDistancesComputation(t,i,r){if(!this.renderer||!this.dynamicMode)return;const s=this.renderer.getContext(),o=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const a=r*4;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,a,i);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(i),s.bufferData(s.ARRAY_BUFFER,l,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),o&&s.bindVertexArray(o)}getSceneIndexes(t,i){let r;const s=i-t+1;r=new Uint32Array(s);for(let o=t;o<=i;o++)r[o]=this.globalSplatIndexToSceneIndexMap[o];return r}getLocalSplatParameters(t,i,r){r==null&&(r=!this.dynamicMode),i.splatBuffer=this.getSplatBufferForSplat(t),i.localIndex=this.getSplatLocalIndex(t),i.sceneTransform=r?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,i,r,s,o,a,l,c=0,u=0,d=1,h,p,g=0,S){const m=new P;m.x=void 0,m.y=void 0,this.splatRenderMode===Ui.ThreeD?m.z=void 0:m.z=1;const f=new He;let v=0,A=this.scenes.length-1;S!=null&&S>=0&&S<=this.scenes.length&&(v=S,A=S);for(let x=v;x<=A;x++){l==null&&(l=!this.dynamicMode);const _=this.getScene(x),C=_.splatBuffer;let y;if(l&&(this.getSceneTransform(x,f),y=f),t&&C.fillSplatCovarianceArray(t,y,h,p,g,c),i||r){if(!i||!r)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');C.fillSplatScaleRotationArray(i,r,y,h,p,g,u,m)}s&&C.fillSplatCenterArray(s,y,h,p,g),o&&C.fillSplatColorArray(o,_.minimumAlpha,h,p,g),a&&C.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,y,h,p,g,d),g+=C.getSplatCount()}}getIntegerCenters(t,i,r=!1){const s=i-t+1,o=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t);let a,l=r?4:3;a=new Int32Array(s*l);for(let c=0;c<s;c++){for(let u=0;u<3;u++)a[c*l+u]=Math.round(o[c*3+u]*1e3);r&&(a[c*l+3]=1e3)}return a}getFloatCenters(t,i,r=!1){const s=i-t+1,o=new Float32Array(s*3);if(this.fillSplatDataArrays(null,null,null,o,null,null,void 0,void 0,void 0,void 0,t),!r)return o;let a=new Float32Array(s*4);for(let l=0;l<s;l++){for(let c=0;c<3;c++)a[l*4+c]=o[l*3+c];a[l*4+3]=1}return a}getSceneTransform(t,i){const r=this.getScene(t);r.updateTransform(this.dynamicMode),i.copy(r.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const i=t.elements,r=[];for(let s=0;s<16;s++)r[s]=Math.round(i[s]*1e3);return r}computeBoundingBox(t=!1,i){let r=this.getSplatCount();if(i!=null){if(i<0||i>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");r=this.scenes[i].splatBuffer.getSplatCount()}const s=new Float32Array(r*3);this.fillSplatDataArrays(null,null,null,s,null,null,t,void 0,void 0,void 0,void 0,i);const o=new P,a=new P;for(let l=0;l<r;l++){const c=l*3,u=s[c],d=s[c+1],h=s[c+2];(l===0||u<o.x)&&(o.x=u),(l===0||d<o.y)&&(o.y=d),(l===0||h<o.z)&&(o.z=h),(l===0||u>a.x)&&(a.x=u),(l===0||d>a.y)&&(a.y=d),(l===0||h>a.z)&&(a.z=h)}return new yi(o,a)}}var gR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Wg="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",vR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",SR="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function AR(n){let e,t,i,r,s,o,a,l,c,u,d,h,p,g,S,m,f,v,A,x;function _(C,y,w,E,M,D,U){const z=performance.now();if(!i&&(new Uint32Array(t,a,M.byteLength/x.BytesPerInt).set(M),new Float32Array(t,u,U.byteLength/x.BytesPerFloat).set(U),E)){let F;r?F=new Int32Array(t,d,D.byteLength/x.BytesPerInt):F=new Float32Array(t,d,D.byteLength/x.BytesPerFloat),F.set(D)}m||(m=new Uint32Array(v)),new Float32Array(t,S,16).set(w),new Uint32Array(t,p,v).set(m),e.exports.sortIndexes(a,g,d,h,p,S,l,c,u,v,C,y,o,E,r,s);const I={sortDone:!0,splatSortCount:C,splatRenderCount:y,sortTime:0};if(!i){const O=new Uint32Array(t,l,y);(!f||f.length<y)&&(f=new Uint32Array(y)),f.set(O),I.sortedIndexes=f}const L=performance.now();I.sortTime=L-z,n.postMessage(I)}n.onmessage=C=>{if(C.data.centers)centers=C.data.centers,sceneIndexes=C.data.sceneIndexes,r?new Int32Array(t,g+C.data.range.from*x.BytesPerInt*4,C.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+C.data.range.from*x.BytesPerFloat*4,C.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+C.data.range.from*4,C.data.range.count).set(new Uint32Array(sceneIndexes)),A=C.data.range.from+C.data.range.count;else if(C.data.sort){const y=Math.min(C.data.sort.splatRenderCount||0,A),w=Math.min(C.data.sort.splatSortCount||0,A),E=C.data.sort.usePrecomputedDistances;let M,D,U;i||(M=C.data.sort.indexesToSort,U=C.data.sort.transforms,E&&(D=C.data.sort.precomputedDistances)),_(w,y,C.data.sort.modelViewProj,E,M,D,U)}else if(C.data.init){x=C.data.init.Constants,o=C.data.init.splatCount,i=C.data.init.useSharedMemory,r=C.data.init.integerBasedSort,s=C.data.init.dynamicMode,v=C.data.init.distanceMapRange,A=0;const y=r?x.BytesPerInt*4:x.BytesPerFloat*4,w=new Uint8Array(C.data.init.sorterWasmBytes),E=16*x.BytesPerFloat,M=o*x.BytesPerInt,D=o*y,U=E,z=r?o*x.BytesPerInt:o*x.BytesPerFloat,I=o*x.BytesPerInt,L=o*x.BytesPerInt,O=r?v*x.BytesPerInt*2:v*x.BytesPerFloat*2,V=s?o*x.BytesPerInt:0,F=s?x.MaxScenes*E:0,B=x.MemoryPageSize*32,H=M+D+U+z+I+O+L+V+F+B,$=Math.floor(H/x.MemoryPageSize)+1,J={module:{},env:{memory:new WebAssembly.Memory({initial:$,maximum:$,shared:!0})}};WebAssembly.compile(w).then(X=>WebAssembly.instantiate(X,J)).then(X=>{e=X,a=0,g=a+M,S=g+D,d=S+U,h=d+z,p=h+I,l=p+O,c=l+L,u=c+V,t=J.env.memory.buffer,i?n.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:d,transformsBuffer:t,transformsOffset:u}):n.postMessage({sortSetupPhase1Complete:!0})})}}}function xR(n,e,t,i,r,s=Ze.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",AR.toString(),")(self)"],{type:"application/javascript"})));let a=gR;const l=xh()?NS():null;!t&&!e?(a=Wg,l&&l.major<=16&&l.minor<4&&(a=SR)):t?e||l&&l.major<=16&&l.minor<4&&(a=vR):a=Wg;const c=atob(a),u=new Uint8Array(c.length);for(let d=0;d<c.length;d++)u[d]=c.charCodeAt(d);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:n,useSharedMemory:e,integerBasedSort:i,dynamicMode:r,distanceMapRange:1<<s,Constants:{BytesPerFloat:Ze.BytesPerFloat,BytesPerInt:Ze.BytesPerInt,MemoryPageSize:Ze.MemoryPageSize,MaxScenes:Ze.MaxScenes}}}),o}const Rs={None:0,VR:1,AR:2};class po{static createButton(e,t={}){const i=document.createElement("button");function r(){let c=null;async function u(p){p.addEventListener("end",d),await e.xr.setSession(p),i.textContent="EXIT VR",c=p}function d(){c.removeEventListener("end",d),i.textContent="ENTER VR",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",h).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(p=>{console.warn(p)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(p=>{console.warn(p)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="VR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="VRButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?r():o(),c&&po.xrSessionIsGranted&&i.click()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{po.xrSessionIsGranted=!0})}}}po.xrSessionIsGranted=!1;po.registerSessionGrantedListener();class yR{static createButton(e,t={}){const i=document.createElement("button");function r(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),h.appendChild(p);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),p.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function u(h){h.addEventListener("end",d),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),i.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function d(){c.removeEventListener("end",d),i.textContent="START AR",t.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const od={Always:0,Never:2},_R=50,ER=.75,CR=15e5,MR=10,TR=2.5,wR=60,lr=class lr{constructor(e={}){ue(this,"onKeyDown",function(){const e=new P,t=new He,i=new He;return function(r){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),i.makeRotationAxis(e,-Math.PI/128),r.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(i);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}}());ue(this,"onMouseUp",function(){const e=new we;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Ts()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());ue(this,"checkForFocalPointChange",function(){const e=new we,t=new P,i=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),i.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,i),i.length>0)){const s=i[0].origin;t.copy(s).sub(this.camera.position),t.length()>ER&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Ts())}}}());ue(this,"updateSplatMesh",function(){const e=new we;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const i=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,r=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*s,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,i*o,r*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}}());ue(this,"addSplatBuffers",function(){return function(e,t=[],i=!0,r=!0,s=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(d=>{r&&(c=this.loadingSpinner.addTask("Processing splats...")),Bn(()=>{if(this.isDisposingOrDisposed())d();else{const h=this.addSplatBuffersToMesh(e,t,i,s,o,l),p=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==p&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:h.centers.buffer,sceneIndexes:h.sceneIndexes.buffer,range:{from:h.from,to:h.to,count:h.count}}),(!this.sortWorker&&p>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(S=>{!this.sortWorker||!S?(this.splatRenderReady=!0,u(),d()):(a?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{u(),d()}))})})}},!0)})}}());ue(this,"addSplatBuffersToMesh",function(){let e;return function(t,i,r=!0,s=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(p=>p.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(p=>p):[]),l.push(...t),c.push(...i),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=p=>{if(this.isDisposingOrDisposed())return;const g=this.splatMesh.getSplatCount();s&&g>=CR&&!p&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},d=p=>{this.isDisposingOrDisposed()||p&&e&&(this.loadingSpinner.removeTask(e),e=null)},h=this.splatMesh.build(l,c,!0,r,u,d,a);return r&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),h}}());ue(this,"shouldRender",function(){let e=0;const t=new P,i=new xt,r=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>r||Math.abs(a.y-t.y)>r||Math.abs(a.z-t.z)>r||Math.abs(l.x-i.x)>r||Math.abs(l.y-i.y)>r||Math.abs(l.z-i.z)>r||Math.abs(l.w-i.w)>r}return s=this.renderMode!==od.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===od.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),i.copy(this.camera.quaternion)),e++,s}}());ue(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=i=>{for(let r of i.children)if(r.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());ue(this,"updateFPS",function(){let e=Ts(),t=0;return function(){if(this.consecutiveRenderFrames>wR){const i=Ts();i-e>=1?(this.currentFPS=t,t=0,e=i):t++}else this.currentFPS=null}}());ue(this,"updateForRendererSizeChanges",function(){const e=new we,t=new we;let i;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(i===void 0||i!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),i=this.camera.isOrthographicCamera))}}());ue(this,"timingSensitiveUpdates",function(){let e;return function(){const t=Ts();e||(e=t);const i=t-e;this.updateCameraTransition(t),this.updateFocusMarker(i),e=t}}());ue(this,"updateCameraTransition",function(){let e=new P,t=new P,i=new P;return function(r){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),i.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(i)),a=(s/(Math.PI/3)*.65+.3)/s*(r-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}}());ue(this,"updateFocusMarker",function(){const e=new we;let t=!1;return function(i){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const r=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(r+MR*i,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let r;if(t?r=1:r=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),r>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(r-TR*i,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}r>0&&this.forceRenderNextFrame(),t=!1}}}());ue(this,"updateMeshCursor",function(){const e=[],t=new we;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());ue(this,"updateInfoPanel",function(){const e=new we;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const i=this.controls?this.controls.target:null,r=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,i,this.camera.up,this.camera.isOrthographicCamera,r,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());ue(this,"runSplatSort",function(){const e=new He,t=[],i=new P(0,0,-1),r=new P(0,0,-1),s=new P,o=new P,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let d=0,h=0,p=!1,g=!1;if(r.set(0,0,-1).applyQuaternion(this.camera.quaternion),d=r.dot(i),h=o.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(d<=.99&&(p=!0),h>=1&&(g=!0),!p&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:S,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||u,this.splatRenderCount=S,e.copy(this.camera.matrixWorld).invert();const f=this.perspectiveCamera||this.camera;e.premultiply(f.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let v=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(v=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),v.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||m)a.push(this.splatRenderCount);else{for(let _ of l)if(d<_.angleThreshold){for(let C of _.sortFractions)a.push(Math.floor(this.splatRenderCount*C));break}a.push(this.splatRenderCount)}let A=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=A,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const x={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:A,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(x.indexesToSort=this.sortWorkerIndexesToSort,x.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(x.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(_=>{this.sortPromiseResolver=_}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(_=>{this.sortWorker.postMessage(_)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:x}),a.length===0&&(s.copy(this.camera.position),i.copy(r)),!0}),v}}());ue(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const i=new P,r=new P,s=new P,o=new He,a=new He,l=new He,c=new P,u=new P(0,0,-1),d=new P,h=p=>d.copy(p.max).sub(p.min).length();return function(p=!1){this.getRenderDimensions(c);const g=c.y/2/Math.tan(this.camera.fov/2*pS.DEG2RAD),S=Math.atan(c.x/2/g),m=Math.atan(c.y/2/g),f=Math.cos(S),v=Math.cos(m),A=this.splatMesh.getSplatTree();if(A){a.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||a.multiply(this.splatMesh.matrixWorld);let x=0,_=0;for(let y=0;y<A.subTrees.length;y++){const w=A.subTrees[y];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(y,l),o.multiply(l));const E=w.nodesWithIndexes.length;for(let M=0;M<E;M++){const D=w.nodesWithIndexes[M];if(!D.data||!D.data.indexes||D.data.indexes.length===0)continue;s.copy(D.center).applyMatrix4(o);const U=s.length();s.normalize(),i.copy(s).setX(0).normalize(),r.copy(s).setY(0).normalize();const z=u.dot(r),I=u.dot(i),L=h(D),O=I<v-.6,V=z<f-.6;!p&&(V||O)&&U>L||(_+=D.data.indexes.length,e[x]=D,D.data.distanceToNode=U,x++)}}e.length=x,e.sort((y,w)=>y.data.distanceToNode<w.data.distanceToNode?-1:1);let C=_*Ze.BytesPerInt;for(let y=0;y<x;y++){const w=e[y],E=w.data.indexes.length,M=E*Ze.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,C-M,E).set(w.data.indexes),C-=M}return{splatRenderCount:_,shouldSortAll:!1}}else{const x=this.splatMesh.getSplatCount();if(!t||t.length!==x){t=new Uint32Array(x);for(let _=0;_<x;_++)t[_]=_}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:x,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new P().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new P().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new P().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Rs.None,this.webXRMode!==Rs.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||od.Always,this.sceneRevealMode=e.sceneRevealMode||Jo.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||eo.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,xh()){const i=NS();i.major<17&&(this.enableSIMDInSort=!1),i.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Ui.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||Ze.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=St(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new J1,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new P,this.nextCameraTarget=new P,this.mousePosition=new we,this.mouseDownPosition=new we,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new hf(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new j1(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new q1(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new qt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new Gw,this.sceneHelper=new $o(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new we;this.getRenderDimensions(e),this.perspectiveCamera=new jn(_R,e.x/e.y,.1,1e3),this.orthographicCamera=new mh(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new we;this.getRenderDimensions(e),this.renderer=new BS({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new nt(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Rs.VR?this.rootElement.appendChild(po.createButton(this.renderer,e)):this.webXRMode===Rs.AR&&this.rootElement.appendChild(yR.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Rs.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Ml(this.camera,this.renderer.domElement):this.perspectiveControls=new Ml(this.camera,this.renderer.domElement):(this.perspectiveControls=new Ml(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Ml(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Rs.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Ts()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,i=e?this.orthographicCamera:this.perspectiveCamera;if(i.position.copy(t.position),i.up.copy(t.up),i.rotation.copy(t.rotation),i.quaternion.copy(t.quaternion),i.matrix.copy(t.matrix),this.camera=i,this.controls){const r=a=>{a.saveState(),a.reset()},s=this.controls,o=e?this.orthographicControls:this.perspectiveControls;r(o),r(s),o.target.copy(s.target),e?lr.setCameraZoomFromPosition(i,t,s):lr.setCameraPositionFromZoom(i,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const i=this.renderer.xr.getCamera().projectionMatrix.elements[0],r=this.camera.projectionMatrix.elements[0];e.x*=r/i}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const i=t.format!==void 0&&t.format!==null?t.format:Bg(e),r=lr.isProgressivelyLoadable(i)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;s&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(S,m,f)=>{if(s)if(f===bt.Downloading)if(S==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(r)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const v=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${v}`)}else f===bt.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,u=0;const d=(S,m)=>{s&&((S&&r||m&&!r)&&(this.loadingSpinner.removeTask(o),!m&&!c&&this.loadingProgressBar.show()),r&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},h=(S,m,f)=>{u=S,l(S,m,f),t.onProgress&&t.onProgress(S,m,f)},p=(S,m,f)=>{!r&&t.onProgress&&t.onProgress(0,"0%",bt.Processing);const v={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([S],[v],f,m&&s,s,r,r).then(()=>{!r&&t.onProgress&&t.onProgress(100,"100%",bt.Processing),d(m,f)})};return(r?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,i,t.splatAlphaRemovalThreshold,p.bind(this),h,a.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,i,r,s,o,a){const l=this.downloadSplatSceneToSplatBuffer(e,i,s,!1,void 0,t,a),c=Zu(l.abortHandler);return l.then(u=>(this.removeSplatSceneDownloadPromise(l),r(u,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(u=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(u,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,i,r,s,o,a){let l=0,c=!1;const u=[],d=()=>{if(u.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const m=u.shift();r(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{c=!1,m.firstBuild?g.resolve():m.finalBuild&&(S.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),u.length>0&&Bn(()=>d())})}},h=(m,f)=>{this.isDisposingOrDisposed()||(f||u.length===0||m.getSplatCount()>u[0].splatBuffer.getSplatCount())&&(u.push({splatBuffer:m,firstBuild:l===0,finalBuild:f}),l++,d())},p=this.downloadSplatSceneToSplatBuffer(e,i,s,!0,h,t,a),g=Zu(p.abortHandler),S=Zu();return this.addSplatSceneDownloadPromise(p),this.setSplatSceneDownloadAndBuildPromise(S.promise),p.then(()=>{this.removeSplatSceneDownloadPromise(p)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(p);const f=this.updateError(m,"Viewer::addSplatScene -> Could not load one or more scenes");g.reject(f),o&&o(f)}),g.promise}addSplatScenes(e,t=!0,i=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const r=e.length,s=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(d,h,p,g)=>{s[d]=h;let S=0;for(let m=0;m<r;m++)S+=s[m]||0;S=S/r,p=`${S.toFixed(2)}%`,t&&g===bt.Downloading&&this.loadingSpinner.setMessageForTask(o,S==100?"Download complete!":`Downloading: ${p}`),i&&i(S,p,g)},l=[],c=[];for(let d=0;d<e.length;d++){const h=e[d],p=h.format!==void 0&&h.format!==null?h.format:Bg(h.path),g=this.downloadSplatSceneToSplatBuffer(h.path,h.splatAlphaRemovalThreshold,a.bind(this,d),!1,void 0,p,h.headers);l.push(g),c.push(g.promise)}const u=new Ca((d,h)=>{Promise.all(c).then(p=>{t&&this.loadingSpinner.removeTask(o),i&&i(0,"0%",bt.Processing),this.addSplatBuffers(p,e,!0,t,t,!1,!1).then(()=>{i&&i(100,"100%",bt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),d()})}).catch(p=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise(),h(this.updateError(p,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},d=>{for(let h of l)h.abort(d)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,i=void 0,r=!1,s=void 0,o,a){try{if(o===yn.Splat||o===yn.KSplat||o===yn.Ply){const l=r?!1:this.optimizeSplatData;if(o===yn.Splat)return Dh.loadFromURL(e,i,r,s,t,this.inMemoryCompressionLevel,l,a);if(o===yn.KSplat)return ff.loadFromURL(e,i,r,s,a);if(o===yn.Ply)return bh.loadFromURL(e,i,r,s,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,a)}else if(o===yn.Spz)return Ph.loadFromURL(e,i,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,a)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===yn.Splat||e===yn.KSplat||e===yn.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const i=this.integerBasedSort?Int32Array:Float32Array,r=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=xR(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=eo.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new i(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,Ze.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new i(s),this.sortWorkerTransforms=new Float32Array(Ze.MaxScenes*16));for(let a=0;a<r;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=s,this.logLevel>=eo.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof US?e:e instanceof Sc?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let i;return this.splatSceneRemovalPromise=new Promise((r,s)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=u=>{a(),this.splatSceneRemovalPromise=null,u?s(u):r()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;i=this.sortPromise||Promise.resolve(),i.then(()=>{if(c())return;const u=[],d=[],h=[];for(let p=0;p<this.splatMesh.scenes.length;p++){let g=!1;for(let S of e)if(S===p){g=!0;break}if(!g){const S=this.splatMesh.scenes[p];u.push(S.splatBuffer),d.push(this.splatMesh.sceneOptions[p]),h.push({position:S.position.clone(),quaternion:S.quaternion.clone(),scale:S.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Jo.Instant,this.createSplatMesh(),this.addSplatBuffers(u,d,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((p,g)=>{p.position.copy(h[g].position),p.quaternion.copy(h[g].quaternion),p.scale.copy(h[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}i=this.sortPromise||Promise.resolve(),i.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(p=>{l(p)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let i in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(i)){const r=this.splatSceneDownloadPromises[i];t.push(r),e.push(r.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(i=>{i.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&lr.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};ue(lr,"setCameraPositionFromZoom",function(){const e=new P;return function(t,i,r){const s=1/(i.zoom*.001);e.copy(r.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(r.target).add(e)}}()),ue(lr,"setCameraZoomFromPosition",function(){const e=new P;return function(t,i,r){const s=e.copy(r.target).sub(i.position).length();t.zoom=1/(s*.001)}}());let mf=lr;function RR({jobId:n,fileType:e,onReset:t}){const i=Ot.useRef(null),[r,s]=Ot.useState(!0),[o,a]=Ot.useState(null);return Ot.useEffect(()=>{let l=null;return!n||!i.current?void 0:((async()=>{try{s(!0),a(null),l=new mf({selfContained:!1,useBuiltInControls:!0,rootElement:i.current,cameraPosition:[0,1.5,4],cameraLookAt:[0,0,0],halfPrecision:!0,integerRedraw:!1,sharedMemoryForWorkers:!1});const u=`/api/splat/${n}.${e||"splat"}`;await l.addSplatScene(u,{streamView:!0}),l.start(),s(!1),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)}catch(u){console.error("Error loading splat viewer:",u),a("Error initializing 3D viewer. The file might be corrupted or server is unreachable."),s(!1)}})(),()=>{if(l)try{l.dispose()}catch(u){console.warn("Failed to dispose viewer:",u)}})},[n,e]),le.jsxs("div",{className:"card viewer-card",children:[le.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[le.jsxs("div",{children:[le.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.25rem"},children:"Interactive 3D Scene"}),le.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:["Job ID: ",n]})]}),le.jsxs("button",{onClick:t,className:"browse-btn",style:{padding:"0.5rem 1rem",fontSize:"0.8rem",borderRadius:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-glass)",boxShadow:"none",display:"flex",alignItems:"center",gap:"0.4rem"},children:[le.jsx(by,{size:12}),le.jsx("span",{children:"Upload New Video"})]})]}),le.jsxs("div",{className:"viewer-container",ref:i,children:[r&&le.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem",background:"#050508",zIndex:5},children:[le.jsx("div",{className:"spinner",style:{width:"40px",height:"40px"}}),le.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:"Loading 3D Gaussian Splats..."})]}),o&&le.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem",background:"#050508",padding:"2rem",textAlign:"center",zIndex:5},children:[le.jsx("p",{style:{color:"var(--color-error)",fontWeight:500},children:o}),le.jsx("button",{className:"browse-btn",onClick:t,style:{padding:"0.5rem 1rem",fontSize:"0.8rem"},children:"Go Back"})]}),!r&&!o&&le.jsxs(le.Fragment,{children:[le.jsxs("div",{className:"viewer-overlay",children:[le.jsx("span",{className:"viewer-badge",children:"Active"}),le.jsx("span",{className:"viewer-badge",style:{color:"var(--accent-purple)"},children:"WebGL Rendering"})]}),le.jsx("div",{className:"viewer-instructions",children:"🖱️ Drag: Rotate | ⚙️ Scroll: Zoom | ⌨️ Right Click + Drag: Pan"})]})]})]})}function IR({jobId:n,onReset:e}){const[t,i]=Ot.useState({status:"queued",progress:0,fileType:"splat"}),[r,s]=Ot.useState(null);Ot.useEffect(()=>{if(!n)return;l();const a=setInterval(()=>{l()},1e3);async function l(){try{const c=await fetch(`/api/status/${n}`);if(!c.ok)throw new Error("Job not found or server error");const u=await c.json();i({status:u.status,progress:u.progress,fileType:u.file_type||"splat",error:u.error||null}),(u.status==="completed"||u.status==="failed")&&clearInterval(a)}catch(c){console.error("Error polling job status:",c),s("Could not retrieve status from the server."),clearInterval(a)}}return()=>clearInterval(a)},[n]);const o=a=>{const l=t.status,c=["queued","extracting_frames","running_sfm","training","completed"],u=c.indexOf(l),d=c.indexOf(a);return l==="failed"?"pending":l==="completed"?"completed":u===d?"active":u>d?"completed":"pending"};return le.jsxs("div",{className:"dashboard-grid",children:[le.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[le.jsxs("div",{className:"status-tracker",children:[le.jsxs("div",{className:"progress-header",children:[le.jsx("span",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",fontWeight:500},children:t.status==="completed"?"Processing Complete":"AI Reconstruction Status"}),le.jsxs("span",{className:"progress-percentage",children:[t.progress,"%"]})]}),le.jsx("div",{className:"progress-bar-bg",children:le.jsx("div",{className:"progress-bar-fill",style:{width:`${t.progress}%`}})})]}),le.jsxs("div",{className:"stages-list",children:[le.jsxs("div",{className:`stage-item ${o("extracting_frames")}`,children:[le.jsx("div",{className:"stage-dot"}),le.jsx("span",{className:"stage-label",children:"Extracting Video Frames (OpenCV)"})]}),le.jsxs("div",{className:`stage-item ${o("running_sfm")}`,children:[le.jsx("div",{className:"stage-dot"}),le.jsx("span",{className:"stage-label",children:"Structure from Motion (COLMAP)"})]}),le.jsxs("div",{className:`stage-item ${o("training")}`,children:[le.jsx("div",{className:"stage-dot"}),le.jsx("span",{className:"stage-label",children:"Training Gaussian Splats (AI)"})]}),le.jsxs("div",{className:`stage-item ${o("completed")}`,children:[le.jsx("div",{className:"stage-dot"}),le.jsx("span",{className:"stage-label",children:"Ready for Visualization"})]})]}),r&&le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--color-error)"},children:[le.jsx(Yp,{size:18}),le.jsx("span",{style:{fontSize:"0.85rem"},children:r})]}),t.status==="failed"&&le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--color-error)"},children:[le.jsx(Yp,{size:18}),le.jsx("span",{style:{fontSize:"0.85rem"},children:t.error||"Processing failed. Please check backend logs."})]}),t.status!=="completed"&&t.status!=="failed"&&le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",background:"rgba(138, 43, 226, 0.1)",padding:"1rem",borderRadius:"12px",border:"1px solid rgba(138, 43, 226, 0.2)"},children:[le.jsx(Iy,{className:"spinner",style:{animationDuration:"3s",color:"var(--accent-purple)"}}),le.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",lineHeight:"1.4"},children:"Your video is processing in the background. Do not close this tab."})]})]}),le.jsx("div",{className:"viewer-panel",children:t.status==="completed"?le.jsx(RR,{jobId:n,fileType:t.fileType,onReset:e}):le.jsxs("div",{className:"card viewer-card viewer-placeholder",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem",textAlign:"center",width:"100%"},children:[le.jsx("div",{className:"spinner",style:{width:"48px",height:"48px",borderWidth:"4px"}}),le.jsxs("div",{children:[le.jsx("h3",{style:{fontFamily:"var(--font-display)",marginBottom:"0.5rem"},children:"Orchestrating AI Pipelines..."}),le.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",maxWidth:"400px",margin:"0 auto"},children:"We are extracting video keyframes and preparing the camera coordinate matrix for splatting."})]})]})})]})}function bR(){const[n,e]=Ot.useState(null),t=r=>{e(r)},i=()=>{e(null)};return le.jsxs("div",{className:"app-container",children:[le.jsxs("header",{children:[le.jsx("h1",{className:"logo-title",children:"Gaussian Splatter 3D"}),le.jsx("p",{className:"subtitle",children:"Transform smartphone videos into interactive 3D WebGL scenes using AI & Computer Vision"})]}),le.jsx("main",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},children:n?le.jsx(IR,{jobId:n,onReset:i}):le.jsx(Ly,{onUploadSuccess:t})}),le.jsx("footer",{style:{marginTop:"3rem",textAlign:"center",fontSize:"0.8rem",color:"var(--text-secondary)",opacity:.5},children:"Powered by Three.js & FastAPI • M4 Silicon Pipeline"})]})}ad.createRoot(document.getElementById("root")).render(le.jsx(pA.StrictMode,{children:le.jsx(bR,{})}));
