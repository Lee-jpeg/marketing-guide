(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rc={exports:{}},fl={},Mc={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),Dd=Symbol.for("react.portal"),Bd=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),Hd=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),Qd=Symbol.for("react.lazy"),Ma=Symbol.iterator;function Kd(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var Ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zc=Object.assign,Nc={};function Zt(e,n,t){this.props=e,this.context=n,this.refs=Nc,this.updater=t||Ic}Zt.prototype.isReactComponent={};Zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dc(){}Dc.prototype=Zt.prototype;function xu(e,n,t){this.props=e,this.context=n,this.refs=Nc,this.updater=t||Ic}var _u=xu.prototype=new Dc;_u.constructor=xu;zc(_u,Zt.prototype);_u.isPureReactComponent=!0;var Ia=Array.isArray,Bc=Object.prototype.hasOwnProperty,ku={current:null},jc={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Bc.call(n,r)&&!jc.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Yr,type:e,key:l,ref:o,props:i,_owner:ku.current}}function Gd(e,n){return{$$typeof:Yr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function Xd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var za=/\/+/g;function Ll(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Xd(""+e.key):n.toString(36)}function Si(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yr:case Dd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ll(o,0):r,Ia(i)?(t="",e!=null&&(t=e.replace(za,"$&/")+"/"),Si(i,n,t,"",function(s){return s})):i!=null&&(Cu(i)&&(i=Gd(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(za,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Ia(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+Ll(l,u);o+=Si(l,n,t,a,i)}else if(a=Kd(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+Ll(l,u++),o+=Si(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ii(e,n,t){if(e==null)return e;var r=[],i=0;return Si(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Yd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Ei={transition:null},qd={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:ku};function Uc(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:ii,forEach:function(e,n,t){ii(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ii(e,function(){n++}),n},toArray:function(e){return ii(e,function(n){return n})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Zt;H.Fragment=Bd;H.Profiler=Vd;H.PureComponent=xu;H.StrictMode=jd;H.Suspense=Wd;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qd;H.act=Uc;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zc({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=ku.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)Bc.call(n,a)&&!jc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Yr,type:e.type,key:i,ref:l,props:r,_owner:o}};H.createContext=function(e){return e={$$typeof:Hd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ud,_context:e},e.Consumer=e};H.createElement=Vc;H.createFactory=function(e){var n=Vc.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:bd,render:e}};H.isValidElement=Cu;H.lazy=function(e){return{$$typeof:Qd,_payload:{_status:-1,_result:e},_init:Yd}};H.memo=function(e,n){return{$$typeof:$d,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=n}};H.unstable_act=Uc;H.useCallback=function(e,n){return Le.current.useCallback(e,n)};H.useContext=function(e){return Le.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};H.useEffect=function(e,n){return Le.current.useEffect(e,n)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(e,n,t){return Le.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return Le.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return Le.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return Le.current.useMemo(e,n)};H.useReducer=function(e,n,t){return Le.current.useReducer(e,n,t)};H.useRef=function(e){return Le.current.useRef(e)};H.useState=function(e){return Le.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return Le.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.3.1";Mc.exports=H;var ve=Mc.exports;const Jd=vu(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=ve,eh=Symbol.for("react.element"),nh=Symbol.for("react.fragment"),th=Object.prototype.hasOwnProperty,rh=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ih={key:!0,ref:!0,__self:!0,__source:!0};function Hc(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)th.call(n,r)&&!ih.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:eh,type:e,key:l,ref:o,props:i,_owner:rh.current}}fl.Fragment=nh;fl.jsx=Hc;fl.jsxs=Hc;Rc.exports=fl;var A=Rc.exports,bc={exports:{}},Ge={},Wc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(F,D){var g=F.length;F.push(D);e:for(;0<g;){var $=g-1>>>1,Y=F[$];if(0<i(Y,D))F[$]=D,F[g]=Y,g=$;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var D=F[0],g=F.pop();if(g!==D){F[0]=g;e:for(var $=0,Y=F.length,v=Y>>>1;$<v;){var me=2*($+1)-1,rn=F[me],ne=me+1,dn=F[ne];if(0>i(rn,g))ne<Y&&0>i(dn,rn)?(F[$]=dn,F[ne]=g,$=ne):(F[$]=rn,F[me]=g,$=me);else if(ne<Y&&0>i(dn,g))F[$]=dn,F[ne]=g,$=ne;else break e}}return D}function i(F,D){var g=F.sortIndex-D.sortIndex;return g!==0?g:F.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],c=1,f=null,d=3,p=!1,x=!1,_=!1,L=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var D=t(s);D!==null;){if(D.callback===null)r(s);else if(D.startTime<=F)r(s),D.sortIndex=D.expirationTime,n(a,D);else break;D=t(s)}}function C(F){if(_=!1,y(F),!x)if(t(a)!==null)x=!0,pe(T);else{var D=t(s);D!==null&&ce(C,D.startTime-F)}}function T(F,D){x=!1,_&&(_=!1,h(R),R=-1),p=!0;var g=d;try{for(y(D),f=t(a);f!==null&&(!(f.expirationTime>D)||F&&!z());){var $=f.callback;if(typeof $=="function"){f.callback=null,d=f.priorityLevel;var Y=$(f.expirationTime<=D);D=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===t(a)&&r(a),y(D)}else r(a);f=t(a)}if(f!==null)var v=!0;else{var me=t(s);me!==null&&ce(C,me.startTime-D),v=!1}return v}finally{f=null,d=g,p=!1}}var k=!1,O=null,R=-1,B=5,I=-1;function z(){return!(e.unstable_now()-I<B)}function N(){if(O!==null){var F=e.unstable_now();I=F;var D=!0;try{D=O(!0,F)}finally{D?G():(k=!1,O=null)}}else k=!1}var G;if(typeof m=="function")G=function(){m(N)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,b=le.port2;le.port1.onmessage=N,G=function(){b.postMessage(null)}}else G=function(){L(N,0)};function pe(F){O=F,k||(k=!0,G())}function ce(F,D){R=L(function(){F(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,pe(T))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var g=d;d=D;try{return F()}finally{d=g}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,D){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var g=d;d=F;try{return D()}finally{d=g}},e.unstable_scheduleCallback=function(F,D,g){var $=e.unstable_now();switch(typeof g=="object"&&g!==null?(g=g.delay,g=typeof g=="number"&&0<g?$+g:$):g=$,F){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=g+Y,F={id:c++,callback:D,priorityLevel:F,startTime:g,expirationTime:Y,sortIndex:-1},g>$?(F.sortIndex=g,n(s,F),t(a)===null&&F===t(s)&&(_?(h(R),R=-1):_=!0,ce(C,g-$))):(F.sortIndex=Y,n(a,F),x||p||(x=!0,pe(T))),F},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(F){var D=d;return function(){var g=d;d=D;try{return F.apply(this,arguments)}finally{d=g}}}})($c);Wc.exports=$c;var lh=Wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh=ve,Ke=lh;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qc=new Set,Rr={};function vt(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Rr[e]=n,e=0;e<n.length;e++)Qc.add(n[e])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=Object.prototype.hasOwnProperty,uh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Na={},Da={};function ah(e){return mo.call(Da,e)?!0:mo.call(Na,e)?!1:uh.test(e)?Da[e]=!0:(Na[e]=!0,!1)}function sh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ch(e,n,t,r){if(n===null||typeof n>"u"||sh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Re(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];we[n]=new Re(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function Su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wu,Su);we[n]=new Re(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wu,Su);we[n]=new Re(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wu,Su);we[n]=new Re(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Eu(e,n,t,r){var i=we.hasOwnProperty(n)?we[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ch(n,t,i,r)&&(t=null),r||i===null?ah(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Mn=oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),Tt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),go=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Gc=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),yo=Symbol.for("react.suspense"),vo=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Xc=Symbol.for("react.offscreen"),Ba=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Rl;function gr(e){if(Rl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Rl=n&&n[1]||""}return`
`+Rl+e}var Ml=!1;function Il(e,n){if(!e||Ml)return"";Ml=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Ml=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?gr(e):""}function fh(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Tt:return"Portal";case go:return"Profiler";case Tu:return"StrictMode";case yo:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gc:return(e.displayName||"Context")+".Consumer";case Kc:return(e._context.displayName||"Context")+".Provider";case Ou:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Au:return n=e.displayName||null,n!==null?n:xo(e.type)||"Memo";case Dn:n=e._payload,e=e._init;try{return xo(e(n))}catch{}}return null}function ph(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xo(n);case 8:return n===Tu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dh(e){var n=Yc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function oi(e){e._valueTracker||(e._valueTracker=dh(e))}function qc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Yc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _o(e,n){var t=n.checked;return ae({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ja(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Jc(e,n){n=n.checked,n!=null&&Eu(e,"checked",n,!1)}function ko(e,n){Jc(e,n);var t=qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Co(e,n.type,t):n.hasOwnProperty("defaultValue")&&Co(e,n.type,qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Va(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Co(e,n,t){(n!=="number"||ji(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function wo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(yr(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:qn(t)}}function Zc(e,n){var t=qn(n.value),r=qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ha(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ef(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function So(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ef(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hh=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){hh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_r[n]=_r[e]})});function tf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_r.hasOwnProperty(e)&&_r[e]?(""+n).trim():n+"px"}function rf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=tf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var mh=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eo(e,n){if(n){if(mh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function To(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oo=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ao=null,jt=null,Vt=null;function ba(e){if(e=Zr(e)){if(typeof Ao!="function")throw Error(S(280));var n=e.stateNode;n&&(n=gl(n),Ao(e.stateNode,e.type,n))}}function lf(e){jt?Vt?Vt.push(e):Vt=[e]:jt=e}function of(){if(jt){var e=jt,n=Vt;if(Vt=jt=null,ba(e),n)for(e=0;e<n.length;e++)ba(n[e])}}function uf(e,n){return e(n)}function af(){}var zl=!1;function sf(e,n,t){if(zl)return e(n,t);zl=!0;try{return uf(e,n,t)}finally{zl=!1,(jt!==null||Vt!==null)&&(af(),of())}}function Ir(e,n){var t=e.stateNode;if(t===null)return null;var r=gl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Po=!1;if(Pn)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Po=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Po=!1}function gh(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(c){this.onError(c)}}var kr=!1,Vi=null,Ui=!1,Fo=null,yh={onError:function(e){kr=!0,Vi=e}};function vh(e,n,t,r,i,l,o,u,a){kr=!1,Vi=null,gh.apply(yh,arguments)}function xh(e,n,t,r,i,l,o,u,a){if(vh.apply(this,arguments),kr){if(kr){var s=Vi;kr=!1,Vi=null}else throw Error(S(198));Ui||(Ui=!0,Fo=s)}}function xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function cf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wa(e){if(xt(e)!==e)throw Error(S(188))}function _h(e){var n=e.alternate;if(!n){if(n=xt(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Wa(i),e;if(l===r)return Wa(i),n;l=l.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function ff(e){return e=_h(e),e!==null?pf(e):null}function pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=pf(e);if(n!==null)return n;e=e.sibling}return null}var df=Ke.unstable_scheduleCallback,$a=Ke.unstable_cancelCallback,kh=Ke.unstable_shouldYield,Ch=Ke.unstable_requestPaint,fe=Ke.unstable_now,wh=Ke.unstable_getCurrentPriorityLevel,Fu=Ke.unstable_ImmediatePriority,hf=Ke.unstable_UserBlockingPriority,Hi=Ke.unstable_NormalPriority,Sh=Ke.unstable_LowPriority,mf=Ke.unstable_IdlePriority,pl=null,xn=null;function Eh(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Ah,Th=Math.log,Oh=Math.LN2;function Ah(e){return e>>>=0,e===0?32:31-(Th(e)/Oh|0)|0}var ai=64,si=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=vr(u):(l&=o,l!==0&&(r=vr(l)))}else o=t&~i,o!==0?r=vr(o):l!==0&&(r=vr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-cn(n),i=1<<t,r|=e[t],n&=~i;return r}function Ph(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-cn(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=Ph(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function Lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gf(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Nl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function qr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-cn(n),e[n]=t}function Lh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-cn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Lu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-cn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var X=0;function yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vf,Ru,xf,_f,kf,Ro=!1,ci=[],bn=null,Wn=null,$n=null,zr=new Map,Nr=new Map,jn=[],Rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,n){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":zr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(n.pointerId)}}function ar(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Zr(n),n!==null&&Ru(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Mh(e,n,t,r,i){switch(n){case"focusin":return bn=ar(bn,e,n,t,r,i),!0;case"dragenter":return Wn=ar(Wn,e,n,t,r,i),!0;case"mouseover":return $n=ar($n,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return zr.set(l,ar(zr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Nr.set(l,ar(Nr.get(l)||null,e,n,t,r,i)),!0}return!1}function Cf(e){var n=at(e.target);if(n!==null){var t=xt(n);if(t!==null){if(n=t.tag,n===13){if(n=cf(t),n!==null){e.blockedOn=n,kf(e.priority,function(){xf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Mo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Oo=r,t.target.dispatchEvent(r),Oo=null}else return n=Zr(t),n!==null&&Ru(n),e.blockedOn=t,!1;n.shift()}return!0}function Ka(e,n,t){Ti(e)&&t.delete(n)}function Ih(){Ro=!1,bn!==null&&Ti(bn)&&(bn=null),Wn!==null&&Ti(Wn)&&(Wn=null),$n!==null&&Ti($n)&&($n=null),zr.forEach(Ka),Nr.forEach(Ka)}function sr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ro||(Ro=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Ih)))}function Dr(e){function n(i){return sr(i,e)}if(0<ci.length){sr(ci[0],e);for(var t=1;t<ci.length;t++){var r=ci[t];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&sr(bn,e),Wn!==null&&sr(Wn,e),$n!==null&&sr($n,e),zr.forEach(n),Nr.forEach(n),t=0;t<jn.length;t++)r=jn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(t=jn[0],t.blockedOn===null);)Cf(t),t.blockedOn===null&&jn.shift()}var Ut=Mn.ReactCurrentBatchConfig,Wi=!0;function zh(e,n,t,r){var i=X,l=Ut.transition;Ut.transition=null;try{X=1,Mu(e,n,t,r)}finally{X=i,Ut.transition=l}}function Nh(e,n,t,r){var i=X,l=Ut.transition;Ut.transition=null;try{X=4,Mu(e,n,t,r)}finally{X=i,Ut.transition=l}}function Mu(e,n,t,r){if(Wi){var i=Mo(e,n,t,r);if(i===null)Ql(e,n,r,$i,t),Qa(e,r);else if(Mh(i,e,n,t,r))r.stopPropagation();else if(Qa(e,r),n&4&&-1<Rh.indexOf(e)){for(;i!==null;){var l=Zr(i);if(l!==null&&vf(l),l=Mo(e,n,t,r),l===null&&Ql(e,n,r,$i,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ql(e,n,r,null,t)}}var $i=null;function Mo(e,n,t,r){if($i=null,e=Pu(r),e=at(e),e!==null)if(n=xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=cf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $i=e,null}function wf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wh()){case Fu:return 1;case hf:return 4;case Hi:case Sh:return 16;case mf:return 536870912;default:return 16}default:return 16}}var Un=null,Iu=null,Oi=null;function Sf(){if(Oi)return Oi;var e,n=Iu,t=n.length,r,i="value"in Un?Un.value:Un.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Oi=i.slice(e,1<r?1-r:void 0)}function Ai(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function Ga(){return!1}function Xe(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?fi:Ga,this.isPropagationStopped=Ga,this}return ae(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Xe(er),Jr=ae({},er,{view:0,detail:0}),Dh=Xe(Jr),Dl,Bl,cr,dl=ae({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Dl=e.screenX-cr.screenX,Bl=e.screenY-cr.screenY):Bl=Dl=0,cr=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),Xa=Xe(dl),Bh=ae({},dl,{dataTransfer:0}),jh=Xe(Bh),Vh=ae({},Jr,{relatedTarget:0}),jl=Xe(Vh),Uh=ae({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Hh=Xe(Uh),bh=ae({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=Xe(bh),$h=ae({},er,{data:0}),Ya=Xe($h),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gh[e])?!!n[e]:!1}function Nu(){return Xh}var Yh=ae({},Jr,{key:function(e){if(e.key){var n=Qh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qh=Xe(Yh),Jh=ae({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=Xe(Jh),Zh=ae({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),em=Xe(Zh),nm=ae({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=Xe(nm),rm=ae({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),im=Xe(rm),lm=[9,13,27,32],Du=Pn&&"CompositionEvent"in window,Cr=null;Pn&&"documentMode"in document&&(Cr=document.documentMode);var om=Pn&&"TextEvent"in window&&!Cr,Ef=Pn&&(!Du||Cr&&8<Cr&&11>=Cr),Ja=" ",Za=!1;function Tf(e,n){switch(e){case"keyup":return lm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function um(e,n){switch(e){case"compositionend":return Of(n);case"keypress":return n.which!==32?null:(Za=!0,Ja);case"textInput":return e=n.data,e===Ja&&Za?null:e;default:return null}}function am(e,n){if(At)return e==="compositionend"||!Du&&Tf(e,n)?(e=Sf(),Oi=Iu=Un=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ef&&n.locale!=="ko"?null:n.data;default:return null}}var sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sm[e.type]:n==="textarea"}function Af(e,n,t,r){lf(r),n=Qi(n,"onChange"),0<n.length&&(t=new zu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var wr=null,Br=null;function cm(e){jf(e,0)}function hl(e){var n=Lt(e);if(qc(n))return e}function fm(e,n){if(e==="change")return n}var Pf=!1;if(Pn){var Vl;if(Pn){var Ul="oninput"in document;if(!Ul){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),Ul=typeof ns.oninput=="function"}Vl=Ul}else Vl=!1;Pf=Vl&&(!document.documentMode||9<document.documentMode)}function ts(){wr&&(wr.detachEvent("onpropertychange",Ff),Br=wr=null)}function Ff(e){if(e.propertyName==="value"&&hl(Br)){var n=[];Af(n,Br,e,Pu(e)),sf(cm,n)}}function pm(e,n,t){e==="focusin"?(ts(),wr=n,Br=t,wr.attachEvent("onpropertychange",Ff)):e==="focusout"&&ts()}function dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Br)}function hm(e,n){if(e==="click")return hl(n)}function mm(e,n){if(e==="input"||e==="change")return hl(n)}function gm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:gm;function jr(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!mo.call(n,i)||!pn(e[i],n[i]))return!1}return!0}function rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,n){var t=rs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rs(t)}}function Lf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rf(){for(var e=window,n=ji();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ji(e.document)}return n}function Bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ym(e){var n=Rf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Lf(t.ownerDocument.documentElement,t)){if(r!==null&&Bu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=is(t,l);var o=is(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=Pn&&"documentMode"in document&&11>=document.documentMode,Pt=null,Io=null,Sr=null,zo=!1;function ls(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zo||Pt==null||Pt!==ji(r)||(r=Pt,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&jr(Sr,r)||(Sr=r,r=Qi(Io,"onSelect"),0<r.length&&(n=new zu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Pt)))}function pi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ft={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},Hl={},Mf={};Pn&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ml(e){if(Hl[e])return Hl[e];if(!Ft[e])return e;var n=Ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Mf)return Hl[e]=n[t];return e}var If=ml("animationend"),zf=ml("animationiteration"),Nf=ml("animationstart"),Df=ml("transitionend"),Bf=new Map,os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,n){Bf.set(e,n),vt(n,[e])}for(var bl=0;bl<os.length;bl++){var Wl=os[bl],xm=Wl.toLowerCase(),_m=Wl[0].toUpperCase()+Wl.slice(1);Zn(xm,"on"+_m)}Zn(If,"onAnimationEnd");Zn(zf,"onAnimationIteration");Zn(Nf,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(Df,"onTransitionEnd");Qt("onMouseEnter",["mouseout","mouseover"]);Qt("onMouseLeave",["mouseout","mouseover"]);Qt("onPointerEnter",["pointerout","pointerover"]);Qt("onPointerLeave",["pointerout","pointerover"]);vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),km=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function us(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,xh(r,n,void 0,e),e.currentTarget=null}function jf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;us(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;us(i,u,s),l=a}}}if(Ui)throw e=Fo,Ui=!1,Fo=null,e}function te(e,n){var t=n[Vo];t===void 0&&(t=n[Vo]=new Set);var r=e+"__bubble";t.has(r)||(Vf(n,e,2,!1),t.add(r))}function $l(e,n,t){var r=0;n&&(r|=4),Vf(t,e,r,n)}var di="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[di]){e[di]=!0,Qc.forEach(function(t){t!=="selectionchange"&&(km.has(t)||$l(t,!1,e),$l(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[di]||(n[di]=!0,$l("selectionchange",!1,n))}}function Vf(e,n,t,r){switch(wf(n)){case 1:var i=zh;break;case 4:i=Nh;break;default:i=Mu}t=i.bind(null,n,t,e),i=void 0,!Po||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ql(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=at(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}sf(function(){var s=l,c=Pu(t),f=[];e:{var d=Bf.get(e);if(d!==void 0){var p=zu,x=e;switch(e){case"keypress":if(Ai(t)===0)break e;case"keydown":case"keyup":p=qh;break;case"focusin":x="focus",p=jl;break;case"focusout":x="blur",p=jl;break;case"beforeblur":case"afterblur":p=jl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=em;break;case If:case zf:case Nf:p=Hh;break;case Df:p=tm;break;case"scroll":p=Dh;break;case"wheel":p=im;break;case"copy":case"cut":case"paste":p=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qa}var _=(n&4)!==0,L=!_&&e==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var m=s,y;m!==null;){y=m;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,h!==null&&(C=Ir(m,h),C!=null&&_.push(Ur(m,C,y)))),L)break;m=m.return}0<_.length&&(d=new p(d,x,null,t,c),f.push({event:d,listeners:_}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&t!==Oo&&(x=t.relatedTarget||t.fromElement)&&(at(x)||x[Fn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=s,x=x?at(x):null,x!==null&&(L=xt(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=s),p!==x)){if(_=Xa,C="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(_=qa,C="onPointerLeave",h="onPointerEnter",m="pointer"),L=p==null?d:Lt(p),y=x==null?d:Lt(x),d=new _(C,m+"leave",p,t,c),d.target=L,d.relatedTarget=y,C=null,at(c)===s&&(_=new _(h,m+"enter",x,t,c),_.target=y,_.relatedTarget=L,C=_),L=C,p&&x)n:{for(_=p,h=x,m=0,y=_;y;y=St(y))m++;for(y=0,C=h;C;C=St(C))y++;for(;0<m-y;)_=St(_),m--;for(;0<y-m;)h=St(h),y--;for(;m--;){if(_===h||h!==null&&_===h.alternate)break n;_=St(_),h=St(h)}_=null}else _=null;p!==null&&as(f,d,p,_,!1),x!==null&&L!==null&&as(f,L,x,_,!0)}}e:{if(d=s?Lt(s):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=fm;else if(es(d))if(Pf)T=mm;else{T=dm;var k=pm}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=hm);if(T&&(T=T(e,s))){Af(f,T,t,c);break e}k&&k(e,d,s),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Co(d,"number",d.value)}switch(k=s?Lt(s):window,e){case"focusin":(es(k)||k.contentEditable==="true")&&(Pt=k,Io=s,Sr=null);break;case"focusout":Sr=Io=Pt=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,ls(f,t,c);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":ls(f,t,c)}var O;if(Du)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else At?Tf(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Ef&&t.locale!=="ko"&&(At||R!=="onCompositionStart"?R==="onCompositionEnd"&&At&&(O=Sf()):(Un=c,Iu="value"in Un?Un.value:Un.textContent,At=!0)),k=Qi(s,R),0<k.length&&(R=new Ya(R,e,null,t,c),f.push({event:R,listeners:k}),O?R.data=O:(O=Of(t),O!==null&&(R.data=O)))),(O=om?um(e,t):am(e,t))&&(s=Qi(s,"onBeforeInput"),0<s.length&&(c=new Ya("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:s}),c.data=O))}jf(f,n)})}function Ur(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ir(e,t),l!=null&&r.unshift(Ur(e,l,i)),l=Ir(e,n),l!=null&&r.push(Ur(e,l,i))),e=e.return}return r}function St(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Ir(t,l),a!=null&&o.unshift(Ur(t,a,u))):i||(a=Ir(t,l),a!=null&&o.push(Ur(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Cm=/\r\n?/g,wm=/\u0000|\uFFFD/g;function ss(e){return(typeof e=="string"?e:""+e).replace(Cm,`
`).replace(wm,"")}function hi(e,n,t){if(n=ss(n),ss(e)!==n&&t)throw Error(S(425))}function Ki(){}var No=null,Do=null;function Bo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,cs=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof cs<"u"?function(e){return cs.resolve(null).then(e).catch(Tm)}:jo;function Tm(e){setTimeout(function(){throw e})}function Kl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Dr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Dr(n)}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),yn="__reactFiber$"+nr,Hr="__reactProps$"+nr,Fn="__reactContainer$"+nr,Vo="__reactEvents$"+nr,Om="__reactListeners$"+nr,Am="__reactHandles$"+nr;function at(e){var n=e[yn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Fn]||t[yn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fs(e);e!==null;){if(t=e[yn])return t;e=fs(e)}return n}e=t,t=e.parentNode}return null}function Zr(e){return e=e[yn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function gl(e){return e[Hr]||null}var Uo=[],Rt=-1;function et(e){return{current:e}}function re(e){0>Rt||(e.current=Uo[Rt],Uo[Rt]=null,Rt--)}function Z(e,n){Rt++,Uo[Rt]=e.current,e.current=n}var Jn={},Oe=et(Jn),Ne=et(!1),dt=Jn;function Kt(e,n){var t=e.type.contextTypes;if(!t)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function Gi(){re(Ne),re(Oe)}function ps(e,n,t){if(Oe.current!==Jn)throw Error(S(168));Z(Oe,n),Z(Ne,t)}function Uf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,ph(e)||"Unknown",i));return ae({},t,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,dt=Oe.current,Z(Oe,e),Z(Ne,Ne.current),!0}function ds(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Uf(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,re(Ne),re(Oe),Z(Oe,e)):re(Ne),Z(Ne,t)}var En=null,yl=!1,Gl=!1;function Hf(e){En===null?En=[e]:En.push(e)}function Pm(e){yl=!0,Hf(e)}function nt(){if(!Gl&&En!==null){Gl=!0;var e=0,n=X;try{var t=En;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}En=null,yl=!1}catch(i){throw En!==null&&(En=En.slice(e+1)),df(Fu,nt),i}finally{X=n,Gl=!1}}return null}var Mt=[],It=0,Yi=null,qi=0,Ye=[],qe=0,ht=null,Tn=1,On="";function lt(e,n){Mt[It++]=qi,Mt[It++]=Yi,Yi=e,qi=n}function bf(e,n,t){Ye[qe++]=Tn,Ye[qe++]=On,Ye[qe++]=ht,ht=e;var r=Tn;e=On;var i=32-cn(r)-1;r&=~(1<<i),t+=1;var l=32-cn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-cn(n)+i|t<<i|r,On=l+e}else Tn=1<<l|t<<i|r,On=e}function ju(e){e.return!==null&&(lt(e,1),bf(e,1,0))}function Vu(e){for(;e===Yi;)Yi=Mt[--It],Mt[It]=null,qi=Mt[--It],Mt[It]=null;for(;e===ht;)ht=Ye[--qe],Ye[qe]=null,On=Ye[--qe],Ye[qe]=null,Tn=Ye[--qe],Ye[qe]=null}var Qe=null,We=null,ie=!1,sn=null;function Wf(e,n){var t=Ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function hs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,We=Qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,We=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ht!==null?{id:Tn,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Qe=e,We=null,!0):!1;default:return!1}}function Ho(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bo(e){if(ie){var n=We;if(n){var t=n;if(!hs(e,n)){if(Ho(e))throw Error(S(418));n=Qn(t.nextSibling);var r=Qe;n&&hs(e,n)?Wf(r,t):(e.flags=e.flags&-4097|2,ie=!1,Qe=e)}}else{if(Ho(e))throw Error(S(418));e.flags=e.flags&-4097|2,ie=!1,Qe=e}}}function ms(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function mi(e){if(e!==Qe)return!1;if(!ie)return ms(e),ie=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Bo(e.type,e.memoizedProps)),n&&(n=We)){if(Ho(e))throw $f(),Error(S(418));for(;n;)Wf(e,n),n=Qn(n.nextSibling)}if(ms(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){We=Qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}We=null}}else We=Qe?Qn(e.stateNode.nextSibling):null;return!0}function $f(){for(var e=We;e;)e=Qn(e.nextSibling)}function Gt(){We=Qe=null,ie=!1}function Uu(e){sn===null?sn=[e]:sn.push(e)}var Fm=Mn.ReactCurrentBatchConfig;function fr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function gi(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gs(e){var n=e._init;return n(e._payload)}function Qf(e){function n(h,m){if(e){var y=h.deletions;y===null?(h.deletions=[m],h.flags|=16):y.push(m)}}function t(h,m){if(!e)return null;for(;m!==null;)n(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Yn(h,m),h.index=0,h.sibling=null,h}function l(h,m,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<m?(h.flags|=2,m):y):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,m,y,C){return m===null||m.tag!==6?(m=no(y,h.mode,C),m.return=h,m):(m=i(m,y),m.return=h,m)}function a(h,m,y,C){var T=y.type;return T===Ot?c(h,m,y.props.children,C,y.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&gs(T)===m.type)?(C=i(m,y.props),C.ref=fr(h,m,y),C.return=h,C):(C=zi(y.type,y.key,y.props,null,h.mode,C),C.ref=fr(h,m,y),C.return=h,C)}function s(h,m,y,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=to(y,h.mode,C),m.return=h,m):(m=i(m,y.children||[]),m.return=h,m)}function c(h,m,y,C,T){return m===null||m.tag!==7?(m=pt(y,h.mode,C,T),m.return=h,m):(m=i(m,y),m.return=h,m)}function f(h,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=no(""+m,h.mode,y),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case li:return y=zi(m.type,m.key,m.props,null,h.mode,y),y.ref=fr(h,null,m),y.return=h,y;case Tt:return m=to(m,h.mode,y),m.return=h,m;case Dn:var C=m._init;return f(h,C(m._payload),y)}if(yr(m)||or(m))return m=pt(m,h.mode,y,null),m.return=h,m;gi(h,m)}return null}function d(h,m,y,C){var T=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:u(h,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case li:return y.key===T?a(h,m,y,C):null;case Tt:return y.key===T?s(h,m,y,C):null;case Dn:return T=y._init,d(h,m,T(y._payload),C)}if(yr(y)||or(y))return T!==null?null:c(h,m,y,C,null);gi(h,y)}return null}function p(h,m,y,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(y)||null,u(m,h,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case li:return h=h.get(C.key===null?y:C.key)||null,a(m,h,C,T);case Tt:return h=h.get(C.key===null?y:C.key)||null,s(m,h,C,T);case Dn:var k=C._init;return p(h,m,y,k(C._payload),T)}if(yr(C)||or(C))return h=h.get(y)||null,c(m,h,C,T,null);gi(m,C)}return null}function x(h,m,y,C){for(var T=null,k=null,O=m,R=m=0,B=null;O!==null&&R<y.length;R++){O.index>R?(B=O,O=null):B=O.sibling;var I=d(h,O,y[R],C);if(I===null){O===null&&(O=B);break}e&&O&&I.alternate===null&&n(h,O),m=l(I,m,R),k===null?T=I:k.sibling=I,k=I,O=B}if(R===y.length)return t(h,O),ie&&lt(h,R),T;if(O===null){for(;R<y.length;R++)O=f(h,y[R],C),O!==null&&(m=l(O,m,R),k===null?T=O:k.sibling=O,k=O);return ie&&lt(h,R),T}for(O=r(h,O);R<y.length;R++)B=p(O,h,R,y[R],C),B!==null&&(e&&B.alternate!==null&&O.delete(B.key===null?R:B.key),m=l(B,m,R),k===null?T=B:k.sibling=B,k=B);return e&&O.forEach(function(z){return n(h,z)}),ie&&lt(h,R),T}function _(h,m,y,C){var T=or(y);if(typeof T!="function")throw Error(S(150));if(y=T.call(y),y==null)throw Error(S(151));for(var k=T=null,O=m,R=m=0,B=null,I=y.next();O!==null&&!I.done;R++,I=y.next()){O.index>R?(B=O,O=null):B=O.sibling;var z=d(h,O,I.value,C);if(z===null){O===null&&(O=B);break}e&&O&&z.alternate===null&&n(h,O),m=l(z,m,R),k===null?T=z:k.sibling=z,k=z,O=B}if(I.done)return t(h,O),ie&&lt(h,R),T;if(O===null){for(;!I.done;R++,I=y.next())I=f(h,I.value,C),I!==null&&(m=l(I,m,R),k===null?T=I:k.sibling=I,k=I);return ie&&lt(h,R),T}for(O=r(h,O);!I.done;R++,I=y.next())I=p(O,h,R,I.value,C),I!==null&&(e&&I.alternate!==null&&O.delete(I.key===null?R:I.key),m=l(I,m,R),k===null?T=I:k.sibling=I,k=I);return e&&O.forEach(function(N){return n(h,N)}),ie&&lt(h,R),T}function L(h,m,y,C){if(typeof y=="object"&&y!==null&&y.type===Ot&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case li:e:{for(var T=y.key,k=m;k!==null;){if(k.key===T){if(T=y.type,T===Ot){if(k.tag===7){t(h,k.sibling),m=i(k,y.props.children),m.return=h,h=m;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&gs(T)===k.type){t(h,k.sibling),m=i(k,y.props),m.ref=fr(h,k,y),m.return=h,h=m;break e}t(h,k);break}else n(h,k);k=k.sibling}y.type===Ot?(m=pt(y.props.children,h.mode,C,y.key),m.return=h,h=m):(C=zi(y.type,y.key,y.props,null,h.mode,C),C.ref=fr(h,m,y),C.return=h,h=C)}return o(h);case Tt:e:{for(k=y.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){t(h,m.sibling),m=i(m,y.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else n(h,m);m=m.sibling}m=to(y,h.mode,C),m.return=h,h=m}return o(h);case Dn:return k=y._init,L(h,m,k(y._payload),C)}if(yr(y))return x(h,m,y,C);if(or(y))return _(h,m,y,C);gi(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(t(h,m.sibling),m=i(m,y),m.return=h,h=m):(t(h,m),m=no(y,h.mode,C),m.return=h,h=m),o(h)):t(h,m)}return L}var Xt=Qf(!0),Kf=Qf(!1),Ji=et(null),Zi=null,zt=null,Hu=null;function bu(){Hu=zt=Zi=null}function Wu(e){var n=Ji.current;re(Ji),e._currentValue=n}function Wo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ht(e,n){Zi=e,Hu=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function nn(e){var n=e._currentValue;if(Hu!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(Zi===null)throw Error(S(308));zt=e,Zi.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var st=null;function $u(e){st===null?st=[e]:st.push(e)}function Gf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,$u(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ln(e,r)}function Ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Bn=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ln(e,t)}return i=r.interleaved,i===null?(n.next=n,$u(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ln(e,t)}function Pi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Lu(e,t)}}function ys(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function el(e,n,t,r){var i=e.updateQueue;Bn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var c=e.alternate;c!==null&&(c=c.updateQueue,u=c.lastBaseUpdate,u!==o&&(u===null?c.firstBaseUpdate=s:u.next=s,c.lastBaseUpdate=a))}if(l!==null){var f=i.baseState;o=0,c=s=a=null,u=l;do{var d=u.lane,p=u.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,_=u;switch(d=n,p=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(p,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,d=typeof x=="function"?x.call(p,f,d):x,d==null)break e;f=ae({},f,d);break e;case 2:Bn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else p={eventTime:p,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},c===null?(s=c=p,a=f):c=c.next=p,o|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=c,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);gt|=o,e.lanes=o,e.memoizedState=f}}function vs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ei={},_n=et(ei),br=et(ei),Wr=et(ei);function ct(e){if(e===ei)throw Error(S(174));return e}function Ku(e,n){switch(Z(Wr,n),Z(br,e),Z(_n,ei),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:So(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=So(n,e)}re(_n),Z(_n,n)}function Yt(){re(_n),re(br),re(Wr)}function Yf(e){ct(Wr.current);var n=ct(_n.current),t=So(n,e.type);n!==t&&(Z(br,e),Z(_n,t))}function Gu(e){br.current===e&&(re(_n),re(br))}var oe=et(0);function nl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xl=[];function Xu(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Fi=Mn.ReactCurrentDispatcher,Yl=Mn.ReactCurrentBatchConfig,mt=0,ue=null,ge=null,xe=null,tl=!1,Er=!1,$r=0,Lm=0;function Se(){throw Error(S(321))}function Yu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function qu(e,n,t,r,i,l){if(mt=l,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fi.current=e===null||e.memoizedState===null?zm:Nm,e=t(r,i),Er){l=0;do{if(Er=!1,$r=0,25<=l)throw Error(S(301));l+=1,xe=ge=null,n.updateQueue=null,Fi.current=Dm,e=t(r,i)}while(Er)}if(Fi.current=rl,n=ge!==null&&ge.next!==null,mt=0,xe=ge=ue=null,tl=!1,n)throw Error(S(300));return e}function Ju(){var e=$r!==0;return $r=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ue.memoizedState=xe=e:xe=xe.next=e,xe}function tn(){if(ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=xe===null?ue.memoizedState:xe.next;if(n!==null)xe=n,ge=e;else{if(e===null)throw Error(S(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ue.memoizedState=xe=e:xe=xe.next=e}return xe}function Qr(e,n){return typeof n=="function"?n(e):n}function ql(e){var n=tn(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=ge,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var c=s.lane;if((mt&c)===c)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var f={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=f,o=r):a=a.next=f,ue.lanes|=c,gt|=c}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,pn(r,n.memoizedState)||(ze=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,ue.lanes|=l,gt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Jl(e){var n=tn(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);pn(l,n.memoizedState)||(ze=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function qf(){}function Jf(e,n){var t=ue,r=tn(),i=n(),l=!pn(r.memoizedState,i);if(l&&(r.memoizedState=i,ze=!0),r=r.queue,Zu(np.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,Kr(9,ep.bind(null,t,r,i,n),void 0,null),_e===null)throw Error(S(349));mt&30||Zf(t,n,i)}return i}function Zf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ep(e,n,t,r){n.value=t,n.getSnapshot=r,tp(n)&&rp(e)}function np(e,n,t){return t(function(){tp(n)&&rp(e)})}function tp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function rp(e){var n=Ln(e,1);n!==null&&fn(n,e,1,-1)}function xs(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},n.queue=e,e=e.dispatch=Im.bind(null,ue,e),[n.memoizedState,e]}function Kr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ip(){return tn().memoizedState}function Li(e,n,t,r){var i=mn();ue.flags|=e,i.memoizedState=Kr(1|n,t,void 0,r===void 0?null:r)}function vl(e,n,t,r){var i=tn();r=r===void 0?null:r;var l=void 0;if(ge!==null){var o=ge.memoizedState;if(l=o.destroy,r!==null&&Yu(r,o.deps)){i.memoizedState=Kr(n,t,l,r);return}}ue.flags|=e,i.memoizedState=Kr(1|n,t,l,r)}function _s(e,n){return Li(8390656,8,e,n)}function Zu(e,n){return vl(2048,8,e,n)}function lp(e,n){return vl(4,2,e,n)}function op(e,n){return vl(4,4,e,n)}function up(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ap(e,n,t){return t=t!=null?t.concat([e]):null,vl(4,4,up.bind(null,n,e),t)}function ea(){}function sp(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function cp(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function fp(e,n,t){return mt&21?(pn(t,n)||(t=gf(),ue.lanes|=t,gt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t)}function Rm(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),n()}finally{X=t,Yl.transition=r}}function pp(){return tn().memoizedState}function Mm(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},dp(e))hp(n,t);else if(t=Gf(e,n,t,r),t!==null){var i=Fe();fn(t,e,r,i),mp(t,n,r)}}function Im(e,n,t){var r=Xn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(dp(e))hp(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,pn(u,o)){var a=n.interleaved;a===null?(i.next=i,$u(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Gf(e,n,i,r),t!==null&&(i=Fe(),fn(t,e,r,i),mp(t,n,r))}}function dp(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function hp(e,n){Er=tl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function mp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Lu(e,t)}}var rl={readContext:nn,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},zm={readContext:nn,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:_s,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Li(4194308,4,up.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Li(4194308,4,e,n)},useInsertionEffect:function(e,n){return Li(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Mm.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:xs,useDebugValue:ea,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=xs(!1),n=e[0];return e=Rm.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ue,i=mn();if(ie){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),_e===null)throw Error(S(349));mt&30||Zf(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,_s(np.bind(null,r,l,e),[e]),r.flags|=2048,Kr(9,ep.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=mn(),n=_e.identifierPrefix;if(ie){var t=On,r=Tn;t=(r&~(1<<32-cn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=$r++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Lm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Nm={readContext:nn,useCallback:sp,useContext:nn,useEffect:Zu,useImperativeHandle:ap,useInsertionEffect:lp,useLayoutEffect:op,useMemo:cp,useReducer:ql,useRef:ip,useState:function(){return ql(Qr)},useDebugValue:ea,useDeferredValue:function(e){var n=tn();return fp(n,ge.memoizedState,e)},useTransition:function(){var e=ql(Qr)[0],n=tn().memoizedState;return[e,n]},useMutableSource:qf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1},Dm={readContext:nn,useCallback:sp,useContext:nn,useEffect:Zu,useImperativeHandle:ap,useInsertionEffect:lp,useLayoutEffect:op,useMemo:cp,useReducer:Jl,useRef:ip,useState:function(){return Jl(Qr)},useDebugValue:ea,useDeferredValue:function(e){var n=tn();return ge===null?n.memoizedState=e:fp(n,ge.memoizedState,e)},useTransition:function(){var e=Jl(Qr)[0],n=tn().memoizedState;return[e,n]},useMutableSource:qf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1};function un(e,n){if(e&&e.defaultProps){n=ae({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function $o(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ae({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xl={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Xn(e),l=An(r,i);l.payload=n,t!=null&&(l.callback=t),n=Kn(e,l,i),n!==null&&(fn(n,e,i,r),Pi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Xn(e),l=An(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Kn(e,l,i),n!==null&&(fn(n,e,i,r),Pi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),r=Xn(e),i=An(t,r);i.tag=2,n!=null&&(i.callback=n),n=Kn(e,i,r),n!==null&&(fn(n,e,r,t),Pi(n,e,r))}};function ks(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!jr(t,r)||!jr(i,l):!0}function gp(e,n,t){var r=!1,i=Jn,l=n.contextType;return typeof l=="object"&&l!==null?l=nn(l):(i=De(n)?dt:Oe.current,r=n.contextTypes,l=(r=r!=null)?Kt(e,i):Jn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Cs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xl.enqueueReplaceState(n,n.state,null)}function Qo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Qu(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=nn(l):(l=De(n)?dt:Oe.current,i.context=Kt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&($o(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&xl.enqueueReplaceState(i,i.state,null),el(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qt(e,n){try{var t="",r=n;do t+=fh(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Zl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ko(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Bm=typeof WeakMap=="function"?WeakMap:Map;function yp(e,n,t){t=An(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ll||(ll=!0,ru=r),Ko(e,n)},t}function vp(e,n,t){t=An(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ko(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ko(e,n),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function ws(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Bm;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Jm.bind(null,e,n,t),n.then(e,e))}function Ss(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Es(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=An(-1,1),n.tag=2,Kn(t,n,1))),t.lanes|=1),e)}var jm=Mn.ReactCurrentOwner,ze=!1;function Pe(e,n,t,r){n.child=e===null?Kf(n,null,t,r):Xt(n,e.child,t,r)}function Ts(e,n,t,r,i){t=t.render;var l=n.ref;return Ht(n,i),r=qu(e,n,t,r,l,i),t=Ju(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Rn(e,n,i)):(ie&&t&&ju(n),n.flags|=1,Pe(e,n,r,i),n.child)}function Os(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!aa(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,xp(e,n,l,r,i)):(e=zi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:jr,t(o,r)&&e.ref===n.ref)return Rn(e,n,i)}return n.flags|=1,e=Yn(l,r),e.ref=n.ref,e.return=n,n.child=e}function xp(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(jr(l,r)&&e.ref===n.ref)if(ze=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,Rn(e,n,i)}return Go(e,n,t,r,i)}function _p(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Dt,be),be|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Z(Dt,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,Z(Dt,be),be|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,Z(Dt,be),be|=r;return Pe(e,n,i,t),n.child}function kp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Go(e,n,t,r,i){var l=De(t)?dt:Oe.current;return l=Kt(n,l),Ht(n,i),t=qu(e,n,t,r,l,i),r=Ju(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Rn(e,n,i)):(ie&&r&&ju(n),n.flags|=1,Pe(e,n,t,i),n.child)}function As(e,n,t,r,i){if(De(t)){var l=!0;Xi(n)}else l=!1;if(Ht(n,i),n.stateNode===null)Ri(e,n),gp(n,t,r),Qo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=nn(s):(s=De(t)?dt:Oe.current,s=Kt(n,s));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&Cs(n,o,r,s),Bn=!1;var d=n.memoizedState;o.state=d,el(n,r,o,i),a=n.memoizedState,u!==r||d!==a||Ne.current||Bn?(typeof c=="function"&&($o(n,t,c,r),a=n.memoizedState),(u=Bn||ks(n,t,u,r,d,a,s))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Xf(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:un(n.type,u),o.props=s,f=n.pendingProps,d=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=nn(a):(a=De(t)?dt:Oe.current,a=Kt(n,a));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==f||d!==a)&&Cs(n,o,r,a),Bn=!1,d=n.memoizedState,o.state=d,el(n,r,o,i);var x=n.memoizedState;u!==f||d!==x||Ne.current||Bn?(typeof p=="function"&&($o(n,t,p,r),x=n.memoizedState),(s=Bn||ks(n,t,s,r,d,x,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),o.props=r,o.state=x,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return Xo(e,n,t,r,l,i)}function Xo(e,n,t,r,i,l){kp(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ds(n,t,!1),Rn(e,n,l);r=n.stateNode,jm.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Xt(n,e.child,null,l),n.child=Xt(n,null,u,l)):Pe(e,n,u,l),n.memoizedState=r.state,i&&ds(n,t,!0),n.child}function Cp(e){var n=e.stateNode;n.pendingContext?ps(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ps(e,n.context,!1),Ku(e,n.containerInfo)}function Ps(e,n,t,r,i){return Gt(),Uu(i),n.flags|=256,Pe(e,n,t,r),n.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function wp(e,n,t){var r=n.pendingProps,i=oe.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(oe,i&1),e===null)return bo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Cl(o,r,0,null),e=pt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=qo(t),n.memoizedState=Yo,e):na(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Vm(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Yn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Yn(u,l):(l=pt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?qo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Yo,r}return l=e.child,e=l.sibling,r=Yn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function na(e,n){return n=Cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function yi(e,n,t,r){return r!==null&&Uu(r),Xt(n,e.child,null,t),e=na(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vm(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Zl(Error(S(422))),yi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Cl({mode:"visible",children:r.children},i,0,null),l=pt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Xt(n,e.child,null,o),n.child.memoizedState=qo(o),n.memoizedState=Yo,l);if(!(n.mode&1))return yi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(S(419)),r=Zl(l,r,void 0),yi(e,n,o,r)}if(u=(o&e.childLanes)!==0,ze||u){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ln(e,i),fn(r,e,i,-1))}return ua(),r=Zl(Error(S(421))),yi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Zm.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,We=Qn(i.nextSibling),Qe=n,ie=!0,sn=null,e!==null&&(Ye[qe++]=Tn,Ye[qe++]=On,Ye[qe++]=ht,Tn=e.id,On=e.overflow,ht=n),n=na(n,r.children),n.flags|=4096,n)}function Fs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Wo(e.return,n,t)}function eo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Sp(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(Pe(e,n,r.children,t),r=oe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fs(e,t,n);else if(e.tag===19)Fs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(oe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&nl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),eo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&nl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}eo(n,!0,t,null,l);break;case"together":eo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ri(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),gt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=Yn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Yn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Um(e,n,t){switch(n.tag){case 3:Cp(n),Gt();break;case 5:Yf(n);break;case 1:De(n.type)&&Xi(n);break;case 4:Ku(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;Z(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),n.flags|=128,null):t&n.child.childLanes?wp(e,n,t):(Z(oe,oe.current&1),e=Rn(e,n,t),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Sp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return n.lanes=0,_p(e,n,t)}return Rn(e,n,t)}var Ep,Jo,Tp,Op;Ep=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Jo=function(){};Tp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,ct(_n.current);var l=null;switch(t){case"input":i=_o(e,i),r=_o(e,r),l=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),l=[];break;case"textarea":i=wo(e,i),r=wo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ki)}Eo(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Rr.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&te("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};Op=function(e,n,t,r){t!==r&&(n.flags|=4)};function pr(e,n){if(!ie)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Hm(e,n,t){var r=n.pendingProps;switch(Vu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return De(n.type)&&Gi(),Ee(n),null;case 3:return r=n.stateNode,Yt(),re(Ne),re(Oe),Xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,sn!==null&&(ou(sn),sn=null))),Jo(e,n),Ee(n),null;case 5:Gu(n);var i=ct(Wr.current);if(t=n.type,e!==null&&n.stateNode!=null)Tp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return Ee(n),null}if(e=ct(_n.current),mi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[yn]=n,r[Hr]=l,e=(n.mode&1)!==0,t){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<xr.length;i++)te(xr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":ja(r,l),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},te("invalid",r);break;case"textarea":Ua(r,l),te("invalid",r)}Eo(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&hi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&hi(r.textContent,u,e),i=["children",""+u]):Rr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&te("scroll",r)}switch(t){case"input":oi(r),Va(r,l,!0);break;case"textarea":oi(r),Ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ki)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ef(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[yn]=n,e[Hr]=r,Ep(e,n,!1,!1),n.stateNode=e;e:{switch(o=To(t,r),t){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<xr.length;i++)te(xr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":ja(e,r),i=_o(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),te("invalid",e);break;case"textarea":Ua(e,r),i=wo(e,r),te("invalid",e);break;default:i=r}Eo(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?rf(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nf(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Mr(e,a):typeof a=="number"&&Mr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Rr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&te("scroll",e):a!=null&&Eu(e,l,a,o))}switch(t){case"input":oi(e),Va(e,r,!1);break;case"textarea":oi(e),Ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Bt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ki)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)Op(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=ct(Wr.current),ct(_n.current),mi(n)){if(r=n.stateNode,t=n.memoizedProps,r[yn]=n,(l=r.nodeValue!==t)&&(e=Qe,e!==null))switch(e.tag){case 3:hi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[yn]=n,n.stateNode=r}return Ee(n),null;case 13:if(re(oe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&We!==null&&n.mode&1&&!(n.flags&128))$f(),Gt(),n.flags|=98560,l=!1;else if(l=mi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[yn]=n}else Gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ee(n),l=!1}else sn!==null&&(ou(sn),sn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?ye===0&&(ye=3):ua())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return Yt(),Jo(e,n),e===null&&Vr(n.stateNode.containerInfo),Ee(n),null;case 10:return Wu(n.type._context),Ee(n),null;case 17:return De(n.type)&&Gi(),Ee(n),null;case 19:if(re(oe),l=n.memoizedState,l===null)return Ee(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)pr(l,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=nl(e),o!==null){for(n.flags|=128,pr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Z(oe,oe.current&1|2),n.child}e=e.sibling}l.tail!==null&&fe()>Jt&&(n.flags|=128,r=!0,pr(l,!1),n.lanes=4194304)}else{if(!r)if(e=nl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ie)return Ee(n),null}else 2*fe()-l.renderingStartTime>Jt&&t!==1073741824&&(n.flags|=128,r=!0,pr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=fe(),n.sibling=null,t=oe.current,Z(oe,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return oa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?be&1073741824&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function bm(e,n){switch(Vu(n),n.tag){case 1:return De(n.type)&&Gi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yt(),re(Ne),re(Oe),Xu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Gu(n),null;case 13:if(re(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));Gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(oe),null;case 4:return Yt(),null;case 10:return Wu(n.type._context),null;case 22:case 23:return oa(),null;case 24:return null;default:return null}}var vi=!1,Te=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){se(e,n,r)}else t.current=null}function Zo(e,n,t){try{t()}catch(r){se(e,n,r)}}var Ls=!1;function $m(e,n){if(No=Wi,e=Rf(),Bu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,c=0,f=e,d=null;n:for(;;){for(var p;f!==t||i!==0&&f.nodeType!==3||(u=o+i),f!==l||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break n;if(d===t&&++s===i&&(u=o),d===l&&++c===r&&(a=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Do={focusedElem:e,selectionRange:t},Wi=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,L=x.memoizedState,h=n.stateNode,m=h.getSnapshotBeforeUpdate(n.elementType===n.type?_:un(n.type,_),L);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(C){se(n,n.return,C)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return x=Ls,Ls=!1,x}function Tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Zo(n,t,l)}i=i.next}while(i!==r)}}function _l(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function eu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ap(e){var n=e.alternate;n!==null&&(e.alternate=null,Ap(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[yn],delete n[Hr],delete n[Vo],delete n[Om],delete n[Am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pp(e){return e.tag===5||e.tag===3||e.tag===4}function Rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ki));else if(r!==4&&(e=e.child,e!==null))for(nu(e,n,t),e=e.sibling;e!==null;)nu(e,n,t),e=e.sibling}function tu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,n,t),e=e.sibling;e!==null;)tu(e,n,t),e=e.sibling}var ke=null,an=!1;function zn(e,n,t){for(t=t.child;t!==null;)Fp(e,n,t),t=t.sibling}function Fp(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(pl,t)}catch{}switch(t.tag){case 5:Te||Nt(t,n);case 6:var r=ke,i=an;ke=null,zn(e,n,t),ke=r,an=i,ke!==null&&(an?(e=ke,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ke.removeChild(t.stateNode));break;case 18:ke!==null&&(an?(e=ke,t=t.stateNode,e.nodeType===8?Kl(e.parentNode,t):e.nodeType===1&&Kl(e,t),Dr(e)):Kl(ke,t.stateNode));break;case 4:r=ke,i=an,ke=t.stateNode.containerInfo,an=!0,zn(e,n,t),ke=r,an=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Zo(t,n,o),i=i.next}while(i!==r)}zn(e,n,t);break;case 1:if(!Te&&(Nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){se(t,n,u)}zn(e,n,t);break;case 21:zn(e,n,t);break;case 22:t.mode&1?(Te=(r=Te)||t.memoizedState!==null,zn(e,n,t),Te=r):zn(e,n,t);break;default:zn(e,n,t)}}function Ms(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Wm),n.forEach(function(r){var i=eg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function on(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:ke=u.stateNode,an=!1;break e;case 3:ke=u.stateNode.containerInfo,an=!0;break e;case 4:ke=u.stateNode.containerInfo,an=!0;break e}u=u.return}if(ke===null)throw Error(S(160));Fp(l,o,i),ke=null,an=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){se(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lp(n,e),n=n.sibling}function Lp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(n,e),hn(e),r&4){try{Tr(3,e,e.return),_l(3,e)}catch(_){se(e,e.return,_)}try{Tr(5,e,e.return)}catch(_){se(e,e.return,_)}}break;case 1:on(n,e),hn(e),r&512&&t!==null&&Nt(t,t.return);break;case 5:if(on(n,e),hn(e),r&512&&t!==null&&Nt(t,t.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(_){se(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Jc(i,l),To(u,o);var s=To(u,l);for(o=0;o<a.length;o+=2){var c=a[o],f=a[o+1];c==="style"?rf(i,f):c==="dangerouslySetInnerHTML"?nf(i,f):c==="children"?Mr(i,f):Eu(i,c,f,s)}switch(u){case"input":ko(i,l);break;case"textarea":Zc(i,l);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var p=l.value;p!=null?Bt(i,!!l.multiple,p,!1):d!==!!l.multiple&&(l.defaultValue!=null?Bt(i,!!l.multiple,l.defaultValue,!0):Bt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Hr]=l}catch(_){se(e,e.return,_)}}break;case 6:if(on(n,e),hn(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(_){se(e,e.return,_)}}break;case 3:if(on(n,e),hn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Dr(n.containerInfo)}catch(_){se(e,e.return,_)}break;case 4:on(n,e),hn(e);break;case 13:on(n,e),hn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ia=fe())),r&4&&Ms(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Te=(s=Te)||c,on(n,e),Te=s):on(n,e),hn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(d=M,p=d.child,d.tag){case 0:case 11:case 14:case 15:Tr(4,d,d.return);break;case 1:Nt(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(_){se(r,t,_)}}break;case 5:Nt(d,d.return);break;case 22:if(d.memoizedState!==null){zs(f);continue}}p!==null?(p.return=d,M=p):zs(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=tf("display",o))}catch(_){se(e,e.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(_){se(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:on(n,e),hn(e),r&4&&Ms(e);break;case 21:break;default:on(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Pp(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mr(i,""),r.flags&=-33);var l=Rs(e);tu(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Rs(e);nu(e,u,o);break;default:throw Error(S(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qm(e,n,t){M=e,Rp(e)}function Rp(e,n,t){for(var r=(e.mode&1)!==0;M!==null;){var i=M,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vi;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||Te;u=vi;var s=Te;if(vi=o,(Te=a)&&!s)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?Ns(i):a!==null?(a.return=o,M=a):Ns(i);for(;l!==null;)M=l,Rp(l),l=l.sibling;M=i,vi=u,Te=s}Is(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,M=l):Is(e)}}function Is(e){for(;M!==null;){var n=M;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Te||_l(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Te)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:un(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&vs(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}vs(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Dr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Te||n.flags&512&&eu(n)}catch(d){se(n,n.return,d)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function zs(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function Ns(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_l(4,n)}catch(a){se(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){se(n,i,a)}}var l=n.return;try{eu(n)}catch(a){se(n,l,a)}break;case 5:var o=n.return;try{eu(n)}catch(a){se(n,o,a)}}}catch(a){se(n,n.return,a)}if(n===e){M=null;break}var u=n.sibling;if(u!==null){u.return=n.return,M=u;break}M=n.return}}var Km=Math.ceil,il=Mn.ReactCurrentDispatcher,ta=Mn.ReactCurrentOwner,en=Mn.ReactCurrentBatchConfig,Q=0,_e=null,he=null,Ce=0,be=0,Dt=et(0),ye=0,Gr=null,gt=0,kl=0,ra=0,Or=null,Ie=null,ia=0,Jt=1/0,Sn=null,ll=!1,ru=null,Gn=null,xi=!1,Hn=null,ol=0,Ar=0,iu=null,Mi=-1,Ii=0;function Fe(){return Q&6?fe():Mi!==-1?Mi:Mi=fe()}function Xn(e){return e.mode&1?Q&2&&Ce!==0?Ce&-Ce:Fm.transition!==null?(Ii===0&&(Ii=gf()),Ii):(e=X,e!==0||(e=window.event,e=e===void 0?16:wf(e.type)),e):1}function fn(e,n,t,r){if(50<Ar)throw Ar=0,iu=null,Error(S(185));qr(e,t,r),(!(Q&2)||e!==_e)&&(e===_e&&(!(Q&2)&&(kl|=t),ye===4&&Vn(e,Ce)),Be(e,r),t===1&&Q===0&&!(n.mode&1)&&(Jt=fe()+500,yl&&nt()))}function Be(e,n){var t=e.callbackNode;Fh(e,n);var r=bi(e,e===_e?Ce:0);if(r===0)t!==null&&$a(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&$a(t),n===1)e.tag===0?Pm(Ds.bind(null,e)):Hf(Ds.bind(null,e)),Em(function(){!(Q&6)&&nt()}),t=null;else{switch(yf(r)){case 1:t=Fu;break;case 4:t=hf;break;case 16:t=Hi;break;case 536870912:t=mf;break;default:t=Hi}t=Vp(t,Mp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mp(e,n){if(Mi=-1,Ii=0,Q&6)throw Error(S(327));var t=e.callbackNode;if(bt()&&e.callbackNode!==t)return null;var r=bi(e,e===_e?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ul(e,r);else{n=r;var i=Q;Q|=2;var l=zp();(_e!==e||Ce!==n)&&(Sn=null,Jt=fe()+500,ft(e,n));do try{Ym();break}catch(u){Ip(e,u)}while(!0);bu(),il.current=l,Q=i,he!==null?n=0:(_e=null,Ce=0,n=ye)}if(n!==0){if(n===2&&(i=Lo(e),i!==0&&(r=i,n=lu(e,i))),n===1)throw t=Gr,ft(e,0),Vn(e,r),Be(e,fe()),t;if(n===6)Vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Gm(i)&&(n=ul(e,r),n===2&&(l=Lo(e),l!==0&&(r=l,n=lu(e,l))),n===1))throw t=Gr,ft(e,0),Vn(e,r),Be(e,fe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:ot(e,Ie,Sn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(n=ia+500-fe(),10<n)){if(bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jo(ot.bind(null,e,Ie,Sn),n);break}ot(e,Ie,Sn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-cn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Km(r/1960))-r,10<r){e.timeoutHandle=jo(ot.bind(null,e,Ie,Sn),r);break}ot(e,Ie,Sn);break;case 5:ot(e,Ie,Sn);break;default:throw Error(S(329))}}}return Be(e,fe()),e.callbackNode===t?Mp.bind(null,e):null}function lu(e,n){var t=Or;return e.current.memoizedState.isDehydrated&&(ft(e,n).flags|=256),e=ul(e,n),e!==2&&(n=Ie,Ie=t,n!==null&&ou(n)),e}function ou(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Gm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!pn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vn(e,n){for(n&=~ra,n&=~kl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-cn(n),r=1<<t;e[t]=-1,n&=~r}}function Ds(e){if(Q&6)throw Error(S(327));bt();var n=bi(e,0);if(!(n&1))return Be(e,fe()),null;var t=ul(e,n);if(e.tag!==0&&t===2){var r=Lo(e);r!==0&&(n=r,t=lu(e,r))}if(t===1)throw t=Gr,ft(e,0),Vn(e,n),Be(e,fe()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ot(e,Ie,Sn),Be(e,fe()),null}function la(e,n){var t=Q;Q|=1;try{return e(n)}finally{Q=t,Q===0&&(Jt=fe()+500,yl&&nt())}}function yt(e){Hn!==null&&Hn.tag===0&&!(Q&6)&&bt();var n=Q;Q|=1;var t=en.transition,r=X;try{if(en.transition=null,X=1,e)return e()}finally{X=r,en.transition=t,Q=n,!(Q&6)&&nt()}}function oa(){be=Dt.current,re(Dt)}function ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Sm(t)),he!==null)for(t=he.return;t!==null;){var r=t;switch(Vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:Yt(),re(Ne),re(Oe),Xu();break;case 5:Gu(r);break;case 4:Yt();break;case 13:re(oe);break;case 19:re(oe);break;case 10:Wu(r.type._context);break;case 22:case 23:oa()}t=t.return}if(_e=e,he=e=Yn(e.current,null),Ce=be=n,ye=0,Gr=null,ra=kl=gt=0,Ie=Or=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}st=null}return e}function Ip(e,n){do{var t=he;try{if(bu(),Fi.current=rl,tl){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(mt=0,xe=ge=ue=null,Er=!1,$r=0,ta.current=null,t===null||t.return===null){ye=1,Gr=n,he=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=Ce,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,c=u,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ss(o);if(p!==null){p.flags&=-257,Es(p,o,u,l,n),p.mode&1&&ws(l,s,n),n=p,a=s;var x=n.updateQueue;if(x===null){var _=new Set;_.add(a),n.updateQueue=_}else x.add(a);break e}else{if(!(n&1)){ws(l,s,n),ua();break e}a=Error(S(426))}}else if(ie&&u.mode&1){var L=Ss(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Es(L,o,u,l,n),Uu(qt(a,u));break e}}l=a=qt(a,u),ye!==4&&(ye=2),Or===null?Or=[l]:Or.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=yp(l,a,n);ys(l,h);break e;case 1:u=a;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Gn===null||!Gn.has(y)))){l.flags|=65536,n&=-n,l.lanes|=n;var C=vp(l,u,n);ys(l,C);break e}}l=l.return}while(l!==null)}Dp(t)}catch(T){n=T,he===t&&t!==null&&(he=t=t.return);continue}break}while(!0)}function zp(){var e=il.current;return il.current=rl,e===null?rl:e}function ua(){(ye===0||ye===3||ye===2)&&(ye=4),_e===null||!(gt&268435455)&&!(kl&268435455)||Vn(_e,Ce)}function ul(e,n){var t=Q;Q|=2;var r=zp();(_e!==e||Ce!==n)&&(Sn=null,ft(e,n));do try{Xm();break}catch(i){Ip(e,i)}while(!0);if(bu(),Q=t,il.current=r,he!==null)throw Error(S(261));return _e=null,Ce=0,ye}function Xm(){for(;he!==null;)Np(he)}function Ym(){for(;he!==null&&!kh();)Np(he)}function Np(e){var n=jp(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Dp(e):he=n,ta.current=null}function Dp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=bm(t,n),t!==null){t.flags&=32767,he=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,he=null;return}}else if(t=Hm(t,n,be),t!==null){he=t;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);ye===0&&(ye=5)}function ot(e,n,t){var r=X,i=en.transition;try{en.transition=null,X=1,qm(e,n,t,r)}finally{en.transition=i,X=r}return null}function qm(e,n,t,r){do bt();while(Hn!==null);if(Q&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Lh(e,l),e===_e&&(he=_e=null,Ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||xi||(xi=!0,Vp(Hi,function(){return bt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=en.transition,en.transition=null;var o=X;X=1;var u=Q;Q|=4,ta.current=null,$m(e,t),Lp(t,e),ym(Do),Wi=!!No,Do=No=null,e.current=t,Qm(t),Ch(),Q=u,X=o,en.transition=l}else e.current=t;if(xi&&(xi=!1,Hn=e,ol=i),l=e.pendingLanes,l===0&&(Gn=null),Eh(t.stateNode),Be(e,fe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,e=ru,ru=null,e;return ol&1&&e.tag!==0&&bt(),l=e.pendingLanes,l&1?e===iu?Ar++:(Ar=0,iu=e):Ar=0,nt(),null}function bt(){if(Hn!==null){var e=yf(ol),n=en.transition,t=X;try{if(en.transition=null,X=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,ol=0,Q&6)throw Error(S(331));var i=Q;for(Q|=4,M=e.current;M!==null;){var l=M,o=l.child;if(M.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(M=s;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Tr(8,c,l)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var d=c.sibling,p=c.return;if(Ap(c),c===s){M=null;break}if(d!==null){d.return=p,M=d;break}M=p}}}var x=l.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var L=_.sibling;_.sibling=null,_=L}while(_!==null)}}M=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,M=o;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Tr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,M=h;break e}M=l.return}}var m=e.current;for(M=m;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=m;M!==null;){if(u=M,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:_l(9,u)}}catch(T){se(u,u.return,T)}if(u===o){M=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,M=C;break e}M=u.return}}if(Q=i,nt(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(pl,e)}catch{}r=!0}return r}finally{X=t,en.transition=n}}return!1}function Bs(e,n,t){n=qt(t,n),n=yp(e,n,1),e=Kn(e,n,1),n=Fe(),e!==null&&(qr(e,1,n),Be(e,n))}function se(e,n,t){if(e.tag===3)Bs(e,e,t);else for(;n!==null;){if(n.tag===3){Bs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=qt(t,e),e=vp(n,e,1),n=Kn(n,e,1),e=Fe(),n!==null&&(qr(n,1,e),Be(n,e));break}}n=n.return}}function Jm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,_e===e&&(Ce&t)===t&&(ye===4||ye===3&&(Ce&130023424)===Ce&&500>fe()-ia?ft(e,0):ra|=t),Be(e,n)}function Bp(e,n){n===0&&(e.mode&1?(n=si,si<<=1,!(si&130023424)&&(si=4194304)):n=1);var t=Fe();e=Ln(e,n),e!==null&&(qr(e,n,t),Be(e,t))}function Zm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bp(e,t)}function eg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Bp(e,t)}var jp;jp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ne.current)ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ze=!1,Um(e,n,t);ze=!!(e.flags&131072)}else ze=!1,ie&&n.flags&1048576&&bf(n,qi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ri(e,n),e=n.pendingProps;var i=Kt(n,Oe.current);Ht(n,t),i=qu(null,n,r,e,i,t);var l=Ju();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,De(r)?(l=!0,Xi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qu(n),i.updater=xl,n.stateNode=i,i._reactInternals=n,Qo(n,r,e,t),n=Xo(null,n,r,!0,l,t)):(n.tag=0,ie&&l&&ju(n),Pe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ri(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=tg(r),e=un(r,e),i){case 0:n=Go(null,n,r,e,t);break e;case 1:n=As(null,n,r,e,t);break e;case 11:n=Ts(null,n,r,e,t);break e;case 14:n=Os(null,n,r,un(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Go(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),As(e,n,r,i,t);case 3:e:{if(Cp(n),e===null)throw Error(S(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Xf(e,n),el(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=qt(Error(S(423)),n),n=Ps(e,n,r,t,i);break e}else if(r!==i){i=qt(Error(S(424)),n),n=Ps(e,n,r,t,i);break e}else for(We=Qn(n.stateNode.containerInfo.firstChild),Qe=n,ie=!0,sn=null,t=Kf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gt(),r===i){n=Rn(e,n,t);break e}Pe(e,n,r,t)}n=n.child}return n;case 5:return Yf(n),e===null&&bo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Bo(r,i)?o=null:l!==null&&Bo(r,l)&&(n.flags|=32),kp(e,n),Pe(e,n,o,t),n.child;case 6:return e===null&&bo(n),null;case 13:return wp(e,n,t);case 4:return Ku(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Xt(n,null,r,t):Pe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Ts(e,n,r,i,t);case 7:return Pe(e,n,n.pendingProps,t),n.child;case 8:return Pe(e,n,n.pendingProps.children,t),n.child;case 12:return Pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,Z(Ji,r._currentValue),r._currentValue=o,l!==null)if(pn(l.value,o)){if(l.children===i.children&&!Ne.current){n=Rn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=An(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?a.next=a:(a.next=c.next,c.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Wo(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Wo(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Pe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Ht(n,t),i=nn(i),r=r(i),n.flags|=1,Pe(e,n,r,t),n.child;case 14:return r=n.type,i=un(r,n.pendingProps),i=un(r.type,i),Os(e,n,r,i,t);case 15:return xp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Ri(e,n),n.tag=1,De(r)?(e=!0,Xi(n)):e=!1,Ht(n,t),gp(n,r,i),Qo(n,r,i,t),Xo(null,n,r,!0,e,t);case 19:return Sp(e,n,t);case 22:return _p(e,n,t)}throw Error(S(156,n.tag))};function Vp(e,n){return df(e,n)}function ng(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,n,t,r){return new ng(e,n,t,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tg(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===Au)return 14}return 2}function Yn(e,n){var t=e.alternate;return t===null?(t=Ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function zi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")aa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return pt(t.children,i,l,n);case Tu:o=8,i|=8;break;case go:return e=Ze(12,t,n,i|2),e.elementType=go,e.lanes=l,e;case yo:return e=Ze(13,t,n,i),e.elementType=yo,e.lanes=l,e;case vo:return e=Ze(19,t,n,i),e.elementType=vo,e.lanes=l,e;case Xc:return Cl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kc:o=10;break e;case Gc:o=9;break e;case Ou:o=11;break e;case Au:o=14;break e;case Dn:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ze(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function pt(e,n,t,r){return e=Ze(7,e,r,n),e.lanes=t,e}function Cl(e,n,t,r){return e=Ze(22,e,r,n),e.elementType=Xc,e.lanes=t,e.stateNode={isHidden:!1},e}function no(e,n,t){return e=Ze(6,e,null,n),e.lanes=t,e}function to(e,n,t){return n=Ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sa(e,n,t,r,i,l,o,u,a){return e=new rg(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ze(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(l),e}function ig(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Up(e){if(!e)return Jn;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(De(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(De(t))return Uf(e,t,n)}return n}function Hp(e,n,t,r,i,l,o,u,a){return e=sa(t,r,!0,e,i,l,o,u,a),e.context=Up(null),t=e.current,r=Fe(),i=Xn(t),l=An(r,i),l.callback=n??null,Kn(t,l,i),e.current.lanes=i,qr(e,i,r),Be(e,r),e}function wl(e,n,t,r){var i=n.current,l=Fe(),o=Xn(i);return t=Up(t),n.context===null?n.context=t:n.pendingContext=t,n=An(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Kn(i,n,o),e!==null&&(fn(e,i,o,l),Pi(e,i,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function js(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ca(e,n){js(e,n),(e=e.alternate)&&js(e,n)}function lg(){return null}var bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function fa(e){this._internalRoot=e}Sl.prototype.render=fa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));wl(e,n,null,null)};Sl.prototype.unmount=fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;yt(function(){wl(null,e,null,null)}),n[Fn]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var n=_f();e={blockedOn:null,target:e,priority:n};for(var t=0;t<jn.length&&n!==0&&n<jn[t].priority;t++);jn.splice(t,0,e),t===0&&Cf(e)}};function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vs(){}function og(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=al(o);l.call(s)}}var o=Hp(n,r,e,0,null,!1,!1,"",Vs);return e._reactRootContainer=o,e[Fn]=o.current,Vr(e.nodeType===8?e.parentNode:e),yt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=al(a);u.call(s)}}var a=sa(e,0,!1,null,null,!1,!1,"",Vs);return e._reactRootContainer=a,e[Fn]=a.current,Vr(e.nodeType===8?e.parentNode:e),yt(function(){wl(n,a,t,r)}),a}function Tl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=al(o);u.call(a)}}wl(n,o,e,i)}else o=og(t,n,e,i,r);return al(o)}vf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=vr(n.pendingLanes);t!==0&&(Lu(n,t|1),Be(n,fe()),!(Q&6)&&(Jt=fe()+500,nt()))}break;case 13:yt(function(){var r=Ln(e,1);if(r!==null){var i=Fe();fn(r,e,1,i)}}),ca(e,1)}};Ru=function(e){if(e.tag===13){var n=Ln(e,134217728);if(n!==null){var t=Fe();fn(n,e,134217728,t)}ca(e,134217728)}};xf=function(e){if(e.tag===13){var n=Xn(e),t=Ln(e,n);if(t!==null){var r=Fe();fn(t,e,n,r)}ca(e,n)}};_f=function(){return X};kf=function(e,n){var t=X;try{return X=e,n()}finally{X=t}};Ao=function(e,n,t){switch(n){case"input":if(ko(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=gl(r);if(!i)throw Error(S(90));qc(r),ko(r,i)}}}break;case"textarea":Zc(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};uf=la;af=yt;var ug={usingClientEntryPoint:!1,Events:[Zr,Lt,gl,lf,of,la]},dr={findFiberByHostInstance:at,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ag={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ff(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{pl=_i.inject(ag),xn=_i}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug;Ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pa(n))throw Error(S(200));return ig(e,n,null,t)};Ge.createRoot=function(e,n){if(!pa(e))throw Error(S(299));var t=!1,r="",i=bp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=sa(e,1,!1,null,null,t,!1,r,i),e[Fn]=n.current,Vr(e.nodeType===8?e.parentNode:e),new fa(n)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ff(n),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return yt(e)};Ge.hydrate=function(e,n,t){if(!El(n))throw Error(S(200));return Tl(null,e,n,!0,t)};Ge.hydrateRoot=function(e,n,t){if(!pa(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=bp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Hp(n,null,e,1,t??null,i,!1,l,o),e[Fn]=n.current,Vr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Sl(n)};Ge.render=function(e,n,t){if(!El(n))throw Error(S(200));return Tl(null,e,n,!1,t)};Ge.unmountComponentAtNode=function(e){if(!El(e))throw Error(S(40));return e._reactRootContainer?(yt(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};Ge.unstable_batchedUpdates=la;Ge.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!El(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Tl(e,n,t,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Wp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wp)}catch(e){console.error(e)}}Wp(),bc.exports=Ge;var sg=bc.exports,$p,Us=sg;$p=Us.createRoot,Us.hydrateRoot;function cg({searchQuery:e,setSearchQuery:n}){return A.jsx("div",{style:{marginBottom:"24px",padding:"0 8px"},children:A.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"var(--color-background)",borderRadius:"var(--radius-md)",padding:"8px 16px",border:"1px solid var(--border-color)",transition:"border-color 0.2s ease"},children:[A.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{marginRight:"8px"},children:[A.jsx("path",{d:"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",stroke:"var(--color-text-muted)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A.jsx("path",{d:"M21 21L16.65 16.65",stroke:"var(--color-text-muted)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),A.jsx("input",{type:"text",placeholder:"가이드 내용 검색",value:e,onChange:t=>n(t.target.value),style:{width:"100%",border:"none",outline:"none",backgroundColor:"transparent",fontSize:"15px",color:"var(--color-text-body)",fontFamily:"inherit"}})]})})}function fg({data:e,activeChapter:n,onSelectChapter:t,searchQuery:r,setSearchQuery:i,isMobile:l,isOpen:o,onClose:u}){return A.jsxs("aside",{style:{width:"var(--sidebar-width)",height:"100vh",position:"fixed",left:0,top:0,backgroundColor:"var(--color-surface)",borderRight:"1px solid var(--border-color)",overflowY:"auto",padding:"24px 16px",zIndex:100,transform:l?o?"translateX(0)":"translateX(-100%)":"none",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:l&&o?"var(--shadow-md)":"none"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"32px",padding:"0 8px"},children:[A.jsxs("h1",{style:{fontSize:"20px",fontWeight:"700",color:"var(--color-text-title)",lineHeight:"1.4"},children:["마케팅·CRM",A.jsx("br",{}),"완전 가이드"]}),l&&A.jsx("button",{onClick:u,style:{padding:"4px",cursor:"pointer"},"aria-label":"메뉴 닫기",children:A.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("path",{d:"M18 6L6 18",stroke:"var(--color-text-title)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A.jsx("path",{d:"M6 6L18 18",stroke:"var(--color-text-title)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),A.jsx(cg,{searchQuery:r,setSearchQuery:i}),A.jsx("nav",{children:e.map((a,s)=>A.jsxs("div",{style:{marginBottom:"24px"},children:[A.jsx("h2",{style:{fontSize:"14px",fontWeight:"700",color:"var(--color-primary)",marginBottom:"12px",padding:"0 8px",textTransform:"uppercase",letterSpacing:"0.02em"},children:a.title}),A.jsx("ul",{style:{listStyle:"none",padding:0},children:a.chapters&&a.chapters.map((c,f)=>{const d=n&&n.title===c.title;return A.jsx("li",{style:{marginBottom:"4px"},children:A.jsx("button",{onClick:()=>t(c),style:{width:"100%",textAlign:"left",padding:"10px 12px",borderRadius:"var(--radius-sm)",fontSize:"15px",color:d?"var(--color-primary)":"var(--color-text-body)",backgroundColor:d?"rgba(49, 130, 246, 0.08)":"transparent",fontWeight:d?"600":"500",transition:"all 0.15s ease"},onMouseOver:p=>{d||(p.currentTarget.style.backgroundColor="var(--color-background)")},onMouseOut:p=>{d||(p.currentTarget.style.backgroundColor="transparent")},children:c.title})},f)})})]},s))})]})}function pg({data:e,activeChapter:n,onSelectChapter:t,searchQuery:r,setSearchQuery:i,children:l}){const[o,u]=ve.useState(!1),[a,s]=ve.useState(!1);ve.useEffect(()=>{const f=()=>{u(window.innerWidth<=768),window.innerWidth>768&&s(!1)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const c=()=>s(!a);return A.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",minHeight:"100vh",position:"relative"},children:[o&&A.jsxs("header",{style:{position:"sticky",top:0,backgroundColor:"var(--color-surface)",padding:"16px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:90},children:[A.jsx("h1",{style:{fontSize:"18px",fontWeight:"700",color:"var(--color-text-title)",margin:0},children:"마케팅 가이드"}),A.jsx("button",{onClick:c,style:{padding:"8px"},"aria-label":"메뉴 열기",children:A.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("path",{d:"M4 6H20",stroke:"var(--color-text-title)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A.jsx("path",{d:"M4 12H20",stroke:"var(--color-text-title)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A.jsx("path",{d:"M4 18H20",stroke:"var(--color-text-title)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),o&&a&&A.jsx("div",{onClick:()=>s(!1),style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.4)",zIndex:95,transition:"opacity 0.2s"}}),A.jsxs("div",{style:{display:"flex",flex:1},children:[A.jsx(fg,{data:e,activeChapter:n,onSelectChapter:f=>{t(f),o&&s(!1)},searchQuery:r,setSearchQuery:i,isMobile:o,isOpen:a,onClose:()=>s(!1)}),A.jsx("main",{style:{flex:1,padding:o?"20px 16px":"40px",marginLeft:o?"0":"var(--sidebar-width)",maxWidth:o?"100%":"1000px",margin:o?"0":"0 auto",paddingLeft:o?"16px":"calc(var(--sidebar-width) + 40px)",transition:"margin-left 0.3s ease, padding 0.3s ease"},children:l})]})]})}function dg(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const hg=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,mg=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,gg={};function Hs(e,n){return(gg.jsx?mg:hg).test(e)}const yg=/[ \t\n\f\r]/g;function vg(e){return typeof e=="object"?e.type==="text"?bs(e.value):!1:bs(e)}function bs(e){return e.replace(yg,"")===""}class ni{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}ni.prototype.normal={};ni.prototype.property={};ni.prototype.space=void 0;function Qp(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new ni(t,r,n)}function uu(e){return e.toLowerCase()}class Ve{constructor(n,t){this.attribute=t,this.property=n}}Ve.prototype.attribute="";Ve.prototype.booleanish=!1;Ve.prototype.boolean=!1;Ve.prototype.commaOrSpaceSeparated=!1;Ve.prototype.commaSeparated=!1;Ve.prototype.defined=!1;Ve.prototype.mustUseProperty=!1;Ve.prototype.number=!1;Ve.prototype.overloadedBoolean=!1;Ve.prototype.property="";Ve.prototype.spaceSeparated=!1;Ve.prototype.space=void 0;let xg=0;const U=_t(),de=_t(),au=_t(),E=_t(),J=_t(),Wt=_t(),He=_t();function _t(){return 2**++xg}const su=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:de,commaOrSpaceSeparated:He,commaSeparated:Wt,number:E,overloadedBoolean:au,spaceSeparated:J},Symbol.toStringTag,{value:"Module"})),ro=Object.keys(su);class da extends Ve{constructor(n,t,r,i){let l=-1;if(super(n,t),Ws(this,"space",i),typeof r=="number")for(;++l<ro.length;){const o=ro[l];Ws(this,ro[l],(r&su[o])===su[o])}}}da.prototype.defined=!0;function Ws(e,n,t){t&&(e[n]=t)}function tr(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const l=new da(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),n[r]=l,t[uu(r)]=r,t[uu(l.attribute)]=r}return new ni(n,t,e.space)}const Kp=tr({properties:{ariaActiveDescendant:null,ariaAtomic:de,ariaAutoComplete:null,ariaBusy:de,ariaChecked:de,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:J,ariaCurrent:null,ariaDescribedBy:J,ariaDetails:null,ariaDisabled:de,ariaDropEffect:J,ariaErrorMessage:null,ariaExpanded:de,ariaFlowTo:J,ariaGrabbed:de,ariaHasPopup:null,ariaHidden:de,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:J,ariaLevel:E,ariaLive:null,ariaModal:de,ariaMultiLine:de,ariaMultiSelectable:de,ariaOrientation:null,ariaOwns:J,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:de,ariaReadOnly:de,ariaRelevant:null,ariaRequired:de,ariaRoleDescription:J,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:de,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Gp(e,n){return n in e?e[n]:n}function Xp(e,n){return Gp(e,n.toLowerCase())}const _g=tr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Wt,acceptCharset:J,accessKey:J,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:J,autoFocus:U,autoPlay:U,blocking:J,capture:null,charSet:null,checked:U,cite:null,className:J,cols:E,colSpan:null,content:null,contentEditable:de,controls:U,controlsList:J,coords:E|Wt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:au,draggable:de,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:J,height:E,hidden:au,high:E,href:null,hrefLang:null,htmlFor:J,httpEquiv:J,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:J,itemRef:J,itemScope:U,itemType:J,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:E,pattern:null,ping:J,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:J,required:U,reversed:U,rows:E,rowSpan:E,sandbox:J,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:de,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:de,width:E,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:J,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:de,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:U,disableRemotePlayback:U,prefix:null,property:null,results:E,security:null,unselectable:null},space:"html",transform:Xp}),kg=tr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:He,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:J,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Wt,g2:Wt,glyphName:Wt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:He,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:J,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:He,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:He,rev:He,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:He,requiredFeatures:He,requiredFonts:He,requiredFormats:He,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:He,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:He,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:He,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Gp}),Yp=tr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),qp=tr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Xp}),Jp=tr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Cg={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},wg=/[A-Z]/g,$s=/-[a-z]/g,Sg=/^data[-\w.:]+$/i;function Eg(e,n){const t=uu(n);let r=n,i=Ve;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Sg.test(n)){if(n.charAt(4)==="-"){const l=n.slice(5).replace($s,Og);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=n.slice(4);if(!$s.test(l)){let o=l.replace(wg,Tg);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=da}return new i(r,n)}function Tg(e){return"-"+e.toLowerCase()}function Og(e){return e.charAt(1).toUpperCase()}const Ag=Qp([Kp,_g,Yp,qp,Jp],"html"),ha=Qp([Kp,kg,Yp,qp,Jp],"svg");function Pg(e){return e.join(" ").trim()}var ma={},Qs=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Fg=/\n/g,Lg=/^\s*/,Rg=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Mg=/^:\s*/,Ig=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,zg=/^[;\s]*/,Ng=/^\s+|\s+$/g,Dg=`
`,Ks="/",Gs="*",ut="",Bg="comment",jg="declaration";function Vg(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(x){var _=x.match(Fg);_&&(t+=_.length);var L=x.lastIndexOf(Dg);r=~L?x.length-L:r+x.length}function l(){var x={line:t,column:r};return function(_){return _.position=new o(x),s(),_}}function o(x){this.start=x,this.end={line:t,column:r},this.source=n.source}o.prototype.content=e;function u(x){var _=new Error(n.source+":"+t+":"+r+": "+x);if(_.reason=x,_.filename=n.source,_.line=t,_.column=r,_.source=e,!n.silent)throw _}function a(x){var _=x.exec(e);if(_){var L=_[0];return i(L),e=e.slice(L.length),_}}function s(){a(Lg)}function c(x){var _;for(x=x||[];_=f();)_!==!1&&x.push(_);return x}function f(){var x=l();if(!(Ks!=e.charAt(0)||Gs!=e.charAt(1))){for(var _=2;ut!=e.charAt(_)&&(Gs!=e.charAt(_)||Ks!=e.charAt(_+1));)++_;if(_+=2,ut===e.charAt(_-1))return u("End of comment missing");var L=e.slice(2,_-2);return r+=2,i(L),e=e.slice(_),r+=2,x({type:Bg,comment:L})}}function d(){var x=l(),_=a(Rg);if(_){if(f(),!a(Mg))return u("property missing ':'");var L=a(Ig),h=x({type:jg,property:Xs(_[0].replace(Qs,ut)),value:L?Xs(L[0].replace(Qs,ut)):ut});return a(zg),h}}function p(){var x=[];c(x);for(var _;_=d();)_!==!1&&(x.push(_),c(x));return x}return s(),p()}function Xs(e){return e?e.replace(Ng,ut):ut}var Ug=Vg,Hg=Bi&&Bi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ma,"__esModule",{value:!0});ma.default=Wg;const bg=Hg(Ug);function Wg(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,bg.default)(e),i=typeof n=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:o,value:u}=l;i?n(o,u,l):u&&(t=t||{},t[o]=u)}),t}var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.camelCase=void 0;var $g=/^--[a-zA-Z0-9_-]+$/,Qg=/-([a-z])/g,Kg=/^[^-]+$/,Gg=/^-(webkit|moz|ms|o|khtml)-/,Xg=/^-(ms)-/,Yg=function(e){return!e||Kg.test(e)||$g.test(e)},qg=function(e,n){return n.toUpperCase()},Ys=function(e,n){return"".concat(n,"-")},Jg=function(e,n){return n===void 0&&(n={}),Yg(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(Xg,Ys):e=e.replace(Gg,Ys),e.replace(Qg,qg))};Ol.camelCase=Jg;var Zg=Bi&&Bi.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ey=Zg(ma),ny=Ol;function cu(e,n){var t={};return!e||typeof e!="string"||(0,ey.default)(e,function(r,i){r&&i&&(t[(0,ny.camelCase)(r,n)]=i)}),t}cu.default=cu;var ty=cu;const ry=vu(ty),Zp=ed("end"),ga=ed("start");function ed(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function iy(e){const n=ga(e),t=Zp(e);if(n&&t)return{start:n,end:t}}function Pr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?qs(e.position):"start"in e||"end"in e?qs(e):"line"in e||"column"in e?fu(e):""}function fu(e){return Js(e&&e.line)+":"+Js(e&&e.column)}function qs(e){return fu(e&&e.start)+"-"+fu(e&&e.end)}function Js(e){return e&&typeof e=="number"?e:1}class Ae extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?i=n:!l.cause&&n&&(o=!0,i=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?l.ruleId=r:(l.source=r.slice(0,a),l.ruleId=r.slice(a+1))}if(!l.place&&l.ancestors&&l.ancestors){const a=l.ancestors[l.ancestors.length-1];a&&(l.place=a.position)}const u=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=u?u.line:void 0,this.name=Pr(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ae.prototype.file="";Ae.prototype.name="";Ae.prototype.reason="";Ae.prototype.message="";Ae.prototype.stack="";Ae.prototype.column=void 0;Ae.prototype.line=void 0;Ae.prototype.ancestors=void 0;Ae.prototype.cause=void 0;Ae.prototype.fatal=void 0;Ae.prototype.place=void 0;Ae.prototype.ruleId=void 0;Ae.prototype.source=void 0;const ya={}.hasOwnProperty,ly=new Map,oy=/[A-Z]/g,uy=new Set(["table","tbody","thead","tfoot","tr"]),ay=new Set(["td","th"]),nd="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function sy(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=yy(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=gy(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?ha:Ag,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},l=td(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function td(e,n,t){if(n.type==="element")return cy(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return fy(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return dy(e,n,t);if(n.type==="mdxjsEsm")return py(e,n);if(n.type==="root")return hy(e,n,t);if(n.type==="text")return my(e,n)}function cy(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=ha,e.schema=i),e.ancestors.push(n);const l=id(e,n.tagName,!1),o=vy(e,n);let u=xa(e,n);return uy.has(n.tagName)&&(u=u.filter(function(a){return typeof a=="string"?!vg(a):!0})),rd(e,o,l,n),va(o,u),e.ancestors.pop(),e.schema=r,e.create(n,l,o,t)}function fy(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Xr(e,n.position)}function py(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Xr(e,n.position)}function dy(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=ha,e.schema=i),e.ancestors.push(n);const l=n.name===null?e.Fragment:id(e,n.name,!0),o=xy(e,n),u=xa(e,n);return rd(e,o,l,n),va(o,u),e.ancestors.pop(),e.schema=r,e.create(n,l,o,t)}function hy(e,n,t){const r={};return va(r,xa(e,n)),e.create(n,e.Fragment,r,t)}function my(e,n){return n.value}function rd(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function va(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function gy(e,n,t){return r;function r(i,l,o,u){const s=Array.isArray(o.children)?t:n;return u?s(l,o,u):s(l,o)}}function yy(e,n){return t;function t(r,i,l,o){const u=Array.isArray(l.children),a=ga(r);return n(i,l,o,u,{columnNumber:a?a.column-1:void 0,fileName:e,lineNumber:a?a.line:void 0},void 0)}}function vy(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&ya.call(n.properties,i)){const l=_y(e,i,n.properties[i]);if(l){const[o,u]=l;e.tableCellAlignToStyle&&o==="align"&&typeof u=="string"&&ay.has(n.tagName)?r=u:t[o]=u}}if(r){const l=t.style||(t.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function xy(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const u=o.properties[0];u.type,Object.assign(t,e.evaluater.evaluateExpression(u.argument))}else Xr(e,n.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const u=r.value.data.estree.body[0];u.type,l=e.evaluater.evaluateExpression(u.expression)}else Xr(e,n.position);else l=r.value===null?!0:r.value;t[i]=l}return t}function xa(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:ly;for(;++r<n.children.length;){const l=n.children[r];let o;if(e.passKeys){const a=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(a){const s=i.get(a)||0;o=a+"-"+s,i.set(a,s+1)}}const u=td(e,l,o);u!==void 0&&t.push(u)}return t}function _y(e,n,t){const r=Eg(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?dg(t):Pg(t)),r.property==="style"){let i=typeof t=="object"?t:ky(e,String(t));return e.stylePropertyNameCase==="css"&&(i=Cy(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Cg[r.property]||r.property:r.attribute,t]}}function ky(e,n){try{return ry(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Ae("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=nd+"#cannot-parse-style-attribute",i}}function id(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let l=-1,o;for(;++l<i.length;){const u=Hs(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:u,computed:!!(l&&u.type==="Literal"),optional:!1}:u}r=o}else r=Hs(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return ya.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Xr(e)}function Xr(e,n){const t=new Ae("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=nd+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Cy(e){const n={};let t;for(t in e)ya.call(e,t)&&(n[wy(t)]=e[t]);return n}function wy(e){let n=e.replace(oy,Sy);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Sy(e){return"-"+e.toLowerCase()}const io={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ey={};function Ty(e,n){const t=Ey,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return ld(e,r,i)}function ld(e,n,t){if(Oy(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Zs(e.children,n,t)}return Array.isArray(e)?Zs(e,n,t):""}function Zs(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=ld(e[i],n,t);return r.join("")}function Oy(e){return!!(e&&typeof e=="object")}const ec=document.createElement("i");function _a(e){const n="&"+e+";";ec.innerHTML=n;const t=ec.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function kn(e,n,t,r){const i=e.length;let l=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);l<r.length;)o=r.slice(l,l+1e4),o.unshift(n,0),e.splice(...o),l+=1e4,n+=1e4}function Je(e,n){return e.length>0?(kn(e,e.length,0,n),e):n}const nc={}.hasOwnProperty;function Ay(e){const n={};let t=-1;for(;++t<e.length;)Py(n,e[t]);return n}function Py(e,n){let t;for(t in n){const i=(nc.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let o;if(l)for(o in l){nc.call(i,o)||(i[o]=[]);const u=l[o];Fy(i[o],Array.isArray(u)?u:u?[u]:[])}}}function Fy(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);kn(e,0,0,r)}function od(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function $t(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vn=tt(/[A-Za-z]/),$e=tt(/[\dA-Za-z]/),Ly=tt(/[#-'*+\--9=?A-Z^-~]/);function pu(e){return e!==null&&(e<32||e===127)}const du=tt(/\d/),Ry=tt(/[\dA-Fa-f]/),My=tt(/[!-/:-@[-`{-~]/);function j(e){return e!==null&&e<-2}function je(e){return e!==null&&(e<0||e===32)}function K(e){return e===-2||e===-1||e===32}const Iy=tt(new RegExp("\\p{P}|\\p{S}","u")),zy=tt(/\s/);function tt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function rr(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const l=e.charCodeAt(t);let o="";if(l===37&&$e(e.charCodeAt(t+1))&&$e(e.charCodeAt(t+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const u=e.charCodeAt(t+1);l<56320&&u>56319&&u<57344?(o=String.fromCharCode(l,u),i=1):o="�"}else o=String.fromCharCode(l);o&&(n.push(e.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function ee(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(a){return K(a)?(e.enter(t),u(a)):n(a)}function u(a){return K(a)&&l++<i?(e.consume(a),u):(e.exit(t),n(a))}}const Ny={tokenize:Dy};function Dy(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),ee(e,n,"linePrefix")}function i(u){return e.enter("paragraph"),l(u)}function l(u){const a=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=a),t=a,o(u)}function o(u){if(u===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(u);return}return j(u)?(e.consume(u),e.exit("chunkText"),l):(e.consume(u),o)}}const By={tokenize:jy},tc={tokenize:Vy};function jy(e){const n=this,t=[];let r=0,i,l,o;return u;function u(y){if(r<t.length){const C=t[r];return n.containerState=C[1],e.attempt(C[0].continuation,a,s)(y)}return s(y)}function a(y){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const C=n.events.length;let T=C,k;for(;T--;)if(n.events[T][0]==="exit"&&n.events[T][1].type==="chunkFlow"){k=n.events[T][1].end;break}h(r);let O=C;for(;O<n.events.length;)n.events[O][1].end={...k},O++;return kn(n.events,T+1,0,n.events.slice(C)),n.events.length=O,s(y)}return u(y)}function s(y){if(r===t.length){if(!i)return d(y);if(i.currentConstruct&&i.currentConstruct.concrete)return x(y);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(tc,c,f)(y)}function c(y){return i&&m(),h(r),d(y)}function f(y){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,x(y)}function d(y){return n.containerState={},e.attempt(tc,p,x)(y)}function p(y){return r++,t.push([n.currentConstruct,n.containerState]),d(y)}function x(y){if(y===null){i&&m(),h(0),e.consume(y);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),_(y)}function _(y){if(y===null){L(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return j(y)?(e.consume(y),L(e.exit("chunkFlow")),r=0,n.interrupt=void 0,u):(e.consume(y),_)}function L(y,C){const T=n.sliceStream(y);if(C&&T.push(null),y.previous=l,l&&(l.next=y),l=y,i.defineSkip(y.start),i.write(T),n.parser.lazy[y.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<o&&(!i.events[k][1].end||i.events[k][1].end.offset>o))return;const O=n.events.length;let R=O,B,I;for(;R--;)if(n.events[R][0]==="exit"&&n.events[R][1].type==="chunkFlow"){if(B){I=n.events[R][1].end;break}B=!0}for(h(r),k=O;k<n.events.length;)n.events[k][1].end={...I},k++;kn(n.events,R+1,0,n.events.slice(O)),n.events.length=k}}function h(y){let C=t.length;for(;C-- >y;){const T=t[C];n.containerState=T[1],T[0].exit.call(n,e)}t.length=y}function m(){i.write([null]),l=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Vy(e,n,t){return ee(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function rc(e){if(e===null||je(e)||zy(e))return 1;if(Iy(e))return 2}function ka(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(n=l(n,t),r.push(l))}return n}const hu={name:"attention",resolveAll:Uy,tokenize:Hy};function Uy(e,n){let t=-1,r,i,l,o,u,a,s,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const f={...e[r][1].end},d={...e[t][1].start};ic(f,-a),ic(d,a),o={type:a>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},u={type:a>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:d},l={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:a>1?"strong":"emphasis",start:{...o.start},end:{...u.end}},e[r][1].end={...o.start},e[t][1].start={...u.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=Je(s,[["enter",e[r][1],n],["exit",e[r][1],n]])),s=Je(s,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",l,n]]),s=Je(s,ka(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),s=Je(s,[["exit",l,n],["enter",u,n],["exit",u,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,s=Je(s,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,kn(e,r-1,t-r+3,s),t=r+s.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function Hy(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=rc(r);let l;return o;function o(a){return l=a,e.enter("attentionSequence"),u(a)}function u(a){if(a===l)return e.consume(a),u;const s=e.exit("attentionSequence"),c=rc(a),f=!c||c===2&&i||t.includes(a),d=!i||i===2&&c||t.includes(r);return s._open=!!(l===42?f:f&&(i||!d)),s._close=!!(l===42?d:d&&(c||!f)),n(a)}}function ic(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const by={name:"autolink",tokenize:Wy};function Wy(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(p){return vn(p)?(e.consume(p),o):p===64?t(p):s(p)}function o(p){return p===43||p===45||p===46||$e(p)?(r=1,u(p)):s(p)}function u(p){return p===58?(e.consume(p),r=0,a):(p===43||p===45||p===46||$e(p))&&r++<32?(e.consume(p),u):(r=0,s(p))}function a(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||pu(p)?t(p):(e.consume(p),a)}function s(p){return p===64?(e.consume(p),c):Ly(p)?(e.consume(p),s):t(p)}function c(p){return $e(p)?f(p):t(p)}function f(p){return p===46?(e.consume(p),r=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):d(p)}function d(p){if((p===45||$e(p))&&r++<63){const x=p===45?d:f;return e.consume(p),x}return t(p)}}const Al={partial:!0,tokenize:$y};function $y(e,n,t){return r;function r(l){return K(l)?ee(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||j(l)?n(l):t(l)}}const ud={continuation:{tokenize:Ky},exit:Gy,name:"blockQuote",tokenize:Qy};function Qy(e,n,t){const r=this;return i;function i(o){if(o===62){const u=r.containerState;return u.open||(e.enter("blockQuote",{_container:!0}),u.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return t(o)}function l(o){return K(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function Ky(e,n,t){const r=this;return i;function i(o){return K(o)?ee(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(ud,n,t)(o)}}function Gy(e){e.exit("blockQuote")}const ad={name:"characterEscape",tokenize:Xy};function Xy(e,n,t){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return My(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const sd={name:"characterReference",tokenize:Yy};function Yy(e,n,t){const r=this;let i=0,l,o;return u;function u(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),a}function a(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),l=31,o=$e,c(f))}function s(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=Ry,c):(e.enter("characterReferenceValue"),l=7,o=du,c(f))}function c(f){if(f===59&&i){const d=e.exit("characterReferenceValue");return o===$e&&!_a(r.sliceSerialize(d))?t(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(f)&&i++<l?(e.consume(f),c):t(f)}}const lc={partial:!0,tokenize:Jy},oc={concrete:!0,name:"codeFenced",tokenize:qy};function qy(e,n,t){const r=this,i={partial:!0,tokenize:T};let l=0,o=0,u;return a;function a(k){return s(k)}function s(k){const O=r.events[r.events.length-1];return l=O&&O[1].type==="linePrefix"?O[2].sliceSerialize(O[1],!0).length:0,u=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(k)}function c(k){return k===u?(o++,e.consume(k),c):o<3?t(k):(e.exit("codeFencedFenceSequence"),K(k)?ee(e,f,"whitespace")(k):f(k))}function f(k){return k===null||j(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(lc,_,C)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(k))}function d(k){return k===null||j(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):K(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ee(e,p,"whitespace")(k)):k===96&&k===u?t(k):(e.consume(k),d)}function p(k){return k===null||j(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===null||j(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===u?t(k):(e.consume(k),x)}function _(k){return e.attempt(i,C,L)(k)}function L(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),h}function h(k){return l>0&&K(k)?ee(e,m,"linePrefix",l+1)(k):m(k)}function m(k){return k===null||j(k)?e.check(lc,_,C)(k):(e.enter("codeFlowValue"),y(k))}function y(k){return k===null||j(k)?(e.exit("codeFlowValue"),m(k)):(e.consume(k),y)}function C(k){return e.exit("codeFenced"),n(k)}function T(k,O,R){let B=0;return I;function I(b){return k.enter("lineEnding"),k.consume(b),k.exit("lineEnding"),z}function z(b){return k.enter("codeFencedFence"),K(b)?ee(k,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):N(b)}function N(b){return b===u?(k.enter("codeFencedFenceSequence"),G(b)):R(b)}function G(b){return b===u?(B++,k.consume(b),G):B>=o?(k.exit("codeFencedFenceSequence"),K(b)?ee(k,le,"whitespace")(b):le(b)):R(b)}function le(b){return b===null||j(b)?(k.exit("codeFencedFence"),O(b)):R(b)}}}function Jy(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const lo={name:"codeIndented",tokenize:e1},Zy={partial:!0,tokenize:n1};function e1(e,n,t){const r=this;return i;function i(s){return e.enter("codeIndented"),ee(e,l,"linePrefix",5)(s)}function l(s){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(s):t(s)}function o(s){return s===null?a(s):j(s)?e.attempt(Zy,o,a)(s):(e.enter("codeFlowValue"),u(s))}function u(s){return s===null||j(s)?(e.exit("codeFlowValue"),o(s)):(e.consume(s),u)}function a(s){return e.exit("codeIndented"),n(s)}}function n1(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):j(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):ee(e,l,"linePrefix",5)(o)}function l(o){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):j(o)?i(o):t(o)}}const t1={name:"codeText",previous:i1,resolve:r1,tokenize:l1};function r1(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function i1(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function l1(e,n,t){let r=0,i,l;return o;function o(f){return e.enter("codeText"),e.enter("codeTextSequence"),u(f)}function u(f){return f===96?(e.consume(f),r++,u):(e.exit("codeTextSequence"),a(f))}function a(f){return f===null?t(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),a):f===96?(l=e.enter("codeTextSequence"),i=0,c(f)):j(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),a):(e.enter("codeTextData"),s(f))}function s(f){return f===null||f===32||f===96||j(f)?(e.exit("codeTextData"),a(f)):(e.consume(f),s)}function c(f){return f===96?(e.consume(f),i++,c):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(f)):(l.type="codeTextData",s(f))}}class o1{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&hr(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),hr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),hr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);hr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);hr(this.left,t.reverse())}}}function hr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function cd(e){const n={};let t=-1,r,i,l,o,u,a,s;const c=new o1(e);for(;++t<c.length;){for(;t in n;)t=n[t];if(r=c.get(t),t&&r[1].type==="chunkFlow"&&c.get(t-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,l=0,l<a.length&&a[l][1].type==="lineEndingBlank"&&(l+=2),l<a.length&&a[l][1].type==="content"))for(;++l<a.length&&a[l][1].type!=="content";)a[l][1].type==="chunkText"&&(a[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,u1(c,t)),t=n[t],s=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(o=c.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},u=c.slice(i,t),u.unshift(r),c.splice(i,t-i+1,u))}}return kn(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!s}function u1(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const l=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const u=o.events,a=[],s={};let c,f,d=-1,p=t,x=0,_=0;const L=[_];for(;p;){for(;e.get(++i)[1]!==p;);l.push(i),p._tokenizer||(c=r.sliceStream(p),p.next||c.push(null),f&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),f=p,p=p.next}for(p=t;++d<u.length;)u[d][0]==="exit"&&u[d-1][0]==="enter"&&u[d][1].type===u[d-1][1].type&&u[d][1].start.line!==u[d][1].end.line&&(_=d+1,L.push(_),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):L.pop(),d=L.length;d--;){const h=u.slice(L[d],L[d+1]),m=l.pop();a.push([m,m+h.length-1]),e.splice(m,2,h)}for(a.reverse(),d=-1;++d<a.length;)s[x+a[d][0]]=x+a[d][1],x+=a[d][1]-a[d][0]-1;return s}const a1={resolve:c1,tokenize:f1},s1={partial:!0,tokenize:p1};function c1(e){return cd(e),e}function f1(e,n){let t;return r;function r(u){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?l(u):j(u)?e.check(s1,o,l)(u):(e.consume(u),i)}function l(u){return e.exit("chunkContent"),e.exit("content"),n(u)}function o(u){return e.consume(u),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function p1(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ee(e,l,"linePrefix")}function l(o){if(o===null||j(o))return t(o);const u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function fd(e,n,t,r,i,l,o,u,a){const s=a||Number.POSITIVE_INFINITY;let c=0;return f;function f(h){return h===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(h),e.exit(l),d):h===null||h===32||h===41||pu(h)?t(h):(e.enter(r),e.enter(o),e.enter(u),e.enter("chunkString",{contentType:"string"}),_(h))}function d(h){return h===62?(e.enter(l),e.consume(h),e.exit(l),e.exit(i),e.exit(r),n):(e.enter(u),e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===62?(e.exit("chunkString"),e.exit(u),d(h)):h===null||h===60||j(h)?t(h):(e.consume(h),h===92?x:p)}function x(h){return h===60||h===62||h===92?(e.consume(h),p):p(h)}function _(h){return!c&&(h===null||h===41||je(h))?(e.exit("chunkString"),e.exit(u),e.exit(o),e.exit(r),n(h)):c<s&&h===40?(e.consume(h),c++,_):h===41?(e.consume(h),c--,_):h===null||h===32||h===40||pu(h)?t(h):(e.consume(h),h===92?L:_)}function L(h){return h===40||h===41||h===92?(e.consume(h),_):_(h)}}function pd(e,n,t,r,i,l){const o=this;let u=0,a;return s;function s(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(l),c}function c(p){return u>999||p===null||p===91||p===93&&!a||p===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(e.exit(l),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):j(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===null||p===91||p===93||j(p)||u++>999?(e.exit("chunkString"),c(p)):(e.consume(p),a||(a=!K(p)),p===92?d:f)}function d(p){return p===91||p===92||p===93?(e.consume(p),u++,f):f(p)}}function dd(e,n,t,r,i,l){let o;return u;function u(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),o=d===40?41:d,a):t(d)}function a(d){return d===o?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):(e.enter(l),s(d))}function s(d){return d===o?(e.exit(l),a(o)):d===null?t(d):j(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),ee(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===o||d===null||j(d)?(e.exit("chunkString"),s(d)):(e.consume(d),d===92?f:c)}function f(d){return d===o||d===92?(e.consume(d),c):c(d)}}function Fr(e,n){let t;return r;function r(i){return j(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):K(i)?ee(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const d1={name:"definition",tokenize:m1},h1={partial:!0,tokenize:g1};function m1(e,n,t){const r=this;let i;return l;function l(p){return e.enter("definition"),o(p)}function o(p){return pd.call(r,e,u,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function u(p){return i=$t(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),a):t(p)}function a(p){return je(p)?Fr(e,s)(p):s(p)}function s(p){return fd(e,c,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(h1,f,f)(p)}function f(p){return K(p)?ee(e,d,"whitespace")(p):d(p)}function d(p){return p===null||j(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function g1(e,n,t){return r;function r(u){return je(u)?Fr(e,i)(u):t(u)}function i(u){return dd(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function l(u){return K(u)?ee(e,o,"whitespace")(u):o(u)}function o(u){return u===null||j(u)?n(u):t(u)}}const y1={name:"hardBreakEscape",tokenize:v1};function v1(e,n,t){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return j(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const x1={name:"headingAtx",resolve:_1,tokenize:k1};function _1(e,n){let t=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},l={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},kn(e,r,t-r+1,[["enter",i,n],["enter",l,n],["exit",l,n],["exit",i,n]])),e}function k1(e,n,t){let r=0;return i;function i(c){return e.enter("atxHeading"),l(c)}function l(c){return e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&r++<6?(e.consume(c),o):c===null||je(c)?(e.exit("atxHeadingSequence"),u(c)):t(c)}function u(c){return c===35?(e.enter("atxHeadingSequence"),a(c)):c===null||j(c)?(e.exit("atxHeading"),n(c)):K(c)?ee(e,u,"whitespace")(c):(e.enter("atxHeadingText"),s(c))}function a(c){return c===35?(e.consume(c),a):(e.exit("atxHeadingSequence"),u(c))}function s(c){return c===null||c===35||je(c)?(e.exit("atxHeadingText"),u(c)):(e.consume(c),s)}}const C1=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],uc=["pre","script","style","textarea"],w1={concrete:!0,name:"htmlFlow",resolveTo:T1,tokenize:O1},S1={partial:!0,tokenize:P1},E1={partial:!0,tokenize:A1};function T1(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function O1(e,n,t){const r=this;let i,l,o,u,a;return s;function s(v){return c(v)}function c(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),f}function f(v){return v===33?(e.consume(v),d):v===47?(e.consume(v),l=!0,_):v===63?(e.consume(v),i=3,r.interrupt?n:g):vn(v)?(e.consume(v),o=String.fromCharCode(v),L):t(v)}function d(v){return v===45?(e.consume(v),i=2,p):v===91?(e.consume(v),i=5,u=0,x):vn(v)?(e.consume(v),i=4,r.interrupt?n:g):t(v)}function p(v){return v===45?(e.consume(v),r.interrupt?n:g):t(v)}function x(v){const me="CDATA[";return v===me.charCodeAt(u++)?(e.consume(v),u===me.length?r.interrupt?n:N:x):t(v)}function _(v){return vn(v)?(e.consume(v),o=String.fromCharCode(v),L):t(v)}function L(v){if(v===null||v===47||v===62||je(v)){const me=v===47,rn=o.toLowerCase();return!me&&!l&&uc.includes(rn)?(i=1,r.interrupt?n(v):N(v)):C1.includes(o.toLowerCase())?(i=6,me?(e.consume(v),h):r.interrupt?n(v):N(v)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(v):l?m(v):y(v))}return v===45||$e(v)?(e.consume(v),o+=String.fromCharCode(v),L):t(v)}function h(v){return v===62?(e.consume(v),r.interrupt?n:N):t(v)}function m(v){return K(v)?(e.consume(v),m):I(v)}function y(v){return v===47?(e.consume(v),I):v===58||v===95||vn(v)?(e.consume(v),C):K(v)?(e.consume(v),y):I(v)}function C(v){return v===45||v===46||v===58||v===95||$e(v)?(e.consume(v),C):T(v)}function T(v){return v===61?(e.consume(v),k):K(v)?(e.consume(v),T):y(v)}function k(v){return v===null||v===60||v===61||v===62||v===96?t(v):v===34||v===39?(e.consume(v),a=v,O):K(v)?(e.consume(v),k):R(v)}function O(v){return v===a?(e.consume(v),a=null,B):v===null||j(v)?t(v):(e.consume(v),O)}function R(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||je(v)?T(v):(e.consume(v),R)}function B(v){return v===47||v===62||K(v)?y(v):t(v)}function I(v){return v===62?(e.consume(v),z):t(v)}function z(v){return v===null||j(v)?N(v):K(v)?(e.consume(v),z):t(v)}function N(v){return v===45&&i===2?(e.consume(v),pe):v===60&&i===1?(e.consume(v),ce):v===62&&i===4?(e.consume(v),$):v===63&&i===3?(e.consume(v),g):v===93&&i===5?(e.consume(v),D):j(v)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(S1,Y,G)(v)):v===null||j(v)?(e.exit("htmlFlowData"),G(v)):(e.consume(v),N)}function G(v){return e.check(E1,le,Y)(v)}function le(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),b}function b(v){return v===null||j(v)?G(v):(e.enter("htmlFlowData"),N(v))}function pe(v){return v===45?(e.consume(v),g):N(v)}function ce(v){return v===47?(e.consume(v),o="",F):N(v)}function F(v){if(v===62){const me=o.toLowerCase();return uc.includes(me)?(e.consume(v),$):N(v)}return vn(v)&&o.length<8?(e.consume(v),o+=String.fromCharCode(v),F):N(v)}function D(v){return v===93?(e.consume(v),g):N(v)}function g(v){return v===62?(e.consume(v),$):v===45&&i===2?(e.consume(v),g):N(v)}function $(v){return v===null||j(v)?(e.exit("htmlFlowData"),Y(v)):(e.consume(v),$)}function Y(v){return e.exit("htmlFlow"),n(v)}}function A1(e,n,t){const r=this;return i;function i(o){return j(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):t(o)}function l(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}function P1(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Al,n,t)}}const F1={name:"htmlText",tokenize:L1};function L1(e,n,t){const r=this;let i,l,o;return u;function u(g){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(g),a}function a(g){return g===33?(e.consume(g),s):g===47?(e.consume(g),T):g===63?(e.consume(g),y):vn(g)?(e.consume(g),R):t(g)}function s(g){return g===45?(e.consume(g),c):g===91?(e.consume(g),l=0,x):vn(g)?(e.consume(g),m):t(g)}function c(g){return g===45?(e.consume(g),p):t(g)}function f(g){return g===null?t(g):g===45?(e.consume(g),d):j(g)?(o=f,ce(g)):(e.consume(g),f)}function d(g){return g===45?(e.consume(g),p):f(g)}function p(g){return g===62?pe(g):g===45?d(g):f(g)}function x(g){const $="CDATA[";return g===$.charCodeAt(l++)?(e.consume(g),l===$.length?_:x):t(g)}function _(g){return g===null?t(g):g===93?(e.consume(g),L):j(g)?(o=_,ce(g)):(e.consume(g),_)}function L(g){return g===93?(e.consume(g),h):_(g)}function h(g){return g===62?pe(g):g===93?(e.consume(g),h):_(g)}function m(g){return g===null||g===62?pe(g):j(g)?(o=m,ce(g)):(e.consume(g),m)}function y(g){return g===null?t(g):g===63?(e.consume(g),C):j(g)?(o=y,ce(g)):(e.consume(g),y)}function C(g){return g===62?pe(g):y(g)}function T(g){return vn(g)?(e.consume(g),k):t(g)}function k(g){return g===45||$e(g)?(e.consume(g),k):O(g)}function O(g){return j(g)?(o=O,ce(g)):K(g)?(e.consume(g),O):pe(g)}function R(g){return g===45||$e(g)?(e.consume(g),R):g===47||g===62||je(g)?B(g):t(g)}function B(g){return g===47?(e.consume(g),pe):g===58||g===95||vn(g)?(e.consume(g),I):j(g)?(o=B,ce(g)):K(g)?(e.consume(g),B):pe(g)}function I(g){return g===45||g===46||g===58||g===95||$e(g)?(e.consume(g),I):z(g)}function z(g){return g===61?(e.consume(g),N):j(g)?(o=z,ce(g)):K(g)?(e.consume(g),z):B(g)}function N(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(e.consume(g),i=g,G):j(g)?(o=N,ce(g)):K(g)?(e.consume(g),N):(e.consume(g),le)}function G(g){return g===i?(e.consume(g),i=void 0,b):g===null?t(g):j(g)?(o=G,ce(g)):(e.consume(g),G)}function le(g){return g===null||g===34||g===39||g===60||g===61||g===96?t(g):g===47||g===62||je(g)?B(g):(e.consume(g),le)}function b(g){return g===47||g===62||je(g)?B(g):t(g)}function pe(g){return g===62?(e.consume(g),e.exit("htmlTextData"),e.exit("htmlText"),n):t(g)}function ce(g){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),F}function F(g){return K(g)?ee(e,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g):D(g)}function D(g){return e.enter("htmlTextData"),o(g)}}const Ca={name:"labelEnd",resolveAll:z1,resolveTo:N1,tokenize:D1},R1={tokenize:B1},M1={tokenize:j1},I1={tokenize:V1};function z1(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&kn(e,0,e.length,t),e}function N1(e,n){let t=e.length,r=0,i,l,o,u;for(;t--;)if(i=e[t][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const a={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return u=[["enter",a,n],["enter",s,n]],u=Je(u,e.slice(l+1,l+r+3)),u=Je(u,[["enter",c,n]]),u=Je(u,ka(n.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),n)),u=Je(u,[["exit",c,n],e[o-2],e[o-1],["exit",s,n]]),u=Je(u,e.slice(o+1)),u=Je(u,[["exit",a,n]]),kn(e,l,e.length,u),e}function D1(e,n,t){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return u;function u(d){return l?l._inactive?f(d):(o=r.parser.defined.includes($t(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),a):t(d)}function a(d){return d===40?e.attempt(R1,c,o?c:f)(d):d===91?e.attempt(M1,c,o?s:f)(d):o?c(d):f(d)}function s(d){return e.attempt(I1,c,f)(d)}function c(d){return n(d)}function f(d){return l._balanced=!0,t(d)}}function B1(e,n,t){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return je(f)?Fr(e,l)(f):l(f)}function l(f){return f===41?c(f):fd(e,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function o(f){return je(f)?Fr(e,a)(f):c(f)}function u(f){return t(f)}function a(f){return f===34||f===39||f===40?dd(e,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):c(f)}function s(f){return je(f)?Fr(e,c)(f):c(f)}function c(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),n):t(f)}}function j1(e,n,t){const r=this;return i;function i(u){return pd.call(r,e,l,o,"reference","referenceMarker","referenceString")(u)}function l(u){return r.parser.defined.includes($t(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(u):t(u)}function o(u){return t(u)}}function V1(e,n,t){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const U1={name:"labelStartImage",resolveAll:Ca.resolveAll,tokenize:H1};function H1(e,n,t){const r=this;return i;function i(u){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(u),e.exit("labelImageMarker"),l}function l(u){return u===91?(e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelImage"),o):t(u)}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):n(u)}}const b1={name:"labelStartLink",resolveAll:Ca.resolveAll,tokenize:W1};function W1(e,n,t){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const oo={name:"lineEnding",tokenize:$1};function $1(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ee(e,n,"linePrefix")}}const Ni={name:"thematicBreak",tokenize:Q1};function Q1(e,n,t){let r=0,i;return l;function l(s){return e.enter("thematicBreak"),o(s)}function o(s){return i=s,u(s)}function u(s){return s===i?(e.enter("thematicBreakSequence"),a(s)):r>=3&&(s===null||j(s))?(e.exit("thematicBreak"),n(s)):t(s)}function a(s){return s===i?(e.consume(s),r++,a):(e.exit("thematicBreakSequence"),K(s)?ee(e,u,"whitespace")(s):u(s))}}const Me={continuation:{tokenize:Y1},exit:J1,name:"list",tokenize:X1},K1={partial:!0,tokenize:Z1},G1={partial:!0,tokenize:q1};function X1(e,n,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(p){const x=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:du(p)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Ni,t,s)(p):s(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(p)}return t(p)}function a(p){return du(p)&&++o<10?(e.consume(p),a):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),s(p)):t(p)}function s(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Al,r.interrupt?t:c,e.attempt(K1,d,f))}function c(p){return r.containerState.initialBlankLine=!0,l++,d(p)}function f(p){return K(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),d):t(p)}function d(p){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Y1(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Al,i,l);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ee(e,n,"listItemIndent",r.containerState.size+1)(u)}function l(u){return r.containerState.furtherBlankLines||!K(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(G1,n,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,ee(e,e.attempt(Me,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function q1(e,n,t){const r=this;return ee(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(l):t(l)}}function J1(e){e.exit(this.containerState.type)}function Z1(e,n,t){const r=this;return ee(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!K(l)&&o&&o[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const ac={name:"setextUnderline",resolveTo:e0,tokenize:n0};function e0(e,n){let t=e.length,r,i,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,n]),e.splice(l+1,0,["exit",e[r][1],n]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,n]),e}function n0(e,n,t){const r=this;let i;return l;function l(s){let c=r.events.length,f;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){f=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=s,o(s)):t(s)}function o(s){return e.enter("setextHeadingLineSequence"),u(s)}function u(s){return s===i?(e.consume(s),u):(e.exit("setextHeadingLineSequence"),K(s)?ee(e,a,"lineSuffix")(s):a(s))}function a(s){return s===null||j(s)?(e.exit("setextHeadingLine"),n(s)):t(s)}}const t0={tokenize:r0};function r0(e){const n=this,t=e.attempt(Al,r,e.attempt(this.parser.constructs.flowInitial,i,ee(e,e.attempt(this.parser.constructs.flow,i,e.attempt(a1,i)),"linePrefix")));return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const i0={resolveAll:md()},l0=hd("string"),o0=hd("text");function hd(e){return{resolveAll:md(e==="text"?u0:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],l=t.attempt(i,o,u);return o;function o(c){return s(c)?l(c):u(c)}function u(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),a}function a(c){return s(c)?(t.exit("data"),l(c)):(t.consume(c),a)}function s(c){if(c===null)return!0;const f=i[c];let d=-1;if(f)for(;++d<f.length;){const p=f[d];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function md(e){return n;function n(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(t,r):t}}function u0(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let l=i.length,o=-1,u=0,a;for(;l--;){const s=i[l];if(typeof s=="string"){for(o=s.length;s.charCodeAt(o-1)===32;)u++,o--;if(o)break;o=-1}else if(s===-2)a=!0,u++;else if(s!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(u=0),u){const s={type:t===e.length||a||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-u,offset:r.end.offset-u},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(t,0,["enter",s,n],["exit",s,n]),t+=2)}t++}return e}const a0={42:Me,43:Me,45:Me,48:Me,49:Me,50:Me,51:Me,52:Me,53:Me,54:Me,55:Me,56:Me,57:Me,62:ud},s0={91:d1},c0={[-2]:lo,[-1]:lo,32:lo},f0={35:x1,42:Ni,45:[ac,Ni],60:w1,61:ac,95:Ni,96:oc,126:oc},p0={38:sd,92:ad},d0={[-5]:oo,[-4]:oo,[-3]:oo,33:U1,38:sd,42:hu,60:[by,F1],91:b1,92:[y1,ad],93:Ca,95:hu,96:t1},h0={null:[hu,i0]},m0={null:[42,95]},g0={null:[]},y0=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:m0,contentInitial:s0,disable:g0,document:a0,flow:f0,flowInitial:c0,insideSpan:h0,string:p0,text:d0},Symbol.toStringTag,{value:"Module"}));function v0(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let o=[],u=[];const a={attempt:O(T),check:O(k),consume:m,enter:y,exit:C,interrupt:O(k,{interrupt:!0})},s={code:null,containerState:{},defineSkip:_,events:[],now:x,parser:e,previous:null,sliceSerialize:d,sliceStream:p,write:f};let c=n.tokenize.call(s,a);return n.resolveAll&&l.push(n),s;function f(z){return o=Je(o,z),L(),o[o.length-1]!==null?[]:(R(n,0),s.events=ka(l,s.events,s),s.events)}function d(z,N){return _0(p(z),N)}function p(z){return x0(o,z)}function x(){const{_bufferIndex:z,_index:N,line:G,column:le,offset:b}=r;return{_bufferIndex:z,_index:N,line:G,column:le,offset:b}}function _(z){i[z.line]=z.column,I()}function L(){let z;for(;r._index<o.length;){const N=o[r._index];if(typeof N=="string")for(z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<N.length;)h(N.charCodeAt(r._bufferIndex));else h(N)}}function h(z){c=c(z)}function m(z){j(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,I()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=z}function y(z,N){const G=N||{};return G.type=z,G.start=x(),s.events.push(["enter",G,s]),u.push(G),G}function C(z){const N=u.pop();return N.end=x(),s.events.push(["exit",N,s]),N}function T(z,N){R(z,N.from)}function k(z,N){N.restore()}function O(z,N){return G;function G(le,b,pe){let ce,F,D,g;return Array.isArray(le)?Y(le):"tokenize"in le?Y([le]):$(le);function $(ne){return dn;function dn(In){const kt=In!==null&&ne[In],Ct=In!==null&&ne.null,ri=[...Array.isArray(kt)?kt:kt?[kt]:[],...Array.isArray(Ct)?Ct:Ct?[Ct]:[]];return Y(ri)(In)}}function Y(ne){return ce=ne,F=0,ne.length===0?pe:v(ne[F])}function v(ne){return dn;function dn(In){return g=B(),D=ne,ne.partial||(s.currentConstruct=ne),ne.name&&s.parser.constructs.disable.null.includes(ne.name)?rn():ne.tokenize.call(N?Object.assign(Object.create(s),N):s,a,me,rn)(In)}}function me(ne){return z(D,g),b}function rn(ne){return g.restore(),++F<ce.length?v(ce[F]):pe}}}function R(z,N){z.resolveAll&&!l.includes(z)&&l.push(z),z.resolve&&kn(s.events,N,s.events.length-N,z.resolve(s.events.slice(N),s)),z.resolveTo&&(s.events=z.resolveTo(s.events,s))}function B(){const z=x(),N=s.previous,G=s.currentConstruct,le=s.events.length,b=Array.from(u);return{from:le,restore:pe};function pe(){r=z,s.previous=N,s.currentConstruct=G,s.events.length=le,u=b,I()}}function I(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function x0(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,l=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,l)];else{if(o=e.slice(t,i),r>-1){const u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function _0(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const l=e[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function k0(e){const r={constructs:Ay([y0,...(e||{}).extensions||[]]),content:i(Ny),defined:[],document:i(By),flow:i(t0),lazy:{},string:i(l0),text:i(o0)};return r;function i(l){return o;function o(u){return v0(r,l,u)}}}function C0(e){for(;!cd(e););return e}const sc=/[\0\t\n\r]/g;function w0(){let e=1,n="",t=!0,r;return i;function i(l,o,u){const a=[];let s,c,f,d,p;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),f=0,n="",t&&(l.charCodeAt(0)===65279&&f++,t=void 0);f<l.length;){if(sc.lastIndex=f,s=sc.exec(l),d=s&&s.index!==void 0?s.index:l.length,p=l.charCodeAt(d),!s){n=l.slice(f);break}if(p===10&&f===d&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),f<d&&(a.push(l.slice(f,d)),e+=d-f),p){case 0:{a.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,a.push(-2);e++<c;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}f=d+1}return u&&(r&&a.push(-5),n&&a.push(n),a.push(null)),a}}const S0=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function E0(e){return e.replace(S0,T0)}function T0(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return od(t.slice(l?2:1),l?16:10)}return _a(t)||e}const gd={}.hasOwnProperty;function O0(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),A0(t)(C0(k0(t).document().write(w0()(e,n,!0))))}function A0(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(La),autolinkProtocol:B,autolinkEmail:B,atxHeading:l(Aa),blockQuote:l(Ct),characterEscape:B,characterReference:B,codeFenced:l(ri),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(ri,o),codeText:l(Ad,o),codeTextData:B,data:B,codeFlowValue:B,definition:l(Pd),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(Fd),hardBreakEscape:l(Pa),hardBreakTrailing:l(Pa),htmlFlow:l(Fa,o),htmlFlowData:B,htmlText:l(Fa,o),htmlTextData:B,image:l(Ld),label:o,link:l(La),listItem:l(Rd),listItemValue:d,listOrdered:l(Ra,f),listUnordered:l(Ra),paragraph:l(Md),reference:v,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(Aa),strong:l(Id),thematicBreak:l(Nd)},exit:{atxHeading:a(),atxHeadingSequence:T,autolink:a(),autolinkEmail:kt,autolinkProtocol:In,blockQuote:a(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:rn,characterReferenceMarkerNumeric:rn,characterReferenceValue:ne,characterReference:dn,codeFenced:a(L),codeFencedFence:_,codeFencedFenceInfo:p,codeFencedFenceMeta:x,codeFlowValue:I,codeIndented:a(h),codeText:a(b),codeTextData:I,data:I,definition:a(),definitionDestinationString:C,definitionLabelString:m,definitionTitleString:y,emphasis:a(),hardBreakEscape:a(N),hardBreakTrailing:a(N),htmlFlow:a(G),htmlFlowData:I,htmlText:a(le),htmlTextData:I,image:a(ce),label:D,labelText:F,lineEnding:z,link:a(pe),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:me,resourceDestinationString:g,resourceTitleString:$,resource:Y,setextHeading:a(R),setextHeadingLineSequence:O,setextHeadingText:k,strong:a(),thematicBreak:a()}};yd(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(w){let P={type:"root",children:[]};const V={stack:[P],tokenStack:[],config:n,enter:u,exit:s,buffer:o,resume:c,data:t},W=[];let q=-1;for(;++q<w.length;)if(w[q][1].type==="listOrdered"||w[q][1].type==="listUnordered")if(w[q][0]==="enter")W.push(q);else{const ln=W.pop();q=i(w,ln,q)}for(q=-1;++q<w.length;){const ln=n[w[q][0]];gd.call(ln,w[q][1].type)&&ln[w[q][1].type].call(Object.assign({sliceSerialize:w[q][2].sliceSerialize},V),w[q][1])}if(V.tokenStack.length>0){const ln=V.tokenStack[V.tokenStack.length-1];(ln[1]||cc).call(V,void 0,ln[0])}for(P.position={start:Nn(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:Nn(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<n.transforms.length;)P=n.transforms[q](P)||P;return P}function i(w,P,V){let W=P-1,q=-1,ln=!1,rt,Cn,ir,lr;for(;++W<=V;){const Ue=w[W];switch(Ue[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ue[0]==="enter"?q++:q--,lr=void 0;break}case"lineEndingBlank":{Ue[0]==="enter"&&(rt&&!lr&&!q&&!ir&&(ir=W),lr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:lr=void 0}if(!q&&Ue[0]==="enter"&&Ue[1].type==="listItemPrefix"||q===-1&&Ue[0]==="exit"&&(Ue[1].type==="listUnordered"||Ue[1].type==="listOrdered")){if(rt){let wt=W;for(Cn=void 0;wt--;){const wn=w[wt];if(wn[1].type==="lineEnding"||wn[1].type==="lineEndingBlank"){if(wn[0]==="exit")continue;Cn&&(w[Cn][1].type="lineEndingBlank",ln=!0),wn[1].type="lineEnding",Cn=wt}else if(!(wn[1].type==="linePrefix"||wn[1].type==="blockQuotePrefix"||wn[1].type==="blockQuotePrefixWhitespace"||wn[1].type==="blockQuoteMarker"||wn[1].type==="listItemIndent"))break}ir&&(!Cn||ir<Cn)&&(rt._spread=!0),rt.end=Object.assign({},Cn?w[Cn][1].start:Ue[1].end),w.splice(Cn||W,0,["exit",rt,Ue[2]]),W++,V++}if(Ue[1].type==="listItemPrefix"){const wt={type:"listItem",_spread:!1,start:Object.assign({},Ue[1].start),end:void 0};rt=wt,w.splice(W,0,["enter",wt,Ue[2]]),W++,V++,ir=void 0,lr=!0}}}return w[P][1]._spread=ln,V}function l(w,P){return V;function V(W){u.call(this,w(W),W),P&&P.call(this,W)}}function o(){this.stack.push({type:"fragment",children:[]})}function u(w,P,V){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([P,V||void 0]),w.position={start:Nn(P.start),end:void 0}}function a(w){return P;function P(V){w&&w.call(this,V),s.call(this,V)}}function s(w,P){const V=this.stack.pop(),W=this.tokenStack.pop();if(W)W[0].type!==w.type&&(P?P.call(this,w,W[0]):(W[1]||cc).call(this,w,W[0]));else throw new Error("Cannot close `"+w.type+"` ("+Pr({start:w.start,end:w.end})+"): it’s not open");V.position.end=Nn(w.end)}function c(){return Ty(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function d(w){if(this.data.expectingFirstListItemValue){const P=this.stack[this.stack.length-2];P.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0}}function p(){const w=this.resume(),P=this.stack[this.stack.length-1];P.lang=w}function x(){const w=this.resume(),P=this.stack[this.stack.length-1];P.meta=w}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function L(){const w=this.resume(),P=this.stack[this.stack.length-1];P.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const w=this.resume(),P=this.stack[this.stack.length-1];P.value=w.replace(/(\r?\n|\r)$/g,"")}function m(w){const P=this.resume(),V=this.stack[this.stack.length-1];V.label=P,V.identifier=$t(this.sliceSerialize(w)).toLowerCase()}function y(){const w=this.resume(),P=this.stack[this.stack.length-1];P.title=w}function C(){const w=this.resume(),P=this.stack[this.stack.length-1];P.url=w}function T(w){const P=this.stack[this.stack.length-1];if(!P.depth){const V=this.sliceSerialize(w).length;P.depth=V}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function O(w){const P=this.stack[this.stack.length-1];P.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function B(w){const V=this.stack[this.stack.length-1].children;let W=V[V.length-1];(!W||W.type!=="text")&&(W=zd(),W.position={start:Nn(w.start),end:void 0},V.push(W)),this.stack.push(W)}function I(w){const P=this.stack.pop();P.value+=this.sliceSerialize(w),P.position.end=Nn(w.end)}function z(w){const P=this.stack[this.stack.length-1];if(this.data.atHardBreak){const V=P.children[P.children.length-1];V.position.end=Nn(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(P.type)&&(B.call(this,w),I.call(this,w))}function N(){this.data.atHardBreak=!0}function G(){const w=this.resume(),P=this.stack[this.stack.length-1];P.value=w}function le(){const w=this.resume(),P=this.stack[this.stack.length-1];P.value=w}function b(){const w=this.resume(),P=this.stack[this.stack.length-1];P.value=w}function pe(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=P,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function ce(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=P,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function F(w){const P=this.sliceSerialize(w),V=this.stack[this.stack.length-2];V.label=E0(P),V.identifier=$t(P).toLowerCase()}function D(){const w=this.stack[this.stack.length-1],P=this.resume(),V=this.stack[this.stack.length-1];if(this.data.inReference=!0,V.type==="link"){const W=w.children;V.children=W}else V.alt=P}function g(){const w=this.resume(),P=this.stack[this.stack.length-1];P.url=w}function $(){const w=this.resume(),P=this.stack[this.stack.length-1];P.title=w}function Y(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function me(w){const P=this.resume(),V=this.stack[this.stack.length-1];V.label=P,V.identifier=$t(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full"}function rn(w){this.data.characterReferenceType=w.type}function ne(w){const P=this.sliceSerialize(w),V=this.data.characterReferenceType;let W;V?(W=od(P,V==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):W=_a(P);const q=this.stack[this.stack.length-1];q.value+=W}function dn(w){const P=this.stack.pop();P.position.end=Nn(w.end)}function In(w){I.call(this,w);const P=this.stack[this.stack.length-1];P.url=this.sliceSerialize(w)}function kt(w){I.call(this,w);const P=this.stack[this.stack.length-1];P.url="mailto:"+this.sliceSerialize(w)}function Ct(){return{type:"blockquote",children:[]}}function ri(){return{type:"code",lang:null,meta:null,value:""}}function Ad(){return{type:"inlineCode",value:""}}function Pd(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Fd(){return{type:"emphasis",children:[]}}function Aa(){return{type:"heading",depth:0,children:[]}}function Pa(){return{type:"break"}}function Fa(){return{type:"html",value:""}}function Ld(){return{type:"image",title:null,url:"",alt:null}}function La(){return{type:"link",title:null,url:"",children:[]}}function Ra(w){return{type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function Rd(w){return{type:"listItem",spread:w._spread,checked:null,children:[]}}function Md(){return{type:"paragraph",children:[]}}function Id(){return{type:"strong",children:[]}}function zd(){return{type:"text",value:""}}function Nd(){return{type:"thematicBreak"}}}function Nn(e){return{line:e.line,column:e.column,offset:e.offset}}function yd(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?yd(e,r):P0(e,r)}}function P0(e,n){let t;for(t in n)if(gd.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function cc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Pr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Pr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Pr({start:n.start,end:n.end})+") is still open")}function F0(e){const n=this;n.parser=t;function t(r){return O0(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function L0(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function R0(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function M0(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(l.data={meta:n.meta}),e.patch(n,l),l=e.applyData(n,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(n,l),l}function I0(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function z0(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function N0(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=rr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,u=e.footnoteCounts.get(r);u===void 0?(u=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,u+=1,e.footnoteCounts.set(r,u);const a={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(u>1?"-"+u:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,a);const s={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(n,s),e.applyData(n,s)}function D0(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function B0(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function vd(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function j0(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return vd(e,n);const i={src:rr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,l),e.applyData(n,l)}function V0(e,n){const t={src:rr(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function U0(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function H0(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return vd(e,n);const i={href:rr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function b0(e,n){const t={href:rr(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function W0(e,n,t){const r=e.all(n),i=t?$0(t):xd(n),l={},o=[];if(typeof n.checked=="boolean"){const c=r[0];let f;c&&c.type==="element"&&c.tagName==="p"?f=c:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let u=-1;for(;++u<r.length;){const c=r[u];(i||u!==0||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?o.push(...c.children):o.push(c)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&o.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:l,children:o};return e.patch(n,s),e.applyData(n,s)}function $0(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=xd(t[r])}return n}function xd(e){const n=e.spread;return n??e.children.length>1}function Q0(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,l),e.applyData(n,l)}function K0(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function G0(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function X0(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Y0(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},u=ga(n.children[1]),a=Zp(n.children[n.children.length-1]);u&&a&&(o.position={start:u,end:a}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,l),e.applyData(n,l)}function q0(e,n,t){const r=t?t.children:void 0,l=(r?r.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,u=o?o.length:n.children.length;let a=-1;const s=[];for(;++a<u;){const f=n.children[a],d={},p=o?o[a]:void 0;p&&(d.align=p);let x={type:"element",tagName:l,properties:d,children:[]};f&&(x.children=e.all(f),e.patch(f,x),x=e.applyData(f,x)),s.push(x)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(n,c),e.applyData(n,c)}function J0(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const fc=9,pc=32;function Z0(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const l=[];for(;r;)l.push(dc(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return l.push(dc(n.slice(i),i>0,!1)),l.join("")}function dc(e,n,t){let r=0,i=e.length;if(n){let l=e.codePointAt(r);for(;l===fc||l===pc;)r++,l=e.codePointAt(r)}if(t){let l=e.codePointAt(i-1);for(;l===fc||l===pc;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function ev(e,n){const t={type:"text",value:Z0(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function nv(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const tv={blockquote:L0,break:R0,code:M0,delete:I0,emphasis:z0,footnoteReference:N0,heading:D0,html:B0,imageReference:j0,image:V0,inlineCode:U0,linkReference:H0,link:b0,listItem:W0,list:Q0,paragraph:K0,root:G0,strong:X0,table:Y0,tableCell:J0,tableRow:q0,text:ev,thematicBreak:nv,toml:ki,yaml:ki,definition:ki,footnoteDefinition:ki};function ki(){}const _d=-1,Pl=0,Lr=1,sl=2,wa=3,Sa=4,Ea=5,Ta=6,kd=7,Cd=8,hc=typeof self=="object"?self:globalThis,rv=(e,n)=>{const t=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=n[i];switch(l){case Pl:case _d:return t(o,i);case Lr:{const u=t([],i);for(const a of o)u.push(r(a));return u}case sl:{const u=t({},i);for(const[a,s]of o)u[r(a)]=r(s);return u}case wa:return t(new Date(o),i);case Sa:{const{source:u,flags:a}=o;return t(new RegExp(u,a),i)}case Ea:{const u=t(new Map,i);for(const[a,s]of o)u.set(r(a),r(s));return u}case Ta:{const u=t(new Set,i);for(const a of o)u.add(r(a));return u}case kd:{const{name:u,message:a}=o;return t(new hc[u](a),i)}case Cd:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:u}=new Uint8Array(o);return t(new DataView(u),o)}}return t(new hc[l](o),i)};return r},mc=e=>rv(new Map,e)(0),Et="",{toString:iv}={},{keys:lv}=Object,mr=e=>{const n=typeof e;if(n!=="object"||!e)return[Pl,n];const t=iv.call(e).slice(8,-1);switch(t){case"Array":return[Lr,Et];case"Object":return[sl,Et];case"Date":return[wa,Et];case"RegExp":return[Sa,Et];case"Map":return[Ea,Et];case"Set":return[Ta,Et];case"DataView":return[Lr,t]}return t.includes("Array")?[Lr,t]:t.includes("Error")?[kd,t]:[sl,t]},Ci=([e,n])=>e===Pl&&(n==="function"||n==="symbol"),ov=(e,n,t,r)=>{const i=(o,u)=>{const a=r.push(o)-1;return t.set(u,a),a},l=o=>{if(t.has(o))return t.get(o);let[u,a]=mr(o);switch(u){case Pl:{let c=o;switch(a){case"bigint":u=Cd,c=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+a);c=null;break;case"undefined":return i([_d],o)}return i([u,c],o)}case Lr:{if(a){let d=o;return a==="DataView"?d=new Uint8Array(o.buffer):a==="ArrayBuffer"&&(d=new Uint8Array(o)),i([a,[...d]],o)}const c=[],f=i([u,c],o);for(const d of o)c.push(l(d));return f}case sl:{if(a)switch(a){case"BigInt":return i([a,o.toString()],o);case"Boolean":case"Number":case"String":return i([a,o.valueOf()],o)}if(n&&"toJSON"in o)return l(o.toJSON());const c=[],f=i([u,c],o);for(const d of lv(o))(e||!Ci(mr(o[d])))&&c.push([l(d),l(o[d])]);return f}case wa:return i([u,o.toISOString()],o);case Sa:{const{source:c,flags:f}=o;return i([u,{source:c,flags:f}],o)}case Ea:{const c=[],f=i([u,c],o);for(const[d,p]of o)(e||!(Ci(mr(d))||Ci(mr(p))))&&c.push([l(d),l(p)]);return f}case Ta:{const c=[],f=i([u,c],o);for(const d of o)(e||!Ci(mr(d)))&&c.push(l(d));return f}}const{message:s}=o;return i([u,{name:a,message:s}],o)};return l},gc=(e,{json:n,lossy:t}={})=>{const r=[];return ov(!(n||t),!!n,new Map,r)(e),r},cl=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?mc(gc(e,n)):structuredClone(e):(e,n)=>mc(gc(e,n));function uv(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function av(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function sv(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||uv,r=e.options.footnoteBackLabel||av,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},u=[];let a=-1;for(;++a<e.footnoteOrder.length;){const s=e.footnoteById.get(e.footnoteOrder[a]);if(!s)continue;const c=e.all(s),f=String(s.identifier).toUpperCase(),d=rr(f.toLowerCase());let p=0;const x=[],_=e.footnoteCounts.get(f);for(;_!==void 0&&++p<=_;){x.length>0&&x.push({type:"text",value:" "});let m=typeof t=="string"?t:t(a,p);typeof m=="string"&&(m={type:"text",value:m}),x.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+d+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const L=c[c.length-1];if(L&&L.type==="element"&&L.tagName==="p"){const m=L.children[L.children.length-1];m&&m.type==="text"?m.value+=" ":L.children.push({type:"text",value:" "}),L.children.push(...x)}else c.push(...x);const h={type:"element",tagName:"li",properties:{id:n+"fn-"+d},children:e.wrap(c,!0)};e.patch(s,h),u.push(h)}if(u.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...cl(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(u,!0)},{type:"text",value:`
`}]}}const wd=function(e){if(e==null)return dv;if(typeof e=="function")return Fl(e);if(typeof e=="object")return Array.isArray(e)?cv(e):fv(e);if(typeof e=="string")return pv(e);throw new Error("Expected function, string, or object as test")};function cv(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=wd(e[t]);return Fl(r);function r(...i){let l=-1;for(;++l<n.length;)if(n[l].apply(this,i))return!0;return!1}}function fv(e){const n=e;return Fl(t);function t(r){const i=r;let l;for(l in e)if(i[l]!==n[l])return!1;return!0}}function pv(e){return Fl(n);function n(t){return t&&t.type===e}}function Fl(e){return n;function n(t,r,i){return!!(hv(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function dv(){return!0}function hv(e){return e!==null&&typeof e=="object"&&"type"in e}const Sd=[],mv=!0,yc=!1,gv="skip";function yv(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const l=wd(i),o=r?-1:1;u(e,void 0,[])();function u(a,s,c){const f=a&&typeof a=="object"?a:{};if(typeof f.type=="string"){const p=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(a.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=Sd,x,_,L;if((!n||l(a,s,c[c.length-1]||void 0))&&(p=vv(t(a,c)),p[0]===yc))return p;if("children"in a&&a.children){const h=a;if(h.children&&p[0]!==gv)for(_=(r?h.children.length:-1)+o,L=c.concat(h);_>-1&&_<h.children.length;){const m=h.children[_];if(x=u(m,_,L)(),x[0]===yc)return x;_=typeof x[1]=="number"?x[1]:_+o}}return p}}}function vv(e){return Array.isArray(e)?e:typeof e=="number"?[mv,e]:e==null?Sd:[e]}function Ed(e,n,t,r){let i,l,o;typeof n=="function"&&typeof t!="function"?(l=void 0,o=n,i=t):(l=n,o=t,i=r),yv(e,l,u,i);function u(a,s){const c=s[s.length-1],f=c?c.children.indexOf(a):void 0;return o(a,f,c)}}const mu={}.hasOwnProperty,xv={};function _v(e,n){const t=n||xv,r=new Map,i=new Map,l=new Map,o={...tv,...t.handlers},u={all:s,applyData:Cv,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:a,options:t,patch:kv,wrap:Sv};return Ed(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const f=c.type==="definition"?r:i,d=String(c.identifier).toUpperCase();f.has(d)||f.set(d,c)}}),u;function a(c,f){const d=c.type,p=u.handlers[d];if(mu.call(u.handlers,d)&&p)return p(u,c,f);if(u.options.passThrough&&u.options.passThrough.includes(d)){if("children"in c){const{children:_,...L}=c,h=cl(L);return h.children=u.all(c),h}return cl(c)}return(u.options.unknownHandler||wv)(u,c,f)}function s(c){const f=[];if("children"in c){const d=c.children;let p=-1;for(;++p<d.length;){const x=u.one(d[p],c);if(x){if(p&&d[p-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=vc(x.value)),!Array.isArray(x)&&x.type==="element")){const _=x.children[0];_&&_.type==="text"&&(_.value=vc(_.value))}Array.isArray(x)?f.push(...x):f.push(x)}}}return f}}function kv(e,n){e.position&&(n.position=iy(e))}function Cv(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&l&&Object.assign(t.properties,cl(l)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function wv(e,n){const t=n.data||{},r="value"in n&&!(mu.call(t,"hProperties")||mu.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Sv(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function vc(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function xc(e,n){const t=_v(e,n),r=t.one(e,void 0),i=sv(t),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function Ev(e,n){return e&&"run"in e?async function(t,r){const i=xc(t,{file:r,...n});await e.run(i,r)}:function(t,r){return xc(t,{file:r,...e||n})}}function _c(e){if(e)throw e}var Di=Object.prototype.hasOwnProperty,Td=Object.prototype.toString,kc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,wc=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Td.call(n)==="[object Array]"},Sc=function(n){if(!n||Td.call(n)!=="[object Object]")return!1;var t=Di.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Di.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||Di.call(n,i)},Ec=function(n,t){kc&&t.name==="__proto__"?kc(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},Tc=function(n,t){if(t==="__proto__")if(Di.call(n,t)){if(Cc)return Cc(n,t).value}else return;return n[t]},Tv=function e(){var n,t,r,i,l,o,u=arguments[0],a=1,s=arguments.length,c=!1;for(typeof u=="boolean"&&(c=u,u=arguments[1]||{},a=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});a<s;++a)if(n=arguments[a],n!=null)for(t in n)r=Tc(u,t),i=Tc(n,t),u!==i&&(c&&i&&(Sc(i)||(l=wc(i)))?(l?(l=!1,o=r&&wc(r)?r:[]):o=r&&Sc(r)?r:{},Ec(u,{name:t,newValue:e(c,o,i)})):typeof i<"u"&&Ec(u,{name:t,newValue:i}));return u};const uo=vu(Tv);function gu(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Ov(){const e=[],n={run:t,use:r};return n;function t(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);u(null,...i);function u(a,...s){const c=e[++l];let f=-1;if(a){o(a);return}for(;++f<i.length;)(s[f]===null||s[f]===void 0)&&(s[f]=i[f]);i=s,c?Av(c,u)(...s):o(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function Av(e,n){let t;return r;function r(...o){const u=e.length>o.length;let a;u&&o.push(i);try{a=e.apply(this,o)}catch(s){const c=s;if(u&&t)throw c;return i(c)}u||(a&&a.then&&typeof a.then=="function"?a.then(l,i):a instanceof Error?i(a):l(a))}function i(o,...u){t||(t=!0,n(o,...u))}function l(o){i(null,o)}}const gn={basename:Pv,dirname:Fv,extname:Lv,join:Rv,sep:"/"};function Pv(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');ti(e);let t=0,r=-1,i=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,u=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else o<0&&(l=!0,o=i+1),u>-1&&(e.codePointAt(i)===n.codePointAt(u--)?u<0&&(r=i):(u=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function Fv(e){if(ti(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Lv(e){ti(e);let n=e.length,t=-1,r=0,i=-1,l=0,o;for(;n--;){const u=e.codePointAt(n);if(u===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),u===46?i<0?i=n:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function Rv(...e){let n=-1,t;for(;++n<e.length;)ti(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Mv(t)}function Mv(e){ti(e);const n=e.codePointAt(0)===47;let t=Iv(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Iv(e,n){let t="",r=0,i=-1,l=0,o=-1,u,a;for(;++o<=e.length;){if(o<e.length)u=e.codePointAt(o);else{if(u===47)break;u=47}if(u===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(a=t.lastIndexOf("/"),a!==t.length-1){a<0?(t="",r=0):(t=t.slice(0,a),r=t.length-1-t.lastIndexOf("/")),i=o,l=0;continue}}else if(t.length>0){t="",r=0,i=o,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,l=0}else u===46&&l>-1?l++:l=-1}return t}function ti(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const zv={cwd:Nv};function Nv(){return"/"}function yu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Dv(e){if(typeof e=="string")e=new URL(e);else if(!yu(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Bv(e)}function Bv(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const ao=["history","path","basename","stem","extname","dirname"];class Od{constructor(n){let t;n?yu(n)?t={path:n}:typeof n=="string"||jv(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":zv.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ao.length;){const l=ao[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)ao.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?gn.basename(this.path):void 0}set basename(n){co(n,"basename"),so(n,"basename"),this.path=gn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?gn.dirname(this.path):void 0}set dirname(n){Oc(this.basename,"dirname"),this.path=gn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?gn.extname(this.path):void 0}set extname(n){if(so(n,"extname"),Oc(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=gn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){yu(n)&&(n=Dv(n)),co(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?gn.basename(this.path,this.extname):void 0}set stem(n){co(n,"stem"),so(n,"stem"),this.path=gn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Ae(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function so(e,n){if(e&&e.includes(gn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+gn.sep+"`")}function co(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Oc(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function jv(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Vv=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},Uv={}.hasOwnProperty;class Oa extends Vv{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Ov()}copy(){const n=new Oa;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(uo(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(ho("data",this.frozen),this.namespace[n]=t,this):Uv.call(this.namespace,n)&&this.namespace[n]||void 0:n?(ho("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=wi(n),r=this.parser||this.Parser;return fo("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),fo("process",this.parser||this.Parser),po("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,o){const u=wi(n),a=r.parse(u);r.run(a,u,function(c,f,d){if(c||!f||!d)return s(c);const p=f,x=r.stringify(p,d);Wv(x)?d.value=x:d.result=x,s(c,d)});function s(c,f){c||!f?o(c):l?l(f):t(void 0,f)}}}processSync(n){let t=!1,r;return this.freeze(),fo("processSync",this.parser||this.Parser),po("processSync",this.compiler||this.Compiler),this.process(n,i),Pc("processSync","process",t),r;function i(l,o){t=!0,_c(l),r=o}}run(n,t,r){Ac(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(o,u){const a=wi(t);i.run(n,a,s);function s(c,f,d){const p=f||n;c?u(c):o?o(p):r(void 0,p,d)}}}runSync(n,t){let r=!1,i;return this.run(n,t,l),Pc("runSync","run",r),i;function l(o,u){_c(o),i=u,r=!0}}stringify(n,t){this.freeze();const r=wi(t),i=this.compiler||this.Compiler;return po("stringify",i),Ac(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(ho("use",this.frozen),n!=null)if(typeof n=="function")a(n,t);else if(typeof n=="object")Array.isArray(n)?u(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(s){if(typeof s=="function")a(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[c,...f]=s;a(c,f)}else o(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function o(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(s.plugins),s.settings&&(i.settings=uo(!0,i.settings,s.settings))}function u(s){let c=-1;if(s!=null)if(Array.isArray(s))for(;++c<s.length;){const f=s[c];l(f)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function a(s,c){let f=-1,d=-1;for(;++f<r.length;)if(r[f][0]===s){d=f;break}if(d===-1)r.push([s,...c]);else if(c.length>0){let[p,...x]=c;const _=r[d][1];gu(_)&&gu(p)&&(p=uo(!0,_,p)),r[d]=[s,p,...x]}}}}const Hv=new Oa().freeze();function fo(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function po(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ho(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ac(e){if(!gu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Pc(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function wi(e){return bv(e)?e:new Od(e)}function bv(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Wv(e){return typeof e=="string"||$v(e)}function $v(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Qv="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Fc=[],Lc={allowDangerousHtml:!0},Kv=/^(https?|ircs?|mailto|xmpp)$/i,Gv=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Xv(e){const n=Yv(e),t=qv(e);return Jv(n.runSync(n.parse(t),t),e)}function Yv(e){const n=e.rehypePlugins||Fc,t=e.remarkPlugins||Fc,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Lc}:Lc;return Hv().use(F0).use(t).use(Ev,r).use(n)}function qv(e){const n=e.children||"",t=new Od;return typeof n=="string"&&(t.value=n),t}function Jv(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,l=n.disallowedElements,o=n.skipHtml,u=n.unwrapDisallowed,a=n.urlTransform||Zv;for(const c of Gv)Object.hasOwn(n,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+Qv+c.id,void 0);return Ed(e,s),sy(e,{Fragment:A.Fragment,components:i,ignoreInvalidStyle:!0,jsx:A.jsx,jsxs:A.jsxs,passKeys:!0,passNode:!0});function s(c,f,d){if(c.type==="raw"&&d&&typeof f=="number")return o?d.children.splice(f,1):d.children[f]={type:"text",value:c.value},f;if(c.type==="element"){let p;for(p in io)if(Object.hasOwn(io,p)&&Object.hasOwn(c.properties,p)){const x=c.properties[p],_=io[p];(_===null||_.includes(c.tagName))&&(c.properties[p]=a(String(x||""),p,c))}}if(c.type==="element"){let p=t?!t.includes(c.tagName):l?l.includes(c.tagName):!1;if(!p&&r&&typeof f=="number"&&(p=!r(c,f,d)),p&&d&&typeof f=="number")return u&&c.children?d.children.splice(f,1,...c.children):d.children.splice(f,1),f}}}function Zv(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||Kv.test(e.slice(0,n))?e:""}function ex({chapterId:e}){const[n,t]=ve.useState([]),[r,i]=ve.useState(""),[l,o]=ve.useState(""),[u,a]=ve.useState(""),[s,c]=ve.useState(""),[f,d]=ve.useState(0),[p,x]=ve.useState(0);ve.useEffect(()=>{const m=localStorage.getItem(`comments_${e}`);t(m?JSON.parse(m):[]),_()},[e]);const _=()=>{d(Math.floor(Math.random()*10)+1),x(Math.floor(Math.random()*10)+1),c("")},L=m=>{const y=Math.floor((new Date-new Date(m))/1e3);let C=y/31536e3;return C>1?Math.floor(C)+"년 전":(C=y/2592e3,C>1?Math.floor(C)+"개월 전":(C=y/86400,C>1?Math.floor(C)+"일 전":(C=y/3600,C>1?Math.floor(C)+"시간 전":(C=y/60,C>1?Math.floor(C)+"분 전":"방금 전"))))},h=m=>{if(m.preventDefault(),parseInt(s)!==f+p){alert("자동방지 문자의 정답이 틀렸습니다. 다시 시도해주세요."),_();return}if(!r.trim()||!l.trim()||!u.trim()){alert("닉네임, 비밀번호, 내용을 모두 입력해주세요.");return}const y={id:Date.now().toString(),nickname:r.trim(),password:l.trim(),content:u.trim(),createdAt:new Date().toISOString()},C=[...n,y];t(C),localStorage.setItem(`comments_${e}`,JSON.stringify(C)),i(""),o(""),a(""),_()};return A.jsxs("div",{style:{marginTop:"60px",borderTop:"1px solid var(--border-color)",paddingTop:"40px"},children:[A.jsxs("h3",{style:{fontSize:"20px",fontWeight:"700",color:"var(--color-text-title)",marginBottom:"24px"},children:["댓글 ",A.jsx("span",{style:{color:"var(--color-primary)"},children:n.length})]}),A.jsxs("form",{onSubmit:h,style:{backgroundColor:"var(--color-surface)",padding:"24px",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-sm)",marginBottom:"40px"},children:[A.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[A.jsx("input",{type:"text",placeholder:"닉네임",value:r,onChange:m=>i(m.target.value),style:{flex:1,padding:"12px 16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",fontSize:"14px",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s"},required:!0}),A.jsx("input",{type:"password",placeholder:"비밀번호",value:l,onChange:m=>o(m.target.value),style:{flex:1,padding:"12px 16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",fontSize:"14px",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s"},required:!0})]}),A.jsx("textarea",{placeholder:"주제와 무관한 댓글이나 악플은 삭제될 수 있습니다.",value:u,onChange:m=>a(m.target.value),style:{width:"100%",height:"100px",padding:"16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",fontSize:"15px",fontFamily:"inherit",resize:"vertical",outline:"none",marginBottom:"16px",transition:"border-color 0.2s"},required:!0}),A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[A.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[A.jsxs("span",{style:{fontSize:"14px",color:"var(--color-text-body)",fontWeight:"500"},children:["자동등록방지: ",f," + ",p," ="]}),A.jsx("input",{type:"number",value:s,onChange:m=>c(m.target.value),style:{width:"60px",padding:"8px 12px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",fontSize:"14px",fontFamily:"inherit",outline:"none"},required:!0})]}),A.jsx("button",{type:"submit",className:"toss-btn",style:{padding:"10px 24px"},children:"등록"})]})]}),A.jsx("div",{children:n.length===0?A.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"15px",textAlign:"center",padding:"40px 0"},children:"첫 번째 댓글을 남겨보세요."}):n.map(m=>A.jsxs("div",{style:{padding:"24px 0",borderBottom:"1px solid var(--border-color)"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[A.jsx("span",{style:{fontWeight:"600",fontSize:"15px",color:"var(--color-text-title)"},children:m.nickname}),A.jsx("span",{style:{fontSize:"13px",color:"var(--color-text-muted)"},children:L(m.createdAt)})]}),A.jsx("p",{style:{color:"var(--color-text-body)",fontSize:"15px",lineHeight:"1.6",whiteSpace:"pre-wrap"},children:m.content})]},m.id))})]})}function nx({chapter:e,prevChapter:n,nextChapter:t,onNavigate:r}){return e?A.jsxs("div",{style:{paddingBottom:"80px",animation:"fadeIn 0.3s ease-in-out"},children:[A.jsx("header",{style:{marginBottom:"40px"},children:A.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",color:"var(--color-text-title)",letterSpacing:"-0.02em",lineHeight:"1.3"},children:e.title})}),e.subChapters&&e.subChapters.map((i,l)=>A.jsxs("section",{className:"toss-card",children:[A.jsx("h2",{style:{fontSize:"22px",fontWeight:"600",color:"var(--color-primary)",marginBottom:"20px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:i.title}),A.jsx("div",{className:"markdown-body",style:{fontSize:"16px",color:"var(--color-text-body)",lineHeight:"1.7",whiteSpace:"pre-line"},children:A.jsx(Xv,{children:i.content})})]},l)),A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"60px",marginBottom:"60px",borderTop:"1px solid var(--border-color)",paddingTop:"32px"},children:[A.jsx("div",{style:{flex:1},children:n&&A.jsxs("button",{onClick:()=>r(n),className:"toss-nav-btn",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",textAlign:"left"},children:[A.jsx("span",{style:{fontSize:"13px",color:"var(--color-text-muted)",marginBottom:"4px",fontWeight:"500"},children:"이전 글"}),A.jsx("span",{style:{fontSize:"16px",color:"var(--color-primary)",fontWeight:"600"},children:n.title})]})}),A.jsx("div",{style:{flex:1,display:"flex",justifyContent:"flex-end"},children:t&&A.jsxs("button",{onClick:()=>r(t),className:"toss-nav-btn",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right"},children:[A.jsx("span",{style:{fontSize:"13px",color:"var(--color-text-muted)",marginBottom:"4px",fontWeight:"500"},children:"다음 글"}),A.jsx("span",{style:{fontSize:"16px",color:"var(--color-primary)",fontWeight:"600"},children:t.title})]})})]}),A.jsx(ex,{chapterId:e.title}),A.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .markdown-body {
          word-break: break-word;
          overflow-wrap: break-word;
          width: 100%;
        }
        .markdown-body pre {
          overflow-x: auto;
          max-width: 100%;
        }
        .markdown-body img, .markdown-body video {
          max-width: 100%;
          height: auto;
        }
        .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4 {
          color: var(--color-text-title);
          margin-top: 24px;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .markdown-body p {
          margin-bottom: 16px;
        }
        .markdown-body ul, .markdown-body ol {
          margin-bottom: 16px;
          padding-left: 24px;
        }
        .markdown-body li {
          margin-bottom: 8px;
        }
        .markdown-body strong {
          color: var(--color-text-title);
          font-weight: 700;
        }
        .markdown-body blockquote {
          border-left: 4px solid var(--color-primary);
          padding-left: 16px;
          color: var(--color-text-muted);
          background-color: rgba(49, 130, 246, 0.04);
          padding: 12px 16px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 16px;
        }
        .toss-nav-btn {
          background-color: transparent;
          padding: 16px 20px;
          border-radius: var(--radius-sm);
          transition: background-color 0.2s ease, transform 0.1s ease;
          width: 100%;
          max-width: 300px;
        }
        .toss-nav-btn:hover {
          background-color: rgba(49, 130, 246, 0.06);
          transform: translateY(-2px);
        }
      `})]}):A.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:A.jsx("p",{style:{color:"var(--color-text-muted)",fontSize:"18px"},children:"왼쪽 메뉴에서 문서를 선택해주세요."})})}const it=[{title:"서문",chapters:[{title:"소개",subChapters:[{title:"서문: 왜 이 세 가지를 함께 이해해야 하는가",content:`
마케팅 실무 현장에서 가장 자주 목격되는 오류는, 퍼널·CRM·브랜딩을 각각 독립된 영역으로 취급하는 것이다. 퍼포먼스 마케터는 ROAS와 CPA에 집중하며 "브랜딩은 대기업의 사치"라고 말하고, 브랜드 담당자는 "퍼포먼스 광고는 브랜드를 소비할 뿐"이라고 주장한다. CRM 담당자는 기존 고객 데이터베이스 안에서 오픈율과 전환율만 바라본다. 세 팀은 서로 다른 언어를 쓰고, 서로 다른 성과 지표를 본다.

그러나 소비자의 구매 여정은 이 세 영역을 가로지르며 하나의 연속된 경험으로 이루어진다. 처음 광고를 보고 브랜드를 인지하고(브랜딩), 제품을 탐색하며 비교하고(퍼널), 구매 후 재방문하거나 이탈한다(CRM). 이 흐름을 분절된 채로 운영하면 반드시 비효율이 발생한다. 신규 고객을 높은 CAC로 유치하지만 LTV가 낮아 수익이 나지 않거나, CRM 메시지를 발송해도 브랜드 각인이 없어 오픈조차 되지 않거나, 브랜딩 투자를 해도 퍼널 하단이 막혀 전환이 일어나지 않는 상황이 그 결과다.

이 책은 D2C(Direct to Consumer) 브랜드와 퍼포먼스 마케팅 환경을 주된 맥락으로 삼는다. D2C 구조에서는 브랜드가 미디어를 직접 운영하고, 고객 데이터를 직접 소유하며, 퍼널의 전 단계를 스스로 설계해야 한다. 그 때문에 퍼널·CRM·브랜딩의 통합적 이해가 다른 어떤 비즈니스 모델보다 절실하다.

이 책이 제안하는 핵심 관점은 다음과 같다.

첫째, 퍼널은 단순한 광고 집행 구조가 아니라 고객의 심리 여정을 설계하는 틀이다. 퍼널의 각 단계에서 소비자가 무엇을 생각하고, 무엇을 필요로 하는지를 이해해야 올바른 소재와 메시지를 배치할 수 있다.

둘째, CRM은 이메일과 문자 발송 도구가 아니라 고객 생애 가치를 극대화하는 전략 체계다. 고객을 세분화하고, 라이프사이클 단계에 맞는 커뮤니케이션을 자동화하며, 장기적인 관계를 구축하는 것이 CRM의 본질이다.

셋째, 브랜딩은 퍼포먼스 광고와 대립하지 않는다. 오히려 브랜딩이 탄탄할수록 퍼포먼스 광고의 효율이 높아지고, CRM 효과도 커진다. 브랜딩은 신뢰의 자산이며, 이 자산이 쌓일수록 CAC는 낮아지고 LTV는 올라간다.

이 책을 읽고 나면 세 영역을 통합된 하나의 시스템으로 설계하고 운영할 수 있는 사고 체계와 실행 도구를 갖추게 될 것이다.


`}]}]},{title:"PART 1: 마케팅 퍼널",chapters:[{title:"Chapter 1. 퍼널의 본질",subChapters:[{title:"1-1. 퍼널이란 무엇인가",content:`
퍼널(Funnel)은 불특정 다수의 잠재 고객이 실제 구매 고객으로 전환되는 과정을 시각화한 개념적 틀이다. 깔때기 모양에서 이름이 유래했다. 위에는 넓은 인지층이 존재하고, 단계가 내려갈수록 관심이 있는 사람, 구매를 고려하는 사람, 실제로 구매하는 사람의 순으로 숫자가 줄어든다.

퍼널의 본질적 가치는 "어디서 사람이 빠져나가는가"를 구조적으로 파악할 수 있다는 데 있다. 매출이 부진할 때 그 원인이 인지 부족인지, 설득 실패인지, 구매 과정의 마찰인지를 구분하지 못하면 처방을 잘못 내리게 된다. 퍼널은 이 진단 도구로서 기능한다.

퍼포먼스 마케팅 맥락에서 퍼널은 단순한 개념이 아니라 광고 집행, 소재 제작, 예산 배분, 성과 측정의 실질적 기준이 된다. TOF(Top of Funnel), MOF(Middle of Funnel), BOF(Bottom of Funnel)라는 세 레이어는 각각 다른 목적, 다른 소재, 다른 지표를 요구한다. 이 구분을 이해하지 못한 채 광고를 운영하면, 전환 광고만 돌리다가 인지층이 고갈되거나, 브랜드 광고만 집행하다가 매출이 나지 않는 상황에 빠진다.

`},{title:"1-2. AIDA에서 현대 풀퍼널까지 (역사적 변천)",content:`
퍼널 개념의 기원은 1898년 광고 선구자 엘리어스 세인트 엘모 루이스(Elias St. Elmo Lewis)가 제안한 AIDA 모델로 거슬러 올라간다. AIDA는 Attention(주목) - Interest(관심) - Desire(욕구) - Action(행동)의 4단계로 소비자의 심리 여정을 설명했다. 이 모델은 직관적이고 명쾌하여 100년 이상 마케팅의 기본 언어로 사용되었다.

디지털 광고 시대가 도래하면서 퍼널 모델은 진화했다. 2000년대 초반 검색 광고와 디스플레이 광고가 등장하면서 각 단계를 측정하고 추적할 수 있게 되었다. 이때 등장한 것이 전통적인 3단계 퍼널: 인지(Awareness) - 고려(Consideration) - 전환(Conversion)이다. 이 구조는 오늘날 대부분의 퍼포먼스 마케팅 플랫폼(Meta, Google)의 캠페인 목표 설정 방식과 정확히 일치한다.

2010년대 이후 소셜 미디어와 콘텐츠 마케팅이 성장하면서 구매 이후 단계의 중요성이 부각되었다. 구매 후 리뷰, 재구매, 추천이 다시 퍼널 상단(TOF)으로 피드백되는 구조가 생겨났다. 이를 반영한 것이 맥킨지가 2009년 제안한 고객 의사결정 여정(Consumer Decision Journey) 모델이다. 이 모델은 선형 퍼널 대신 초기 고려군 형성 - 능동적 평가 - 구매 - 구매 후 경험 - 충성도 루프로 이어지는 순환 구조를 제시했다.

현대의 풀퍼널(Full-Funnel) 접근은 인지부터 재구매·추천까지 전 단계를 하나의 통합된 시스템으로 운영한다. TOF로 신규 인지를 만들고, MOF에서 설득하며, BOF에서 전환하고, 전환 이후 CRM으로 재구매를 유도하는 구조다. 이 책에서 다루는 퍼널·CRM·브랜딩의 통합 프레임워크는 바로 이 풀퍼널 개념을 실무에 적용하는 방법론이다.

`},{title:"1-3. 선형 퍼널의 한계와 루프형 퍼널",content:`
전통적인 선형 퍼널(Linear Funnel)은 소비자가 인지 → 고려 → 구매의 순서를 직선으로 통과한다고 가정한다. 이 관점에서는 광고를 보고 클릭하고 구매하는 단순한 경로만 존재한다.

그러나 현실의 소비자 행동은 훨씬 복잡하다. 인스타그램 광고를 보고 브랜드를 인지한 소비자는 곧바로 구매하지 않는다. 며칠 후 유튜브에서 리뷰 영상을 보고, 네이버에서 브랜드명을 검색하고, 블로그 후기를 읽고, 다시 인스타그램 리타겟팅 광고를 보고 나서야 구매를 결정한다. 이 과정에서 소비자는 퍼널을 앞뒤로 오가며, 여러 채널을 횡단한다.

루프형 퍼널(Loop Funnel)은 이 현실을 반영한다. 구매한 고객이 리뷰를 남기고, 그 리뷰가 새로운 잠재 고객의 인지와 설득에 기여하는 순환 구조다. D2C 브랜드에서 이 루프는 특히 강력하다. 충성 고객이 SNS에 자발적으로 공유하는 UGC(User Generated Content)는 가장 효율적인 TOF 소재가 된다.

루프형 퍼널 관점에서 마케터가 해야 할 일이 달라진다. 단순히 광고비를 써서 신규 고객을 유치하는 것에 그치지 않고, 기존 고객의 경험을 설계하여 그들이 스스로 브랜드 전파자가 되도록 해야 한다. LTV가 높은 고객을 만드는 것이 곧 CAC를 낮추는 방법이 된다.

실무적으로 루프형 퍼널을 운영하려면 세 가지가 필요하다. 첫째, 구매 후 경험 설계(온보딩, 패키징, 초기 커뮤니케이션). 둘째, 리뷰와 UGC를 수집하고 광고 소재로 활용하는 시스템. 셋째, 재구매를 유도하는 CRM 자동화. 이 세 가지가 갖추어질 때 퍼널은 단순한 깔때기가 아니라 성장하는 루프가 된다.

`},{title:"1-4. 퍼널을 보는 두 가지 관점: 사업자 vs 소비자",content:`
퍼널을 설계할 때 가장 중요한 출발점은 관점의 전환이다. 사업자는 자신의 제품을 팔고 싶다는 목적에서 출발하지만, 소비자는 자신의 문제를 해결하고 싶다는 필요에서 출발한다.

사업자 관점의 퍼널은 단계별 전환율 최적화에 집중한다. "TOF에서 MOF로 몇 퍼센트가 이동하는가", "장바구니 이탈율을 어떻게 낮출 것인가" 같은 질문이다. 이는 필요한 질문이지만, 소비자 심리를 무시하면 답을 찾기 어렵다.

소비자 관점의 퍼널은 각 단계에서 소비자가 무엇을 생각하고, 무엇을 걱정하며, 무엇이 필요한지를 먼저 묻는다. TOF 단계의 소비자는 이 브랜드가 무엇인지 모른다. MOF 단계의 소비자는 "이 브랜드가 나에게 맞는가"를 평가한다. BOF 단계의 소비자는 "지금 사는 것이 옳은가"를 최종 판단한다. 각 단계에서 소비자의 질문에 답하는 소재와 메시지를 설계하는 것이 퍼널 설계의 핵심이다.

실전에서 이 두 관점을 통합하는 방법은 고객 여정 지도(Customer Journey Map)를 작성하는 것이다. 소비자가 처음 브랜드를 접하는 순간부터 구매, 재구매에 이르기까지의 각 접점에서 소비자가 느끼는 감정, 갖는 의문, 필요로 하는 정보를 명시한다. 이 지도가 완성되면 각 단계에서 어떤 광고 소재, 어떤 랜딩 페이지, 어떤 CRM 메시지가 필요한지 자연스럽게 도출된다.

**체크포인트**
- 퍼널은 진단 도구이자 설계 도구다. 전환이 막힌 단계를 찾아라.
- 선형이 아닌 루프형으로 퍼널을 이해하라. 기존 고객이 신규 고객을 만든다.
- 소비자 관점에서 각 단계의 질문에 답하는 소재를 설계하라.


`}]},{title:"Chapter 2. TOF (Top of Funnel) — 인지와 브랜딩 레이어",subChapters:[{title:"2-1. TOF의 목적과 오해",content:`
TOF(Top of Funnel)의 목적은 단 하나다. 브랜드를 모르는 사람에게 브랜드의 존재를 인식시키는 것. 그러나 이 단순한 목적을 둘러싼 오해가 많다.

가장 흔한 오해는 "TOF 광고는 돈 낭비"라는 인식이다. ROAS를 직접 측정하기 어렵고, 즉각적인 전환이 발생하지 않기 때문이다. 예산이 제한된 스타트업이나 초기 D2C 브랜드에서 이 오해는 특히 강하다. 모든 예산을 BOF(전환 광고)에 쏟아붓고, 인지층 고갈이 오면 "광고 효율이 떨어졌다"고 말한다.

그러나 BOF 광고가 효과를 내려면 먼저 TOF에서 브랜드를 인지한 잠재 고객 풀이 존재해야 한다. 이 풀이 없으면 리타겟팅 모수가 부족해지고, 새로운 전환을 만들 수 없게 된다. TOF는 BOF의 연료다.

두 번째 오해는 "TOF는 도달과 노출만 중요하다"는 생각이다. 도달(Reach)과 노출(Impression)은 필요조건이지 충분조건이 아니다. 노출되었더라도 소비자의 기억에 남지 않으면 의미가 없다. TOF 소재는 단순히 많이 보여지는 것이 아니라, 브랜드의 핵심 메시지와 이미지를 기억에 각인시키는 역할을 해야 한다.

세 번째 오해는 TOF와 브랜딩을 동일시하는 것이다. TOF는 퍼널의 위치를 말하는 것이고, 브랜딩은 메시지의 성격을 말하는 것이다. TOF 광고에도 퍼포먼스 요소(명확한 가치 제안, 클릭 유도)가 필요하고, BOF 광고에도 브랜딩 요소(신뢰감, 일관된 톤)가 있어야 한다.

`},{title:"2-2. TOF 소재 기준 (무엇을 담아야 하는가)",content:`
TOF 소재는 처음 보는 사람에게 말을 거는 소재다. 이미 브랜드를 아는 사람에게 할인 쿠폰을 보여주는 방식은 TOF에서 작동하지 않는다. TOF 소재 설계의 핵심 기준은 다음과 같다.

첫째, 훅(Hook)이 1~3초 안에 작동해야 한다. 피드를 스크롤하는 소비자는 0.5초 안에 멈출지 여부를 결정한다. TOF 소재는 처음 1~3초 안에 소비자가 "이게 뭐지?" 또는 "이거 나 이야기인데?"라는 반응을 끌어내야 한다. 훅의 형태는 다양하다. 강렬한 시각적 대비, 공감 가는 문제 제기, 예상치 못한 주장, 직접적인 질문 등이 효과적이다.

둘째, 브랜드 가치 제안(Value Proposition)이 명확해야 한다. TOF 소재는 "이 브랜드는 무엇을 위한 브랜드인가"를 30초 안에 전달해야 한다. 복잡한 제품 스펙 설명보다 "이 브랜드는 OOO 문제를 해결한다" 또는 "이 브랜드는 OOO를 위한 브랜드다"라는 명확한 포지셔닝 메시지가 더 효과적이다.

셋째, 브랜드 아이덴티티가 일관되게 나타나야 한다. 색상, 폰트, 톤앤매너가 다른 광고 소재와 일관되어야 노출이 쌓이면서 브랜드가 기억에 남는다. 소재마다 다른 스타일을 사용하면 노출이 아무리 많아도 브랜드 각인이 일어나지 않는다.

넷째, 직접적인 구매 유도는 최소화하거나 부드럽게 처리한다. TOF 소비자는 아직 구매 의도가 없다. 강한 CTA(지금 구매하기, 오늘만 할인)는 TOF에서 오히려 반감을 살 수 있다. 대신 "더 알아보기", "브랜드 스토리 보기" 같은 낮은 허들의 CTA가 적합하다.

TOF 소재 유형으로는 브랜드 스토리 영상, 문제-해결 구조의 숏폼 영상, 라이프스타일 이미지, 제품 탄생 배경 스토리, 창업자 메시지 등이 효과적이다.

`},{title:"2-3. TOF에서 브랜딩이 쌓이는 메커니즘",content:`
브랜딩이 쌓이는 과정은 반복 노출과 기억 연합(Memory Association)의 원리로 설명된다. 소비자가 동일한 브랜드의 광고를 여러 번, 여러 형태로 접하면서 브랜드 이름, 색상, 슬로건, 제품 카테고리 사이의 연합이 형성된다. 이것이 쌓이면 소비자는 "○○이 필요할 때 ○○ 브랜드"라는 자동적 연상을 갖게 된다.

이 메커니즘의 핵심은 일관성과 빈도다. 같은 브랜드 요소(색상, 슬로건, 톤)가 반복적으로 노출될 때 기억 연합이 강화된다. 이때 TOF 광고의 역할은 단순히 인지를 만드는 것이 아니라, "이 브랜드 = 이 가치"라는 연합을 기억에 새기는 것이다.

광고심리학자 바이런 샤프(Byron Sharp)는 그의 저서 "How Brands Grow"에서 이를 "멘탈 어베일러빌리티(Mental Availability)"라고 명명했다. 소비자가 구매를 결정하는 순간, 가장 먼저 떠오르는 브랜드가 되는 것이 브랜딩의 궁극적 목표다. 이 상태에 도달하려면 충분한 노출과 일관된 메시지의 반복이 필요하다.

실무에서 이 메커니즘을 활용하려면, TOF 소재를 만들 때 "이 소재가 100번 노출되었을 때 소비자의 기억에 무엇이 남는가"를 먼저 질문해야 한다. 제품 기능이 남는가, 브랜드 색상이 남는가, 브랜드의 세계관이 남는가. 기억에 남길 것을 먼저 정하고, 소재를 역방향으로 설계해야 한다.

`},{title:"2-4. 측정 지표: 도달, CPM, 영상 완료율, 브랜드 검색량",content:`
TOF의 성과를 측정하는 지표는 전환 중심이 아니라 노출과 참여 중심이다. 주요 지표는 다음과 같다.

**도달(Reach):** 고유한 사람 수 기준으로 광고가 노출된 수. 단순 노출(Impression)과 다르다. 같은 사람에게 10번 노출되면 노출은 10이지만 도달은 1이다. TOF에서는 최대한 많은 새로운 사람에게 닿는 것이 목표이므로 도달이 핵심 지표다.

**CPM(Cost Per Mille):** 1,000회 노출당 비용. TOF 효율성의 기본 지표. 동일한 예산으로 얼마나 많은 노출을 만들 수 있는가를 측정한다. CPM은 시즌, 타겟, 경쟁 강도에 따라 크게 달라진다.

**영상 완료율(Video Completion Rate):** TOF 소재가 영상인 경우, 25%, 50%, 75%, 100% 지점까지 시청한 비율. 완료율이 높다는 것은 소재가 소비자의 주의를 유지하는 데 성공했다는 의미다. 3초 뷰율(Hook Rate)과 함께 소재의 흡입력을 판단하는 핵심 지표다.

**브랜드 검색량:** Google Trends, 네이버 데이터랩 등에서 브랜드 키워드의 검색량 추이를 추적한다. TOF 광고 집행 이후 브랜드 검색량이 증가하면 인지 효과가 실제로 발생했다는 증거다. 이는 광고 플랫폼 내부 지표로는 측정할 수 없는 오프플랫폼 효과를 간접적으로 확인하는 방법이다.

**주파수(Frequency):** 동일한 사람이 광고를 본 평균 횟수. TOF에서 주파수가 너무 낮으면(1~2회) 기억에 남지 않고, 너무 높으면(10회 이상) 광고 피로도가 발생한다. 일반적으로 TOF에서 주 3~5회 노출이 적정 범위로 알려져 있으나, 소재 품질에 따라 달라진다.

`},{title:"2-5. TOF 예산 배분 기준",content:`
TOF 예산의 적정 비율은 브랜드의 성장 단계, 카테고리 인지도, 경쟁 강도에 따라 달라진다. 일반적인 권장 기준은 다음과 같다.

초기 브랜드(월 광고비 300만원 미만): TOF 20~30%, MOF 30%, BOF 40~50%. 제한된 예산에서 TOF를 완전히 배제하면 모수 고갈이 빠르게 온다. 최소한의 TOF 투자로 인지층을 유지해야 한다.

성장 단계 브랜드(월 광고비 500만~2,000만원): TOF 30~40%, MOF 25~30%, BOF 30~40%. 이 시기에 TOF에 투자하면 모수가 충분히 쌓여 MOF/BOF 효율이 자연스럽게 높아진다.

스케일업 단계(월 광고비 2,000만원 이상): TOF 40~50%, MOF 20~25%, BOF 25~35%. 규모가 커질수록 신규 인지층 확보가 병목이 된다. 이미 브랜드를 아는 사람들에게만 반복 광고하면 효율이 급격히 떨어진다.

이 비율은 절대적인 기준이 아니다. 브랜드 검색량 추이, 리타겟팅 모수의 크기, 리타겟팅 소재의 주파수를 지속적으로 모니터링하면서 동적으로 조정해야 한다.

**체크포인트**
- TOF는 BOF의 연료다. TOF 없이는 전환 모수가 고갈된다.
- 훅 1~3초, 가치 제안 30초 이내, 부드러운 CTA가 TOF 소재의 기준이다.
- 브랜드 검색량을 TOF 효과의 간접 지표로 추적하라.
- 예산 비율은 성장 단계에 따라 동적으로 조정하라.


`}]},{title:"Chapter 3. MOF (Middle of Funnel) — 고려와 설득 레이어",subChapters:[{title:"3-1. MOF의 역할: 브랜드를 선택지로 만들기",content:`
MOF(Middle of Funnel)는 브랜드를 이미 한 번 이상 접한 소비자를 대상으로 하는 단계다. 이 소비자들은 브랜드의 존재를 알지만, 아직 구매를 결정하지 않았다. MOF의 과제는 브랜드를 소비자의 "구매 고려 목록(Consideration Set)"에 포함시키는 것이다.

소비자는 카테고리 내 수십 개의 브랜드 중에서 실제로 구매를 검토하는 브랜드를 3~5개로 압축한다. 이 고려군에 들어가지 못하면 아무리 광고 노출이 많아도 구매로 이어지지 않는다. MOF는 바로 이 진입 관문을 통과하는 단계다.

MOF의 핵심 질문은 소비자의 관점에서 다음과 같다. "이 브랜드가 나에게 왜 맞는가?", "다른 브랜드와 뭐가 다른가?", "이 브랜드를 믿어도 되는가?" MOF 소재와 메시지는 이 세 가지 질문에 답해야 한다.

D2C 맥락에서 MOF는 주로 리타겟팅 광고, 제품 상세 페이지 최적화, 이메일/카카오 채널을 통한 콘텐츠 마케팅, 인플루언서 리뷰 콘텐츠 등을 통해 작동한다.

`},{title:"3-2. 소셜 증거(Social Proof)의 원리와 활용",content:`
소셜 증거(Social Proof)는 심리학자 로버트 치알디니(Robert Cialdini)가 "설득의 심리학"에서 제시한 개념으로, 사람들이 불확실한 상황에서 다른 사람들의 행동을 기준으로 판단한다는 원리다. "다른 사람들이 많이 샀으니 좋을 것이다", "전문가가 추천하니 믿을 만하다"는 방식으로 작동한다.

MOF에서 소셜 증거는 가장 강력한 설득 도구다. 브랜드 자체의 주장보다 실제 사용자의 경험이 훨씬 신뢰를 얻기 때문이다. 소셜 증거의 종류와 활용 방법은 다음과 같다.

**고객 리뷰와 별점:** 가장 기본적인 소셜 증거. 숫자(총 리뷰 수, 평균 별점)와 구체적인 텍스트 리뷰 모두 중요하다. MOF 광고 소재에 "5,000개 리뷰, 평균 4.8점"을 표시하는 것만으로도 전환율이 크게 달라진다. 구체적인 문제-해결 구조의 리뷰("○○ 문제가 있었는데 이 제품으로 해결됐어요")가 특히 효과적이다.

**UGC(User Generated Content):** 실제 고객이 자발적으로 작성한 콘텐츠. 인스타그램 사진, 유튜브 언박싱 영상, 블로그 후기 등. UGC는 브랜드가 직접 만든 소재보다 신뢰도가 높다. 이를 수집하고, 허가를 받아, 광고 소재로 재활용하는 시스템이 필요하다.

**인플루언서 추천:** 특정 분야의 신뢰를 받는 인플루언서가 브랜드를 사용하고 추천하는 콘텐츠. 팔로워 수보다 해당 인플루언서와 타겟 소비자의 맥락 일치가 중요하다. 뷰티 브랜드라면 대형 연예인보다 실제 뷰티 루틴을 공유하는 마이크로 인플루언서가 더 효과적인 경우가 많다.

**수치와 사례:** "○○만 명이 사용", "재구매율 ○○%", "누적 판매 ○○개" 등의 구체적 수치. 숫자는 추상적 주장보다 신뢰를 쉽게 만든다. 단, 과장되거나 검증 불가능한 수치는 오히려 신뢰를 해친다.

**언론/미디어 언급:** "○○ 매거진 추천", "○○ 방송 출연" 등의 외부 검증. 특히 초기 브랜드에서 언론 노출은 강력한 신뢰 요소가 된다.

`},{title:"3-3. 리타겟팅과 MOF의 관계",content:`
리타겟팅(Retargeting)은 브랜드 사이트를 방문했거나 TOF 광고를 본 소비자를 다시 타겟팅하는 기법이다. MOF의 가장 핵심적인 실행 도구가 바로 리타겟팅이다.

리타겟팅이 효과적인 이유는 소비자가 이미 브랜드에 대한 최소한의 인지를 가지고 있기 때문이다. 처음 보는 사람에게 구매를 요청하는 것보다, 이미 관심을 보인 사람에게 추가 정보를 제공하고 설득하는 것이 훨씬 효율적이다.

MOF 리타겟팅의 핵심은 소비자가 어느 단계까지 브랜드를 경험했는지에 따라 다른 메시지를 보내는 것이다.

- 광고 시청 25~75% 완료: 제품의 핵심 가치를 더 구체적으로 설명하는 소재
- 사이트 방문(상품 페이지 미도달): 베스트셀러 제품 소개 또는 카테고리 안내
- 상품 페이지 방문: 해당 제품의 상세 리뷰, 사용 후기 중심 소재
- 장바구니 추가 후 이탈: BOF로 분류하여 할인/혜택 소재

이 세분화가 이루어지지 않으면 리타겟팅은 "이미 구매한 사람에게 또 광고하기"라는 비효율 또는 "장바구니에 담았는데 일반 제품 광고만 보이는" 부적절한 경험으로 이어진다.

`},{title:"3-4. MOF 소재 유형별 특성",content:`
**리뷰 영상 소재:** 실제 고객이 제품을 사용하고 결과를 보여주는 영상. 비포/애프터 구조가 효과적이다. 스크립트 없이 자연스럽게 이야기하는 형식이 신뢰감을 준다. 가능하면 UGC 스타일(직접 찍은 듯한 느낌)을 유지하는 것이 MOF에서 성과가 좋다.

**비교 소재:** "기존 제품 vs 우리 제품", "직접 비교 테스트" 형식. 소비자가 고려 단계에서 자연스럽게 하는 비교를 브랜드가 먼저 구조화하여 제시하는 방식. 단, 경쟁사를 직접 지목하는 방식은 법적 리스크와 역효과를 고려해야 한다.

**수치 중심 소재:** "97%가 재구매", "평균 평점 4.9/5.0", "한 달 만에 ○○ 달성" 등 구체적 수치를 전면에 배치한 소재. 헤드라인에서 즉각적인 신뢰를 만든다. 수치는 반드시 사실 기반이어야 하며, 맥락을 명확히 해야 한다.

**스토리 소재:** 실제 고객의 문제 상황 → 제품 발견 → 사용 → 변화를 내러티브로 풀어낸 소재. 60~90초 영상에 적합하다. 소비자가 자신의 상황과 동일시할 수 있는 페르소나를 중심에 두어야 한다.

**FAQ/반론 해소 소재:** "이런 걱정되시죠?"로 시작하여 소비자가 구매를 망설이는 이유를 직접 언급하고 해소하는 소재. "부작용은 없나요?", "환불이 어렵지 않나요?" 같은 실제 우려를 미리 다루면 BOF로의 이행을 촉진한다.

`},{title:"3-5. 측정 지표: CTR, 상세페이지 조회율, 장바구니 추가율",content:`
**CTR(Click-Through Rate):** 광고 노출 대비 클릭 비율. MOF에서는 TOF보다 높은 CTR이 기대된다. 이미 브랜드를 아는 소비자이기 때문이다. MOF CTR이 낮다면 소재가 해당 단계 소비자의 관심사에 맞지 않거나, 타겟팅이 잘못 설정된 것일 수 있다.

**상세 페이지 조회율:** 광고 클릭 후 상품 상세 페이지까지 도달하는 비율. 랜딩 페이지(광고 클릭 후 도달하는 첫 페이지)에서 상세 페이지로 이동하지 않으면 MOF 효과가 낮다는 신호다. 랜딩 페이지의 메시지 일관성과 로딩 속도를 점검해야 한다.

**장바구니 추가율:** 상세 페이지 방문자 중 장바구니에 제품을 추가하는 비율. 이 지표가 낮다면 상세 페이지의 설득력이 부족하거나, 가격/배송 조건에 저항이 있다는 신호다. 이 시점부터는 MOF와 BOF의 경계 구간이다.

**소셜 참여율(Engagement Rate):** 좋아요, 댓글, 공유 등의 참여. MOF 소재에 대한 소비자의 자발적 반응은 바이럴 가능성과 브랜드 호감도를 나타낸다. 특히 댓글의 내용을 질적으로 분석하면 소비자의 관심사와 우려를 파악할 수 있다.

**체크포인트**
- MOF의 목표는 브랜드를 구매 고려 목록에 포함시키는 것이다.
- 소셜 증거는 MOF의 핵심 무기. 리뷰, UGC, 수치를 적극 활용하라.
- 리타겟팅은 소비자의 브랜드 경험 단계에 따라 다른 메시지를 보내라.
- CTR과 장바구니 추가율을 함께 보면 MOF의 효과를 입체적으로 진단할 수 있다.


`}]},{title:"Chapter 4. BOF (Bottom of Funnel) — 전환 레이어",subChapters:[{title:"4-1. BOF의 목적과 흔한 실수",content:`
BOF(Bottom of Funnel)는 구매 의도가 있는 소비자를 실제 구매로 전환하는 단계다. 이미 제품을 알고, 구매를 고려하고, 장바구니에 담거나 사이트를 반복 방문한 소비자가 대상이다. BOF의 유일한 목적은 구매 결정을 촉진하는 것이다.

그러나 BOF에서도 흔한 실수들이 있다.

첫 번째 실수는 BOF 소재에 브랜딩 요소가 전혀 없는 것이다. "지금 50% 할인", "오늘만 특가"라는 메시지만 있는 소재는 단기적으로 전환을 만들 수 있지만, 장기적으로는 브랜드를 할인 브랜드로 인식시키는 부작용을 낳는다. 소비자는 항상 할인이 있을 것이라고 기대하게 되고, 정가 구매를 기피한다.

두 번째 실수는 BOF 타겟팅 모수를 너무 넓게 잡는 것이다. BOF 광고를 브랜드를 한 번도 접하지 않은 사람에게 노출하면 효율이 낮을 뿐만 아니라, 광고 예산 낭비가 발생한다. BOF는 반드시 사이트 방문, 장바구니 추가, 제품 페이지 조회 등 명확한 구매 의도 신호를 보인 소비자에게 집중해야 한다.

세 번째 실수는 단일 BOF 소재만 운영하는 것이다. 구매를 망설이는 이유는 소비자마다 다르다. 가격이 부담스러운 소비자, 품질이 불확실한 소비자, 배송이나 환불 정책이 걱정인 소비자 등 다양한 저항 요인이 있다. 하나의 소재가 모든 저항을 해소할 수 없다. 복수의 BOF 소재를 동시에 운영하며 어떤 메시지가 전환에 효과적인지 테스트해야 한다.

`},{title:"4-2. 오퍼(Offer) 설계: 긴박감, 혜택, CTA",content:`
BOF에서 오퍼(Offer)는 소비자가 "지금 당장 구매해야 할 이유"를 제공하는 것이다. 오퍼 설계의 세 가지 핵심 요소는 긴박감(Urgency), 혜택(Benefit), CTA(Call to Action)다.

**긴박감(Urgency):** "지금 사지 않으면 손해"라는 인식을 만드는 요소. 시간 제한("오늘 밤 12시까지"), 수량 제한("재고 5개 남음"), 조건 제한("이번 달 구매자에게만 적용") 등이 활용된다. 단, 긴박감은 사실에 기반해야 한다. 항상 카운트다운이 있고, 항상 품절 임박이면 소비자는 이를 신뢰하지 않게 된다.

**혜택(Benefit):** 구매를 결정하게 만드는 구체적 이점. 할인은 가장 직접적이지만, 가장 브랜드를 훼손하기도 쉬운 방식이다. 할인 대신 다음 대안을 고려하라. 추가 증정(사은품), 무료 배송, 번들 구성, 첫 구매 특전, 포인트 적립. 이러한 혜택은 가격 할인 없이도 구매 결정을 촉진하면서 브랜드 가치를 유지한다.

**CTA(Call to Action):** "지금 구매하기", "장바구니 담기", "무료 샘플 신청하기" 등 다음 행동을 명확하게 지시하는 문구. BOF CTA는 구체적이고 직접적이어야 한다. "자세히 알아보기"는 MOF 수준의 CTA이고, BOF에서는 "지금 구매하고 내일 받기"처럼 행동과 결과를 함께 명시하는 것이 효과적이다.

오퍼 설계 시 한 가지 주의점: 오퍼가 너무 강하면 브랜드 가치를 훼손하고, 너무 약하면 전환을 만들지 못한다. 브랜드의 포지셔닝(프리미엄 vs 가성비)에 맞는 오퍼를 설계해야 한다. 프리미엄 브랜드는 할인보다 가치 추가(사은품, 특별 패키지)를, 가성비 브랜드는 직접적인 가격 혜택을 활용한다.

`},{title:"4-3. 브랜딩을 BOF 소재에 내재화하는 방법",content:`
BOF 소재에서 브랜딩을 유지하면서 전환을 촉진하는 것은 어렵지만 반드시 해야 할 일이다. 브랜딩이 없는 BOF 소재는 단기 전환에는 효과적이지만, 장기적으로 브랜드를 단순한 거래 채널로 전락시킨다.

BOF 소재에 브랜딩을 내재화하는 구체적 방법은 다음과 같다.

첫째, 오퍼를 브랜드 이야기와 연결하라. "지금 구매 시 30% 할인"이 아니라 "○○ 브랜드 3주년 감사 세일: 30% 할인"처럼 브랜드 맥락을 부여한다. 소비자는 같은 할인이라도 이유가 있을 때 더 긍정적으로 받아들인다.

둘째, 브랜드 색상, 폰트, 톤을 BOF 소재에서도 일관되게 유지하라. 할인 소재라고 해서 빨간색 배경에 흰색 볼드 폰트만 쓰는 디자인은 브랜드 아이덴티티를 지운다. 브랜드의 색상 체계 안에서 긴박감을 표현하는 방법을 찾아야 한다.

셋째, BOF 소재에도 소셜 증거를 포함하라. "○○님이 방금 구매했습니다", "이번 달 ○○명이 구매" 등의 실시간 소셜 증거는 긴박감과 신뢰를 동시에 제공한다.

넷째, 마지막 구매 장벽을 직접 언급하라. "100% 환불 보장", "무료 반품", "첫 구매 후 맞지 않으면 전액 환불"처럼 구매 리스크를 제거하는 메시지는 브랜드의 자신감을 보여주면서 전환 장벽을 낮춘다.

`},{title:"4-4. 구매 결정을 방해하는 마찰 요소 제거",content:`
마찰(Friction)은 소비자가 구매를 완료하는 과정에서 불편하거나 불확실하게 느끼는 모든 요소를 말한다. BOF 최적화의 절반은 마찰 제거다.

**가격 마찰:** 예상보다 높은 총 금액(배송비, 세금 등이 추가될 때), 할부나 분납 옵션 부재, 결제 수단 제한 등. 배송비 무료 조건을 명확히 표시하고, 할부 옵션을 제공하는 것이 효과적이다.

**신뢰 마찰:** 처음 구매하는 브랜드에 대한 불신. 환불/반품 정책이 불명확하거나 복잡할 때, 고객 서비스 연락처가 없을 때 발생한다. 상세 페이지에 환불 정책, 고객센터 연락처, 실제 사무실 주소를 명확히 표시하라.

**정보 마찰:** 구매 결정에 필요한 정보가 부족할 때. 사이즈, 재질, 성분, 사용 방법 등이 불명확하면 소비자는 구매를 미룬다. 상세 페이지에서 자주 묻는 질문(FAQ)을 미리 답변하고, 가능하다면 실제 사용 영상을 포함하라.

**기술적 마찰:** 느린 페이지 로딩, 모바일 최적화 미흡, 복잡한 회원가입 프로세스, 결제 오류 등. 이는 분석 도구(GA4, Hotjar 등)로 측정 가능하다. 장바구니 이탈이 결제 페이지에서 집중된다면 기술적 마찰이 원인인 경우가 많다.

**선택 마찰:** 옵션이 너무 많아 선택하기 어려운 상황. "선택 과부하(Choice Overload)" 현상이다. 추천 상품이나 베스트셀러를 명확히 표시하고, 옵션을 단순화하는 것이 도움이 된다.

`},{title:"4-5. 측정 지표: ROAS, CPA, 전환율, 장바구니 이탈율",content:`
**ROAS(Return on Ad Spend):** 광고비 대비 매출 비율. ROAS = 광고 기여 매출 / 광고비 × 100. BOF의 핵심 성과 지표. 그러나 ROAS만으로 BOF를 평가하면 단기 효율에만 집중하게 되어 브랜드 훼손을 인지하지 못할 수 있다.

**CPA(Cost Per Acquisition):** 신규 고객 한 명을 획득하는 데 드는 비용. CPA = 광고비 / 전환 수. LTV와 비교했을 때 의미가 있다. CPA가 LTV보다 높으면 장기적으로 수익성이 없다.

**전환율(Conversion Rate, CVR):** 랜딩 페이지 방문자 중 실제 구매 완료자의 비율. CVR = 구매 완료 수 / 상세 페이지 방문 수 × 100. 업종 평균은 D2C 쇼핑몰 기준 1~3% 수준이나, 소재-랜딩 일관성이 높고 마찰이 적을수록 5% 이상도 달성 가능하다.

**장바구니 이탈율(Cart Abandonment Rate):** 장바구니에 담은 후 구매를 완료하지 않은 비율. 업계 평균 70% 수준. 이 이탈자들은 이미 높은 구매 의도를 가진 소비자이므로, 장바구니 이탈 복구 이메일/카카오 메시지(Cart Abandonment Flow)로 회수하는 것이 ROI가 매우 높다.

**체크포인트**
- BOF 타겟은 반드시 구매 의도 신호를 보인 소비자로 한정하라.
- 오퍼는 긴박감, 혜택, 명확한 CTA로 구성하되 브랜드 맥락을 유지하라.
- 마찰 제거가 BOF 최적화의 절반이다. 가격·신뢰·정보·기술·선택 마찰을 점검하라.
- ROAS 단독 지표보다 CPA, LTV 대비 수익성을 함께 평가하라.


`}]},{title:"Chapter 5. 퍼널 측정과 분석",subChapters:[{title:"5-1. 퍼널 각 단계의 KPI 체계",content:`
퍼널을 운영한다는 것은 각 단계를 측정하고, 병목을 찾고, 개선하는 반복적 과정을 의미한다. 측정 없는 퍼널 운영은 방향 없이 예산을 소진하는 것과 같다.

아래는 퍼널 단계별 핵심 KPI 체계다.

**TOF KPI:**
- 도달(Reach): 노출된 고유 사용자 수
- CPM: 1,000회 노출당 비용
- 브랜드 검색량 증가율 (네이버, 구글 검색 트렌드)
- 영상 3초 뷰율 (Hook Rate)
- 영상 완료율 (25%, 75%, 100% 기준)
- 주파수 (Frequency): 동일 인물 평균 노출 횟수

**MOF KPI:**
- CTR (Click-Through Rate): 클릭률
- 랜딩 페이지 이탈율 (Bounce Rate)
- 상세 페이지 조회율
- 콘텐츠 참여율 (영상 좋아요, 댓글, 공유)
- 장바구니 추가율
- 리타겟팅 모수 규모

**BOF KPI:**
- ROAS (Return on Ad Spend)
- CPA (Cost Per Acquisition)
- CVR (Conversion Rate)
- 장바구니 이탈율
- 결제 완료율 (장바구니 → 결제 완료)
- 신규/재구매 비율

**전체 퍼널 통합 KPI:**
- CAC (Customer Acquisition Cost): 신규 고객 획득 비용
- LTV (Customer Lifetime Value): 고객 생애 가치
- LTV:CAC 비율
- 월간 신규 고객 수
- 재구매율

`},{title:"5-2. 드롭오프(이탈) 구간 찾기",content:`
퍼널 분석의 핵심 작업은 소비자가 어느 단계에서 대규모로 이탈하는지를 찾는 것이다. 이 지점을 드롭오프(Drop-off) 구간이라고 한다.

드롭오프 분석의 기본 방법은 각 단계의 진입자 수와 다음 단계 진입자 수를 비교하는 것이다.

예시: 광고 노출 100,000명 → 클릭 2,000명(CTR 2%) → 상세 페이지 조회 1,500명 → 장바구니 추가 300명 → 결제 완료 90명

이 퍼널에서 가장 큰 드롭오프는 장바구니 추가(300명) → 결제 완료(90명) 구간으로, 70%가 이탈한다. 이 구간의 개선이 가장 높은 우선순위다. 마찰 제거, 장바구니 이탈 복구 자동화, 결제 UX 개선 등이 처방이 된다.

드롭오프 분석을 위한 도구로는 Google Analytics 4(GA4)의 퍼널 탐색 보고서, Hotjar의 히트맵과 세션 녹화, Meta/Google 광고 플랫폼의 단계별 전환 보고서가 있다.

드롭오프 분석 시 주의할 점은 절대 수치와 비율을 함께 봐야 한다는 것이다. 절대 수치가 크더라도 이탈율이 낮을 수 있고, 반대로 절대 수치가 작아도 이탈율이 높을 수 있다. 비율 기준으로 우선순위를 정하되, 절대 수치로 비즈니스 임팩트를 평가해야 한다.

`},{title:"5-3. 픽셀 / 이벤트 추적 설계",content:`
퍼널 측정의 기술적 기반은 픽셀(Pixel)과 이벤트(Event) 추적이다. 픽셀은 광고 플랫폼(Meta, Kakao 등)이 제공하는 추적 스크립트로, 사이트 방문자의 행동을 광고 플랫폼에 전달한다. 이벤트는 픽셀이 추적하는 구체적 행동(페이지 조회, 장바구니 추가, 결제 완료 등)이다.

이벤트 추적을 제대로 설계하지 않으면 퍼널의 각 단계를 측정할 수 없고, 리타겟팅 모수를 만들 수도 없다. 이벤트 추적은 퍼널 운영의 인프라다.

표준 이커머스 이벤트 추적 설계:

| 이벤트명 | 발생 시점 | 용도 |
|---|---|---|
| PageView | 모든 페이지 조회 | 전체 트래픽 측정 |
| ViewContent | 상품 상세 페이지 조회 | MOF 모수 생성 |
| AddToCart | 장바구니 추가 | 고구매의향 모수 |
| InitiateCheckout | 결제 시작 | 고구매의향 모수 |
| Purchase | 결제 완료 | ROAS, CPA 계산 |
| CompleteRegistration | 회원가입 | 리드 수집 |

iOS 14.5 이후 ATT(App Tracking Transparency) 정책으로 픽셀 기반 추적의 정확도가 크게 떨어졌다. 이를 보완하기 위해 서버사이드 API(Conversion API, CAPI)를 함께 운영하는 것이 현재 표준이다. 서버에서 직접 전환 데이터를 광고 플랫폼에 전송하기 때문에 브라우저 수준의 차단 영향을 받지 않는다.

`},{title:"5-4. 어트리뷰션 모델의 종류와 선택 기준",content:`
어트리뷰션(Attribution)은 "어떤 광고 채널이 이 구매에 기여했는가"를 결정하는 방법론이다. 소비자가 구매 전에 여러 채널(인스타그램 광고 → 구글 검색 → 네이버 검색 → 직접 방문)을 거치기 때문에, 어떤 채널에 공을 돌릴지가 복잡한 문제다.

주요 어트리뷰션 모델:

**라스트 클릭(Last Click):** 구매 직전 마지막으로 클릭한 채널에 100% 공을 돌리는 모델. 가장 단순하고 흔하게 사용되지만, TOF/MOF 기여를 전혀 인정하지 않아 브랜드 광고나 콘텐츠 마케팅의 가치를 심각하게 과소평가한다.

**퍼스트 클릭(First Click):** 처음 접촉한 채널에 100% 공을 돌리는 모델. 인지 채널의 역할을 강조하지만, 실제 구매 결정에 기여한 채널을 무시한다.

**선형(Linear):** 구매 여정의 모든 채널에 동등하게 공을 나눈다. 단순하지만 각 채널의 실제 기여도 차이를 무시한다.

**시간 감소(Time Decay):** 구매에 가까운 시점의 채널에 더 많은 공을 돌리는 모델. 라스트 클릭보다 현실적이지만 여전히 초기 인지 채널을 과소평가한다.

**데이터 기반(Data-Driven):** GA4, 광고 플랫폼 자체 머신러닝이 실제 전환 패턴을 분석하여 각 채널의 기여도를 산출하는 모델. 가장 정확하지만 충분한 데이터가 쌓여야 작동한다.

실무 선택 기준: 초기 브랜드는 라스트 클릭 + 주관적 판단(예산 배분 시 TOF 역할을 정성적으로 고려)을 사용한다. 데이터가 충분히 쌓이면 GA4의 데이터 기반 어트리뷰션으로 전환하고, 채널별 실제 기여도를 반영하여 예산을 재배분한다.

어트리뷰션의 한계를 인식하는 것이 중요하다. 어떤 모델도 완벽하지 않으며, 어트리뷰션 데이터는 상대적 참고 지표로 활용하되, 브랜드 검색량, 직접 유입 증가, 오가닉 성장 등 어트리뷰션으로 잡히지 않는 지표도 함께 모니터링해야 한다.

`},{title:"5-5. 퍼널 최적화 사이클 (테스트 → 판단 → 반영)",content:`
퍼널 최적화는 일회성 작업이 아니라 지속적인 사이클이다. 이 사이클은 세 단계로 구성된다.

**테스트(Test):** 가설을 세우고 실험을 설계한다. "TOF 훅 문구를 변경하면 3초 뷰율이 올라갈 것이다", "장바구니 이탈 복구 메시지 발송 시점을 1시간에서 30분으로 당기면 전환율이 높아질 것이다" 등의 명확한 가설을 먼저 수립한다. 하나의 테스트에서는 하나의 변수만 변경해야 결과를 해석할 수 있다. A/B 테스트는 통계적 유의성을 확보할 수 있는 충분한 샘플이 확보되어야 결론을 낼 수 있다.

**판단(Analyze):** 테스트 결과를 데이터로 평가한다. 단순히 "A가 더 좋았다"가 아니라 "왜 A가 더 좋았는가", "이 결과가 다른 상황에도 적용되는가"를 분석한다. 테스트 기간 중 외부 변수(시즌, 이벤트)가 영향을 미쳤는지도 고려해야 한다.

**반영(Implement):** 테스트에서 긍정적인 결과를 보인 변화를 전체 운영에 반영한다. 단, 테스트 환경과 전체 운영 환경이 다를 수 있으므로, 반영 후에도 성과를 지속적으로 모니터링해야 한다. 부정적인 결과에서도 학습이 발생한다. "이 방향은 효과가 없다"는 정보도 퍼널 최적화에 중요한 자산이다.

주간 운영 루틴으로 이 사이클을 정례화하는 것이 중요하다. 매주 월요일 지난주 데이터 리뷰, 수요일 소재 테스트 론칭, 금요일 결과 분석 및 다음 주 계획 수립 같은 리듬을 만들어야 한다.

**체크포인트**
- 퍼널 단계별 KPI를 명확히 정의하고, 매주 추적하라.
- 드롭오프 구간을 찾아 집중 개선하라. 가장 큰 드롭오프가 가장 큰 기회다.
- 픽셀과 이벤트 추적은 퍼널 운영의 인프라다. 서버사이드 API로 보완하라.
- 어트리뷰션 모델의 한계를 인식하고, 복수 지표로 채널 효과를 평가하라.
- 테스트 → 판단 → 반영 사이클을 주간 루틴으로 정례화하라.


`}]}]},{title:"PART 2: CRM — 고객 생애 가치 극대화",chapters:[{title:"Chapter 6. LTV(생애 가치)의 이해",subChapters:[{title:"6-1. LTV 정의와 계산법 (Historical LTV vs Predicted LTV)",content:`
LTV(Lifetime Value, 고객 생애 가치)는 한 명의 고객이 브랜드와의 관계 동안 발생시키는 총 수익의 현재 가치다. CRM의 모든 전략은 이 숫자를 높이는 것을 목표로 한다.

LTV는 크게 두 가지 방식으로 계산된다.

**Historical LTV(과거 기반 LTV):** 실제 구매 데이터를 기반으로 특정 기간 동안 고객이 발생시킨 평균 매출을 계산한다. 가장 단순한 형태는 다음과 같다.

LTV = 평균 주문 금액(AOV) × 연간 구매 횟수 × 고객 유지 기간(년)

예시: AOV 5만원 × 연 4회 구매 × 3년 유지 = LTV 60만원

이 방식은 계산이 간단하고 직관적이지만, 미래 예측이 어렵고 아직 충분한 구매 이력이 없는 신규 고객에게 적용하기 어렵다.

**Predicted LTV(예측 기반 LTV):** 머신러닝 모델이나 통계적 방법을 활용하여 고객의 미래 구매 행동을 예측한다. 초기 구매 패턴(첫 구매 후 30일 이내 재구매 여부, 구매 카테고리, 구매 시간대 등)을 기반으로 장기 LTV를 예측한다. Shopify, 카페24 등 이커머스 플랫폼이나 Klaviyo 등 CRM 도구가 이 기능을 제공한다.

실무에서는 Historical LTV를 기준 삼아 세그먼트별 평균값을 파악하고, Predicted LTV를 활용하여 신규 고객의 가치를 사전에 판단하여 자원 배분에 활용하는 것이 효과적이다.

`},{title:"6-2. AOV, 구매횟수, 재구매율의 관계",content:`
LTV를 구성하는 세 가지 핵심 변수는 AOV(Average Order Value, 평균 주문 금액), 구매 횟수(Purchase Frequency), 재구매율(Retention Rate 또는 Repeat Purchase Rate)이다. 이 세 변수의 관계를 이해해야 LTV 개선 전략을 올바르게 설계할 수 있다.

**AOV(평균 주문 금액):** 한 번 구매할 때 평균적으로 얼마를 쓰는가. AOV를 높이는 방법으로는 업셀링(더 비싼 상품 권유), 크로스셀링(관련 상품 추가 구매 유도), 번들 구성(묶음 할인), 무료 배송 최소 주문 금액 설정이 있다.

**구매 횟수:** 일정 기간(보통 12개월) 동안 구매하는 평균 횟수. 정기 구독 모델, 소모품 리마인더(필요할 때가 됐을 때 CRM 발송), 시즌별 프로모션이 구매 횟수를 높이는 데 효과적이다.

**재구매율:** 첫 구매 고객 중 두 번째 구매를 하는 비율. 이 수치가 가장 중요한 이유는 재구매 고객의 CAC가 거의 0에 가깝기 때문이다. 신규 고객을 유치하는 것보다 기존 고객을 유지하는 것이 5~7배 비용 효율적이라는 연구 결과는 이 맥락에서 나온 것이다.

세 변수 중 어디에 집중해야 하는지는 현재 상태에 따라 다르다. 재구매율이 낮다면(30% 미만) 이는 제품 품질, 온보딩 경험, 첫 구매 후 커뮤니케이션에 문제가 있다는 신호다. 재구매율이 충분하다면 AOV 또는 구매 횟수를 높이는 전략으로 이동한다.

`},{title:"6-3. LTV:CAC 비율과 사업 수익성",content:`
LTV:CAC 비율은 비즈니스의 경제적 건강성을 나타내는 가장 중요한 지표 중 하나다. CAC(Customer Acquisition Cost)는 새로운 고객 한 명을 획득하는 데 드는 총 비용이다.

CAC = (총 마케팅·영업 비용) / (신규 고객 수)

LTV:CAC 비율의 해석 기준:

- 1:1 미만: 고객을 한 명 획득할 때마다 손해. 지속 불가능한 구조
- 1:1 ~ 3:1: 수익성이 있지만 마진이 얇다. 성장에 한계가 있다
- 3:1 이상: 건강한 수익 구조. 성장을 위한 재투자 여력이 있다
- 5:1 이상: 우수한 수준. 다만 CAC를 더 높이고 성장 속도를 높이는 것을 고려할 시점

SaaS 업계에서는 LTV:CAC 3:1이 건강한 기준으로 널리 인용되지만, D2C 이커머스는 업종과 마진율에 따라 기준이 다르다. 중요한 것은 절대 기준값보다 이 비율이 시간이 지나면서 개선되고 있는지를 추적하는 것이다.

LTV:CAC를 개선하는 두 방향이 있다. CAC를 낮추거나(퍼포먼스 광고 효율화, 오가닉 채널 강화, 바이럴 루프 구축), LTV를 높이거나(재구매율 개선, AOV 상승, 고객 유지 기간 연장). 보통 초기에는 CAC 최소화에 집중하고, 성장 단계에서는 LTV 극대화로 무게중심을 이동한다.

`},{title:"6-4. LTV 낮은 사업의 공통 패턴",content:`
LTV가 낮은 D2C 브랜드에는 몇 가지 공통된 패턴이 있다. 이를 인식하면 근본 원인을 찾아 처방할 수 있다.

**원샷 구매 제품 구조:** 재구매가 자연스럽게 발생하지 않는 제품(예: 혼수용품, 특수 용품 등). 이 경우 크로스셀링과 관련 제품 라인 확장이 LTV 개선의 핵심이다.

**온보딩 부재:** 첫 구매 후 아무런 커뮤니케이션이 없으면 고객은 브랜드를 잊는다. 첫 구매 후 7일, 14일, 30일 시점의 커뮤니케이션이 재구매율을 크게 좌우한다.

**제품 경험의 실망:** 광고에서 약속한 것과 실제 제품 경험이 다를 때. 이는 CRM으로 해결할 수 없는 근본적 문제다. 제품 품질 개선 없이는 LTV를 높이기 어렵다.

**가격 경쟁만 하는 브랜드:** 항상 할인으로만 재구매를 유도하면, 고객은 할인 없이는 구매하지 않는 패턴이 형성된다. 이는 장기적으로 마진을 소진하고 LTV를 낮춘다.

**단일 채널 의존:** 이메일이나 카카오 채널 없이 광고에만 의존하는 브랜드. 기존 고객에게 다시 도달하려면 광고비가 발생하고, 이는 CAC를 높이고 LTV 대비 수익성을 낮춘다.

`},{title:"6-5. LTV 개선의 두 가지 축: 객단가 vs 재구매율",content:`
LTV 개선 전략은 크게 두 축으로 나뉜다. 객단가(AOV) 상승과 재구매율(Retention) 개선이다.

**객단가 상승 전략:**
- 번들 구성: 단품보다 세트 구매 시 이익 강조
- 업셀링: 결제 단계에서 프리미엄 옵션 제안
- 크로스셀링: "이 상품과 함께 구매하는 상품" 자동 추천
- 무료 배송 기준: "3만원 이상 무료배송" 설정 → 고객이 임계값 채우기 위해 추가 구매
- 정기 구독 모델: 월정액으로 AOV와 구매 횟수를 동시에 안정화

**재구매율 개선 전략:**
- 온보딩 플로우: 첫 구매 후 제품 사용법, 팁, 브랜드 스토리 제공
- 소모품 리마인더: "지난번 구매하신 제품 곧 떨어지실 시기가 됐어요" 자동 발송
- 로열티 프로그램: 구매 횟수·금액에 따른 포인트 적립·등급 혜택
- 개인화 추천: 구매 이력 기반 다음 제품 추천
- 이탈 방지 자동화: 마지막 구매 후 일정 기간 경과 시 자동 리마인더 발송

**체크포인트**
- LTV = AOV × 구매 횟수 × 유지 기간. 세 변수 중 현재 가장 낮은 것부터 개선하라.
- LTV:CAC 3:1 이상을 목표로, 비율 추이를 월별로 추적하라.
- 재구매율 30% 미만이라면 온보딩과 제품 경험을 먼저 점검하라.


`}]},{title:"Chapter 7. 고객 세그먼테이션",subChapters:[{title:"7-1. 세그먼테이션이 필요한 이유",content:`
세그먼테이션(Segmentation)은 전체 고객 데이터베이스를 의미 있는 그룹으로 나누는 것이다. 모든 고객에게 동일한 메시지를 보내는 것은 효율적이지 않다. 첫 구매 고객과 10회 이상 구매한 충성 고객에게 같은 메시지를 보내면, 충성 고객은 자신이 특별하지 않다고 느끼고, 첫 구매 고객은 관련 없는 정보를 받는다.

세그먼테이션의 목적은 각 고객 그룹에 가장 적절한 메시지와 오퍼를 제공하여 관련성을 높이고 반응률을 극대화하는 것이다. 실제로 세그먼트별로 다른 메시지를 보내는 캠페인은 동일 메시지 발송 대비 오픈율 14% 높고, 전환율은 최대 3배 높다는 연구 결과가 있다.

D2C 브랜드에서 세그먼테이션은 크게 두 가지 이유로 더욱 중요하다. 첫째, 고객 데이터를 직접 소유하기 때문에 정교한 세그먼테이션이 가능하다. 둘째, 구독이나 반복 구매가 핵심 수익 모델인 경우, 올바른 세그먼트에 올바른 메시지를 보내는 것이 LTV를 직접적으로 결정한다.

`},{title:"7-2. RFM 모델 (Recency, Frequency, Monetary)",content:`
RFM은 고객 세그먼테이션의 가장 검증된 프레임워크다. 세 가지 기준으로 고객을 평가한다.

**Recency(최근성):** 마지막 구매가 얼마나 최근인가. 최근에 구매한 고객일수록 다음 구매 가능성이 높다. 일반적으로 30일 이내, 31~90일, 91~180일, 180일 이상으로 구분한다.

**Frequency(구매 빈도):** 특정 기간 동안 몇 번 구매했는가. 구매 빈도가 높은 고객은 충성도가 높고 이탈 가능성이 낮다.

**Monetary(구매 금액):** 특정 기간 동안 총 얼마를 구매했는가. 고가치 고객 식별에 핵심이다.

각 기준에 1~5점 또는 Low/Mid/High 등급을 부여하고, 이 조합으로 고객 세그먼트를 정의한다.

주요 RFM 세그먼트 예시:

| 세그먼트 | RFM 특성 | 전략 |
|---|---|---|
| 챔피언 | R:높음, F:높음, M:높음 | 로열티 혜택, VIP 전용 오퍼, 신제품 우선 알림 |
| 충성 고객 | R:높음, F:높음, M:중간 | 업셀링, 로열티 프로그램 |
| 잠재 충성 | R:높음, F:낮음, M:중간 | 재구매 유도, 브랜드 스토리 강화 |
| 이탈 위험 | R:낮음, F:높음, M:높음 | 개인화 오퍼, 이탈 방지 캠페인 |
| 동면 고객 | R:낮음, F:낮음, M:낮음 | 재활성화 캠페인 또는 제거 |

RFM 분석은 엑셀/스프레드시트로도 가능하지만, 고객 수가 1만 명 이상이면 CRM 도구(Klaviyo, Braze, Mailchimp 등)의 자동화 세그먼트 기능을 활용하는 것이 효율적이다.

`},{title:"7-3. 행동 기반 세그먼트 vs 인구통계 기반 세그먼트",content:`
세그먼테이션 방식은 크게 행동 기반과 인구통계 기반으로 나뉜다.

**인구통계 기반 세그먼트(Demographic Segmentation):** 나이, 성별, 지역, 직업 등 인구통계 정보 기반. 수집이 쉽고 직관적이지만 실제 구매 행동과 일치하지 않는 경우가 많다. "30대 여성"이라는 세그먼트는 너무 넓어 의미 있는 메시지를 설계하기 어렵다.

**행동 기반 세그먼트(Behavioral Segmentation):** 실제 구매 이력, 사이트 방문 패턴, 이메일 오픈 여부, 특정 카테고리 관심 등 행동 데이터 기반. 실제 관심사와 의향을 직접 반영하기 때문에 훨씬 정교하고 효과적이다.

D2C 환경에서 주요 행동 기반 세그먼트 예시:

- 장바구니 이탈자: 장바구니에 담았으나 구매 미완료
- 특정 카테고리 탐색자: 스킨케어 페이지만 반복 방문
- 이메일 비활성화: 최근 3개월간 이메일 미오픈
- 구독 종료 예정: 구독 만료 30일 전
- 신제품 관심자: 신제품 페이지 방문자

행동 기반 세그먼트는 실시간으로 변한다. 오늘의 "장바구니 이탈자"가 내일 구매를 완료하면 그 즉시 다른 세그먼트로 이동해야 한다. 이를 위해서는 CRM 도구가 실시간 이벤트를 처리할 수 있어야 한다.

`},{title:"7-4. D2C 브랜드의 실전 세그먼트 설계",content:`
D2C 브랜드의 실전 세그먼트 설계는 다음 단계로 이루어진다.

1단계: 데이터 확인. 현재 어떤 데이터가 있는지 확인한다. 이메일, 구매 이력, 사이트 행동 데이터, CRM 태그 등.

2단계: 핵심 세그먼트 정의. 전략적으로 중요한 3~5개 세그먼트를 먼저 정의한다. 너무 많은 세그먼트를 한 번에 만들면 관리가 불가능해진다.

실전 권장 핵심 세그먼트 (D2C 이커머스):

- 세그먼트 1: 신규 구독자 (이메일 가입 후 미구매)
- 세그먼트 2: 첫 구매 고객 (구매 후 30일 이내)
- 세그먼트 3: 활성 고객 (최근 90일 이내 2회 이상 구매)
- 세그먼트 4: 이탈 위험 고객 (91~180일 미구매)
- 세그먼트 5: 이탈 고객 (181일 이상 미구매)
- 세그먼트 6: VIP 고객 (상위 20% 구매 금액)

3단계: 각 세그먼트별 목표와 전략 수립. 각 세그먼트에 대해 "이 고객이 다음에 무엇을 해야 하는가"를 정의하고, 그 행동을 유도하는 메시지와 오퍼를 설계한다.

`},{title:"7-5. 세그먼트별 메시지 전략 차별화",content:`
세그먼트가 정의되었다면, 각 세그먼트에 맞는 메시지를 설계해야 한다. 같은 내용의 메시지를 모든 세그먼트에 보내는 것은 세그먼테이션의 가치를 절반으로 줄인다.

**신규 구독자:** 브랜드를 소개하고 신뢰를 쌓는 것이 목표. 창업 스토리, 제품 철학, 베스트셀러 소개, 첫 구매 특전 제공 순서의 웰컴 시퀀스가 효과적이다. 첫 구매를 전환하기 위한 할인 쿠폰보다는 브랜드 가치를 먼저 전달하는 것이 장기 LTV에 유리하다.

**첫 구매 고객:** 제품을 올바르게 사용하도록 돕고, 브랜드에 대한 긍정적 첫인상을 강화하는 것이 목표. 사용 팁, 케어 방법, 기대 효과 타임라인 안내가 핵심. 구매 만족도를 확인하고 리뷰를 요청하는 메시지도 이 단계에서 보낸다.

**이탈 위험 고객:** 브랜드의 새로운 이유를 제공하는 것이 목표. 신제품 출시, 특별 혜택, 개인화된 추천("지난번 구매하신 OOO과 잘 어울리는 신제품이 나왔어요") 등이 효과적이다.

**VIP 고객:** 특별한 인정과 독점 혜택을 제공하는 것이 목표. VIP 전용 사전 출시, 할인 혜택보다는 경험(팝업 초대, 창업자 미팅, 독점 콘텐츠 등)을 제공하는 것이 고가치 고객의 충성도를 높인다.

**체크포인트**
- RFM 모델로 고객 가치를 분류하고, 각 세그먼트에 다른 전략을 적용하라.
- 행동 기반 세그먼트가 인구통계 기반보다 실무적으로 효과적이다.
- 핵심 세그먼트 5~6개를 먼저 정의하고, 각각에 맞는 메시지를 별도 설계하라.


`}]},{title:"Chapter 8. 고객 라이프사이클 마케팅",subChapters:[{title:"8-1. 라이프사이클의 5단계",content:`
고객 라이프사이클 마케팅은 고객이 브랜드와 관계를 맺는 전 과정을 단계별로 파악하고, 각 단계에 최적화된 전략을 실행하는 것이다. 일반적으로 5단계로 구성된다.

**1단계: 인지(Awareness)** — 브랜드를 처음 알게 된 상태. 광고, 소셜 미디어, 추천 등을 통해 진입. 이 단계의 목표는 브랜드 첫인상을 긍정적으로 만들고 이메일/채널 구독을 유도하는 것이다.

**2단계: 첫 구매(First Purchase)** — 처음으로 제품을 구매한 상태. 이 단계는 가장 중요하다. 첫 구매 경험이 브랜드와의 장기적 관계를 결정한다. 온보딩 커뮤니케이션, 패키징 경험, 배송 속도 모두 이 단계의 변수다.

**3단계: 활성(Active)** — 정기적으로 구매하는 충성 고객 상태. 이 단계의 목표는 AOV 상승과 구매 주기 유지다. 로열티 프로그램, 신제품 우선 알림, 크로스셀링이 주요 전략이다.

**4단계: 이탈 위험(At-Risk)** — 구매 빈도가 줄거나 이메일 오픈이 급감하는 상태. 조기에 감지하여 예방적 커뮤니케이션을 실행해야 한다. 이 단계를 놓치면 이탈 고객을 되찾는 비용이 크게 증가한다.

**5단계: 이탈(Churned)** — 오랫동안 구매하지 않은 상태. 완전한 이탈 전에 재활성화를 시도하고, 반응이 없으면 CRM 리스트에서 비활성 처리하여 지표를 왜곡하지 않는다.

`},{title:"8-2. 각 단계별 목표와 CRM 전략",content:`
각 라이프사이클 단계에 따른 CRM 전략을 구체적으로 설계해야 한다.

**인지 → 첫 구매 전환 전략:**
- 웰컴 이메일 시퀀스 (가입 직후 3~5개 이메일 자동 발송)
- 첫 구매 특전 (할인 쿠폰보다 무료 샘플, 무료 배송 등 가치 추가 형태가 선호됨)
- 교육적 콘텐츠 제공 (제품 카테고리 관련 정보, 선택 가이드)
- 목표 지표: 이메일 오픈율, 웹사이트 클릭률, 첫 구매 전환율

**첫 구매 → 활성 고객 전환 전략:**
- 온보딩 시퀀스 (구매 직후 ~ 30일)
- 사용 후기 요청 (구매 후 7~10일)
- 첫 재구매 유도 (구매 주기에 맞춘 타이밍)
- 목표 지표: 재구매율 (30일, 90일 기준)

**활성 고객 유지 전략:**
- 로열티 프로그램 마일스톤 알림
- 신제품 우선 접근권
- 개인화 추천 이메일
- 목표 지표: 구매 빈도, AOV, 이탈율

**이탈 위험 방지 전략:**
- 조기 감지 자동화 (마지막 구매 후 X일 경과 시 트리거)
- 개인화된 혜택 제공
- 브랜드 새 소식 공유
- 목표 지표: 재활성화율, 이탈율 감소

`},{title:"8-3. 온보딩(첫 구매 후) 설계의 중요성",content:`
온보딩(Onboarding)은 고객이 첫 구매를 완료한 직후부터 30일간의 경험을 설계하는 것이다. 이 기간이 중요한 이유는 고객의 브랜드에 대한 초기 인상과 기대치가 형성되고, 재구매 여부가 결정되는 가장 결정적인 시기이기 때문이다.

연구에 따르면 첫 구매 후 재구매를 경험한 고객은 세 번째, 네 번째 구매 가능성이 기하급수적으로 높아진다. 반대로 첫 구매 후 90일 이내에 재구매하지 않은 고객의 장기 LTV는 현저히 낮다. 온보딩 최적화가 LTV에 미치는 영향은 그만큼 크다.

효과적인 온보딩 시퀀스 설계:

**Day 0 (구매 직후):** 구매 확인 + 감사 이메일. 단순한 영수증이 아니라 브랜드의 목소리로 쓴 따뜻한 환영 메시지. 배송 일정과 함께 "기대하셔도 좋은 이유"를 담는다.

**Day 2~3 (배송 직후 추정):** 제품 사용 가이드. "이렇게 사용하면 더 좋아요" 형태의 실용적 콘텐츠. 영상, 인포그래픽, 단계별 가이드 등의 형태가 효과적이다.

**Day 7:** 사용 경험 체크인. "잘 받으셨나요? 궁금한 점이 있으면 언제든 연락주세요." 이 메시지는 브랜드가 판매 이후에도 관심을 갖는다는 인식을 심는다.

**Day 10~14:** 리뷰 요청. 제품에 익숙해졌을 시점에 솔직한 후기를 요청한다. 리뷰 작성 인센티브(포인트, 쿠폰)를 제공하면 응답률이 높아진다.

**Day 21~30:** 첫 재구매 유도. 소모품의 경우 소진 시점에 맞춰, 비소모품의 경우 보완 제품을 추천한다.

`},{title:"8-4. 이탈 방지 (Churn Prevention) 전략",content:`
이탈을 방지하는 것이 이탈 후 회복하는 것보다 훨씬 비용 효율적이다. 이탈 방지의 핵심은 이탈 징후를 조기에 감지하고 선제적으로 대응하는 것이다.

이탈 징후 신호:
- 이메일 오픈율 급감 (지난 3개월 오픈 없음)
- 사이트 방문 빈도 감소
- 마지막 구매 후 평균 구매 주기의 2배 이상 경과
- 고객 서비스 불만 접수 후 재구매 없음

이탈 방지 전략:
- **가치 리마인더:** "이런 효과를 경험하셨나요?" 형태로 제품 가치를 재환기
- **무엇이 불편했는지 묻기:** 짧은 설문 형태로 이탈 원인 파악. 응답만으로도 재참여를 유도
- **개인화 오퍼:** 이탈 위험 고객에게만 제공하는 특별 혜택 (모든 고객에게 공개하면 효과 반감)
- **새로운 이유 제공:** 신제품 출시, 브랜드 스토리 업데이트, 커뮤니티 참여 기회 등

`},{title:"8-5. 재활성화 (Win-back) 캠페인",content:`
이미 이탈한 고객을 다시 돌아오게 하는 재활성화(Win-back) 캠페인은 신규 고객 획득보다 비용이 낮으면서 LTV가 높은 전략이다. 이미 브랜드를 한 번 선택한 고객이기 때문이다.

효과적인 Win-back 시퀀스:

**1차 발송 (이탈 감지 직후):** 가볍고 비위협적인 톤. "보고 싶었어요" 형태의 감성적 접근. 새로운 소식이나 변화를 공유.

**2차 발송 (1차 후 1~2주):** 구체적 혜택 제공. "돌아오시면 특별 혜택을 드립니다." 할인보다 추가 증정, 무료 배송 등 가치 추가 형태가 브랜드 훼손이 적다.

**3차 발송 (최후 통첩):** "이 혜택을 마지막으로 제공합니다." 명확한 만료 시점을 설정하여 긴박감을 만든다.

**3차 이후 무반응:** CRM 활성 리스트에서 제거. 비활성 고객에게 계속 발송하면 이메일 발송 평판(Sender Reputation)이 낮아져 전체 이메일 도달율에 악영향을 미친다.

**체크포인트**
- 라이프사이클 5단계를 기준으로 각 단계별 자동화 플로우를 설계하라.
- 온보딩은 LTV를 결정하는 가장 중요한 30일이다. 소홀히 하지 마라.
- 이탈 방지가 Win-back보다 효율적이다. 이탈 징후 감지 자동화를 먼저 구축하라.


`}]},{title:"Chapter 9. CRM 채널별 특성과 활용",subChapters:[{title:"9-1. 이메일 vs SMS vs 카카오톡 채널 비교",content:`
D2C 브랜드에서 주로 활용하는 CRM 채널은 이메일, SMS, 카카오 비즈메시지(카카오톡 채널)다. 각 채널은 서로 다른 특성과 강점을 가진다.

**이메일:**
- 특성: 긴 콘텐츠 전달 가능, 디자인 자유도 높음, 비용 저렴, 글로벌 표준
- 평균 오픈율: 20~25% (국내 기준, 산업별 편차 큼)
- 평균 전환율: 오픈 기준 2~5%
- 강점: 풍부한 콘텐츠 전달, 자동화 용이, 데이터 분석 용이, 구독 취소 후에도 브랜드 경험 품질 유지
- 약점: 스팸 필터링 위험, 모바일 최적화 필요, 국내 사용자 이메일 습관 약화 추세

**SMS:**
- 특성: 짧은 문자, 높은 도달율, 즉각적 확인
- 평균 오픈율: 95% 이상 (수신 즉시 확인율 기준)
- 평균 전환율: 오픈 기준 1~3%
- 강점: 즉각적 도달, 높은 오픈율, 긴박감 메시지에 효과적
- 약점: 짧은 텍스트 제한, 이미지 불가 (MMS 제외), 비용 높음, 수신 거부 이탈율 높음

**카카오 비즈메시지 (카카오톡 채널):**
- 특성: 국내 특화, 이미지+텍스트+버튼 조합 가능
- 평균 오픈율: 40~60% (알림톡 기준), 20~35% (채널 메시지 기준)
- 평균 전환율: 3~8% (알림톡 기준 높음)
- 강점: 국내 사용자 접근성 최고 (카카오톡 사용률 95% 이상), 버튼 CTA로 즉각적 행동 유도, 이미지 포함 가능
- 약점: 국내 한정, 채널 추가 동의 필요, 알림톡은 거래 정보에 한정

`},{title:"9-2. 채널별 오픈율, 전환율 벤치마크",content:`
채널 성과를 평가할 때 업계 벤치마크를 기준으로 현재 수준을 진단하는 것이 중요하다.

| 지표 | 이메일 | SMS | 카카오 알림톡 | 카카오 채널 |
|---|---|---|---|---|
| 발송 도달율 | 95%+ | 99%+ | 99%+ | 99%+ |
| 오픈율 | 20~25% | 95%+ | 90%+ | 30~50% |
| 클릭률 | 2~5% | 10~20% | 20~40% | 5~15% |
| 전환율 | 0.5~2% | 1~3% | 3~8% | 1~4% |
| 발송 단가 | 저렴 | 중간 | 높음(알림톡) | 낮음(채널) |

이 벤치마크는 어디까지나 평균값이며, 브랜드의 메시지 품질, 세그먼트 정확도, 발송 타이밍에 따라 크게 달라진다. 자사 데이터를 지속적으로 측정하고, 벤치마크와 비교하여 개선 방향을 찾는 것이 중요하다.

`},{title:"9-3. 채널 믹스 전략",content:`
단일 채널에만 의존하는 것은 위험하다. 채널 정책 변경, 비용 인상, 고객 수신 거부 등 외부 변수에 취약해진다. 복수 채널을 조합하는 채널 믹스 전략이 필요하다.

효과적인 채널 믹스 원칙:

**채널별 역할 분담:** 이메일은 풍부한 콘텐츠(뉴스레터, 온보딩 시퀀스), 카카오는 즉각적 행동 유도(장바구니 이탈 복구, 이벤트 알림), SMS는 긴박한 시간 제한 오퍼에 활용한다.

**오케스트레이션(Orchestration):** 동일 메시지를 모든 채널에 동시에 보내지 않는다. 이메일 미오픈 시 카카오 채널로 발송, 카카오 채널 미클릭 시 SMS로 발송하는 방식으로 채널을 순차적으로 활용한다.

**채널 피로도 관리:** 같은 고객에게 같은 날 여러 채널로 유사한 메시지를 보내면 반감이 발생한다. 채널별 발송 간격과 빈도를 설정하는 글로벌 주파수 제한(Global Frequency Cap)을 설정해야 한다.

`},{title:"9-4. 메시지 타이밍 최적화",content:`
같은 메시지라도 언제 보내느냐에 따라 오픈율과 전환율이 크게 달라진다.

**요일 최적화:**
- 이메일: 화~목 오전 10시~오후 2시가 일반적으로 높은 오픈율을 보임
- 카카오/SMS: 퇴근 후 저녁 7시~9시 시간대가 효과적 (생활용품, 뷰티, 식품 등)
- 단, 업종과 타겟 특성에 따라 다름. 반드시 자사 데이터로 검증 필요

**구매 주기 기반 타이밍:** 소모품의 경우 평균 구매 주기(예: 스킨케어 30ml 제품 = 평균 45일 사용)를 파악하고, 소진 예상 10~14일 전에 리마인더를 발송한다.

**트리거 기반 타이밍:** 고객의 행동(장바구니 추가, 사이트 방문, 상품 조회)이 발생한 직후 즉시 발송하는 방식. 행동 발생 후 30분~1시간 이내 발송이 24시간 후 발송보다 훨씬 높은 전환율을 보인다.

**A/B 테스트로 검증:** 발송 시간도 반드시 A/B 테스트로 자사 데이터에 최적화해야 한다. 업계 평균 최적 시간이 자사 고객에게는 맞지 않을 수 있다.

`},{title:"9-5. 개인화(Personalization)의 원칙",content:`
개인화는 메시지의 관련성을 높여 오픈율, 클릭률, 전환율을 전반적으로 향상시킨다. 그러나 모든 개인화가 효과적인 것은 아니다.

**이름 삽입 개인화:** "홍길동님, 안녕하세요" 형태. 가장 기본적인 개인화이며 오픈율을 소폭 높이지만 단독으로는 큰 차이를 만들지 못한다.

**구매 이력 기반 개인화:** "지난번 구매하신 OOO과 잘 어울리는 신제품입니다" 형태. 구매 맥락을 반영하기 때문에 관련성이 높고 전환율에 실질적인 영향을 미친다.

**행동 기반 개인화:** 최근 조회한 상품, 장바구니에 담은 상품, 자주 구매하는 카테고리 등을 기반으로 맞춤 콘텐츠를 제공한다.

**단계 기반 개인화:** 라이프사이클 단계(신규, 활성, 이탈 위험)에 따라 완전히 다른 메시지를 설계한다.

개인화의 한계: 개인화 데이터가 부정확하거나 오래되면 오히려 역효과가 난다. "지난번 구매하신 OOO"에 실제로 구매한 적 없는 상품이 들어가면 신뢰가 깨진다. 개인화 데이터의 정확성을 주기적으로 검증해야 한다.

**체크포인트**
- 채널별 특성을 이해하고 역할을 분담하라. 이메일(콘텐츠), 카카오(즉각 행동), SMS(긴박 오퍼).
- 단일 채널 의존을 피하고 오케스트레이션 전략으로 채널을 순차 활용하라.
- 발송 타이밍은 업계 평균이 아닌 자사 데이터로 A/B 테스트하여 최적화하라.
- 개인화는 구매 이력과 행동 기반이 이름 삽입보다 훨씬 효과적이다.


`}]},{title:"Chapter 10. CRM 자동화 설계",subChapters:[{title:"10-1. 트리거 기반 자동화의 원리",content:`
CRM 자동화는 특정 조건(트리거)이 충족되었을 때 미리 설정한 메시지를 자동으로 발송하는 시스템이다. 수동 발송(일회성 캠페인)과 달리, 자동화는 고객의 행동에 즉각적으로 반응하고 적절한 타이밍에 메시지를 보낸다.

트리거 기반 자동화의 원리는 간단하다. "IF (조건) THEN (행동) AFTER (지연 시간)"의 로직이다.

예시: "IF 고객이 장바구니에 상품을 추가하고 1시간 이내에 구매하지 않으면 (조건), THEN 장바구니 이탈 복구 이메일을 발송한다 (행동), AFTER 1시간 (지연)."

자동화의 강점은 24시간 365일 작동하며, 대량의 고객에게 동시에 개인화된 메시지를 보낼 수 있다는 것이다. 또한 한 번 설정하면 지속적으로 작동하므로, 마케터의 시간을 전략적 사고에 집중할 수 있게 한다.

`},{title:"10-2. 주요 자동화 시나리오",content:`
D2C 브랜드에서 우선적으로 구축해야 할 CRM 자동화 시나리오 7가지:

**1. 웰컴 시퀀스 (Welcome Series)**
- 트리거: 이메일 구독 또는 회원가입
- 목적: 브랜드 소개, 신뢰 구축, 첫 구매 유도
- 구성: 3~5개 이메일, 5~10일에 걸쳐 발송
- 핵심 내용: 창업 스토리 → 베스트셀러 소개 → 고객 리뷰 → 첫 구매 특전

**2. 온보딩 시퀀스 (Post-Purchase Onboarding)**
- 트리거: 첫 구매 완료
- 목적: 제품 경험 극대화, 재구매율 향상
- 구성: 구매 당일 ~ 30일, 4~6개 메시지
- 핵심 내용: 감사 + 배송 안내 → 사용 가이드 → 경험 체크인 → 리뷰 요청 → 재구매 유도

**3. 장바구니 이탈 복구 (Cart Abandonment)**
- 트리거: 장바구니 추가 후 X시간 미구매
- 목적: 구매 의도 있는 이탈자 회수
- 구성: 3개 메시지 (1시간 후 → 24시간 후 → 72시간 후)
- 핵심 내용: 1차 리마인더 → 소셜 증거 + 마찰 해소 → 최후 혜택

**4. 브라우저 이탈 (Browse Abandonment)**
- 트리거: 상품 페이지 조회 후 X시간 미추가
- 목적: 탐색 단계 이탈자 설득
- 구성: 1~2개 메시지 (24시간 후)
- 핵심 내용: 조회한 상품 + 리뷰 강조

**5. 소모품 리마인더 (Replenishment Reminder)**
- 트리거: 평균 구매 주기 X일 경과
- 목적: 적절한 타이밍에 재구매 유도
- 구성: 1~2개 메시지 (예상 소진 7일 전, 소진 시점)
- 핵심 내용: "곧 떨어지실 시기가 됐어요" + 간편 재주문 링크

**6. 이탈 방지 (Win-back)**
- 트리거: 마지막 구매 후 X일 경과 (이탈 위험 임계값)
- 목적: 이탈 직전 고객 재활성화
- 구성: 3개 메시지 (이탈 감지 → 2주 후 혜택 → 최후 통첩)
- 핵심 내용: 그리움 표현 → 맞춤 혜택 → 한정 기간 오퍼

**7. VIP 감사 (Loyalty Milestone)**
- 트리거: 구매 금액 또는 횟수 임계값 달성
- 목적: 고가치 고객 인정 및 충성도 강화
- 구성: 즉시 발송 1개 메시지
- 핵심 내용: VIP 인정 메시지 + 독점 혜택 제공

`},{title:"10-3. 플로우 설계 방법",content:`
자동화 플로우를 설계할 때 다음 단계를 따른다.

1단계: 목표 정의. 이 플로우의 최종 목표는 무엇인가? (재구매 전환, 이탈 방지, 리뷰 수집 등)

2단계: 트리거 정의. 어떤 조건에서 플로우가 시작되는가? 조건을 구체적으로 정의해야 한다. "구매 완료"가 아니라 "첫 구매 완료 (이전 구매 이력 없는 고객)"처럼 구체적으로.

3단계: 분기(Branch) 설계. 이메일을 오픈한 고객과 오픈하지 않은 고객에게 다른 다음 단계를 배치한다. 구매한 고객은 플로우에서 제외한다. 이 분기 설계가 자동화의 정교함을 결정한다.

4단계: 메시지 작성. 각 단계의 메시지 내용, 제목, CTA를 설계한다. 시퀀스 내 메시지 간 톤과 맥락이 자연스럽게 이어지도록 한다.

5단계: 테스트 발송. 실제 발송 전에 테스트 계정으로 전체 플로우를 실행하여 오류를 확인한다.

6단계: 성과 측정 및 최적화. 플로우가 실행되기 시작하면 각 단계별 오픈율, 클릭률, 전환율을 추적하고, 저조한 단계를 개선한다.

`},{title:"10-4. A/B 테스트 in CRM",content:`
CRM에서 A/B 테스트는 퍼포먼스 광고와 동일한 원칙으로 작동한다. 하나의 변수만 변경하고, 충분한 샘플을 확보하고, 통계적 유의성을 확인한다.

CRM에서 자주 테스트하는 변수:

- 이메일 제목 (Subject Line): 클릭을 유발하는 제목 vs 궁금증 유발 제목
- 발송 시간: 오전 10시 vs 저녁 8시
- CTA 문구: "지금 구매하기" vs "내 상품 확인하기"
- 오퍼 유형: 10% 할인 vs 무료 배송 vs 사은품
- 메시지 길이: 짧고 간결한 버전 vs 상세하고 스토리 중심 버전

CRM A/B 테스트 시 주의점: 이메일 캠페인의 경우 리스트 규모가 최소 1,000명 이상이어야 통계적으로 의미 있는 결과를 얻을 수 있다. 소규모 리스트에서는 A/B 테스트 대신 정성적 판단으로 결정하는 것이 현실적이다.

`},{title:"10-5. CRM 성과 측정 지표",content:`
CRM 자동화의 성과를 측정하는 핵심 지표:

**오픈율(Open Rate):** 발송된 메시지 중 열린 비율. 이메일 제목, 발송 시간, 브랜드 신뢰도가 영향을 미친다. 주의: Apple Mail Privacy Protection(iOS 15+)으로 이메일 오픈율 추적의 정확도가 낮아졌다. 클릭률을 더 신뢰할 수 있는 지표로 사용한다.

**클릭률(CTR):** 메시지를 받고 링크를 클릭한 비율. 메시지의 내용과 CTA 관련성을 나타낸다.

**전환율(CVR):** 메시지를 받고 목표 행동(구매, 리뷰 작성 등)을 완료한 비율.

**ROAS:** 자동화 캠페인이 발생시킨 매출 / 캠페인 운영 비용. 수동 캠페인과 자동화 시퀀스를 별도로 측정한다.

**증분 매출(Incremental Revenue):** 자동화가 없었다면 발생하지 않았을 추가 매출. 이를 측정하려면 대조군(자동화 발송 제외 그룹)을 설정해야 한다.

**이탈율(Unsubscribe Rate):** 구독 취소 비율. 발송 빈도, 내용 관련성, 개인화 수준이 낮을수록 이탈율이 높아진다. 이탈율이 높아지면 발송 리스트의 품질이 떨어지고, 전체 CRM 효율이 낮아진다.

**체크포인트**
- 7가지 핵심 자동화 시나리오를 우선순위에 따라 순차적으로 구축하라.
- 플로우 설계 시 분기(Branch) 로직을 세밀하게 설계해야 자동화가 의미 있다.
- CRM 지표는 오픈율보다 클릭률과 전환율, 증분 매출을 중심으로 평가하라.


`}]}]},{title:"PART 3: 브랜딩 — 신뢰의 자산화",chapters:[{title:"Chapter 11. 브랜드란 무엇인가",subChapters:[{title:"11-1. 브랜드의 정의 (로고가 아닌 기억과 감정)",content:`
브랜드를 "로고와 색상 체계"로 이해하는 것은 가장 흔하고 가장 비싼 오해다. 로고는 브랜드의 아이콘일 뿐, 브랜드 자체가 아니다. 브랜드의 진짜 정의는 "소비자의 기억 속에 형성된 연상(association)과 감정(emotion)의 총체"다.

Jeff Bezos의 말을 빌리면, "브랜드는 당신이 자리를 비웠을 때 사람들이 당신에 대해 하는 말이다." 광고를 끄고, SNS를 닫고, 영업 담당자가 없는 순간에도 소비자의 마음속에 이 브랜드가 어떤 이미지로 자리하고 있는가가 브랜드의 실체다.

브랜드는 두 가지 차원에서 존재한다. 첫째, 기억(Memory): 브랜드 이름을 들었을 때 떠오르는 연상들. 색상, 제품 카테고리, 창업자, 슬로건, 사용 경험, 다른 사용자 이미지 등. 둘째, 감정(Emotion): 그 브랜드를 생각할 때 느끼는 감정. 신뢰, 친근함, 동경, 반감, 무관심 등.

이 두 차원이 긍정적이고 강하게 형성되어 있을 때, 브랜드는 가장 강력한 경쟁 우위가 된다. 소비자는 비교 없이 이 브랜드를 선택하고, 경쟁사가 더 저렴한 가격을 제시해도 충성도를 유지한다.

`},{title:"11-2. 브랜드 에쿼티(Brand Equity) 개념",content:`
브랜드 에쿼티(Brand Equity)는 브랜드가 보유한 자산 가치다. 동일한 제품이라도 브랜드가 붙어 있을 때 소비자가 더 높은 가격을 기꺼이 지불하게 만드는 프리미엄이 바로 브랜드 에쿼티의 경제적 표현이다.

데이비드 아커(David Aaker)가 제시한 브랜드 에쿼티 모델은 5가지 구성 요소로 이루어진다.

**브랜드 인지도(Brand Awareness):** 소비자가 브랜드를 알고 있는 정도. 비보조 인지(Unaided Awareness: 카테고리 언급 시 자발적으로 떠오르는 브랜드)와 보조 인지(Aided Awareness: 브랜드 이름을 들었을 때 아는지)로 구분된다.

**지각된 품질(Perceived Quality):** 실제 품질과 별개로, 소비자가 이 브랜드의 품질을 어떻게 느끼는지. 프리미엄 패키징, 고품질 소재, 광고 톤 등 모든 접점이 지각된 품질에 영향을 미친다.

**브랜드 연상(Brand Associations):** 브랜드와 연결된 이미지, 캐릭터, 슬로건, 사용 상황, 감정 등.

**브랜드 충성도(Brand Loyalty):** 반복 구매 의향. 충성 고객은 CAC가 낮고 LTV가 높으며, 자발적으로 브랜드를 추천한다.

**독점적 브랜드 자산(Proprietary Brand Assets):** 특허, 상표, 패키지 디자인 등 법적으로 보호되는 자산.

브랜드 에쿼티가 높을수록 CAC가 낮아지고 LTV가 높아진다. 이것이 퍼포먼스 마케터가 브랜딩을 이해해야 하는 핵심 이유다.

`},{title:"11-3. 브랜드가 구매 결정에 영향을 미치는 메커니즘",content:`
소비자가 구매를 결정할 때 브랜드는 두 가지 방식으로 영향을 미친다.

**리스크 감소:** 처음 구매하는 제품에 대해 소비자는 불확실성을 느낀다. "이 제품이 기대에 부합할까?", "환불이 될까?", "품질이 믿을 만한가?" 등의 질문이 구매를 망설이게 한다. 강한 브랜드는 이 불확실성을 줄인다. "이 브랜드는 믿을 수 있다"는 기억이 구매 결정을 단순화한다.

**자아 표현:** 소비자는 자신이 선택하는 브랜드를 통해 자신을 표현한다. "나는 이런 가치를 중요하게 생각하는 사람이다"라는 메시지를 브랜드 선택을 통해 타인과 자신에게 전달한다. 이 자아 표현 욕구가 강한 카테고리(패션, 자동차, 식품 등)에서 브랜딩의 영향력은 특히 크다.

이 두 메커니즘 때문에, 브랜드가 강한 제품은 가격 비교 단계를 단축하거나 건너뛰게 만든다. 소비자는 "이 브랜드 제품이니까"라는 이유만으로 구매를 결정한다. 이것이 브랜드 에쿼티의 경제적 효과다.

`},{title:"11-4. 멘탈 어베일러빌리티(Mental Availability) — Byron Sharp 이론",content:`
바이런 샤프(Byron Sharp)는 그의 저서 "How Brands Grow(브랜드는 어떻게 성장하는가)"에서 브랜드 성장의 가장 중요한 요인으로 "멘탈 어베일러빌리티(Mental Availability)"와 "피지컬 어베일러빌리티(Physical Availability)"를 제시했다.

멘탈 어베일러빌리티는 "구매 상황에서 소비자가 이 브랜드를 떠올릴 가능성"이다. 목이 마를 때, 피부 트러블이 생겼을 때, 선물을 골라야 할 때 — 이 구매 상황에서 가장 먼저 떠오르는 브랜드가 되는 것이 브랜딩의 핵심 목표다.

멘탈 어베일러빌리티를 높이려면 두 가지가 필요하다. 첫째, 충분한 노출(Reach): 가능한 많은 잠재 고객에게 브랜드를 노출해야 한다. 타겟이 아무리 정교하게 정의되어 있어도 노출이 없으면 기억에 남지 않는다. 둘째, 독특한 브랜드 자산(Distinctive Brand Assets): 소비자가 쉽게 인식하고 브랜드와 연결할 수 있는 시각적·언어적 요소. 특정 색상, 슬로건, 캐릭터, 패키지 형태 등이 이에 해당한다.

샤프의 이론은 퍼포먼스 마케터에게 중요한 시사점을 준다. 좁은 타겟에 집중하는 것보다 넓게 노출하되 일관된 브랜드 자산을 반복 노출하는 것이 장기적으로 더 효과적인 전략이라는 것이다. 이는 타겟 정교화에만 집중하는 퍼포먼스 마케팅 접근과 대비된다.

`},{title:"11-5. 작은 브랜드가 브랜딩을 해야 하는 이유",content:`
"브랜딩은 자본이 많은 대기업의 일"이라는 인식은 틀렸다. 오히려 소규모 D2C 브랜드에서 브랜딩은 생존의 문제다.

이유 1: 차별화. 시장에는 유사한 제품이 넘쳐난다. 기능적 차별화만으로는 경쟁에서 이기기 어렵다. 명확한 브랜드 아이덴티티는 기능적으로 비슷한 제품들 사이에서 선택을 받는 유일한 방법이다.

이유 2: CAC 절감. 브랜드 인지도가 쌓이면 광고 클릭률이 높아지고, 직접 검색 유입이 증가하며, 바이럴 효과가 발생한다. 이 모든 것이 CAC를 낮춘다. 초기에 브랜딩 투자 없이 광고에만 의존하면 CAC가 지속적으로 높아지고 결국 수익성이 무너진다.

이유 3: 가격 방어. 브랜드 에쿼티가 없는 제품은 가격으로만 경쟁해야 한다. 경쟁사가 더 싼 가격을 제시하면 고객을 빼앗긴다. 브랜드 에쿼티가 있는 제품은 가격 인상을 해도 충성 고객을 유지할 수 있다.

이유 4: CRM 효율화. 브랜드 각인이 된 고객은 CRM 메시지에 훨씬 높은 반응률을 보인다. 발신자를 신뢰하기 때문에 이메일을 열고, 링크를 클릭하고, 구매한다.

**체크포인트**
- 브랜드는 로고가 아니라 소비자 기억 속의 연상과 감정이다.
- 브랜드 에쿼티가 높을수록 CAC가 낮아지고 LTV가 높아진다.
- 멘탈 어베일러빌리티를 목표로 — 구매 순간에 가장 먼저 떠오르는 브랜드가 되어라.
- 소규모 브랜드도 브랜딩이 필수다. 이는 생존과 수익성의 문제다.


`}]},{title:"Chapter 12. 브랜드 아이덴티티 설계",subChapters:[{title:"12-1. 브랜드 아이덴티티의 구성 요소",content:`
브랜드 아이덴티티(Brand Identity)는 브랜드가 스스로를 정의하고 표현하는 방식의 총체다. 소비자가 인식하는 브랜드 이미지(Brand Image)와 구분된다. 아이덴티티는 브랜드가 의도적으로 설계하는 것이고, 이미지는 소비자가 실제로 인식하는 것이다. 이 둘의 간극을 좁히는 것이 브랜드 커뮤니케이션의 과제다.

브랜드 아이덴티티의 주요 구성 요소:

**브랜드 미션(Mission):** 이 브랜드는 왜 존재하는가. 단순한 수익 창출이 아닌, 더 큰 목적. "우리는 바쁜 현대인이 더 건강하게 살도록 돕는다" 같은 형태.

**브랜드 비전(Vision):** 이 브랜드가 궁극적으로 만들고자 하는 세계. "10년 후 우리 브랜드가 있는 세상은 어떤 모습인가"에 대한 답.

**브랜드 가치(Values):** 브랜드가 의사결정 시 기준으로 삼는 핵심 원칙. 3~5가지로 명확하게 정의한다.

**브랜드 퍼스낼리티(Personality):** 브랜드가 사람이라면 어떤 성격인가. 친근하고 유머러스한지, 전문적이고 신뢰감 있는지, 도전적이고 반항적인지 등.

**비주얼 아이덴티티(Visual Identity):** 로고, 브랜드 색상(팔레트), 타이포그래피, 사진 스타일, 디자인 원칙. 이것이 모여 "첫눈에 이 브랜드인 줄 알 수 있는" 시각적 언어를 만든다.

**브랜드 보이스(Brand Voice):** 브랜드가 말하는 방식. 공식적인지 구어체인지, 유머를 쓰는지 진지한지, 이모지를 쓰는지 등.

`},{title:"12-2. 브랜드 포지셔닝: 차별점 찾기",content:`
포지셔닝(Positioning)은 경쟁 브랜드들 사이에서 이 브랜드가 차지하는 고유한 위치를 정의하는 것이다. 포지셔닝 없이는 소비자의 마음속에 명확한 자리를 만들 수 없다.

포지셔닝 개발의 고전적 방법론은 알 리스와 잭 트라우트의 "포지셔닝"에서 제시된 프레임이다. 핵심은 소비자의 마음속에 "최초"로 자리 잡는 것이다. 카테고리 내 최초가 될 수 없다면, 서브카테고리를 새로 만들어 그 안에서 최초가 되는 전략이 효과적이다.

실전 포지셔닝 개발 프로세스:

1단계: 경쟁 분석. 주요 경쟁 브랜드들이 어떤 포지셔닝을 취하고 있는지 맵핑한다. 두 가지 축(예: 가격 vs 품질, 자연 vs 과학, 개인 vs 브랜드)으로 포지셔닝 맵을 그린다.

2단계: 소비자 인사이트 발굴. 현재 소비자들이 카테고리에서 충족되지 않은 욕구는 무엇인가? 기존 브랜드들이 공통으로 무시하는 페인 포인트는 무엇인가?

3단계: 차별점 정의. "우리 브랜드만이 제공할 수 있는 것"을 찾는다. 기능적 차별점(성분, 효능, 가격, 배송)과 감성적 차별점(브랜드 스토리, 커뮤니티, 경험) 모두 고려한다.

4단계: 포지셔닝 스테이트먼트 작성. "[타겟] 를 위한, [카테고리]에서 [차별점]을 제공하는 브랜드입니다. 왜냐하면 [증거/근거]이기 때문입니다."

`},{title:"12-3. 타겟 페르소나와 브랜드 연결",content:`
타겟 페르소나(Target Persona)는 브랜드의 이상적인 고객을 구체적인 인물로 묘사한 것이다. 단순한 인구통계 정보가 아니라, 이 사람의 일상, 가치관, 고민, 욕망, 미디어 소비 습관까지 포함한다.

효과적인 페르소나 작성 요소:
- 이름, 나이, 직업, 가족 구성
- 하루 루틴 (아침에 뭘 먹는지, 출퇴근 어떻게 하는지)
- 주요 고민과 욕망
- 이 카테고리에서 겪는 페인 포인트
- 정보 수집 채널 (어떤 인플루언서를 팔로우하는지, 어떤 커뮤니티에 속하는지)
- 구매 결정 요인 (가격인지, 성분인지, 리뷰인지, 브랜드 스토리인지)

페르소나가 구체적일수록 소재 기획, 메시지 작성, 채널 선택이 명확해진다. "30대 여성"이라는 타겟보다 "서울에 사는 32세 마케터 김지은, 바쁜 일상에도 피부 관리를 소홀히 하지 않으려 하지만 복잡한 스킨케어 루틴은 부담스럽다"가 훨씬 유용하다.

브랜드 아이덴티티와 페르소나를 연결할 때는 "이 페르소나가 우리 브랜드에 매료될 이유는 무엇인가?"를 중심에 두어야 한다. 페르소나의 가치관과 브랜드의 가치가 일치할 때 깊은 브랜드 충성도가 형성된다.

`},{title:"12-4. 브랜드 보이스 & 톤 정의하기",content:`
브랜드 보이스(Brand Voice)는 모든 커뮤니케이션에서 일관되게 유지되는 브랜드의 언어적 성격이다. 광고 카피, 이메일, SNS 포스팅, 고객 서비스 대화까지 동일한 보이스가 느껴져야 한다.

브랜드 보이스와 톤(Tone)의 차이를 이해해야 한다. 보이스는 일관된 성격이고, 톤은 상황에 따라 변하는 뉘앙스다. 친근하고 유머러스한 보이스를 가진 브랜드도 고객 불만을 처리할 때는 진지하고 공감적인 톤을 사용해야 한다. 보이스는 변하지 않지만 톤은 맥락에 따라 조율된다.

브랜드 보이스 정의 방법:

1단계: 형용사 3~5개로 브랜드 성격 정의. "전문적이고, 따뜻하며, 직접적이다" 같은 형태.

2단계: "우리 브랜드는 ○○이지만 ○○은 아니다" 대조 정의. "친근하지만 가볍지 않다", "전문적이지만 딱딱하지 않다".

3단계: 실제 카피 예시 대조. 같은 내용을 우리 보이스로 쓴 버전과 잘못된 버전을 나란히 제시하여 가이드라인을 명확히 한다.

4단계: 문서화 및 공유. 모든 콘텐츠 제작자, 광고 대행사, 고객 서비스 담당자가 동일한 보이스 가이드를 참조할 수 있도록 문서화한다.

`},{title:"12-5. 브랜드 아이덴티티 문서화 방법",content:`
브랜드 아이덴티티를 문서화한 것을 브랜드 가이드라인(Brand Guidelines) 또는 브랜드 북(Brand Book)이라 한다. 이 문서는 브랜드의 헌법과 같다. 모든 외부·내부 커뮤니케이션의 기준이 된다.

브랜드 가이드라인에 포함되어야 할 최소 항목:

- 브랜드 미션, 비전, 가치
- 타겟 페르소나 (1~2개)
- 브랜드 포지셔닝 스테이트먼트
- 로고 사용 규정 (최소 크기, 여백, 사용 금지 변형)
- 브랜드 컬러 팔레트 (HEX, RGB, CMYK 값 포함)
- 타이포그래피 (서체 종류, 크기 체계, 사용 규칙)
- 사진 스타일 가이드 (어떤 느낌의 이미지를 사용하는가)
- 브랜드 보이스 가이드 (형용사, 대조 정의, 카피 예시)

이 문서의 핵심은 "일관성"이다. 소규모 팀일수록 문서화를 소홀히 하는 경향이 있지만, 팀이 커지고 외부 파트너가 늘어날수록 일관성 유지가 어려워진다. 초기부터 간략하게라도 문서화하는 것이 장기적으로 훨씬 효율적이다.

**체크포인트**
- 브랜드 아이덴티티는 미션, 비전, 가치, 퍼스낼리티, 비주얼, 보이스의 총체다.
- 포지셔닝은 경쟁자와 명확히 구분되는 고유한 위치를 정의하는 것이다.
- 타겟 페르소나를 구체적으로 그려야 소재와 메시지가 선명해진다.
- 브랜드 가이드라인을 초기부터 문서화하라. 일관성이 브랜드 자산이다.


`}]},{title:"Chapter 13. 퍼포먼스 광고에 브랜딩 녹이기",subChapters:[{title:"13-1. 퍼포먼스와 브랜딩의 충돌: 왜 대부분 실패하는가",content:`
퍼포먼스 마케팅과 브랜딩의 통합을 시도하는 브랜드는 많지만, 실제로 성공하는 경우는 드물다. 대부분 두 가지 방식으로 실패한다.

첫 번째 실패: 분리형 운영. 퍼포먼스 팀은 ROAS 최적화 소재만, 브랜드 팀은 캠페인 영상만 만든다. 두 소재가 서로 다른 톤, 다른 메시지를 담고 있어서 소비자는 하나의 일관된 브랜드를 경험하지 못한다.

두 번째 실패: 퍼포먼스 소재의 브랜딩 완전 배제. ROAS에만 집중하다 보면 소재가 점점 할인, 리뷰 나열, 스펙 강조로 단순화된다. 브랜드 아이덴티티가 사라지고, 무엇이든 싸게 파는 채널로 포지셔닝이 된다.

실패의 근본 원인은 단기 지표(ROAS)와 장기 자산(브랜드 에쿼티) 사이의 긴장을 조정하는 체계가 없기 때문이다. 퍼포먼스 마케터는 내일 ROAS 보고서를 내야 하고, 브랜드팀은 3년 후 인지도를 목표로 한다. 이 목표의 차이가 충돌을 만든다.

해결책은 퍼포먼스 소재 자체에 브랜딩을 내재화하는 것이다. 브랜딩을 위한 별도 캠페인을 만드는 것이 아니라, 모든 퍼포먼스 소재가 브랜드 아이덴티티를 담도록 설계하는 것이다.

`},{title:"13-2. 브랜딩이 내재화된 소재 vs 없는 소재의 차이",content:`
브랜딩이 내재화된 소재와 그렇지 않은 소재의 차이를 구체적으로 비교하면 이해가 쉽다.

**브랜딩 없는 소재 예시 (뷰티 브랜드):**
"지금 40% 세일 중! 5,000개 이상 리뷰 평점 4.9. 오늘만 무료배송. 지금 주문하기."

이 소재는 단기 전환을 유도하지만, 어떤 브랜드인지, 무슨 가치를 가진 브랜드인지 전혀 전달하지 못한다. 광고를 꺼도 이 브랜드가 기억에 남지 않는다.

**브랜딩이 내재화된 소재 예시 (동일 브랜드):**
"바쁜 아침을 위해 설계된 3분 스킨케어. 5,000명이 선택한 이유가 있습니다. 이번 주 특별 혜택으로 먼저 경험해보세요."

이 소재는 브랜드의 포지셔닝("바쁜 현대인을 위한"), 소셜 증거(5,000명 선택), 전환 유도(특별 혜택)를 동시에 담는다. 구매를 유도하면서도 브랜드 자산을 쌓는다.

차이는 메시지 구조에 있다. 브랜딩이 내재화된 소재는 "왜 이 브랜드인가"를 전환 메시지에 통합한다. 단순히 할인 정보를 전달하는 것이 아니라, 브랜드의 맥락 안에서 혜택을 제시한다.

`},{title:"13-3. 소재 제작 체크리스트 (톤/메시지/맥락 3요소)",content:`
브랜딩이 내재화된 퍼포먼스 소재를 만들기 위한 3요소 체크리스트:

**톤(Tone):**
- 이 소재의 언어 스타일이 브랜드 보이스 가이드와 일치하는가?
- 헤드카피, 서브카피, CTA 문구가 동일한 톤으로 쓰였는가?
- 비주얼(색상, 폰트, 이미지 스타일)이 브랜드 가이드라인에 맞는가?

**메시지(Message):**
- 이 소재의 핵심 메시지는 무엇인가? 한 문장으로 요약할 수 있는가?
- 핵심 메시지가 브랜드의 포지셔닝과 일치하는가?
- 소비자가 이 소재를 10초간 본 후 기억할 것은 무엇인가? 그것이 우리가 기억시키고 싶은 것과 일치하는가?

**맥락(Context):**
- 이 소재가 노출되는 채널, 포맷, 타겟에 맞는 맥락인가?
- 퍼널 단계(TOF/MOF/BOF)에 맞는 메시지 강도인가?
- 소비자가 이 소재를 볼 때 어떤 상황에 있는가? (피드 스크롤 중, 유튜브 시청 중, 검색 중 등)

이 세 가지를 소재 제작 전에 먼저 정의하고, 완성된 소재가 세 가지를 만족하는지 검토하는 것이 표준 프로세스가 되어야 한다.

`},{title:"13-4. 브랜드 일관성이 ROAS에 미치는 영향",content:`
브랜드 일관성이 ROAS에 미치는 영향은 단기적으로 보이지 않지만, 6~12개월의 누적 효과로 명확하게 나타난다.

첫째, 소재 피로도 감소. 브랜드 아이덴티티가 없는 소재는 빠르게 피로도가 쌓인다. 같은 소재를 며칠만 운영해도 성과가 급격히 떨어진다. 반면 브랜딩이 내재화된 소재는 반복 노출될수록 브랜드 각인이 쌓이면서, 동일 소재의 수명이 길어진다.

둘째, 직접 검색 유입 증가. 브랜딩이 쌓이면 소비자들이 직접 브랜드를 검색하기 시작한다. 이 오가닉 검색 유입은 광고 없이 발생하는 무비용 전환이다. 광고에만 의존하는 브랜드는 이 효과를 경험하지 못한다.

셋째, 전환율 상승. 동일한 퍼포먼스 광고를 보더라도, 이미 브랜드를 여러 번 접한 소비자는 처음 보는 소비자보다 전환율이 높다. 이 효과를 "브랜드 후광 효과(Brand Halo Effect)"라고 한다.

장기적으로 브랜드 일관성이 유지된 브랜드는 광고비를 줄여도 매출이 유지되는 구간에 도달한다. 이것이 "브랜딩 투자의 비선형적 보상"이다.

`},{title:"13-5. 소재 피로도와 브랜딩의 관계",content:`
소재 피로도(Creative Fatigue)는 동일한 광고 소재를 반복 노출하면 CTR과 전환율이 하락하는 현상이다. 퍼포먼스 마케터의 가장 큰 실무 과제 중 하나다.

소재 피로도의 징후:
- 주파수(Frequency) 증가에도 CTR 감소
- ROAS 지속적 하락
- CPM 상승 (플랫폼 알고리즘이 피로도를 감지하여 경매 순위를 낮춤)

소재 피로도에 브랜딩이 영향을 미치는 메커니즘이 있다. 브랜딩 요소가 있는 소재는 반복 노출 시 전환을 유도하는 것과 동시에 브랜드 기억을 강화한다. 따라서 피로도가 생겨 CTR이 낮아지더라도 브랜드 각인이라는 부산물이 남는다. 브랜딩 없는 소재는 CTR이 낮아지면 버리면 끝이지만, 브랜딩이 있는 소재는 높은 주파수로 운영한 기간이 브랜드 자산으로 전환된다.

소재 피로도 관리 전략:
- 핵심 브랜드 메시지를 유지하면서 비주얼 형태를 교체하는 "소재 리프레시"
- TOF/MOF/BOF 각 단계에 다른 소재를 운영하여 단계별 피로도를 분산
- UGC를 주기적으로 수집하여 소재 풀을 지속적으로 확장

**체크포인트**
- 퍼포먼스 소재에 브랜딩을 내재화하라. 별도 캠페인이 아닌 모든 소재에서 브랜드가 느껴져야 한다.
- 톤/메시지/맥락 3요소 체크리스트로 모든 소재를 검토하라.
- 브랜드 일관성이 장기적으로 ROAS를 높인다는 점을 데이터로 검증하고 팀에 공유하라.


`}]},{title:"Chapter 14. 브랜딩이 CRM 효과를 높이는 원리",subChapters:[{title:"14-1. 브랜드 인지 없이 전환된 고객의 문제",content:`
광고 효율 최적화에만 집중하다 보면, 브랜드를 전혀 모르는 상태에서 할인 광고 하나에 이끌려 구매하는 고객들이 많아진다. 이런 고객들의 특징이 있다.

첫째, 재구매율이 낮다. 브랜드 각인 없이 가격에 이끌려 구매했기 때문에, 다음 구매 시에도 가격이 가장 중요한 기준이 된다. 경쟁사가 더 싼 가격을 제시하면 이탈한다.

둘째, CRM 반응률이 낮다. 브랜드를 신뢰하거나 애정이 없기 때문에 이메일을 열지 않고, 메시지를 읽지 않는다. 발신자가 누구인지 기억도 못하는 경우도 있다.

셋째, LTV가 낮다. 낮은 재구매율과 낮은 CRM 반응률의 결과로, 이 고객들의 생애 가치는 브랜드를 인지하고 구매한 고객에 비해 현저히 낮다.

이 문제의 해결책은 TOF 브랜딩 투자를 통해 구매 전에 이미 브랜드를 알고 좋아하는 상태로 고객을 유입시키는 것이다. 브랜드를 알고 신뢰하는 상태에서 구매한 고객은 CRM에도 반응하고, 재구매율도 높다.

`},{title:"14-2. 브랜드 각인 → CRM 오픈율 상관관계",content:`
브랜드 각인의 강도와 CRM 오픈율 사이에는 강한 상관관계가 있다. 브랜드를 강하게 인식하는 고객일수록 이메일 제목에 브랜드명이 포함될 때 오픈률이 높고, 발신자 이름만 보고 오픈 여부를 결정한다.

이 상관관계는 실무적으로 다음을 의미한다.

TOF 광고비를 줄이고 BOF에만 집중하면, 단기적으로 ROAS는 유지되지만 CRM 오픈율이 점진적으로 하락한다. 브랜드 각인이 없는 신규 고객이 CRM 리스트에 계속 추가되기 때문이다. 반대로 TOF 투자로 브랜드 인지도가 높은 상태에서 유입된 고객은 CRM 리스트의 평균 오픈율을 끌어올린다.

브랜딩이 CRM 효율에 기여하는 메커니즘을 수치로 보여주는 방법: 브랜드 검색량이 높은 달(TOF 광고 집중 운영 기간)에 유입된 고객 코호트와 낮은 달에 유입된 코호트의 3개월 CRM 오픈율을 비교한다. 대부분의 경우 전자가 유의미하게 높다.

`},{title:"14-3. 브랜딩 투자의 지연 효과(Lagged Effect)",content:`
브랜딩 투자의 가장 큰 특징은 효과가 즉각적으로 나타나지 않는다는 것이다. 이를 "지연 효과(Lagged Effect)" 또는 "장기 효과(Long-Term Effect)"라고 한다.

마케팅 경제학자 레스 비넷(Les Binet)과 피터 필드(Peter Field)의 연구("The Long and the Short of It")에 따르면, 브랜딩 활동의 효과는 평균 6~12개월의 지연 기간 이후에 나타난다. 반면 퍼포먼스 광고의 효과는 즉각적이지만 단기적이다.

이 지연 효과 때문에 브랜딩 투자는 "효과 없는 것"으로 오해받기 쉽다. 3개월 기준으로 ROAS를 보면 TOF 광고는 효율이 낮아 보이고, BOF 광고만 효율이 좋아 보인다. 그러나 1년 이상의 시계열로 보면, TOF 투자를 지속한 브랜드의 전체 마케팅 효율이 훨씬 높다.

실무적 시사점: 브랜딩 투자의 성과는 3개월 단위가 아닌 6~12개월 단위로 평가해야 한다. 브랜드 검색량 추이, 직접 유입 비율, 오가닉 전환 비율, CRM 오픈율 등 브랜딩 효과를 간접적으로 측정하는 지표를 장기 트래킹한다.

`},{title:"14-4. 브랜드 자산이 CAC를 낮추는 방법",content:`
브랜드 자산이 쌓이면 CAC가 낮아지는 구체적인 경로는 세 가지다.

**오가닉 검색 유입 증가:** 브랜드를 알게 된 소비자들이 직접 검색을 통해 유입된다. 이 트래픽은 광고비가 들지 않으므로 효과적으로 CAC를 낮춘다.

**바이럴 추천 증가:** 만족한 고객이 자발적으로 브랜드를 추천하면서 신규 고객이 유입된다. 추천으로 유입된 고객은 CAC가 거의 0이고, 브랜드 신뢰도를 높고 시작하기 때문에 LTV도 높다.

**광고 효율 상승:** 브랜드 인지도가 높아지면 동일한 광고 소재라도 CTR이 높아지고 전환율이 올라간다. 광고비가 동일해도 더 많은 전환을 만들 수 있어 CPA(=CAC)가 낮아진다.

이 세 가지 경로가 누적되면, 브랜딩 투자가 충분히 이루어진 브랜드는 광고 의존도가 낮아지고 수익성이 구조적으로 개선된다. 이것이 장기 브랜드 자산 구축이 사업 전략의 핵심이 되어야 하는 이유다.

`},{title:"14-5. 유기적 채널(SEO, 바이럴)과 브랜딩의 관계",content:`
유기적 채널(오가닉 채널)은 광고비 없이 발생하는 트래픽과 전환이다. SEO(검색엔진 최적화), 바이럴(입소문), 커뮤니티, 콘텐츠 마케팅이 대표적이다.

브랜딩이 오가닉 채널에 미치는 영향:

**SEO와 브랜딩:** 브랜드 검색량이 높을수록 구글/네이버 알고리즘이 이 브랜드를 신뢰할 만한 사이트로 평가한다. 브랜드 검색량 증가 → 도메인 권위 상승 → 비브랜드 키워드(제품 카테고리 검색)에서도 순위 상승의 선순환이 발생한다.

**바이럴과 브랜딩:** 강한 브랜드 아이덴티티와 독특한 브랜드 자산(패키지, 슬로건, 경험)을 가진 브랜드는 소비자들이 자발적으로 공유하고 싶어 한다. 인스타그램에 공유하기 좋은 패키지 디자인, 언박싱 경험, 브랜드 철학이 바이럴의 연료가 된다.

**커뮤니티와 브랜딩:** 브랜드 가치와 일치하는 소비자 커뮤니티를 형성한 브랜드는, 커뮤니티 구성원들이 서로 브랜드를 추천하고 옹호하는 자생적 마케팅 생태계를 갖게 된다.

유기적 채널과 유료 채널의 이상적인 비율은 사업 규모와 성숙도에 따라 다르다. 초기에는 유료 채널 의존도가 높을 수밖에 없지만, 장기적으로 오가닉 비율을 30~50%까지 높이는 것이 건강한 D2C 사업 구조다.

**체크포인트**
- 브랜드 인지 없이 전환된 고객은 LTV가 낮다. TOF 투자로 브랜드를 알고 구매하는 고객 비율을 높여라.
- 브랜딩 효과는 6~12개월 지연됩니다. 장기 지표(브랜드 검색량, 직접 유입, CRM 오픈율)로 평가하라.
- 브랜드 자산이 CAC를 낮추는 구체적 경로(오가닉 검색, 바이럴, 광고 효율)를 이해하고 측정하라.


`}]}]},{title:"PART 4: 통합 전략 — 퍼널·CRM·브랜딩을 하나로",chapters:[{title:"Chapter 15. LTV:CAC 프레임워크로 사업 진단하기",subChapters:[{title:"15-1. LTV:CAC 비율 해석 기준",content:`
LTV:CAC 비율은 사업의 경제적 지속가능성을 가장 빠르게 진단하는 도구다. 이 비율 하나로 "지금 마케팅이 올바른 방향으로 가고 있는가"를 판단할 수 있다.

**LTV:CAC 1:1 미만 (위험 구간)**

고객을 한 명 획득할 때마다 적자가 발생하는 구조다. 신규 고객을 유치할수록 손해가 누적된다. 이 구간에서 규모를 키우는 것은 손실을 키우는 것과 같다. 즉각적인 구조 개선이 필요하다.

주요 원인: 광고 CAC가 너무 높거나, LTV를 결정하는 재구매율이 너무 낮거나, 마진율이 낮아 LTV 자체가 작은 경우다.

처방: 제품 마진 구조 점검, 재구매율 개선을 위한 온보딩 강화, CAC 절감을 위한 오가닉 채널 투자.

**LTV:CAC 1~3:1 (생존 가능 구간)**

수익성이 있지만 성장을 위한 재투자 여력이 부족하다. 대부분의 초기 D2C 브랜드가 이 구간에 있다. 목표는 이 구간을 최대한 빠르게 통과하는 것이다.

처방: LTV 개선(재구매율, AOV)에 집중하면서 광고 효율도 동시에 최적화. 이 구간에서 예산을 대폭 늘리는 것은 위험하다.

**LTV:CAC 3:1 이상 (건강한 구간)**

광고비를 써서 고객을 획득하는 것이 명확하게 수익적이다. 이 구간에서는 적극적인 성장 투자가 정당화된다. CAC가 다소 높아져도(3:1 유지 기준) 예산을 늘려 성장 속도를 높이는 것이 올바른 전략이다.

**LTV:CAC 5:1 이상 (과소투자 경고)**

이 구간에서는 오히려 마케팅에 충분히 투자하지 않고 있을 가능성이 있다. 더 적극적으로 신규 고객을 유치해도 수익성을 유지할 여력이 있다. 성장 기회를 놓치고 있을 수 있다.

`},{title:"15-2. 단계별 처방: 비율에 따른 전략 선택",content:`
LTV:CAC 비율에 따른 구체적 처방 전략:

| 비율 | 진단 | 우선 전략 |
|---|---|---|
| 1:1 미만 | 구조적 적자 | LTV 개선, 마진 점검, CAC 절감 |
| 1~2:1 | 생존 한계 | 재구매율 개선, 온보딩 강화 |
| 2~3:1 | 개선 중 | A/B 테스트로 점진적 최적화 |
| 3~5:1 | 건강 | 성장 투자 시작, 채널 확장 |
| 5:1 이상 | 과소투자 | 예산 확대, 신규 채널 진입 |

LTV:CAC 개선의 레버는 네 가지다. (1) CAC 낮추기 (2) LTV 높이기 (3) 두 가지 동시 개선 (4) LTV가 실현되는 속도를 높이기(CLTV Payback Period 단축).

초기 사업에서 가장 빠른 효과를 내는 레버는 재구매율 개선이다. 첫 구매 후 30일 내 재구매율이 10%p 상승하면 전체 LTV가 25~40% 향상되는 경우가 많다. 반면 CAC를 10% 낮추는 것은 광고 최적화의 한계로 인해 시간이 더 걸린다.

`},{title:"15-3. CAC를 낮추는 방법 vs LTV를 높이는 방법",content:`
두 방향을 명확히 정리한다.

**CAC를 낮추는 방법:**
- 오가닉 채널 강화: SEO, 블로그, 유튜브, 인스타그램 오가닉 콘텐츠
- 추천 프로그램(Referral): 기존 고객이 친구를 데려올 때 혜택 제공
- 커뮤니티 마케팅: 브랜드 커뮤니티 구축으로 자발적 전파 유도
- TOF 광고 효율화: 더 낮은 CPM에 더 많은 잠재 고객 도달
- 소재 최적화: CTR과 전환율이 높은 소재로 CPA 개선
- 어트리뷰션 개선: 실제 전환에 기여하는 채널에 예산 집중

**LTV를 높이는 방법:**
- 온보딩 개선: 첫 구매 후 30일 경험 최적화로 재구매율 상승
- 로열티 프로그램: 반복 구매 인센티브로 구매 빈도 상승
- 업셀링/크로스셀링: AOV 상승
- 정기 구독 모델 도입: 구매 주기와 유지율 안정화
- 이탈 방지 자동화: 이탈 위험 고객 조기 포착 및 재활성화
- 제품 품질 개선: 근본적으로 고객 만족도를 높여 자연 재구매율 상승

`},{title:"15-4. 사업 단계별 우선순위",content:`
사업의 성장 단계에 따라 어디에 집중해야 하는지가 달라진다.

**초기 단계 (월 매출 1,000만원 미만):**
우선순위: 제품-시장 적합성(PMF) 확인 → 재구매율 측정 → 온보딩 설계

이 단계에서 가장 중요한 것은 "이 제품이 정말 고객의 문제를 해결하는가"를 확인하는 것이다. 재구매율이 30% 이상이라면 PMF가 있는 신호다. PMF가 없는 상태에서 광고비를 늘리면 손실만 커진다.

**성장 단계 (월 매출 1,000만~5,000만원):**
우선순위: CAC 최적화 → 퍼널 전 단계 운영 → CRM 자동화 구축

광고 채널과 소재를 테스트하며 효율적인 CAC를 찾는 시기. 동시에 CRM 자동화를 구축하여 기존 고객 LTV를 높이기 시작한다.

**스케일업 단계 (월 매출 5,000만원 이상):**
우선순위: 브랜딩 투자 확대 → 신규 채널 진입 → 국제화 또는 제품 라인 확장

이 단계에서는 기존 채널의 한계수익체감이 시작된다. 새로운 채널과 시장으로 확장하면서 브랜드 자산을 구축하는 것이 장기 성장의 기반이 된다.

`},{title:"15-5. 사업 수익성 개선 실전 사례 분석",content:`
가상의 D2C 뷰티 브랜드 사례를 통해 LTV:CAC 프레임워크의 실전 적용을 살펴본다.

**현황 (진단 전):**
- 월 광고비: 500만원
- 월 신규 고객: 100명 → CAC: 50,000원
- AOV: 45,000원 (1회 구매 기준)
- 30일 재구매율: 15%
- LTV (12개월 기준): 약 53,000원
- LTV:CAC = 53,000 : 50,000 ≒ 1.06:1 (위험 구간)

**문제 진단:**
재구매율 15%는 업계 평균(25~35%)보다 현저히 낮다. 온보딩 커뮤니케이션이 없고, 첫 구매 후 아무런 CRM이 없는 상태. 또한 광고 소재가 할인에만 집중되어 브랜드 각인이 없다.

**처방 및 실행:**
1. 온보딩 이메일 시퀀스 5개 구축 (구매 당일 → 3일 후 → 7일 후 → 14일 후 → 30일 후)
2. 첫 구매 후 30일 내 재구매 시 10% 적립 혜택 제공
3. TOF 소재 30%를 브랜드 스토리 중심으로 교체

**90일 후 결과:**
- 30일 재구매율: 15% → 28% 개선
- AOV: 45,000원 → 52,000원 (번들 추천 효과)
- LTV (12개월 예측): 53,000원 → 84,000원
- LTV:CAC = 84,000 : 50,000 = 1.68:1 (생존 구간으로 진입)

추가 6개월 운영 후 CRM 자동화 확장과 TOF 브랜딩 효과가 누적되어 LTV:CAC 3:1 목표에 근접.

**체크포인트**
- LTV:CAC를 월별로 측정하고, 비율에 맞는 처방을 적용하라.
- 재구매율 개선이 가장 빠른 LTV 향상 레버다.
- 사업 단계에 따라 집중 영역을 명확히 구분하라.


`}]},{title:"Chapter 16. 풀퍼널 운영 플레이북",subChapters:[{title:"16-1. 월 예산 규모별 퍼널 운영 방법",content:`
예산 규모에 따라 퍼널 운영 방식은 크게 달라진다. 제한된 예산에서 무리하게 풀퍼널을 운영하면 각 단계가 모두 부족해진다. 예산에 맞는 현실적인 운영 방법이 필요하다.

**월 광고비 50만원 미만 (초소규모)**

이 예산에서는 퍼널 전 단계 운영이 불가능하다. 선택과 집중이 필요하다.

추천 전략: BOF 90% + 최소한의 MOF 10%

- BOF: 사이트 방문자 리타겟팅에 집중. 픽셀이 충분한 데이터를 학습할 수 있도록 단일 캠페인 운영
- TOF는 광고 대신 SNS 오가닉 콘텐츠, 블로그, 커뮤니티 활동으로 대체
- CRM: 이메일 자동화 최소 3종 구축 (웰컴, 장바구니 이탈, 온보딩)

**월 광고비 50~200만원 (초기 성장)**

TOF를 도입하기 시작하는 단계. 브랜드 인지층을 만들어야 리타겟팅 모수가 고갈되지 않는다.

추천 배분: TOF 20~25% / MOF 25~30% / BOF 45~55%

- TOF: 브랜드 스토리 또는 인지 소재 1~2개, 최대한 넓은 오디언스로 설정
- MOF: 사이트 방문자, 영상 시청자 리타겟팅
- BOF: 장바구니 추가, 상품 페이지 재방문자 집중 타겟

**월 광고비 200~500만원 (안정 성장)**

세 단계를 모두 운영하며 각 단계를 체계적으로 테스트할 수 있는 규모.

추천 배분: TOF 30~35% / MOF 25~30% / BOF 35~45%

- TOF: 인지 소재 3~5개 동시 테스트, A/B 테스트 체계화
- MOF: 세그먼트별 리타겟팅 (사이트 방문 vs 상품 조회 vs 영상 시청 분리)
- BOF: 전환 최적화 + 장바구니 이탈 복구 다중 소재 운영
- CRM: 자동화 7종 완성, 주기 캠페인 월 2~4회 추가

**월 광고비 500만원 이상 (스케일업)**

브랜딩에 본격 투자하고, 다채널 확장을 시작하는 단계.

추천 배분: TOF 40~45% / MOF 20~25% / BOF 30~35%

- TOF: 영상 크리에이티브 퀄리티 업그레이드, 유튜브/틱톡 등 채널 확장
- 인플루언서 마케팅을 TOF의 일환으로 통합
- CRM: 고급 개인화, 예측 모델 기반 세그먼테이션 도입

`},{title:"16-2. 소재 포트폴리오 설계 (TOF:MOF:BOF 배분)",content:`
풀퍼널 운영에서 소재 포트폴리오 관리는 핵심 역량이다. 각 단계에 필요한 소재가 충분히 준비되어 있어야 한다.

권장 소재 포트폴리오 (월 200만원+ 기준):

**TOF 소재 (총 소재의 30~40%):**
- 브랜드 스토리 영상 (60초+): 1개
- 문제-해결 숏폼 (15~30초): 2~3개
- 라이프스타일 이미지: 3~5개
- UGC 스타일 영상 (실제 사용 장면): 1~2개

**MOF 소재 (총 소재의 25~35%):**
- 고객 리뷰 집합 이미지/영상: 2~3개
- 비포/애프터 또는 수치 강조: 2개
- 제품 사용 방법 영상: 1~2개
- FAQ/반론 해소 소재: 1~2개

**BOF 소재 (총 소재의 30~40%):**
- 오퍼 중심 소재 (현재 혜택 강조): 2~3개
- 장바구니 이탈 복구 소재 (마찰 해소 포함): 1~2개
- 긴박감 강조 소재 (한정 수량/기간): 1~2개
- 리뷰 + 오퍼 결합 소재: 1~2개

소재 포트폴리오 관리 원칙: 어느 한 단계의 소재가 고갈되면 전체 퍼널 효율이 떨어진다. 각 단계의 소재 피로도를 주간 단위로 모니터링하고, 소재 수명이 다 하기 전에 새 소재를 준비해야 한다.

`},{title:"16-3. 주간 운영 루틴",content:`
풀퍼널 운영의 실무적 리듬을 만드는 것이 중요하다. 데이터 확인이 없으면 문제를 늦게 발견하고, 조정이 없으면 비효율이 누적된다.

**월요일: 지난 주 성과 리뷰**
- 퍼널 단계별 KPI 확인 (TOF: CPM, 도달 / MOF: CTR, 리타겟팅 모수 / BOF: ROAS, CPA, CVR)
- 소재별 성과 확인 (주파수, CTR, 전환율)
- 이상 징후 식별: 어느 단계에서 성과가 급변했는가?
- CRM 자동화 성과 확인 (오픈율, 클릭률, 전환율)

**수요일: 소재 및 캠페인 조정**
- 피로도가 쌓인 소재 교체 또는 새 소재 론칭
- 예산 배분 조정 (성과가 좋은 캠페인/소재에 예산 이동)
- 새로운 테스트 시작 (소재 변수, 타겟 변수 1개)
- CRM 이번 주 캠페인 발송 계획 확인

**금요일: 다음 주 계획 수립**
- 이번 주 주요 학습 정리
- 다음 주 론칭 예정 소재 검토
- 시즌/이벤트에 맞는 CRM 캠페인 준비
- 소재 제작 요청 (필요시)

`},{title:"16-4. 소재 테스트 프레임워크",content:`
소재 테스트를 체계적으로 운영하기 위한 프레임워크:

**Step 1: 테스트 가설 수립**
"TOF 소재에서 [변수 A]를 [변수 B]로 바꾸면 [지표]가 개선될 것이다."
예: "TOF 영상에서 첫 3초 훅을 '문제 제기형'에서 '놀라운 주장형'으로 바꾸면 3초 뷰율이 5%p 이상 상승할 것이다."

**Step 2: 테스트 설계**
- 단일 변수 원칙: 한 번에 하나의 변수만 변경
- 충분한 샘플: 각 버전에 최소 1,000회 이상 노출 확보 후 판단
- 동일 기간 운영: 동시에 A/B를 운영하여 외부 변수 영향 최소화

**Step 3: 결과 기록**
- 테스트 기간, 변수, 결과 수치, 결론을 표로 기록
- "우리 브랜드에서 효과적인 소재 패턴" 아카이브 구축

**Step 4: 적용 및 확장**
- 승리한 버전을 기준 소재로 채택
- 학습한 패턴을 다음 소재 제작에 반영

**소재 테스트 우선순위 결정 기준:**
가장 많은 예산이 집행되는 단계/포맷을 먼저 테스트한다. 예산이 가장 많이 집중된 곳에서 10%만 개선되어도 가장 큰 임팩트를 만들 수 있기 때문이다.

`},{title:"16-5. 채널 믹스 최적화",content:`
단일 채널 의존은 위험하다. 알고리즘 변경, 정책 변경, 경쟁 심화로 채널 효율이 급변할 수 있기 때문이다. 복수 채널을 균형 있게 운영하는 채널 믹스 전략이 필요하다.

주요 채널별 역할과 특성:

**Meta(Instagram/Facebook):** D2C 브랜드의 핵심 채널. 정교한 타겟팅, 다양한 광고 포맷(이미지, 영상, 스토리, 릴스), 강력한 리타겟팅. TOF~BOF 전 단계 운영 가능. 그러나 CPM 상승세와 iOS 14 이후 측정 한계가 과제.

**Google/YouTube:** 구매 의도가 있는 소비자를 포착하는 데 강점. 검색 광고는 BOF 효율이 높고, 유튜브는 TOF 영상 광고에 효과적. 브랜드 검색 광고는 필수.

**카카오 모먼트:** 국내 특화. 카카오 생태계(카카오톡, 다음 포털, 카카오맵 등) 내 광고. 중장년층 소비자 비중이 높고, 리타겟팅 모수를 카카오 채널(CRM)과 연계할 수 있는 장점.

**네이버 광고:** 국내 검색 시장 점유율 기준 필수 채널. 네이버 쇼핑, 브랜드 검색 광고, 파워링크 등.

**틱톡/유튜브 쇼츠/인스타그램 릴스:** 숏폼 영상 채널. TOF 인지 확산에 효과적. 알고리즘 기반 오가닉 도달이 유료 광고보다 강하게 작동하는 경우도 있다.

채널 확장 원칙: 현재 채널에서 효율적인 소재와 메시지를 먼저 검증한 후, 다른 채널로 확장한다. 새 채널은 소규모 예산으로 테스트하고, 효율이 검증된 후 예산을 늘린다.

**체크포인트**
- 예산 규모에 맞는 현실적인 퍼널 운영 방식을 선택하라. 모든 단계를 동시에 운영하려다 모두 부족해지는 함정을 피하라.
- 소재 포트폴리오를 단계별로 충분히 준비하라. 소재 고갈이 가장 흔한 병목이다.
- 주간 운영 루틴을 만들어 데이터 리뷰 → 조정 → 테스트의 사이클을 정례화하라.


`}]},{title:"Chapter 17. 스케일업 로드맵",subChapters:[{title:"17-1. 스케일업의 조건: 언제 예산을 늘려야 하는가",content:`
예산을 늘리는 것이 성장을 만들 때도 있고, 손실을 키울 때도 있다. 예산 확대의 올바른 타이밍을 판단하는 기준이 필요하다.

스케일업 준비 체크리스트:

**제품 측면:**
- 재구매율 25% 이상 (30일 기준)
- 평균 별점 4.3점 이상, 리뷰 100개 이상
- 반품율 10% 미만

**경제성 측면:**
- LTV:CAC 3:1 이상 유지 중
- 손익분기점(BEP) 돌파
- 신규 고객 CAC 회수 기간(Payback Period) 3~6개월 이내

**운영 측면:**
- 주문 처리 및 배송 프로세스 안정화
- CS(고객 서비스) 응대 체계 갖춤
- CRM 자동화 최소 5종 가동 중

이 조건들이 갖추어지지 않은 상태에서 예산을 급격히 늘리면, 제품 불만과 CS 과부하, CAC 상승, LTV 하락이 동시에 발생하여 오히려 사업이 어려워질 수 있다.

예산 확대의 안전한 방법: 주 단위 또는 월 단위로 10~20% 씩 점진적으로 늘리면서 LTV:CAC 비율이 유지되는지 확인한다. 갑작스러운 대폭 증액은 광고 알고리즘 학습을 교란하고 CPM을 급등시킬 수 있다.

`},{title:"17-2. 한계수익체감과 채널 포화 대응",content:`
한계수익체감(Diminishing Marginal Return)은 광고비를 늘릴수록 추가 매출이 점점 줄어드는 현상이다. 특정 채널에서 일정 규모 이상의 예산을 집행하면 반드시 경험하게 된다.

한계수익체감의 원인:
- 타겟 오디언스 포화: 보여줄 수 있는 잠재 고객이 한정적이라 동일 사람에게 반복 노출되어 피로도 증가
- 경쟁 심화: 예산이 늘어나면 경매 단가(CPM)가 상승
- 소재 피로도: 같은 소재를 오래 운영하면 반응율 하락

한계수익체감 대응 전략:

**오디언스 확장:** TOF 타겟을 넓혀 새로운 잠재 고객층에 도달한다. 유사 타겟(Lookalike Audience)의 유사도를 낮추거나(1%→5%), 새로운 관심사 타겟 테스트.

**소재 지속 신규 투입:** 소재 피로도가 오기 전에 새 소재를 준비하여 교체한다. 소재 제작 파이프라인을 안정화해야 스케일업이 지속 가능하다.

**채널 다변화:** 주 채널의 한계가 오면 보조 채널에서 새로운 모수를 확보한다. Meta → 유튜브 → 틱톡 → 네이버 쇼핑 순으로 단계적 확장.

**오가닉 강화:** 유료 채널의 한계가 오는 시점에서 오가닉(SEO, 콘텐츠, 커뮤니티)의 중요성이 커진다. 유료 채널과 오가닉의 비율을 의도적으로 관리한다.

`},{title:"17-3. 신규 채널 진입 전략",content:`
새로운 채널에 진입할 때는 체계적인 접근이 필요하다. 단순히 "이 채널이 잘 된다더라"는 이유로 진입하면 시간과 예산을 낭비할 수 있다.

신규 채널 진입 프로세스:

**1단계: 채널 타당성 검토**
이 채널의 이용자가 우리 타겟과 일치하는가? 이 채널의 광고 형태가 우리 제품과 맞는가? 이 채널에서 경쟁 브랜드들이 어떻게 운영하고 있는가?

**2단계: 소규모 파일럿 테스트**
전체 예산의 5~10%를 새 채널에 할당하여 4~8주 운영한다. 기존 채널의 핵심 소재를 새 채널 포맷에 맞게 변환하여 사용한다.

**3단계: 성과 평가**
CPA 또는 ROAS가 기존 채널과 비교하여 합리적인 수준인가? 단, 새 채널은 학습 기간이 필요하므로 4~8주는 지켜보아야 한다. 채널의 특성에 맞게 평가 지표도 달리 설정해야 한다(예: 틱톡은 TOF 성격이 강하므로 브랜드 검색량 증가를 함께 측정).

**4단계: 스케일 또는 철수**
파일럿 결과가 좋으면 점진적으로 예산을 확대한다. 결과가 나쁘면 원인을 분석하고, 소재나 타겟을 수정하여 재도전하거나 해당 채널을 포기한다.

`},{title:"17-4. 브랜드 확장과 신제품 출시 시 퍼널 재설계",content:`
기존 제품에서 쌓은 브랜드 자산을 신제품 출시에 레버리지하는 것이 D2C 브랜드의 핵심 성장 전략이다. 그러나 신제품 출시는 퍼널 재설계를 요구한다.

**기존 고객 활용 (CRM 레버리지):**
신제품 출시 시 가장 효과적인 첫 번째 타겟은 기존 충성 고객이다. 이들은 브랜드를 신뢰하고, 신제품에 대한 관심이 높으며, 첫 구매 CAC가 거의 0이다. 사전 예약, 얼리버드 혜택, VIP 우선 구매 등으로 기존 고객을 첫 번째 구매자로 전환한다.

**UGC와 리뷰 빠른 수집:**
신제품은 리뷰가 없어서 소셜 증거가 부족하다. 첫 구매자들에게 적극적으로 리뷰 작성을 요청하고, 베타 테스터 프로그램을 통해 출시 전에 리뷰를 확보하는 것이 효과적이다.

**신제품 전용 퍼널 설계:**
기존 제품의 퍼널과 다른, 신제품만의 랜딩 페이지와 소재 체계를 만든다. 기존 제품 광고에 신제품을 끼워 넣는 방식은 메시지가 흐려진다.

**기존 브랜드 자산 레버리지:**
신제품 소재에 기존 브랜드의 신뢰 요소(누적 고객 수, 대표 제품 성과, 브랜드 스토리)를 함께 담아 새로운 제품에 대한 초기 신뢰를 빠르게 구축한다.

`},{title:"17-5. 장기 브랜드 자산 구축 로드맵",content:`
퍼포먼스 마케터의 시각에서 "장기 브랜드 자산"은 추상적으로 느껴질 수 있다. 그러나 이를 측정 가능한 지표와 연결하면 구체적인 목표로 만들 수 있다.

**단기 (0~6개월): 기반 구축**
- 브랜드 아이덴티티 문서화 완성
- 브랜드 가이드라인 기반 소재 표준화
- TOF 소재 포트폴리오 구축
- CRM 자동화 7종 완성
- 목표 지표: 브랜드 검색량 월 +10%, 재구매율 25% 달성

**중기 (6~18개월): 자산 축적**
- 브랜드 소셜 채널 콘텐츠 전략 실행 (주 2~3회 오가닉 포스팅)
- 인플루언서 파트너십 구축 (마이크로 3~5명)
- 고객 커뮤니티 또는 브랜드 멤버십 초기 구축
- 블로그/SEO 콘텐츠 누적
- 목표 지표: 오가닉 유입 전체 트래픽의 20%, 브랜드 NPS 40 이상

**장기 (18개월~): 자산 레버리지**
- 브랜드 앰배서더 프로그램 운영
- 오프라인 경험(팝업스토어, 브랜드 이벤트) 접목
- 미디어 노출(언론, 방송) 전략 실행
- 신제품/신카테고리 확장 시 기존 브랜드 자산 레버리지
- 목표 지표: 오가닉 유입 30% 이상, CAC 전년 대비 15% 감소, 브랜드 검색량 지속 성장

장기 브랜드 자산 구축에서 가장 중요한 것은 일관성과 지속성이다. 3개월 집중하고 중단하는 것은 효과가 없다. 작더라도 꾸준히 브랜드 자산에 투자하는 것이 복리의 원리로 쌓인다.

**체크포인트**
- 스케일업 전 재구매율, LTV:CAC, 운영 안정성 체크리스트를 확인하라.
- 한계수익체감을 예측하고 오디언스 확장, 소재 교체, 채널 다변화를 선제적으로 준비하라.
- 장기 브랜드 자산 목표를 측정 가능한 지표로 정의하고 분기별로 추적하라.


# 부록


## 부록 A. 핵심 지표 공식집

이 부록은 본문에서 등장한 핵심 마케팅 지표의 정의, 계산 공식, 해석 기준을 정리한 레퍼런스다.


`},{title:"A-1. LTV (Customer Lifetime Value, 고객 생애 가치)",content:`
**정의:** 한 고객이 브랜드와의 관계 동안 발생시키는 총 수익의 현재 가치.

**계산 공식 (단순 방식):**
LTV = 평균 주문 금액(AOV) × 연간 구매 횟수 × 고객 유지 기간(년)

**예시:** AOV 5만원 × 연 4회 × 3년 = LTV 60만원

**마진 반영 방식:**
LTV = AOV × 구매 횟수 × 유지 기간 × 마진율

**해석 기준:**
- LTV가 CAC의 3배 이상이면 건강한 수익 구조
- LTV가 낮다면: 재구매율, AOV, 마진율 순으로 원인 점검


`},{title:"A-2. CAC (Customer Acquisition Cost, 고객 획득 비용)",content:`
**정의:** 신규 고객 한 명을 획득하는 데 드는 총 비용.

**계산 공식:**
CAC = 총 마케팅·영업 비용 / 신규 고객 수

**예시:** 광고비 500만원 + 에이전시비 100만원 = 600만원 / 신규 고객 120명 = CAC 5만원

**주의:** 에이전시 수수료, 소재 제작비, 도구 비용도 포함하는 것이 정확한 CAC 계산이다.

**해석 기준:**
- CAC < LTV : 기본 조건 충족
- CAC Payback Period = CAC / 월 마진 → 3~6개월 이내가 이상적


`},{title:"A-3. ROAS (Return on Ad Spend, 광고비 대비 매출)",content:`
**정의:** 광고비 1원당 발생한 매출.

**계산 공식:**
ROAS = 광고 기여 매출 / 광고비 × 100 (또는 단순 배율로 표현)

**예시:** 광고비 100만원, 기여 매출 400만원 → ROAS 400% 또는 4x

**해석 기준:**
- 손익분기 ROAS = (1 / 마진율) × 100
- 마진율 30%라면 손익분기 ROAS = 333%
- 손익분기 ROAS 이상이어야 광고가 수익에 기여

**주의:** ROAS만으로 판단하면 안 된다. 신규 고객 ROAS vs 재구매 고객 ROAS를 분리하고, LTV까지 고려해야 진짜 수익성이 보인다.


`},{title:"A-4. CPA (Cost Per Acquisition)",content:`
**정의:** 전환 한 건당 발생하는 광고비. 구매가 전환인 경우 CAC와 동일하지만, 목표 행동이 회원가입, 리드, 구독 등인 경우 CPA로 구분한다.

**계산 공식:**
CPA = 광고비 / 전환 수

**목표 CPA 설정:** 목표 ROAS와 평균 주문금액을 역산하여 목표 CPA를 결정한다.
목표 CPA = AOV / 목표 ROAS

**예시:** AOV 5만원, 목표 ROAS 3x → 목표 CPA = 50,000 / 3 = 약 16,700원


`},{title:"A-5. CTR (Click-Through Rate, 클릭률)",content:`
**정의:** 광고 노출 대비 클릭 비율.

**계산 공식:**
CTR = 클릭 수 / 노출 수 × 100 (%)

**업계 평균 벤치마크 (D2C 이커머스 기준):**
- Meta 피드 광고: 0.8~2%
- Meta 스토리 광고: 0.5~1.5%
- Google 검색 광고: 3~8%
- Google 디스플레이: 0.1~0.5%

**해석:** CTR이 낮다면 소재 또는 타겟팅이 문제. CTR이 높은데 전환율이 낮다면 랜딩 페이지 또는 제품-소재 간 메시지 불일치가 문제.


`},{title:"A-6. CVR (Conversion Rate, 전환율)",content:`
**정의:** 특정 페이지 방문자 또는 광고 클릭자 중 목표 행동(구매, 가입 등)을 완료한 비율.

**계산 공식:**
CVR = 전환 수 / 방문(클릭) 수 × 100 (%)

**D2C 이커머스 벤치마크:**
- 상세 페이지 → 구매: 1~3% (일반), 3~5% (최적화된 경우)
- 장바구니 → 구매: 25~35%

**CVR 개선 레버:** 랜딩 페이지 소재-메시지 일관성, 마찰 요소 제거, 소셜 증거 추가, 페이지 로딩 속도.


`},{title:"A-7. Churn Rate (이탈율)",content:`
**정의:** 특정 기간 동안 브랜드와의 관계를 끊은(재구매하지 않는) 고객 비율.

**계산 공식:**
Churn Rate = 이탈 고객 수 / 기간 초 총 고객 수 × 100 (%)

이탈의 정의는 비즈니스마다 다르다. 소모품은 90~120일 미구매, 내구재는 12~24개월 미구매를 이탈로 정의하는 것이 일반적이다.

**Retention Rate (유지율):**
Retention Rate = 100% - Churn Rate

**해석:** Churn Rate 5%/월은 연간 46% 고객이 이탈한다는 의미. 이탈율을 5%→3%로 낮추면 LTV가 약 40% 증가한다.


`},{title:"A-8. AOV (Average Order Value, 평균 주문 금액)",content:`
**계산 공식:**
AOV = 총 매출 / 주문 수

**개선 방법:** 번들 구성, 업셀링, 무료 배송 임계값 설정, 크로스셀링 추천 알고리즘.


`},{title:"A-9. CPM (Cost Per Mille, 1,000회 노출당 비용)",content:`
**계산 공식:**
CPM = 광고비 / 노출 수 × 1,000

**활용:** TOF 광고의 효율성 지표. CPM이 낮을수록 같은 예산으로 더 많은 노출을 만든다.

**국내 벤치마크 (Meta, 2024년 기준):**
- 일반 타겟: CPM 5,000~15,000원
- 좁은 타겟(관심사 세분화): CPM 10,000~30,000원


`},{title:"A-10. LTV:CAC 요약표",content:`
| 비율 | 상태 | 권장 행동 |
|---|---|---|
| 1:1 미만 | 위험 | 즉각 구조 개선 |
| 1~2:1 | 생존 한계 | 재구매율 집중 개선 |
| 2~3:1 | 개선 중 | 지속 최적화 |
| 3~5:1 | 건강 | 성장 투자 시작 |
| 5:1 이상 | 과소투자 | 예산 확대 고려 |


## 부록 B. 소재 제작 체크리스트

소재를 제작하고 집행하기 전에 아래 체크리스트를 단계별로 확인한다.


`},{title:"TOF 소재 체크리스트",content:`
**목적 및 타겟 확인**
- [ ] 이 소재의 목적이 명확한가? (브랜드 인지 / 신규 모수 유입)
- [ ] 타겟이 브랜드를 처음 접하는 사람으로 설정되었는가?
- [ ] 이 소재가 처음 보는 사람에게 이해 가능한가?

**훅 (첫 1~3초)**
- [ ] 1초 안에 멈추게 만드는 요소가 있는가?
- [ ] 문제 제기, 놀라운 주장, 강렬한 시각적 요소 중 하나가 포함되었는가?
- [ ] 영상의 경우 3초 뷰율이 기대되는가?

**브랜드 메시지**
- [ ] 이 소재에서 브랜드의 핵심 가치 제안이 30초 이내에 전달되는가?
- [ ] 브랜드 색상, 폰트, 톤이 가이드라인에 맞는가?
- [ ] 브랜드명 또는 로고가 자연스럽게 포함되었는가?

**CTA**
- [ ] CTA가 구매 압박 없이 부드럽게 설계되었는가? (더 알아보기, 확인하기 등)

**소재 형식**
- [ ] 해당 플랫폼/포맷에 최적화된 비율과 길이인가? (예: 릴스 9:16, 60초 이내)
- [ ] 자막이 포함되었는가? (모바일 무음 시청 고려)


`},{title:"MOF 소재 체크리스트",content:`
**목적 및 타겟 확인**
- [ ] 이 소재의 타겟이 브랜드를 이미 아는 사람인가?
- [ ] 소재의 목적이 설득과 고려군 진입인가?

**소셜 증거**
- [ ] 구체적인 리뷰, 수치, UGC 중 하나 이상이 포함되었는가?
- [ ] 수치가 구체적이고 사실 기반인가? (예: "5,000명 리뷰" vs 막연한 "많은 고객")
- [ ] 소셜 증거의 출처가 명확한가?

**설득 요소**
- [ ] 소비자가 구매를 망설이는 주요 이유(반론)를 해소하는 내용이 있는가?
- [ ] 경쟁 제품 대비 차별점이 명확하게 전달되는가?

**메시지 관련성**
- [ ] 이 소재를 보는 타겟의 현재 관심사와 관련이 있는가?
- [ ] 이 소재가 소비자의 "이 브랜드가 나에게 맞는가?" 질문에 답하는가?


`},{title:"BOF 소재 체크리스트",content:`
**목적 및 타겟 확인**
- [ ] 이 소재의 타겟이 구매 의도를 보인 사람인가? (장바구니 추가, 상품 페이지 재방문 등)
- [ ] 소재의 목적이 최종 구매 전환인가?

**오퍼 설계**
- [ ] 긴박감 요소가 포함되었는가? (사실 기반 한정 기간/수량)
- [ ] 혜택이 명확하게 전달되는가? (금액, 혜택 내용)
- [ ] 혜택이 브랜드 가치에 맞는 형태인가? (할인 vs 가치 추가)

**CTA**
- [ ] CTA가 직접적이고 명확한가? ("지금 구매하기", "오늘 받기" 등)
- [ ] CTA 버튼 또는 링크가 명확하게 표시되는가?

**마찰 해소**
- [ ] 환불 정책 또는 리스크 제거 메시지가 포함되었는가?
- [ ] 리뷰 또는 소셜 증거가 마지막 신뢰를 제공하는가?

**브랜딩 유지**
- [ ] BOF 소재임에도 브랜드 색상과 톤이 유지되는가?
- [ ] 오퍼에 브랜드 맥락(스토리, 이유)이 부여되었는가?


## 부록 C. CRM 자동화 시나리오 템플릿

아래는 주요 CRM 자동화 시나리오별 메시지 예시다. 브랜드 톤에 맞게 수정하여 사용한다.


`},{title:"시나리오 1: 웰컴 시퀀스 (이메일 구독 후)",content:`
**Email 1 — 구독 직후 (즉시 발송)**

제목: [이름]님, 반갑습니다. 저희 브랜드 이야기를 들어보실래요?

내용:
"안녕하세요, [이름]님.

[브랜드명]에 관심 가져주셔서 감사합니다.

저희가 이 브랜드를 만든 이유는 [핵심 미션 1~2문장]입니다.

앞으로 저희 이야기와 함께 유용한 정보들을 보내드릴게요.

첫 방문이시라면, 지금 가장 많은 분들이 선택하시는 제품을 먼저 보여드릴게요.
→ [베스트셀러 링크]

[브랜드명] 드림"


**Email 2 — 3일 후**

제목: 솔직한 후기들을 모아봤어요

내용:
"[이름]님, 저희 제품을 사용하신 분들의 이야기를 전달드리고 싶었어요.

[리뷰 1]: '○○ 문제가 정말 해결됐어요...'
[리뷰 2]: '처음엔 반신반의했는데...'
[리뷰 3]: '재구매만 4번째예요.'

[이름]님도 직접 경험해보시겠어요?
→ [제품 페이지 링크]"


**Email 3 — 7일 후 (첫 구매 유도)**

제목: [이름]님을 위한 첫 구매 혜택이에요

내용:
"[이름]님, 첫 번째 주문에 한해 [혜택 내용]을 드립니다.

쿠폰 코드: [WELCOME10]
유효 기간: 오늘부터 7일

아직 망설이고 계신다면, 저희 반품 정책을 먼저 확인해보세요.
[환불/반품 보장 안내 링크]"


`},{title:"시나리오 2: 온보딩 시퀀스 (첫 구매 완료 후)",content:`
**Email 1 — 구매 당일**

제목: [이름]님, 주문이 접수되었어요!

내용:
"주문해주셔서 감사합니다!

주문 번호: [주문번호]
예상 배송일: [배송일]

택배가 도착하기 전에 이걸 먼저 읽어보세요.
→ [제품 올바른 사용법 링크]

궁금하신 점이 있으면 언제든 [연락처]로 연락주세요."


**Email 2 — 배송 후 3일**

제목: 잘 받으셨나요? 이렇게 쓰시면 더 좋아요

내용:
"[이름]님, 제품 잘 받으셨나요?

처음 사용하실 때 이 점만 기억해주세요.

1. [사용 팁 1]
2. [사용 팁 2]
3. [사용 팁 3]

시작이 좋아야 결과도 좋아집니다."


**Email 3 — 10일 후 (리뷰 요청)**

제목: 솔직하게 말씀해주세요

내용:
"[이름]님, 이제 약 열흘 정도 지났네요.

어떻게 사용해보셨나요? 좋은 점이든 아쉬운 점이든 솔직하게 알려주시면 정말 큰 도움이 됩니다.

리뷰를 남겨주시면 [포인트/혜택]을 드릴게요.
→ [리뷰 작성 링크]"


`},{title:"시나리오 3: 장바구니 이탈 복구",content:`
**Message 1 — 이탈 1시간 후 (이메일/카카오)**

제목: 장바구니에 담아두신 거 기억하세요?

내용:
"[이름]님, 아직 장바구니에 남아있어요.

[제품명] → [장바구니 링크]

결정이 어려우신가요? 가장 많이 하시는 질문을 먼저 답변드릴게요.
Q: 맞지 않으면 환불되나요? → 구매 후 30일 이내 100% 환불 보장합니다.
Q: 배송은 얼마나 걸리나요? → 평균 1~2일 이내 도착합니다."


**Message 2 — 24시간 후**

제목: [이름]님이 보신 제품, 5,000명의 선택이기도 해요

내용:
"결정 전에 이 후기를 먼저 보세요.

[리뷰 1 내용 발췌]
[리뷰 2 내용 발췌]

아직 장바구니에 있어요 → [링크]"


**Message 3 — 72시간 후 (최후 오퍼)**

제목: 오늘이 마지막이에요

내용:
"[이름]님을 위해 딱 오늘까지 특별 혜택을 드릴게요.

[혜택 내용] — 오늘 자정까지만 적용됩니다.

→ [장바구니 링크]

이후에는 정가로 구매하셔야 해요."


`},{title:"시나리오 4: 이탈 위험 (마지막 구매 후 90일 경과)",content:`
**Message 1 — 90일 경과 후**

제목: [이름]님, 오랜만이에요

내용:
"마지막으로 뵌 지 꽤 됐네요.

혹시 저희 제품에 아쉬운 점이 있으셨나요? 있으시다면 알려주세요. 개선하고 싶습니다.

아니면 이 새로운 제품이 관심 가실 것 같아서요.
→ [신제품 또는 추천 제품 링크]"


**Message 2 — 1주 후**

제목: 돌아오시면 이 혜택을 드릴게요

내용:
"[이름]님만을 위한 혜택이에요.

[혜택 내용] — 다음 주문에 적용됩니다.
유효 기간: [날짜]까지

→ [쇼핑 시작 링크]"


`},{title:"시나리오 5: VIP 감사 (누적 구매 임계값 달성)",content:`
제목: [이름]님은 특별한 고객이세요

내용:
"[이름]님, 사실 말씀드리고 싶었어요.

[이름]님은 저희 브랜드를 [횟수]번이나 선택해주셨어요. 진심으로 감사드립니다.

이런 분들을 위한 특별한 혜택을 준비했어요.
- [VIP 혜택 1]
- [VIP 혜택 2]

앞으로도 잘 부탁드립니다.
[브랜드명] 드림"


`},{title:"시나리오 6: 소모품 리마인더 (평균 구매 주기 기반)",content:`
제목: 슬슬 다 써가실 때가 됐을 것 같아서요

내용:
"[이름]님, [제품명]을 구매하신 지 [기간]이 지났어요.

통상 [사용 기간] 정도면 거의 다 쓰실 시점인데, 미리 준비해두시면 어떨까요?

지금 재주문하시면 [혜택 내용]도 드려요.
→ [빠른 재주문 링크]"


## 부록 D. 브랜딩 아이덴티티 워크시트

이 워크시트는 브랜드 아이덴티티를 정의하고 문서화하는 작업 양식이다. 팀 전체가 함께 채워나가는 것이 권장된다.


`},{title:"D-1. 브랜드 기초 정의",content:`
**브랜드명:**
_______________

**브랜드 카테고리:**
_______________

**창립 연도 / 런칭 날짜:**
_______________

**창업 계기 (100자 이내):**
_______________


`},{title:"D-2. 미션, 비전, 가치",content:`
**미션 (우리 브랜드는 왜 존재하는가? 1~2문장):**
_______________

**비전 (우리 브랜드가 만들고자 하는 세상 / 10년 후 목표):**
_______________

**핵심 가치 (3~5개, 한 단어 또는 짧은 구문):**
1. _______________
2. _______________
3. _______________
4. _______________
5. _______________


`},{title:"D-3. 브랜드 포지셔닝",content:`
**우리 카테고리의 주요 경쟁 브랜드 (3~5개):**
_______________

**각 경쟁 브랜드의 현재 포지셔닝 (1줄 요약):**
- 경쟁사 A: _______________
- 경쟁사 B: _______________
- 경쟁사 C: _______________

**우리 브랜드만이 제공하는 차별점 (기능적 + 감성적):**
_______________

**포지셔닝 스테이트먼트:**
"[타겟 고객]를 위한, [카테고리]에서 [차별점]을 제공하는 [브랜드명]입니다.
왜냐하면 [증거/근거]이기 때문입니다."

_______________


`},{title:"D-4. 타겟 페르소나",content:`
**페르소나 이름:**
_______________

**나이 / 직업 / 지역:**
_______________

**하루 루틴 (간략하게):**
_______________

**주요 고민과 욕망:**
- 고민: _______________
- 욕망: _______________

**이 카테고리에서 겪는 페인 포인트:**
_______________

**정보 수집 채널 (SNS, 커뮤니티, 유튜버 등):**
_______________

**구매 결정 시 가장 중요하게 보는 것:**
_______________

**우리 브랜드에 매료될 이유:**
_______________


`},{title:"D-5. 브랜드 퍼스낼리티",content:`
**브랜드를 사람에 비유한다면? (형용사 3~5개):**
_______________

**"우리 브랜드는 OO이지만 OO은 아니다" (3가지):**
1. _______________이지만 _______________은 아니다
2. _______________이지만 _______________은 아니다
3. _______________이지만 _______________은 아니다

**우리 브랜드와 어울리는 셀러브리티 또는 공인 (실제 계약 여부 무관):**
_______________


`},{title:"D-6. 브랜드 보이스",content:`
**보이스 형용사 (3개):**
1. _______________
2. _______________
3. _______________

**같은 내용을 우리 보이스로 쓴 예시 vs 우리 보이스가 아닌 예시:**

내용: "지금 구매하시면 할인됩니다"

우리 보이스 버전:
_______________

우리 보이스가 아닌 버전:
_______________

**절대 쓰지 않는 표현 (3가지):**
1. _______________
2. _______________
3. _______________


`},{title:"D-7. 비주얼 아이덴티티 요약",content:`
**주 색상 (HEX 코드):**
_______________

**보조 색상 (HEX 코드):**
_______________

**금지 색상 (브랜드 이미지와 맞지 않는 색상):**
_______________

**주 사용 폰트:**
_______________

**사진 스타일 (3가지 형용사로 표현):**
_______________

**피해야 할 사진 스타일:**
_______________


`},{title:"D-8. 브랜드 아이덴티티 최종 요약 (One Page)",content:`
이 섹션에 위 내용을 한 페이지로 압축하여 정리한다. 모든 팀원과 외부 파트너가 참조하는 브랜드의 핵심 문서다.

**브랜드명:**

**미션:**

**포지셔닝:**

**타겟 페르소나 (1줄 요약):**

**브랜드 퍼스낼리티 (형용사 3개):**

**보이스 (형용사 3개):**

**핵심 색상:**

**약속하는 것 (소비자에게 드리는 가치):**


*이 문서는 정기적으로(반기 또는 연 1회) 업데이트하며, 팀 신규 합류자와 외부 파트너(광고 대행사, 디자이너, 카피라이터)에게 온보딩 시 반드시 공유한다.*


# 맺음말: 통합의 시작

이 책을 통해 퍼널, CRM, 브랜딩을 각각 독립된 영역이 아닌 하나의 통합된 시스템으로 바라보는 관점을 갖게 되었기를 바란다.

퍼널은 소비자의 여정을 설계하는 틀이다. TOF에서 인지를 만들고, MOF에서 설득하며, BOF에서 전환하는 단계 각각에 적합한 소재, 메시지, 지표가 있다. 이 구조를 이해하지 못하면 예산을 어디에, 왜 써야 하는지 알 수 없다.

CRM은 구매 후의 관계를 관리하는 시스템이다. 한 번의 구매에서 끝나는 것이 아니라, 고객이 브랜드의 팬이 되어 반복 구매하고 자발적으로 추천하는 루프를 만드는 것이 CRM의 목표다. LTV를 높이는 것은 신규 고객을 유치하는 것만큼, 아니 그보다 더 중요한 마케팅 활동이다.

브랜딩은 이 모든 것의 기반이다. 퍼포먼스 광고의 효율을 높이고, CRM의 반응률을 높이며, 시간이 지날수록 CAC를 낮추고 LTV를 높이는 복리의 자산이 바로 브랜드다. 브랜딩은 오늘 ROAS를 높이지 않지만, 내년의 ROAS를 결정한다.

이 세 가지를 통합하여 운영하는 마케터는 단순한 광고 운영자가 아니라 사업의 성장 구조를 설계하는 전략가다. 이 책이 그 전략가로 성장하는 여정에 실질적인 도움이 되기를 바란다.


*퍼포먼스 마케터를 위한 퍼널·CRM·브랜딩 완전 가이드 — 끝*

`}]}]}];function tx(){const[e,n]=ve.useState(null),[t,r]=ve.useState("");ve.useEffect(()=>{it.length>0&&it[0].chapters&&it[0].chapters.length>0&&n(it[0].chapters[0])},[]);const i=Jd.useMemo(()=>{if(!t.trim())return it;const a=t.toLowerCase();return it.map(s=>{const c=s.chapters.filter(f=>{var x;const d=f.title.toLowerCase().includes(a),p=(x=f.subChapters)==null?void 0:x.some(_=>_.title.toLowerCase().includes(a)||_.content.toLowerCase().includes(a));return d||p});return c.length>0?{...s,chapters:c}:null}).filter(s=>s!==null)},[t]),l=()=>{let a=null,s=null;if(!e)return{prevChapter:a,nextChapter:s};let c=[];it.forEach(d=>{d.chapters&&(c=c.concat(d.chapters))});const f=c.findIndex(d=>d.title===e.title);return f>0&&(a=c[f-1]),f!==-1&&f<c.length-1&&(s=c[f+1]),{prevChapter:a,nextChapter:s}},{prevChapter:o,nextChapter:u}=l();return A.jsx("div",{className:"app-container",children:A.jsx(pg,{data:i,activeChapter:e,onSelectChapter:n,searchQuery:t,setSearchQuery:r,children:A.jsx(nx,{chapter:e,prevChapter:o,nextChapter:u,onNavigate:a=>{n(a),window.scrollTo({top:0,behavior:"smooth"})}})})})}$p(document.getElementById("root")).render(A.jsx(ve.StrictMode,{children:A.jsx(tx,{})}));
