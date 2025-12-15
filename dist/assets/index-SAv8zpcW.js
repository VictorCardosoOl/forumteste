(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function me(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Ro(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}function ge(o,e,t){return e&&Ro(o.prototype,e),o}function To(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Ge(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),t.push.apply(t,i)}return t}function fe(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ge(Object(t),!0).forEach(function(i){To(o,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Ge(Object(t)).forEach(function(i){Object.defineProperty(o,i,Object.getOwnPropertyDescriptor(t,i))})}return o}function Ze(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&we(o,e)}function B(o){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},B(o)}function we(o,e){return we=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},we(o,e)}function Io(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function eo(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ko(o,e){return e&&(typeof e=="object"||typeof e=="function")?e:eo(o)}function oo(o){var e=Io();return function(){var i=B(o),a;if(e){var s=B(this).constructor;a=Reflect.construct(i,arguments,s)}else a=i.apply(this,arguments);return ko(this,a)}}function Oo(o,e){for(;!Object.prototype.hasOwnProperty.call(o,e)&&(o=B(o),o!==null););return o}function j(o,e,t){return typeof Reflect<"u"&&Reflect.get?j=Reflect.get:j=function(a,s,r){var n=Oo(a,s);if(n){var d=Object.getOwnPropertyDescriptor(n,s);return d.get?d.get.call(r):d.value}},j(o,e,t||o)}function X(o,e){return Fo(o)||No(o,e)||ao(o,e)||qo()}function Do(o){return Mo(o)||Lo(o)||ao(o)||zo()}function Mo(o){if(Array.isArray(o))return ye(o)}function Fo(o){if(Array.isArray(o))return o}function Lo(o){if(typeof Symbol<"u"&&Symbol.iterator in Object(o))return Array.from(o)}function No(o,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(o)))){var t=[],i=!0,a=!1,s=void 0;try{for(var r=o[Symbol.iterator](),n;!(i=(n=r.next()).done)&&(t.push(n.value),!(e&&t.length===e));i=!0);}catch(d){a=!0,s=d}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw s}}return t}}function ao(o,e){if(o){if(typeof o=="string")return ye(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(o,e)}}function ye(o,e){(e==null||e>o.length)&&(e=o.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=o[t];return i}function zo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var K={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},io=function(){function o(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};me(this,o),Object.assign(this,K,e),this.smartphone=K.smartphone,e.smartphone&&Object.assign(this.smartphone,e.smartphone),this.tablet=K.tablet,e.tablet&&Object.assign(this.tablet,e.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),this.direction==="horizontal"?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return ge(o,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame(function(){t.resize(),t.resizeTick=!1}))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var t=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",t!=this.context){var i=t=="desktop"?this.smooth:this[t].smooth,a=this.context=="desktop"?this.smooth:this[this.context].smooth;i!=a&&window.location.reload()}}}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach(function(i){i.addEventListener("click",t.setScrollTo,!1)})}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),{offset:t.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var i=this,a=this.instance.scroll.y,s=a+this.windowHeight,r=this.instance.scroll.x,n=r+this.windowWidth;Object.entries(this.els).forEach(function(d){var l=X(d,2),c=l[0],p=l[1];if(p&&(!p.inView||t)&&(i.direction==="horizontal"?n>=p.left&&r<p.right&&i.setInView(p,c):s>=p.top&&a<p.bottom&&i.setInView(p,c)),p&&p.inView)if(i.direction==="horizontal"){var u=p.right-p.left;p.progress=(i.instance.scroll.x-(p.left-i.windowWidth))/(u+i.windowWidth),(n<p.left||r>p.right)&&i.setOutOfView(p,c)}else{var m=p.bottom-p.top;p.progress=(i.instance.scroll.y-(p.top-i.windowHeight))/(m+i.windowHeight),(s<p.top||a>p.bottom)&&i.setOutOfView(p,c)}}),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,i){this.els[i].inView=!0,t.el.classList.add(t.class),this.currentElements[i]=t,t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[i].call=!1))}},{key:"setOutOfView",value:function(t,i){var a=this;this.els[i].inView=!1,Object.keys(this.currentElements).forEach(function(s){s===i&&delete a.currentElements[s]}),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,i){this.callWay=i,this.callValue=t.call.split(",").map(function(s){return s.trim()}),this.callObj=t,this.callValue.length==1&&(this.callValue=this.callValue[0]);var a=new Event(this.namespace+"call");this.el.dispatchEvent(a)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,i){this.listeners[t]||(this.listeners[t]=[]);var a=this.listeners[t];a.push(i),a.length===1&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),t==="call"&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,i){if(this.listeners[t]){var a=this.listeners[t],s=a.indexOf(i);s<0||(a.splice(s,1),a.index===0&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var i=this,a=t.type.replace(this.namespace,""),s=this.listeners[a];!s||s.length===0||s.forEach(function(r){switch(a){case"scroll":return r(i.instance);case"call":return r(i.callValue,i.callWay,i.callObj);default:return r()}})}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,i){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach(function(i){t.el.removeEventListener(t.namespace+i,t.checkEvent,!1)}),this.listeners={},this.scrollToEls.forEach(function(i){i.removeEventListener("click",t.setScrollTo,!1)}),this.html.classList.remove(this.initClass)}}]),o}(),Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function to(o,e){return e={exports:{}},o(e,e.exports),e.exports}var so=to(function(o,e){(function(){function t(){var i=window,a=document;if("scrollBehavior"in a.documentElement.style&&i.__forceSmoothScrollPolyfill__!==!0)return;var s=i.HTMLElement||i.Element,r=468,n={scroll:i.scroll||i.scrollTo,scrollBy:i.scrollBy,elementScroll:s.prototype.scroll||p,scrollIntoView:s.prototype.scrollIntoView},d=i.performance&&i.performance.now?i.performance.now.bind(i.performance):Date.now;function l(g){var v=["MSIE ","Trident/","Edge/"];return new RegExp(v.join("|")).test(g)}var c=l(i.navigator.userAgent)?1:0;function p(g,v){this.scrollLeft=g,this.scrollTop=v}function u(g){return .5*(1-Math.cos(Math.PI*g))}function m(g){if(g===null||typeof g!="object"||g.behavior===void 0||g.behavior==="auto"||g.behavior==="instant")return!0;if(typeof g=="object"&&g.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+g.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(g,v){if(v==="Y")return g.clientHeight+c<g.scrollHeight;if(v==="X")return g.clientWidth+c<g.scrollWidth}function E(g,v){var C=i.getComputedStyle(g,null)["overflow"+v];return C==="auto"||C==="scroll"}function y(g){var v=f(g,"Y")&&E(g,"Y"),C=f(g,"X")&&E(g,"X");return v||C}function I(g){for(;g!==a.body&&y(g)===!1;)g=g.parentNode||g.host;return g}function P(g){var v=d(),C,b,w,x=(v-g.startTime)/r;x=x>1?1:x,C=u(x),b=g.startX+(g.x-g.startX)*C,w=g.startY+(g.y-g.startY)*C,g.method.call(g.scrollable,b,w),(b!==g.x||w!==g.y)&&i.requestAnimationFrame(P.bind(i,g))}function R(g,v,C){var b,w,x,A,z=d();g===a.body?(b=i,w=i.scrollX||i.pageXOffset,x=i.scrollY||i.pageYOffset,A=n.scroll):(b=g,w=g.scrollLeft,x=g.scrollTop,A=p),P({scrollable:b,method:A,startTime:z,startX:w,startY:x,x:v,y:C})}i.scroll=i.scrollTo=function(){if(arguments[0]!==void 0){if(m(arguments[0])===!0){n.scroll.call(i,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:i.scrollX||i.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:i.scrollY||i.pageYOffset);return}R.call(i,a.body,arguments[0].left!==void 0?~~arguments[0].left:i.scrollX||i.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:i.scrollY||i.pageYOffset)}},i.scrollBy=function(){if(arguments[0]!==void 0){if(m(arguments[0])){n.scrollBy.call(i,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}R.call(i,a.body,~~arguments[0].left+(i.scrollX||i.pageXOffset),~~arguments[0].top+(i.scrollY||i.pageYOffset))}},s.prototype.scroll=s.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(m(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var g=arguments[0].left,v=arguments[0].top;R.call(this,this,typeof g>"u"?this.scrollLeft:~~g,typeof v>"u"?this.scrollTop:~~v)}},s.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(m(arguments[0])===!0){n.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},s.prototype.scrollIntoView=function(){if(m(arguments[0])===!0){n.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var g=I(this),v=g.getBoundingClientRect(),C=this.getBoundingClientRect();g!==a.body?(R.call(this,g,g.scrollLeft+C.left-v.left,g.scrollTop+C.top-v.top),i.getComputedStyle(g).position!=="fixed"&&i.scrollBy({left:v.left,top:v.top,behavior:"smooth"})):i.scrollBy({left:C.left,top:C.top,behavior:"smooth"})}}o.exports={polyfill:t}})()});so.polyfill;var _o=function(o){Ze(t,o);var e=oo(t);function t(){var i,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return me(this,t),i=e.call(this,a),i.resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",i.checkScroll,!1),window.smoothscrollPolyfill===void 0&&(window.smoothscrollPolyfill=so,window.smoothscrollPolyfill.polyfill()),i}return ge(t,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),j(B(t.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var a=this;j(B(t.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame(function(){a.detectElements()}),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var a=this;this.els={};var s=this.el.querySelectorAll("[data-"+this.name+"]");s.forEach(function(r,n){r.getBoundingClientRect();var d=r.dataset[a.name+"Class"]||a.class,l=typeof r.dataset[a.name+"Id"]=="string"?r.dataset[a.name+"Id"]:n,c,p,u=typeof r.dataset[a.name+"Offset"]=="string"?r.dataset[a.name+"Offset"].split(","):a.offset,m=r.dataset[a.name+"Repeat"],f=r.dataset[a.name+"Call"],E=r.dataset[a.name+"Target"],y;E!==void 0?y=document.querySelector("".concat(E)):y=r;var I=y.getBoundingClientRect();c=I.top+a.instance.scroll.y,p=I.left+a.instance.scroll.x;var P=c+y.offsetHeight,R=p+y.offsetWidth;m=="false"?m=!1:m!=null?m=!0:m=a.repeat;var g=a.getRelativeOffset(u);c=c+g[0],P=P-g[1];var v={el:r,targetEl:y,id:l,class:d,top:c,bottom:P,left:p,right:R,offset:u,progress:0,repeat:m,inView:!1,call:f};a.els[l]=v,r.classList.contains(d)&&a.setInView(a.els[l],l)})}},{key:"updateElements",value:function(){var a=this;Object.entries(this.els).forEach(function(s){var r=X(s,2),n=r[0],d=r[1],l=d.targetEl.getBoundingClientRect().top+a.instance.scroll.y,c=l+d.targetEl.offsetHeight,p=a.getRelativeOffset(d.offset);a.els[n].top=l+p[0],a.els[n].bottom=c-p[1]}),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(a){var s=[0,0];if(a)for(var r=0;r<a.length;r++)typeof a[r]=="string"?a[r].includes("%")?s[r]=parseInt(a[r].replace("%","")*this.windowHeight/100):s[r]=parseInt(a[r]):s[r]=a[r];return s}},{key:"scrollTo",value:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=parseInt(s.offset)||0,n=s.callback?s.callback:!1;if(typeof a=="string"){if(a==="top")a=this.html;else if(a==="bottom")a=this.html.offsetHeight-window.innerHeight;else if(a=document.querySelector(a),!a)return}else if(typeof a=="number")a=parseInt(a);else if(!(a&&a.tagName)){console.warn("`target` parameter is not valid");return}typeof a!="number"?r=a.getBoundingClientRect().top+r+this.instance.scroll.y:r=a+r;var d=function(){return parseInt(window.pageYOffset)===parseInt(r)};if(n)if(d()){n();return}else{var l=function c(){d()&&(window.removeEventListener("scroll",c),n())};window.addEventListener("scroll",l)}window.scrollTo({top:r,behavior:s.duration===0?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){j(B(t.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),t}(io);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var je=Object.getOwnPropertySymbols,Go=Object.prototype.hasOwnProperty,jo=Object.prototype.propertyIsEnumerable;function Vo(o){if(o==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(o)}function $o(){try{if(!Object.assign)return!1;var o=new String("abc");if(o[5]="de",Object.getOwnPropertyNames(o)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var i=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(i.join("")!=="0123456789")return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(s){a[s]=s}),Object.keys(Object.assign({},a)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ho=$o()?Object.assign:function(o,e){for(var t,i=Vo(o),a,s=1;s<arguments.length;s++){t=Object(arguments[s]);for(var r in t)Go.call(t,r)&&(i[r]=t[r]);if(je){a=je(t);for(var n=0;n<a.length;n++)jo.call(t,a[n])&&(i[a[n]]=t[a[n]])}}return i};function ro(){}ro.prototype={on:function(o,e,t){var i=this.e||(this.e={});return(i[o]||(i[o]=[])).push({fn:e,ctx:t}),this},once:function(o,e,t){var i=this;function a(){i.off(o,a),e.apply(t,arguments)}return a._=e,this.on(o,a,t)},emit:function(o){var e=[].slice.call(arguments,1),t=((this.e||(this.e={}))[o]||[]).slice(),i=0,a=t.length;for(i;i<a;i++)t[i].fn.apply(t[i].ctx,e);return this},off:function(o,e){var t=this.e||(this.e={}),i=t[o],a=[];if(i&&e)for(var s=0,r=i.length;s<r;s++)i[s].fn!==e&&i[s].fn._!==e&&a.push(i[s]);return a.length?t[o]=a:delete t[o],this}};var Wo=ro,Yo=to(function(o,e){(function(){var t;t=e!==null?e:this,t.Lethargy=function(){function i(a,s,r,n){this.stability=a!=null?Math.abs(a):8,this.sensitivity=s!=null?1+Math.abs(s):100,this.tolerance=r!=null?1+Math.abs(r):1.1,this.delay=n??150,this.lastUpDeltas=(function(){var d,l,c;for(c=[],d=1,l=this.stability*2;1<=l?d<=l:d>=l;1<=l?d++:d--)c.push(null);return c}).call(this),this.lastDownDeltas=(function(){var d,l,c;for(c=[],d=1,l=this.stability*2;1<=l?d<=l:d>=l;1<=l?d++:d--)c.push(null);return c}).call(this),this.deltasTimestamp=(function(){var d,l,c;for(c=[],d=1,l=this.stability*2;1<=l?d<=l:d>=l;1<=l?d++:d--)c.push(null);return c}).call(this)}return i.prototype.check=function(a){var s;return a=a.originalEvent||a,a.wheelDelta!=null?s=a.wheelDelta:a.deltaY!=null?s=a.deltaY*-40:(a.detail!=null||a.detail===0)&&(s=a.detail*-40),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),s>0?(this.lastUpDeltas.push(s),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(s),this.lastDownDeltas.shift(),this.isInertia(-1))},i.prototype.isInertia=function(a){var s,r,n,d,l,c,p;return s=a===-1?this.lastDownDeltas:this.lastUpDeltas,s[0]===null?a:this.deltasTimestamp[this.stability*2-2]+this.delay>Date.now()&&s[0]===s[this.stability*2-1]?!1:(n=s.slice(0,this.stability),r=s.slice(this.stability,this.stability*2),p=n.reduce(function(u,m){return u+m}),l=r.reduce(function(u,m){return u+m}),c=p/n.length,d=l/r.length,Math.abs(c)<Math.abs(d*this.tolerance)&&this.sensitivity<Math.abs(d)?a:!1)},i.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},i.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},i}()}).call(Bo)}),D=function(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}}(),Jo=Object.prototype.toString,Qo=Object.prototype.hasOwnProperty,Uo=function(o){if(!o)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(e.length===0)for(var t in o)Qo.call(o,t)&&typeof o[t]=="function"&&Jo.call(o[t])=="[object Function]"&&e.push(t);for(var i=0;i<e.length;i++){var a=e[i];o[a]=Xo(o[a],o)}};function Xo(o,e){return function(){return o.apply(e,arguments)}}var Ko=Yo.Lethargy,Q="virtualscroll",Zo=L,oe={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32};function L(o){Uo(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,o&&o.el&&(this.el=o.el,delete o.el),this.options=Ho({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},o),this.options.limitInertia&&(this._lethargy=new Ko),this._emitter=new Wo,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,this.options.passive!==void 0&&(this.listenerOptions={passive:this.options.passive})}L.prototype._notify=function(o){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(Q,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:o})};L.prototype._onWheel=function(o){var e=this.options;if(!(this._lethargy&&this._lethargy.check(o)===!1)){var t=this._event;t.deltaX=o.wheelDeltaX||o.deltaX*-1,t.deltaY=o.wheelDeltaY||o.deltaY*-1,D.isFirefox&&o.deltaMode==1&&(t.deltaX*=e.firefoxMultiplier,t.deltaY*=e.firefoxMultiplier),t.deltaX*=e.mouseMultiplier,t.deltaY*=e.mouseMultiplier,this._notify(o)}};L.prototype._onMouseWheel=function(o){if(!(this.options.limitInertia&&this._lethargy.check(o)===!1)){var e=this._event;e.deltaX=o.wheelDeltaX?o.wheelDeltaX:0,e.deltaY=o.wheelDeltaY?o.wheelDeltaY:o.wheelDelta,this._notify(o)}};L.prototype._onTouchStart=function(o){var e=o.targetTouches?o.targetTouches[0]:o;this.touchStartX=e.pageX,this.touchStartY=e.pageY};L.prototype._onTouchMove=function(o){var e=this.options;e.preventTouch&&!o.target.classList.contains(e.unpreventTouchClass)&&o.preventDefault();var t=this._event,i=o.targetTouches?o.targetTouches[0]:o;t.deltaX=(i.pageX-this.touchStartX)*e.touchMultiplier,t.deltaY=(i.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=i.pageX,this.touchStartY=i.pageY,this._notify(o)};L.prototype._onKeyDown=function(o){var e=this._event;e.deltaX=e.deltaY=0;var t=window.innerHeight-40;switch(o.keyCode){case oe.LEFT:case oe.UP:e.deltaY=this.options.keyStep;break;case oe.RIGHT:case oe.DOWN:e.deltaY=-this.options.keyStep;break;case o.shiftKey:e.deltaY=t;break;case oe.SPACE:e.deltaY=-t;break;default:return}this._notify(o)};L.prototype._bind=function(){D.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),D.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),D.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),D.hasPointer&&D.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),D.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)};L.prototype._unbind=function(){D.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),D.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),D.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),D.hasPointer&&D.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),D.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)};L.prototype.on=function(o,e){this._emitter.on(Q,o,e);var t=this._emitter.e;t&&t[Q]&&t[Q].length===1&&this._bind()};L.prototype.off=function(o,e){this._emitter.off(Q,o,e);var t=this._emitter.e;(!t[Q]||t[Q].length<=0)&&this._unbind()};L.prototype.reset=function(){var o=this._event;o.x=0,o.y=0};L.prototype.destroy=function(){this._emitter.off(),this._unbind()};function be(o,e,t){return(1-t)*o+t*e}function N(o){var e={};if(window.getComputedStyle){var t=getComputedStyle(o),i=t.transform||t.webkitTransform||t.mozTransform,a=i.match(/^matrix3d\((.+)\)$/);return a?(e.x=a?parseFloat(a[1].split(", ")[12]):0,e.y=a?parseFloat(a[1].split(", ")[13]):0):(a=i.match(/^matrix\((.+)\)$/),e.x=a?parseFloat(a[1].split(", ")[4]):0,e.y=a?parseFloat(a[1].split(", ")[5]):0),e}}function xe(o){for(var e=[];o&&o!==document;o=o.parentNode)e.push(o);return e}var ea=4,oa=.001,aa=1e-7,ia=10,ae=11,ne=1/(ae-1),ta=typeof Float32Array=="function";function no(o,e){return 1-3*e+3*o}function lo(o,e){return 3*e-6*o}function co(o){return 3*o}function le(o,e,t){return((no(e,t)*o+lo(e,t))*o+co(e))*o}function po(o,e,t){return 3*no(e,t)*o*o+2*lo(e,t)*o+co(e)}function sa(o,e,t,i,a){var s,r,n=0;do r=e+(t-e)/2,s=le(r,i,a)-o,s>0?t=r:e=r;while(Math.abs(s)>aa&&++n<ia);return r}function ra(o,e,t,i){for(var a=0;a<ea;++a){var s=po(e,t,i);if(s===0)return e;var r=le(e,t,i)-o;e-=r/s}return e}function na(o){return o}var da=function(e,t,i,a){if(!(0<=e&&e<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&i===a)return na;for(var s=ta?new Float32Array(ae):new Array(ae),r=0;r<ae;++r)s[r]=le(r*ne,e,i);function n(d){for(var l=0,c=1,p=ae-1;c!==p&&s[c]<=d;++c)l+=ne;--c;var u=(d-s[c])/(s[c+1]-s[c]),m=l+u*ne,f=po(m,e,i);return f>=oa?ra(d,m,e,i):f===0?m:sa(d,l,l+ne,e,i)}return function(l){return l===0?0:l===1?1:le(n(l),t,a)}},G={UP:38,DOWN:40,SPACE:32,TAB:9,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35},la=function(o){Ze(t,o);var e=oo(t);function t(){var i,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return me(this,t),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),i=e.call(this,a),i.inertia&&(i.lerp=i.inertia*.1),i.isScrolling=!1,i.isDraggingScrollbar=!1,i.isTicking=!1,i.hasScrollTicking=!1,i.parallaxElements={},i.stop=!1,i.scrollbarContainer=a.scrollbarContainer,i.checkKey=i.checkKey.bind(eo(i)),window.addEventListener("keydown",i.checkKey,!1),i}return ge(t,[{key:"init",value:function(){var a=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=fe({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new Zo({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on(function(s){a.stop||a.isDraggingScrollbar||requestAnimationFrame(function(){a.updateDelta(s),a.isScrolling||a.startScrolling()})}),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),j(B(t.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,this.direction==="horizontal"){for(var a=0,s=this.el.children,r=0;r<s.length;r++)a+=s[r].offsetWidth;this.instance.limit.x=a-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(a){var s=this;if(this.stop){a.keyCode==G.TAB&&requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0});return}switch(a.keyCode){case G.TAB:requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0,s.scrollTo(document.activeElement,{offset:-window.innerHeight/2})});break;case G.UP:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]-=240);break;case G.DOWN:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]+=240);break;case G.PAGEUP:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case G.PAGEDOWN:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case G.HOME:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case G.END:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case G.SPACE:this.isActiveElementScrollSensitive()&&(a.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"isActiveElementScrollSensitive",value:function(){return!(document.activeElement instanceof HTMLInputElement)&&!(document.activeElement instanceof HTMLTextAreaElement)&&!(document.activeElement instanceof HTMLButtonElement)&&!(document.activeElement instanceof HTMLSelectElement)}},{key:"checkScroll",value:function(){var a=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(s||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame(function(){return a.checkScroll()}),this.hasScrollTicking=!0),this.updateScroll();var r=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),n=Date.now()-this.startScrollTs;if(!this.animatingScroll&&n>100&&(r<.5&&this.instance.delta[this.directionAxis]!=0||r<.5&&this.instance.delta[this.directionAxis]==0)&&this.stopScrolling(),Object.entries(this.sections).forEach(function(l){var c=X(l,2);c[0];var p=c[1];p.persistent||a.instance.scroll[a.directionAxis]>p.offset[a.directionAxis]&&a.instance.scroll[a.directionAxis]<p.limit[a.directionAxis]?(a.direction==="horizontal"?a.transform(p.el,-a.instance.scroll[a.directionAxis],0):a.transform(p.el,0,-a.instance.scroll[a.directionAxis]),p.inView||(p.inView=!0,p.el.style.opacity=1,p.el.style.pointerEvents="all",p.el.setAttribute("data-".concat(a.name,"-section-inview"),""))):((p.inView||s)&&(p.inView=!1,p.el.style.opacity=0,p.el.style.pointerEvents="none",p.el.removeAttribute("data-".concat(a.name,"-section-inview"))),a.transform(p.el,0,0))}),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var d=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];this.direction==="horizontal"?this.transform(this.scrollbarThumb,d,0):this.transform(this.scrollbarThumb,0,d)}j(B(t.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(a){var s,r=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;r==="both"?s=a.deltaX+a.deltaY:r==="vertical"?s=a.deltaY:r==="horizontal"?s=a.deltaX:s=a.deltaY,this.instance.delta[this.directionAxis]-=s*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(a){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=be(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?this.instance.direction!=="right"&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&this.instance.direction!=="left"&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(a){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(a){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(a){var s=this;this.isDraggingScrollbar&&requestAnimationFrame(function(){var r=(a.clientX-s.scrollbarBCR.left)*100/s.scrollbarWidth*s.instance.limit.x/100,n=(a.clientY-s.scrollbarBCR.top)*100/s.scrollbarHeight*s.instance.limit.y/100;n>0&&n<s.instance.limit.y&&(s.instance.delta.y=n),r>0&&r<s.instance.limit.x&&(s.instance.delta.x=r)})}},{key:"addElements",value:function(){var a=this;this.els={},this.parallaxElements={};var s=this.el.querySelectorAll("[data-".concat(this.name,"]"));s.forEach(function(r,n){var d=xe(r),l=Object.entries(a.sections).map(function(ve){var _e=X(ve,2);_e[0];var Po=_e[1];return Po}).find(function(ve){return d.includes(ve.el)}),c=r.dataset[a.name+"Class"]||a.class,p=typeof r.dataset[a.name+"Id"]=="string"?r.dataset[a.name+"Id"]:"el"+n,u,m,f=r.dataset[a.name+"Repeat"],E=r.dataset[a.name+"Call"],y=r.dataset[a.name+"Position"],I=r.dataset[a.name+"Delay"],P=r.dataset[a.name+"Direction"],R=typeof r.dataset[a.name+"Sticky"]=="string",g=r.dataset[a.name+"Speed"]?parseFloat(r.dataset[a.name+"Speed"])/10:!1,v=typeof r.dataset[a.name+"Offset"]=="string"?r.dataset[a.name+"Offset"].split(","):a.offset,C=r.dataset[a.name+"Target"],b;C!==void 0?b=document.querySelector("".concat(C)):b=r;var w=b.getBoundingClientRect();l===null||l.inView?(u=w.top+a.instance.scroll.y-N(b).y,m=w.left+a.instance.scroll.x-N(b).x):(u=w.top-N(l.el).y-N(b).y,m=w.left-N(l.el).x-N(b).x);var x=u+b.offsetHeight,A=m+b.offsetWidth,z={x:(A-m)/2+m,y:(x-u)/2+u};if(R){var q=r.getBoundingClientRect(),he=q.top,k=q.left,W={x:k-m,y:he-u};u+=window.innerHeight,m+=window.innerWidth,x=he+b.offsetHeight-r.offsetHeight-W[a.directionAxis],A=k+b.offsetWidth-r.offsetWidth-W[a.directionAxis],z={x:(A-m)/2+m,y:(x-u)/2+u}}f=="false"?f=!1:f!=null?f=!0:f=a.repeat;var O=[0,0];if(v)if(a.direction==="horizontal"){for(var T=0;T<v.length;T++)typeof v[T]=="string"?v[T].includes("%")?O[T]=parseInt(v[T].replace("%","")*a.windowWidth/100):O[T]=parseInt(v[T]):O[T]=v[T];m=m+O[0],A=A-O[1]}else{for(var T=0;T<v.length;T++)typeof v[T]=="string"?v[T].includes("%")?O[T]=parseInt(v[T].replace("%","")*a.windowHeight/100):O[T]=parseInt(v[T]):O[T]=v[T];u=u+O[0],x=x-O[1]}var Be={el:r,id:p,class:c,section:l,top:u,middle:z,bottom:x,left:m,right:A,offset:v,progress:0,repeat:f,inView:!1,call:E,speed:g,delay:I,position:y,target:b,direction:P,sticky:R};a.els[p]=Be,r.classList.contains(c)&&a.setInView(a.els[p],p),(g!==!1||R)&&(a.parallaxElements[p]=Be)})}},{key:"addSections",value:function(){var a=this;this.sections={};var s=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));s.length===0&&(s=[this.el]),s.forEach(function(r,n){var d=typeof r.dataset[a.name+"Id"]=="string"?r.dataset[a.name+"Id"]:"section"+n,l=r.getBoundingClientRect(),c={x:l.left-window.innerWidth*1.5-N(r).x,y:l.top-window.innerHeight*1.5-N(r).y},p={x:c.x+l.width+window.innerWidth*2,y:c.y+l.height+window.innerHeight*2},u=typeof r.dataset[a.name+"Persistent"]=="string";r.setAttribute("data-scroll-section-id",d);var m={el:r,offset:c,limit:p,inView:!1,persistent:u,id:d};a.sections[d]=m})}},{key:"transform",value:function(a,s,r,n){var d;if(!n)d="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s,",").concat(r,",0,1)");else{var l=N(a),c=be(l.x,s,n),p=be(l.y,r,n);d="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(c,",").concat(p,",0,1)")}a.style.webkitTransform=d,a.style.msTransform=d,a.style.transform=d}},{key:"transformElements",value:function(a){var s=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=this.instance.scroll.x+this.windowWidth,d=this.instance.scroll.y+this.windowHeight,l={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach(function(c){var p=X(c,2);p[0];var u=p[1],m=!1;if(a&&(m=0),u.inView||r)switch(u.position){case"top":m=s.instance.scroll[s.directionAxis]*-u.speed;break;case"elementTop":m=(d-u.top)*-u.speed;break;case"bottom":m=(s.instance.limit[s.directionAxis]-d+s.windowHeight)*u.speed;break;case"left":m=s.instance.scroll[s.directionAxis]*-u.speed;break;case"elementLeft":m=(n-u.left)*-u.speed;break;case"right":m=(s.instance.limit[s.directionAxis]-n+s.windowHeight)*u.speed;break;default:m=(l[s.directionAxis]-u.middle[s.directionAxis])*-u.speed;break}u.sticky&&(u.inView?s.direction==="horizontal"?m=s.instance.scroll.x-u.left+window.innerWidth:m=s.instance.scroll.y-u.top+window.innerHeight:s.direction==="horizontal"?s.instance.scroll.x<u.left-window.innerWidth&&s.instance.scroll.x<u.left-window.innerWidth/2?m=0:s.instance.scroll.x>u.right&&s.instance.scroll.x>u.right+100?m=u.right-u.left+window.innerWidth:m=!1:s.instance.scroll.y<u.top-window.innerHeight&&s.instance.scroll.y<u.top-window.innerHeight/2?m=0:s.instance.scroll.y>u.bottom&&s.instance.scroll.y>u.bottom+100?m=u.bottom-u.top+window.innerHeight:m=!1),m!==!1&&(u.direction==="horizontal"||s.direction==="horizontal"&&u.direction!=="vertical"?s.transform(u.el,m,0,a?!1:u.delay):s.transform(u.el,0,m,a?!1:u.delay))})}},{key:"scrollTo",value:function(a){var s=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=parseInt(r.offset)||0,d=isNaN(parseInt(r.duration))?1e3:parseInt(r.duration),l=r.easing||[.25,0,.35,1],c=!!r.disableLerp,p=r.callback?r.callback:!1;if(l=da.apply(void 0,Do(l)),typeof a=="string"){if(a==="top")a=0;else if(a==="bottom")a=this.instance.limit.y;else if(a==="left")a=0;else if(a==="right")a=this.instance.limit.x;else if(a=document.querySelector(a),!a)return}else if(typeof a=="number")a=parseInt(a);else if(!(a&&a.tagName)){console.warn("`target` parameter is not valid");return}if(typeof a!="number"){var u=xe(a).includes(this.el);if(!u)return;var m=a.getBoundingClientRect(),f=m.top,E=m.left,y=xe(a),I=y.find(function(x){return Object.entries(s.sections).map(function(A){var z=X(A,2);z[0];var q=z[1];return q}).find(function(A){return A.el==x})}),P=0;I?P=N(I)[this.directionAxis]:P=-this.instance.scroll[this.directionAxis],this.direction==="horizontal"?n=E+n-P:n=f+n-P}else n=a+n;var R=parseFloat(this.instance.delta[this.directionAxis]),g=Math.max(0,Math.min(n,this.instance.limit[this.directionAxis])),v=g-R,C=function(A){c?s.direction==="horizontal"?s.setScroll(R+v*A,s.instance.delta.y):s.setScroll(s.instance.delta.x,R+v*A):s.instance.delta[s.directionAxis]=R+v*A};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var b=Date.now(),w=function x(){var A=(Date.now()-b)/d;A>1?(C(1),s.animatingScroll=!1,d==0&&s.update(),p&&p()):(s.scrollToRaf=requestAnimationFrame(x),C(l(A)))};w()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(a,s){this.instance=fe(fe({},this.instance),{},{scroll:{x:a,y:s},delta:{x:a,y:s},speed:0})}},{key:"destroy",value:function(){j(B(t.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),t}(io),ca=function(){function o(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};me(this,o),this.options=e,Object.assign(this,K,e),this.smartphone=K.smartphone,e.smartphone&&Object.assign(this.smartphone,e.smartphone),this.tablet=K.tablet,e.tablet&&Object.assign(this.tablet,e.tablet),!this.smooth&&this.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),!this.tablet.smooth&&this.tablet.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),!this.smartphone.smooth&&this.smartphone.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return ge(o,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new la(this.options):this.scroll=new _o(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),i=document.getElementById(t);i&&this.scroll.scrollTo(i)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,i){this.scroll.scrollTo(t,i)}},{key:"setScroll",value:function(t,i){this.scroll.setScroll(t,i)}},{key:"on",value:function(t,i){this.scroll.setEvents(t,i)}},{key:"off",value:function(t,i){this.scroll.unsetEvents(t,i)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),o}();function $(o){return Array.isArray?Array.isArray(o):go(o)==="[object Array]"}function pa(o){if(typeof o=="string")return o;let e=o+"";return e=="0"&&1/o==-1/0?"-0":e}function ua(o){return o==null?"":pa(o)}function _(o){return typeof o=="string"}function uo(o){return typeof o=="number"}function ma(o){return o===!0||o===!1||ga(o)&&go(o)=="[object Boolean]"}function mo(o){return typeof o=="object"}function ga(o){return mo(o)&&o!==null}function M(o){return o!=null}function Se(o){return!o.trim().length}function go(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(o)}const ha="Incorrect 'index' type",va=o=>`Invalid value for key ${o}`,fa=o=>`Pattern length exceeds max of ${o}.`,ba=o=>`Missing ${o} property in key`,xa=o=>`Property 'weight' in key '${o}' must be a positive integer`,Ve=Object.prototype.hasOwnProperty;class Sa{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(i=>{let a=ho(i);this._keys.push(a),this._keyMap[a.id]=a,t+=a.weight}),this._keys.forEach(i=>{i.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ho(o){let e=null,t=null,i=null,a=1,s=null;if(_(o)||$(o))i=o,e=$e(o),t=Ae(o);else{if(!Ve.call(o,"name"))throw new Error(ba("name"));const r=o.name;if(i=r,Ve.call(o,"weight")&&(a=o.weight,a<=0))throw new Error(xa(r));e=$e(r),t=Ae(r),s=o.getFn}return{path:e,id:t,weight:a,src:i,getFn:s}}function $e(o){return $(o)?o:o.split(".")}function Ae(o){return $(o)?o.join("."):o}function Ca(o,e){let t=[],i=!1;const a=(s,r,n)=>{if(M(s))if(!r[n])t.push(s);else{let d=r[n];const l=s[d];if(!M(l))return;if(n===r.length-1&&(_(l)||uo(l)||ma(l)))t.push(ua(l));else if($(l)){i=!0;for(let c=0,p=l.length;c<p;c+=1)a(l[c],r,n+1)}else r.length&&a(l,r,n+1)}};return a(o,_(e)?e.split("."):e,0),i?t:t[0]}const wa={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ya={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(o,e)=>o.score===e.score?o.idx<e.idx?-1:1:o.score<e.score?-1:1},Aa={location:0,threshold:.6,distance:100},Ea={useExtendedSearch:!1,getFn:Ca,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var h={...ya,...wa,...Aa,...Ea};const Pa=/[^ ]+/g;function Ra(o=1,e=3){const t=new Map,i=Math.pow(10,e);return{get(a){const s=a.match(Pa).length;if(t.has(s))return t.get(s);const r=1/Math.pow(s,.5*o),n=parseFloat(Math.round(r*i)/i);return t.set(s,n),n},clear(){t.clear()}}}class Fe{constructor({getFn:e=h.getFn,fieldNormWeight:t=h.fieldNormWeight}={}){this.norm=Ra(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,i)=>{this._keysMap[t.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();_(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,i=this.size();t<i;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!M(e)||Se(e))return;let i={v:e,i:t,n:this.norm.get(e)};this.records.push(i)}_addObject(e,t){let i={i:t,$:{}};this.keys.forEach((a,s)=>{let r=a.getFn?a.getFn(e):this.getFn(e,a.path);if(M(r)){if($(r)){let n=[];const d=[{nestedArrIndex:-1,value:r}];for(;d.length;){const{nestedArrIndex:l,value:c}=d.pop();if(M(c))if(_(c)&&!Se(c)){let p={v:c,i:l,n:this.norm.get(c)};n.push(p)}else $(c)&&c.forEach((p,u)=>{d.push({nestedArrIndex:u,value:p})})}i.$[s]=n}else if(_(r)&&!Se(r)){let n={v:r,n:this.norm.get(r)};i.$[s]=n}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function vo(o,e,{getFn:t=h.getFn,fieldNormWeight:i=h.fieldNormWeight}={}){const a=new Fe({getFn:t,fieldNormWeight:i});return a.setKeys(o.map(ho)),a.setSources(e),a.create(),a}function Ta(o,{getFn:e=h.getFn,fieldNormWeight:t=h.fieldNormWeight}={}){const{keys:i,records:a}=o,s=new Fe({getFn:e,fieldNormWeight:t});return s.setKeys(i),s.setIndexRecords(a),s}function de(o,{errors:e=0,currentLocation:t=0,expectedLocation:i=0,distance:a=h.distance,ignoreLocation:s=h.ignoreLocation}={}){const r=e/o.length;if(s)return r;const n=Math.abs(i-t);return a?r+n/a:n?1:r}function Ia(o=[],e=h.minMatchCharLength){let t=[],i=-1,a=-1,s=0;for(let r=o.length;s<r;s+=1){let n=o[s];n&&i===-1?i=s:!n&&i!==-1&&(a=s-1,a-i+1>=e&&t.push([i,a]),i=-1)}return o[s-1]&&s-i>=e&&t.push([i,s-1]),t}const J=32;function ka(o,e,t,{location:i=h.location,distance:a=h.distance,threshold:s=h.threshold,findAllMatches:r=h.findAllMatches,minMatchCharLength:n=h.minMatchCharLength,includeMatches:d=h.includeMatches,ignoreLocation:l=h.ignoreLocation}={}){if(e.length>J)throw new Error(fa(J));const c=e.length,p=o.length,u=Math.max(0,Math.min(i,p));let m=s,f=u;const E=n>1||d,y=E?Array(p):[];let I;for(;(I=o.indexOf(e,f))>-1;){let b=de(e,{currentLocation:I,expectedLocation:u,distance:a,ignoreLocation:l});if(m=Math.min(b,m),f=I+c,E){let w=0;for(;w<c;)y[I+w]=1,w+=1}}f=-1;let P=[],R=1,g=c+p;const v=1<<c-1;for(let b=0;b<c;b+=1){let w=0,x=g;for(;w<x;)de(e,{errors:b,currentLocation:u+x,expectedLocation:u,distance:a,ignoreLocation:l})<=m?w=x:g=x,x=Math.floor((g-w)/2+w);g=x;let A=Math.max(1,u-x+1),z=r?p:Math.min(u+x,p)+c,q=Array(z+2);q[z+1]=(1<<b)-1;for(let k=z;k>=A;k-=1){let W=k-1,O=t[o.charAt(W)];if(E&&(y[W]=+!!O),q[k]=(q[k+1]<<1|1)&O,b&&(q[k]|=(P[k+1]|P[k])<<1|1|P[k+1]),q[k]&v&&(R=de(e,{errors:b,currentLocation:W,expectedLocation:u,distance:a,ignoreLocation:l}),R<=m)){if(m=R,f=W,f<=u)break;A=Math.max(1,2*u-f)}}if(de(e,{errors:b+1,currentLocation:u,expectedLocation:u,distance:a,ignoreLocation:l})>m)break;P=q}const C={isMatch:f>=0,score:Math.max(.001,R)};if(E){const b=Ia(y,n);b.length?d&&(C.indices=b):C.isMatch=!1}return C}function Oa(o){let e={};for(let t=0,i=o.length;t<i;t+=1){const a=o.charAt(t);e[a]=(e[a]||0)|1<<i-t-1}return e}const ce=String.prototype.normalize?o=>o.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):o=>o;class fo{constructor(e,{location:t=h.location,threshold:i=h.threshold,distance:a=h.distance,includeMatches:s=h.includeMatches,findAllMatches:r=h.findAllMatches,minMatchCharLength:n=h.minMatchCharLength,isCaseSensitive:d=h.isCaseSensitive,ignoreDiacritics:l=h.ignoreDiacritics,ignoreLocation:c=h.ignoreLocation}={}){if(this.options={location:t,threshold:i,distance:a,includeMatches:s,findAllMatches:r,minMatchCharLength:n,isCaseSensitive:d,ignoreDiacritics:l,ignoreLocation:c},e=d?e:e.toLowerCase(),e=l?ce(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const p=(m,f)=>{this.chunks.push({pattern:m,alphabet:Oa(m),startIndex:f})},u=this.pattern.length;if(u>J){let m=0;const f=u%J,E=u-f;for(;m<E;)p(this.pattern.substr(m,J),m),m+=J;if(f){const y=u-J;p(this.pattern.substr(y),y)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:i,includeMatches:a}=this.options;if(e=t?e:e.toLowerCase(),e=i?ce(e):e,this.pattern===e){let E={isMatch:!0,score:0};return a&&(E.indices=[[0,e.length-1]]),E}const{location:s,distance:r,threshold:n,findAllMatches:d,minMatchCharLength:l,ignoreLocation:c}=this.options;let p=[],u=0,m=!1;this.chunks.forEach(({pattern:E,alphabet:y,startIndex:I})=>{const{isMatch:P,score:R,indices:g}=ka(e,E,y,{location:s+I,distance:r,threshold:n,findAllMatches:d,minMatchCharLength:l,includeMatches:a,ignoreLocation:c});P&&(m=!0),u+=R,P&&g&&(p=[...p,...g])});let f={isMatch:m,score:m?u/this.chunks.length:1};return m&&a&&(f.indices=p),f}}class H{constructor(e){this.pattern=e}static isMultiMatch(e){return He(e,this.multiRegex)}static isSingleMatch(e){return He(e,this.singleRegex)}search(){}}function He(o,e){const t=o.match(e);return t?t[1]:null}class Da extends H{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Ma extends H{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class Fa extends H{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class La extends H{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Na extends H{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class za extends H{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class bo extends H{constructor(e,{location:t=h.location,threshold:i=h.threshold,distance:a=h.distance,includeMatches:s=h.includeMatches,findAllMatches:r=h.findAllMatches,minMatchCharLength:n=h.minMatchCharLength,isCaseSensitive:d=h.isCaseSensitive,ignoreDiacritics:l=h.ignoreDiacritics,ignoreLocation:c=h.ignoreLocation}={}){super(e),this._bitapSearch=new fo(e,{location:t,threshold:i,distance:a,includeMatches:s,findAllMatches:r,minMatchCharLength:n,isCaseSensitive:d,ignoreDiacritics:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class xo extends H{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,i;const a=[],s=this.pattern.length;for(;(i=e.indexOf(this.pattern,t))>-1;)t=i+s,a.push([i,t-1]);const r=!!a.length;return{isMatch:r,score:r?0:1,indices:a}}}const Ee=[Da,xo,Fa,La,za,Na,Ma,bo],We=Ee.length,qa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ba="|";function _a(o,e={}){return o.split(Ba).map(t=>{let i=t.trim().split(qa).filter(s=>s&&!!s.trim()),a=[];for(let s=0,r=i.length;s<r;s+=1){const n=i[s];let d=!1,l=-1;for(;!d&&++l<We;){const c=Ee[l];let p=c.isMultiMatch(n);p&&(a.push(new c(p,e)),d=!0)}if(!d)for(l=-1;++l<We;){const c=Ee[l];let p=c.isSingleMatch(n);if(p){a.push(new c(p,e));break}}}return a})}const Ga=new Set([bo.type,xo.type]);class ja{constructor(e,{isCaseSensitive:t=h.isCaseSensitive,ignoreDiacritics:i=h.ignoreDiacritics,includeMatches:a=h.includeMatches,minMatchCharLength:s=h.minMatchCharLength,ignoreLocation:r=h.ignoreLocation,findAllMatches:n=h.findAllMatches,location:d=h.location,threshold:l=h.threshold,distance:c=h.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:i,includeMatches:a,minMatchCharLength:s,findAllMatches:n,ignoreLocation:r,location:d,threshold:l,distance:c},e=t?e:e.toLowerCase(),e=i?ce(e):e,this.pattern=e,this.query=_a(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:a,ignoreDiacritics:s}=this.options;e=a?e:e.toLowerCase(),e=s?ce(e):e;let r=0,n=[],d=0;for(let l=0,c=t.length;l<c;l+=1){const p=t[l];n.length=0,r=0;for(let u=0,m=p.length;u<m;u+=1){const f=p[u],{isMatch:E,indices:y,score:I}=f.search(e);if(E){if(r+=1,d+=I,i){const P=f.constructor.type;Ga.has(P)?n=[...n,...y]:n.push(y)}}else{d=0,r=0,n.length=0;break}}if(r){let u={isMatch:!0,score:d/r};return i&&(u.indices=n),u}}return{isMatch:!1,score:1}}}const Pe=[];function Va(...o){Pe.push(...o)}function Re(o,e){for(let t=0,i=Pe.length;t<i;t+=1){let a=Pe[t];if(a.condition(o,e))return new a(o,e)}return new fo(o,e)}const pe={AND:"$and",OR:"$or"},Te={PATH:"$path",PATTERN:"$val"},Ie=o=>!!(o[pe.AND]||o[pe.OR]),$a=o=>!!o[Te.PATH],Ha=o=>!$(o)&&mo(o)&&!Ie(o),Ye=o=>({[pe.AND]:Object.keys(o).map(e=>({[e]:o[e]}))});function So(o,e,{auto:t=!0}={}){const i=a=>{let s=Object.keys(a);const r=$a(a);if(!r&&s.length>1&&!Ie(a))return i(Ye(a));if(Ha(a)){const d=r?a[Te.PATH]:s[0],l=r?a[Te.PATTERN]:a[d];if(!_(l))throw new Error(va(d));const c={keyId:Ae(d),pattern:l};return t&&(c.searcher=Re(l,e)),c}let n={children:[],operator:s[0]};return s.forEach(d=>{const l=a[d];$(l)&&l.forEach(c=>{n.children.push(i(c))})}),n};return Ie(o)||(o=Ye(o)),i(o)}function Wa(o,{ignoreFieldNorm:e=h.ignoreFieldNorm}){o.forEach(t=>{let i=1;t.matches.forEach(({key:a,norm:s,score:r})=>{const n=a?a.weight:null;i*=Math.pow(r===0&&n?Number.EPSILON:r,(n||1)*(e?1:s))}),t.score=i})}function Ya(o,e){const t=o.matches;e.matches=[],M(t)&&t.forEach(i=>{if(!M(i.indices)||!i.indices.length)return;const{indices:a,value:s}=i;let r={indices:a,value:s};i.key&&(r.key=i.key.src),i.idx>-1&&(r.refIndex=i.idx),e.matches.push(r)})}function Ja(o,e){e.score=o.score}function Qa(o,e,{includeMatches:t=h.includeMatches,includeScore:i=h.includeScore}={}){const a=[];return t&&a.push(Ya),i&&a.push(Ja),o.map(s=>{const{idx:r}=s,n={item:e[r],refIndex:r};return a.length&&a.forEach(d=>{d(s,n)}),n})}class U{constructor(e,t={},i){this.options={...h,...t},this.options.useExtendedSearch,this._keyStore=new Sa(this.options.keys),this.setCollection(e,i)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Fe))throw new Error(ha);this._myIndex=t||vo(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){M(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let i=0,a=this._docs.length;i<a;i+=1){const s=this._docs[i];e(s,i)&&(this.removeAt(i),i-=1,a-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:i,includeScore:a,shouldSort:s,sortFn:r,ignoreFieldNorm:n}=this.options;let d=_(e)?_(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Wa(d,{ignoreFieldNorm:n}),s&&d.sort(r),uo(t)&&t>-1&&(d=d.slice(0,t)),Qa(d,this._docs,{includeMatches:i,includeScore:a})}_searchStringList(e){const t=Re(e,this.options),{records:i}=this._myIndex,a=[];return i.forEach(({v:s,i:r,n})=>{if(!M(s))return;const{isMatch:d,score:l,indices:c}=t.searchIn(s);d&&a.push({item:s,idx:r,matches:[{score:l,value:s,norm:n,indices:c}]})}),a}_searchLogical(e){const t=So(e,this.options),i=(n,d,l)=>{if(!n.children){const{keyId:p,searcher:u}=n,m=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(d,p),searcher:u});return m&&m.length?[{idx:l,item:d,matches:m}]:[]}const c=[];for(let p=0,u=n.children.length;p<u;p+=1){const m=n.children[p],f=i(m,d,l);if(f.length)c.push(...f);else if(n.operator===pe.AND)return[]}return c},a=this._myIndex.records,s={},r=[];return a.forEach(({$:n,i:d})=>{if(M(n)){let l=i(t,n,d);l.length&&(s[d]||(s[d]={idx:d,item:n,matches:[]},r.push(s[d])),l.forEach(({matches:c})=>{s[d].matches.push(...c)}))}}),r}_searchObjectList(e){const t=Re(e,this.options),{keys:i,records:a}=this._myIndex,s=[];return a.forEach(({$:r,i:n})=>{if(!M(r))return;let d=[];i.forEach((l,c)=>{d.push(...this._findMatches({key:l,value:r[c],searcher:t}))}),d.length&&s.push({idx:n,item:r,matches:d})}),s}_findMatches({key:e,value:t,searcher:i}){if(!M(t))return[];let a=[];if($(t))t.forEach(({v:s,i:r,n})=>{if(!M(s))return;const{isMatch:d,score:l,indices:c}=i.searchIn(s);d&&a.push({score:l,key:e,value:s,idx:r,norm:n,indices:c})});else{const{v:s,n:r}=t,{isMatch:n,score:d,indices:l}=i.searchIn(s);n&&a.push({score:d,key:e,value:s,norm:r,indices:l})}return a}}U.version="7.1.0";U.createIndex=vo;U.parseIndex=Ta;U.config=h;U.parseQuery=So;Va(ja);const Ua={id:"coletivo",title:"Coletivo",description:"Módulo destinado ao tratamento de questões internas relacionadas ao suporte.",icon:`<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
  </g>
</svg>`,topics:[{id:"analise-erros-saas",title:"Análise de Erros em Sistemas SaaS",description:"Metodologia para identificação, classificação e reporte de falhas em sistemas baseados em nuvem.",group:"Suporte Técnico",tags:["Análise","Debug"],content:`
<div class="welcome-banner">
  <h1>Análise Técnica de Erros</h1>
  <p>A capacidade de distinguir entre falhas de sistema, erros de operação e intermitências de conexão é fundamental para um suporte eficiente.</p>
</div>

<section class="analysis-framework">
  <h2>Framework de Análise</h2>
  
  <div class="step-card">
    <h3>1. Reprodução</h3>
    <p>O erro é reprodutível? Tente realizar a mesma ação em:</p>
    <ul>
      <li>Outro navegador (Chrome vs Firefox)</li>
      <li>Aba anônima (sem cache/extensões)</li>
      <li>Outro usuário ou perfil de acesso</li>
    </ul>
  </div>

  <div class="step-card">
    <h3>2. Isolamento</h3>
    <p>O problema ocorre apenas em um registro específico ou em todos? Apenas em uma máquina ou na rede inteira?</p>
  </div>

  <div class="step-card">
    <h3>3. Evidência</h3>
    <p>Sempre colete:</p>
    <ul>
      <li>Captura de tela inteira (incluindo URL e data/hora)</li>
      <li>Passo a passo exato para chegar ao erro</li>
      <li>Logs do Console do Desenvolvedor (F12) se possível</li>
    </ul>
  </div>
</section>
      `},{id:"metodologia-testes",title:"Metodologia de Testes de Problemas",description:"Como estruturar testes lógicos para validar correções ou identificar a raiz de um problema reportado.",group:"Suporte Técnico",tags:["Testes","QA"],content:`
<div class="welcome-banner">
  <h1>Estratégia de Testes</h1>
  <p>Testar não é apenas clicar aleatoriamente. É um processo lógico de eliminação de variáveis.</p>
</div>

<section class="testing-methods">
  <h2>Abordagens de Teste</h2>
  
  <div class="method-card">
    <h3>Teste A/B</h3>
    <p>Compare um cenário que funciona com um que não funciona. O que há de diferente entre eles? (Permissões, dados, configurações).</p>
  </div>

  <div class="method-card">
    <h3>Teste de Regressão</h3>
    <p>Após uma atualização ou correção, verifique se as funcionalidades antigas continuam operando normalmente.</p>
  </div>

  <div class="method-card">
    <h3>Teste de Carga (Simplificado)</h3>
    <p>O sistema responde lentamente apenas quando processa grandes volumes de dados? Tente com um arquivo menor.</p>
  </div>
</section>
      `},{id:"tecnicas-sondagem",title:"Técnicas de Sondagem e Diagnóstico",description:"Perguntas-chave para extrair as informações necessárias do usuário final e agilizar o atendimento.",group:"Atendimento",tags:["Soft Skills","Diagnóstico"],content:`
<div class="welcome-banner">
  <h1>A Arte da Sondagem</h1>
  <p>Muitas vezes, o que o usuário diz ser o problema é apenas um sintoma. A sondagem busca a causa raiz.</p>
</div>

<section class="questions-guide">
  <h2>As Perguntas de Ouro</h2>
  
  <div class="question-card">
    <h3>"Desde quando isso acontece?"</h3>
    <p>Ajuda a correlacionar o erro com atualizações recentes ou mudanças de configuração.</p>
  </div>

  <div class="question-card">
    <h3>"Funcionava antes?"</h3>
    <p>Identifica se é um erro novo ou se a funcionalidade nunca foi utilizada antes por aquele usuário.</p>
  </div>

  <div class="question-card">
    <h3>"O que você esperava que acontecesse?"</h3>
    <p>Alinha a expectativa. Às vezes não é um erro, mas um entendimento equivocado de como a ferramenta funciona.</p>
  </div>
</section>

<style>
  .welcome-banner { background: #e0f2f1; padding: 20px; border-radius: 6px; text-align: center; color: #00695c; }
  .step-card { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #009688; margin: 10px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .method-card { background: #f5f5f5; padding: 15px; border-radius: 6px; margin: 10px 0; }
  .question-card { background: #e0f7fa; padding: 15px; border-radius: 6px; border-left: 4px solid #00bcd4; margin: 10px 0; }
</style>
      `}]},Xa={id:"duvidas",title:"Informações",description:"Este módulo tem como objetivo a retirada de duvidas.",icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <g fill="currentColor">
        <path d="M18.748 12.816c-1.74.067-3.313.688-4.154 1.53a1 1 0 1 1-1.414-1.415c1.297-1.297 3.409-2.033 5.49-2.114c2.095-.081 4.382.492 5.984 2.094a1 1 0 0 1-1.415 1.414c-1.09-1.091-2.764-1.577-4.491-1.51Z"/>
        <path fill-rule="evenodd" d="M27.384 28.936A12.948 12.948 0 0 1 19 32c-7.18 0-13-5.82-13-13S11.82 6 19 6s13 5.82 13 13c0 3.195-1.152 6.12-3.064 8.384L31.144 27l10.284 10.284c.763.763.763 2 0 2.762l-1.382 1.382c-.763.763-2 .763-2.762 0L27 31.144l.384-2.208ZM30 19c0 6.075-4.925 11-11 11S8 25.075 8 19S12.925 8 19 8s11 4.925 11 11Zm7.249 16.933l-6.785-6.785l-1.12.195l-.196 1.121l6.805 6.805l1.296-1.336Zm.118 2.75l1.298 1.298l1.316-1.316l-1.318-1.318l-1.296 1.336Z" clip-rule="evenodd"/>
    </g>
</svg>`,topics:[{id:"xml-esocial",title:"XML no Contexto do eSocial - Funcionamento e Geração",description:"Guia completo sobre XML, sua estrutura, funcionamento em Web Services e papel crítico na geração de eventos do eSocial.",group:"Seu computador",tags:["eSocial","Evento","Webservice"],content:`
    <div class="welcome-banner">
      <h1>Entendendo o XML no eSocial</h1>
      <p>Este guia explica a tecnologia XML e seu papel fundamental na comunicação com o sistema eSocial do governo.</p>
    </div>

    <section class="core-concepts">
      <h2>O Que é XML?</h2>
      <div class="concept-card">
        <p>O <strong>XML</strong> (eXtensible Markup Language) é uma linguagem de marcação projetada para:</p>
        <ul>
          <li>• Armazenar e transportar dados de forma estruturada</li>
          <li>• Ser legível tanto por humanos quanto por máquinas</li>
          <li>• Facilitar a troca de informações entre sistemas diferentes</li>
        </ul>
        
        <h4>Características Essenciais:</h4>
        <div class="grid-container">
          <div class="nr-card">
            <h3>Estrutura Hierárquica</h3>
            <p>Dados organizados em formato de árvore com elementos aninhados</p>
          </div>
          
          <div class="nr-card">
            <h3>Personalizável</h3>
            <p>Criação de tags próprias para descrever os dados</p>
          </div>
          
          <div class="nr-card">
            <h3>Compatibilidade</h3>
            <p>Neutralidade de plataforma para integração entre sistemas</p>
          </div>
        </div>
      </div>
    <section class="documents-section">
      <h2>Como o XML Funciona?</h2>
      
      <div class="document-card">
        <h3 class="document-title">Comunicação em Web Services</h3>
        <div class="document-content">
          <p>O XML atua como formato de troca de dados entre sistemas diferentes:</p>
          
          <div class="flow-container">
            <div class="flow-step">
              <h4>1. Requisição (Request)</h4>
              <p>Cliente envia solicitação em XML para web service</p>
              <div class="code-block">
                &lt;request&gt;<br>
                &nbsp;&nbsp;&lt;usuarioID&gt;123&lt;/usuarioID&gt;<br>
                &lt;/request&gt;
              </div>
            </div>
            
            <div class="flow-step">
              <h4>2. Processamento</h4>
              <p>Servidor interpreta e processa a requisição</p>
            </div>
            
            <div class="flow-step">
              <h4>3. Resposta (Response)</h4>
              <p>Servidor retorna dados solicitados em XML</p>
              <div class="code-block">
                &lt;response&gt;<br>
                &nbsp;&nbsp;&lt;usuario&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;id&gt;123&lt;/id&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;nome&gt;Diego Silva&lt;/nome&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;email&gt;diego.silva@example.com&lt;/email&gt;<br>
                &nbsp;&nbsp;&lt;/usuario&gt;<br>
                &lt;/response&gt;
              </div>
            </div>
          </div>
        </div>
      </div>

    <section class="esocial-integration">
      <h2>XML no Contexto do eSocial</h2>
      
      <div class="document-card">
        <h3 class="document-title">Geração Automática de Eventos</h3>
        <div class="document-content">
          <p>Nosso sistema utiliza dados do usuário e do banco de dados para:</p>
          <ul>
            <li>- Preencher automaticamente arquivos XML</li>
            <li>- Seguir rigidamente o layout oficial do governo</li>
            <li>- Garantir conformidade com padrões técnicos específicos</li>
          </ul>
          
          <h4>Padrões Técnicos Obrigatórios:</h4>
          <ul>
            <li>• Especificações definidas pelo município da região</li>
            <li>• Normas técnicas do Comitê Gestor do eSocial</li>
            <li>• Estruturas de validação XSD do governo</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Comportamento do Sistema na Geração</h3>
        <div class="document-content">
          <p>O processo de geração segue esta lógica:</p>
          
          <div class="step-by-step">
            <div class="step">
              <h4>Passo 1: Identificação de Tags</h4>
              <p>Reconhecimento das tags exigidas pelo layout do evento</p>
            </div>
            
            <div class="step">
              <h4>Passo 2: Verificação de Dados</h4>
              <p>Consulta ao banco de dados para cada tag obrigatória</p>
            </div>
            
            <div class="step">
              <h4>Passo 3: Inserção de Valores</h4>
              <p>Preenchimento da tag quando dado existe</p>
            </div>
            
            <div class="step">
              <h4>Passo 4: Tratamento de Erros</h4>
              <p>Bloqueio da geração para tags obrigatórias sem dados</p>
            </div>
          </div>
          
          <div class="alert-box">
            <h4>Regra Crítica:</h4>
            <p>Tags obrigatórias sem dados correspondentes impedem a geração do evento</p>
          </div>
        </div>
      </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .flow-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px 0;
      }
      
      .flow-step {
        flex: 1;
        min-width: 250px;
        background: #f8f8f8;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #4CAF50;
      }
      
      .code-block {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 15px;
        border-radius: 4px;
        font-family: monospace;
        margin: 15px 0;
        overflow-x: auto;
      }
      
      .step-by-step {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 20px 0;
      }
      
      .step {
        background: #e8f5e9;
        padding: 15px;
        border-left: 4px solid #4CAF50;
        border-radius: 4px;
      }
      
      .alert-box {
        background: #ffebee;
        padding: 15px;
        border-left: 4px solid #f44336;
        border-radius: 4px;
        margin: 20px 0;
      }
    </style>
  `},{id:"assinatura-medica-certificado-a1",title:"Assinatura Digital Médica e Certificado A1: Requisitos Técnicos",description:"Esclarecimentos sobre os requisitos para uso de certificado digital A1 por médicos em sistemas de gestão de SST, incluindo limitações técnicas e alternativas.",group:"Seu computador",tags:["Configurações","Usuarios"],content:`
    <div class="welcome-banner">
      <h1>Configurações de Segurança Digital</h1>
      <p>Este guia detalha os requisitos técnicos para validação de documentos médicos e transmissão de eventos no sistema.</p>
    </div>

    <section class="core-concepts">
      <h2>Requisitos Técnicos para Assinatura Médica Digital</h2>
      
      <div class="document-card">
        <h3 class="document-title">Especificações da Assinatura Digital</h3>
        <div class="document-content">
          <div class="spec-grid">
            <div class="spec-card">
              <h4>Formato:</h4>
              <p><strong>.BMP</strong> (Bitmap)</p>
              <p>Imagem não comprimida que mantém a autenticidade da assinatura</p>
            </div>
            
            <div class="spec-card">
              <h4>Dimensões</h4>
              <p><strong>276x92 pixels</strong></p>
              <p>Proporção exata de 3:1 (largura:altura)</p>
            </div>
            
            <div class="spec-card">
              <p>Configuração da assinatura médica no perfil do usuário médico dentro do sistema de gestão.</p>
            </div>
          </div>
          
          <h4>Fluxo de Implementação:</h4>
          <ol>
            <li>• Captura da assinatura em dispositivo digital</li>
            <li>• Conversão para BMP com resolução exata (276x92px)</li>
            <li>• Upload no cadastro do profissional médico</li>
            <li>• Validação automática pelo sistema</li>
          </ol>
          <div class="alert-box">
            <h4>Restrições Técnicas:</h4>
            <ul>
              <li>• Formatos JPG/PNG são <strong>rejeitados</strong> por padrão em sistemas legados. Imagens fora do padrão dimensional causam falha na validação</li>
              <li>• Assinaturas digitalizadas devem ter fundo branco e traço preto</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="certificate-section">
      <h2>Certificado Digital A1</h2>
      
      <div class="document-card">
        <h3 class="document-title">Configuração e Funcionalidades</h3>
        <div class="document-content">
          <div class="feature-card">
            <h4>Definição Técnica</h4>
            <p>Certificado digital emitido por Autoridade Certificadora credenciada pela ICP-Brasil, instalado localmente na máquina do usuário.</p>
          </div>
          
          <div class="feature-card">
            <h4>Validade Legal</h4>
            <p>Equivalente à assinatura manuscrita para documentos eletrônicos, com validade jurídica nos termos da MP 2.200-2/2001.</p>
          </div>
          
          <h4>Implementação no Sistema</h4>
          <div class="comparison-table">
            <table>
              <tr>
                <th>Característica</th>
                <th>Certificado A1</th>
                <th>Outros Certificados</th>
              </tr>
              <tr>
                <td><strong>Armazenamento</strong></td>
                <td>Instalado no computador</td>
                <td>Token físico ou nuvem</td>
              </tr>
              <tr>
                <td><strong>Validade</strong></td>
                <td>1 ano</td>
                <td>Até 5 anos</td>
              </tr>
              <tr>
                <td><strong>Transmissão eSocial</strong></td>
                <td>Suportado</td>
                <td>Não suportado na versão Web</td>
              </tr>
            </table>
          </div>
          
          <h4>Eventos Habilitados</h4>
          <ul>
            <li><strong>S-2220:</strong> Monitoramento da Saúde do Trabalhador</li>
            <li><strong>S-2240:</strong> Condições do Ambiente de Trabalho</li>
            <li><strong>S-2221:</strong> Toxicológico</li>
            <li><strong>S-2210:</strong> Comunicação de Acidente de Trabalho</li>
          </ul>
          
          <div class="warning-box">
            <h4>Procedimentos Críticos:</h4>
            <ul>
              <li>• Renovar o certificado com 30 dias de antecedência da expiração</li>
              <li>• Exportar/importar o certificado ao trocar de máquina</li>
              <li>• Manter backup do arquivo .PFX protegido por senha forte</li>
            </ul>
          </div>
    <section class="integration-section">
      <h2>Integração com Documentos Ocupacionais</h2>
      
      <div class="grid-container">
        <div class="integration-card">
          <h3>ASO Digital</h3>
          <ul>
            <li>Assinatura BMP aplicada automaticamente</li>
            <li>Certificado A1 gera carimbo de tempo RFC 3161</li>
            <li>Validação cruzada com CRM do médico</li>
          </ul>
        </div>
        
        <div class="integration-card">
          <h3>PCMSO Eletrônico</h3>
          <ul>
            <li>Transmissão automatizada via S-2220</li>
            <li>Assinatura digital em todos os exames</li>
            <li>Registro criptografado com hash SHA-256</li>
          </ul>
        </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .spec-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin: 20px 0;
      }
      
      .spec-card {
        background: #f8fbff;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #bbdefb;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .alert-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }
      
      .warning-box {
        border-left: 4px solid #f44336;
        background-color: #ffebee;
        padding: 15px;
        margin: 20px 0;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .comparison-table table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .comparison-table th {
        background-color: #f2f2f2;
      }
      
      .integration-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #4caf50;
      }
      
      .feature-card {
        background: #e8f5e9;
        padding: 15px;
        border-radius: 6px;
        margin: 15px 0;
      }
    </style>
  `},{id:"cache-navegador-fundamentos-tecnicos",title:"Cache do Navegador: Fundamentos Técnicos e Operacionais",description:"Guia completo sobre funcionamento, tipos e gerenciamento de cache em navegadores e sistemas computacionais.",group:"Seu computador",tags:["Base"],content:`
    <div class="welcome-banner">
      <h1>Entendendo o Cache Computacional</h1>
      <p>Este guia explica o funcionamento técnico dos sistemas de cache e seu impacto no desempenho de aplicações web.</p>
    </div>

    <section class="core-concepts">
      <h2>O Que é Cache?</h2>
      
      <div class="concept-card">
        <p>O <strong>cache</strong> é um mecanismo de armazenamento temporário que acelera o acesso a dados frequentemente utilizados:</p>
        <ul>
          <li>• Armazena cópias locais de recursos (imagens, scripts, credenciais)</li>
          <li>• Reduz a necessidade de novas solicitações ao servidor</li>
          <li>• Melhora significativamente o tempo de resposta do sistema</li>
        </ul>
        
        <div class="technical-note">
          <h4>Definição Técnica:</h4>
          <p>"Cache é um componente que armazena dados temporariamente para futuras requisições, reduzindo o tempo de acesso a informações de alto custo computacional" (Fonte: Mozilla Developer Network)</p>
        </div>
      </div>
    <section class="cache-types">
      <h2>Tipos de Cache</h2>
      
      <div class="grid-container">
        <div class="cache-card">
          <h3>Cache de Navegador</h3>
          <div class="cache-content">
            <ul>
              <li><strong>Localização:</strong> Armazenado localmente no dispositivo</li>
              <li><strong>Conteúdo:</strong> Cookies, senhas, histórico, recursos de sites</li>
              <li><strong>Persistência:</strong> Mantido entre sessões até limpeza manual</li>
              <li><strong>Capacidade:</strong> Tipicamente 50MB-1GB (varia por navegador)</li>
            </ul>
          </div>
        </div>
        
        <div class="cache-card">
          <h3>Cache de Memória (RAM)</h3>
          <div class="cache-content">
            <ul>
              <li><strong>Localização:</strong> Armazenado na memória volátil (RAM)</li>
              <li><strong>Conteúdo:</strong> Dados de aplicativos em execução</li>
              <li><strong>Persistência:</strong> Perdido ao desligar o dispositivo</li>
              <li><strong>Velocidade:</strong> Acesso 100x mais rápido que SSD</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <table>
          <tr>
            <th>Característica</th>
            <th>Cache do Navegador</th>
            <th>Cache de Memória</th>
          </tr>
          <tr>
            <td><strong>Armazenamento</strong></td>
            <td>Disco rígido/SSD</td>
            <td>Memória RAM</td>
          </tr>
          <tr>
            <td><strong>Persistência</strong></td>
            <td>Até limpeza manual</td>
            <td>Apenas durante a sessão</td>
          </tr>
          <tr>
            <td><strong>Finalidade</strong></td>
            <td>Acelerar carregamento de sites</td>
            <td>Acelerar execução de aplicativos</td>
          </tr>
          <tr>
            <td><strong>Capacidade</strong></td>
            <td>MBs a GBs</td>
            <td>GBs</td>
          </tr>
        </table>
      </div>
    </section>


    <section class="performance-section">
      <h2>Impacto no Desempenho</h2>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Redução de Latência</h3>
          <p>Até <strong>90%</strong> menos tempo de carregamento para recursos em cache</p>
        </div>
        
        <div class="stat-card">
          <h3>Economia de Banda</h3>
          <p>Até <strong>60%</strong> menos dados transferidos (Fonte: HTTP Archive)</p>
        </div>
        
        <div class="stat-card">
          <h3>Eficiência de Memória</h3>
          <p>Aplicações usam <strong>30-40%</strong> menos RAM com cache otimizado</p>
        </div>
      </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .technical-note {
        background: #e8f5e9;
        padding: 15px;
        border-left: 4px solid #4caf50;
        margin-top: 15px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .cache-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #2196F3;
      }
      
      .comparison-table table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .comparison-table th {
        background-color: #f2f2f2;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .code-example {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 15px;
        border-radius: 4px;
        font-family: monospace;
        margin: 15px 0;
        overflow-x: auto;
      }
      
      .warning-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      
      .stat-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        text-align: center;
        border-bottom: 4px solid #9c27b0;
      }
      
      .best-practices {
        background: #e3f2fd;
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
      }
    </style>
  `},{id:"nrs-conceitos-basicos",title:" (NRs) - Normas Regulamentadoras",description:"Guia completo sobre as Normas Regulamentadoras (NRs) com foco em SST, abordando NR-1, NR-7, NR-15 e NR-16, seus objetivos, obrigações e impactos para empresas e trabalhadores.",group:"PJ",content:`
<div class="welcome-banner">
  <h1>Normas Regulamentadoras (NRs)</h1>
  <p>Este guia apresenta os conceitos fundamentais das principais Normas Regulamentadoras de Segurança e Saúde no Trabalho utilizadas em nosso sistema.</p>
</div>

<section class="core-concepts">
  <h2>O Que São as Normas Regulamentadoras (NRs)?</h2>
  <div class="concept-card">
    <p>As <strong>Normas Regulamentadoras (NR)</strong> são regras que definem o que pessoas jurídicas e físicas devem fazer para manter o bem-estar social, com foco específico na área de Segurança e Saúde no Trabalho (SST).</p>
    <ul>
      <li>• Algumas tratam de regras gerais, como o uso de <strong>Equipamentos de Proteção Individual (EPIs)</strong></li>
      <li>• Outras falam de situações mais específicas, como segurança no uso de máquinas, cuidados com ergonomia ou proteção da saúde do trabalhador</li>
    </ul>
  </div>
<section class="nr-overview">
  <h2>Principais Normas Regulamentadoras (NRs)</h2>
  
  <div class="grid-container">
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-1</h3>
      <p>(GRO) Gerenciamento de Riscos Ocupacionais</p>
      <p class="nr-desc">Estabelece disposições gerais, o campo de aplicação, termos e definições comuns às Normas Regulamentadoras.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-7</h3>
      <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
      <p class="nr-desc">Estabelece diretrizes para o desenvolvimento do PCMSO com objetivo de proteger e preservar a saúde dos empregados.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-15</h3>
      <p>Atividades e Operações Insalubres</p>
      <p class="nr-desc">Estabelece as atividades que devem ser consideradas insalubres, gerando direito ao adicional de insalubridade.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-16</h3>
      <p>Atividades e Operações Perigosas</p>
      <p class="nr-desc">Define o que é periculosidade e como deve ser feito o pagamento do adicional para atividades perigosas.</p>
    </div>
  </div>
</section>

<section class="documents-section">
  <h2>Detalhamento das Principais NRs</h2>
  
  <div class="document-card">
    <h3 class="document-title">NR-1 - (GRO) Gerenciamento de Riscos Ocupacionais</h3>
    <div class="document-content">
      <p>Estabelece as disposições gerais, o campo de aplicação, os termos e as definições comuns às Normas Regulamentadoras relativas à Segurança e Saúde no Trabalho.</p>
      
      <h4>Obrigações da Empresa:</h4>
      <ul>
        <li><strong>Informar trabalhadores</strong> sobre os riscos no local de trabalho e como preveni-los</li>
        <li><strong>Comunicar resultados</strong> de exames médicos e das avaliações ambientais</li>
        <li><strong>Explicar procedimentos</strong> em caso de acidente ou doença relacionada ao trabalho</li>
        <li><strong>Tomar medidas de prevenção</strong>, priorizando:
          <ol>
            <li>Eliminar o risco</li>
            <li>Reduzir o risco com medidas coletivas</li>
            <li>Reduzir o risco com ajustes na organização do trabalho</li>
            <li>Usar equipamentos de proteção individual (EPI)</li>
          </ol>
        </li>
      </ul>
      
      <h4>Deveres do Trabalhador:</h4>
      <ul>
        <li>Seguir as regras de segurança e saúde no trabalho</li>
        <li>Fazer os exames médicos exigidos</li>
        <li>Usar corretamente os EPIs fornecidos pela empresa</li>
        <li>Colaborar para manter o ambiente de trabalho seguro</li>
      </ul>
      
      <h4>Direitos do Trabalhador:</h4>
      <ul>
        <li>Parar o trabalho se houver risco grave e iminente à vida ou à saúde, avisando o superior</li>
        <li>Não ser punido por parar o trabalho nessas situações</li>
        <li>Receber informações, ao ser contratado ou mudar de função, sobre:
          <ul>
            <li>Riscos do trabalho</li>
            <li>Como prevenir acidentes e doenças</li>
            <li>O que fazer em emergências</li>
          </ul>
        </li>
      </ul>
      
      <h4>Gerenciamento de Riscos Ocupacionais (PGR):</h4>
      <p>O <strong>Programa de Gerenciamento de Riscos (PGR)</strong> deve ser implementado através de:</p>
      <ul>
        <li>Aplicação para toda a operação ou apenas para setor/atividade específica</li>
        <li>Integração com sistema de gestão, seguindo todas as regras da NR</li>
        <li>Inclusão ou vinculação a outros planos e programas exigidos pela legislação</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-7 - Programa de Controle Médico de Saúde Ocupacional (PCMSO)</h3>
    <div class="document-content">
      <p>Programa médico obrigatório que acompanha a saúde dos trabalhadores durante todo o vínculo empregatício.</p>
      
      <h4>Diretrizes do PCMSO:</h4>
      <ul>
        <li>Detectar precocemente problemas de saúde ligados ao trabalho</li>
        <li>Identificar se há exposição excessiva a agentes nocivos</li>
        <li>Avaliar se o trabalhador está apto para suas funções</li>
        <li>Acompanhar a saúde de empregados mais vulneráveis</li>
        <li>Apoiar decisões de afastamento e readaptação profissional</li>
        <li>Garantir vacinas recomendadas pelo Ministério da Saúde</li>
      </ul>
      
      <h4>Exames Médicos Obrigatórios:</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tipo de Exame</th>
              <th>Periodicidade</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Admissional</strong></td>
              <td>Antes de assumir atividades</td>
              <td>Obrigatório para todos os empregados</td>
            </tr>
            <tr>
              <td><strong>Periódico</strong></td>
              <td>Variável conforme risco</td>
              <td>
                <ul>
                  <li>Exposição a riscos/doenças crônicas: anualmente ou menos (conforme médico)</li>
                  <li>Condições hiperbáricas: seguir prazo do Anexo IV</li>
                  <li>Demais empregados: a cada 2 anos</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Retorno ao trabalho</strong></td>
              <td>Após afastamento ≥ 30 dias</td>
              <td>Realizado antes do retorno, com possibilidade de retorno gradual</td>
            </tr>
            <tr>
              <td><strong>Mudança de risco</strong></td>
              <td>Antes da mudança de função</td>
              <td>Quando houver exposição a novos riscos ocupacionais</td>
            </tr>
            <tr>
              <td><strong>Demissional</strong></td>
              <td>Até 10 dias após fim do contrato</td>
              <td>
                Pode ser dispensado se exame mais recente foi realizado:
                <ul>
                  <li>Há menos de 135 dias (grau de risco 1 e 2)</li>
                  <li>Há menos de 90 dias (grau de risco 3 e 4)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h4>Relatório Anual do PCMSO:</h4>
      <p>O médico responsável deve elaborar relatório analítico anual contendo no mínimo:</p>
      <ul>
        <li>Número de exames clínicos realizados</li>
        <li>Número e tipos de exames complementares realizados</li>
        <li>Estatística de resultados anormais, categorizados por tipo de exame e por unidade/setor/função</li>
        <li>Incidência e prevalência de doenças relacionadas ao trabalho</li>
        <li>Informações sobre número e tipo de eventos e doenças informadas nas CAT</li>
        <li>Análise comparativa em relação ao relatório anterior</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-15 - Atividades e Operações Insalubres</h3>
    <div class="document-content">
      <p>Estabelece as atividades que devem ser consideradas insalubres, gerando direito ao adicional de insalubridade aos trabalhadores.</p>
      
      <h4>Atividades Consideradas Insalubres:</h4>
      <ul>
        <li>Exposição a ruído excessivo</li>
        <li>Exposição ao calor ambiente</li>
        <li>Radiações ionizantes e não ionizantes</li>
        <li>Trabalho sob condições hiperbáricas</li>
        <li>Vibrações</li>
        <li>Frio excessivo</li>
        <li>Umidade</li>
        <li>Agentes químicos (incluindo benzeno)</li>
        <li>Poeiras minerais (sílica, asbesto, manganês)</li>
        <li>Agentes biológicos</li>
      </ul>
      
      <h4>Graus de Insalubridade e Adicionais:</h4>
      <ul>
        <li><strong>Insalubridade de Grau Máximo:</strong> adicional de 40% do salário mínimo</li>
        <li><strong>Insalubridade de Grau Médio:</strong> adicional de 20% do salário mínimo</li>
        <li><strong>Insalubridade de Grau Mínimo:</strong> adicional de 10% do salário mínimo</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-16 - Atividades e Operações Perigosas</h3>
    <div class="document-content">
      <p>Estabelece as diretrizes para caracterização de atividades perigosas e o respectivo adicional de periculosidade.</p>
      
      <h4>Características das Atividades Perigosas:</h4>
      <ul>
        <li>Atividades com inflamáveis ou explosivos</li>
        <li>Atividades com energia elétrica</li>
        <li>Atividades de segurança patrimonial armada</li>
        <li>Outras atividades que impliquem risco iminente de vida</li>
      </ul>
      
      <h4>Adicional de Periculosidade:</h4>
      <ul>
        <li>Valor fixo de 30% sobre o salário base do trabalhador</li>
        <li>Não acumulável com adicional de insalubridade</li>
        <li>Não incide sobre outros adicionais</li>
      </ul>
      
      <h4>Responsabilidades:</h4>
      <p>É responsabilidade do empregador a caracterização ou descaracterização da periculosidade, mediante laudo técnico elaborado por Médico do Trabalho ou Engenheiro de Segurança do Trabalho.</p>
    </div>
  </div>
</section>

<section class="links-section">
  <h2>Links Úteis e Referências</h2>
  
  <div class="links-grid">
    <div class="link-card">
      <h4>NR-1 Completa</h4>
      <p>Acesse a versão atualizada da NR-1 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-01-atualizada-2024-i-1.pdf" target="_blank">Acessar NR-1</a>
    </div>
    
    <div class="link-card">
      <h4>NR-7 Completa</h4>
      <p>Acesse a versão atualizada da NR-7 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-07-atualizada-2022-1.pdf" target="_blank">Acessar NR-7</a>
    </div>
    
    <div class="link-card">
      <h4>NR-15 Completa</h4>
      <p>Acesse a versão atualizada da NR-15 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-15-atualizada-2022.pdf" target="_blank">Acessar NR-15</a>
    </div>
    
    <div class="link-card">
      <h4>NR-16 Completa</h4>
      <p>Acesse a versão atualizada da NR-16 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/NR16atualizada2024.pdf" target="_blank">Acessar NR-16</a>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .document-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .link-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4CAF50;
    transition: transform 0.3s ease;
  }
  
  .link-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .link-card a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .link-card a:hover {
    background-color: #3e8e41;
  }
  
  .table-container {
    overflow-x: auto;
    margin: 20px 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
  
  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`},{id:"entendendo-mundo-juridico",title:"Entendendo o Mundo Jurídico - Naturezas Jurídicas e Aspectos Tributários",description:"Guia completo sobre naturezas jurídicas, tipos de sociedades, criação de CNPJ e obrigações legais para empresas.",group:"PJ",content:`
<div class="welcome-banner">
  <h1>Bem-vindo ao Mundo Jurídico Empresarial!</h1>
  <p>Este guia foi criado para ajudar você a compreender os principais conceitos jurídicos e tributários que fundamentam a estruturação de empresas no Brasil.</p>
</div>

<section class="core-concepts">
  <h2>O Que é Natureza Jurídica?</h2>
  <div class="concept-card">
    <p>A <strong>Natureza Jurídica</strong> é como a lei classifica um negócio ou empresa. Ela define aspectos fundamentais como:</p>
    <ul>
      <li><strong>Responsabilidade legal</strong>: Quem é responsável em caso de problemas (dívidas ou acidentes)</li>
      <li><strong>Carga tributária</strong>: Quais impostos a empresa precisa pagar</li>
      <li><strong>Funcionamento operacional</strong>: Como a empresa pode operar de acordo com a lei</li>
    </ul>
    <p>Esses aspectos dependem <strong>diretamente</strong> da natureza jurídica escolhida, que pode ser, por exemplo, uma <strong>empresa individual</strong> ou uma <strong>sociedade</strong>.</p>
  </div>
</section>

<section class="society-types">
  <h2>Tipos de Sociedade</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>Sociedade Comum</h3>
      <p>Espécie de sociedade <u>despersonificada</u> (não possui personalidade jurídica)</p>
      <p class="nr-desc">Constitui sociedade de fato ou irregular, aplicável a sociedades sem atos constitutivos ou sem registro.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Simples</h3>
      <p>Formada por duas ou mais pessoas para atividades não empresariais</p>
      <p class="nr-desc">Ligada a trabalhos intelectuais ou profissionais (médicos, nutricionistas, dentistas).</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Limitada</h3>
      <p>Sócios têm responsabilidade limitada ao capital investido</p>
      <p class="nr-desc">Protege o patrimônio pessoal dos sócios em caso de dívidas da empresa.</p>
    </div>
    
    <div class="nr-card">
      <h3>Contribuinte Individual</h3>
      <p>Quem trabalha por conta própria sem vínculo empregatício</p>
      <p class="nr-desc">Tem obrigação de pagar contribuição previdenciária diretamente.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Comandita Simples</h3>
      <p>Dois tipos de sócios: comanditários e comanditados</p>
      <p class="nr-desc">Comanditários arriscam apenas o valor investido, comanditados têm responsabilidade integral.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade em Nome Coletivo</h3>
      <p>Somente pessoas físicas podem participar</p>
      <p class="nr-desc">Todos os sócios respondem solidária e ilimitadamente pelas obrigações sociais.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Comandita por Ações</h3>
      <p>Alguns sócios têm responsabilidade limitada (acionistas)</p>
      <p class="nr-desc">Sócio diretor tem responsabilidade ilimitada pelas dívidas da empresa.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade em Conta de Participação</h3>
      <p>Não possui CNPJ próprio</p>
      <p class="nr-desc">Apenas um dos sócios cuida da administração do negócio.</p>
    </div>
  </div>
</section>

<section class="cnpj-section">
  <h2>Criação do CNPJ</h2>
  <div class="document-card">
    <h3 class="document-title">Processo de Criação do CNPJ</h3>
    <div class="document-content">
      <p>Para uma pessoa física realizar a criação de um CNPJ, os seguintes passos devem ser realizados:</p>
      
      <h4>Etapas do Processo:</h4>
      <ol>
        <li><strong>Consulta prévia de viabilidade</strong>: Verificar se as atividades do negócio podem ser realizadas no local escolhido e se o nome empresarial está disponível</li>
        <li><strong>Inscrição no CNPJ</strong>: Fornecer os dados necessários para a inscrição no CNPJ e o registro da empresa</li>
        <li><strong>Licenças municipais</strong>: Obter as licenças necessárias no município onde pretende atuar</li>
      </ol>
      
<section class="obligations-section">
  <h2>Obrigações Legais do Empregador</h2>
  
  <div class="document-card">
    <h3 class="document-title">Obrigações com Colaboradores</h3>
    <div class="document-content">
      <p>Algumas das principais obrigações legais que o empregador possui com os colaboradores são:</p>
      
      <h4>Obrigações Financeiras:</h4>
      <ul>
        <li>Pagamento de salário</li>
        <li>Pagamento de encargos sociais</li>
      </ul>
      
      <h4>Obrigações Legais e Trabalhistas:</h4>
      <ul>
        <li>Cumprimento da CLT</li>
        <li>Emissão de documentos (carteira de trabalho, contrato de trabalho, recibos de pagamento)</li>
        <li>Comunicação de informações sobre direitos</li>
        <li>Segurança e saúde no trabalho</li>
      </ul>
    </div>
  </div>
</section>

<section class="taxes-section">
  <h2>Deduções de Impostos</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>ISS</h3>
      <p>Imposto Sobre Serviços</p>
      <p class="nr-desc">Tributo municipal cobrado de empresas que prestam serviços. Um dos principais tributos municipais.</p>
    </div>
    
    <div class="nr-card">
      <h3>IR</h3>
      <p>Imposto de Renda</p>
      <p class="nr-desc">Tributação federal cobrada anualmente sobre os ganhos de pessoas físicas ou jurídicas.</p>
    </div>
    
    <div class="nr-card">
      <h3>PIS</h3>
      <p>Programa de Integração Social</p>
      <p class="nr-desc">Promove a integração do empregado na vida e desenvolvimento das empresas, com melhor distribuição de renda.</p>
    </div>
    
    <div class="nr-card">
      <h3>COFINS</h3>
      <p>Contribuição para Financiamento da Seguridade Social</p>
      <p class="nr-desc">Tributo pago por pessoas jurídicas sobre a receita, destinado à saúde, previdência e assistência social.</p>
    </div>
    
    <div class="nr-card">
      <h3>CSLL</h3>
      <p>Contribuição Social sobre Lucro Líquido</p>
      <p class="nr-desc">Tributo federal cobrado sobre o lucro líquido das empresas que operam no Brasil para financiar a Seguridade Social.</p>
    </div>
    
    <div class="nr-card">
      <h3>INSS</h3>
      <p>Instituto Nacional do Seguro Social</p>
      <p class="nr-desc">Responsável pela gestão da Previdência Social, garantindo benefícios como aposentadoria, auxílio-doença e pensão por morte.</p>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`},{id:"sistema-tributario-impacto-notas-fiscais",title:"Sistema Tributário e Seu Impacto Nas Notas Fiscais",description:"Guia completo sobre o sistema tributário brasileiro, tipos de tributos, retenções, deduções, regimes tributários e seu impacto na emissão de notas fiscais.",group:"PJ",content:`
<div class="welcome-banner">
  <h1>Entendendo o Sistema Tributário Brasileiro</h1>
  <p>Este guia foi criado para ajudar você a compreender o sistema tributário nacional, seus impactos nas operações empresariais e a correta parametrização para emissão de notas fiscais.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o Sistema Tributário Nacional?</h2>
  <div class="concept-card">
    <p>O <strong>Sistema Tributário Nacional</strong> é o conjunto de regras que organiza como os impostos e outros tributos são criados, cobrados, arrecadados e divididos entre os governos (federal, estadual e municipal).</p>
    <p>Inclui todas as normas relacionadas à cobrança de tributos:</p>
    <ul>
      <li>Constituição Federal</li>
      <li>Leis ordinárias e complementares</li>
      <li>Decretos</li>
      <li>Portarias</li>
      <li>Instruções normativas</li>
    </ul>
  </div>
<section class="tax-overview">
  <h2>Tipos de Tributos</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>Impostos</h3>
      <p>Carro-chefe da tributação, responsáveis por financiar as atividades do Estado</p>
      <div class="nr-desc">
        <p><strong>Federais:</strong> IRPF, IRPJ, IOF, IPI, II</p>
        <p><strong>Estaduais:</strong> ICMS, IPVA, ITCMD</p>
        <p><strong>Municipais:</strong> ISS, IPTU, ITBI</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Taxas</h3>
      <p>Cobradas quando o governo oferece serviço específico ou faz fiscalização</p>
      <div class="nr-desc">
        <p>Exemplos: Taxa de fiscalização de comércio, emissão de RG/CNH, passaporte</p>
        <p>Pagas apenas por quem utiliza o serviço</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Contribuição de Melhoria</h3>
      <p>Cobrada quando obra pública valoriza imóveis da região</p>
      <div class="nr-desc">
        <p>Exemplo: Asfaltamento de rua (não se aplica a recapeamento)</p>
        <p>Limitada ao valor da valorização obtida</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Empréstimo Compulsório</h3>
      <p>Recurso excepcional em casos especiais (guerra, desastre)</p>
      <div class="nr-desc">
        <p>Exclusivo do governo federal</p>
        <p>Temporário e criado por lei complementar</p>
        <p>Exemplo histórico: 1986, governo Sarney</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Contribuições</h3>
      <p>Tributos com finalidade específica</p>
      <div class="nr-desc">
        <p>Exemplos: COFINS, CSLL, CIDE</p>
        <p>Destinados a saúde, previdência, transporte</p>
      </div>
    </div>
  </div>
</section>

<section class="tax-classification">
  <h2>Classificação dos Tributos</h2>
  
  <div class="document-card">
    <h3 class="document-title">Tributos Diretos e Indiretos</h3>
    <div class="document-content">
      <div class="classification-grid">
        <div class="classification-item">
          <h4>Tributos Diretos</h4>
          <p>Pagos diretamente ao governo por quem tem a obrigação</p>
          <ul>
            <li>IPVA</li>
            <li>IPTU</li>
            <li>IR</li>
            <li>Taxas</li>
            <li>COFINS</li>
            <li>CSLL</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Tributos Indiretos</h4>
          <p>Embutidos no preço de produtos ou serviços</p>
          <ul>
            <li>ICMS</li>
            <li>IPI</li>
            <li>ISS</li>
            <li>CIDE</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="retention-deduction">
  <h2>Retenções e Deduções Tributárias</h2>
  
  <div class="document-card">
    <h3 class="document-title">Conceitos Fundamentais</h3>
    <div class="document-content">
      <div class="concept-grid">
        <div class="concept-item">
          <h4>Retenção</h4>
          <p>Desconto do imposto diretamente no pagamento, com repasse ao governo</p>
          <ul>
            <li>Ocorre no momento do pagamento</li>
            <li>Feita pelo pagador do serviço/produto</li>
            <li>Entrega direta ao governo</li>
          </ul>
        </div>
        
        <div class="concept-item">
          <h4>Dedução</h4>
          <p>Redução do valor do imposto a pagar mediante despesas permitidas</p>
          <ul>
            <li>Diminui a base de cálculo do imposto</li>
            <li>Despesas com saúde, educação, etc.</li>
            <li>Quanto mais despesas dedutíveis, menor o imposto</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="tax-regimes">
  <h2>Regimes Tributários</h2>
  <div class="document-card">
    <h3 class="document-title">Simples Nacional, Lucro Presumido e Lucro Real</h3>
    <div class="document-content">
      <p>A escolha do regime tributário define como serão calculados os impostos, bem como a aplicação de retenções e deduções em notas fiscais.</p>
      
      <div class="classification-grid">
        <div class="classification-item">
          <h4>Simples Nacional</h4>
          <ul>
            <li>Unifica diversos tributos em uma única guia (DAS).</li>
            <li>Geralmente não há retenção de IR, PIS, COFINS e CSLL na fonte.</li>
            <li>Pode haver retenção de ISS em alguns municípios e INSS em serviços sujeitos à cessão de mão de obra.</li>
            <li>Deduções são limitadas, pois o cálculo é feito sobre a receita bruta.</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Lucro Presumido</h4>
          <ul>
            <li>Base de cálculo definida por presunção de margem de lucro.</li>
            <li>Sujeito a retenções de IR, PIS, COFINS e CSLL em serviços prestados a pessoas jurídicas.</li>
            <li>ISS retido conforme legislação municipal.</li>
            <li>Deduções não são consideradas diretamente (exceto compensações específicas).</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Lucro Real</h4>
          <ul>
            <li>Tributação sobre o lucro contábil ajustado por adições e exclusões.</li>
            <li>Sujeito a retenções de IR, PIS, COFINS, CSLL e ISS conforme operações.</li>
            <li>Possibilidade de deduções mais amplas, como despesas operacionais, financeiras e trabalhistas.</li>
            <li>Mais complexo, exige controles contábeis detalhados.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="configuration-section">
  <h2>Parametrização no Sistema</h2>
  
  <div class="document-card">
    <h3 class="document-title">Configuração de Retenções</h3>
    <div class="document-content">
      <p>É fundamental que as retenções e deduções sejam devidamente parametrizadas, pois impactam diretamente no valor cobrado nas notas fiscais.</p>
      
      <h4>Exceção Fiscal</h4>
      <p>Caminho: <strong>Cadastros > Tabelas > Fiscais > Tabela de Códigos de Serviços > Exceção Fiscal</strong></p>
      <p>Necessário informar se determinada unidade não sofrerá retenção de impostos para nenhuma empresa, selecionando o tipo de imposto para o qual não haverá retenção.</p>
      
      <h4>Retenção em Parcelamentos</h4>
      <p>Caminho: <strong>Configurações > Configurações Gerais > Financeiro > Retenção dos Impostos em Parcelamentos</strong></p>
      <p>Definir a forma de retenção dos impostos em títulos parcelados:</p>
      <ul>
        <li><strong>Parcelado:</strong> Impostos divididos proporcionalmente entre as parcelas</li>
        <li><strong>Na 1ª Parcela:</strong> Valor total aplicado na primeira parcela</li>
        <li><strong>Na Última Parcela:</strong> Valor total aplicado na última parcela</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Configuração de Deduções</h3>
    <div class="document-content">
      <p>Para parametrizar a dedução de impostos de uma empresa específica:</p>
      <p>Caminho: <strong>Cadastros > Empresas > Financeiro > Deduções de Impostos</strong></p>
      
      <p>Informar os dados relacionados à dedução dos seguintes tributos:</p>
      
      <div class="tax-grid">
        <div class="tax-item">
          <h4>ISS</h4>
          <p>Imposto Sobre Serviços</p>
        </div>
        
        <div class="tax-item">
          <h4>IR</h4>
          <p>Imposto de Renda</p>
        </div>
        
        <div class="tax-item">
          <h4>PIS</h4>
          <p>Programa de Integração Social</p>
        </div>
        
        <div class="tax-item">
          <h4>COFINS</h4>
          <p>Contribuição para o Financiamento da Seguridade Social</p>
        </div>
        
        <div class="tax-item">
          <h4>CSLL</h4>
          <p>Contribuição Social sobre o Lucro Líquido</p>
        </div>
        
        <div class="tax-item">
          <h4>INSS</h4>
          <p>Instituto Nacional do Seguro Social</p>
        </div>
      </div>
      
      <div class="alert-box">
        <p>A correta parametrização garante que o sistema considere as deduções de forma adequada durante os processos financeiros e fiscais da empresa, evitando inconsistências na emissão das notas fiscais.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .classification-grid, .concept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  
  .classification-item, .concept-item {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #4CAF50;
  }
  
  .tax-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }
  
  .tax-item {
    background: #e8f5e9;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .tax-item:hover {
    transform: scale(1.05);
    background: #c8e6c9;
  }
  
  .alert-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`},{id:"regimes-tributarios-retencoes-deducoes",title:"Mais sobre: Regimes Tributários: Simples Nacional, Lucro Presumido e Lucro Real — Retenções, Deduções e Migrações",description:"Guia completo e prático sobre quando há retenção e como funcionam deduções/créditos em cada regime (Simples, Presumido e Real), com exemplos, cenários especiais, ISS/ICMS-ST, CPRB, mudanças de regime e modelos de declaração.",group:"PJ",content:`
  <div class="welcome-banner">
    <h1>Regimes Tributários — Retenção, Dedução/Créditos e Migrações</h1>
    <p>Este guia foi preparado para uso no atendimento e apoio consultivo: explica, de forma objetiva e com exemplos, quando ocorre <strong>retenção na fonte</strong> (IRRF, CSLL/PIS/COFINS e INSS/CPRB), como funcionam <strong>deduções e créditos</strong>, e o que muda quando a empresa <strong>troca de regime</strong> (Simples, Lucro Presumido, Lucro Real).</p>
  </div>

  <section class="shortcuts-section">
    <h2>Visão Geral Rápida</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>O que é retenção na fonte?</h3>
        </div>
        <p>É quando o <strong>tomador</strong> do serviço (ou comprador) <em>desconta tributos</em> de um pagamento ao fornecedor, recolhendo-os ao Fisco. Pode atingir: <strong>IRRF</strong> (serviços profissionais), <strong>CSLL/PIS/COFINS</strong> (regra dos 4,65% em certos serviços), e <strong>INSS</strong> (11% ou 3,5% em cessão de mão de obra/empreitada, conforme o caso). ISS e ICMS podem ter retenções/substituição conforme legislação local/estadual.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>O que são deduções/créditos?</h3>
        </div>
        <p>“Deduções” aqui significam, em linhas gerais, <strong>despesas dedutíveis</strong> do lucro (Lucro Real) e <strong>créditos</strong> (PIS/COFINS no regime não cumulativo do Lucro Real) que reduzem a base/valor devido. No Lucro Presumido há <em>percentuais de presunção</em> da base; no Simples, a apuração é unificada via DAS (com poucas exceções fora do DAS).</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>Resumo por Regime</h3>
        </div>
        <ul>
          <li><strong>Simples:</strong> em regra, <em>não</em> sofre retenção de CSLL/PIS/COFINS; pode haver <strong>IRRF (alguns casos)</strong> e <strong>INSS</strong> se houver cessão de mão de obra/empreitada; ISS pode ser retido por regra municipal.</li>
          <li><strong>Presumido:</strong> pode sofrer <strong>retenção 4,65%</strong> (CSLL/PIS/COFINS) em certos serviços; <strong>IRRF</strong> (ex.: 1,5% serviços profissionais); <strong>INSS 11%</strong> em cessão de mão de obra/empreitada (ou 3,5% se CPRB aplicada a quem for desonerado).</li>
          <li><strong>Real:</strong> idem ao Presumido nas retenções; diferença central está na <strong>apuração do IRPJ/CSLL</strong> (lucro contábil ajustado) e no <strong>PIS/COFINS não cumulativos</strong> (créditos).</li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <h4>Importante</h4>
      <p>Retenções federais (IR, CSLL, PIS, COFINS) têm <strong>hipóteses de dispensa</strong> e <strong>alíquotas/códigos DARF</strong> específicos. No caso do <strong>Simples</strong>, é usual exigir do prestador a <strong>declaração de optante</strong> para <em>dispensa</em> de retenção de CSLL/PIS/COFINS.</p>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Simples Nacional — Regras, Retenção, Deduções</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Enquadramento & Limites</h3></div>
        <ul>
          <li>ME até R$ 360 mil/ano; EPP até R$ <strong>4,8 milhões/ano</strong> (com sublimites para ICMS/ISS conforme Estado).</li>
          <li>Vedado a atividades específicas e a quem ultrapassa limites (efeitos variam: mês seguinte ou ano seguinte conforme excesso).</li>
        </ul>
        <p><em>Observação:</em> ao ultrapassar limites, pode haver exclusão com efeitos distintos (até 20% vs. acima de 20% do teto) e possível manutenção apenas do DAS federal, com recolhimento de ICMS/ISS fora do Simples, conforme sublimite/regra vigente.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções mais comuns no Simples</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong>: <u>em regra, dispensadas</u> quando o <strong>prestador</strong> é optante pelo Simples, mediante <strong>declaração de optante</strong> apresentada ao tomador.</li>
          <li><strong>IRRF</strong>: há hipóteses de retenção (ex.: serviços profissionais listados pelo RIR/Regulamento do IR). Alguns entes dispensam quando prestador é Simples; confirme na sua política/ente pagador.</li>
          <li><strong>INSS (retenção 11%)</strong> em <strong>cessão de mão de obra/empreitada</strong> (serviços típicos: limpeza, conservação, manutenção, construção, apoio administrativo, call center, TI com cessão de pessoal etc.). Para empresas <strong>desoneradas (CPRB)</strong>, a retenção previdenciária pode ser <strong>3,5%</strong> nos períodos de desoneração previstos em lei.</li>
          <li><strong>ISS</strong>: pode haver retenção na fonte por legislação municipal (ex.: tomador responsável), inclusive com exigência de RPS/Nota fiscal com destaque.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções/Créditos no Simples</h3></div>
        <p>A apuração é por <strong>DAS unificado</strong> (IRPJ/CSLL/PIS/COFINS/CPP e, quando devido, ICMS/ISS), segundo <strong>anexos e faixas</strong> da LC 123. Não há <strong>créditos de PIS/COFINS</strong> a tomar (regra do Simples não adota o regime não cumulativo). Deduções de base (como no Lucro Real) <u>não</u> se aplicam.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplos de atendimento (Simples)</h3></div>
        <ul>
          <li><strong>Prestador Simples → Tomador privado:</strong> cliente solicita retenção 4,65%. <em>Ação</em>: pedir a <strong>declaração de optante</strong> e <em>não reter</em> CSLL/PIS/COFINS. Avaliar se há <strong>IRRF</strong> (serviço profissional) e se há <strong>INSS 11%/3,5%</strong> (cessão de mão de obra/empreitada). Verificar <strong>ISS retido</strong> pela prefeitura.</li>
          <li><strong>Prestador Simples → Órgão público:</strong> a Administração costuma <em>reter</em> (IR + CSLL/PIS/COFINS) salvo <strong>dispensa</strong> comprovada para optante (apresentar modelo de declaração). <em>Confirmar rotina do órgão.</em></li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <h4>Checklist Simples (Tomador)</h4>
      <ol>
        <li>Prestador é <strong>Simples</strong>? Solicitar <strong>declaração de optante</strong> atualizada.</li>
        <li>Serviço envolve <strong>cessão de mão de obra/empreitada</strong>? Se sim: avaliar <strong>INSS 11%</strong> (ou <strong>3,5%</strong> quando CPRB for aplicável ao prestador).</li>
        <li>Serviço é <strong>profissional</strong> (lista do IRRF)? Avaliar <strong>IRRF</strong>.</li>
        <li>Legislação municipal exige <strong>ISS retido</strong>? Aplicar regras locais.</li>
      </ol>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Lucro Presumido — Regras, Retenção, Deduções</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Como funciona</h3></div>
        <ul>
          <li>Base de IRPJ/CSLL por <strong>percentuais de presunção</strong> sobre a receita (ex.: <strong>IRPJ: 8% comércio/indústria; 32% serviços</strong> em geral). Para CSLL: <strong>12%</strong> (comércio/indústria) e <strong>32%</strong> (serviços) — há especificidades por atividade.</li>
          <li><strong>PIS/COFINS cumulativos</strong> (em regra): <strong>PIS 0,65%</strong> e <strong>COFINS 3%</strong> sobre a receita, sem créditos.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções comuns no Presumido</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong> retidos pelo tomador em <strong>determinados serviços</strong> (base: valor bruto). Há hipóteses de <em>dispensa</em> e exceções na IN aplicável.</li>
          <li><strong>IRRF</strong> em serviços profissionais (alíquota típica <strong>1,5%</strong>), com códigos DARF próprios.</li>
          <li><strong>INSS 11%</strong> (ou <strong>3,5%</strong> quando aplicável a desoneração/CPRB) em <strong>cessão de mão de obra/empreitada</strong> listadas na IN previdenciária (ex.: limpeza, manutenção, construção, apoio administrativo, alguns serviços de TI com alocação, etc.).</li>
          <li><strong>ISS retido</strong> conforme regras do município do tomador.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções</h3></div>
        <p>Não há dedução de despesas para reduzir base presumida (salvo regras específicas). Em compensações federais, as <strong>retenções sofridas</strong> (IRRF e CSRF 4,65%) normalmente podem ser <strong>compensadas</strong> com tributos de mesma espécie na apuração.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo (Presumido)</h3></div>
        <p>Serviço de consultoria (PJ no Presumido) emite NF de R$ 100.000,00:</p>
        <ul>
          <li>Tomador retém <strong>4,65%</strong> (R$ 4.650,00) de CSLL/PIS/COFINS e <strong>IRRF 1,5%</strong> (R$ 1.500,00), se caracterizado como serviço profissional.</li>
          <li>Se for <strong>cessão de mão de obra</strong>, tomador retém <strong>INSS 11%</strong> (R$ 11.000,00) — ou <strong>3.500,00</strong> se o prestador estiver sob CPRB com retenção reduzida.</li>
          <li>Município pode reter <strong>ISS</strong> (ex.: 5%).</li>
          <li>Prestador compensa retenções conforme espécie/códigos na apuração.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Lucro Real — Regras, Retenção, Deduções/Créditos</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Como funciona</h3></div>
        <ul>
          <li><strong>IRPJ/CSLL</strong> apurados sobre o <strong>lucro contábil ajustado</strong> por adições/exclusões (regras fiscais).</li>
          <li><strong>PIS/COFINS não cumulativos</strong>: alíquotas <strong>1,65%</strong> (PIS) e <strong>7,6%</strong> (COFINS) com <strong>créditos</strong> sobre insumos, energia, aluguéis, depreciação, etc., conforme hipóteses legais.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções comuns no Real</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong> na fonte em serviços abrangidos.</li>
          <li><strong>IRRF</strong> (ex.: 1,5% serviços profissionais).</li>
          <li><strong>INSS 11%/3,5%</strong> em cessão de mão de obra/empreitada.</li>
          <li><strong>ISS retido</strong> conforme legislação municipal.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções/Créditos (Real)</h3></div>
        <ul>
          <li><strong>Despesas dedutíveis</strong> (IRPJ/CSLL) conforme regras de dedutibilidade.</li>
          <li><strong>Créditos de PIS/COFINS</strong> sobre <em>insumos</em> e demais hipóteses legais (não cumulativo), reduzindo o valor a pagar.</li>
          <li>Retenções sofridas (IRRF e 4,65%) podem ser <strong>compensadas</strong> na apuração do tributo correspondente.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo (Real)</h3></div>
        <p>Prestadora de serviços de engenharia (Lucro Real) fatura R$ 200.000,00:</p>
        <ul>
          <li>Tomador retém <strong>4,65%</strong> (R$ 9.300,00) e, se serviço profissional, <strong>IRRF 1,5%</strong> (R$ 3.000,00).</li>
          <li>Se caracterizar <strong>cessão de mão de obra</strong>, reter <strong>INSS 11%</strong> (R$ 22.000,00) — ou <strong>R$ 7.000,00</strong> se CPRB com retenção reduzida.</li>
          <li>Prestadora aproveita <strong>créditos de PIS/COFINS</strong> sobre insumos pertinentes e compensa as retenções.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Retenções — Detalhamento Rápido (Operacional)</h2>
    <div class="shortcut-grid">

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>CSLL/PIS/COFINS (4,65%)</h3></div>
        <ul>
          <li>Aplicável a <strong>pagamentos por PJ a PJ</strong> pela prestação de determinados <strong>serviços</strong>.</li>
          <li><strong>Base</strong>: valor bruto da NF (serviço).</li>
          <li><strong>Rateio</strong>: CSLL 1%, PIS 0,65%, COFINS 3%.</li>
          <li><strong>Dispensa</strong>: prestador <strong>Simples</strong> (com declaração), valores muito pequenos (regra dos R$ 10,00 a reter), imunes/isentas conforme IN, e outras hipóteses específicas.</li>
          <li><strong>Comprovação</strong>: guardar <strong>declaração do Simples</strong> do prestador no dossiê do pagamento.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>IRRF (Serviços Profissionais)</h3></div>
        <ul>
          <li>Geralmente <strong>1,5%</strong> sobre o serviço para atividades de natureza profissional (advocacia, consultoria, auditoria, engenharia, etc.), conforme lista do Regulamento do IR.</li>
          <li><strong>Exceções/dispensas</strong>: há hipóteses na legislação e em rotinas dos entes públicos/privados; atenção a códigos DARF.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>INSS 11% (ou 3,5% CPRB)</h3></div>
        <ul>
          <li>Quando houver <strong>cessão de mão de obra/empreitada</strong> nos serviços listados (limpeza, conservação, manutenção, construção, apoio administrativo, digitação/digitalização, preparo de dados, vigilância presencial etc.).</li>
          <li><strong>Base</strong>: valor bruto da NF, com hipóteses de exclusão de materiais/equipamentos quando expressamente destacadas e aceitas pela norma.</li>
          <li><strong>Redução para 3,5%</strong>: quando o prestador estiver <strong>desonerado (CPRB)</strong> nos períodos em que a lei definir.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>ISS/ICMS — Substituição/Retenções</h3></div>
        <ul>
          <li><strong>ISS</strong>: inúmeras capitais exigem <strong>retenção</strong> pelo tomador para determinados serviços e/ou quando prestador é de outro município.</li>
          <li><strong>ICMS-ST</strong>: regime de substituição tributária (antecipação/retido na fonte) por produto/NCM e convênios; <strong>independe do regime de IRPJ/CSLL</strong>.</li>
        </ul>
      </div>

    </div>
    <div class="warning-box">
      <h4>Boas Práticas</h4>
      <ul>
        <li>Sempre conferir <strong>natureza do serviço</strong> x listas de retenção (IRRF/INSS) e hipóteses da IN de CSRF (4,65%).</li>
        <li>Guardar <strong>declarações e evidências</strong> (optante do Simples, imunidade/isenção, CPRB, etc.).</li>
        <li>Usar <strong>códigos DARF/GPS</strong> corretos e observar <strong>mínimos de retenção</strong>.</li>
      </ul>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Migração entre Regimes — Efeitos Práticos</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Quando e como trocar</h3></div>
        <ul>
          <li><strong>Simples → Presumido/Real</strong>: por excesso de receita, vedação ou por opção estratégica. Efeitos variam conforme o momento e o percentual do excesso (até 20% vs. acima de 20%).</li>
          <li><strong>Presumido ↔ Real</strong>: opção/anualidade (a opção vale para <strong>todo o ano-calendário</strong>), respeitados requisitos legais (ex.: obrigatoriedade do Real em alguns setores, como instituições financeiras).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>O que muda na prática</h3></div>
        <ul>
          <li><strong>Retenções</strong>: continuam existindo; no Simples tende a haver <em>dispensa</em> de 4,65% (com declaração). No Presumido/Real, 4,65% é comum. IRRF/INSS dependem da natureza do serviço.</li>
          <li><strong>PIS/COFINS</strong>: no Real (não cumulativo) surgem <strong>créditos</strong> relevantes; no Presumido são cumulativos (0,65%/3%) e <strong>sem créditos</strong>; no Simples é via DAS.</li>
          <li><strong>IRPJ/CSLL</strong>: no Presumido usa-se <strong>percentuais</strong> de presunção; no Real, <strong>lucro contábil ajustado</strong>.</li>
          <li><strong>Compliance</strong>: maior complexidade no Real (EFD-Contribuições com créditos, LALUR/LACS, controles de insumo, etc.).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo de migração</h3></div>
        <p>Empresa de serviços (consultoria) ultrapassou R$ 4,8 mi em 18% no ano (até 20%).</p>
        <ul>
          <li>Permanece no Simples até <strong>31/12</strong>, mas ficará <strong>excluída</strong> no ano seguinte e precisará optar por Presumido ou Real.</li>
          <li>Ao migrar para Presumido, passará a <strong>sofrer retenção 4,65%</strong> (salvo exceções) e possivelmente <strong>IRRF</strong> em serviços profissionais; avaliar <strong>INSS 11%/3,5%</strong> se houver cessão de mão de obra.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Documentos/rotinas ao migrar</h3></div>
        <ul>
          <li>Atualizar <strong>cadastros</strong> junto a clientes (informar novo regime para reter/dispensar o que couber).</li>
          <li>Revisar contratos para <strong>preço líquido</strong> x <strong>bruto</strong>, prevendo retenções.</li>
          <li>Adequar a <strong>escrituração</strong> (EFD-Contribuições, créditos no Real, etc.).</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Modelos & Tabelas Úteis</h2>
    <div class="shortcut-grid">

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Modelo — Declaração de Optante (Dispensa 4,65%)</h3></div>
        <p>“Declaramos, para fins do art. aplicável, que a <strong>[Razão Social • CNPJ]</strong> é <strong>optante pelo Simples Nacional</strong> na data deste documento e, por isso, encontra-se <strong>dispensada da retenção na fonte</strong> de CSLL, PIS/Pasep e COFINS, nos termos da legislação. Comprometemo-nos a comunicar imediatamente qualquer alteração de nosso enquadramento.”</p>
        <p class="note">Anexar: comprovante de opção (Portal do Simples) quando solicitado. Arquivar no dossiê do pagamento.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Tabela-guia (resumo operacional)</h3></div>
        <table style="width:100%; border-collapse:collapse; font-size:0.95em;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Tributo</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Quando reter</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Alíquota/base</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSLL/PIS/COFINS</td>
              <td>Serviços a PJ (lista da IN)</td>
              <td>4,65% sobre valor do serviço</td>
              <td>Dispensa p/ prestador Simples (com declaração) e outras hipóteses; mínimo a reter; códigos DARF específicos.</td>
            </tr>
            <tr>
              <td>IRRF</td>
              <td>Serviços de natureza profissional</td>
              <td>Ex.: 1,5% sobre serviço</td>
              <td>Ver lista do RIR; exceções; códigos DARF.</td>
            </tr>
            <tr>
              <td>INSS</td>
              <td>Cessão de mão de obra/empreitada</td>
              <td>11% (ou 3,5% CPRB)</td>
              <td>Serviços listados na IN previdenciária; exclusões de materiais/equipamentos conforme regra.</td>
            </tr>
            <tr>
              <td>ISS</td>
              <td>Conforme lei municipal</td>
              <td>Alíquota local</td>
              <td>Tomador pode ser responsável; atenção a retenções de prestadores de fora do município.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Percentuais (Presunção)</h3></div>
        <ul>
          <li><strong>IRPJ (exemplos usuais):</strong> 8% (comércio/indústria), 32% (serviços em geral).</li>
          <li><strong>CSLL (exemplos usuais):</strong> 12% (comércio/indústria), 32% (serviços em geral).</li>
          <li><strong>PIS/COFINS (Presumido):</strong> 0,65% / 3% — <em>cumulativos</em> (sem créditos).</li>
          <li><strong>PIS/COFINS (Real):</strong> 1,65% / 7,6% — <em>não cumulativos</em> (com créditos).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Erros comuns</h3></div>
        <ul>
          <li>Reter 4,65% de prestador <strong>Simples</strong> sem checar a <strong>declaração de dispensa</strong>.</li>
          <li>Não reter <strong>INSS</strong> quando há <strong>cessão de mão de obra</strong> claramente configurada no contrato/execução.</li>
          <li>Aplicar <strong>IRRF</strong> fora dos serviços profissionais de fato (ou usar código DARF incorreto).</li>
          <li>Deixar de compensar retenções já sofridas na apuração do tributo correspondente.</li>
        </ul>
      </div>

    </div>
    <div class="warning-box">
      <h4>Observação Final</h4>
      <p>Em caso de dúvida sobre a natureza do serviço, peça o <strong>contrato</strong> e/ou descreva a execução para checar o <strong>enquadramento em listas de retenção</strong> (IRRF/INSS) e nas hipóteses da IN 4,65%. Para pendências, envolva o time fiscal/contábil.</p>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Referências Legais (para consulta)</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card full-width">
        <div class="shortcut-header"><h3>Principais diplomas</h3></div>
        <ul>
          <li><strong>LC 123/2006</strong> (Simples Nacional) e <strong>Resolução CGSN 140/2018</strong> (procedimentos, exclusões, prazos, sublimites).</li>
          <li><strong>Lei 10.637/2002</strong> e <strong>Lei 10.833/2003</strong> (PIS/COFINS, não cumulativo, e regras da retenção 4,65%).</li>
          <li><strong>IN SRF 459/2004</strong> e <strong>IN RFB 1.234/2012</strong> (retenções CSLL/PIS/COFINS/IR na fonte, dispensa para Simples, mínimos, DARF).</li>
          <li><strong>Lei 8.212/1991 art. 31</strong> e <strong>IN RFB 971/2009</strong> (retenção de <strong>INSS</strong> em cessão de mão de obra/empreitada); regras de <strong>CPRB</strong> (Lei 12.546/2011 e atos correlatos) para <strong>retenção 3,5%</strong> quando aplicável.</li>
          <li><strong>RIR/2018 (Decreto 9.580/2018)</strong> (IRRF serviços profissionais).</li>
          <li><strong>Legislação municipal</strong> (ISS retido) e convênios/legislação estadual (ICMS-ST).</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
    .shortcuts-section { margin-bottom: 24px; }
    .shortcut-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin: 25px 0; }
    .shortcut-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #2196F3; position: relative; }
    .shortcut-card.full-width { grid-column: 1 / -1; }
    .shortcut-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .shortcut-header h3 { margin: 0; color: #2196F3; font-size: 1.2em; }
    .note { font-size: 0.9em; color: #777; font-style: italic; margin-top: 10px; }
    .warning-box { border-left: 4px solid #ff9800; background-color: #fff8e1; padding: 15px; margin: 20px 0; }
    .warning-box h4 { margin-top: 0; color: #ff9800; }
    table th, table td { padding: 8px 6px; }
  </style>

  <script>
    // Mantém o mesmo comportamento visual do seu artigo de atalhos (feedback ao clicar em botões/copiar etc.)
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('copy-btn') || e.target.closest('.copy-btn')) {
        const btn = e.target.classList.contains('copy-btn') ? e.target : e.target.closest('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copiado!';
        btn.style.background = '#4caf50';
        btn.style.color = 'white';
        btn.style.borderColor = '#4caf50';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }
    });
  <\/script>
  `}]},Ka={id:"esocial",title:"eSocial",description:"Módulo eSocial.",icon:`< svg class="module-icon" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 24 24" >
  <path fill="currentColor" d="M13.138.053a12.018 12.018 0 0 0-9.646 3.481A12.014 12.014 0 0 0 .937 16.651a12.014 12.014 0 0 0 11.162 7.348a2.275 2.275 0 1 0-.037-4.549a7.438 7.438 0 0 1-6.932-4.562a7.438 7.438 0 0 1 1.587-8.145a7.437 7.437 0 0 1 12.378 3.014H12.05a2.275 2.275 0 1 0 0 4.55h9.674A2.275 2.275 0 0 0 24 12.04A12.014 12.014 0 0 0 16.597.914a11.962 11.962 0 0 0-3.459-.86Z" />
</svg > `,topics:[{id:"esocial-guia-completo",title:"eSocial: Guia Completo do Sistema de Escrituração Digital",description:"Tudo sobre a plataforma federal que unificou as obrigações trabalhistas, fiscais e previdenciárias no Brasil.",group:"eSocial",tags:["eSocial","Introdução"],content:`
  < div class="header-banner" style = "background: #e3f2fd; color: white; padding: 30px; border-radius: 8px; margin-bottom: 40px; text-align: center;" >
      <h1 style="margin: 0; font-size: 2.2em;">eSocial</h1>
      <p style="margin: 10px 0 0; font-size: 1.2em;">Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas</p>
    </div >

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">1. Fundamentação Legal e Histórico</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Criação e Marco Legal</h3>
        <ul style="padding-left: 25px; line-height: 1.6;">
          <li><strong>Data de fundação:</strong> 11 de dezembro de 2014</li>
          <li><strong>Órgãos envolvidos:</strong> Receita Federal, INSS, Caixa Econômica Federal e Ministério do Trabalho</li>
          <li><strong>Base tecnológica:</strong> Sistema Público de Escrituração Digital (SPED)</li>
          <li><strong>Obrigatoriedade geral:</strong> 8 de janeiro de 2018 (com exceção inicial para eventos de SST)</li>
        </ul>
        
        <div style="background: #f0f7ff; padding: 20px; border-left: 4px solid #0056b3; margin-top: 20px;">
          <h4 style="color: #00000; margin-top: 0;">Principais Objetivos</h4>
          <ul style="padding-left: 25px;">
            <li>Eliminar a multiplicidade de declarações</li>
            <li>Reduzir custos de compliance para empresas</li>
            <li>Aprimorar a fiscalização governamental</li>
            <li>Garantir direitos trabalhistas e previdenciários</li>
          </ul>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">2. Cronograma Detalhado de Implantação</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Fases de Implementação</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0;">
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 1 - Eventos de Tabela</h4>
            <p>Informações cadastrais do empregador</p>
          </div>
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 2 - Eventos Não Periódicos</h4>
            <p>Admissões, afastamentos e demissões</p>
          </div>
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 3 - Eventos Periódicos</h4>
            <p>Folhas de pagamento</p>
          </div>
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 4 - Eventos de SST</h4>
            <p>Saúde e Segurança no Trabalho</p>
          </div>
        </div>
      </div>

      <h3 style="color: #00000;">Cronograma Específico para SST (Portaria SEPRT/RFB/ME nº 71/2021)</h3>
      <div style="overflow-x: auto; margin: 30px 0;">
        <table style="width: 100%; border-collapse: collapse; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <thead>
            <tr style="background-color: #0056b3; color: white;">
              <th style="padding: 15px; text-align: left; width: 10%;">Grupo</th>
              <th style="padding: 15px; text-align: left; width: 60%;">Perfil das Empresas</th>
              <th style="padding: 15px; text-align: left; width: 30%;">Data Limite</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 15px;">1</td>
              <td style="padding: 15px;">Faturamento anual superior a R$78 milhões</td>
              <td style="padding: 15px;">13/10/2021</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 15px;">2</td>
              <td style="padding: 15px;">Entidades com faturamento até R$78 milhões (não optantes pelo Simples Nacional)</td>
              <td style="padding: 15px;">10/01/2022</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 15px;">3</td>
              <td style="padding: 15px;">Optantes pelo Simples Nacional, empregadores PF (exceto doméstico), produtor rural PF e entidades sem fins lucrativos</td>
              <td style="padding: 15px;">10/01/2022</td>
            </tr>
            <tr>
              <td style="padding: 15px;">4</td>
              <td style="padding: 15px;">Órgãos públicos e organizações internacionais</td>
              <td style="padding: 15px;">11/07/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div style="background: #fff8e1; padding: 20px; border-left: 4px solid #ff9800; margin: 30px 0;">
        <h4 style="color: #e65100; margin-top: 0;">Situação Atual</h4>
        <p>Desde 2022, a obrigatoriedade é universal para todas as empresas, com exceção de alguns órgãos públicos que possuem método de transmissão diferenciado.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">3. eSocial Simplificado (S-1.0)</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Principais Mudanças</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin: 30px 0;">
          <div style="border-left: 4px solid #4caf50; padding-left: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Redução de Burocracia</h4>
            <ul style="padding-left: 20px;">
              <li>Eliminação de campos duplicados</li>
              <li>Substituição da RAIS e CAGED</li>
              <li>Simplificação de layouts</li>
            </ul>
          </div>
          
          <div style="border-left: 4px solid #4caf50; padding-left: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Benefícios</h4>
            <ul style="padding-left: 20px;">
              <li>Menor carga de trabalho para empresas</li>
              <li>Redução de erros no preenchimento</li>
              <li>Processamento mais rápido pelo governo</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h4 style="color: #2e7d32; margin-top: 0;">Impacto na Rotina</h4>
          <p>As empresas passaram a enviar aproximadamente 30% menos informações, mantendo toda a qualidade dos dados necessários para fiscalização.</p>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">4. Impacto nas Relações de Trabalho</h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin: 30px 0;">
        <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px;">
          <h3 style="color: #00000; margin-top: 0;">Para os Trabalhadores</h3>
          <ul style="padding-left: 25px; line-height: 1.6;">
            <li><strong>Transparência:</strong> Registro imediato de admissões, alterações salariais e afastamentos</li>
            <li><strong>Histórico unificado:</strong> Facilita comprovação para aposentadoria especial</li>
            <li><strong>Garantia de direitos:</strong> FGTS, INSS e seguro-desemprego com menos inconsistências</li>
            <li><strong>Banco de dados:</strong> Informações sobre exames médicos, condições de trabalho e acidentes</li>
          </ul>
        </div>
        
        <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px;">
          <h3 style="color: #00000; margin-top: 0;">Para as Empresas</h3>
          <ul style="padding-left: 25px; line-height: 1.6;">
            <li><strong>Fiscalização integrada:</strong> Cruzamento automático de informações entre órgãos</li>
            <li><strong>Combate à sonegação:</strong> Identificação mais eficiente de irregularidades</li>
            <li><strong>Redução de custos:</strong> Eliminação de múltiplos envios para diferentes sistemas</li>
            <li><strong>Segurança jurídica:</strong> Registro oficial de todas as movimentações trabalhistas</li>
          </ul>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">5. Dados Coletados e LGPD</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Categorias de Informações</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; margin: 30px 0;">
          <div>
            <h4 style="color: #00000; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Dados Pessoais</h4>
            <ul style="padding-left: 20px;">
              <li>CPF</li>
              <li>Nome completo</li>
              <li>Data de nascimento</li>
              <li>Endereço</li>
            </ul>
          </div>
          
          <div>
            <h4 style="color: #00000; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Dados Contratuais</h4>
            <ul style="padding-left: 20px;">
              <li>Data de admissão</li>
              <li>Cargo e função</li>
              <li>Salário e benefícios</li>
              <li>Jornada de trabalho</li>
            </ul>
          </div>
          
          <div>
            <h4 style="color: #00000; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Dados de SST</h4>
            <ul style="padding-left: 20px;">
              <li>Exames médicos (ASO)</li>
              <li>Comunicação de Acidentes (CAT)</li>
              <li>Condições ambientais</li>
              <li>Exposição a agentes nocivos</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f3e5f5; padding: 20px; border-left: 4px solid #9c27b0; border-radius: 8px; margin-top: 30px;">
          <h4 style="color: #7b1fa2; margin-top: 0;">Conformidade com a LGPD</h4>
          <p>O tratamento dos dados no eSocial segue rigorosamente os princípios da Lei Geral de Proteção de Dados (LGPD):</p>
          <ul style="padding-left: 25px;">
            <li>Finalidade específica e legítima</li>
            <li>Necessidade e adequação</li>
            <li>Transparência</li>
            <li>Segurança e prevenção</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">6. Integração de Sistemas</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Eventos de SST Transmitidos</h3>
        <p style="margin-bottom: 25px;">Os sistemas de gestão de SST modernos realizam a transmissão automática dos seguintes eventos para o eSocial:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin: 30px 0;">
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2210</h4>
            <p><strong>Comunicação de Acidente de Trabalho</strong></p>
            <p style="font-size: 0.95em;">Deve ser enviado em até 1 dia útil após o acidente, contendo dados do acidentado, tipo de lesão e CID.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2220</h4>
            <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
            <p style="font-size: 0.95em;">Registra todos os exames ocupacionais realizados, vinculados ao PCMSO da empresa.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2221</h4>
            <p><strong>Exame Toxicológico</strong></p>
            <p style="font-size: 0.95em;">Obrigatório para motoristas profissionais (Lei 13.103/2015). Resultados positivos geram bloqueio automático.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2240</h4>
            <p><strong>Condições Ambientais do Trabalho</strong></p>
            <p style="font-size: 0.95em;">Comunica os riscos ambientais identificados no PGR e as medidas de controle adotadas.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-3000</h4>
            <p><strong>Exclusão de Eventos</strong></p>
            <p style="font-size: 0.95em;">Utilizado para tornar sem efeito (excluir) um evento que foi enviado incorretamente.</p>
          </div>
        </div>
      </div>
    </section>
`},{id:"eventos-sst-esocial",title:"Eventos de SST no eSocial",description:"Material sobre os eventos S-2210, S-2220, S-2221 e S-2240 no eSocial, com regras, observações e tabela completa de obrigatoriedade por categoria.",group:"Eventos do eSocial - SST",content:`
  < div class="welcome-banner" >
    <h1>Eventos de SST no eSocial</h1>
    <p>Os eventos de Segurança e Saúde no Trabalho (SST) no eSocial substituem formulários tradicionais como a CAT e o PPP, garantindo conformidade legal e registro eletrônico unificado.</p>
  </div >

  <section class="core-concepts">
    <h2>Definição Completa</h2>
    <div class="concept-card">
      <p>São eventos obrigatórios para registro de informações trabalhistas relacionadas à saúde e segurança:</p>
      <ul>
        <li><strong>S-2210</strong> - Comunicação de Acidente de Trabalho (Substitui a CAT física)</li>
        <li><strong>S-2220</strong> - Monitoramento da Saúde do Trabalhador (Equivalente ao PPP)</li>
        <li><strong>S-2221</strong> - Exame Toxicológico (Obrigatório para motoristas profissionais)</li>
        <li><strong>S-2240</strong> - Condições Ambientais do Trabalho (Base para aposentadoria especial)</li>
      </ul>
      <div class="purpose-grid">
        <div class="purpose-card">
          <h4>Finalidade Principal</h4>
          <ul>
            <li>- Substituição de formulários físicos (CAT, PPP)</li>
            <li>- Histórico digitalizado de exposição a riscos</li>
            <li>- Base para financiamento da aposentadoria especial</li>
            <li>- Integração com demais eventos do eSocial</li>
          </ul>
        </div>
        <div class="purpose-card">
          <h4>Impactos Jurídicos</h4>
          <ul>
            <li>- Eliminação de autuações por falta de PPP/CAT</li>
            <li>- Comprovação de conformidade com NRs</li>
            <li>- Redução de passivos trabalhistas</li>
            <li>- Fundamentação para defesas judiciais</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="event-grid">
  
    <div class="event-card hover-info" data-hover="Prazo: 1 dia útil após o acidente">
      <h4>S-2210</h4>
      <p><strong>Comunicação de Acidente de Trabalho</strong></p>
      <ul>
        <li>Substitui a CAT física (Comunicação de Acidente de Trabalho)</li>
        <li>Obrigatório para todos os tipos de acidente (típico, de trajeto, doença ocupacional)</li>
        <li>Informações essenciais:
          <ul>
            <li>- Data, hora e local do acidente</li>
            <li>- Parte do corpo afetada</li>
            <li>- CID-10 relacionado</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Obrigatoriedade: Imediata</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Inclui ASO, exames complementares e histórico médico ocupacional completo">
      <h4>S-2220</h4>
      <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
      <ul>
        <li>Registra todo o ciclo de exames ocupacionais</li>
        <li>Substitui o Perfil Profissiográfico Previdenciário (PPP)</li>
        <li>Tipos de exames abrangidos:
          <ul>
            <li>- Admissional, periódico, retorno ao trabalho</li>
            <li>- Mudança de função, demissional</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Prazo: 15º dia do mês subsequente</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Custos: Empresa arca com todos os exames | Periodicidade: A cada 2,5 anos">
      <h4>S-2221</h4>
      <p><strong>Exame Toxicológico</strong></p>
      <ul>
        <li>Exigido pela Lei 13.103/2015 (Lei do Caminhoneiro)</li>
        <li>Categorias obrigatórias:
          <ul>
            <li>- Motoristas profissionais (CNH C, D e E)</li>
            <li>- Operadores de máquinas perigosas</li>
          </ul>
        </li>
        <li>Consequências de resultado positivo:
          <ul>
            <li>- Afastamento imediato das atividades</li>
            <li>- Bloqueio no sistema até regularização</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Amostra: Cabelo/Unha (6 meses de rastreamento)</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Tabela 24 do eSocial com 1.200+ agentes nocivos | Atualização trimestral obrigatória">
      <h4>S-2240</h4>
      <p><strong>Condições Ambientais do Trabalho</strong></p>
      <ul>
        <li>Mapeamento completo de agentes:
          <ul>
            <li>- Físicos (ruído, calor, vibração)</li>
            <li>- Químicos (fumos, poeiras, gases)</li>
            <li>- Biológicos (vírus, bactérias, fungos)</li>
          </ul>
        </li>
        <li>Informações sobre proteção:
          <ul>
            <li>- EPIs fornecidos</li>
            <li>- EPCs instalados</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Base legal: Anexo IV do Decreto 3.048/99</span>
      </div>
    </div>
  </section>

  <section class="important-info">
    <h2>Observações Técnicas Críticas</h2>
    <div class="notes-grid">
      <div class="note-card">
        <h4>Regras Gerais</h4>
        <ul>
          <li>• Estagiários (901) e aprendizes (1401) estão isentos</li>
          <li>• Servidores públicos (RPPS): obrigatório apenas se previsto em norma específica</li>
          <li>• Empresas sem exposição a riscos: envio do S-2240 com declaração negativa</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Integração de Dados</h4>
        <ul>
          <li>• S-2220 utiliza dados do S-2240 para compor o histórico</li>
          <li>• S-2210 aciona automaticamente o S-2220 quando necessário</li>
          <li>• Eventos interligados: S-2190, S-2300 e S-2400</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Responsabilidades</h4>
        <ul>
          <li>• Médico coordenador: validação técnica dos eventos</li>
          <li>• RH: envio dentro dos prazos legais</li>
          <li>• SESMT: fornecimento de dados técnicos</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="obligations-table">
    <h2>Obrigatoriedade por Categoria de Trabalhador</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Categoria</th>
            <th>S-2210</th>
            <th>S-2220</th>
            <th>S-2221</th>
            <th>S-2240</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>101</td><td>Empregado - CLT</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>102</td><td>Trabalhador Rural</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>103</td><td>Doméstico</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
          <tr><td>104</td><td>Aprendiz</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
          <tr><td>105</td><td>Avulso</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>106</td><td>Temporário</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>111</td><td>Cooperado</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>201</td><td>Servidor Público</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>301</td><td>Empresário</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>401</td><td>Dirigente</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>701</td><td>Autônomo</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>721</td><td>Dirigente Sindical</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>731</td><td>Trab. Cooperado</td><td>Facultativo</td><td>Facultativo</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>901</td><td>Estagiário</td><td>Não</td><td>Não</td><td>Não</td><td>Não</td></tr>
          <tr><td>1401</td><td>Aprendiz</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-notes">
      <p>* Condicional: Obrigatório apenas para motoristas profissionais (Lei 13.103/2015)</p>
      <p>Fonte: Instrução Normativa RFB nº 2.100/2022 e Manual do eSocial v. 1.7</p>
    </div>
  </section>

  <section class="penalties-section">
    <h2>Consequências do Descumprimento</h2>
    <div class="penalties-grid">
      <div class="penalty-card">
        <h4>Multas Administrativas</h4>
        <ul>
          <li>• Atraso no S-2210: R$ 1.000,00 + R$ 100,00/dia</li>
          <li>• Omisssão do S-2240: Até R$ 8.257,40 por trabalhador</li>
          <li>• Erros recorrentes: Inclusão no "Cadastro de Empresas Infratoras"</li>
        </ul>
      </div>
      <div class="penalty-card">
        <h4>Riscos Trabalhistas</h4>
        <ul>
          <li>• Invalidação de demissões por justa causa</li>
          <li>• Reversão do ônus da prova em ações judiciais</li>
          <li>• Perda de direito a recursos administrativos</li>
        </ul>
      </div>
      <div class="penalty-card">
        <h4>Impactos Previdenciários</h4>
        <ul>
          <li>• Perda do direito à aposentadoria especial</li>
          <li>• Reclassificação de grau de incapacidade</li>
          <li>• Cobrança retroativa de diferenças de GFIP</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    :root {
      --primary: #2196F3;
      --secondary: #0D47A1;
      --accent: #0D47A1
      --light: #e3f2fd;
      --dark: #0d2b4e;
      --gray: #f5f5f5;
      --text: #333;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--text);
      padding: 0 20px 40px;
      background-color: #f9fbfd;
    }
    
    h1, h2, h3, h4 {
      color: var(--dark);
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 2.2rem;
      border-bottom: 3px solid var(--accent);
      padding-bottom: 10px;
      margin-top: 0;
    }
    
    h2 {
      font-size: 1.8rem;
      margin: 2rem 0 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--primary);
    }
    
    h3 {
      font-size: 1.4rem;
      margin: 1.5rem 0 1rem;
    }
    
    h4 {
      font-size: 1.2rem;
      margin: 1.2rem 0 0.8rem;
      color: var(--secondary);
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    ul {
      padding-left: 1.5rem;
      margin-bottom: 1.2rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    /* Banner */
    .welcome-banner {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      margin: 20px 0 30px;
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .welcome-banner h1 {
      color: white;
      border-bottom: none;
    }
    
    .welcome-banner p {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    /* Cards */
    .concept-card, 
    .event-card, 
    .purpose-card,
    .note-card,
    .penalty-card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.08);
      margin-bottom: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-left: 4px solid var(--primary);
    }
    
    .concept-card {
      background: linear-gradient(to right, white 80%, #e8f4ff);
    }
    
    .event-card:hover, 
    .purpose-card:hover,
    .note-card:hover,
    .penalty-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    }
    
    /* Grids */
    .purpose-grid,
    .notes-grid,
    .penalties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin: 25px 0;
    }
    
    .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin: 30px 0;
    }
    
    /* Event Card Specific */
    .event-card {
      position: relative;
      overflow: hidden;
    }
    
    .event-card:hover::after {
      content: attr(data-hover);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--accent);
      color: white;
      padding: 12px;
      font-size: 0.9rem;
      transform: translateY(0);
      transition: transform 0.3s ease;
      z-index: 10;
    }
    
    .event-footer {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px dashed #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .tag {
      background: var(--light);
      color: var(--secondary);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    /* Table */
    .obligations-table {
      margin: 40px 0 30px;
    }
    
    .table-container {
      overflow-x: auto;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 800px;
      background: white;
    }
    
    th, td {
      padding: 14px 16px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    
    thead {
      background: var(--primary);
      color: white;
    }
    
    thead th {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
    
    tbody tr:nth-child(even) {
      background-color: #f8fbff;
    }
    
    tbody tr:hover {
      background-color: #edf7ff;
    }
    
    .table-notes {
      margin-top: 15px;
      font-size: 0.9rem;
      color: #666;
      font-style: italic;
    }
    
    /* Responsividade */
    @media (max-width: 768px) {
      .welcome-banner {
        padding: 20px;
      }
      
      .event-grid,
      .purpose-grid,
      .notes-grid,
      .penalties-grid {
        grid-template-columns: 1fr;
      }
      
      .concept-card, 
      .event-card {
        padding: 20px;
      }
    }
  </style>
`},{id:"ecac-esocial-advanced-guide",title:"e-CAC e eSocial",description:"Aspectos do e-CAC e sua integração estratégica com o eSocial.",group:"eSocial",tags:["eSocial","Introdução"],content:`
  < div class="welcome-banner" >
      <h1>Domine o e-CAC: Guia Completo para Profissionais de SST</h1>
      <p>Este guia aprofundado explica o e-CAC como pilar fundamental para a gestão das obrigações do eSocial, com ênfase nos processos de procuração eletrônica e certificação digital.</p>
    </div >

    <section class="core-concepts">
      <h2>O e-CAC em Detalhe: Centro Virtual de Atendimento ao Contribuinte</h2>
      <div class="concept-card">
        <div class="definition-box">
          <p>O <strong>e-CAC</strong> (Centro Virtual de Atendimento ao Contribuinte) é a principal plataforma digital da Receita Federal para:</p>
          <ul>
            <li>Centralizar todos os serviços fiscais em um único ambiente seguro</li>
            <li>Eliminar a necessidade de deslocamento físico às unidades da RFB</li>
            <li>Garantir autenticidade e validade jurídica através de certificação digital</li>
          </ul>
        </div>
        
        <h3>Serviços Essenciais do e-CAC para Operações SST</h3>
        <div class="service-grid">
          <div class="service-item">
            <h4>Consulta Fiscal Integrada</h4>
            <p>Verificação em tempo real de débitos e pendências tributárias vinculadas a CPF/CNPJ</p>
          </div>
          <div class="service-item">
            <h4>Gestão de Declarações</h4>
            <p>Envio e retificação de DCTF, EFD-Reinf e outras obrigações acessórias</p>
          </div>
          <div class="service-item">
            <h4>Regularização Fiscal</h4>
            <p>Emissão de DARF e opções de parcelamento de débitos</p>
          </div>
          <div class="service-item highlight">
            <h4>Procuração Eletrônica</h4>
            <p>Cadastro e gestão de autorizações para terceiros atuarem em nome da empresa</p>
          </div>
          <div class="service-item">
            <h4>Comunicação Digital</h4>
            <p>Acesso a documentos oficiais transmitidos via SPED e eSocial</p>
          </div>
        </div>
      </div>
    </section>

    <section class="integration-section">
      <h2>Integração Estratégica: e-CAC como Gateway do eSocial</h2>
      <div class="integration-card">
        <div class="integration-diagram">
          <div class="diagram-node">
            <h4>e-CAC</h4>
            <p>Portal de Controle de Acessos</p>
            <div class="node-arrow">→</div>
          </div>
          <div class="diagram-connector"></div>
          <div class="diagram-node">
            <h4>Procuração Eletrônica</h4>
            <p>Validação Jurídica</p>
            <div class="node-arrow">→</div>
          </div>
          <div class="diagram-connector"></div>
          <div class="diagram-node highlight">
            <h4>eSocial</h4>
            <p>Transmissão de Eventos</p>
          </div>
        </div>
        
        <div class="integration-details">
          <h3>Mecanismo de Autorização</h3>
          <p>O e-CAC atua como <strong>controlador de acesso</strong> para o eSocial, garantindo que:</p>
          <ul>
            <li>Apenas procuradores devidamente autorizados possam enviar eventos</li>
            <li>Cada transação tenha validade jurídica através de certificação digital</li>
            <li>As permissões sejam específicas por tipo de evento (ex: Grupo SST)</li>
          </ul>
          
          <div class="warning-box">
            <strong>Ponto Crítico:</strong> Sem procuração eletrônica válida no e-CAC, nenhum terceiro pode legalmente transmitir eventos ao eSocial em nome do cliente.
          </div>
        </div>
      </div>
    </section>

    <section class="proxy-process">
      <h2>Fluxo Detalhado: Cadastro de Procuração Eletrônica no e-CAC</h2>
      <div class="process-steps">
        <div class="step-card">
          <div class="step-header">1</div>
          <h3>Acesso com Certificado Digital</h3>
          <ul>
            <li>Login no e-CAC usando <strong>e-CNPJ A1 ou A3</strong></li>
            <li>Conta Gov.br com nível Prata ou Ouro também é aceita</li>
            <li>O representante legal deve acessar em nome da PJ outorgante</li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">2</div>
          <h3>Navegação ao Módulo de Procurações</h3>
          <ul>
            <li>Buscar por "procuração" na barra de pesquisa</li>
            <li>Selecionar: <em>"CADASTRO, CONSULTA E CANCELAMENTO - PROCURAÇÃO PARA E-CAC"</em></li>
            <li>Recomenda-se cancelar procurações antigas não utilizadas</li>
          </ul>
        </div>
        
        <div class="step-card highlight">
          <div class="step-header">3</div>
          <h3>Preenchimento dos Dados</h3>
          <ul>
            <li><strong>Outorgante:</strong> Dados preenchidos automaticamente (empresa cliente)</li>
            <li><strong>Procurador:</strong> CNPJ/CPF da prestadora ou profissional designado</li>
            <li><strong>Vigência:</strong> Alinhar com duração do contrato de serviços</li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">4</div>
          <h3>Definição de Permissões</h3>
          <ul>
            <li>Marcar <strong>"eSocial - Grupo SST"</strong> para eventos de Saúde e Segurança</li>
            <li>Incluir <strong>"eSocial - Download"</strong> para consulta de envios</li>
            <li>Para exames toxicológicos: <strong>"eSocial - Toxicológico"</strong></li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">5</div>
          <h3>Finalização e Validação</h3>
          <ul>
            <li>Definir possibilidade de substabelecimento</li>
            <li>Resolver Captcha de segurança</li>
            <li>Clicar em <strong>"Cadastrar Procuração"</strong> para concluir</li>
          </ul>
        </div>
      </div>
      
      <div class="process-note">
        <p><strong>Observação:</strong> Todo o processo deve ser realizado pelo representante legal da empresa cliente. A consultoria pode fornecer orientações, mas não pode executar esta etapa diretamente.</p>
      </div>
    </section>

    <section class="certificates-section">
      <h2>Certificação Digital: Requisitos Técnicos para Operação</h2>
      <div class="certificates-grid">
        <div class="certificate-card">
          <h3>e-CNPJ (Empresa Cliente)</h3>
          <ul>
            <li><strong>Obrigatório</strong> para outorgar procurações</li>
            <li><strong>Tipo A1:</strong> Arquivo digital (.pfx) instalado no computador</li>
            <li><strong>Tipo A3:</strong> Token físico ou cartão inteligente</li>
            <li>Validade: de 1 a 3 anos, conforme o tipo.</li>
          </ul>
        </div>
        
        <div class="certificate-card highlight">
          <h3>e-CPF (Profissional SST)</h3>
          <ul>
            <li>Necessário para assinar eventos como procurador</li>
            <li>Deve estar vinculado à procuração eletrônica</li>
            <li>Permite transmissão em nome do cliente</li>
            <li>Níveis de certificado: A1 ou A3</li>
          </ul>
        </div>
        
        <div class="certificate-card">
          <h3>Conta Gov.br</h3>
          <ul>
            <li>Alternativa para acesso ao e-CAC</li>
            <li>Nível <strong>Prata</strong> (com foto) ou <strong>Ouro</strong> exigido</li>
            <li>Não substitui certificado digital para algumas funcionalidades</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="workflow-section">
      <h2>Fluxo Operacional Padrão: e-CAC + eSocial</h2>
      <div class="workflow-diagram">
        <div class="workflow-step">
          <div class="step-number">1</div>
          <h3>Onboarding do Cliente</h3>
          <p>Cliente cadastra procuração para a prestadora no e-CAC com permissões SST</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="step-number">2</div>
          <h3>Transmissão de Eventos</h3>
          <p>Prestadora envia eventos (S-2210, S-2220, etc.) usando e-CPF do responsável</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step highlight">
          <div class="step-number">3</div>
          <h3>Gestão de Correções</h3>
          <p>Para erros: envio de S-3000 (exclusão) e retransmissão do evento correto</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="step-number">4</div>
          <h3>Verificação Conjunta</h3>
          <p>Cliente pode consultar recibo de entrega diretamente no eSocial via e-CAC</p>
        </div>
      </div>
    </section>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        color: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 40px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .welcome-banner h1 {
        margin-top: 0;
        font-size: 2.2em;
      }
      .concept-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        margin-bottom: 30px;
      }
      .definition-box {
        background: #f5f9ff;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin-bottom: 20px;
      }
      .service-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .service-item {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
      }
      .service-item.highlight {
        background: #e3f2fd;
        border-color: #2196F3;
      }
      .integration-card {
        display: flex;
        gap: 30px;
        margin-top: 20px;
      }
      .integration-diagram {
        flex: 1;
        display: flex;
        align-items: center;
      }
      .diagram-node {
        background: white;
        padding: 15px;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        min-width: 120px;
      }
      .diagram-node.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .diagram-connector {
        flex: 1;
        border-top: 2px dashed #2196F3;
        margin: 0 10px;
      }
      .node-arrow {
        color: #2196F3;
        font-weight: bold;
      }
      .integration-details {
        flex: 2;
      }
      .warning-box {
        background: #fff8e1;
        border-left: 4px solid #ffc107;
        padding: 15px;
        margin-top: 20px;
      }
      .process-steps {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 30px;
      }
      .step-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .step-card.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .step-header {
        background: #2196F3;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .process-note {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 6px;
        margin-top: 30px;
        font-style: italic;
      }
      .certificates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 30px;
      }
      .certificate-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .certificate-card.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .workflow-diagram {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        flex-wrap: wrap;
      }
      .workflow-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 180px;
        flex: 1;
        margin: 0 10px;
      }
      .workflow-step.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 15px;
      }
      .workflow-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.5em;
      }
      h2, h3, h4 {
        color: #00000;
      }
      h2 {
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 10px;
        margin-top: 40px;
      }
      ul {
        margin-left: 20px;
      }
      @media (max-width: 768px) {
        .integration-card, .workflow-diagram {
          flex-direction: column;
        }
        .workflow-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
`},{id:"esocial-sst-transmission",title:"Rotina de Transmissão dos Eventos de SST ao eSocial",description:"Fluxo completo e prazos para transmissão dos eventos de Saúde e Segurança do Trabalho no eSocial.",group:"eSocial",tags:["eSocial","Processos","Webservice","Eventos"],content:`
  < div class="transmission-header" >
      <h1>Rotina de Transmissão Automatizada - Eventos SST</h1>
      <p>Envio automatizado via Webservice conforme programação estabelecida</p>
    </div >

    <section class="event-section">
      <h2>Eventos de SST e Seus Prazos Legais</h2>
      
      <div class="event-grid">
        <!-- S-2210 -->
        <div class="event-card critical">
          <div class="event-header">
            <h3>S-2210</h3>
            <span class="event-tag">Crítico</span>
          </div>
          <p class="event-title">Comunicação de Acidente de Trabalho</p>
          <div class="event-detail">
            <strong>Prazo:</strong> 1º dia útil após ocorrência (em caso de morte: imediato)
          </div>
          <div class="event-detail">
            <strong>Transmissão:</strong> Imediata quando disponível
          </div>
          <div class="event-detail">
            <strong>Substitui:</strong> CAT física (exceto para MEI não obrigado no eSocial)
          </div>
          <div class="event-warning">
            <h4>Consequências por Não Envio:</h4>
            <ul>
              <li>Multas até R$ 10.037,35 (art. 286, Decreto 3.048/1999)</li>
              <li>Fiscalização eletrônica automatizada</li>
              <li>Impacto no FAP da empresa</li>
              <li>Dificuldade de acesso a benefícios</li>
            </ul>
          </div>
        </div>

        <!-- S-2220 -->
        <div class="event-card">
          <div class="event-header">
            <h3>S-2220</h3>
            <span class="event-tag">Periódico</span>
          </div>
          <p class="event-title">Monitoramento da Saúde do Trabalhador</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês subsequente ao exame
          </div>
          <div class="event-detail">
            <strong>Transmissão:</strong> A partir do 1º dia do mês subsequente
          </div>
          <div class="event-warning">
            <h4>Riscos por Não Envio:</h4>
            <ul>
              <li>Inconsistência no prontuário eletrônico</li>
              <li>Autuação por falta de comprovação</li>
              <li>Responsabilização solidária empregador-prestador</li>
            </ul>
          </div>
        </div>

        <!-- S-2221 -->
        <div class="event-card important">
          <div class="event-header">
            <h3>S-2221</h3>
            <span class="event-tag">Toxicológico</span>
          </div>
          <p class="event-title">Exame Toxicológico do Motorista Profissional</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês seguinte ao exame
          </div>
          <div class="event-detail">
            <strong>Aplica-se:</strong> Categorias C, D ou E (Lei 13.103/2015)
          </div>
          <div class="event-warning">
            <h4>Impactos por Não Envio:</h4>
            <ul>
              <li>Irregularidade perante Lei dos Caminhoneiros</li>
              <li>Impedimento contratual</li>
              <li>Ações fiscais por falta de controle</li>
            </ul>
          </div>
        </div>

        <!-- S-2240 -->
        <div class="event-card">
          <div class="event-header">
            <h3>S-2240</h3>
            <span class="event-tag">Ambiental</span>
          </div>
          <p class="event-title">Condições Ambientais do Trabalho</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês subsequente à alteração
          </div>
          <div class="event-detail">
            <strong>Observação:</strong> Não se retifica - envia novo evento
          </div>
          <div class="event-warning">
            <h4>Consequências por Não Envio:</h4>
            <ul>
              <li>Multas por omissão de dados</li>
              <li>Inconsistência no PPP eletrônico</li>
              <li>Impacto em aposentadoria especial</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="responsibility-section">
      <h2>Responsabilidades no Envio</h2>
      <div class="responsibility-card">
        <div class="responsibility-item">
          <h3>Empregador</h3>
          <p>Responsável legal pelo envio, podendo delegar via procuração eletrônica no e-CAC</p>
        </div>
        <div class="responsibility-item important">
          <h3>Certificação Digital</h3>
          <p>Obrigatório uso de e-CNPJ da empresa ou e-CPF com procuração válida</p>
          <div class="warning-note">
            <strong>Proibição:</strong> Uso indevido de certificado do cliente por prestador gera responsabilização solidária
          </div>
        </div>
        <div class="responsibility-item">
          <h3>Prestador SST</h3>
          <p>Quando autorizado, deve utilizar próprio e-CPF (nunca o certificado do cliente)</p>
        </div>
      </div>
    </section>

    <section class="automation-section">
      <h2>Processo Automatizado via Webservice</h2>
      <div class="automation-flow">
        <div class="flow-step">
          <div class="step-number">1</div>
          <h3>Verificação Horária</h3>
          <p>Periodicamente, o sistema rastreia eventos disponíveis no prazo</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">2</div>
          <h3>Validação XML</h3>
          <p>Conferência automática da estrutura conforme leiaute eSocial</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">3</div>
          <h3>Transmissão</h3>
          <p>Envio ao Ambiente Nacional do eSocial</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">4</div>
          <h3>Confirmação</h3>
          <p>Consulta do recibo de entrega na próxima verificação</p>
        </div>
      </div>
      <div class="validation-note">
        <h3>Validação de Preenchimento</h3>
        <p>Eventos com erros ficam bloqueados para transmissão até correção via botão "Validar Preenchimento"</p>
      </div>
    </section>

    <style>
      .transmission-header {
        background: #e3f2fd;
        color: white;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      .transmission-header h1 {
        margin-top: 0;
        font-size: 2.0em;
      }
      .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 20px;
      }
      .event-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #2196F3;
      }
      .event-card.critical {
        border-top-color: #2196F3;
      }
      .event-card.important {
        border-top-color: #2196F3;
      }
      .event-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .event-tag {
        background: #e3f2fd;
        color: #2196F3;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.8em;
        font-weight: bold;
      }
      .event-title {
        font-weight: bold;
        color: #333;
        margin-bottom: 15px;
      }
      .event-detail {
        margin-bottom: 10px;
        font-size: 0.9em;
      }
      .event-warning {
        background: #fff8e1;
        padding: 12px;
        border-radius: 6px;
        margin-top: 15px;
        font-size: 0.85em;
      }
      .event-warning h4 {
        margin-top: 0;
        color: #f57c00;
      }
      .event-warning ul {
        margin: 8px 0 0 20px;
      }
      .responsibility-card {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 25px;
      }
      .responsibility-item {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .responsibility-item.important {
        border: 2px solid #FFC107;
      }
      .warning-note {
        background: #ffebee;
        padding: 10px;
        border-radius: 5px;
        margin-top: 15px;
        font-size: 0.85em;
      }
      .automation-flow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        flex-wrap: wrap;
      }
      .flow-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 150px;
        flex: 1;
        margin: 0 5px;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 15px;
      }
      .flow-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.3em;
      }
      .validation-note {
        background: #e8f5e9;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
      }
      h2 {
        color: #2196F3;
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 8px;
      }
      @media (max-width: 768px) {
        .automation-flow {
          flex-direction: column;
        }
        .flow-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
`},{id:"evento-s2210-comunicacao-cat",title:"Evento S-2210 - Comunicação de Acidente de Trabalho no eSocial",description:"Artigo completo para integração de novos colaboradores sobre o envio da CAT pelo evento S-2210. Entenda a legislação, responsabilidades e impacto direto na vida do trabalhador.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2210"],content:`

  < div class="welcome-banner" >
    <h1>Bem-vindo à Comunicação de Acidente de Trabalho</h1>
    <p>Este conteúdo foi elaborado para você compreender a importância da Comunicação de Acidente de Trabalho (CAT) e como ela é feita através do evento S-2210 no eSocial. Um processo essencial para garantir os direitos do trabalhador e manter a empresa em conformidade com a legislação.</p>
  </div >

  <section class="core-concepts">
    <h2>O que é o Evento S-2210?</h2>
    <div class="concept-card">
      <p>O evento <strong>S-2210</strong> é utilizado para comunicar oficialmente um <strong>acidente de trabalho</strong>, uma <strong>doença ocupacional</strong> ou um <strong>acidente de trajeto</strong>, ainda que não haja afastamento do colaborador.</p>
      <p>Essa comunicação é obrigatória para:</p>
      <ul>
        <li>Empregadores do regime CLT;</li>
        <li>Órgãos públicos que contratam servidores pelo RGPS;</li>
        <li>OGMO (Órgão Gestor de Mão de Obra);</li>
        <li>Sindicatos que atuam com trabalhadores avulsos.</li>
      </ul>
      <p>No sistema do eSocial, o número de recibo do evento passa a ser o <strong>número oficial da CAT</strong>, eliminando a necessidade de emissão em papel.</p>
    </div>
  </section>

  <section class="nr-overview">
    <h2>Base Legal e Normas Relacionadas</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>Lei nº 8.213/1991 - Art. 22</h3>
        <p>Estabelece a obrigatoriedade da comunicação do acidente de trabalho à Previdência Social até o primeiro dia útil seguinte ao da ocorrência.</p>
        <p class="nr-desc">O não cumprimento implica em penalidade ao empregador.</p>
      </div>
      <div class="nr-card">
        <h3>CLT - Art. 169</h3>
        <p>Prevê a notificação compulsória das doenças profissionais e das relacionadas às condições especiais de trabalho.</p>
        <p class="nr-desc">Complementa a legislação previdenciária com foco na saúde ocupacional.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impacto Direto para o Trabalhador</h2>

    <div class="document-card">
      <h3 class="document-title">Direitos Garantidos com a Emissão da CAT</h3>
      <div class="document-content">
        <p>A CAT é o documento que formaliza o acidente ou doença como sendo de natureza ocupacional. Sua emissão garante ao trabalhador os seguintes direitos:</p>
        <ul>
          <li><strong>Auxílio por Incapacidade Temporária Acidentária (B91):</strong> O trabalhador passa a receber pelo INSS a partir do 16º dia de afastamento.</li>
          <li><strong>Estabilidade Provisória:</strong> Ao retornar de um afastamento superior a 15 dias por acidente de trabalho, o empregado tem estabilidade de 12 meses.</li>
          <li><strong>FGTS Durante o Afastamento:</strong> O empregador deve continuar depositando o FGTS durante todo o período.</li>
          <li><strong>Aposentadoria por Incapacidade Permanente ou Pensão por Morte:</strong> Em caso de óbito ou invalidez permanente, a CAT é base essencial para garantir esses benefícios.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Consequências da Não Comunicação</h3>
      <div class="document-content">
        <p>Deixar de transmitir o evento S-2210 acarreta penalidades:</p>
        <ul>
          <li><strong>Multa:</strong> Pode variar entre o limite mínimo e o limite máximo do salário de contribuição, conforme os artigos 286 e 336 do Decreto nº 3.048/1999.</li>
          <li><strong>Multa Agravada:</strong> Em caso de reincidência, a penalidade pode ser ampliada.</li>
        </ul>
        <p><strong>Responsabilidade Exclusiva:</strong> A obrigação de envio é da empresa ou dos órgãos competentes (OGMO, sindicato, etc.).</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Detalhes Técnicos do Evento no Sistema</h2>
    <p>O evento S-2210 exige preenchimento rigoroso com base em tabelas do eSocial. Abaixo, apresentamos as mais relevantes:</p>

    <div class="event-grid">
      <div class="event-card">
        <h4>Tabela 01</h4>
        <p><strong>Categoria de Trabalhador</strong></p>
        <p>Exemplo: 101 – Empregado, 111 – Trabalhador Temporário.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 05</h4>
        <p><strong>Tipo de Inscrição</strong></p>
        <p>Define o tipo de local do acidente (CNPJ, CAEPF, CNO).</p>
      </div>

      <div class="event-card">
        <h4>Tabela 13</h4>
        <p><strong>Parte do Corpo Atingida</strong></p>
        <p>Exemplo: cabeça, tronco, membros superiores/inferiores.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 14</h4>
        <p><strong>Agente Causador</strong></p>
        <p>Exemplo: ferramenta, máquina, produto químico, veículo.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 15</h4>
        <p><strong>Situação Geradora</strong></p>
        <p>Exemplo: queda, explosão, esforço físico, contato com material cortante.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 17</h4>
        <p><strong>Natureza da Lesão</strong></p>
        <p>Exemplo: fratura, queimadura, corte, contusão, entorse.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 20</h4>
        <p><strong>Tipo de Logradouro</strong></p>
        <p>Preenchimento correto do endereço onde ocorreu o acidente.</p>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px #e3f2fd(0,0,0,0.1);
      margin: 15px 0;
    }

    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }

    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }

    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }

    .document-content {
      padding: 25px;
    }

    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }

    .event-card p {
      margin: 8px 0;
    }

    .event-card p:first-of-type {
      font-weight: bold;
      margin-bottom: 12px;
    }
  </style>
`},{id:"evento-s2220-monitoramento-saude",title:"Evento S-2220 - Monitoramento da Saúde do Trabalhador",description:"Entenda de forma clara e acolhedora como funciona o envio do evento S-2220 no eSocial e sua relação com o PCMSO e o ASO. Essencial para colaboradores e profissionais de SST.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2220"],content:`

  < div class="welcome-banner" >
    <h1>Monitoramento da Saúde no eSocial</h1>
    <p>Este guia foi criado para apresentar a importância do evento S-2220, que documenta a saúde ocupacional dos trabalhadores ao longo de sua trajetória na empresa. Uma ferramenta essencial para promover segurança, cumprir a legislação e proteger o trabalhador.</p>
  </div >

  <section class="core-concepts">
    <h2>O que é o Evento S-2220?</h2>
    <div class="concept-card">
      <p>O <strong>evento S-2220</strong> é utilizado para registrar digitalmente as informações sobre o <strong>monitoramento da saúde do trabalhador</strong> durante todo seu vínculo com a empresa.</p>
      <p>Esse evento detalha as avaliações clínicas e os exames complementares, com base no <strong>Atestado de Saúde Ocupacional (ASO)</strong>, e deve ser enviado sempre que um exame ocupacional for realizado.</p>

      <h4>Exames que devem ser registrados:</h4>
      <ul>
        <li>Admissional</li>
        <li>Periódico</li>
        <li>Retorno ao Trabalho</li>
        <li>Mudança de Função ou Risco</li>
        <li>Monitoração Pontual (quando houver ASO)</li>
        <li>Demissional</li>
      </ul>

      <p><strong>Importante:</strong> mesmo exames solicitados fora da rotina periódica (monitoração pontual) devem ser enviados, desde que estejam registrados no ASO.</p>
    </div>
  </section>

  <section class="nr-overview">
    <h2>Relação com as Normas Regulamentadoras</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-7</h3>
        <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
        <p class="nr-desc">Estabelece a obrigatoriedade de exames clínicos e complementares, visando preservar a saúde dos trabalhadores. O evento S-2220 é a forma digital de comprovar sua execução.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impacto para o Trabalhador e Previdência</h2>

    <div class="document-card">
      <h3 class="document-title">Ligação com o Perfil Profissiográfico Previdenciário (PPP)</h3>
      <div class="document-content">
        <p>O evento S-2220 alimenta diretamente o <strong>PPP em meio digital</strong>, documento exigido pelo INSS para comprovação do histórico laboral e da saúde do trabalhador.</p>

        <h4>Benefícios do registro correto:</h4>
        <ul>
          <li><strong>Comprovação de Doença Ocupacional:</strong> Históricos de exames ajudam a comprovar o nexo entre a doença e a atividade profissional.</li>
          <li><strong>Aposentadoria Especial:</strong> O PPP digital, baseado no S-2220 e S-2240, é essencial para solicitação junto ao INSS.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Monitoração Pontual - Como Funciona?</h3>
      <div class="document-content">
        <p>O evento S-2220 também cobre exames realizados fora da rotina, como os solicitados por critério médico. No entanto:</p>
        <ul>
          <li>O exame só deve ser enviado se estiver vinculado a um <strong>ASO emitido</strong>.</li>
          <li>Exames avulsos, sem ASO, não devem ser registrados de forma isolada no S-2220.</li>
        </ul>
        <p>Esses cuidados evitam inconsistências no histórico digital do trabalhador.</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Tabelas Técnicas Utilizadas no Evento S-2220</h2>
    <p>O correto preenchimento do S-2220 exige o uso de códigos e referências das tabelas do eSocial. Veja abaixo as principais:</p>

    <div class="event-grid">
      <div class="event-card">
        <h4>Tabela 05</h4>
        <p><strong>Tipos de Inscrição</strong></p>
        <p>Define o tipo de inscrição do estabelecimento de saúde onde o exame foi realizado. Ex: CNPJ, CAEPF, CNO.</p>
        <p><strong>Campo:</strong> ideEstabSaude/tpInsc</p>
      </div>

      <div class="event-card">
        <h4>Tabela 01</h4>
        <p><strong>Categoria do Trabalhador</strong></p>
        <p>Identifica a relação do trabalhador com a empresa (empregado, estagiário, servidor etc.).</p>
        <p><strong>Campo:</strong> categoria</p>
      </div>

      <div class="event-card">
        <h4>Tabela 27</h4>
        <p><strong>Procedimentos Diagnósticos</strong></p>
        <p>Indica o tipo de exame realizado: clínico, audiometria, hemograma, espirometria, etc.</p>
        <p><strong>Campo:</strong> procRealizado/codProcRealizado</p>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin: 15px 0;
    }

    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }

    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }

    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }

    .document-content {
      padding: 25px;
    }

    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }

    .event-card p {
      margin: 8px 0;
    }

    .event-card p:first-of-type {
      font-weight: bold;
      margin-bottom: 12px;
    }
  </style>
`},{id:"evento-s2221-exame-toxicologico",title:"Evento S-2221 - Exame Toxicológico para Motoristas Profissionais",description:"Guia completo sobre o envio do evento S-2221 ao eSocial, abrangendo requisitos legais, prazos, impacto previdenciário e operacional, com orientações específicas para uso no sistema.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2221"],content:`
  < div class="welcome-banner" >
  <h1>Bem-vindo ao Guia sobre o Evento S-2221!</h1>
  <p>Este material foi desenvolvido para explicar de forma clara como funciona o envio do exame toxicológico de motoristas profissionais pelo evento S-2221 no eSocial, com instruções completas para uso do sistema.</p>
</div >

<section class="core-concepts">
  <h2>O que é o Evento S-2221?</h2>
  <div class="concept-card">
    <p>O evento S-2221 é o registro eletrônico, enviado ao eSocial, que contém as informações do <strong>exame toxicológico</strong> realizado por motoristas profissionais empregados. Visa detectar o uso de substâncias psicoativas que comprometam a direção segura.</p>
    <ul>
      <li>Obrigatório desde 1º de agosto de 2024</li>
      <li>Aplica-se a motoristas com CNH nas categorias C, D ou E</li>
      <li>Exclusivo para atividades remuneradas de transporte rodoviário de cargas ou passageiros</li>
    </ul>
  </div>
</section>

<section class="details-section">
  <h2>Quem Deve Realizar o Exame?</h2>
  <ul>
    <li>Motoristas de transporte rodoviário de passageiros</li>
    <li>Motoristas de transporte rodoviário de cargas</li>
    <li><strong>Importante:</strong> Aplica-se apenas às categorias C, D e E da CNH</li>
  </ul>
</section>

<section class="data-required">
  <h2>Informações que Devem ser Informadas no Evento</h2>
  <ul>
    <li>CPF do empregado</li>
    <li>Matrícula</li>
    <li>Data do exame</li>
    <li>CNPJ do laboratório</li>
    <li>Código sequencial (11 caracteres)</li>
    <li>Nome e CRM do médico responsável</li>
  </ul>
</section>

<section class="deadline-section">
  <h2>Prazo de Envio</h2>
  <p>O envio deve ocorrer até o dia 15 do mês subsequente ao exame. Se cair em dia não útil, antecipa-se para o último dia útil anterior.</p>
  <h3>Momentos de Realização</h3>
  <ul>
    <li><strong>Admissional</strong>: Antes da contratação</li>
    <li><strong>Periódico</strong>: A cada 30 meses por sorteio randômico</li>
    <li><strong>Demissional</strong>: No desligamento</li>
  </ul>
  <p><strong>Reaproveitamento:</strong> Se feito nos últimos 60 dias, pode ser usado para outro fim (admissional/demissional).</p>
</section>

<section class="legal-base">
  <h2>Base Legal e Normas</h2>
  <ul>
    <li><strong>Portaria MTP nº 672/2021</strong>: Confidencialidade e contraprova</li>
    <li><strong>Portaria MTE nº 612/2024</strong>: Regras específicas para motoristas empregados</li>
  </ul>
  <p>Embora não esteja vinculado a uma NR específica, sua inclusão no PCMSO é prevista. O resultado <strong>não deve constar no ASO</strong>.</p>
</section>

<section class="impact-section">
  <h2>Impactos do Exame</h2>
  <h3>Profissional</h3>
  <ul>
    <li>Resultado positivo implica suspensão do direito de dirigir por 3 meses</li>
    <li>Para retomar, deve apresentar novo exame negativo</li>
  </ul>
  <h3>Trabalhista e Previdenciário</h3>
  <ul>
    <li>Empregado deve ser afastado</li>
    <li>Empresa deve realizar avaliação clínica</li>
    <li>Se houver dependência química: CAT, INSS e reavaliação do PGR</li>
    <li><strong>Confidencialidade e direito à contraprova são garantidos</strong></li>
  </ul>
</section>

<section class="codigo-section">
  <h2>Código Sequencial no eSocial</h2>
  <p>O laudo possui 17 caracteres. Para o eSocial, só os 11 finais são usados. Exemplo:</p>
  <div class="code-example">
    <p>Laudo: AAAAAAAA123456789</p>
    <p>eSocial: AA123456789</p>
  </div>
</section>

<section class="positive-result">
  <h2>Condutas em Caso de Resultado Positivo</h2>
  <ul>
    <li>Avaliação clínica</li>
    <li>CAT (se houver suspeita ocupacional)</li>
    <li>Afastamento</li>
    <li>Encaminhamento ao INSS</li>
    <li>Revalidação de riscos e medidas preventivas</li>
  </ul>
</section>

<section class="ecac-section">
  <h2>Importante para o Suporte: Acesso ao e-CAC</h2>
  <p>É obrigatória a permissão específica na procuração eletrônica no portal e-CAC para envio do evento S-2221.</p>
  <p>Sem essa permissão, mesmo com o sistema configurado corretamente, a transmissão não será autorizada.</p>
</section>

<section class="sistema-section">
  <h2>No Sistema - Parametrização</h2>
  <p>O exame toxicológico é identificado pelo <strong>ID 17</strong>. Para que ele seja transmitido corretamente:</p>
  <ul>
    <li>Campo "S-2221" marcado como "Sim" no cadastro do funcionário</li>
    <li>Opção "Seleção Randômica" habilitada</li>
  </ul>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_1.png">
  </div>
</section>

<section class="preenchimento-section">
  <h2>Preenchimento do Exame</h2>
  <p>Campos obrigatórios para preenchimento:</p>
  <ul>
    <li>CPF do empregado</li>
    <li>Matrícula</li>
    <li>Data de realização do exame</li>
    <li>CNPJ do laboratório</li>
    <li>Código sequencial</li>
    <li>Nome e CRM do médico</li>
  </ul>
  <p>O campo "Exibir no ASO" deve estar desmarcado.</p>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_2.png">
  </div>
</section>

<section class="geracao-section">
  <h2>Geração e Transmissão do Evento</h2>
  <p>Após finalizar o atendimento, o evento S-2221 é gerado automaticamente, desde que todos os parâmetros estejam configurados corretamente.</p>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_3.png">
  </div>
</section>

<style>
  .welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
  .concept-card, .details-section, .data-required, .impact-section, .codigo-section, .positive-result, .ecac-section, .sistema-section, .preenchimento-section, .geracao-section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin: 15px 0; }
  .image-placeholder {
  /* Remove o padding, background e a borda tracejada que criam o espaço cinza */
  background: none;
  padding: 0;
  text-align: center;
  margin: 30px 0;
  border: none;
  border-radius: 0;
}

.image-placeholder img {
  /* Garante que a imagem preencha 100% da largura do contêiner */
  width: 90%;
  height: auto; /* Mantém a proporção da imagem */
  display: block;
}
  .code-example { background: #f5f5f5; padding: 15px; border-radius: 5px; font-family: monospace; margin: 15px 0; }
</style>
`},{id:"evento-s2240-condicoes-ambientais",title:"Evento S-2240: Condições Ambientais do Trabalho no eSocial",description:"Entenda como funciona o evento S-2240, sua base legal, prazos, impacto na aposentadoria e obrigatoriedade de envio, mesmo na ausência de riscos.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2240"],content:`
  < div class="welcome-banner" >
    <h1>Evento S-2240: Condições Ambientais do Trabalho</h1>
    <p>Este guia foi elaborado para integrar novos colaboradores ao universo do eSocial, com foco no evento S-2240, essencial para o histórico previdenciário do trabalhador.</p>
  </div >

  <section class="core-concepts">
    <h2>O que é o Evento S-2240?</h2>
    <div class="concept-card">
      <p>O evento S-2240 registra, de forma eletrônica, as <strong>condições ambientais de trabalho</strong> de cada funcionário e detalha a exposição a <strong>agentes nocivos</strong> (físicos, químicos, biológicos ou mistos).</p>
      <p>É a base para emissão do <strong>Perfil Profissiográfico Previdenciário (PPP)</strong> em meio eletrônico e responde a perguntas como:</p>
      <ul>
        <li>Onde o trabalhador exerce suas funções?</li>
        <li>Quais atividades realiza?</li>
        <li>Está exposto a algum risco que possa gerar direito à aposentadoria especial?</li>
        <li>Há medições? EPIs são fornecidos e eficazes?</li>
      </ul>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Envio Obrigatório (Mesmo sem Riscos)</h2>
    <p>Todo trabalhador regido pela CLT deve ter um evento S-2240 ativo no eSocial.</p>
    <div class="event-grid">
      <div class="event-card">
        <h4>Funcionário exposto a riscos</h4>
        <p>Informar os agentes nocivos conforme a Tabela 24 do eSocial, com base nos documentos ocupacionais da empresa.</p>
      </div>

      <div class="event-card">
        <h4>Funcionário sem exposição</h4>
        <p>Deve-se utilizar o código <strong>09.01.001</strong> – "Ausência de fator de risco", formalizando a avaliação realizada.</p>
      </div>
    </div>
    <p>Esse envio é obrigatório, inclusive para cargos administrativos. Ele comprova que a empresa avaliou o ambiente de trabalho e garante a segurança jurídica da organização.</p>
  </section>

  <section class="nr-overview">
    <h2>Normas Regulamentadoras e Bases Legais</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-01</h3>
        <p>Gerenciamento de Riscos Ocupacionais (PGR)</p>
        <p class="nr-desc">Origem primária das informações transmitidas no S-2240. Apresenta o inventário de riscos e medidas de controle.</p>
      </div>

      <div class="nr-card">
        <h3>NR-09</h3>
        <p>Exposições Ocupacionais</p>
        <p class="nr-desc">Orienta as avaliações qualitativas e quantitativas dos riscos ambientais descritos no evento.</p>
      </div>

      <div class="nr-card">
        <h3>NR-15 / NR-16</h3>
        <p>Insalubridade e Periculosidade</p>
        <p class="nr-desc">Laudos auxiliares para identificação de riscos no S-2240. Não geram diretamente os adicionais, mas são fontes de referência.</p>
      </div>

      <div class="nr-card">
        <h3>Decreto 3.048/99</h3>
        <p>Anexo IV - Previdência</p>
        <p class="nr-desc">Lista oficial de agentes nocivos que geram direito à aposentadoria especial.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impactos Previdenciários e Trabalhistas</h2>
    <div class="document-card">
      <h3 class="document-title">Aposentadoria Especial</h3>
      <div class="document-content">
        <p>O evento S-2240 serve como prova documental de exposição a agentes nocivos. A Previdência usará esse histórico para conceder aposentadoria com tempo reduzido (15, 20 ou 25 anos).</p>
        <h4>Importante:</h4>
        <ul>
          <li>Sem o S-2240, o direito à aposentadoria especial pode ser negado.</li>
          <li>O histórico é construído por envio contínuo de novos eventos, sem necessidade de retificação por mudança de função.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Encargos para a Empresa</h3>
      <div class="document-content">
        <p>Empregadores que declaram exposição a riscos devem recolher uma contribuição adicional (GIIL-RAT), destinada ao financiamento da aposentadoria especial.</p>
        <h4>Consequências:</h4>
        <ul>
          <li>Alíquota de 6%, 9% ou 12% sobre a folha, conforme o risco.</li>
          <li>Empresas que omitem riscos podem ser autuadas e obrigadas a arcar com o passivo.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Segurança Jurídica e Compliance</h3>
      <div class="document-content">
        <p>O correto preenchimento do S-2240 protege tanto o colaborador quanto a empresa. Reduz ações trabalhistas, reforça a credibilidade da gestão e evita prejuízos futuros com passivos ocultos.</p>
        <h4>Boas Práticas:</h4>
        <ul>
          <li>Integrar PGR, LTCAT, PCMSO e S-2240 no sistema</li>
          <li>Validar EPIs e registros de entrega</li>
          <li>Registrar novas condições sempre que houver alterações</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin: 15px 0;
    }

    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }

    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }

    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }

    .document-content {
      padding: 25px;
    }

    .document-content h4 {
      color: #2196F3;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }
  </style>
`},{id:"eventos-sst-orgaos-publicos",title:"Eventos de SST para Órgãos Públicos: Regras e Obrigatoriedades",description:"Guia completo sobre o envio de eventos de SST para servidores públicos no eSocial, com foco nas categorias 301-314, regimes previdenciários e particularidades legais.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos"],content:`
  < div class="public-sector-guide" >
  <h1>Eventos de SST no Âmbito dos Órgãos Públicos</h1>
  <p>Este guia detalha as regras específicas para envio de eventos de Saúde e Segurança no Trabalho (SST) para servidores públicos e funcionários sem vínculo empregatício no sistema eSocial.</p>
</div >

<section class="category-identification">
  <h2>Identificação de Funcionários Públicos</h2>
  <div class="identification-card">
    <p>Funcionários públicos são identificados pelo <strong>Código de Categoria do Trabalhador</strong> na Tabela 01 do eSocial:</p>
    
    <div class="category-table">
      <table>
        <tr>
          <th>Códigos</th>
          <th>Categoria</th>
          <th>Classificação</th>
        </tr>
        <tr>
          <td>301-314</td>
          <td>Todos os códigos neste intervalo</td>
          <td>Funcionário Público</td>
        </tr>
        <tr>
          <td colspan="3">
            <strong>Link oficial:</strong> 
            <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-1.3/tabelas.html#01" target="_blank">
              Tabela 01 - Clique aqui
            </a>
          </td>
        </tr>
      </table>
    </div>
    
    <div class="technical-note">
      <p><strong>Nota Importante:</strong> Estagiários não possuem obrigatoriedade de envio de eventos de SST, conforme destaque do manual do eSocial.</p>
    </div>
  </div>
</section>

<section class="previdenciary-system">
  <h2>Regimes Previdenciários e Impacto nos Eventos</h2>
  <div class="system-card">
    <p>A obrigatoriedade do envio de eventos de SST depende do regime previdenciário do servidor:</p>
    
    <div class="comparison-table">
      <table>
        <tr>
          <th>Tipo de Servidor</th>
          <th>Regime Previdenciário</th>
          <th>Eventos Obrigatórios</th>
          <th>Eventos Dispensados</th>
        </tr>
        <tr>
          <td>Empregado CLT</td>
          <td>RGPS</td>
          <td class="required">Todos (S-2210, S-2220, S-2240)</td>
          <td>Nenhum</td>
        </tr>
        <tr>
          <td>Servidor Estatutário</td>
          <td>RGPS</td>
          <td class="required">S-2210 e S-2240</td>
          <td>S-2220</td>
        </tr>
        <tr>
          <td>Servidor com RPPS instituído</td>
          <td>RGPS</td>
          <td class="required">S-2210 e S-2240</td>
          <td>S-2220</td>
        </tr>
        <tr>
          <td>Servidor Estatutário</td>
          <td>RPPS</td>
          <td>Nenhum</td>
          <td>Todos</td>
        </tr>
      </table>
    </div>
    
    <div class="critical-info">
      <h3>Diretriz Fundamental</h3>
      <p>A obrigatoriedade deve ser avaliada <strong>individualmente</strong> para cada servidor, considerando:</p>
      <ul>
        <li>• Regime jurídico (celetista ou estatutário)</li>
        <li>• Regime previdenciário (RGPS ou RPPS)</li>
      </ul>
    </div>
  </div>
</section>

<section class="obligation-rules">
  <h2>Diretrizes para Envio de Eventos de SST</h2>
  
  <div class="rule-card">
    <h3>1. Empregados CLT (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210, S-2220 e S-2240</p>
      <p><strong>Contexto:</strong> Contratação pela CLT (emprego público)</p>
      <p><strong>Abragência:</strong> Todos os eventos de SST devem ser enviados</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>2. Servidores Estatutários (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210 e S-2240</p>
      <p><strong>Eventos dispensados:</strong> S-2220</p>
      <p><strong>Contexto:</strong> Regime estatutário vinculado ao RGPS</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>3. Servidores com RPPS instituído (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210 e S-2240</p>
      <p><strong>Eventos dispensados:</strong> S-2220</p>
      <p><strong>Contexto:</strong> RPPS instituído mas vinculação ao RGPS</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>4. Servidores Estatutários (RPPS)</h3>
    <div class="rule-content">
      <p><strong>Obrigatoriedade:</strong> Nenhum evento de SST</p>
      <p><strong>Exceção:</strong> Pode ser enviado para cumprimento da Nota Técnica 2/2014/CGNAL/DRPSP/SPPS/MPS</p>
      <p><strong>Contexto:</strong> Regime estatutário vinculado a RPPS</p>
    </div>
  </div>
  
  <div class="legal-exception">
    <h3>Exceção Legal</h3>
    <p>Para servidores vinculados a RPPS, o envio de eventos pode ser realizado para cumprimento do disposto na:</p>
    <div class="legal-reference">
      <p><strong>Nota Técnica 2/2014/CGNAL/DRPSP/SPPS/MPS</strong></p>
      <p>"As informações são obrigatórias só para segurados vinculados ao RGPS, mas é possível a informação relativa a servidores vinculados a RPPS..."</p>
    </div>
  </div>
</section>

<section class="practical-example">
  <h2>Exemplo Prático</h2>
  
  <div class="example-card">
    <h3>Cenário:</h3>
    <p>Órgão público com regime estatutário e RPPS possui:</p>
    
    <div class="employee-grid">
      <div class="employee-card">
        <h4>2 Servidores</h4>
        <p>• Cargos em comissão</p>
        <p>• Sem vínculo efetivo</p>
        <p>• Vinculados ao <strong>RGPS</strong></p>
        <div class="required-action">
          <p>Eventos obrigatórios: S-2210 e S-2240</p>
        </div>
      </div>
      
      <div class="employee-card">
        <h4>Demais Servidores</h4>
        <p>• Vínculo estatutário</p>
        <p>• Vinculados ao <strong>RPPS</strong></p>
        <div class="optional-action">
          <p>Nenhum evento obrigatório</p>
        </div>
      </div>
    </div>
    
    <div class="justification">
      <h4>Fundamentação Técnica:</h4>
      <p>O PPP (Perfil Profissiográfico Previdenciário) e a CAT (Comunicação de Acidente de Trabalho) são obrigações aplicáveis exclusivamente a segurados do RGPS, substituídas pelo eSocial.</p>
    </div>
  </div>
</section>

<section class="implementation-guide">
  <h2>Orientações para Implementação</h2>
  
  <div class="step-by-step">
    <div class="step">
      <h3>Passo 1: Classificação</h3>
      <p>Identificar o código de categoria (301-314) e regime previdenciário de cada servidor</p>
    </div>
    
    <div class="step">
      <h3>Passo 2: Mapeamento</h3>
      <p>Definir quais eventos são obrigatórios conforme tabela de diretrizes</p>
    </div>
    
    <div class="step">
      <h3>Passo 3: Configuração</h3>
      <p>Ajustar o sistema para envio seletivo conforme perfil de cada servidor</p>
    </div>
    
    <div class="step">
      <h3>Passo 4: Validação</h3>
      <p>Testar no ambiente Restrita (Teste) antes do envio à Produção</p>
    </div>
  </div>

<style>
  .public-sector-guide {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #0d47a1;
  }
  
  .identification-card {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .category-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .category-table th, .category-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  
  .category-table th {
    background-color: #bbdefb;
  }
  
  .technical-note {
    background: #ffecb3;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .system-card {
    background: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .comparison-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .comparison-table th, .comparison-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  .comparison-table th {
    background-color: #c8e6c9;
  }
  
  .comparison-table td.required {
    background-color: #c8e6c9;
    font-weight: bold;
  }
  
  .critical-info {
    background: #ffecb3;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .rule-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    border-left: 4px solid #2196F3;
  }
  
  .legal-exception {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
  }
  
  .legal-reference {
    background: #bbdefb;
    padding: 15px;
    border-radius: 4px;
    margin-top: 15px;
    font-style: italic;
  }
  
  .example-card {
    background: #f5f5f5;
    padding: 25px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .employee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .employee-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .required-action {
    background: #c8e6c9;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .optional-action {
    background: #e0e0e0;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .justification {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .step-by-step {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .step {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4caf50;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
</style>
`},{id:"Erro S-2210",title:"Erros no Evento S-2210 - Comunicação de Acidente de Trabalho",description:"Guia completo para solução de problemas no envio do evento S-2210 ao eSocial, com principais erros, fluxos de correção e procedimentos de escalonamento.",group:"Erros",tags:["eSocial","Eventos","Erro","S-2210"],content:`
    <div class="welcome-banner">
      <h1>Resolução de Erros no Evento S-2210</h1>
      <p>Este guia detalha os procedimentos para correção de erros no envio da Comunicação de Acidente de Trabalho (CAT) ao eSocial.</p>
    </div>

    <section class="core-concepts">
      <h2>Descrição do Evento S-2210</h2>
      <div class="concept-card">
        <p>O evento <strong>S-2210</strong> refere-se à Comunicação de Acidente de Trabalho (CAT) e deve ser enviado ao eSocial:</p>
        <ul>
          <li>• Sempre que ocorrer acidente de trabalho com empregado</li>
          <li>• Mesmo quando não houver afastamento</li>
          <li>• Dentro do prazo máximo de 1 dia útil após o acidente</li>
        </ul>
      </div>
    <section class="documents-section">
      <h2>Fluxo Geral de Envio</h2>
      
      <div class="document-card">
        <h3 class="document-title">Etapas do Processo</h3>
        <div class="document-content">
          <ol class="step-list">
            <h3>1. Preenchimento do evento no sistema</h3>
            <h3>2. Validação de dados obrigatórios</h3>
            <h3>3. Geração do XML do evento</h3>
            <h3>4. Envio para o eSocial</h3>
            <h3>5. Retorno do protocolo ou mensagem de erro</h3>
          </ol>
    <section class="esocial-integration">
      <h2>Principais Erros e Soluções</h2>
      
      <div class="document-card">
        <h3 class="document-title">Tabela de Erros Comuns</h3>
        <div class="document-content">
          <table class="error-table">
            <thead>
              <tr>
                <th>Mensagem de Erro</th>
                <th>Causa Provável</th>
                <th>Ação do Suporte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"O cogAgent Causador inválido"</td>
                <td>Campo divergente das tabelas 14 ou 15 do eSocial</td>
                <td>Verificar aba "Acidente" da CAT, campo "Agente Causador"</td>
              </tr>
              <tr>
                <td>"O campo {tpAcid} é obrigatório"</td>
                <td>Campo "Tipo de Acidente" não preenchido</td>
                <td>Solicitar preenchimento do campo obrigatório</td>
              </tr>
              <tr>
                <td>"Data do acidente não correspondente"</td>
                <td>Data posterior à data atual</td>
                <td>Solicitar correção da data do acidente</td>
              </tr>
              <tr>
                <td>"Data do acidente não pode ser posterior a data de envio"</td>
                <td>Data posterior à data de envio do evento</td>
                <td>Solicitar correção da data do acidente</td>
              </tr>
              <tr>
                <td>"matricula ou codCateg: O valor '' é inválido"</td>
                <td>Matrícula do funcionário não informada</td>
                <td>Verificar número da matrícula do funcionário</td>
              </tr>
              <tr>
                <td>"CNPJ do emitente não autorizado"</td>
                <td>Empresa sem vínculo correto com o evento</td>
                <td>Confirmar cadastro da empresa no portal eSocial</td>
              </tr>
            </tbody>
          </table>
          
          <div class="alert-box">
            <h4>Consulta para Erros Diversos:</h4>
            <ol>
              <li>• Identificar o erro no XML (ex: 'tpInsc Inválido')</li>
              <li>Para consultar o documento oficial:
                <ul>
                  <li><strong>Leiautes eSocial - Versão 1.3 - NT 03/2025</strong></li>
                  <li>Disponível em: <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-versao-1-3-nt-03-2025/index.html#evtCAT" target="_blank">https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-versao-1-3-nt-03-2025/index.html#evtCAT</a></li>
                </ul>
              </li>
              <li>Usar <strong>Ctrl + F</strong> para localizar termos específicos</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="nr-overview">
      <h2>Orientação para Atendimento ao Cliente</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Solicitação Inicial</h3>
          <p>Solicitar print ou código do erro</p>
        </div>
        
        <div class="nr-card">
          <h3>Questionamentos</h3>
          <p>• Nome do funcionário e empresa<br>• Escopo do problema</p>
        </div>
        
        <div class="nr-card">
          <h3>Verificação Técnica</h3>
          <p>Validar dados do evento no sistema</p>
        </div>
        
        <div class="nr-card">
          <h3>Campos Críticos</h3>
          <p>• S-2210 ativado<br>• N° Matrícula<br>• CID em maiúsculas</p>
        </div>
      </div>

      <!-- Imagem: Verificação de campos no sistema -->
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_1.png">
        <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_2.png">
      </div>

      <div class="document-card">
        <h3 class="document-title">Verificação do Agente Causador</h3>
        <div class="document-content">
          <p>Verificar na CAT do Trabalhador se o código corresponde às tabelas 14 ou 15:</p>
          
          <table class="id-table">
            <tr>
              <th>Tabela</th>
              <th>Código Iniciador</th>
              <th>Link</th>
            </tr>
            <tr>
              <td><strong>14</strong></td>
              <td>3</td>
              <td rowspan="2">
                <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/leiautes-esocial-v-1-1-beta/tabelas.html#14" target="_blank">
                  Acessar Tabelas 14/15
                </a>
              </td>
            </tr>
            <tr>
              <td><strong>15</strong></td>
              <td>2</td>
            </tr>
          </table>
          
          <div class="tip-box">
            <h4>Dica Técnica:</h4>
            <p>Quando o agente causador for diretamente o agente presente no ambiente (código iniciado por 3), deve-se utilizar a Tabela 14. Para situações geradoras ou doenças (código iniciado por 2), utiliza-se a Tabela 15. Há ainda o caso em que, tratando-se de uma doença, pode-se utilizar tanto a Tabela 14 quanto a Tabela 15.</p>
          </div>

          <!-- Imagem: Verificação do agente causador -->
          <div class="image-placeholder">
            <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_3.png">
          </div>
        </div>
      </div>
    </section>

    <section class="documents-section">
      <h2>Escalonamento Técnico</h2>
      
      <div class="document-card">
        <h3 class="document-title">Casos para Escalonamento</h3>
        <div class="document-content">
          <ul>
            <li>• Erros de retorno da API sem mensagens claras</li>
            <li>• Falha no envio com XML validado</li>
            <li>• Inconsistência de dados entre sistema e eSocial</li>
          </ul>
          
          <h4>Informações Obrigatórias para Abertura de Chamado:</h4>
          <div class="info-grid">
            <div class="info-item">
              <h5>- Print do Erro</h5>
              <p>- Captura completa da mensagem de erro</p>
            </div>
            <div class="info-item">
              <h5>- Dados da Empresa</h5>
              <p>- Nome e ID da empresa</p>
            </div>
            <div class="info-item">
              <h5>- Dados do Funcionário</h5>
              <p>- Nome e ID do funcionário</p>
            </div>
            <div class="info-item">
              <h5>- Descrição do Ocorrido</h5>
              <p>- Detalhamento completo do problema</p>
            </div>
          </div>
          
          <div class="code-block">
            <h2><strong>Modelo de Detalhamento no w-GSC:</strong></h2>
            <p>Data: 00/00/0000<br>
            Contato: xxxxxx<br>
            Empresa: xxxxxx ID: 000<br>
            Funcionário: xxxxxx ID: 000<br>
            O que ocorreu: [Descrição detalhada]<br>
            Caminho da pasta: W:\\Transfer\\_x\\Exemplo</p>
          </div>
        </div>
      </div>
    </section>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .error-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .error-table th, .error-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .error-table th {
        background-color: #f2f2f2;
      }
      
      .error-table tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      
      .alert-box {
        background: #fff8e1;
        border-left: 4px solid #ff9800;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .step-list {
        padding-left: 20px;
      }
      
      .step-list li {
        margin-bottom: 10px;
        line-height: 1.6;
      }
      
      .id-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .id-table th, .id-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: center;
      }
      
      .id-table th {
        background-color: #f2f2f2;
      }
      
      .tip-box {
        background: #e8f5e9;
        border-left: 4px solid #4CAF50;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      
      .info-item {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 8px;
      }
      
      .code-block {
        background: #f8f8f8;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin: 15px 0;
        font-family: monospace;
      }
      
      a {
        color: #2196F3;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
    </style>
  `},{id:"resolucao-erros-s2240",title:"Resolução de Erros no Evento S-2240 do eSocial",description:"Guia completo para diagnóstico e correção de falhas no envio do evento S-2240, com foco em configurações de empresa, funcionário e preenchimento de campos obrigatórios.",group:"Erros",tags:["eSocial","Eventos","Erro","S-2240"],content:`
<div class="error-resolution-guide">
  <h1>Erros no Envio do Evento S-2240</h1>
  <p>Este guia detalha os pontos críticos para resolver inconsistências no envio do evento S-2240 referente às Condições do Ambiente de Trabalho, conforme documentação técnica.</p>
  <div class="error-summary">
    <p><strong>Erro principal:</strong> Informações obrigatórias não preenchidas corretamente ou em desacordo com requisitos do eSocial</p>
    <p><strong>Causas comuns:</strong> Dados inconsistentes, campos obrigatórios em branco, preenchimento incorreto</p>
  </div>
</div>

<section class="diagnostic-section">
  <h2>Perguntas para Diagnóstico</h2>
  <div class="diagnostic-card">
    <p>Responda estas perguntas para identificar o cenário do erro:</p>
    <ul>
      <li>• <strong>Funcionário relacionado:</strong> Identificar qual colaborador está associado ao evento com erro</li>
      <li>• <strong>Empresa vinculada:</strong> Verificar a qual organização pertence o funcionário</li>
      <li>• <strong>Escopo do erro:</strong> Ocorre apenas com este funcionário ou afeta múltiplos colaboradores?</li>
      <li>• <strong>Abrangência empresarial:</strong> O erro acontece apenas nesta empresa ou em várias organizações?</li>
      <li>• <strong>Universalidade:</strong> Acontece com envios de todas as empresas diferentes?</li>
    </ul>
    <div class="technical-note">
      <p><strong>Nota Técnica:</strong> Estas perguntas permitem identificar se o erro é pontual (dados específicos) ou sistêmico (configuração geral)</p>
    </div>
  </div>
</section>

<section class="company-config">
  <h2>Configurações na Empresa (Verificação Obrigatória)</h2>
  <div class="config-grid">
    <div class="config-card critical">
      <h3>Habilitado</h3>
      <p>• Deve estar marcado como <strong class="required">SIM</strong> para envio ao eSocial</p>
      <p>• Se configurado como "Não", os eventos <strong>não serão transmitidos</strong></p>
    </div>
    
    <div class="config-card">
      <h3>Ambiente</h3>
      <p>• <strong>Produção:</strong> Envio oficial ao ambiente do governo</p>
      <p>• <strong>Restrita (Teste):</strong> Ambiente de validação pré-produção (sem efeitos legais)</p>
      <div class="warning">
        <p>Configuração incorreta gera envios para ambiente errado</p>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Método de Transmissão</h3>
      <p>• <strong>Manual:</strong> Envio direto pela empresa (controle total)</p>
      <p>• <strong>Automático A1:</strong> Uso de certificado digital para automação</p>
    </div>
    
    <div class="config-card">
      <h3>Responsabilidade</h3>
      <p>• <strong>Prestador SST:</strong> Clínica/Parceiro responsável pelo envio</p>
      <p>• <strong>Empregador:</strong> Cliente final assume responsabilidade</p>
      <p>• <strong>Contador:</strong> Empresa contábil responsável (método manual)</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_1.png">
  </div>
</section>

<section class="employee-config">
  <h2>Configurações no Funcionário (Campos Críticos)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>TSVE sem Matrícula</h3>
      <p>• Obrigatório para categorias profissionais sem matrícula</p>
      <p>• Requer preenchimento do <strong>Código de Categoria do Trabalhador</strong></p>
    </div>
    
    <div class="config-card critical">
      <h3>S-2240 Habilitado</h3>
      <p>• Deve estar explicitamente marcado como <strong class="required">SIM</strong></p>
      <p>• Configuração como "Não" impede o envio do evento</p>
    </div>
    
    <div class="config-card critical">
      <h3>Registro de Admissão</h3>
      <p>• <strong>Obrigatório</strong> para processamento correto</p>
      <p>• Ausência gera erro de vínculo empregatício</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_2.png">
  </div>
  
  <div class="sub-section">
    <h3>Admissão do Funcionário</h3>
    <div class="config-card critical">
      <h4>Número de Matrícula</h4>
      <p>• Campo obrigatório transmitido ao eSocial</p>
      <p>• Deve corresponder ao registro oficial do governo</p>
    </div>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_3.png">
    </div>
  </div>
  
  <div class="sub-section">
    <h3>Ocupações Sede</h3>
    <div class="config-card critical">
      <h4>Data Início</h4>
      <p>• Data de início de ocupação enviada ao eSocial</p>
      <p>• <strong>Deve corresponder exatamente</strong> ao registro no eSocial</p>
      <div class="warning">
        <p>Divergência causa erro de RET ou falta de vínculo</p>
      </div>
    </div>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_4.png">
    </div>
  </div>
</section>

<section class="ppp-config">
  <h2>Lotações PPP (Preenchimento Obrigatório)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>Código CBO</h3>
      <p>• Classificação ocupacional conforme tabela oficial</p>
      <p>• Consultar: <a href="http://www.mtecbo.gov.br/cbosite/pages/pesquisas/BuscaPorCodigo.jsf" target="_blank">MTE CBO</a></p>
      <p>• Atualização constante requer verificação periódica</p>
    </div>
    
    <div class="config-card">
      <h3>Código GFIP</h3>
      <p>• Informa exposição a agentes nocivos</p>
      <p>• Especifica tempo de exposição quando aplicável</p>
    </div>
    
    <div class="config-card critical">
      <h3>EPI/EPC</h3>
      <p>• <strong>Número do CA</strong> deve corresponder ao lote do produto</p>
      <p>• Inconsistências podem gerar multas</p>
      <p>• Dados de cadastro devem refletir situação real</p>
    </div>
    
    <div class="config-card critical">
      <h3>Responsáveis Técnicos</h3>
      <p>• Cadastro completo obrigatório</p>
      <p>• Informações incorretas impedem envio do evento</p>
      <p>• Deve conter: Nome completo, registro profissional, especialidade</p>
    </div>
  </div>
  
  <div class="additional-fields">
    <h4>Outros Campos Relevantes:</h4>
    <ul>
      <li>• <strong>Observações Ambientais:</strong> Transmitidas integralmente ao eSocial</li>
      <li>• <strong>Descrição de Atividade:</strong> Detalhamento das funções exercidas</li>
      <li>• <strong>Registro eSocial:</strong> Histórico de envios e erros ocorridos</li>
    </ul>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_5.png">
  </div>
</section>

<section class="risk-factors">
  <h2>Exposição a Fatores de Risco (Campo Crítico)</h2>
  <div class="critical-card">
    <h3>Preenchimento Obrigatório</h3>
    <p>• Mesmo sem exposição, selecionar: <strong class="required">Ausência de fatores de risco</strong></p>
    <p>• Campo vazio gera erro de "Informações insuficientes para gerar XML"</p>
    
    <div class="config-grid">
      <div class="config-card">
        <h4>Código do Agente Nocivo</h4>
        <p>• Obrigatório quando há direito à aposentadoria especial</p>
        <p>• Consultar Tabela 24: <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/leiautes-esocial-v-1-1-beta/tabelas.html#24" target="_blank">Agentes Nocivos - eSocial</a></p>
      </div>
      
      <div class="config-card critical">
        <h4>Número do CA</h4>
        <p>• Identificação única do EPI</p>
        <p>• Deve corresponder ao registro no Ministério do Trabalho</p>
        <p>• Essencial para rastreabilidade e validade</p>
      </div>
    </div>
    
    <div class="technical-note">
      <p><strong>Consequências de Inconsistência:</strong> Diferença entre número do CA cadastrado e utilizado na empresa pode gerar multas e penalidades</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_6.png">
  </div>
</section>

<section class="recurrent-errors">
  <h2>Ocorrências Recorrentes e Soluções</h2>
  
  <div class="error-card critical">
    <h3>Data de Ocupação ≠ Data de Admissão</h3>
    <p>• <strong>Erro resultante:</strong> RET ou falta de vínculo</p>
    <p>• <strong>Mensagem do sistema:</strong> "Dentro da data enviada, não havia cadastro do funcionário"</p>
    <p>• <strong>Solução:</strong> Uniformizar datas entre sistema e eSocial</p>
  </div>
  
  <div class="error-card critical">
    <h3>Ausência de Risco Cadastrado</h3>
    <p>• <strong>Erro resultante:</strong> Erro de Preenchimento (S-2240)</p>
    <p>• <strong>Requisito absoluto:</strong> Cadastro de risco obrigatório, mesmo que seja "Ausência de agente nocivo"</p>
    <p>• <strong>Solução:</strong> Preencher campo de exposição a riscos em todos os funcionários</p>
  </div>
  
  <div class="error-example">
    <h4>Exemplo de Erro Retornado pelo Sistema:</h4>
    <div class="code-block">
      <p>[Grupo: 1]</p>
      <p>[Campo: dataIni]</p>
      <p>[Valor: 01/01/2023]</p>
      <p>[Motivo: Não existe vínculo ativo para o trabalhador na data de início]</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_7.png">
  </div>
  
  <div class="prevention-tips">
    <h3>Medidas Preventivas</h3>
    <ul>
      <li>• Verificar consistência entre data de admissão e data de ocupação</li>
      <li>• Implementar checklist de campos obrigatórios antes do envio</li>
      <li>• Validar números de CA com fornecedores de EPI</li>
      <li>• Realizar testes no ambiente Restrita antes da produção</li>
    </ul>
  </div>
</section>

<style>
  .error-resolution-guide {
    background: linear-gradient(to right, #ffebee, #ffcdd2);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #d32f2f;
  }
  
  .error-summary {
    background: #ffffff90;
    padding: 15px;
    border-radius: 6px;
    margin-top: 20px;
    text-align: left;
  }
  
  .diagnostic-card, .critical-card {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #ffa000;
    margin: 20px 0;
  }
  
  .technical-note {
    background: #ffecb3;
    padding: 12px;
    border-radius: 4px;
    margin-top: 15px;
    font-style: italic;
  }
  
  .config-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .config-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s;
  }
  
  .config-card:hover {
    transform: translateY(-5px);
  }
  
  .config-card.critical {
    border-left: 4px solid #f44336;
    background: #ffebee;
  }
  
  .critical-card {
    border-left: 4px solid #f44336;
  }
  
  .required {
    color: #d32f2f;
    font-weight: bold;
  }
  
  .error-card {
    background: #ffebee;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #f44336;
    margin: 15px 0;
  }
  
  .error-card.critical {
    background: #ffcdd2;
  }
  
  .sub-section {
    margin: 30px 0;
    padding-left: 20px;
    border-left: 3px solid #bdbdbd;
  }
  
  .warning {
    background: #fff8e1;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 0.9em;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .additional-fields {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 6px;
    margin: 20px 0;
  }
  
  .error-example {
    margin: 25px 0;
  }
  
  .code-block {
    background: #5f5c5c79;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 4px;
    font-family: monospace;
    overflow-x: auto;
  }
  
  .prevention-tips {
    background: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin-top: 25px;
  }
</style>
`},{id:"funcionarios-declarantes-esocial",title:"Funcionários e Declarantes no eSocial - Regras de Identificação",description:"Guia completo sobre identificação de funcionários (CPF/matrícula) e declarantes (CNPJ/CPF) no contexto do eSocial, com regras específicas para casos especiais.",group:"eSocial",tags:["eSocial","Introdução"],content:`
    <div class="welcome-banner">
      <h1>Identificação no eSocial</h1>
      <p>Este guia explica as regras de identificação de funcionários e declarantes para integração com o eSocial.</p>
    </div>

    <section class="core-concepts">
      <h2>Funcionários</h2>
      <div class="concept-card">
        <p>No eSocial, os funcionários têm como <strong>identificador obrigatório o CPF</strong>, com as seguintes regras:</p>
        
        <div class="highlight-box">
          <h4>Regras Chave:</h4>
          <ul>
            <li>• Um CPF pode ter múltiplos vínculos com o mesmo declarante</li>
            <li>• Cada vínculo é identificado por um número de matrícula único</li>
            <li>• A matrícula é obrigatória para eventos de SST</li>
          </ul>
        </div>
      <div class="document-card">
        <h3 class="document-title">Casos Especiais - TSVE (Trabalhador Sem Vínculo)</h3>
        <div class="document-content">
          <p>Quando a matrícula não foi informada no evento S-2300:</p>
          
          <div class="alert-box">
            <h4>Procedimento Obrigatório:</h4>
            <ol>
              <li>Acessar <strong>Funcionários » Aba Dados Pessoais</strong></li>
              <li>Habilitar a opção <strong>"TSVE sem Matrícula"</strong></li>
              <li>Selecionar o código da <strong>Categoria do Trabalhador</strong> (Tabela 01 do eSocial)</li>
            </ol>
          </div>
          
          <h4>Regras de Matrícula:</h4>
          <ul>
            <li>- Deve corresponder à matrícula informada nos eventos S-2190, S-2200 ou S-2300</li>
            <li>- Transferências entre departamentos <strong>não alteram</strong> a matrícula</li>
            <li>- Readmissão gera <strong>nova matrícula</strong> (novo vínculo)</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Gerenciamento de Matrículas do Colaborador</h3>
        <div class="document-content">
          <p>A matrícula é informada em:</p>
          <p><strong>Funcionários » Aba Registros de Admissões</strong></p>
          
          <h4>Fluxo para Admissão/Readmissão:</h4>
          <ol>
            <li>• Criar registro de admissão</li>
            <li>• Preencher número de matrícula</li>
            <li>• Ativar vínculo do trabalhador</li>
          </ol>
    <section class="esocial-integration">
      <h2>Declarantes</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Pessoa Jurídica</h3>
          <p>Identificada apenas pelo <strong>CNPJ</strong></p>
          <p class="nr-desc">No XML: {nrInsc} = CNPJ-Raiz (8 posições)</p>
        </div>
        
        <div class="nr-card">
          <h3>Pessoa Física</h3>
          <p>Identificada apenas pelo <strong>CPF</strong></p>
          <p class="nr-desc">Utilizar <strong>CAEPF</strong> como estabelecimento</p>
        </div>
        
        <div class="nr-card">
          <h3>Administração Pública</h3>
          <p>Identificada pelo <strong>CNPJ completo (14 posições)</strong></p>
          <p class="nr-desc">Exige parametrização especial</p>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Regras Específicas para Declarantes</h3>
        <div class="document-content">
          <table class="rules-table">
            <tr>
              <th>Tipo</th>
              <th>Identificador</th>
              <th>Casos Aplicáveis</th>
            </tr>
            <tr>
              <td><strong>Pessoa Física com Atividade Econômica</strong></td>
              <td>CAEPF (antigo CEI)</td>
              <td>
                <ul>
                  <li>Contribuinte individual (408-1)</li>
                  <li>Produtor rural (412-0)</li>
                  <li>Segurado especial (402-2)</li>
                  <li>Encarregado de consórcios rurais (228-3)</li>
                  <li>Titular de cartório (303-4)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Obras de Construção Civil</strong></td>
              <td>CNO</td>
              <td>Vinculado a CNPJ ou CPF</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Configuração para Administração Pública</h3>
        <div class="document-content">
          <div class="warning-box">
            <h4>Parametrização Obrigatória:</h4>
            <p>Para clientes com natureza jurídica de Administração Pública Federal:</p>
            <ol>
              <li>Acessar <strong>Clientes - Empresas » Aba Geral</strong></li>
              <li>Habilitar <strong>"Natureza Jurídica de Adm Pública"</strong></li>
            </ol>
          </div>
          
          <p>Esta configuração garante que o campo <strong>{nrInsc}</strong> no XML seja preenchido com o CNPJ completo (14 posições).</p>
        
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .nr-desc {
        font-size: 0.9em;
        color: #555;
        margin-top: 10px;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .highlight-box {
        background: #e8f5e9;
        border-left: 4px solid #4CAF50;
        padding: 15px;
        margin: 15px 0;
        border-radius: 4px;
      }
      
      .alert-box {
        background: #fff8e1;
        border-left: 4px solid #FFC107;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .warning-box {
        background: #ffebee;
        border-left: 4px solid #F44336;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .rules-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .rules-table th, .rules-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .rules-table th {
        background-color: #f2f2f2;
      }
      
      .rules-table ul {
        margin: 0;
        padding-left: 20px;
      }
    </style>
  `},{id:"procuracoes-eletronicas-ecac",title:"Procuração Eletrônica no e-CAC",description:"Passo a passo para cadastrar procurações eletrônicas no e-CAC, permitindo que clínicas e contadores transmitam eventos eSocial em nome das empresas.",group:"eSocial",content:`
<div class="header-banner">
  <h1>Procuração Eletrônica para Transmissão eSocial</h1>
  <p>Guia completo para cadastrar autorizações no e-CAC e permitir que terceiros transmitam eventos como o S-2221</p>
</div>

<section class="intro-section">
  <h2>O Que é a Procuração Eletrônica?</h2>
  <div class="concept-card">
    <p>Documento digital que autoriza clínicas, contadores e outros prestadores a:</p>
    <ul>
      <li>• Transmitir eventos eSocial em nome da empresa</li>
      <li>• Acessar informações restritas no e-CAC</li>
      <li>• Realizar procedimentos fiscais e trabalhistas</li>
    </ul>
    <p><strong>Requisito obrigatório</strong> para transmissão de eventos por terceiros:</p>
  </div>
</section>

<!-- Passo 1 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">1</div>
    <h2>Acesso Inicial</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>• Acesse o <a href="https://cav.receita.fazenda.gov.br" target="_blank">e-CAC</a></li>
      <li>Faça login com:
        <ul>
          <li><strong>Certificado Digital e-CNPJ</strong> da empresa ou conta Gov. br com acesso ao CNPJ</li>
        </ul>
      </li>
      <li><strong>Critério essencial:</strong> Login deve ser feito em nome da pessoa jurídica outorgante</li>
    </ol>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_1.png">
    </div>
  </div>
</section>

<!-- Passo 2 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">2</div>
    <h2>Localizando o Serviço</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>Na barra de pesquisa, digite "procuração"</li>
      <li>Selecione: <strong>"CADASTRO, CONSULTA E CANCELAMENTO - PROCURAÇÃO PARA E-CAC"</strong></li>
      <li>Recomendações:
        <ul>
          <li>Consulte procurações ativas</li>
          <li>Cancele autorizações obsoletas</li>
        </ul>
      </li>
    </ol>
    
  
  
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_2.png">
    </div>
  </div>
</section>

<!-- Passo 3 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">3</div>
    <h2>Preenchendo Dados</h2>
  </div>
  
  <div class="step-content">
    <div class="form-section">
      <h3>Dados do Outorgante</h3>
      <ul>
        <li>• Preenchimento <strong>automático</strong> pelo sistema</li>
        <li>• Informações da empresa logada</li>
      </ul>
    </div>
    
    <div class="form-section">
      <h3>Dados do Procurador</h3>
      <ul>
        <li>• Informe CNPJ ou CPF do prestador (clínica/contador)</li>
        <li>• Dados complementares serão carregados automaticamente</li>
      </ul>
    </div>
    
    <div class="form-section">
      <h3>Configurações Adicionais</h3>
      <ol>
        <li>• Selecione o tipo de documento</li>
        <li>• Defina período de vigência (sugere-se alinhar ao contrato de serviços)</li>
      </ol>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_3.png">
    </div>
  </div>
</section>

<!-- Passo 4 -->
<section class="step-section critical-section">
  <div class="step-header">
    <div class="step-number">4</div>
    <h2>Definindo Permissões</h2>
  </div>
  
  <div class="step-content">
    <p>Na seção <strong>"Opções de Atendimento Permitidas para o Delegante"</strong>:</p>
    
    <div class="permissions-grid">
      <div class="permission-card required">
        <h3>Permissão Essencial</h3>
        <ul>
          <li>
            <label>
    
              eSocial - Toxicológico
            </label>
          </li>
          <li><em>(Obrigatório para transmissão S-2221)</em></li>
        </ul>
      </div>
      
      <div class="permission-card recommended">
        <h3>Permissões Recomendadas</h3>
        <ul>
          <li>
            <label>
           
              eSocial - Grupo SST
            </label>
          </li>
          <li>
            <label>
            
              eSocial - Download
            </label>
          </li>
        </ul>
        <p><em>(Para transmissão completa de eventos SST)</em></p>
      </div>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_4.png">
    </div>
  </div>
</section>

<!-- Passo 5 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">5</div>
    <h2>Finalização do Cadastro</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>Role até o final da página > </li>
      <li>Defina opção de substabelecimento:
        <ul>
          <li><strong>Permitir:</strong> Procurador pode delegar poderes</li>
          <li><strong>Não permitir:</strong> Acesso exclusivo ao procurador original</li>
        </ul>
      </li>
      <li>Resolva o <strong>Captcha</strong> de segurança.</li>
      
    
    <div class="legal-note">
      <h3>Validação Legal</h3>
      <p>Após cadastro, o prestador torna-se <strong>procurador legal</strong> da empresa para:</p>
      <ul>
        <li>• Transmissão de eventos S-2221 (Exame Toxicológico)</li>
        <li>• Envio de demais eventos SST quando autorizado</li>
        <li>• Consulta a informações restritas no e-CAC</li>
      </ul>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_5.png">
    </div>
  </div>
</section>

<section class="conclusion-section">
  <div class="benefits-card">
    <h2>Vantagens da Procuração Eletrônica</h2>
    <ul>
      <li>• Transmissão automática de eventos pelo sistema de gestão</li>
      <li>• Redução de trâmites burocráticos</li>
      <li>• Segurança jurídica nas transmissões</li>
      <li>• Centralização das autorizações</li>
    </ul>
  </div>
  
  <div class="warning-box">
    <h3>Importante</h3>
    <p>Sem procuração ativa no e-CAC, <strong>é impossível</strong> transmitir eventos eSocial em nome de terceiros</p>
  </div>
</section>

<style>
  .header-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 25px;
  }
  
  .step-section {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  }
  
  .critical-section {
    border-top: 3px solid #f44336;
  }
  
  .step-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .step-number {
    background: #2196F3;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 15px;
  }
  
  .action-box {
    background: #e8f5e9;
    padding: 15px;
    border-radius: 4px;
    margin: 15px 0;
    text-align: center;
  }
  
  .virtual-button {
    background: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    cursor: default;
  }
  
  .form-section {
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #ddd;
  }
  
  .permissions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .permission-card {
    padding: 20px;
    border-radius: 8px;
  }
  
  .permission-card.required {
    background: #ffebee;
    border-left: 4px solid #f44336;
  }
  
  .permission-card.recommended {
    background: #fff8e1;
    border-left: 4px solid #ff9800;
  }
  
  .permission-card h3 {
    margin-top: 0;
  }
  
  .permission-card ul {
    list-style: none;
    padding: 0;
  }
  
  .permission-card li {
    margin: 12px 0;
  }
  
  .permission-card input {
    margin-right: 10px;
  }
  
  .legal-note {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .benefits-card {
    background: #e8f5e9;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 25px;
  }
  
  .warning-box {
    background: #ffebee;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #f44336;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 40px;
    text-align: center;
    margin: 25px 0;
    border: 2px dashed #bdbdbd;
    border-radius: 4px;
    color: #757575;
  }
</style>
`}]},Za={id:"gerenciamento-de-riscos",title:"Gerenciamento de Riscos",description:"Este módulo aborda aspectos relacionados ao PGR, PCMSO, LTCAT, LI, LP e outros documentos ligados à saúde e segurança do trabalho.",icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill="currentColor" fill-rule="evenodd" d="M3.5 13.5v-12H8v2.75C8 5.216 8.784 6 9.75 6h3.375a.76.76 0 0 0 .063-.003A.75.75 0 0 0 14 5.25v-.774a1 1 0 0 0-.282-.695L10.363.305A1 1 0 0 0 9.643 0H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h4.25a.75.75 0 0 0 0-1.5H3.5Zm8.828-9L9.5 1.57v2.68c0 .138.112.25.25.25h2.578ZM10 15.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm3-2a.75.75 0 0 1-.75-.75V11h-1.5a.75.75 0 0 1 0-1.5h1.5V8a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/>
</svg>`,topics:[{id:"introducao-sst-novos-funcionarios",title:"Introdução à Saúde e Segurança no Trabalho",description:"Guia sobre SST, NRs, PGR, PCMSO, LTCAT e outros documentos ocupacionais para integração de novos colaboradores.",group:"Gerenciamento de Riscos",tags:["Introdução"],content:`
  <div class="welcome-banner">
    <h1>Bem-vindo à Área de SST!</h1>
    <p>Este guia foi criado para ajudar você a compreender os principais conceitos de Saúde e Segurança no Trabalho que utilizamos diariamente na gestão ocupacional.</p>
  </div>

  <section class="core-concepts">
    <h2>O Que é Saúde e Segurança no Trabalho (SST)?</h2>
    <div class="concept-card">
      <p>É um conjunto de <strong>Normas Regulamentadoras (NRs)</strong> estabelecidas pelo Ministério do Trabalho que visam:</p>
      <ul>
        <li>Minimizar ou eliminar riscos no ambiente de trabalho</li>
        <li>Reduzir custos com acidentes e afastamentos</li>
        <li>Promover saúde e qualidade de vida aos colaboradores</li>
        <li>Cumprir exigências legais e previdenciárias</li>
      </ul>
    </div>

  <section class="nr-overview">
    <h2>Principais Normas Regulamentadoras (NRs)</h2>
    
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-1</h3>
        <p>Disposições Gerais e Gerenciamento de Riscos Ocupacionais (PGR)</p>
        <p class="nr-desc">Estabelece os requisitos básicos para a implementação do PGR em todas as empresas.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-5</h3>
        <p>Comissão Interna de Prevenção de Acidentes (CIPA)</p>
        <p class="nr-desc">Regulamenta a formação e atuação da CIPA nas empresas.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-7</h3>
        <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
        <p class="nr-desc">Define os exames médicos obrigatórios e seu período de realização.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-15</h3>
        <p>Atividades e Operações Insalubres (LI - Laudo de Insalubridade)</p>
        <p class="nr-desc">Lista as atividades que conferem direito ao adicional de insalubridade.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-16</h3>
        <p>Atividades e Operações Perigosas (LP - Laudo de Periculosidade)</p>
        <p class="nr-desc">Regulamenta o adicional de periculosidade para atividades de risco.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-17</h3>
        <p>Ergonomia</p>
        <p class="nr-desc">Estabelece parâmetros para adaptação do trabalho às características do trabalhador.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-35</h3>
        <p>Trabalho em Altura</p>
        <p class="nr-desc">Define os requisitos para trabalho em altura acima de 2 metros.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Documentos Ocupacionais e sua Gestão</h2>
    
    <div class="document-card">
      <h3 class="document-title">PGR (NR-1) - Programa de Gerenciamento de Riscos</h3>
      <div class="document-content">
        <p>Documento técnico obrigatório para todas as empresas, conforme estabelecido pela NR-1.</p>
        
        <h4>Características Técnicas:</h4>
        <ul>
          <li><strong>Periodicidade:</strong> Anual, com revisões sempre que houver mudanças nos processos</li>
          <li><strong>Responsável Técnico:</strong> Engenheiro de Segurança do Trabalho ou Técnico em Segurança do Trabalho</li>
          <li><strong>Conteúdo Mínimo:</strong> Identificação de riscos, medidas de controle, cronograma de ações</li>
          <li><strong>Validade:</strong> 1 ano, podendo ser prorrogado por igual período se não houver alterações significativas</li>
        </ul>
        
        <h4>Fluxo de Gestão:</h4>
        <ol>
          <li>Cadastro inicial de setores e funções</li>
          <li>Identificação de riscos associados</li>
          <li>Plano de ação com prazos e responsáveis</li>
          <li>Assinatura digital do responsável técnico</li>
        </ol>
      
    <div class="document-card">
      <h3 class="document-title">PCMSO (NR-7) - Programa de Controle Médico de Saúde Ocupacional</h3>
      <div class="document-content">
        <p>Programa médico obrigatório que acompanha a saúde dos trabalhadores durante todo o vínculo empregatício.</p>
        
        <h4>Detalhes Importantes:</h4>
        <ul>
          <li><strong>Exames Obrigatórios:</strong> Admissional, periódico, de retorno ao trabalho, de mudança de função e demissional</li>
          <li><strong>Periodicidade:</strong> Varia conforme o risco (6 meses para alto risco, 12 meses para demais casos)</li>
          <li><strong>Documento Gerado:</strong> ASO (Atestado de Saúde Ocupacional) para cada exame realizado</li>
          <li><strong>Armazenamento:</strong> Os resultados devem ser mantidos por no mínimo 20 anos</li>
        </ul>
        
        <h4>Registro de Dados:</h4>
        <p>Os exames devem ser devidamente registrados em sistema de gestão com data, tipo, resultado e restrições identificadas.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</h3>
      <div class="document-content">
        <p>Documento técnico exigido pelo INSS para comprovação de exposição a agentes nocivos.</p>
        
        <h4>Informações Relevantes:</h4>
        <ul>
          <li><strong>Finalidade Principal:</strong> Base para concessão de aposentadoria especial</li>
          <li><strong>Validade:</strong> 5 anos, podendo ser antecipada em caso de mudanças significativas</li>
          <li><strong>Conteúdo:</strong> Descrição detalhada das atividades, agentes nocivos, níveis de exposição e medidas de controle</li>
          <li><strong>Vínculo com PGR:</strong> Os dados de exposição geralmente são correlacionados com o PGR</li>
        </ul>
        
        <h4>Diferencial:</h4>
        <p>Enquanto o Laudo de Insalubridade (NR-15) foca nos adicionais, o LTCAT tem caráter previdenciário.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LI/NR-15 - Laudo de Insalubridade</h3>
      <div class="document-content">
        <p>Documento que comprova a exposição do trabalhador a agentes insalubres conforme limites estabelecidos na NR-15.</p>
        
        <h4>Detalhamento:</h4>
        <ul>
          <li><strong>Graus de Insalubridade:</strong> Máximo (40%), Médio (20%) e Mínimo (10%) do salário mínimo</li>
          <li><strong>Agentes Avaliados:</strong> Ruído, calor, radiações, produtos químicos, entre outros</li>
          <li><strong>Metodologia:</strong> Requer medições ambientais com equipamentos específicos</li>
          <li><strong>Validade:</strong> Indeterminada, mas deve ser refeito quando houver alterações nas condições</li>
        </ul>
        
        <h4>Cálculo:</h4>
        <p>A definição do grau de insalubridade deve seguir estritamente as medições e limites da norma.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LP/NR-16 - Laudo de Periculosidade</h3>
      <div class="document-content">
        <p>Documento técnico que atesta condições de risco iminente conforme definido na NR-16.</p>
        
        <h4>Especificações:</h4>
        <ul>
          <li><strong>Adicional:</strong> 30% sobre o salário base (não incide sobre outros adicionais)</li>
          <li><strong>Atividades Enquadradas:</strong> Explosivos, energia elétrica, inflamáveis, segurança patrimonial armada</li>
          <li><strong>Característica:</strong> Não requer medição quantitativa, apenas qualificação da atividade</li>
          <li><strong>Validade:</strong> Enquanto persistirem as condições de periculosidade</li>
        </ul>
        
        <h4>Atenção:</h4>
        <p>A alocação de trabalhadores em funções perigosas gera obrigações trabalhistas imediatas.</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Integração com o eSocial</h2>
    <p>Os sistemas de gestão de SST modernos enviam automaticamente os seguintes eventos para o eSocial:</p>
    
    <div class="event-grid">
      <div class="event-card">
        <h4>S-2210</h4>
        <p><strong>Comunicação de Acidente de Trabalho</strong></p>
        <p>Deve ser enviado em até 1 dia útil após o acidente. Contém dados do acidentado, tipo de lesão e CID.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2220</h4>
        <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
        <p>Registra todos os exames ocupacionais realizados, vinculados ao PCMSO da empresa.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2221</h4>
        <p><strong>Exame Toxicológico</strong></p>
        <p>Obrigatório para motoristas profissionais (Lei 13.103/2015). Resultados positivos geram bloqueio automático no sistema.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2240</h4>
        <p><strong>Condições do Ambiente de Trabalho</strong></p>
        <p>Comunica os riscos ambientais identificados no PGR e as medidas de controle adotadas.</p>
      </div>
      
      <div class="event-card">
        <h4>S-3000</h4>
        <p><strong>Eventos de Saúde e Segurança</strong></p>
        <p> Utilizado para tornar sem efeito (excluir) um evento que foi enviado incorretamente.</p>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }
    
    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin: 15px 0;
    }
    
    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }
    
    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }
    
    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }
    
    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }
    
    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .document-content {
      padding: 25px;
    }
    
    .document-content h4 {
      color: #2196F3;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    
    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }
    
    .event-card p {
      margin: 8px 0;
    }
    
    .event-card p:first-of-type {
      font-weight: bold;
      margin-bottom: 12px;
    }
  </style>
`},{id:"diferenca-li-lp",title:"Diferença entre LI e LP - Conceitos, Aplicações e Obrigações Legais",description:"Guia visual comparativo entre Laudo de Insalubridade (LI) e Laudo de Periculosidade (LP), com objetivos, bases legais, critérios, prazos e orientações práticas.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <div class="welcome-banner">
        <h1>Diferença entre LI e LP</h1>
        <p>Este guia esclarece as funções, critérios e aplicações práticas do <strong>Laudo de Insalubridade (LI)</strong> e do <strong>Laudo de Periculosidade (LP)</strong>, essenciais para a conformidade legal e a proteção do trabalhador.</p>
    </div>

    <section class="steps-container">
        <!-- Passo 1 -->
        <div class="step-card hover-card">
            <div class="step-number">1</div>
            <h3>Laudo de Insalubridade (LI)</h3>
            <p><strong>O que é:</strong> Documento técnico elaborado por médico ou engenheiro de segurança do trabalho para identificar, avaliar e classificar atividades insalubres, conforme parâmetros da NR-15.</p>
            <ul class="aligned-list">
                <li><strong>Objetivos:</strong> Determinar exposição a agentes nocivos; Classificar grau (mínimo, médio ou máximo); Indicar medidas de controle.</li>
                <li><strong>Agentes avaliados:</strong> Físicos (ruído, vibração, calor, frio, radiações não ionizantes), Químicos (poeiras, fumos metálicos, vapores, gases), Biológicos (bactérias, vírus, fungos).</li>
                <li><strong>Base legal:</strong> NR-15 / CLT arts. 189 e 192.</li>
            </ul>
        </div>

        <!-- Passo 2 -->
        <div class="step-card hover-card">
            <div class="step-number">2</div>
            <h3>Laudo de Periculosidade (LP)</h3>
            <p><strong>O que é:</strong> Documento técnico elaborado por médico ou engenheiro de segurança do trabalho para avaliar se o trabalhador exerce atividades perigosas, conforme critérios da NR-16.</p>
            <ul class="aligned-list">
                <li><strong>Objetivos:</strong> Identificar risco iminente à vida; Determinar enquadramento conforme NR-16; Recomendar medidas preventivas.</li>
                <li><strong>Riscos avaliados:</strong> Inflamáveis e explosivos; Energia elétrica; Radiações ionizantes; Segurança armada.</li>
                <li><strong>Base legal:</strong> NR-16 / CLT art. 193.</li>
            </ul>
        </div>

        <!-- Passo 3 -->
        <div class="step-card hover-card">
            <div class="step-number">3</div>
            <h3>Comparativo LI x LP</h3>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Critério</th>
                            <th>LI</th>
                            <th>LP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Natureza do risco</td>
                            <td>Danos à saúde a longo prazo</td>
                            <td>Risco iminente de morte/acidente grave</td>
                        </tr>
                        <tr>
                            <td>Tipo de agente</td>
                            <td>Físico, químico, biológico</td>
                            <td>Inflamável, explosivo, eletricidade, radiação ionizante, segurança armada</td>
                        </tr>
                        <tr>
                            <td>Adicional</td>
                            <td>10%, 20% ou 40% sobre salário mínimo</td>
                            <td>30% sobre salário-base</td>
                        </tr>
                        <tr>
                            <td>Objetivo</td>
                            <td>Proteger saúde</td>
                            <td>Proteger vida e integridade física</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Passo 4 -->
        <div class="step-card hover-card">
            <div class="step-number">4</div>
            <h3>Quando Solicitar</h3>
            <ul class="aligned-list">
                <li><strong>LI:</strong> Admissão em atividades com agentes nocivos; Mudança no processo produtivo; Suspeita de exposição acima do limite; Fiscalizações ou ações trabalhistas.</li>
                <li><strong>LP:</strong> Atividades com inflamáveis, explosivos, eletricidade ou riscos da NR-16; Alterações elétricas/combustíveis; Auditorias ou fiscalizações.</li>
            </ul>
        </div>

        <!-- Passo 5 -->
        <div class="step-card hover-card">
            <div class="step-number">5</div>
            <h3>Finalidade dos Laudos</h3>
            <ul class="aligned-list">
                <li>Comprovação legal perante órgãos fiscalizadores.</li>
                <li>Cálculo de adicionais salariais.</li>
                <li>Prevenção e segurança, orientando medidas e EPIs.</li>
                <li>Proteção jurídica para empresa e trabalhador.</li>
                <li>Atendimento ao eSocial (ex.: S-2240).</li>
            </ul>
        </div>
    </section>

    <style>
        .welcome-banner {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 25px;
        }
        .steps-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        .step-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            position: relative;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .hover-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .step-number {
            background: #2196F3;
            color: white;
            font-weight: bold;
            font-size: 1.2em;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -12px;
            left: -12px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .aligned-list {
            list-style-position: inside;
            margin-top: 10px;
            padding-left: 10px;
        }
        .comparison-table table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        .comparison-table th, .comparison-table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .comparison-table th {
            background: #f5f5f5;
        }
        .comparison-table tbody tr:hover {
            background: #e3f2fd;
        }
    </style>
    `},{id:"ltcat-guia-completo",title:"LTCAT: o que é, finalidade, validade e quando elaborar",description:"Laudo Técnico das Condições Ambientais do Trabalho: conceito, finalidade previdenciária (PPP/aposentadoria especial), quando elaborar, validade/atualização e integração com o eSocial.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <div class="welcome-banner">
      <h1>LTCAT – Laudo Técnico das Condições Ambientais do Trabalho</h1>
      <p>Documento técnico-legal que registra a exposição dos trabalhadores a agentes nocivos no ambiente laboral
      (químicos, físicos e biológicos), servindo de base para <span class="hover-tip" data-title="Documento histórico-laboral exigido pelo INSS; utiliza dados do LTCAT para caracterizar exposições."><strong>PPP</strong></span>
      e para concessão de <strong>aposentadoria especial</strong>.</p>
    </div>

    <section class="core-concepts">
      <h2>Conceito e Objetivo</h2>
      <div class="concept-card">
        <ul>
          <li>Registrar, de forma técnica e com amparo legal, as <strong>condições ambientais de trabalho</strong>.</li>
          <li>Caracterizar a <strong>exposição ocupacional</strong> a agentes nocivos e sua intensidade/concentração.</li>
          <li>Dar lastro técnico para emissão do <strong>PPP</strong> e para o envio de <span class="hover-tip" data-title="Sistema público de escrituração digital de obrigações trabalhistas, previdenciárias e fiscais."><strong>eventos de SST no eSocial</strong></span>.</li>
          <li>Apoiar programas ocupacionais: <strong>PCMSO</strong> e <strong>PGR</strong>.</li>
        </ul>
      </div>
    </section>

    <section class="documents-section">
      <h2>Finalidades Práticas</h2>
      <div class="grid-container">
        <div class="doc-card">
          <h3>Base Previdenciária</h3>
          <ul>
            <li>Suporte à <strong>aposentadoria especial</strong> (15, 20 ou 25 anos conforme agente e enquadramento).</li>
            <li>Fonte oficial para <strong>PPP</strong> e auditorias previdenciárias.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Gestão de SST</h3>
          <ul>
            <li>Evidencia os agentes nocivos presentes no ambiente de trabalho.</li>
            <li>Subsidiar decisões do <strong>PGR</strong> e acompanhamento clínico pelo <strong>PCMSO</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Conformidade</h3>
          <ul>
            <li>Comprovação legal perante fiscalizações trabalhistas e previdenciárias.</li>
            <li>Resguardo formal inclusive quando a empresa alega <em>“não haver riscos”</em>.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="nr-overview">
      <h2>Quando é obrigatório elaborar</h2>
      <div class="concept-card">
        <p>Aplicável a todas as empresas com empregados regidos pela CLT (inclui MEI com funcionário e órgãos públicos celetistas), especialmente quando houver:</p>
        <ul>
          <li><strong>Exposição a agentes nocivos</strong> acima dos limites de tolerância (químicos, físicos, biológicos).</li>
          <li>Atividades com potencial de <strong>aposentadoria especial</strong> (25, 20 ou 15 anos).</li>
          <li>Obrigação de emitir <strong>PPP</strong> — inclusive para comprovar <em>inexistência de riscos</em>.</li>
          <li>Necessidade de informações para envio ao eSocial:
            <ul>
              <li><span class="hover-tip" data-title="Evento de Fatores de Risco — comunica exposições por lotação/funcão."><strong>S-2240</strong></span> — Condições Ambientais do Trabalho</li>
              <li><span class="hover-tip" data-title="Evento de exames ocupacionais do PCMSO."><strong>S-2220</strong></span> — Monitoramento da Saúde do Trabalhador</li>
            </ul>
          </li>
        </ul>
        <div class="info-box">
          <strong>Importante:</strong> Mesmo empresas que declaram não possuir riscos devem formalizar essa condição via LTCAT para evitar passivos.
        </div>
      </div>
    </section>

    <section class="documents-section">
      <h2>Validade e Atualização</h2>
      <div class="document-card">
        <div class="document-content">
          <ul>
            <li>Sem <strong>prazo fixo</strong> em lei — vigor <em>enquanto as condições permanecerem</em>.</li>
            <li><strong>Atualizar</strong> sempre que houver mudanças de layout, processo, máquinas, EPI/EPC ou agentes que alterem a exposição.</li>
            <li><strong>Boas práticas:</strong> revisar ao menos <strong>anualmente</strong> ou a cada alteração significativa, alinhado ao ciclo do PGR e aos prazos do eSocial.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="esocial-integration">
      <h2>Conteúdo Mínimo e Estrutura Técnica</h2>
      <div class="grid-container">
        <div class="doc-card">
          <h3>Responsáveis</h3>
          <ul>
            <li>Elaboração por <strong>Engenheiro de Segurança</strong> ou <strong>Médico do Trabalho</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Itens do Laudo</h3>
          <ul>
            <li>Descrição das <strong>atividades</strong> e <strong>setores</strong>.</li>
            <li>Lista de <strong>agentes nocivos</strong> e <strong>níveis de exposição</strong> (métodos de avaliação).</li>
            <li><strong>Medidas de controle</strong> existentes (EPC/EPI) e recomendações.</li>
            <li>Relação com <strong>PGR</strong> e impactos no <strong>PCMSO</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Integração eSocial</h3>
          <ul>
            <li><strong>S-2240</strong>: fatores de risco por lotação e medidas de controle.</li>
            <li><strong>S-2220</strong>: exames e avaliações clínicas vinculadas ao PCMSO.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="legal-section">
      <h2>Base Legal e Referências</h2>
      <div class="comparison-table">
        <table>
          <tr>
            <th>Norma</th>
            <th>Escopo</th>
          </tr>
          <tr>
            <td>Lei 8.213/1991 — Art. 58</td>
            <td>Define critérios de exposição para fins previdenciários (aposentadoria especial).</td>
          </tr>
          <tr>
            <td>Decreto 3.048/1999</td>
            <td>Regulamento da Previdência Social (detalhamento dos enquadramentos).</td>
          </tr>
          <tr>
            <td>IN INSS 128/2022</td>
            <td>Procedimentos para comprovação de exposição e PPP.</td>
          </tr>
          <tr>
            <td>NR-15</td>
            <td>Atividades e Operações Insalubres (limites e critérios técnicos).</td>
          </tr>
          <tr>
            <td>PGR (NR-1)</td>
            <td>Integração com a gestão de riscos ocupacionais (substituiu a antiga NR-9/PPRA).</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="faq-section">
      <h2>Perguntas Frequentes (FAQ)</h2>
      <details>
        <summary>Quem pode assinar o LTCAT?</summary>
        <p>Engenheiro de Segurança do Trabalho ou Médico do Trabalho, conforme legislação previdenciária.</p>
      </details>
      <details>
        <summary>Se não há agentes nocivos, preciso do LTCAT?</summary>
        <p>Sim. O laudo formaliza a inexistência de exposição e resguarda a empresa em fiscalizações e ações.</p>
      </details>
      <details>
        <summary>Qual a periodicidade de revisão?</summary>
        <p>Não há prazo fixo em lei; recomenda-se revisão anual ou sempre que houver alteração significativa.</p>
      </details>
    </section>
    <style>
      :root {
        --brand-blue: #2196F3;
        --brand-black: #0f172a;
        --brand-white: #ffffff;
        --muted: #f5f5f5;
      }
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 10px;
        margin-bottom: 30px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.05);
      }
      h1, h2, h3 { color: var(--brand-black); }
      .core-concepts .concept-card,
      .concept-card,
      .doc-card,
      .document-card,
      .event-card {
        background: var(--brand-white);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        border-left: 4px solid var(--brand-blue);
        margin: 15px 0;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      .document-card { padding: 0; overflow: hidden; border-left: none; }
      .document-content { padding: 25px; }
      .comparison-table table { width: 100%; border-collapse: collapse; }
      .comparison-table th, .comparison-table td { border: 1px solid #e0e0e0; padding: 12px; text-align: left; }
      .comparison-table th { background: #f7f7f7; }
      .image-placeholder {
        background: var(--muted);
        padding: 40px; text-align: center; margin: 30px 0;
        border: 2px dashed #ccc; border-radius: 8px;
      }
      .info-box {
        background: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px 16px; margin-top: 16px;
      }
      /* Hovers (tooltips) */
      .hover-tip { position: relative; cursor: help; border-bottom: 1px dashed var(--brand-blue); }
      .hover-tip::after {
        content: attr(data-title);
        position: absolute; left: 0; bottom: calc(100% + 8px);
        background: var(--brand-black); color: var(--brand-white);
        padding: 8px 10px; border-radius: 6px; white-space: nowrap; font-size: .85em; line-height: 1.2;
        opacity: 0; transform: translateY(4px); pointer-events: none; transition: all .2s ease;
      }
      .hover-tip:hover::after { opacity: 1; transform: translateY(0); }
      /* Details hover styling */
      details { background: #fafafa; border: 1px solid #eaeaea; border-radius: 8px; padding: 12px 14px; margin: 10px 0; }
      details[open] { border-color: var(--brand-blue); }
      summary { cursor: pointer; }
      /* Lists spacing */
      ul { padding-left: 18px; }
      li { margin: 6px 0; }
    </style>
    `},{id:"pcmso-programa-controle-medico",title:"PCMSO - Guia Completo sobre o Programa de Controle Médico de Saúde Ocupacional",description:"Entenda o que é o PCMSO, sua importância, os exames obrigatórios, o Relatório Analítico e as responsabilidades da empresa conforme a NR-7.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <style>
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease-in-out;
      }

      .document-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }

      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }

      .document-content {
        padding: 25px;
      }

      .document-content h4 {
        color: #2196F3;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }

      .info-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }

      .info-card ul {
        padding-left: 20px;
        margin: 0;
      }

      .info-card li {
        margin-bottom: 8px;
      }

    </style>

    <div class="document-card">
      <h3 class="document-title">O que é o PCMSO (NR-7)?</h3>
      <div class="document-content">
        <p>O <strong>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</strong> é um programa obrigatório para todas as empresas com empregados regidos pela CLT, conforme estabelecido pela Norma Regulamentadora NR-7.</p>
        <ul>
          <li><strong>Finalidade Principal:</strong> Proteger e preservar a saúde dos trabalhadores através de ações de prevenção e diagnóstico precoce de doenças relacionadas ao trabalho.</li>
          <li><strong>Integração:</strong> O PCMSO deve estar alinhado com o Programa de Gerenciamento de Riscos (PGR).</li>
          <li><strong>eSocial:</strong> As informações do PCMSO são enviadas principalmente através do evento S-2220 (Monitoramento da Saúde do Trabalhador).</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Exames Ocupacionais Contemplados</h3>
      <div class="document-content">
        <h4>Exames Obrigatórios por Lei:</h4>
        <ul>
          <li><strong>Admissional:</strong> Realizado antes do colaborador iniciar suas atividades.</li>
          <li><strong>Periódico:</strong> Feito em intervalos regulares, definidos de acordo com os riscos da função.</li>
          <li><strong>Retorno ao Trabalho:</strong> Necessário após afastamento por motivo de doença ou acidente.</li>
          <li><strong>Mudança de Função:</strong> Aplicado quando o trabalhador muda de atividade, se houver alteração de risco.</li>
          <li><strong>Demissional:</strong> Realizado no processo de desligamento do funcionário.</li>
        </ul>
        <h4>Exames Complementares:</h4>
        <p>Podem ser exigidos outros exames de acordo com os riscos identificados no ambiente de trabalho. O objetivo é a vigilância ativa da saúde para detectar doenças ocupacionais precocemente.</p>
        <ul>
          <li>Exemplos: Audiometria, radiologia, espirometria e outros exames específicos.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
        <h3 class="document-title">Importância e Funções Essenciais do PCMSO</h3>
        <div class="document-content">
            <p>O PCMSO desempenha um papel crucial na saúde ocupacional, com diversas funções definidas pela NR-7:</p>
            <div class="info-grid">
                <div class="info-card">
                    <h4>Prevenção e Diagnóstico</h4>
                    <ul>
                        <li>Detectar precocemente agravos à saúde.</li>
                        <li>Avaliar exposições a agentes nocivos.</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h4>Gestão de Aptidão</h4>
                    <ul>
                        <li>Definir a aptidão do trabalhador para a função.</li>
                        <li>Subsidiar ações de reabilitação profissional.</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h4>Análise e Controle</h4>
                    <ul>
                        <li>Apoiar análises epidemiológicas.</li>
                        <li>Monitorar imunizações ocupacionais recomendadas.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class="document-card">
      <h3 class="document-title">Relatório Analítico do PCMSO</h3>
      <div class="document-content">
        <p>É um documento anual e obrigatório, elaborado pelo médico do trabalho, que funciona como uma avaliação crítica do PCMSO. Seu principal objetivo é analisar e comparar dados de saúde para identificar riscos, prevenir doenças e, se necessário, ajustar o PCMSO e o PGR.</p>
        <h4>O que o relatório contém?</h4>
        <ul>
          <li><strong>Exames Clínicos:</strong> Número de exames admissionais, periódicos, de retorno, de mudança de risco e demissionais realizados.</li>
          <li><strong>Exames Complementares:</strong> Estatísticas sobre a quantidade e os tipos de exames complementares feitos.</li>
          <li><strong>Resultados Anormais:</strong> Dados de exames com resultados fora do padrão, detalhados por tipo, setor ou função.</li>
          <li><strong>Saúde Geral:</strong> Incidência de doenças relacionadas ao trabalho e informações das CATs emitidas.</li>
          <li><strong>Análise Comparativa:</strong> Comparação dos resultados atuais com os do relatório anterior para identificar tendências.</li>
        </ul>
        <h4>Finalidade Estratégica:</h4>
        <ul>
            <li>Avaliar a eficácia das ações de prevenção e monitoramento da saúde.</li>
            <li>Identificar áreas e funções com maiores riscos para intervenções direcionadas.</li>
            <li>Fornecer dados para revisar e aprimorar o PGR.</li>
            <li>Oferecer dados concretos para decisões da gestão sobre investimentos em saúde e segurança.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Responsabilidades e Benefícios</h3>
      <div class="document-content">
        <h4>Responsabilidade do Empregador:</h4>
        <ul>
          <li>Elaborar, implantar e custear todos os procedimentos do programa, sem ônus ao empregado.</li>
          <li>Indicar um médico do trabalho para ser o responsável pelo PCMSO.</li>
          <li style="font-size: 0.9em;"><em>Obs: Empresas de grau de risco 1 ou 2, com até 25 empregados, podem ser dispensadas da indicação de médico coordenador.</em></li>
        </ul>
        <h4>Relevância para a Empresa:</h4>
        <ul>
          <li><strong>Legalidade:</strong> Cumprir a NR-7 protege a empresa de multas e ações judiciais.</li>
          <li><strong>Produtividade:</strong> Um ambiente de trabalho seguro reduz o absenteísmo e melhora o clima organizacional.</li>
        </ul>
      </div>
    </div>
  `},{id:"pgr-programa-gerenciamento-riscos",title:"PGR - Guia Completo do Programa de Gerenciamento de Riscos (NR-1)",description:"Entenda o que é o PGR, sua estrutura com Inventário de Riscos e Plano de Ação, quem precisa elaborar, prazos de revisão e as exceções da norma.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <style>
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease-in-out;
      }

      .document-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }

      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }

      .document-content {
        padding: 25px;
      }

      .document-content h4 {
        color: #2196F3;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .info-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }

      .warning-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }

    </style>

    <div class="document-card">
      <h3 class="document-title">O que é o PGR (Programa de Gerenciamento de Riscos)?</h3>
      <div class="document-content">
        <p>O PGR é a formalização do Gerenciamento de Riscos Ocupacionais (GRO) por meio de documentos, com o objetivo de promover um ambiente de trabalho seguro e saudável. Ele se tornou obrigatório em <strong>3 de janeiro de 2022</strong>, com a nova redação da NR-01.</p>
        <ul>
          <li><strong>Substituição:</strong> O PGR substituiu o antigo PPRA (Programa de Prevenção de Riscos Ambientais), que existia desde 1994.</li>
          <li><strong>Escopo Ampliado:</strong> Diferente do PPRA, o PGR abrange também riscos ergonômicos e de acidentes.</li>
          <li><strong>Obrigatoriedade:</strong> Todas as empresas que contratam funcionários sob o regime CLT devem elaborar o PGR.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Estrutura Mínima do PGR</h3>
      <div class="document-content">
        <p>Conforme a NR-01, o PGR deve conter, no mínimo, dois documentos principais:</p>
        <div class="info-grid">
          <div class="info-card">
            <h4>1. Inventário de Riscos Ocupacionais</h4>
            <p>Documento que identifica e avalia os perigos no ambiente de trabalho. Ele deve incluir:</p>
            <ul>
              <li>Caracterização dos ambientes e atividades.</li>
              <li>Descrição de lesões potenciais e grupos de trabalhadores expostos.</li>
              <li>Análise de exposições a agentes físicos, químicos e biológicos.</li>
              <li>Critérios de avaliação e classificação dos riscos (probabilidade vs. severidade).</li>
              <li>O histórico deve ser mantido por, no mínimo, 20 anos.</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>2. Plano de Ação</h4>
            <p>Define as medidas de prevenção a serem adotadas, contendo um cronograma, formas de acompanhamento e avaliação dos resultados.</p>
            <p>O PGR também deve prever procedimentos para resposta a emergências e se integrar a outras ações, como a análise de acidentes e o PCMSO.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Prazos e Revisões do PGR</h3>
      <div class="document-content">
        <p>A NR-01 não define um "prazo de validade" fixo, mas exige que a avaliação de riscos seja revista periodicamente.</p>
        <ul>
          <li><strong>Revisão Padrão:</strong> A avaliação de riscos deve ser revista, no máximo, a cada 2 anos.</li>
          <li><strong>Revisão Estendida:</strong> Empresas com certificações em SST podem estender o prazo para até 3 anos.</li>
        </ul>
        <h4>Revisões Obrigatórias Imediatas</h4>
        <p>O PGR deve ser revisado sempre que ocorrerem as seguintes situações:</p>
        <ul>
          <li>Implementação de novas medidas de prevenção (para reavaliar os riscos residuais).</li>
          <li>Mudanças nos processos, tecnologias ou na organização do trabalho.</li>
          <li>Ocorrência de acidentes de trabalho ou doenças ocupacionais.</li>
          <li>Alterações na legislação aplicável.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Quem está dispensado de elaborar o PGR?</h3>
      <div class="document-content">
        <p>A NR-01 prevê algumas exceções à obrigatoriedade de elaboração do PGR.</p>
        <div class="warning-box">
          <h4>Casos de Dispensa:</h4>
          <ul>
            <li><strong>Microempreendedor Individual (MEI):</strong> Está sempre dispensado de elaborar o PGR.</li>
            <li><strong>Microempresas (ME) e Empresas de Pequeno Porte (EPP):</strong> Podem ser dispensadas se atenderem a dois critérios simultaneamente:
              <ul>
                <li>Serem de grau de risco 1 ou 2.</li>
                <li>Não identificarem perigos de agentes físicos, químicos ou biológicos em seu levantamento preliminar de riscos e declararem essas informações digitalmente.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `},{id:"prazos-validade-sst",title:"Prazos de Validade, Elaboração e Atualização de Documentos de SST",description:"Guia prático sobre prazos de validade, elaboração, renovação e revisão de documentos de Saúde e Segurança no Trabalho (SST), incluindo PCMSO, PGR, LTCAT, LI e LP.",group:"Documentos",content:`
    <div class="welcome-banner">
      <h1>Prazos de Validade e Atualização em SST</h1>
      <p>Este guia detalha os prazos de validade, momentos de elaboração, renovação e revisão dos principais documentos de Saúde e Segurança no Trabalho (SST).</p>
    </div>

    <section class="core-concepts">
      <h2>Resumo Prático – Quando Agir</h2>
      <div class="concept-card">
        <ul>
          <li><strong>Implantar:</strong> Quando a empresa inicia atividades ou novos setores que envolvam riscos ocupacionais.</li>
          <li><strong>Renovar:</strong> Quando o documento atinge o fim de sua validade ou há mudanças profundas no ambiente de trabalho.</li>
          <li><strong>Revisar:</strong> Quando há ajustes pontuais, como novos EPIs, troca de máquinas, mudança de layout ou alteração de produto químico.</li>
        </ul>
      </div>

    <section class="documents-section">
      <h2>Detalhamento dos Documentos de SST</h2>

      <div class="document-card">
        <h3 class="document-title">PCMSO (NR-07) - Programa de Controle Médico de Saúde Ocupacional</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> 1 ano (renovação anual).</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades da empresa com empregados regidos pela CLT.</li>
            <li><strong>Renovação Obrigatória:</strong> Anualmente, com nova programação de exames.</li>
            <li><strong>Quando Revisar:</strong> Sempre que houver mudança nos riscos ocupacionais identificados.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">PGR (NR-01) - Programa de Gerenciamento de Riscos</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> 1 ano para análise documental (pode ser atualizado a qualquer momento).</li>
            <li><strong>Quando Elaborar:</strong> Antes do início das operações.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver alteração significativa nos riscos ou processos.</li>
            <li><strong>Quando Revisar:</strong> Sempre que houver novos equipamentos, processos ou mudanças de layout.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LTCAT - Laudo Técnico das Condições Ambientais do Trabalho</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem validade fixa por lei, mas deve estar sempre atualizado.</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades que possam expor trabalhadores a agentes nocivos.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver alteração de processos, layout ou agentes.</li>
            <li><strong>Quando Revisar:</strong> A cada nova medição ou atualização tecnológica.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LI (NR-15) - Laudo de Insalubridade</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem prazo fixo, atualizado conforme necessidade.</li>
            <li><strong>Quando Elaborar:</strong> Ao admitir trabalhadores em atividades com possíveis agentes nocivos.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando confirmada alteração de agentes ou intensidade de exposição.</li>
            <li><strong>Quando Revisar:</strong> Após mudanças no processo, substituição de EPI/EPC ou troca de função.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LP (NR-16) - Laudo de Periculosidade</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem prazo fixo, atualizado conforme necessidade.</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades com inflamáveis, explosivos, eletricidade, radiação ionizante ou segurança armada.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver mudança de atividade ou risco.</li>
            <li><strong>Quando Revisar:</strong> Após modificações na área de risco ou mudança de função.</li>
          </ul>
        </div>
      </div>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
        transition: background-color 0.3s ease;
      }
      .welcome-banner:hover {
        background: #bbdefb;
      }

      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
        transition: transform 0.2s ease;
      }
      .concept-card:hover {
        transform: translateY(-5px);
      }

      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease;
      }
      .document-card:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }

      .document-content {
        padding: 25px;
      }

      .document-content h4 {
        color: #2196F3;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
        transition: border-color 0.3s ease;
      }
      .image-placeholder:hover {
        border-color: #2196F3;
      }

      ul li {
        margin-bottom: 10px;
        position: relative;
        padding-left: 20px;
      }
      ul li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #2196F3;
        font-size: 1.2em;
      }
    </style>
  `},{id:"rat-risco-acidente-trabalho",title:"RAT - Risco Acidente de Trabaho: Legislação e Enquadramento",description:"Guia completo sobre o RAT, alíquotas, legislação e enquadramento previdenciário.",group:"Gerenciamento de Riscos",content:`
<div class="welcome-banner">
  <h1>Entendendo o RAT - Risco Acidente de Trabalho</h1>
  <p>Este guia explica o conceito, legislação e aplicação prática do RAT no contexto previdenciário e de segurança do trabalho.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o RAT (Risco Acidente de Trabalho)?</h2>
  <div class="concept-card">
    <p>O RAT representa a contribuição da empresa, prevista no inciso II do artigo 22 da Lei 8212/91, e consiste em percentual que mede o risco da atividade econômica.</p>
    <p>Com base neste percentual, é cobrada a contribuição para financiar os benefícios previdenciários decorrentes do grau de incidência de incapacidade laborativa (GIIL-RAT).</p>
  </div>

<section class="nr-overview">
  <h2>Alíquotas do RAT e Sua Aplicação</h2>
  
  <div class="grid-container">
    <div class="nr-card hover-effect">
      <h3>1%</h3>
      <p>Atividades de Risco Mínimo</p>
      <p class="nr-desc">Aplicável a atividades econômicas com baixo potencial de acidentes de trabalho.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>2%</h3>
      <p>Atividades de Risco Médio</p>
      <p class="nr-desc">Para atividades com potencial moderado de ocorrência de acidentes de trabalho.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>3%</h3>
      <p>Atividades de Risco Grave</p>
      <p class="nr-desc">Aplicável a atividades com alto potencial de acidentes e doenças ocupacionais.</p>
    </div>
  </div>

  <div class="warning-box">
    <h4>Atenção:</h4>
    <p>Havendo exposição do trabalhador a agentes nocivos que permitam a concessão de aposentadoria especial, há acréscimo das alíquotas na forma da legislação em vigor. Além disso, é importante ressaltar que a Contabilidade, o RH ou a Folha serão responsáveis por essa questão do vínculo do funcionário à plataforma do eSocial. Esse procedimento deverá ser realizado primeiro, para que os eventos de SST possam ser enviados.</p>
  </div>
</section>

<section class="documents-section">
  <h2>Variações nas Alíquotas do RAT</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Redução de Até 50%</h3>
    <div class="document-content">
      <p>O percentual de 1%, 2% ou 3% poderá ser reduzido em até cinquenta por cento conforme regulamento.</p>
      
      <h4>Critérios para Redução:</h4>
      <ul class="bullet-list">
        <li>Bom desempenho da empresa em relação à respectiva atividade econômica</li>
        <li>Índices positivos de frequência, gravidade e custo de acidentes</li>
        <li>Implementação eficaz de programas de prevenção de acidentes</li>
      </ul>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Aumento de Até 100%</h3>
    <div class="document-content">
      <p>O percentual pode ser aumentado em até cem por cento conforme regulamento.</p>
      
      <h4>Motivos para Aumento:</h4>
      <ul class="bullet-list">
        <li>Desempenho insatisfatório em segurança do trabalho</li>
        <li>Altos índices de acidentes na empresa</li>
        <li>Falta de implementação de medidas de proteção adequadas</li>
      </ul>
      
      <p class="note-text">Os índices são calculados segundo metodologia aprovada pelo Conselho Nacional de Previdência Social.</p>
    </div>
  </div>
</section>

<section class="legislation-section">
  <h2>Legislação Aplicável ao RAT</h2>
  
  <div class="legislation-card hover-effect">
    <h3 class="legislation-period">Fato gerador da contribuição até: 31/12/09</h3>
    <div class="legislation-content">
      <h4>Legislação:</h4>
      <p>Anexo V do RPS, alterado pelo Decreto nº 6.042, de 12 de fevereiro de 2007</p>
      
      <h4>Fonte:</h4>
      <p><a href="http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6042.htm" target="_blank">http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6042.htm</a></p>
    </div>
  </div>

  <div class="legislation-card hover-effect">
    <h3 class="legislation-period">Fato gerador da contribuição a partir de: 01/01/10</h3>
    <div class="legislation-content">
      <h4>Legislação:</h4>
      <p>Anexo V do RPS, alterado pelo Decreto nº 6.957, de 9 de setembro de 2009</p>
      
      <h4>Fonte:</h4>
      <p><a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Decreto/D6957.htm" target="_blank">http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Decreto/D6957.htm</a></p>
    </div>
  </div>
</section>

<section class="calculation-section">
  <h2>Base de Cálculo do RAT</h2>
  
  <div class="calculation-card hover-effect">
    <h3>Incide sobre:</h3>
    <ul class="bullet-list">
      <li>Total da remuneração paga</li>
      <li>Remuneração devida</li>
      <li>Remuneração creditada a qualquer título</li>
    </ul>
    <p class="note-text">No decorrer do mês, aos segurados empregados e trabalhadores avulsos.</p>
  </div>


<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card, .event-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover, .event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card, .legislation-card, .calculation-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .document-card:hover, .legislation-card:hover, .calculation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title, .legislation-period {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content, .legislation-content {
    padding: 25px;
  }
  
  .document-content h4, .legislation-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 15px 0;
  }
  
  .bullet-list li {
    margin-bottom: 8px;
    transition: color 0.2s ease;
  }
  
  .bullet-list li:hover {
    color: #2196F3;
  }
  
  .note-text {
    font-style: italic;
    color: #666;
    margin-top: 15px;
  }
  
  .hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-effect:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
`},{id:"erros-impressao-pgr-formatacao",title:"Erros na Impressão do PGR: Solução para Problemas de Formatação",description:"Guia completo para solucionar problemas de impressão no PGR, PCMSO, LTCAT e outros documentos causados por formatação incorreta de texto.",group:"Erros",content:`
<div class="welcome-banner">
  <h1>Resolução de Erros na Impressão de Documentos</h1>
  <p>Este guia aborda os problemas mais comuns de formatação que causam erros na geração de documentos do Gerenciamento de Riscos e suas soluções.</p>
</div>

<section class="core-concepts">
  <h2>Problemas Comuns de Formatação em Documentos</h2>
  <div class="concept-card">
    <p>Erros ao imprimir documentos como PGR, PCMSO, LTCAT, LI NR-15 e LP NR-16 geralmente estão relacionados a:</p>
    <ul class="bullet-list">
      <li>Formatação herdada de textos copiados de outras fontes</li>
      <li>CEP não vinculado à unidade ou informado de forma incorreta.</li>
      <li>Uso incorreto de negrito e itálico</li>
      <li>Espaçamentos e quebras de linha excessivas</li>
      <li>Caracteres especiais não reconhecidos pelo sistema</li>
    </ul>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_1.png">
  </div>
</section>

<section class="troubleshooting-section">
  <h2>Sondagem Inicial para Identificação do Problema</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Questionamentos Iniciais ao Cliente</h3>
    <div class="document-content">
      <p>Antes de iniciar a análise técnica, é importante levantar informações com o cliente:</p>
      
      <h4>Perguntas-Chave:</h4>
      <ul class="bullet-list">
        <li>Esse erro acontece em outras empresas ou estabelecimentos?</li>
        <li>Em qual empresa específica o erro ocorre?</li>
        <li>O erro acontece apenas com uma Área de Atuação específica na Documentação?</li>
        <li>Ocorre na geração de um único documento ou em vários?</li>
        <li>O caso se refere a uma revisão, implementação ou renovação?</li>
      </ul>
    </div>
  </div>
</section>

<section class="analysis-section">
  <h2>Análise Técnica Passo a Passo</h2>
  
  <div class="step-by-step">
    <div class="step hover-effect">
      <h4>Passo 1: Acessar a Empresa</h4>
      <p>Tente gerar o documento para confirmar a ocorrência do erro.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 2: Verificar Escopo do Problema</h4>
      <p>Identifique se o erro ocorre em um único documento ou em vários, e se está relacionado a revisões.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 3: Navegar até a Área de Atuação</h4>
      <p>Acesse: Menu → Configurações → Configurações Gerais → Documentação</p>
      <p>Desative todos os tópicos relacionados à área de atuação problemática.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 4: Testar Novamente</h4>
      <p>Tente gerar o documento novamente. Se o erro persistir, desconsidere os próximos passos.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 5: Identificação do Tópico Problemático</h4>
      <p>Ative os tópicos dois por vez, testando a geração do documento após cada ativação.</p>
      <p class="note-text">Recomenda-se anotar os tópicos ativados para não se perder durante os testes.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 6: Correção da Formatação</h4>
      <p>Após identificar o tópico problemático, instrua o cliente a limpar a formatação usando a ferramenta "Remover Estilo de Fonte".</p>
    </div>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_2.png">
  </div>
</section>

<section class="formatting-section">
  <h2>Problemas Específicos de Formatação</h2>
  
  <div class="grid-container">
    <div class="nr-card hover-effect">
      <h3>Texto com Estilo de Fonte</h3>
      <p>Formatações herdadas de outras fontes</p>
      <p class="nr-desc">Textos copiados de portais ou documentos externos trazem formatações invisíveis que causam erros.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>Espaços em Negrito</h3>
      <p>Espaços entre palavras formatados em negrito</p>
      <p class="nr-desc">Quando o espaço entre palavras também está em negrito (ex: "Texto&nbsp;&nbsp;com&nbsp;&nbsp;espaços"), ocorrem erros.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>Quebras de Linha</h3>
      <p>Excesso de espaçamentos e quebras</p>
      <p class="nr-desc">Muitas quebras de linha consecutivas ou espaçamentos excessivos podem causar falhas na renderização.</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Exemplo de Erro Comum</h4>
    <p>Um texto copiado de um portal do eSocial com diferentes formatações pode causar o erro:</p>
    <p class="code-example">ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection. (Parameter 'index')</p>
  </div>
</section>

<section class="solutions-section">
  <h2>Soluções para Problemas de Formatação</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Remover Estilo de Fonte</h3>
    <div class="document-content">
      <p>A função "Remover Estilo de Fonte" elimina formatações como negrito, itálico, cores e tamanhos diferentes.</p>

       <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_3.png">
  </div>
</section>
      
      <h4>Como usar:</h4>
      <ol class="bullet-list">
        <li>Selecione todo o texto problemático</li>
        <li>Clique no ícone "Remover Estilo de Fonte" no editor</li>
        <li>Reformate o texto usando apenas as ferramentas do editor do sistema</li>
      </ol>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Usar Bloco de Notas como Intermediário</h3>
    <div class="document-content">
      <p>Quando a função "Remover Estilo de Fonte" não for suficiente:</p>
      
      <h4>Processo Recomendado:</h4>
      <ul class="bullet-list">
        <li>Cole o texto primeiro no Bloco de Notas (Notepad)</li>
        <li>O Bloco de Notas converte completamente qualquer formatação</li>
        <li>Copia o texto do Bloco de Notas e cole no sistema</li>
        <li>Formate o texto usando as ferramentas do editor do sistema</li>
      </ul>
    </div>
  </div>

<section class="client-support-section">
  <h2>Suporte ao Cliente</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Para Clientes com Conhecimento Técnico</h3>
    <div class="document-content">
      <p>Envie documentação explicativa detalhando:</p>
      <ul class="bullet-list">
        <li>O motivo do erro relacionado à formatação</li>
        <li>Passo a passo para correção</li>
        <li>Exemplos antes e depois da correção</li>
        <li>Prevenção para casos futuros</li>
      </ul>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Para Clientes sem Conhecimento Técnico</h3>
    <div class="document-content">
      <p>Siga este protocolo de atendimento:</p>
      
      <h4>Passo a Passo de Atendimento:</h4>
      <ol class="bullet-list">
        <li>Informe ao cliente que a causa do erro foi identificada</li>
        <li>Solicite acesso remoto (AnyDesk) para demonstrar a solução</li>
        <li>Explique visualmente o problema e a solução</li>
        <li>Oriente o cliente a:
          <ul>
            <li>Selecionar todo o texto no tópico problemático</li>
            <li>Clicar no ícone "Remover Estilo de Fonte"</li>
            <li>Reformatar o texto usando as ferramentas do editor</li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
<section class="prevention-section">
  <h2>Prevenção de Problemas Futuros</h2>
  
  <div class="prevention-grid">
    <div class="prevention-card hover-effect">
      <h4>Boas Práticas de Formatação</h4>
      <ul class="bullet-list">
        <li>Evitar copiar texto diretamente de outras fontes</li>
        <li>Usar sempre o Bloco de Notas como intermediário</li>
        <li>Formatar texto apenas com as ferramentas do sistema</li>
        <li>Verificar espaços entre palavras ao usar negrito</li>
      </ul>
    </div>
    
    <div class="prevention-card hover-effect">
      <h4>Verificações Regulares</h4>
      <ul class="bullet-list">
        <li>Testar a geração de documentos após edições</li>
        <li>Revisar textos copiados de fontes externas</li>
        <li>Manter documentação padronizada</li>
        <li>Treinar equipe nas boas práticas de formatação</li>
      </ul>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Observação Importante</h4>
    <p>Este mesmo erro pode ocorrer em qualquer campo de "Inserção de Texto" do sistema, não apenas na Documentação do Gerenciamento de Riscos.</p>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 15px 0;
  }
  
  .bullet-list li {
    margin-bottom: 8px;
    transition: color 0.2s ease;
  }
  
  .bullet-list li:hover {
    color: #2196F3;
  }
  
  .grid-container, .prevention-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card, .prevention-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover, .prevention-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .document-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .step-by-step .step {
    background: #e8f5e9;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid #4caf50;
    border-radius: 4px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .step-by-step .step:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .code-example {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    font-family: monospace;
    margin: 10px 0;
  }
  
  .note-text {
    font-style: italic;
    color: #666;
    margin-top: 10px;
  }
  
  .hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-effect:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
`}]},ei={id:"resolu-o-de-problemas",title:"Resolução de problemas",description:"Este módulo tem como objetivo apoiar o processo de solução de problemas.",icon:`<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 14h-2v-2h2v2m0-4h-2V5h2"/>
</svg>`,topics:[{id:"resolucao-erros-s2240",title:"Resolução de Erros no Evento S-2240",description:"Guia de diagnóstico e correção para inconsistências comuns no evento de Condições Ambientais do Trabalho.",group:"eSocial",tags:["S-2240","Erro"],content:`
<div class="welcome-banner">
  <h1>Diagnóstico S-2240</h1>
  <p>O evento S-2240 registra as condições ambientais de trabalho. Fatores de risco mal cadastrados ou inconsistências de datas são as principais causas de rejeição.</p>
</div>

<section class="common-errors">
  <h2>Principais Mensagens de Erro</h2>

  <div class="error-card">
    <h3>"Trabalhador sem vínculo ativo na data do evento"</h3>
    <p><strong>Causa:</strong> A data de início da condição ambiental (Data de Início da Condição) é anterior à data de admissão do trabalhador.</p>
    <p><strong>Solução:</strong> Ajuste a data de início do risco para ser igual ou posterior à admissão.</p>
  </div>

  <div class="error-card">
    <h3>"Descrição da atividade não informada"</h3>
    <p><strong>Causa:</strong> O campo de descrição das atividades desempenhadas está vazio no cadastro do cargo ou função.</p>
    <p><strong>Solução:</strong> Preencha a descrição detalhada das atividades no cadastro do colaborador.</p>
  </div>

  <div class="error-card">
    <h3>"Agente Nocivo Inválido"</h3>
    <p><strong>Causa:</strong> Código do agente nocivo informado não existe na Tabela 24 do eSocial.</p>
    <p><strong>Solução:</strong> Verifique a tabela oficial e utilize apenas códigos vigentes. Para ausência de riscos, use o código específico (09.01.001).</p>
  </div>
</section>
      `},{id:"erros-impressao-pgr",title:"Erros na Impressão do PGR: Solução para Problemas de Formatação",description:"Como resolver problemas comuns de quebra de página, cabeçalhos cortados e formatação ao gerar o PDF do PGR.",group:"Documentos",tags:["PGR","Impressão"],content:`
<div class="welcome-banner">
  <h1>Problemas de Formatação no PGR</h1>
  <p>Dificuldades ao imprimir ou gerar PDF do Programa de Gerenciamento de Riscos geralmente estão ligadas a configurações do navegador ou do driver de impressão.</p>
</div>

<section class="troubleshooting-steps">
  <h2>Ajustes Recomendados</h2>
  
  <div class="step-card">
    <h3>1. Configurações de Margem</h3>
    <p>Ao abrir a janela de impressão do navegador (Ctrl+P):</p>
    <ul>
      <li>Defina as margens como "Nenhuma" ou "Mínima".</li>
      <li>Verifique se a escala está em 100% ou "Ajustar à página".</li>
    </ul>
  </div>

  <div class="step-card">
    <h3>2. Gráficos de Plano de Fundo</h3>
    <p>Para que cores e cabeçalhos apareçam corretamente:</p>
    <ul>
      <li>Marque a opção <strong>"Gráficos de plano de fundo"</strong> nas configurações avançadas de impressão.</li>
    </ul>
  </div>

  <div class="step-card">
    <h3>3. Orientação da Página</h3>
    <p>O PGR costuma ter tabelas largas. Certifique-se de que a orientação está definida como <strong>Retrato</strong>, a menos que haja tabelas específicas que exijam Paisagem.</p>
  </div>
</section>
      `},{id:"erros-s2210",title:"Erros no Evento S-2210 - Comunicação de Acidente de Trabalho",description:"Correção de falhas no envio da CAT: prazos, campos obrigatórios e inconsistências médicas.",group:"eSocial",tags:["S-2210","CAT"],content:`
<div class="welcome-banner">
  <h1>Envio da CAT (S-2210)</h1>
  <p>A Comunicação de Acidente de Trabalho exige precisão nos dados médicos e do acidente. Veja como corrigir rejeições comuns.</p>
</div>

<section class="cat-errors">
  <h2>Inconsistências Frequentes</h2>

  <div class="error-card critical">
    <h3>Prazo de Envio</h3>
    <p>A CAT deve ser enviada até o <strong>primeiro dia útil seguinte</strong> ao da ocorrência. Em caso de morte, o envio é imediato.</p>
  </div>

  <div class="error-card">
    <h3>"Parte do corpo atingida incompatível"</h3>
    <p>O eSocial valida a coerência entre a parte do corpo e o agente causador. Verifique se os códigos selecionados na Tabela 13 e 14/15 fazem sentido lógico.</p>
  </div>

  <div class="error-card">
    <h3>Dados do Atestado Médico</h3>
    <p>É obrigatório informar:</p>
    <ul>
      <li>Data do atendimento</li>
      <li>Hora do atendimento</li>
      <li>CID (Código Internacional de Doenças)</li>
      <li>CRM do médico atendente</li>
    </ul>
    <p>A falta de qualquer um destes campos impedirá o envio.</p>
  </div>
</section>

<style>
  .welcome-banner { background: #ffebee; padding: 20px; border-radius: 6px; text-align: center; color: #b71c1c; }
  .error-card { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #b71c1c; margin: 10px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .step-card { background: #f5f5f5; padding: 15px; border-radius: 6px; margin: 10px 0; }
  .critical { border-left-color: #d32f2f; background: #ffebee; }
</style>
      `}]},oi={id:"financeiro",title:"Financeiro e Faturamento",description:"Este módulo tem como objetivo apoiar o processo de solução de problemas relacionados a processos financeiros e de faturamento.",icon:` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <path fill="currentColor" d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52a.8.8 0 1 0 .59 1.49a10.11 10.11 0 0 1 5.44-.48a.8.8 0 1 0 .28-1.57Z" class="clr-i-outline clr-i-outline-path-1"/>
    <circle cx="25.38" cy="16.71" r="1.36" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"/>
    <path fill="currentColor" d="M35.51 18.63a1 1 0 0 0-.84-.44a3.42 3.42 0 0 1-2.09-1.12a17.35 17.35 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1a10.12 10.12 0 0 0-5.39.75a12.72 12.72 0 0 0-2.72 1.63a16.94 16.94 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53a1.81 1.81 0 0 1 .14-1.4a1.19 1.19 0 0 1 .43-.43a1.08 1.08 0 0 0-1.12-1.85A3.31 3.31 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.58 17.58 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09a1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9l1.18.13a20.33 20.33 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2c-.18-.53-.32-1-.43-1.45A13.18 13.18 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0a1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94Zm-3.78 5.44a11.37 11.37 0 0 1-2.35-.11a8.2 8.2 0 0 1-2.53-.87a1 1 0 0 0-.93 1.77a11.72 11.72 0 0 0 1.29.58a8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.53 18.53 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.57 20.57 0 0 1 7.76 26l-.18-.39A14.62 14.62 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.47 15.47 0 0 1 5.08 1.48l.62.29l.5-.47A10.29 10.29 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29l.25.5a21.16 21.16 0 0 0 3.31 4.84a6.49 6.49 0 0 0 2.14 1.39Z" class="clr-i-outline clr-i-outline-path-3"/>
    <path fill="none" d="M0 0h36v36H0z"/>
</svg>`,topics:[{id:"cnab-remessa-retorno",title:"CNAB - Remessa e Retorno: Guia Completo",description:"Entenda os fundamentos do padrão CNAB, a diferença entre layouts 240 e 400, e o fluxo padrão de remessa e retorno bancário.",tags:["Financeiro","Bancário"],group:"Financeiro",content:`
<div class="welcome-banner">
  <h1>Guia de Processamento CNAB</h1>
  <p>O CNAB (Centro Nacional de Automação Bancária) é o padrão utilizado para troca digital de informações entre empresas e bancos. Este guia aborda os conceitos essenciais para geração e processamento desses arquivos.</p>
</div>

<section class="core-concepts">
  <h2>Conceitos Fundamentais</h2>
  
  <div class="grid-container">
    <div class="concept-card">
      <h3>O que é Remessa?</h3>
      <p>Arquivo enviado pela empresa ao banco contendo instruções como:</p>
      <ul>
        <li>Registrar novos boletos para cobrança</li>
        <li>Instruções de baixa ou cancelamento</li>
        <li>Alterações de vencimento ou abatimentos</li>
      </ul>
    </div>

    <div class="concept-card">
      <h3>O que é Retorno?</h3>
      <p>Arquivo disponibilizado pelo banco para a empresa contendo:</p>
      <ul>
        <li>Confirmação de entrada de títulos</li>
        <li>Informações de boletos quitados (liquidação)</li>
        <li>Recusas ou rejeições de operações</li>
      </ul>
    </div>
  </div>
</section>

<section class="layouts-section">
  <h2>Layouts CNAB: 400 vs 240</h2>
  <div class="comparison-table">
    <table>
      <thead>
        <tr>
          <th>Característica</th>
          <th>CNAB 400</th>
          <th>CNAB 240</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Estrutura</strong></td>
          <td>Registro simplificado, menos detalhado.</td>
          <td>Estrutura segmentada, permite maior detalhamento.</td>
        </tr>
        <tr>
          <td><strong>Tamanho do Registro</strong></td>
          <td>400 caracteres por linha.</td>
          <td>240 caracteres por linha.</td>
        </tr>
        <tr>
          <td><strong>Versatilidade</strong></td>
          <td>Geralmente usado para Cobrança Simples.</td>
          <td>Usado para múltiplos serviços (Cobrança, Pagamentos, Extratos, Conciliação).</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="process-flow">
  <h2>Fluxo de Operação</h2>
  <div class="step-by-step">
    <div class="step">
      <h3>1. Geração da Remessa</h3>
      <p>O sistema ERP gera um arquivo .REM ou .TXT com os dados dos boletos emitidos. É crucial validar se os dados cadastrais (CPF/CNPJ, Endereço) estão completos para evitar rejeição bancária.</p>
    </div>
    <div class="step">
      <h3>2. Transmissão</h3>
      <p>O arquivo é enviado ao banco via internet banking ou transmitido automaticamente (VAN/API).</p>
    </div>
    <div class="step">
      <h3>3. Processamento Bancário</h3>
      <p>O banco valida o arquivo. Se houver erros, eles serão apontados no arquivo de retorno.</p>
    </div>
    <div class="step">
      <h3>4. Processamento do Retorno</h3>
      <p>A empresa baixa o arquivo .RET do banco e processa no sistema ERP. O sistema lê as informações de liquidação e baixa automaticamente os títulos pagos.</p>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border-left: 4px solid #2196F3;
  }
  .comparison-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background: white;
  }
  .comparison-table th, .comparison-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }
  .comparison-table th {
    background-color: #f5f5f5;
  }
  .step-by-step .step {
    background: #f8f9fa;
    padding: 15px;
    margin-bottom: 15px;
    border-left: 4px solid #4caf50;
    border-radius: 4px;
  }
</style>
      `},{id:"processo-faturamento-empresarial",title:"Processo de Faturamento Empresarial",description:"Visão geral e melhores práticas para o ciclo de faturamento de serviços e contratos corporativos.",tags:["Faturamento","Gestão"],group:"Faturamento",content:`
<div class="welcome-banner">
  <h1>Fluxo de Faturamento Corporativo</h1>
  <p>O faturamento é o coração financeiro da empresa. Este artigo detalha as etapas essenciais para garantir um ciclo de receita eficiente e sem erros.</p>
</div>

<section class="invoice-types">
  <h2>Modelos de Faturamento</h2>
  
  <div class="grid-container">
    <div class="type-card">
      <h3>Faturamento Contratual (Recorrente)</h3>
      <p>Cobrança periódica baseada em contratos de longo prazo.</p>
      <ul>
        <li><strong>Cobrança Fixa:</strong> Valor mensal pré-estabelecido.</li>
        <li><strong>Cobrança Variável (Postecipada):</strong> Baseada no consumo (ex: quantidade de vidas ativas, exames realizados no período).</li>
      </ul>
    </div>
    
    <div class="type-card">
      <h3>Faturamento Avulso (Spot)</h3>
      <p>Cobrança pontual por serviços específicos ou vendas de produtos, gerada imediatamente após a entrega ou execução.</p>
    </div>
  </div>
</section>

<section class="best-practices">
  <h2>Etapas de Conferência</h2>
  <p>Para evitar cancelamentos de notas e refaturamento, recomenda-se seguir este checklist antes da emissão:</p>
  
  <div class="checkpoint-list">
    <div class="checkpoint">
      <h4>1. Cadastro da Empresa</h4>
      <p>Verifique se os dados fiscais (CNPJ, Razão Social, Endereço e Inscrição Municipal) estão atualizados. Divergências aqui são a causa nº 1 de rejeição de notas fiscais.</p>
    </div>
    
    <div class="checkpoint">
      <h4>2. Parametrização de Impostos</h4>
      <p>Confira as alíquotas de ISS e retenções federais (PIS, COFINS, CSLL, IR). Empresas do Simples Nacional ou com regras específicas de município requerem atenção redobrada.</p>
    </div>
    
    <div class="checkpoint">
      <h4>3. Conferência de Valores</h4>
      <p>Gere relatórios prévios (demonstrativos) e confira os itens cobrados. Valide se todos os serviços prestados no período foram apontados corretamente.</p>
    </div>
  </div>
</section>

<section class="fiscal-documents">
  <h2>Documentos Fiscais Envolvidos</h2>
  <div class="doc-grid">
    <div class="doc-card">
      <h3>RPS (Recibo Provisório de Serviços)</h3>
      <p>Documento inicial gerado pelo sistema ERP numerado sequencialmente. É convertido em Nota Fiscal (NFS-e) após a transmissão para a Prefeitura.</p>
    </div>
    
    <div class="doc-card">
      <h3>NFS-e (Nota Fiscal de Serviços Eletrônica)</h3>
      <p>Documento oficial digital, armazenado nacionalmente ou municipalmente, que serve para fins de fiscalização tributária.</p>
    </div>
    
    <div class="doc-card">
      <h3>Boleto Bancário</h3>
      <p>Título de cobrança vinculado à nota fiscal, registrado no banco via arquivo de Remessa CNAB.</p>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #fff3e0;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border: 1px solid #ffe0b2;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  .type-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    border-top: 4px solid #ff9800;
  }
  .checkpoint {
    background: #fdfdfd;
    padding: 15px;
    margin-bottom: 10px;
    border-left: 4px solid #9e9e9e;
    border-radius: 0 4px 4px 0;
  }
  .doc-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .doc-card {
    background: #f1f8e9;
    padding: 15px;
    border-radius: 6px;
  }
</style>
      `}]},F=[Ua,Xa,Ka,Za,ei,oi],Y=["sidebar-estado-expandido","sidebar-estado-recolhido","sidebar-estado-flutuante"];function Je(o){document.body.classList.remove(...Y),document.body.classList.add(o),localStorage.setItem("sidebarState",o),window.dispatchEvent(new Event("resize"))}function ai(o){const e=document.getElementById("sidebar");if(!e)return;const t=document.getElementById("sidebar-toggle"),i=document.getElementById("nav-section"),a=document.getElementById("nav-section-header"),s=document.getElementById("mobile-menu-button"),r=document.getElementById("sidebar-overlay"),n=e.querySelector('[data-action="go-home"]'),d=document.getElementById("sidebar-nav");t&&t.addEventListener("click",c=>{c.stopPropagation();const p=Y.find(m=>document.body.classList.contains(m))||Y[0],u=Y[(Y.indexOf(p)+1)%Y.length];Je(u)}),a&&a.addEventListener("click",()=>{const c=i.classList.toggle("collapsed");localStorage.setItem("sidebarNavCollapsed",c)}),d&&d.addEventListener("click",c=>{const p=c.target.closest(".sidebar-nav-link");p&&(c.preventDefault(),o.onNavLinkClick(p.dataset.categoryId),window.innerWidth<=1024&&(e.classList.remove("visible"),r.classList.remove("visible")))}),n&&n.addEventListener("click",c=>{c.preventDefault(),o.onHomeClick()}),s&&r&&(s.addEventListener("click",()=>{e.classList.toggle("visible"),r.classList.toggle("visible")}),r.addEventListener("click",()=>{e.classList.remove("visible"),r.classList.remove("visible")})),localStorage.getItem("sidebarNavCollapsed")==="true"&&(i==null||i.classList.add("collapsed"));const l=localStorage.getItem("sidebarState");return Je(l||Y[0]),{themeToggleBtn:document.getElementById("theme-toggle")}}window.renderCategories=ee;window.renderTopics=Le;window.renderArticle=yo;window.handleSearch=Ne;window.setSearchScope=Eo;window.scrollToGroup=hi;window.navigateArticle=te;window.renderArticlesByTag=li;const V=document.getElementById("app"),ii=document.getElementById("sidebar-nav"),ue=document.getElementById("search-input"),ke=document.getElementById("theme-toggle"),ie=document.getElementById("search-filter-button"),Oe=document.getElementById("search-filter-menu"),Qe=document.getElementById("filter-menu-input"),ti=document.getElementById("filter-menu-list"),Ce=document.getElementById("sidebar"),De={search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>'},Co={keys:[{name:"title",weight:.6},{name:"description",weight:.3},{name:"group",weight:.2}],includeMatches:!0,threshold:.4,ignoreLocation:!1,minMatchCharLength:2,shouldSort:!0,useExtendedSearch:!1,findAllMatches:!1},S={currentCategory:null,scrollInstance:null,searchScope:"all",currentArticleIndex:0,currentGroupArticles:[],fuseInstance:null};function si(o,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>o.apply(this,i),e)}}function se(){V.classList.remove("animate-in"),V.offsetWidth,V.classList.add("animate-in")}function ri(){S.scrollInstance&&S.scrollInstance.destroy(),S.scrollInstance=new ca({el:document.querySelector("#content-wrapper"),smooth:!0})}function re(){setTimeout(()=>{var o;return(o=S.scrollInstance)==null?void 0:o.update()},50)}function wo(){const o=ie.offsetWidth;ue.style.paddingLeft=`${o+10}px`}function Ue(o,e){if(!e||!o||e==="%")return o;const t=e.split(/\s+/).filter(a=>a.length>1);if(t.length===0)return o;const i=new RegExp(`(${t.map(a=>ni(a)).join("|")})`,"gi");return o.replace(i,"<mark>$1</mark>")}function ni(o){return o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Z(o){if(document.querySelectorAll("#floating-group-filter, .article-navigation").forEach(e=>e.remove()),o==="create_group_filter"){const e=V.querySelector(".group-filter-container");if(e){const t=e.cloneNode(!0);t.id="floating-group-filter",document.body.appendChild(t);const i=t.querySelector(".group-filter-menu");t.addEventListener("mouseenter",()=>i.classList.add("visible")),t.addEventListener("mouseleave",()=>i.classList.remove("visible")),e.style.display="none"}}else o==="create_article_nav"&&di()}function di(){const o=document.createElement("button");o.className="article-navigation prev-button",o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',o.onclick=()=>te(-1),document.body.appendChild(o);const e=document.createElement("button");e.className="article-navigation next-button",e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',e.onclick=()=>te(1),document.body.appendChild(e)}function ee(){S.currentCategory=null,Z("destroy"),se(),V.innerHTML=`
    <div class="text-center">
      <h1 class="text-4xl font-bold">Base de Conhecimento</h1>
      <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelos módulos para encontrar guias, soluções e respostas.</p>
    </div>
    <div class="module-grid">
      ${F.map(o=>`
        <a onclick="renderTopics('${o.id}')" class="card-link flex cursor-pointer flex-col gap-4 rounded-xl p-5 group">
          <div class="w-8 h-8 module-icon">${o.icon}</div>
          <div class="flex flex-col gap-1 mt-1">
            <h3 class="text-base font-semibold">${o.title}</h3>
            <p class="text-sm font-normal">${o.description}</p>
          </div>
        </a>
      `).join("")}
    </div>
  `,re(),qe()}function Le(o){S.currentCategory=o;const e=F.find(r=>r.id===o);if(!e)return ee();Z("destroy"),se();const t=e.topics.reduce((r,n)=>{const d=n.group||"Geral";return r[d]||(r[d]=[]),r[d].push(n),r},{}),i=Object.keys(t),a=Object.entries(t).map(([r,n])=>`
    <div class="article-group" id="group-${r.replace(/\s+/g,"-").toLowerCase()}">
      <h3 class="article-group-title">${r}</h3>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${n.map(d=>`
          <a onclick="renderArticle('${e.id}', '${d.id}')" class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-5 group">
            <h3 class="text-base font-semibold">${d.title}</h3>
            <p class="text-sm font-normal">${d.description||""}</p>
          </a>
        `).join("")}
      </div>
    </div>
  `).join(""),s=i.map(r=>`<a onclick="scrollToGroup('${r.replace(/\s+/g,"-").toLowerCase()}'); this.closest('.group-filter-menu').classList.remove('visible');" 
       class="group-filter-item">${r}</a>`).join("");V.innerHTML=`
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${e.title}</span>
    </div>
    <div class="flex justify-between items-start mt-4">
      <h1 class="text-4xl font-bold">${e.title}</h1>
      ${i.length>1?`
        <div class="relative group-filter-container">
          <button class="group-filter-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div class="group-filter-menu">
            <div class="font-semibold text-xs px-3 py-2 opacity-60">GRUPOS</div>
            ${s}
          </div>
        </div>
      `:""}
    </div>
    <div class="mt-8">${e.topics.length===0?'<p class="opacity-70">Nenhum artigo encontrado.</p>':a}</div>`,re(),qe(),i.length>1&&Z("create_group_filter")}function yo(o,e){const t=F.find(s=>s.id===o),i=t==null?void 0:t.topics.find(s=>s.id===e);if(!i)return ee();S.currentCategory=o,Z("create_article_nav"),se(),fi(t,e);const a=vi(i,o);V.innerHTML=`
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <a onclick="renderTopics('${t.id}')" class="cursor-pointer opacity-70 hover:opacity-100">${t.title}</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${i.title}</span>
    </div>
    <div class="article-content mt-8 relative">
      <h1>${i.title}</h1>
      ${i.description?`<p class="text-xl mt-4 opacity-80">${i.description}</p>`:""}
      
      ${i.tags?`
        <div class="mt-6 flex flex-wrap gap-2">
          ${i.tags.map(s=>`
            <span onclick="renderArticlesByTag('${s}')" 
                  class="text-xs px-2 py-1 rounded-full bg-opacity-20 bg-primary cursor-pointer hover:bg-opacity-30">
              ${s}
            </span>
          `).join("")}
        </div>
      `:""}
      
      <hr class="my-8 opacity-20">
      <div>${i.content}</div>
      
      ${a.length>0?`
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">Recomendados para você</h2>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          ${a.map(s=>`
            <a onclick="renderArticle('${s.categoryId}', '${s.id}')" 
               class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-6 group hover:border-primary transition-all">
              <h3 class="text-lg font-semibold">${s.title}</h3>
              <p class="text-sm font-normal opacity-80">${s.description||""}</p>
              <p class="text-xs mt-2 opacity-60">${s.categoryTitle}</p>
            </a>
          `).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,gi(),re(),qe()}function li(o){se(),Z("destroy");const e=F.flatMap(t=>t.topics.filter(i=>i.tags&&i.tags.includes(o)).map(i=>({...i,categoryId:t.id,categoryTitle:t.title})));V.innerHTML=`
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a onclick="renderCategories()" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">Artigos com a tag: ${o}</span>
    </div>
    <div class="mt-8">
      <h1 class="text-3xl font-bold mb-6">Artigos marcados com "${o}"</h1>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${e.map(t=>`
          <a onclick="renderArticle('${t.categoryId}', '${t.id}')" 
             class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-5 group">
            <h3 class="text-base font-semibold">${t.title}</h3>
            <p class="text-sm font-normal">${t.description||""}</p>
            <p class="text-xs mt-2 opacity-60">${t.categoryTitle}</p>
          </a>
        `).join("")}
      </div>
    </div>
  `,re()}function Ao(){const o=F.flatMap(e=>e.topics.map(t=>({...t,categoryId:e.id,categoryTitle:e.title,contentText:t.content.replace(/<[^>]*>/g," ")})));S.fuseInstance=new U(o,Co)}const ci=si(o=>{pi(o)},300);function Ne(o){const e=o.trim();e==="%"?S.searchScope==="all"?ui():mi(S.searchScope):ci(e)}function pi(o){if(!o){S.currentCategory?Le(S.currentCategory):ee();return}S.fuseInstance||Ao();let e;if(S.searchScope==="all")e=S.fuseInstance.search(o);else{const t=S.fuseInstance._docs.filter(a=>a.categoryId===S.searchScope);e=new U(t,Co).search(o)}ze(e,o)}function ze(o,e){se(),Z("destroy");const t=o.map(i=>{var n;const a=i.item,s=(n=i.matches)==null?void 0:n.find(d=>d.key==="title"),r=a.description?Ue(a.description,e):"";return`
      <a onclick="renderArticle('${a.categoryId}', '${a.id}')" 
         class="card-link block cursor-pointer p-5 rounded-xl group hover:border-primary">
        <p class="text-sm font-semibold opacity-60 group-hover:opacity-100 mb-1">
          ${a.categoryTitle}
        </p>
        <h3 class="text-lg font-semibold">
          ${s||e==="%"?Ue(a.title,e):a.title}
        </h3>
        ${r&&`
          <p class="text-sm mt-2 opacity-70">
            ${r}
          </p>
        `}
      </a>
    `}).join("");V.innerHTML=`
    <div>
      <h1 class="text-3xl font-bold mb-4">Resultados para: <span class="opacity-70">"${e}"</span></h1>
      <p class="text-sm opacity-70 mb-6">${o.length} resultado(s) encontrado(s).</p>
      ${o.length===0?`
        <div class="p-8 text-center">
          <p class="opacity-70 mb-4">Nenhum resultado encontrado.</p>
          <p class="text-sm opacity-50">Tente uma busca diferente ou altere o filtro de módulo.</p>
        </div>
      `:`
        <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">${t}</div>
      `}
    </div>`,re()}function ui(){const o=F.flatMap(e=>e.topics.map(t=>({...t,categoryId:e.id,categoryTitle:e.title})));ze(o.map(e=>({item:e})),"%")}function mi(o){const e=F.find(i=>i.id===o);if(!e)return;const t=e.topics.map(i=>({...i,categoryId:e.id,categoryTitle:e.title}));ze(t.map(i=>({item:i})),"%")}function Me(o){const e=Oe.classList.contains("visible");Oe.classList.toggle("visible",o!==void 0?o:!e)}function Xe(o=""){const e=o.toLowerCase(),i=[{id:"all",title:"Todos os Módulos",icon:De.search},...F].filter(a=>a.title.toLowerCase().includes(e));ti.innerHTML=i.map(a=>`
    <div class="filter-menu-item ${S.searchScope===a.id?"active":""}" 
         onclick="setSearchScope('${a.id}')">
      <div class="item-icon">${a.icon||De.search}</div>
      <span>${a.title}</span>
    </div>
  `).join("")}function Eo(o){S.searchScope=o;const e=F.find(t=>t.id===o);e?ie.innerHTML=`
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 flex-shrink-0">${e.icon||""}</div>
        <span>${e.title}</span>
      </div>
    `:ie.innerHTML=`
      <div class="flex items-center gap-2">
        ${De.search} 
        <span>Todos os Módulos</span>
      </div>
    `,Ne(ue.value),Me(!1),ue.focus(),wo()}function qe(){ii.innerHTML=F.map(o=>`
    <a onclick="renderTopics('${o.id}')" 
       class="sidebar-nav-link flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group ${S.currentCategory===o.id?"active":""}"
       data-category-id="${o.id}">
      <div class="w-6 h-6 flex-shrink-0 module-icon">${o.icon||""}</div>
      <p class="text-sm font-medium leading-normal">${o.title}</p>
      <span class="tooltip">${o.title}</span>
    </a>
  `).join("")}function gi(){document.querySelectorAll("pre:not(:has(.copy-button))").forEach(o=>{const e=document.createElement("button");e.className="copy-button",e.textContent="Copiar",e.onclick=()=>{var i;const t=((i=o.querySelector("code"))==null?void 0:i.textContent)||o.textContent;navigator.clipboard.writeText(t).then(()=>{e.textContent="Copiado!",setTimeout(()=>e.textContent="Copiar",2e3)})},o.appendChild(e)})}function Ke(o){const e=ke.querySelector(".sun-icon"),t=ke.querySelector(".moon-icon");document.body.classList.toggle("dark-mode",o),e&&t&&(e.style.display=o?"block":"none",t.style.display=o?"none":"block"),localStorage.setItem("theme",o?"dark":"light")}function hi(o){const e=document.getElementById(`group-${o}`);e&&S.scrollInstance&&S.scrollInstance.scrollTo(e,{offset:-20,duration:600})}function vi(o,e){var a,s;if(((a=o.manualSuggestions)==null?void 0:a.length)>0)return o.manualSuggestions.map(r=>{const n=F.find(l=>l.id===r.categoryId);if(!n)return null;const d=n.topics.find(l=>l.id===r.topicId);return d?{...d,categoryId:n.id,categoryTitle:n.title}:null}).filter(Boolean).slice(0,3);if(!((s=o.tags)!=null&&s.length))return[];const t=F.flatMap(r=>r.topics.filter(n=>{var d;return n.id!==o.id&&((d=n.tags)==null?void 0:d.length)}).map(n=>{const d=n.tags.filter(l=>o.tags.includes(l));return d.length?{...n,categoryId:r.id,categoryTitle:r.title,relevanceScore:d.length}:null}).filter(Boolean).sort((n,d)=>d.relevanceScore-n.relevanceScore));if(t.length>0)return t.slice(0,3);const i=F.find(r=>r.id===e);return(i==null?void 0:i.topics.filter(r=>r.id!==o.id).sort(()=>.5-Math.random()).slice(0,3).map(r=>({...r,categoryId:e,categoryTitle:i.title})))||[]}function fi(o,e){const t=o.topics,i=t.findIndex(a=>a.id===e);i!==-1&&(S.currentGroupArticles=t,S.currentArticleIndex=i)}function te(o){const e=S.currentArticleIndex+o;if(e>=0&&e<S.currentGroupArticles.length){const t=S.currentGroupArticles[e];yo(S.currentCategory,t.id)}}document.addEventListener("DOMContentLoaded",()=>{ri(),ai({onNavLinkClick:a=>Le(a),onHomeClick:()=>ee()}),bi(),ee(),Eo("all"),Xe(),wo(),ue.addEventListener("keyup",a=>{Ne(a.target.value)}),ie.addEventListener("click",a=>{a.stopPropagation(),Me()}),Qe.addEventListener("input",()=>Xe(Qe.value)),document.addEventListener("click",a=>{!Oe.contains(a.target)&&a.target!==ie&&Me(!1)}),ke.addEventListener("click",()=>{Ke(!document.body.classList.contains("dark-mode"))});const o=localStorage.getItem("theme"),e=window.matchMedia("(prefers-color-scheme: dark)").matches;Ke(o?o==="dark":e);const t=document.getElementById("mobile-menu-button"),i=document.getElementById("sidebar-overlay");t&&i&&Ce&&(t.addEventListener("click",()=>{Ce.classList.toggle("visible"),i.classList.toggle("visible")}),i.addEventListener("click",()=>{Ce.classList.remove("visible"),i.classList.remove("visible")})),document.addEventListener("keydown",a=>{document.querySelector(".article-navigation")&&(a.key==="ArrowLeft"?te(-1):a.key==="ArrowRight"&&te(1))}),Ao()});function bi(){const o=document.getElementById("sidebar"),e=document.querySelector(".article-navigation.prev-button");if(!o||!e)return;const t=()=>{const a=o.getBoundingClientRect().width,s=document.querySelector(".article-navigation.prev-button");s&&(s.style.left=`${a+32}px`)};new MutationObserver(a=>{for(const s of a)s.type==="attributes"&&s.attributeName==="class"&&t()}).observe(document.body,{attributes:!0}),t()}
