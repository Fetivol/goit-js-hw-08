!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function O(e){return c=e,u=setTimeout(T,t),s?p(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=b();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return u=void 0,m&&r?p(e):(r=o=void 0,f)}function w(){var e=b(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(T,t),p(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=o=u=void 0},w.flush=function(){return void 0===u?f:h(b())},w}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=f.test(e);return i||u.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O,S=document.querySelector(".feedback-form"),T=S.elements,h=T.email,w=T.message,N={};S.addEventListener("input",n((function(e){N[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(N))}),500)),S.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.value||""===w.value)return void alert("Please fill all fields =)");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),delete N.message,delete N.email,localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),(O=JSON.parse(localStorage.getItem("feedback-form-state"))).email&&(N.email=O.email,h.value=O.email),O.message&&(N.message=O.message,w.value=O.message)}();
//# sourceMappingURL=03-feedback.5d8ce98b.js.map
