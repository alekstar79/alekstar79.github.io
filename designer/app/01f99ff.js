(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{743:function(t,i,s){"use strict";s.r(i),s.d(i,"Smoothtrail",(function(){return u}));s(12),s(16),s(19),s(3),s(26),s(9),s(27);var e=s(2),r=s(10),a=s(11);s(94),s(25);function n(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),s.push.apply(s,e)}return s}function h(t){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?n(Object(s),!0).forEach((function(i){Object(e.a)(t,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))}))}return t}var o=function(t,i){return~~(Math.random()*(i-t+1)+t)},c="#000",u=function(){function t(i){var s=i._canvas,e=i.layer,a=e.w,n=e.h;Object(r.a)(this,t),Object.assign(s.style,{background:c}),this.d=Math.sqrt(a*a+n*n)/4,this.background=c,this.canvas=s,this.trail=[],this.maxTrail=200,this.speed=.09,this.growRadius=!0,this.radius=1,this.angle=0,this.arcx=0,this.arcy=0,this.seconds=0,this.milliseconds=0,this.mx=0,this.my=0,this.w=a,this.h=n}return Object(a.a)(t,[{key:"setColor",value:function(t){this.color=t}},{key:"setBackground",value:function(t){this.background=t}},{key:"update",value:function(t,i){this.mouse=h(h({},this.mouse),i.mouse),this.updateArc(),this.updateTrail()}},{key:"updateTrail",value:function(){this.trail.length<this.maxTrail&&this.trail.push({x:this.arcx,y:this.arcy}),this.trail.length>=this.maxTrail&&this.trail.splice(0,1)}},{key:"updateArc",value:function(){this.arcx=this.w/2+Math.sin(this.angle)*this.radius,this.arcy=this.h/2+Math.cos(this.angle)*this.radius;var t=new Date;this.seconds=t.getSeconds(),this.milliseconds=t.getMilliseconds(),this.angle+=this.speed*(this.seconds+1+this.milliseconds/1e3),this.radius<=1&&(this.growRadius=!0),this.radius>=this.d&&(this.growRadius=!1),this.growRadius?this.radius+=1:this.radius-=1}},{key:"render",value:function(t){this.adjustBackground(),this.fillCanvas(t),this.renderTrail(t)}},{key:"adjustBackground",value:function(){this.background!==c&&(Object.assign(this.canvas.style,{background:this.background}),c=this.background)}},{key:"fillCanvas",value:function(t){t.globalCompositeOperation="destination-out",t.fillStyle="rgba(0,0,0,.1)",t.fillRect(0,0,this.w,this.h)}},{key:"renderTrail",value:function(t){t.globalCompositeOperation="lighter",t.beginPath();for(var i=this.trail.length;i--;){var s=i===this.trail.length?this.trail[i+1]:this.trail[i],e=(this.trail[i].x+s.x)/2,r=(this.trail[i].y+s.y)/2;t.quadraticCurveTo(Math.round(this.arcx),Math.round(this.arcy),e,r)}t.strokeStyle="hsla(".concat(o(170,300),", 100%, ").concat(o(50,75),"%, 1)"),t.stroke(),t.closePath()}}]),t}()}}]);