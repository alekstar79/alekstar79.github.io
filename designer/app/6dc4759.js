(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{1051:function(n,e,t){"use strict";t.r(e),t.d(e,"document",(function(){return h})),t.d(e,"PI",(function(){return l})),t.d(e,"cos",(function(){return g})),t.d(e,"sin",(function(){return p})),t.d(e,"tan",(function(){return v})),t.d(e,"abs",(function(){return w})),t.d(e,"sqrt",(function(){return m})),t.d(e,"pow",(function(){return b})),t.d(e,"min",(function(){return x})),t.d(e,"max",(function(){return y})),t.d(e,"ceil",(function(){return O})),t.d(e,"floor",(function(){return k})),t.d(e,"round",(function(){return M})),t.d(e,"random",(function(){return j})),t.d(e,"atan2",(function(){return E})),t.d(e,"TO_RAD",(function(){return C})),t.d(e,"TAU",(function(){return D})),t.d(e,"rand",(function(){return I})),t.d(e,"dist",(function(){return P})),t.d(e,"norm",(function(){return z})),t.d(e,"angle",(function(){return R})),t.d(e,"clamp",(function(){return F})),t.d(e,"lerp",(function(){return q})),t.d(e,"randRange",(function(){return A})),t.d(e,"fadeIn",(function(){return S})),t.d(e,"fadeInOut",(function(){return T})),t.d(e,"pad",(function(){return J})),t.d(e,"sToTime",(function(){return B})),t.d(e,"clone",(function(){return G})),t.d(e,"createCanvas",(function(){return L})),t.d(e,"createOffscreenCanvas",(function(){return W})),t.d(e,"createContext2D",(function(){return N})),t.d(e,"createOffscreenContext2D",(function(){return $})),t.d(e,"createRenderingContext",(function(){return H})),t.d(e,"makeGLCanvas",(function(){return U})),t.d(e,"determineMaxCanvasSize",(function(){return K})),t.d(e,"PropsArray",(function(){return Q}));t(12),t(16),t(19),t(26),t(27);var r=t(2),a=t(10),i=t(11),o=t(0),c=t.n(o),u=(t(25),t(3),t(9),t(108),t(203),t(109),t(110),t(111),t(112),t(113),t(114),t(115),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(15),t(367),t(32),t(1195)),s=t.n(u);function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var h="undefined"!=typeof window&&void 0!==window.document?window.document:null,l=Math.PI,g=Math.cos,p=Math.sin,v=Math.tan,w=Math.abs,m=Math.sqrt,b=Math.pow,x=Math.min,y=Math.max,O=Math.ceil,k=Math.floor,M=Math.round,j=Math.random,E=Math.atan2,C=l/180,D=2*l,I=function(n){return n*j()},P=function(n,e,t,r){return m(b(t-n,2)+b(r-e,2))},z=function(n,e,t){return(n-e)/(t-e)},R=function(n,e,t,r){return E(r-e,t-n)},F=function(n,e,t){return x(y(n,e),t)},q=function(n,e,t){return(1-t)*n+t*e},A=function(n){return n-I(2*n)},S=function(n,e){return n/e},T=function(n,e){var t=.5*e;return w((n+t)%e-t)/t},J=function(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r="".concat(n);r.length<e;)r="".concat(t).concat(r);return r},B=function(n){return"".concat(J(parseInt("".concat(n/60))),":").concat(J(parseInt("".concat(n%60))))},G=function(n){return JSON.parse(JSON.stringify(n))};function L(n,e){var t=h?h.createElement("canvas"):s.a.createCanvas(n,e);return t.height=e,t.width=n,t}function W(n,e){return"undefined"!=typeof OffscreenCanvas?new OffscreenCanvas(parseFloat(n),parseFloat(e)):L(n,e)}function N(n,e,t){return L(n,e).getContext("2d",t)}function $(n,e,t){return W(n,e).getContext("2d",t)}function H(n,e){return $(n,e,{willReadFrequently:!0,desynchronized:!0})}function U(){for(var n=["webgl","experimental-webgl"],e=h.createElement("canvas"),t=null,r=0;r<n.length;++r){try{t=e.getContext(n[r],{preserveDrawingBuffer:!0})}catch(a){}if(null!==t)break}if(null!=t)return{canvas:e,gl:t};console.warn("WebGL not supported.")}function _(n){return n.canvas.width===n.drawingBufferWidth&&n.canvas.height===n.drawingBufferHeight}function K(n,e){var t=U(),r=t.canvas,a=t.gl,i=function(n,e){if(n=Math.abs(n),(e=Math.abs(e))>n){var t=n;n=e,e=t}for(;;){if(0===e)return n;if(0==(n%=e))return e;e%=n}}(n,e);if(n/=i,e/=i,r.height=e,r.width=n,!_(a))throw new Error("The browser is unable to use WebGL canvases with the specified ratio ".concat(n,":").concat(e));for(var o=1;_(a);)r.width*=2,r.height*=2,o*=2;return o=function t(i,o){if(i===o)return i;var c=Math.floor((o-i)/2)+i;return r.height=c*e,r.width=c*n,_(a)?t(c+1,o):t(i,c)}(1,o),[n*o,e*o]}Array.prototype.lerp=function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.forEach((function(r,a){return n[a]=q(r,e[a],t)}))},Float32Array.prototype.get=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=[],r=n+e;n<r;n++)t.push(this[n]);return t};var Q=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(a.a)(this,n),this.values=new Float32Array(e*t.length),this.spread=t.length,this.count=e,this.props=t}return Object(i.a)(n,[{key:"length",get:function(){return this.values.length}},{key:"set",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.values.set(n,e)}},{key:"setMap",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.set(Object.values(n),e)}},{key:"get",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.values.get(n,this.spread)}},{key:"getMap",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.get(e).reduce((function(e,t,a){return d(d({},e),Object(r.a)({},n.props[a],t))}),{})}},{key:"forEach",value:function(n){for(var e=0;e<this.length;e+=this.spread)n(this.get(e),e,this)}},{key:"map",value:function(n){for(var e=0;e<this.length;e+=this.spread)this.set(n(this.get(e),e,this),e)}},{key:"read",value:c.a.mark((function n(){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=0;case 1:if(!(e<this.length)){n.next=7;break}return n.next=4,{index:e,value:this.get(e).slice(0,this.spread)};case 4:e+=this.spread,n.next=1;break;case 7:case"end":return n.stop()}}),n,this)}))}]),n}()},1195:function(n,e,t){const r=t(1196);e.parseFont=r,e.createCanvas=function(n,e){return Object.assign(document.createElement("canvas"),{width:n,height:e})},e.createImageData=function(n,e,t){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(n);case 2:return new ImageData(n,e);default:return new ImageData(n,e,t)}},e.loadImage=function(n,e){return new Promise((function(t,r){const a=Object.assign(document.createElement("img"),e);function i(){a.onload=null,a.onerror=null}a.onload=function(){i(),t(a)},a.onerror=function(){i(),r(new Error('Failed to load the image "'+n+'"'))},a.src=n}))}},1196:function(n,e,t){"use strict";const r="'([^']+)'|\"([^\"]+)\"|[\\w\\s-]+",a=new RegExp("(bold|bolder|lighter|[1-9]00) +","i"),i=new RegExp("(italic|oblique) +","i"),o=new RegExp("(small-caps) +","i"),c=new RegExp("(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +","i"),u=new RegExp(`([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:${r})( *, *(?:${r}))*)`),s={};n.exports=n=>{if(s[n])return s[n];const e=u.exec(n);if(!e)return;const t={weight:"normal",style:"normal",stretch:"normal",variant:"normal",size:parseFloat(e[1]),unit:e[2],family:e[3].replace(/["']/g,"").replace(/ *, */g,",")};let r,f,d,h;const l=n.substring(0,e.index);switch((r=a.exec(l))&&(t.weight=r[1]),(f=i.exec(l))&&(t.style=f[1]),(d=o.exec(l))&&(t.variant=d[1]),(h=c.exec(l))&&(t.stretch=h[1]),t.unit){case"pt":t.size/=.75;break;case"pc":t.size*=16;break;case"in":t.size*=96;break;case"cm":t.size*=96/2.54;break;case"mm":t.size*=96/25.4;break;case"%":break;case"em":case"rem":t.size*=16/.75;break;case"q":t.size*=96/25.4/4}return s[n]=t}}}]);