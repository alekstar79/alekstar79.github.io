(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1057:function(t,i,o){"use strict";o.r(i);var e=o(1),n=o(151),a=o(0),r=o.n(a),h=(o(24),o(3),o(1053)),l=o(1052),c=o(1292),s=o.n(c),g=o(1531),d=o.n(g);i.default=function(t){Object(n.a)(t);var i,o,a=h._getTypeNumber,c=h._getAndroid,g=h.getFontDeclaration,u=l.QrModel,p=l.QRErrorCorrectLevel,_=c();_&&_<=2.1&&(CanvasRenderingContext2D.prototype.drawImage=(i=CanvasRenderingContext2D.prototype.drawImage,o=1/window.devicePixelRatio,function(t,e,n,a,r,h,l,c,s){if("nodeName"in t&&/img/i.test(t.nodeName))for(var g=arguments.length-1;g>=1;g--)arguments[g]*=o;else void 0===c&&(arguments[1]*=o,arguments[2]*=o,arguments[3]*=o,arguments[4]*=o);i.apply(this,arguments)}));var f=function(t){this._htOption=t,this._bIsPainted=!1,"svg"===this._htOption.drawer?(this._oContext={},this._canvas={}):(this._canvas=document.createElement("canvas"),this._oContext=this._canvas.getContext("2d")),this.dataURL=null};function v(t){this._htOption={height:384,width:384,typeNumber:4,colorDark:"rgba(0,0,0,1)",colorLight:"rgba(255,255,255,1)",correctLevel:p.H,dotScale:1,dotScaleTiming:1,dotScaleTiming_H:void 0,dotScaleTiming_V:void 0,dotScaleA:1,dotScaleAO:void 0,dotScaleAI:void 0,quietZone:0,quietZoneColor:"rgba(0,0,0,0)",title:{text:"",fontFamily:"sans-serif",fontStyle:"normal",fontWeight:500,fontSize:24,backgroundColor:"rgba(255,255,255,1)",color:"rgba(0,0,0,1)",height:0,top:0},logo:void 0,logoWidth:void 0,logoHeight:void 0,logoMaxWidth:void 0,logoMaxHeight:void 0,logoBackgroundColor:"rgba(255,255,255,1)",logoBackgroundTransparent:!1,PO:void 0,PI:void 0,PO_TL:void 0,PI_TL:void 0,PO_TR:void 0,PI_TR:void 0,PO_BL:void 0,PI_BL:void 0,AO:void 0,AI:void 0,timing:void 0,timing_H:void 0,timing_V:void 0,backgroundImage:void 0,backgroundImageAlpha:1,autoColor:!1,autoColorDark:"rgba(0,0,0,1)",autoColorLight:"rgba(255,255,255,1)",onRenderingStart:void 0,onRenderingEnd:void 0,qversion:0,tooltip:!1,binary:!1,drawer:"canvas",crossOrigin:null},"string"==typeof t&&(t={text:t}),t&&(this._htOption=d()(this._htOption,t)),(this._htOption.qversion<0||this._htOption.qversion>40)&&(this._htOption.qversion=0),(this._htOption.dotScale<0||this._htOption.dotScale>1)&&(this._htOption.dotScale=1),(this._htOption.dotScaleTiming<0||this._htOption.dotScaleTiming>1)&&(this._htOption.dotScaleTiming=1),this._htOption.dotScaleTiming_H?(this._htOption.dotScaleTiming_H<0||this._htOption.dotScaleTiming_H>1)&&(this._htOption.dotScaleTiming_H=1):this._htOption.dotScaleTiming_H=this._htOption.dotScaleTiming,this._htOption.dotScaleTiming_V?(this._htOption.dotScaleTiming_V<0||this._htOption.dotScaleTiming_V>1)&&(this._htOption.dotScaleTiming_V=1):this._htOption.dotScaleTiming_V=this._htOption.dotScaleTiming,(this._htOption.dotScaleA<0||this._htOption.dotScaleA>1)&&(this._htOption.dotScaleA=1),this._htOption.dotScaleAO?(this._htOption.dotScaleAO<0||this._htOption.dotScaleAO>1)&&(this._htOption.dotScaleAO=1):this._htOption.dotScaleAO=this._htOption.dotScaleA,this._htOption.dotScaleAI?(this._htOption.dotScaleAI<0||this._htOption.dotScaleAI>1)&&(this._htOption.dotScaleAI=1):this._htOption.dotScaleAI=this._htOption.dotScaleA,(this._htOption.backgroundImageAlpha<0||this._htOption.backgroundImageAlpha>1)&&(this._htOption.backgroundImageAlpha=1),(!this._htOption.drawer||"svg"!==this._htOption.drawer&&"canvas"!==this._htOption.drawer)&&(this._htOption.drawer="canvas")}return f.prototype.draw=function(){var t=Object(e.a)(r.a.mark((function t(i){var o,n,a,h,l,c,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d=function(){o.quietZone>0&&o.quietZoneColor&&(n.fillStyle=o.quietZoneColor,n.lineWidth=0,n.fillRect(0,0,a._canvas.width,o.quietZone),n.fillRect(0,o.quietZone,o.quietZone,a._canvas.height-2*o.quietZone),n.fillRect(a._canvas.width-o.quietZone,o.quietZone,o.quietZone,a._canvas.height-2*o.quietZone),n.fillRect(0,a._canvas.height-o.quietZone,a._canvas.width,o.quietZone))},o=s()(this._htOption),n=this._oContext,a=this,o.title.text?(o.title.height=1.2*o.title.fontSize,o.title.top=o.title.height/1.3,o.height+=o.title.height):o.title.height=0,h=i.getModuleCount(),l=Math.round(o.width/h),c=Math.round((o.height-o.title.height)/h),l<=1&&(l=1),c<=1&&(c=1),o.width=l*h,o.height=c*h+o.title.height,o.quietZone=Math.round(o.quietZone),a._canvas.height=o.height+2*o.quietZone,a._canvas.width=o.width+2*o.quietZone,a.clear(),n.lineWidth=0,n.fillStyle=o.colorLight,n.fillRect(0,0,a._canvas.width,a._canvas.height),!o.backgroundImage){t.next=18;break}return t.next=18,function(){var t=new Image;return null!=o.crossOrigin&&(t.crossOrigin=o.crossOrigin),t.src=o.backgroundImage,new Promise((function(i){t.onload=function(){n.globalAlpha=1,n.globalAlpha=o.backgroundImageAlpha,n.drawImage(t,0,o.title.height,o.width+2*o.quietZone,o.height+2*o.quietZone-o.title.height),n.globalAlpha=1,i()}}))}();case 18:return t.next=20,function(){var t=Object(e.a)(r.a.mark((function t(i){var e,s,u,p,_,f,v,O,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o.onRenderingStart&&o.onRenderingStart(o),e=0;e<h;e++)for(s=0;s<h;s++)u=s*l+o.quietZone,p=e*c+o.quietZone,_=i.isDark(e,s),f=i.getEye(e,s),v=o.dotScale,O=void 0,m=void 0,n.lineWidth=0,f?(O=o[f.type]||o[f.type.substring(0,2)]||o.colorDark,m=o.colorLight):o.backgroundImage?(m="rgba(0,0,0,0)",6===e?o.autoColor?(O=o.timing_H||o.timing||o.autoColorDark,m=o.timing_H||o.timing||o.autoColorLight):O=o.timing_H||o.timing||o.colorDark:6===s?o.autoColor?(O=o.timing_V||o.timing||o.autoColorDark,m=o.timing_V||o.timing||o.autoColorLight):O=o.timing_V||o.timing||o.colorDark:o.autoColor?(O=o.autoColorDark,m=o.autoColorLight):O=o.colorDark):(O=6===e?o.timing_H||o.timing||o.colorDark:6===s&&(o.timing_V||o.timing)||o.colorDark,m=o.colorLight),n.strokeStyle=_?O:m,n.fillStyle=_?O:m,f?(_=f.isDarkBlock,v="AO"===f.type?o.dotScaleAO:"AI"===f.type?o.dotScaleAI:1,o.backgroundImage&&o.autoColor?(O=("AO"===f.type?o.AI:o.AO)||o.autoColorDark,m=o.autoColorLight):O=("AO"===f.type?o.AI:o.AO)||O,n.fillRect(u+l*(1-v)/2,o.title.height+p+c*(1-v)/2,l*v,c*v)):6===e?(v=o.dotScaleTiming_H,n.fillRect(u+l*(1-v)/2,o.title.height+p+c*(1-v)/2,l*v,c*v)):6===s?(v=o.dotScaleTiming_V,n.fillRect(u+l*(1-v)/2,o.title.height+p+c*(1-v)/2,l*v,c*v)):(o.backgroundImage,n.fillRect(u+l*(1-v)/2,o.title.height+p+c*(1-v)/2,l*v,c*v)),1===o.dotScale||f||(n.strokeStyle=o.colorLight);if(o.title.text&&(n.fillStyle=o.title.backgroundColor,n.fillRect(0,0,a._canvas.width,o.title.height+o.quietZone),n.font=g(o.title),n.fillStyle=o.title.color,n.textAlign="center",n.fillText(o.title.text,a._canvas.width/2,o.quietZone+o.title.top)),!o.logo){t.next=17;break}return t.prev=4,t.t0=function(t){var i,e,r=Math.round(o.height/3.5),h=Math.round(o.width/3.5);h!==r&&(h=r),o.logoMaxWidth?h=Math.round(o.logoMaxWidth):o.logoWidth&&(h=Math.round(o.logoWidth)),o.logoMaxHeight?r=Math.round(o.logoMaxHeight):o.logoHeight&&(r=Math.round(o.logoHeight)),void 0===t.naturalWidth?(e=t.height,i=t.width):(e=t.naturalHeight,i=t.naturalWidth),(o.logoMaxWidth||o.logoMaxHeight)&&(o.logoMaxWidth&&i<=h&&(h=i),o.logoMaxHeight&&e<=r&&(r=e),i<=h&&e<=r&&(h=i,r=e));var l=(o.width+2*o.quietZone-h)/2,c=(o.height+o.title.height+2*o.quietZone-r)/2,s=Math.min(h/i,r/e),g=i*s,u=e*s;(o.logoMaxWidth||o.logoMaxHeight)&&(h=g,r=u,l=(o.width+2*o.quietZone-h)/2,c=(o.height+o.title.height+2*o.quietZone-r)/2),o.logoBackgroundTransparent||(n.fillStyle=o.logoBackgroundColor,n.fillRect(l,c,h,r)),n.drawImage(t,l+(h-g)/2,c+(r-u)/2,g,u),d(),a._bIsPainted=!0,a.makeImage()},t.next=8,new Promise((function(t,i){var e=new Image;null!=o.crossOrigin&&(e.crossOrigin=o.crossOrigin),e.onload=function(){t(e)},e.onerror=function(t){i(t)},e.src=o.logo}));case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=15;break;case 12:t.prev=12,t.t2=t.catch(4),console.log("DRAW ERROR: ".concat(t.t2.message));case 15:t.next=20;break;case 17:d(),a._bIsPainted=!0,a.makeImage();case 20:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(i){return t.apply(this,arguments)}}()(i);case 20:case"end":return t.stop()}}),t,this)})));return function(i){return t.apply(this,arguments)}}(),f.prototype.makeImage=function(){if(this._bIsPainted&&!(_&&_<3)){try{this.dataURL="svg"===this._htOption.drawer?this._oContext.getSerializedSvg(!0):this._canvas.toDataURL("image/png")}catch(t){}this._htOption.onRenderingEnd&&this._htOption.onRenderingEnd(this._htOption,this.dataURL)}},f.prototype.isPainted=function(){return this._bIsPainted},f.prototype.clear=f.prototype.remove=function(){this._oContext.clearRect(0,0,this._canvas.width,this._canvas.height),this._bIsPainted=!1},f.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},v.prototype.makeCode=function(t){return t||(t=this._htOption.text),this._oQRCode=new u(a(t,this._htOption),this._htOption.correctLevel),this._oQRCode.addData(t,this._htOption.binary),this._oQRCode.make(),this},v.prototype.draw=Object(e.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._oDrawing=new f(s()(this._htOption)),t.next=3,this._oDrawing.draw(this._oQRCode);case 3:case"end":return t.stop()}}),t,this)}))),v.prototype.makeImage=function(){this._oDrawing.makeImage()},v.prototype.clear=function(){this._oDrawing.remove()},v.prototype.resize=function(){var t=Object(e.a)(r.a.mark((function t(i,o){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._htOption.height=o,this._htOption.width=i,t.next=4,this._oDrawing.draw(this._oQRCode);case 4:case"end":return t.stop()}}),t,this)})));return function(i,o){return t.apply(this,arguments)}}(),Object.defineProperties(v.prototype,{canvas:{enumerable:!0,get:function(){return this._oDrawing._canvas}},height:{enumerable:!0,get:function(){return this._oDrawing._canvas.height},set:function(t){this._htOption.height=t}},width:{enumerable:!0,get:function(){return this._oDrawing._canvas.width},set:function(t){this._htOption.width=t}},title:{enumerable:!0,get:function(){return this._htOption.title},set:function(t){this._htOption.title=t}},text:{enumerable:!0,get:function(){return this._htOption.text},set:function(t){this._htOption.text=t}},logo:{enumerable:!0,get:function(){return this._htOption.logo},set:function(t){this._htOption.logo=t}}}),v.CorrectLevel=p,v}},1429:function(t,i,o){var e=o(507),n=o(390);t.exports=function(t,i,o){(void 0!==o&&!n(t[i],o)||void 0===o&&!(i in t))&&e(t,i,o)}},1430:function(t,i){t.exports=function(t,i){if(("constructor"!==i||"function"!=typeof t[i])&&"__proto__"!=i)return t[i]}},1531:function(t,i,o){var e=o(1532),n=o(724)((function(t,i,o){e(t,i,o)}));t.exports=n},1532:function(t,i,o){var e=o(1217),n=o(1429),a=o(1533),r=o(1535),h=o(181),l=o(689),c=o(1430);t.exports=function t(i,o,s,g,d){i!==o&&a(o,(function(a,l){if(d||(d=new e),h(a))r(i,o,l,s,t,g,d);else{var u=g?g(c(i,l),a,l+"",i,o,d):void 0;void 0===u&&(u=a),n(i,l,u)}}),l)}},1533:function(t,i,o){var e=o(1534)();t.exports=e},1534:function(t,i){t.exports=function(t){return function(i,o,e){for(var n=-1,a=Object(i),r=e(i),h=r.length;h--;){var l=r[t?h:++n];if(!1===o(a[l],l,a))break}return i}}},1535:function(t,i,o){var e=o(1429),n=o(1288),a=o(1290),r=o(1233),h=o(1291),l=o(693),c=o(489),s=o(1293),g=o(690),d=o(493),u=o(181),p=o(694),_=o(691),f=o(1430),v=o(1298);t.exports=function(t,i,o,O,m,w,S){var b=f(t,o),k=f(i,o),x=S.get(k);if(x)e(t,o,x);else{var I=w?w(b,k,o+"",t,i,S):void 0,y=void 0===I;if(y){var A=c(k),C=!A&&g(k),R=!A&&!C&&_(k);I=k,A||C||R?c(b)?I=b:s(b)?I=r(b):C?(y=!1,I=n(k,!0)):R?(y=!1,I=a(k,!0)):I=[]:p(k)||l(k)?(I=b,l(b)?I=v(b):u(b)&&!d(b)||(I=h(k))):y=!1}y&&(S.set(k,I),m(I,k,O,w,S),S.delete(k)),e(t,o,I)}}}}]);