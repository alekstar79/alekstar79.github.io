(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1302:function(n,r,t){t(165)("Uint32",(function(n){return function(r,t,a){return n(this,r,t,a)}}))},711:function(n,r,t){"use strict";t.r(r),t.d(r,"trimCanvas",(function(){return a})),t.d(r,"scanEdge",(function(){return f}));t(108),t(3),t(1302),t(109),t(110),t(111),t(112),t(113),t(114),t(115),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131);function a(n){var r,t,a,f,i,e,o,u,c,h,s,v,w,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(f=n.canvas.height,(a=n.canvas.width)||f){for(w=n.getImageData(0,0,a,f),c=new Uint32Array(w.data.buffer),h=0,s=a*f-1,v=!1,t=0;t<f&&!v;t++){for(r=0;r<a;r++){if(c[h++]&&!i&&(i=t+1,u)){v=!0;break}if(c[s--]&&!u&&(u=f-t-1,i)){v=!0;break}}if(t>f-t&&!i&&!u)return}for(i-=1,v=!1,r=0;r<a&&!v;r++)for(h=i*a+r,s=i*a+(a-r-1),t=i;t<=u;t++){if(c[h]&&!e&&(e=r+1,o)){v=!0;break}if(c[s]&&!o&&(o=a-r-1,e)){v=!0;break}h+=a,s+=a}if(a!==o-(e-=1)+1||f!==u-i+1)return a=o-e+1,f=u-i+1,d||(d=n),d.canvas.height=f,d.canvas.width=a,{left:e,top:i,w:a,h:f}}}function f(n){var r,t,a,f,i,e,o,u,c,h,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a=n.canvas.height,(f=n.canvas.width)||a){for(r=n.getImageData(0,0,f,a),t=new Uint32Array(r.data.buffer),i=f,e=a,o=0,u=0,h=0;h<a;h++)for(c=0;c<f;c++)t[c+h*f]>0&&h<e&&(e=h);for(h=a;h>=0;h--)for(c=0;c<f;c++)t[c+h*f]>0&&h>u&&(u=h);for(c=0;c<f;c++)for(h=0;h<a;h++)t[c+h*f]>0&&c<i&&(i=c);for(c=f;c>=0;c--)for(h=0;h<a;h++)t[c+h*f]>0&&c>o&&(o=c);var v=o-i,w=u-e;return s||(s=n),s.canvas.height=w,s.canvas.width=v,{left:i,top:e,w:v,h:w}}}}}]);