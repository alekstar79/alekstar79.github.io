(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{735:function(t,e,r){"use strict";r.r(e),r.d(e,"Octopus",(function(){return O}));r(12),r(16),r(19),r(3),r(26),r(9),r(27);var s=r(2),i=r(10),n=r(11);r(88);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(s.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var a=Math.max,c=Math.pow,u=Math.sqrt,l=Math.sin,p=Math.cos,b=Math.PI,f={8:.016,9:.022,10:.026,11:.03,12:.036,13:.038,14:.042,15:.046,16:.048,17:.05,18:.054,19:.058,20:.06,21:.064,22:.068,23:.072,24:.074,25:.078,26:.08,27:.082,28:.084,29:.086,30:.088,31:.09,32:.094,33:.096,34:.098,35:.099,36:.1},O=function(){function t(e){var r=e.layer,s=r.w,n=r.h;Object(i.a)(this,t),this.mouse={on:!1,x:null,y:null},this.background="#2b2b2b",this.m=2,this.n=8,this.p=22,this.t=0,this.step=1/60,this.w=s,this.h=n}return Object(n.a)(t,[{key:"setColor",value:function(t){}},{key:"setBackground",value:function(t){this.background=t}},{key:"update",value:function(t,e){this.mouse=h(h({},this.mouse),e.mouse)}},{key:"render",value:function(t){var e,r,s,i,n,o,h,O;t.globalCompositeOperation="source-over",t.fillStyle=this.background,t.fillRect(0,0,this.w,this.h);for(var y=0;y<this.n*this.m;y++){e=2*y*b/(this.n*this.m),i=0,t.beginPath(),s=360*y/this.n,t.translate(this.w/2,this.h/2),t.rotate(this.t/3),t.fillStyle="hsl(".concat(s,", 100%, 65%)");for(var w=0;w<this.p;w++)r=2*w*b/this.p,n=(i+=3.4*(O=a(1,c(w*(this.p-w)*2,2*u(this.p)/this.p+f[this.p])-10)))*l(r+2*this.t+i/99)/5,o=i*p(e)-n*l(e),h=i*l(e)+n*p(e),t.moveTo(o,h),t.arc(o,h,O,0,2*b);t.closePath(),t.fill(),t.rotate(-this.t/3),t.translate(-this.w/2,-this.h/2)}this.t+=this.step}}]),t}()}}]);