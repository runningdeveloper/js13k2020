!function(){"use strict";let t,i,e={};function s(t,...i){(e[t]||[]).map(t=>t(...i))}function h(){return i}const n=()=>{};function r(t,i){let e=i.parentNode;if(t.setAttribute("data-kontra",""),e){let s=e.querySelector("[data-kontra]:last-of-type")||i;e.insertBefore(t,s.nextSibling)}else document.body.appendChild(t)}function o(t,i,e){return Math.min(Math.max(t,e),i)}function a(t,i){return t.rotation||i.rotation?null:([t,i]=[t,i].map(t=>function(t){let i=t.world||t,e=i.x,s=i.y,h=i.width,n=i.height;return t.anchor&&(e-=h*t.anchor.x,s-=n*t.anchor.y),{x:e,y:s,width:h,height:n}}(t)),t.x<i.x+i.width&&t.x+t.width>i.x&&t.y<i.y+i.height&&t.y+t.height>i.y)}class c{constructor(t=0,i=0,e={}){this.x=t,this.y=i,e._c&&(this.clamp(e._a,e._b,e._d,e._e),this.x=t,this.y=i)}add(t){return new c(this.x+t.x,this.y+t.y,this)}subtract(t){return new c(this.x-t.x,this.y-t.y,this)}scale(t){return new c(this.x*t,this.y*t)}normalize(t=this.length()){return new c(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.dot(t)/(this.length()*t.length()))}clamp(t,i,e,s){this._c=!0,this._a=t,this._b=i,this._d=e,this._e=s}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?o(this._a,this._d,t):t}set y(t){this._y=this._c?o(this._b,this._e,t):t}}function d(){return new c(...arguments)}d.prototype=c.prototype,d.class=c;class l extends class{constructor(t){return this.init(t)}init(t={}){this.position=d(),this.velocity=d(),this.acceleration=d(),this.ttl=1/0,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let i=this.acceleration;t&&(i=i.scale(t)),this.velocity=this.velocity.add(i);let e=this.velocity;t&&(e=e.scale(t)),this.position=this.position.add(e),this._pc(),this.ttl--}get dx(){return this.velocity.x}get dy(){return this.velocity.y}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}isAlive(){return this.ttl>0}_pc(){}}{init({width:t=0,height:i=0,context:e=h(),render:s=this.draw,update:n=this.advance,children:r=[],anchor:o={x:0,y:0},sx:a=0,sy:c=0,opacity:d=1,rotation:l=0,scaleX:u=1,scaleY:p=1,..._}={}){this.children=[],super.init({width:t,height:i,context:e,anchor:o,sx:a,sy:c,opacity:d,rotation:l,scaleX:u,scaleY:p,..._}),this._di=!0,this._uw(),r.map(t=>this.addChild(t)),this._rf=s,this._uf=n}render(t){let i=this.context;i.save(),(this.x||this.y)&&i.translate(this.x,this.y),this.rotation&&i.rotate(this.rotation),(this.sx||this.sy)&&i.translate(-this.sx,-this.sy),1==this.scaleX&&1==this.scaleY||i.scale(this.scaleX,this.scaleY);let e=-this.width*this.anchor.x,s=-this.height*this.anchor.y;(e||s)&&i.translate(e,s),this.context.globalAlpha=this.opacity,this._rf(),(e||s)&&i.translate(-e,-s);let h=this.children;t&&(h=h.filter(t)),h.map(t=>t.render&&t.render()),i.restore()}draw(){}_pc(t,i){this._uw(),this.children.map(t=>t._pc())}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this._pc()}set y(t){this.position.y=t,this._pc()}get width(){return this._w}set width(t){this._w=t,this._pc()}get height(){return this._h}set height(t){this._h=t,this._pc()}_uw(){if(!this._di)return;let{_wx:t=0,_wy:i=0,_wo:e=1,_wr:s=0,_wsx:h=1,_wsy:n=1}=this.parent||{};this._wx=this.x,this._wy=this.y,this._ww=this.width,this._wh=this.height,this._wo=e*this.opacity,this._wr=s+this.rotation;let{x:r,y:o}=function(t,i){let e=Math.sin(i),s=Math.cos(i);return{x:t.x*s-t.y*e,y:t.x*e+t.y*s}}({x:this.x,y:this.y},s);this._wx=r,this._wy=o,this._wsx=h*this.scaleX,this._wsy=n*this.scaleY,this._wx=this.x*h,this._wy=this.y*n,this._ww=this.width*this._wsx,this._wh=this.height*this._wsy,this._wx+=t,this._wy+=i}get world(){return{x:this._wx,y:this._wy,width:this._ww,height:this._wh,opacity:this._wo,rotation:this._wr,scaleX:this._wsx,scaleY:this._wsy}}addChild(t,{absolute:i=!1}={}){this.children.push(t),t.parent=this,t._pc=t._pc||n,t._pc()}removeChild(t){let i=this.children.indexOf(t);-1!==i&&(this.children.splice(i,1),t.parent=null,t._pc())}update(t){this._uf(t),this.children.map(t=>t.update&&t.update())}get opacity(){return this._opa}set opacity(t){this._opa=t,this._pc()}get rotation(){return this._rot}set rotation(t){this._rot=t,this._pc()}setScale(t,i=t){this.scaleX=t,this.scaleY=i}get scaleX(){return this._scx}set scaleX(t){this._scx=t,this._pc()}get scaleY(){return this._scy}set scaleY(t){this._scy=t,this._pc()}}function u(){return new l(...arguments)}u.prototype=l.prototype,u.class=l;class p extends u.class{init({image:t,width:i=(t?t.width:void 0),height:e=(t?t.height:void 0),...s}={}){super.init({image:t,width:i,height:e,...s})}get animations(){return this._a}set animations(t){let i,e;for(i in this._a={},t)this._a[i]=t[i].clone(),e=e||this._a[i];this.currentAnimation=e,this.width=this.width||e.width,this.height=this.height||e.height}playAnimation(t){this.currentAnimation=this.animations[t],this.currentAnimation.loop||this.currentAnimation.reset()}advance(t){super.advance(t),this.currentAnimation&&this.currentAnimation.update(t)}draw(){this.image&&this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.currentAnimation&&this.currentAnimation.render({x:0,y:0,width:this.width,height:this.height,context:this.context}),this.color&&(this.context.fillStyle=this.color,this.context.fillRect(0,0,this.width,this.height))}}function _(){return new p(...arguments)}_.prototype=p.prototype,_.class=p;let x=/(\d+)(\w+)/;class w extends u.class{init({text:t="",textAlign:i="",lineHeight:e=1,font:s=h().font,...n}={}){super.init({text:t,textAlign:i,lineHeight:e,font:s,...n}),this._p()}get width(){return this._w}set width(t){this._d=!0,this._w=t,this._fw=t}get text(){return this._t}set text(t){this._d=!0,this._t=t}get font(){return this._f}set font(t){this._d=!0,this._f=t,this._fs=function(t){let i=t.match(x),e=+i[1];return{size:e,unit:i[2],computed:e}}(t).computed}get lineHeight(){return this._lh}set lineHeight(t){this._d=!0,this._lh=t}render(){this._d&&this._p(),super.render()}_p(){this._s=[],this._d=!1;let t=this.context;if(t.font=this.font,!this._s.length&&this._fw){let i=this.text.split(" "),e=0,s=2;for(;s<=i.length;s++){let h=i.slice(e,s).join(" ");t.measureText(h).width>this._fw&&(this._s.push(i.slice(e,s-1).join(" ")),e=s-1)}this._s.push(i.slice(e,s).join(" "))}if(!this._s.length&&this.text.includes("\n")){let i=0;this.text.split("\n").map(e=>{this._s.push(e),i=Math.max(i,t.measureText(e).width)}),this._w=this._fw||i}this._s.length||(this._s.push(this.text),this._w=this._fw||t.measureText(this.text).width),this.height=this._fs+(this._s.length-1)*this._fs*this.lineHeight,this._uw()}draw(){let t=0,i=this.textAlign,e=this.context;i=this.textAlign||("rtl"===e.canvas.dir?"right":"left"),t="right"===i?this.width:"center"===i?this.width/2|0:0,this._s.map((s,h)=>{e.textBaseline="top",e.textAlign=i,e.fillStyle=this.color,e.font=this.font,e.fillText(s,t,this._fs*this.lineHeight*h)})}}function y(){return new w(...arguments)}function g(t){let i=t.canvas;t.clearRect(0,0,i.width,i.height)}y.prototype=w.prototype,y.class=w;let f={},m={},v={Enter:"enter",Escape:"esc",Space:"space",ArrowLeft:"left",ArrowUp:"up",ArrowRight:"right",ArrowDown:"down"};function A(t){let i=v[t.code];m[i]=!0,f[i]&&f[i](t)}function C(t){m[v[t.code]]=!1}function b(){m={}}function S(t){return!!m[t]}function Y(t){let i=[];return t._dn?i.push(t._dn):t.children&&t.children.map(t=>{i=i.concat(Y(t))}),i}class X extends u.class{init({id:t,name:i=t,cullObjects:e=!0,cullFunction:s=a,...h}){const n=this._dn=document.createElement("section");n.tabIndex=-1,n.style="position:absolute;left:-9999px",n.id=t,n.setAttribute("aria-label",i),super.init({id:t,name:i,cullObjects:e,cullFunction:s,...h}),r(n,this.context.canvas);let o=this.context.canvas;this.camera=u({x:o.width/2,y:o.height/2,width:o.width,height:o.height,anchor:{x:.5,y:.5}}),this.camera._pc=()=>{super._pc.call(this.camera);this.context.canvas;this.camera._wx=this.camera.x*this.scaleX,this.camera._wy=this.camera.y*this.scaleY}}show(){this.hidden=this._dn.hidden=!1;let t=this.children.find(t=>t.focus);t?t.focus():this._dn.focus(),this.onShow()}hide(){this.hidden=this._dn.hidden=!0,this.onHide()}addChild(t,i){super.addChild(t,i),Y(t).map(t=>{this._dn.appendChild(t)})}removeChild(t){super.removeChild(t),Y(t).map(t=>{r(t,this.context.canvas)})}destroy(){this._dn.remove(),this.children.map(t=>t.destroy&&t.destroy())}update(t){this.hidden||super.update(t)}lookAt(t){let i=(t=t.world||t).x,e=t.y;t.scaleX&&(i/=t.scaleX,e/=t.scaleY),this.camera.x=i,this.camera.y=e,this._pc()}_pc(){super._pc(),this.camera&&this.camera._pc()}render(){let{x:t,y:i,width:e,height:s}=this.camera;this.sx=t*this.scaleX-e/2,this.sy=i*this.scaleY-s/2,this.hidden||super.render(t=>!this.cullObjects||this.cullFunction(t,this.camera))}onShow(){}onHide(){}}function E(){return new X(...arguments)}E.prototype=X.prototype,E.class=X,function(){let{canvas:e}=function(e){if(t=document.getElementById(e)||e||document.querySelector("canvas"),!t)throw Error("You must provide a canvas element for the game");return i=t.getContext("2d"),i.imageSmoothingEnabled=!1,s("init"),{canvas:t,context:i}}(),r=e.height/2,o={up:"w",down:"s",count:100},c=[],d=0;function l(){return String.fromCharCode(Math.floor(26*Math.random())+65).toLowerCase()}function u(t){let i=_({x:e.width,y:t,dx:-2,color:"red",height:40,width:2});c.push(i)}function p(t,i){u(i-t/2),u(i+t/2)}let x=_({x:e.width/4,y:e.height/2,color:"blue",width:50,height:50,anchor:{x:0,y:.5}}),w=y({text:o.up.toUpperCase(),font:"20px Arial",color:"white",x:40,y:e.height-100,anchor:{x:0,y:.5},textAlign:"center"}),f=y({text:o.down.toUpperCase(),font:"20px Arial",color:"white",x:40,y:e.height-20,anchor:{x:0,y:.5},textAlign:"center"}),m=y({text:"Score: 0",font:"20px Arial",color:"white",x:e.width-10,y:e.height-20,anchor:{x:1,y:.5},textAlign:"center"}),Y=E({id:"display",children:[w,f]});!function(){let t;for(t=0;t<26;t++)v[t+65]=v["Key"+String.fromCharCode(t+65)]=String.fromCharCode(t+97);for(t=0;t<10;t++)v[48+t]=v["Digit"+t]=""+t;window.addEventListener("keydown",A),window.addEventListener("keyup",C),window.addEventListener("blur",b)}(),p(300,r),function({fps:t=60,clearCanvas:i=!0,update:e=n,render:r,context:o=h()}={}){if(!r)throw Error("You must provide a render() function");let a,c,d,l,u,p=0,_=1e3/t,x=1/t,w=i?g:n;function y(){if(c=requestAnimationFrame(y),d=performance.now(),l=d-a,a=d,!(l>1e3)){for(s("tick"),p+=l;p>=_;)u.update(x),p-=_;w(o),u.render()}}return u={update:e,render:r,isStopped:!0,start(){a=performance.now(),this.isStopped=!1,requestAnimationFrame(y)},stop(){this.isStopped=!0,cancelAnimationFrame(c)},_frame:y,set _last(t){a=t}},u}({update:function(){if(w.text=o.up.toUpperCase(),f.text=o.down.toUpperCase(),S(o.up)&&(x.y=x.y-10),S(o.down)&&(x.y=x.y+10),o.count-=.3,o.count<0)for(o.count=100,o.up=l(),o.down=l();o.down===o.up;)o.down=l();d+=.2,c=c.filter(t=>t.x>=0),c.map(t=>{t.update(),a(x,t)&&(d=0)}),c.filter(t=>e.width-t.width<=t.x).length>0&&p(300,r),r+=.1,m.text="Score: "+parseInt(d),Y.update(),x.update()},render:function(){c.map(t=>t.render()),x.render(),Y.render(),m.render()}}).start()}()}();