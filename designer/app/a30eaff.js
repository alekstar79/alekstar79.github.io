(window.webpackJsonp=window.webpackJsonp||[]).push([[23,39,46,327],{1051:function(e,t,n){"use strict";n.r(t),n.d(t,"document",(function(){return f})),n.d(t,"PI",(function(){return d})),n.d(t,"cos",(function(){return p})),n.d(t,"sin",(function(){return v})),n.d(t,"tan",(function(){return g})),n.d(t,"abs",(function(){return y})),n.d(t,"sqrt",(function(){return m})),n.d(t,"pow",(function(){return b})),n.d(t,"min",(function(){return x})),n.d(t,"max",(function(){return w})),n.d(t,"ceil",(function(){return O})),n.d(t,"floor",(function(){return j})),n.d(t,"round",(function(){return T})),n.d(t,"random",(function(){return k})),n.d(t,"atan2",(function(){return P})),n.d(t,"TO_RAD",(function(){return R})),n.d(t,"TAU",(function(){return A})),n.d(t,"rand",(function(){return C})),n.d(t,"dist",(function(){return E})),n.d(t,"norm",(function(){return S})),n.d(t,"angle",(function(){return D})),n.d(t,"clamp",(function(){return I})),n.d(t,"lerp",(function(){return L})),n.d(t,"randRange",(function(){return N})),n.d(t,"fadeIn",(function(){return M})),n.d(t,"fadeInOut",(function(){return B})),n.d(t,"pad",(function(){return F})),n.d(t,"sToTime",(function(){return z})),n.d(t,"clone",(function(){return H})),n.d(t,"createCanvas",(function(){return q})),n.d(t,"createOffscreenCanvas",(function(){return G})),n.d(t,"createContext2D",(function(){return W})),n.d(t,"createOffscreenContext2D",(function(){return J})),n.d(t,"createRenderingContext",(function(){return U})),n.d(t,"makeGLCanvas",(function(){return $})),n.d(t,"determineMaxCanvasSize",(function(){return _})),n.d(t,"PropsArray",(function(){return K}));n(12),n(16),n(19),n(26),n(27);var r=n(2),i=n(10),o=n(11),a=n(0),s=n.n(a),c=(n(25),n(3),n(9),n(108),n(203),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(15),n(367),n(32),n(1195)),u=n.n(c);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="undefined"!=typeof window&&void 0!==window.document?window.document:null,d=Math.PI,p=Math.cos,v=Math.sin,g=Math.tan,y=Math.abs,m=Math.sqrt,b=Math.pow,x=Math.min,w=Math.max,O=Math.ceil,j=Math.floor,T=Math.round,k=Math.random,P=Math.atan2,R=d/180,A=2*d,C=function(e){return e*k()},E=function(e,t,n,r){return m(b(n-e,2)+b(r-t,2))},S=function(e,t,n){return(e-t)/(n-t)},D=function(e,t,n,r){return P(r-t,n-e)},I=function(e,t,n){return x(w(e,t),n)},L=function(e,t,n){return(1-n)*e+n*t},N=function(e){return e-C(2*e)},M=function(e,t){return e/t},B=function(e,t){var n=.5*t;return y((e+n)%t-n)/n},F=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r="".concat(e);r.length<t;)r="".concat(n).concat(r);return r},z=function(e){return"".concat(F(parseInt("".concat(e/60))),":").concat(F(parseInt("".concat(e%60))))},H=function(e){return JSON.parse(JSON.stringify(e))};function q(e,t){var n=f?f.createElement("canvas"):u.a.createCanvas(e,t);return n.height=t,n.width=e,n}function G(e,t){return"undefined"!=typeof OffscreenCanvas?new OffscreenCanvas(parseFloat(e),parseFloat(t)):q(e,t)}function W(e,t,n){return q(e,t).getContext("2d",n)}function J(e,t,n){return G(e,t).getContext("2d",n)}function U(e,t){return J(e,t,{willReadFrequently:!0,desynchronized:!0})}function $(){for(var e=["webgl","experimental-webgl"],t=f.createElement("canvas"),n=null,r=0;r<e.length;++r){try{n=t.getContext(e[r],{preserveDrawingBuffer:!0})}catch(i){}if(null!==n)break}if(null!=n)return{canvas:t,gl:n};console.warn("WebGL not supported.")}function V(e){return e.canvas.width===e.drawingBufferWidth&&e.canvas.height===e.drawingBufferHeight}function _(e,t){var n=$(),r=n.canvas,i=n.gl,o=function(e,t){if(e=Math.abs(e),(t=Math.abs(t))>e){var n=e;e=t,t=n}for(;;){if(0===t)return e;if(0==(e%=t))return t;t%=e}}(e,t);if(e/=o,t/=o,r.height=t,r.width=e,!V(i))throw new Error("The browser is unable to use WebGL canvases with the specified ratio ".concat(e,":").concat(t));for(var a=1;V(i);)r.width*=2,r.height*=2,a*=2;return a=function n(o,a){if(o===a)return o;var s=Math.floor((a-o)/2)+o;return r.height=s*t,r.width=s*e,V(i)?n(s+1,a):n(o,s)}(1,a),[e*a,t*a]}Array.prototype.lerp=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.forEach((function(r,i){return e[i]=L(r,t[i],n)}))},Float32Array.prototype.get=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=e+t;e<r;e++)n.push(this[e]);return n};var K=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(i.a)(this,e),this.values=new Float32Array(t*n.length),this.spread=n.length,this.count=t,this.props=n}return Object(o.a)(e,[{key:"length",get:function(){return this.values.length}},{key:"set",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.values.set(e,t)}},{key:"setMap",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.set(Object.values(e),t)}},{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.values.get(e,this.spread)}},{key:"getMap",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.get(t).reduce((function(t,n,i){return h(h({},t),Object(r.a)({},e.props[i],n))}),{})}},{key:"forEach",value:function(e){for(var t=0;t<this.length;t+=this.spread)e(this.get(t),t,this)}},{key:"map",value:function(e){for(var t=0;t<this.length;t+=this.spread)this.set(e(this.get(t),t,this),t)}},{key:"read",value:s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.length)){e.next=7;break}return e.next=4,{index:t,value:this.get(t).slice(0,this.spread)};case 4:t+=this.spread,e.next=1;break;case 7:case"end":return e.stop()}}),e,this)}))}]),e}()},1195:function(e,t,n){const r=n(1196);t.parseFont=r,t.createCanvas=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})},t.createImageData=function(e,t,n){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(e);case 2:return new ImageData(e,t);default:return new ImageData(e,t,n)}},t.loadImage=function(e,t){return new Promise((function(n,r){const i=Object.assign(document.createElement("img"),t);function o(){i.onload=null,i.onerror=null}i.onload=function(){o(),n(i)},i.onerror=function(){o(),r(new Error('Failed to load the image "'+e+'"'))},i.src=e}))}},1196:function(e,t,n){"use strict";const r="'([^']+)'|\"([^\"]+)\"|[\\w\\s-]+",i=new RegExp("(bold|bolder|lighter|[1-9]00) +","i"),o=new RegExp("(italic|oblique) +","i"),a=new RegExp("(small-caps) +","i"),s=new RegExp("(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +","i"),c=new RegExp(`([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:${r})( *, *(?:${r}))*)`),u={};e.exports=e=>{if(u[e])return u[e];const t=c.exec(e);if(!t)return;const n={weight:"normal",style:"normal",stretch:"normal",variant:"normal",size:parseFloat(t[1]),unit:t[2],family:t[3].replace(/["']/g,"").replace(/ *, */g,",")};let r,l,h,f;const d=e.substring(0,t.index);switch((r=i.exec(d))&&(n.weight=r[1]),(l=o.exec(d))&&(n.style=l[1]),(h=a.exec(d))&&(n.variant=h[1]),(f=s.exec(d))&&(n.stretch=f[1]),n.unit){case"pt":n.size/=.75;break;case"pc":n.size*=16;break;case"in":n.size*=96;break;case"cm":n.size*=96/2.54;break;case"mm":n.size*=96/25.4;break;case"%":break;case"em":case"rem":n.size*=16/.75;break;case"q":n.size*=96/25.4/4}return u[e]=n}},1303:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(24),n(75);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n={r:0,g:0,b:0,a:t};if(/^#[A-Fa-f0-9]{3,}$/.test(e)){var r,i=e.substring(1).split("");(3===i.length||i.length>6)&&(i=[i[0],i[0],i[1],i[1],i[2],i[2]]),r=parseInt(i.join(""),16),n.r=r>>16&255,n.g=r>>8&255,n.b=255&r,n.a=t}return n}},1305:function(e,t,n){n(165)("Uint32",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},498:function(e,t,n){"use strict";n.r(t),n.d(t,"textBaselineTypes",(function(){return u})),n.d(t,"textAlignTypes",(function(){return l})),n.d(t,"drawTypes",(function(){return h})),n.d(t,"lineHeight",(function(){return f})),n.d(t,"splitText",(function(){return d})),n.d(t,"wrapText",(function(){return p})),n.d(t,"truncateText",(function(){return v})),n.d(t,"TextRenderer",(function(){return g}));var r=n(2),i=n(10),o=n(11),a=(n(3),n(9),n(25),n(24),n(53),n(12),n(16),n(19),n(26),n(27),n(255));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={ALPHABETIC:"alphabetic",BOTTOM:"bottom",HANGING:"hanging",MIDDLE:"middle",TOP:"top"},l={CENTER:"center",END:"end",LEFT:"left",RIGHT:"right",START:"start"},h={FILL:"fill",STROKE:"stroke"},f=1.16;function d(e,t,n){for(var r=t.split(" "),i=[],o="",a=0;a<r.length;a++){var s=o+r[a]+" ";e.measureText(s).width>n?(i.push(o),o=r[a]+" "):o=s}return i.push(o),i}function p(e,t,n,r,i,o,a){for(var s=t.split(" "),c="",u=0;u<s.length;u++){var l=c+s[u]+" ";e.measureText(l).width>i?(e.fillText(c,n,r),c=s[u]+" ",r+=a*o):c=l}e.fillText(c,n,r)}function v(e,t,n){var r=e.measureText(t).width,i=t.length,o=e.measureText("…").width;if(r>n){for(;r>=n-o&&i-- >0;)t=t.substring(0,i),r=e.measureText(t).width;return t+"…"}return t}var g=function(){function e(t){Object(i.a)(this,e);var n=t.ctx,r=t.w,o=t.h;this.createRenderNode=this.createRenderNode.bind(this),this.removeRenderNode=this.removeRenderNode.bind(this),this.setRenderNode=this.setRenderNode.bind(this),this.drawText=this.drawText.bind(this),this.drawType=h.FILL,this.mark=Object(a.rndstring)(),this.setRenderNode(n,{w:r,h:o}),this.ctx=n}return Object(o.a)(e,[{key:"setRenderNode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.w,r=t.h;this.elem=document.querySelector(".canvas-text-renderer-".concat(this.mark)),this.elem||this.createRenderNode(),this.setNodeSizes({height:r||e.canvas.height,width:n||e.canvas.width}),this.elem.innerHTML=""}},{key:"createRenderNode",value:function(){this.elem=document.createElement("div"),this.elem.classList.add("canvas-text-renderer-".concat(this.mark)),document.body.append(this.elem)}},{key:"removeRenderNode",value:function(){document.querySelectorAll(".canvas-text-renderer-".concat(this.mark)).forEach((function(e){return e.remove()}))}},{key:"setTextBaseline",value:function(e){var t=e.baseline,n=void 0===t?u.ALPHABETIC:t;this.ctx.textBaseline=n}},{key:"setTextAlign",value:function(e){var t=e.align,n=void 0===t?l.CENTER:t;this.ctx.textAlign=n}},{key:"setFont",value:function(e){var t=e.fontStyle;this.ctx.font=t}},{key:"setTextStyles",value:function(e){this.setFont(e)}},{key:"setComputedSyles",value:function(){var e=window.getComputedStyle(this.elem),t=function(t){return e.getPropertyValue("font-"+t)};this.ctx.font=t("weight")+" "+t("size")+" "+t("family"),this.ctx.textAlign=e.getPropertyValue("text-align"),this.ctx.textBaseline="bottom"}},{key:"setNodeStyles",value:function(e){var t=e.fontFamily,n=e.fontSize,r=e.align,i=e.baseline,o=e.padding;Object.assign(this.elem.style,{lineHeight:"".concat(f*n,"px"),fontSize:"".concat(n,"px"),padding:"0 ".concat(o,"px"),verticalAlign:i,textAlign:r,fontFamily:t})}},{key:"setNodeSizes",value:function(e){var t=e.height,n=e.width;Object.assign(this.elem.style,{height:"".concat(t,"px"),width:"".concat(n,"px")})}},{key:"wrapText",value:function(e,t,n,r,i){p(this.ctx,e,t,n,r,i,f)}},{key:"getLineBreaks",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!e)return[];var r=document.createRange(),i=[];r.setStart(e,0);for(var o=r.getBoundingClientRect().bottom,a=r.getBoundingClientRect().left,s=e.textContent,c=1,u=0,l=0;c<=s.length;){r.setStart(e,c),c<s.length-1&&r.setEnd(e,c+1);var h=r.getBoundingClientRect();(l=h.bottom)>o&&(i.push({x:a-n,y:o-t,text:s.substr(u,c-u),type:this.drawType}),o=l,u=c,a=h.left),c++}return i.push({x:a-n,y:l-t,text:s.substr(u),type:this.drawType}),i}},{key:"getRenderedTextLinesFromElement",value:function(e){var t=this,n=e.vertical,r=e.fontSize;this.elem.normalize();for(var i=document.createTreeWalker(this.elem,NodeFilter.SHOW_TEXT),o=[];i.nextNode();)o.push(i.currentNode);var a=this.elem.getBoundingClientRect(),s=a.left,c=a.top,u=a.height;return c-=n*(u-f*r*o.length),o.reduce((function(e,n){return e.concat(t.getLineBreaks(n,c,s))}),[])}},{key:"renderText",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.elem.innerHTML=e.message.replace(/\n/g,"<br>");var n=this.ctx.canvas.width,r=e.horizontal;this.setNodeStyles(c(c({},e),{},{padding:(n-n*r)/2})),t?this.setComputedSyles():this.setTextStyles(e),this.getRenderedTextLinesFromElement(e).forEach(this.drawText)}},{key:"drawText",value:function(e){var t=e.text,n=void 0===t?"":t,r=e.x,i=void 0===r?0:r,o=e.y,a=void 0===o?0:o,s=e.type,c=void 0===s?h.FILL:s;i|=0,a|=0,this.ctx["".concat(c,"Text")](n,i,a)}}]),e}()},699:function(e,t,n){"use strict";n.r(t),n.d(t,"DrawBuffer",(function(){return d}));n(12),n(16),n(19),n(3),n(26),n(9),n(27),n(32),n(29),n(52),n(14),n(24),n(62),n(66),n(15);var r=n(22),i=n(2),o=n(10),a=n(11),s=(n(88),n(1051));function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t,n,r){return e<1||e>n-1||t<1||t>r-1},d=function(){function e(t,n,r){Object(o.a)(this,e),this.particles=new s.PropsArray(t*n/4,r),this.options={mouse:{lerpAmt:.25,repelThreshold:80}},this.mouse={on:!1,x:null,y:null},this.pProps=r,this.centerx=t/2,this.centery=n/2,this.repelx=this.centerx,this.repely=this.centery,this.userx=this.centerx,this.usery=this.centery,this.w=t,this.h=n,this.createContext(this)}return Object(a.a)(e,[{key:"createContext",value:function(e){var t=e.w,n=e.h;this.ctx=Object(s.createRenderingContext)(t,n),this.buffer=this.ctx.createImageData(t,n)}},{key:"update",value:function(e,t){this.mouse=h(h({},this.mouse),t.mouse),this.userx=this.mouse.x,this.usery=this.mouse.y,this.mouse.on&&(this.repelx=Object(s.lerp)(this.repelx,this.userx,this.options.mouse.lerpAmt),this.repely=Object(s.lerp)(this.repely,this.usery,this.options.mouse.lerpAmt))}},{key:"updatePixelCoords",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},{key:"drawParticles",value:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[60,200,255,255],i=this.particles.read();this.buffer.data.fill(0);var o,a=c(i);try{for(a.s();!(o=a.n()).done;){var s=o.value,u=s.index,l=Object(r.a)(s.value,6),h=l[0],d=l[1],p=l[2],v=l[3],g=l[4],y=l[5];f(e=0|h,t=0|d,this.w,this.h)||this.buffer.data.set(n,4*(e+t*this.w)),this.particles.set(this.updatePixelCoords(h,d,p,v,g,y),u)}}catch(m){a.e(m)}finally{a.f()}this.ctx.putImageData(this.buffer,0,0)}}]),e}()},733:function(e,t,n){"use strict";n.r(t),n.d(t,"Neon",(function(){return v}));n(77);var r=n(10),i=n(11),o=n(496),a=n(46),s=n(39),c=n(28),u=(n(25),n(367),n(108),n(3),n(1305),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(19),n(498)),l=n(1051),h=n(699),f=n(1303);function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var i=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var p={message:"NetAggregator\nPRO",fontFamily:"Casper-Bold",fontSize:96,fontColor:[60,200,255,255],drawType:u.drawTypes.FILL,align:u.textAlignTypes.CENTER,baseline:u.textBaselineTypes.BOTTOM,horizontal:.9,vertical:.4,get fontStyle(){return"".concat(this.fontSize,"px ").concat(this.fontFamily,", sans-serif")},mouse:{lerpAmt:.5,repelThreshold:100},particles:{pLerpAmt:.25,vLerpAmt:.1,density:3,get pixelDensity(){return 4*(4-this.density)}}},v=function(e){Object(a.a)(n,e);var t=d(n);function n(e){var i,a=e.layer,s=a.w,c=a.h;return Object(r.a)(this,n),(i=t.call(this,s,c,["x","y","vx","vy","bx","by"])).renderer=new u.TextRenderer(Object(o.a)(i)),i.background="rgba(0,0,0,1)",i.color="#3cc8ff",i.mapParticles(),i}return Object(i.a)(n,[{key:"options",get:function(){return p},set:function(e){Object.assign(p,e),this.mapParticles()}},{key:"setColor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;p.fontColor=Object.values(Object(f.a)(e,t)),this.color=e}},{key:"setBackground",value:function(e){this.background=e}},{key:"mapParticles",value:function(){try{this.ctx.clearRect(0,0,this.w,this.h),this.renderer.renderText(this.options);var e,t,n,r,i,o=this.ctx.getImageData(0,0,this.w,this.h).data,a=new Uint32Array(o),s=[],c=this.options.particles;for(e=0;e<a.length;e+=4)!a[e+3]||e%c.pixelDensity||(t=0|Object(l.rand)(this.w),n=0|Object(l.rand)(this.h),r=e/4%this.w,i=e/4/this.w|0,0,0,s.push(t,n,0,0,r,i));this.particles=new l.PropsArray(s.length/this.pProps.length,this.pProps),this.particles.set(s,0)}catch(u){}}},{key:"updatePixelCoords",value:function(e,t,n,r,i,o){var a,s,c,u,h,f=this.options,d=f.mouse,p=f.particles;return a=Object(l.dist)(e,t,this.repelx,this.repely),u=Object(l.angle)(this.repelx,this.repely,e,t),h=Object(l.pow)(d.repelThreshold,2)/a*(a/d.repelThreshold),s=i-e,c=o-t,n=Object(l.lerp)(n,s+Object(l.cos)(u)*h,p.vLerpAmt),r=Object(l.lerp)(r,c+Object(l.sin)(u)*h,p.vLerpAmt),[e=Object(l.lerp)(e,e+n,p.pLerpAmt),t=Object(l.lerp)(t,t+r,p.pLerpAmt),n,r]}},{key:"render",value:function(e){e.clearRect(0,0,this.w,this.h),this.drawParticles(this.options.fontColor),e.globalCompositeOperation="source-over",e.fillStyle=this.background,e.fillRect(0,0,this.w,this.h),e.save(),e.filter="blur(8px) brightness(200%)",e.drawImage(this.ctx.canvas,0,0,this.w,this.h),e.restore(),e.save(),e.filter="blur(0)",e.globalCompositeOperation="lighter",e.drawImage(this.ctx.canvas,0,0,this.w,this.h),e.restore()}}]),n}(h.DrawBuffer)}}]);