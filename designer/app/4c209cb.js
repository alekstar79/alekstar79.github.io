(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{515:function(r,t,e){"use strict";e.r(t),function(r){e.d(t,"imgAddFunctionality",(function(){return p}));e(12),e(16),e(19),e(26),e(9),e(27);var n=e(1),o=e(2),i=e(0),c=e.n(i),a=(e(3),e(24),e(53),e(83),e(14),e(15),e(141),e(51),e(25),e(163)),s=e(4);function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function p(t){var e,i=void 0===r||!0,p=function(r){return r.replace(/application\/octet-stream/,"image/png")},b=function(){var r=Object(n.a)(c.a.mark((function r(){var t,e,n=arguments;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:"blob",!this.wbg&&!this.query){r.next=3;break}return r.abrupt("return","block");case 3:if(this.src){r.next=5;break}throw new Error("unexpected_internal_error");case 5:return r.prev=5,e=new URLSearchParams({src:this.src}),this.query=e,r.t0=p,r.t1=g,r.next=12,fetch("/node/rembg",{method:"POST",body:e}).then((function(r){return r[t]()}));case 12:return r.t2=r.sent,r.next=15,(0,r.t1)(r.t2);case 15:return r.t3=r.sent,this.wbg=(0,r.t0)(r.t3),/data:image\/(jpe?g|png|gif|webp)/.test(this.wbg)||(this.query=this.wbg=void 0),r.abrupt("return",this.wbg?"block":"none");case 21:r.prev=21,r.t4=r.catch(5),this.query=this.wbg=void 0;case 24:throw new Error("service_unavailable");case 25:case"end":return r.stop()}}),r,this,[[5,21]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=Object(n.a)(c.a.mark((function r(){var t,e;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!this.wbg){r.next=2;break}return r.abrupt("return","block");case 2:if(this.src){r.next=4;break}throw new Error("unexpected_internal_error");case 4:t=25,e=!1;case 5:return r.next=7,new Promise((function(r){return setTimeout(r,500)}));case 7:e=!!this.wbg;case 8:if(!e&&--t){r.next=5;break}case 9:return r.abrupt("return",this.wbg?"block":"none");case 10:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}();function l(r){return new Promise((function(t,e){var n=new FileReader;n.onerror=e,n.onload=function(){t(n.result)},n.readAsDataURL(r)}))}function g(r){switch(!0){case r instanceof Blob:return l(r);case"convert"in r:return t=r.url,fetch(t).then((function(r){return r.blob()})).then(l)}var t}return t.Image.prototype.initialize=(e=t.Image.prototype.initialize,i?function(){for(var r=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.call.apply(e,[this].concat(n)),Object(s.setControls)(this,{tl:{action:"scale",cursor:"resize"},bl:{action:"remove",cursor:"pointer"},br:{action:"moveUp",cursor:"pointer"},mb:{action:"moveDown",cursor:"pointer"},mtr:{action:"rotate"},tr:{cursor:"pointer",action:function(){r.stopFix=!0,r.canvas.trigger("image:remove-bg",r),setTimeout((function(){r.stopFix=!1}),200)}}},{settings:{borderColor:"#0094dd",cornerBackgroundColor:"#0094dd",cornerShape:"circle",cornerPadding:7,cornerSize:20},mtr:{icon:a.rotate},tl:{icon:null},tr:{icon:a.cog},mb:{icon:a.down},br:{icon:a.up},bl:{icon:a.remove}})}:e),t.Image.prototype.removeBg=b,t.Image.prototype.loading=f,t.Image.prototype.apply=function(){var r=this;return new Promise((function(e,n){if(!r.wbg)return n(new Error("nothing_to_apply"));var i=function(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){Object(o.a)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}({crossOrigin:"anonymous"},r.toObject(["wbg"])),c=r.canvas._objects.findIndex((function(t){return t===r}));t.Image.fromURL(r.wbg,(function(t){r.canvas.insertAt(t,c,!0),r.trigger("programmatic"),e()}),i)}))},t}}.call(this,e(38))}}]);