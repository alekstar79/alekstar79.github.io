(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{721:function(t,e,o){"use strict";o.r(e),o.d(e,"Rain",(function(){return h}));o(12),o(16),o(19),o(3),o(26),o(9),o(27);var s=o(2),i=o(10),n=o(11);function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){Object(s.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var h=function(){function t(e){var o=e.layer,s=o.w,n=o.h;Object(i.a)(this,t),this.mouse={on:!1,x:null,y:null},this.total=s,this.size=1,this.occupation=1,this.length=200,this.accelleration=.03,this.background="#2b2b2b",this.colors=[],this.dots=[],this.dotsVel=[],this.w=s,this.h=n,this.calculations()}return Object(n.a)(t,[{key:"setColor",value:function(t){}},{key:"setBackground",value:function(t){this.background=t}},{key:"calculations",value:function(){for(var t=360/this.total,e=0;e<this.total;++e)this.dotsVel[e]=10*Math.random(),this.dots[e]=this.h+this.length,this.colors[e]=t*e}},{key:"update",value:function(t,e){this.mouse=c(c({},this.mouse),e.mouse)}},{key:"render",value:function(t){t.globalCompositeOperation="source-over",t.fillStyle=this.background,t.fillRect(0,0,this.w,this.h);for(var e=0;e<this.total;++e){var o=this.dots[e]-this.length;this.dots[e]+=this.dotsVel[e]+=this.accelleration,t.fillStyle="hsl(".concat(this.colors[e],", 80%, 50%)"),t.fillRect(this.occupation*e,o,this.size,this.dotsVel[e]+this.length),this.dots[e]>this.h&&Math.random()<.01&&(this.dots[e]=this.dotsVel[e]=0)}}}]),t}()}}]);