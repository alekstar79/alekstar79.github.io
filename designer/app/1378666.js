(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{713:function(t,i,h){"use strict";h.r(i),h.d(i,"Star",(function(){return r}));var s=h(10),n=h(11),a=(h(88),Math.random),r=function(){function t(i){var h=i.w,n=i.h,r=i.velocity,e=void 0===r?1:r,u=i.star;Object(s.a)(this,t),this.x=a()*h,this.y=a()*n,this.vx=a()*(a()>.5?e:-e),this.vy=a()*(a()>.5?e:-e),this.radius=u.random?a()*u.width:u.width}return Object(n.a)(t,[{key:"update",value:function(t){var i=t.w,h=t.h;this.y<0||this.y>h?this.vy=-this.vy:(this.x<0||this.x>i)&&(this.vx=-this.vx),this.x+=this.vx,this.y+=this.vy}},{key:"render",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fill()}}]),t}()}}]);