(()=>{var e={202:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!i[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function u(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function a(n){n.metaKey||n.altKey||n.ctrlKey||(d(e.activeElement)&&u(e.activeElement),t=!0)}function c(e){t=!1}function m(e){d(e.target)&&(t||s(e.target))&&u(e.target)}function v(e){d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),r(e.target))}function l(e){"hidden"===document.visibilityState&&(n&&(t=!0),f())}function f(){document.addEventListener("mousemove",L),document.addEventListener("mousedown",L),document.addEventListener("mouseup",L),document.addEventListener("pointermove",L),document.addEventListener("pointerdown",L),document.addEventListener("pointerup",L),document.addEventListener("touchmove",L),document.addEventListener("touchstart",L),document.addEventListener("touchend",L)}function E(){document.removeEventListener("mousemove",L),document.removeEventListener("mousedown",L),document.removeEventListener("mouseup",L),document.removeEventListener("pointermove",L),document.removeEventListener("pointerdown",L),document.removeEventListener("pointerup",L),document.removeEventListener("touchmove",L),document.removeEventListener("touchstart",L),document.removeEventListener("touchend",L)}function L(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,E())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",l,!0),f(),e.addEventListener("focus",m,!0),e.addEventListener("blur",v,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={exports:{}};return e[o].call(d.exports,d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(202)})()})();