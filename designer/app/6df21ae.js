(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{716:function(a,t,i){"use strict";i.r(t),i.d(t,"Circle",(function(){return n}));var o=i(10),s=i(11),n=(i(88),function(){function a(t){var i=t.w,s=t.h,n=t.minRadius,r=t.maxRadius;Object(o.a)(this,a),this.x=Math.random()*i,this.y=Math.random()*s,this.radius=Math.random()*(r-n)+n,this.angle=Math.random()*Math.PI*2,this.firstColor="hsla(".concat(360*Math.random(),", 100%, 50%, 1)"),this.secondColor="hsla(".concat(360*Math.random(),", 100%, 50%, 0)")}return Object(s.a)(a,[{key:"draw",value:function(a,t){var i=t.speed;this.angle+=i;var o=this.x+200*Math.cos(this.angle),s=this.y+200*Math.sin(this.angle),n=a.createRadialGradient(o,s,0,o,s,this.radius);n.addColorStop(0,this.firstColor),n.addColorStop(1,this.secondColor),a.globalCompositeOperation="overlay",a.fillStyle=n,a.beginPath(),a.arc(o,s,this.radius,0,2*Math.PI),a.fill()}}]),a}())}}]);