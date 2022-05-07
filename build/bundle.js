var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function s(){return Object.create(null)}function l(t){t.forEach(o)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function u(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function a(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function f(t){return null==t?"":t}const d="undefined"!=typeof window;let h=d?()=>window.performance.now():()=>Date.now(),g=d?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&g(m)}function $(t,e){t.appendChild(e)}function b(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=k("style");return function(t,e){$(t.head||t,e)}(b(t),e),e.sheet}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function O(){return j(" ")}function z(){return j("")}function L(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function S(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}function N(t,e,n){t.classList[n?"add":"remove"](e)}class B{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=k(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)y(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(w)}}const R=new Map;let A,P=0;function I(t,e,n,o,s,l,i,r=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${r}`,d=b(t),{stylesheet:h,rules:g}=R.get(d)||function(t,e){const n={stylesheet:v(e),rules:{}};return R.set(t,n),n}(d,t);g[f]||(g[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${o}ms linear ${s}ms 1 both`,P+=1,f}function H(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),P-=s,P||g((()=>{P||(R.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),R.clear())})))}function T(n,o,s,l){if(!o)return t;const i=n.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:r=0,duration:c=300,easing:u=e,start:a=h()+r,end:f=a+c,tick:d=t,css:$}=s(n,{from:o,to:i},l);let b,v=!0,y=!1;function w(){$&&H(n,b),v=!1}return function(t){let e;0===p.size&&g(m),new Promise((n=>{p.add(e={c:t,f:n})}))}((t=>{if(!y&&t>=a&&(y=!0),y&&t>=f&&(d(1,0),w()),!v)return!1;if(y){const e=0+1*u((t-a)/c);d(e,1-e)}return!0})),$&&(b=I(n,0,1,c,r,u,$)),r||(y=!0),d(0,1),w}function Y(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,function(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}(t,s)}}function J(t){A=t}function q(){if(!A)throw new Error("Function called outside component initialization");return A}function D(){const t=q();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}const F=[],V=[],X=[],G=[],K=Promise.resolve();let Q=!1;function U(t){X.push(t)}const W=new Set;let Z=0;function tt(){const t=A;do{for(;Z<F.length;){const t=F[Z];Z++,J(t),et(t.$$)}for(J(null),F.length=0,Z=0;V.length;)V.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];W.has(e)||(W.add(e),e())}X.length=0}while(F.length);for(;G.length;)G.pop()();Q=!1,W.clear(),J(t)}function et(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const nt=new Set;let ot;function st(){ot={r:0,c:[],p:ot}}function lt(){ot.r||l(ot.c),ot=ot.p}function it(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function rt(t,e,n,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),ot.c.push((()=>{nt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function ct(t,e){t.f(),function(t,e){t.d(1),e.delete(t.key)}(t,e)}function ut(t,e){const n={},o={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],r=e[l];if(r){for(const t in i)t in r||(o[t]=1);for(const t in r)s[t]||(n[t]=r[t],s[t]=1);t[l]=r}else for(const t in i)s[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function at(t){return"object"==typeof t&&null!==t?t:{}}function ft(t){t&&t.c()}function dt(t,e,n,s){const{fragment:r,on_mount:c,on_destroy:u,after_update:a}=t.$$;r&&r.m(e,n),s||U((()=>{const e=c.map(o).filter(i);u?u.push(...e):l(e),t.$$.on_mount=[]})),a.forEach(U)}function ht(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){-1===t.$$.dirty[0]&&(F.push(t),Q||(Q=!0,K.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(e,n,o,i,r,c,u,a=[-1]){const f=A;J(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let h=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&r(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&gt(e,t)),n})):[],d.update(),h=!0,l(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(w)}else d.fragment&&d.fragment.c();n.intro&&it(e.$$.fragment),dt(e,n.target,n.anchor,n.customElement),tt()}J(f)}class mt{$destroy(){ht(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function $t(t){const e=t-1;return e*e*e+1}function bt(t,{from:e,to:n},o={}){const s=getComputedStyle(t),l="none"===s.transform?"":s.transform,[r,c]=s.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*r/n.width-(n.left+r),a=e.top+e.height*c/n.height-(n.top+c),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:h=$t}=o;return{delay:f,duration:i(d)?d(Math.sqrt(u*u+a*a)):d,easing:h,css:(t,o)=>{const s=o*u,i=o*a,r=t+o*e.width/n.width,c=t+o*e.height/n.height;return`transform: ${l} translate(${s}px, ${i}px) scale(${r}, ${c});`}}}function vt(t,e,n){const o=t.slice();return o[27]=e[n],o[29]=n,o}function yt(t){let e,n,o=t[27]+"";return{c(){e=k("p"),n=j(o)},m(t,o){y(t,e,o),$(e,n)},p(t,e){1&e&&o!==(o=t[27]+"")&&C(n,o)},d(t){t&&w(e)}}}function wt(t){let e,n,o=t[27].text+"";return{c(){e=k("p"),n=j(o)},m(t,o){y(t,e,o),$(e,n)},p(t,e){1&e&&o!==(o=t[27].text+"")&&C(n,o)},d(t){t&&w(e)}}}function xt(t){let e,n,o=t[27].html+"";return{c(){e=new B,n=z(),e.a=n},m(t,s){e.m(o,t,s),y(t,n,s)},p(t,n){1&n&&o!==(o=t[27].html+"")&&e.p(o)},d(t){t&&w(n),t&&e.d()}}}function kt(t){let e,n,o;function s(...e){return t[17](t[29],...e)}return{c(){e=k("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',M(e,"class","svelte-1g3zabj")},m(t,l){y(t,e,l),n||(o=L(e,"click",s),n=!0)},p(e,n){t=e},d(t){t&&w(e),n=!1,o()}}}function _t(e,n){let o,s,i,r,c,u,a,f,d,h,g,p,m,b,v,x,j,z,C,E,S,N,B,R,A=t;function P(...t){return n[15](n[29],...t)}function I(...t){return n[16](n[29],...t)}function H(t,e){return t[27].html?xt:t[27].text?wt:yt}let J=H(n),q=J(n),D=n[1]&&kt(n);return{key:e,first:null,c(){o=k("div"),s=k("div"),i=k("button"),r=_("svg"),c=_("path"),u=_("path"),f=O(),d=k("button"),h=_("svg"),g=_("path"),p=_("path"),b=O(),v=k("div"),q.c(),x=O(),j=k("div"),D&&D.c(),z=O(),M(c,"d","M0 0h24v24H0V0z"),M(c,"fill","none"),M(u,"d","M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"),M(r,"xmlns","http://www.w3.org/2000/svg"),M(r,"viewBox","0 0 24 24"),M(r,"width","16px"),M(r,"height","16px"),M(i,"class","up svelte-1g3zabj"),M(i,"style",a="visibility: "+(n[29]>0?"":"hidden")+";"),M(g,"d","M0 0h24v24H0V0z"),M(g,"fill","none"),M(p,"d","M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"),M(h,"xmlns","http://www.w3.org/2000/svg"),M(h,"viewBox","0 0 24 24"),M(h,"width","16px"),M(h,"height","16px"),M(d,"class","down svelte-1g3zabj"),M(d,"style",m="visibility: "+(n[29]<n[0].length-1?"":"hidden")+";"),M(s,"class","buttons svelte-1g3zabj"),M(v,"class","content svelte-1g3zabj"),M(j,"class","buttons delete svelte-1g3zabj"),M(o,"id",C=n[3]&&(n[27].id?n[27].id:JSON.stringify(n[27]))==n[3].dataset.id?"grabbed":""),M(o,"class","item svelte-1g3zabj"),M(o,"data-index",E=n[29]),M(o,"data-id",S=n[27].id?n[27].id:JSON.stringify(n[27])),M(o,"data-graby","0"),this.first=o},m(t,e){y(t,o,e),$(o,s),$(s,i),$(i,r),$(r,c),$(r,u),$(s,f),$(s,d),$(d,h),$(h,g),$(h,p),$(o,b),$(o,v),q.m(v,null),$(o,x),$(o,j),D&&D.m(j,null),$(o,z),B||(R=[L(i,"click",P),L(d,"click",I),L(o,"mousedown",n[18]),L(o,"touchstart",n[19]),L(o,"mouseenter",n[20]),L(o,"touchmove",n[21])],B=!0)},p(t,e){n=t,1&e&&a!==(a="visibility: "+(n[29]>0?"":"hidden")+";")&&M(i,"style",a),1&e&&m!==(m="visibility: "+(n[29]<n[0].length-1?"":"hidden")+";")&&M(d,"style",m),J===(J=H(n))&&q?q.p(n,e):(q.d(1),q=J(n),q&&(q.c(),q.m(v,null))),n[1]?D?D.p(n,e):(D=kt(n),D.c(),D.m(j,null)):D&&(D.d(1),D=null),9&e&&C!==(C=n[3]&&(n[27].id?n[27].id:JSON.stringify(n[27]))==n[3].dataset.id?"grabbed":"")&&M(o,"id",C),1&e&&E!==(E=n[29])&&M(o,"data-index",E),1&e&&S!==(S=n[27].id?n[27].id:JSON.stringify(n[27]))&&M(o,"data-id",S)},r(){N=o.getBoundingClientRect()},f(){Y(o),A()},a(){A(),A=T(o,N,bt,{duration:200})},d(t){t&&w(o),q.d(),D&&D.d(),B=!1,l(R)}}}function jt(e){let n,o,s,i,r,c,u,a,d,h=[],g=new Map,p=e[0];const m=t=>t[27].id?t[27].id:JSON.stringify(t[27]);for(let t=0;t<p.length;t+=1){let n=vt(e,p,t),o=m(n);g.set(o,h[t]=_t(o,n))}return{c(){n=k("main"),o=k("div"),s=k("p"),c=O(),u=k("div");for(let t=0;t<h.length;t+=1)h[t].c();M(s,"class","svelte-1g3zabj"),M(o,"id","ghost"),M(o,"class",i=f(e[3]?"item haunting":"item")+" svelte-1g3zabj"),M(o,"style",r="top: "+(e[4]+e[5]-e[6])+"px"),M(u,"class","list svelte-1g3zabj"),M(n,"class","dragdroplist svelte-1g3zabj")},m(t,l){y(t,n,l),$(n,o),$(o,s),e[14](o),$(n,c),$(n,u);for(let t=0;t<h.length;t+=1)h[t].m(u,null);a||(d=[L(u,"mousemove",e[22]),L(u,"touchmove",e[23]),L(u,"mouseup",e[24]),L(u,"touchend",e[25])],a=!0)},p(t,[e]){if(8&e&&i!==(i=f(t[3]?"item haunting":"item")+" svelte-1g3zabj")&&M(o,"class",i),112&e&&r!==(r="top: "+(t[4]+t[5]-t[6])+"px")&&M(o,"style",r),11915&e){p=t[0];for(let t=0;t<h.length;t+=1)h[t].r();h=function(t,e,n,o,s,l,i,r,c,u,a,f){let d=t.length,h=l.length,g=d;const p={};for(;g--;)p[t[g].key]=g;const m=[],$=new Map,b=new Map;for(g=h;g--;){const t=f(s,l,g),r=n(t);let c=i.get(r);c?o&&c.p(t,e):(c=u(r,t),c.c()),$.set(r,m[g]=c),r in p&&b.set(r,Math.abs(g-p[r]))}const v=new Set,y=new Set;function w(t){it(t,1),t.m(r,a),i.set(t.key,t),a=t.first,h--}for(;d&&h;){const e=m[h-1],n=t[d-1],o=e.key,s=n.key;e===n?(a=e.first,d--,h--):$.has(s)?!i.has(o)||v.has(o)?w(e):y.has(s)?d--:b.get(o)>b.get(s)?(y.add(o),w(e)):(v.add(s),d--):(c(n,i),d--)}for(;d--;){const e=t[d];$.has(e.key)||c(e,i)}for(;h;)w(m[h-1]);return m}(h,e,m,1,t,p,g,u,ct,_t,null,vt);for(let t=0;t<h.length;t+=1)h[t].a()}},i:t,o:t,d(t){t&&w(n),e[14](null);for(let t=0;t<h.length;t+=1)h[t].d();a=!1,l(d)}}}function Ot(t,e,n){let o,s,l,{data:i=[]}=e,{removesItems:r=!1}=e,c=0,u=0,a=0;function f(t,e){n(3,s=e),n(3,s.dataset.grabY=t,s),n(2,o.innerHTML=s.innerHTML,o),n(5,u=s.getBoundingClientRect().y-t),d(t)}function d(t){s&&(n(4,c=t),n(6,a=o.parentNode.getBoundingClientRect().y))}function h(t){d(t.clientY);let e=document.elementFromPoint(t.clientX,t.clientY).closest(".item");e&&e!=l&&(l=e,g(t,e))}function g(t,e){s&&e!=s&&e.classList.contains("item")&&p(parseInt(s.dataset.index),parseInt(e.dataset.index))}function p(t,e){let o=i[t];n(0,i=[...i.slice(0,t),...i.slice(t+1)]),n(0,i=[...i.slice(0,e),o,...i.slice(e)])}function m(t){n(3,s=null)}function $(t){n(0,i=[...i.slice(0,t),...i.slice(t+1)])}return t.$$set=t=>{"data"in t&&n(0,i=t.data),"removesItems"in t&&n(1,r=t.removesItems)},[i,r,o,s,c,u,a,f,d,h,g,p,m,$,function(t){V[t?"unshift":"push"]((()=>{o=t,n(2,o)}))},function(t,e){p(t,t-1)},function(t,e){p(t,t+1)},function(t,e){$(t)},function(t){f(t.clientY,this)},function(t){f(t.touches[0].clientY,this)},function(t){t.stopPropagation(),g(0,t.target)},function(t){t.stopPropagation(),t.preventDefault(),h(t.touches[0])},function(t){t.stopPropagation(),d(t.clientY)},function(t){t.stopPropagation(),d(t.touches[0].clientY)},function(t){t.stopPropagation(),m()},function(t){t.stopPropagation(),m(t.touches[0])}]}class zt extends mt{constructor(t){super(),pt(this,t,Ot,jt,r,{data:0,removesItems:1})}}var Lt;!function(t){t.Off="Off",t.OneLanguage="One language",t.AllLanguages="All languages"}(Lt||(Lt={}));const Mt=[];function Ct(e,n=t){let o;const s=new Set;function l(t){if(r(e,t)&&(e=t,o)){const t=!Mt.length;for(const t of s)t[1](),Mt.push(t,e);if(t){for(let t=0;t<Mt.length;t+=2)Mt[t][0](Mt[t+1]);Mt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(i,r=t){const c=[i,r];return s.add(c),1===s.size&&(o=n(l)||t),i(e),()=>{s.delete(c),0===s.size&&(o(),o=null)}}}}const Et=Ct(["cs","ua"]),St=Ct(Lt.Off);function Nt(t,e,n){const o=t.slice();return o[6]=e[n],o}function Bt(e){let n,o,s,l,i=e[6]+"";return{c(){n=k("option"),o=j(i),s=O(),n.__value=l=e[6],n.value=n.__value,n.selected=!0},m(t,e){y(t,n,e),$(n,o),$(n,s)},p:t,d(t){t&&w(n)}}}function Rt(t){let e,n,o,s,l,i,r,c,u,a,f,d,h,g,p;function m(e){t[4](e)}let b={removesItems:!1};void 0!==t[1]&&(b.data=t[1]),r=new zt({props:b}),V.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(r,"data",m)));let v=Object.values(Lt),_=[];for(let e=0;e<v.length;e+=1)_[e]=Bt(Nt(t,v,e));return{c(){e=k("div"),n=k("div"),o=k("div"),s=k("div"),s.textContent="Language order",l=O(),i=k("div"),ft(r.$$.fragment),u=O(),a=k("div"),f=j("Autoplay:\r\n    "),d=k("select");for(let t=0;t<_.length;t+=1)_[t].c();M(s,"class","column"),M(i,"class","column"),M(o,"class","columns is-vcentered"),M(n,"class","column"),void 0===t[0]&&U((()=>t[5].call(d))),M(a,"class","column"),M(e,"class","columns is-vcentered")},m(c,m){y(c,e,m),$(e,n),$(n,o),$(o,s),$(o,l),$(o,i),dt(r,i,null),$(e,u),$(e,a),$(a,f),$(a,d);for(let t=0;t<_.length;t+=1)_[t].m(d,null);S(d,t[0]),h=!0,g||(p=L(d,"change",t[5]),g=!0)},p(t,[e]){const n={};var o;if(!c&&2&e&&(c=!0,n.data=t[1],o=()=>c=!1,G.push(o)),r.$set(n),0&e){let n;for(v=Object.values(Lt),n=0;n<v.length;n+=1){const o=Nt(t,v,n);_[n]?_[n].p(o,e):(_[n]=Bt(o),_[n].c(),_[n].m(d,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=v.length}1&e&&S(d,t[0])},i(t){h||(it(r.$$.fragment,t),h=!0)},o(t){rt(r.$$.fragment,t),h=!1},d(t){t&&w(e),ht(r),x(_,t),g=!1,p()}}}function At(t,e,n){let o,s;a(t,St,(t=>n(2,o=t))),a(t,Et,(t=>n(3,s=t))),console.debug(JSON.stringify(s));let l=Lt[o],i=[...s];return t.$$.update=()=>{10&t.$$.dirty&&i!=s&&(console.debug("setting languageOrder",s,"to: ",i),Et.set(i)),5&t.$$.dirty&&l!=o&&(console.debug("setting autoplay",o,"to: ",l),St.set(l))},[l,i,o,s,function(t){i=t,n(1,i)},function(){l=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,l)}]}class Pt extends mt{constructor(t){super(),pt(this,t,At,Rt,r,{})}}function It(t,e,n){const o=t.slice();return o[16]=e[n][0],o[17]=e[n][1],o}function Ht(t,e,n){const o=t.slice();return o[16]=e[n][0],o[17]=e[n][1],o[20]=e,o[21]=n,o}function Tt(t){let e,n,o,s,l,i=t[16];const r=()=>t[12](e,i),c=()=>t[12](null,i);function a(...e){return t[13](t[16],...e)}return{c(){e=k("audio"),n=k("source"),u(n.src,o="resources/audio/"+t[16]+"/"+t[16]+"_"+t[1]+".mp3")||M(n,"src",o),M(n,"type","audio/mpeg")},m(t,o){y(t,e,o),$(e,n),r(),s||(l=L(e,"ended",a),s=!0)},p(e,s){t=e,6&s&&!u(n.src,o="resources/audio/"+t[16]+"/"+t[16]+"_"+t[1]+".mp3")&&M(n,"src",o),i!==t[16]&&(c(),i=t[16],r())},d(t){t&&w(e),c(),s=!1,l()}}}function Yt(t){let e,n,o,s,l,i=t[17]+"";function r(){return t[14](t[16])}return{c(){e=k("p"),n=j(i),o=O(),M(e,"class","svelte-1g7xnyl"),N(e,"playing",t[7][t[16]])},m(t,i){y(t,e,i),$(e,n),$(e,o),s||(l=L(e,"click",r),s=!0)},p(o,s){t=o,256&s&&i!==(i=t[17]+"")&&C(n,i),384&s&&N(e,"playing",t[7][t[16]])},d(t){t&&w(e),s=!1,l()}}}function Jt(e){let n,o,s=Object.entries(e[2]),l=[];for(let t=0;t<s.length;t+=1)l[t]=Tt(Ht(e,s,t));let i=e[8],r=[];for(let t=0;t<i.length;t+=1)r[t]=Yt(It(e,i,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();n=O(),o=k("div");for(let t=0;t<r.length;t+=1)r[t].c();E(o,"position","absolute"),E(o,"top",e[3]+"%"),E(o,"left",e[4]+"%")},m(t,e){for(let n=0;n<l.length;n+=1)l[n].m(t,e);y(t,n,e),y(t,o,e);for(let t=0;t<r.length;t+=1)r[t].m(o,null)},p(t,[e]){if(583&e){let o;for(s=Object.entries(t[2]),o=0;o<s.length;o+=1){const i=Ht(t,s,o);l[o]?l[o].p(i,e):(l[o]=Tt(i),l[o].c(),l[o].m(n.parentNode,n))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length}if(416&e){let n;for(i=t[8],n=0;n<i.length;n+=1){const s=It(t,i,n);r[n]?r[n].p(s,e):(r[n]=Yt(s),r[n].c(),r[n].m(o,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=i.length}8&e&&E(o,"top",t[3]+"%"),16&e&&E(o,"left",t[4]+"%")},i:t,o:t,d(t){x(l,t),t&&w(n),t&&w(o),x(r,t)}}}function qt(t,e,n){let o,s;a(t,Et,(t=>n(11,s=t)));const l=D();let{page:i}=e,{order:r}=e,{id:c}=e,{translations:u}=e,{top:f}=e,{left:d}=e,h=new Map,g={};function p(t,e){n(7,g[t]=!1,g),console.log("ended:",i,t,e),l("message",{language:t,order:e})}function m(t){console.debug("playing lang",t),console.debug("audio map",h),n(7,g[t]=!0,g),h[t].play()}return t.$$set=t=>{"page"in t&&n(10,i=t.page),"order"in t&&n(0,r=t.order),"id"in t&&n(1,c=t.id),"translations"in t&&n(2,u=t.translations),"top"in t&&n(3,f=t.top),"left"in t&&n(4,d=t.left)},t.$$.update=()=>{2052&t.$$.dirty&&n(8,o=Object.entries(u).sort((([t,e],[n,o])=>s.indexOf(t)-s.indexOf(n))))},[r,c,u,f,d,m,h,g,o,p,i,s,function(t,e){V[t?"unshift":"push"]((()=>{h[e]=t,n(6,h)}))},(t,e)=>p(t,r),t=>m(t)]}class Dt extends mt{constructor(t){super(),pt(this,t,qt,Jt,r,{page:10,order:0,id:1,translations:2,top:3,left:4,play:5})}get play(){return this.$$.ctx[5]}}function Ft(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function Vt(t,e,n){const o=t.slice();return o[12]=e[n],o[13]=e,o[11]=n,o}function Xt(t){let e,o,s=t[11];const l=[{page:t[0]},{order:t[11]},t[12]],i=()=>t[6](e,s),r=()=>t[6](null,s);let c={};for(let t=0;t<l.length;t+=1)c=n(c,l[t]);return e=new Dt({props:c}),i(),e.$on("message",t[5]),{c(){ft(e.$$.fragment)},m(t,n){dt(e,t,n),o=!0},p(t,n){s!==t[11]&&(r(),s=t[11],i());const o=5&n?ut(l,[1&n&&{page:t[0]},l[1],4&n&&at(t[12])]):{};e.$set(o)},i(t){o||(it(e.$$.fragment,t),o=!0)},o(t){rt(e.$$.fragment,t),o=!1},d(t){r(),ht(e,t)}}}function Gt(t){let e,n,o;return{c(){e=k("img"),M(e,"class","obj svelte-hpv6c5"),M(e,"alt",n=t[9].name),u(e.src,o="resources/images/"+t[9].name+".png")||M(e,"src",o),E(e,"position","absolute"),E(e,"top",t[9].top+"%"),E(e,"left",t[9].left+"%"),E(e,"width",t[9].width+"%")},m(t,n){y(t,e,n)},p(t,s){8&s&&n!==(n=t[9].name)&&M(e,"alt",n),8&s&&!u(e.src,o="resources/images/"+t[9].name+".png")&&M(e,"src",o),8&s&&E(e,"top",t[9].top+"%"),8&s&&E(e,"left",t[9].left+"%"),8&s&&E(e,"width",t[9].width+"%")},d(t){t&&w(e)}}}function Kt(t){let e,n,o,s,l,i,r,c,a,f,d=t[2],h=[];for(let e=0;e<d.length;e+=1)h[e]=Xt(Vt(t,d,e));const g=t=>rt(h[t],1,1,(()=>{h[t]=null}));let p=t[3],m=[];for(let e=0;e<p.length;e+=1)m[e]=Gt(Ft(t,p,e));return{c(){e=k("div"),n=k("figure"),o=k("img"),l=O();for(let t=0;t<h.length;t+=1)h[t].c();i=O();for(let t=0;t<m.length;t+=1)m[t].c();r=O(),c=k("p"),a=j(t[0]),u(o.src,s="resources/images/pozadi_"+t[0]%2+".jpg")||M(o,"src",s),M(o,"alt",t[1]),M(n,"class","image"),M(e,"class","column is-half")},m(t,s){y(t,e,s),$(e,n),$(n,o),$(n,l);for(let t=0;t<h.length;t+=1)h[t].m(n,null);$(n,i);for(let t=0;t<m.length;t+=1)m[t].m(n,null);$(e,r),$(e,c),$(c,a),f=!0},p(t,[e]){if((!f||1&e&&!u(o.src,s="resources/images/pozadi_"+t[0]%2+".jpg"))&&M(o,"src",s),(!f||2&e)&&M(o,"alt",t[1]),53&e){let o;for(d=t[2],o=0;o<d.length;o+=1){const s=Vt(t,d,o);h[o]?(h[o].p(s,e),it(h[o],1)):(h[o]=Xt(s),h[o].c(),it(h[o],1),h[o].m(n,i))}for(st(),o=d.length;o<h.length;o+=1)g(o);lt()}if(8&e){let o;for(p=t[3],o=0;o<p.length;o+=1){const s=Ft(t,p,o);m[o]?m[o].p(s,e):(m[o]=Gt(s),m[o].c(),m[o].m(n,null))}for(;o<m.length;o+=1)m[o].d(1);m.length=p.length}(!f||1&e)&&C(a,t[0])},i(t){if(!f){for(let t=0;t<d.length;t+=1)it(h[t]);f=!0}},o(t){h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)rt(h[t]);f=!1},d(t){t&&w(e),x(h,t),x(m,t)}}}function Qt(t,e,n){let o,s;a(t,Et,(t=>n(7,o=t))),a(t,St,(t=>n(8,s=t)));let{number:l}=e,{description:i}=e,{texts:r}=e,{objects:c}=e,u={};return t.$$set=t=>{"number"in t&&n(0,l=t.number),"description"in t&&n(1,i=t.description),"texts"in t&&n(2,r=t.texts),"objects"in t&&n(3,c=t.objects)},[l,i,r,c,u,function(t){console.log("handling",t.detail);let e=parseInt(t.detail.order);if(s==Lt.OneLanguage&&r.length>e+1)u[e+1].play(t.detail.language);else if(s==Lt.AllLanguages){let n=o.indexOf(t.detail.language);n>=0&&n+1<o.length&&u[e].play(o[n+1])}},function(t,e){V[t?"unshift":"push"]((()=>{u[e]=t,n(4,u)}))}]}class Ut extends mt{constructor(t){super(),pt(this,t,Qt,Kt,r,{number:0,description:1,texts:2,objects:3})}}function Wt(t,e,n){const o=t.slice();return o[1]=e[n],o[3]=n,o}function Zt(e){let n,o,s=e[4].message+"";return{c(){n=k("p"),o=j(s),E(n,"color","red")},m(t,e){y(t,n,e),$(n,o)},p:t,i:t,o:t,d(t){t&&w(n)}}}function te(t){let e,n,o=t[0],s=[];for(let e=0;e<o.length;e+=1)s[e]=ee(Wt(t,o,e));const l=t=>rt(s[t],1,1,(()=>{s[t]=null}));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=z()},m(t,o){for(let e=0;e<s.length;e+=1)s[e].m(t,o);y(t,e,o),n=!0},p(t,n){if(1&n){let i;for(o=t[0],i=0;i<o.length;i+=1){const l=Wt(t,o,i);s[i]?(s[i].p(l,n),it(s[i],1)):(s[i]=ee(l),s[i].c(),it(s[i],1),s[i].m(e.parentNode,e))}for(st(),i=o.length;i<s.length;i+=1)l(i);lt()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)it(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)rt(s[t]);n=!1},d(t){x(s,t),t&&w(e)}}}function ee(t){let e,o;const s=[t[1]];let l={};for(let t=0;t<s.length;t+=1)l=n(l,s[t]);return e=new Ut({props:l}),{c(){ft(e.$$.fragment)},m(t,n){dt(e,t,n),o=!0},p(t,n){const o=1&n?ut(s,[at(t[1])]):{};e.$set(o)},i(t){o||(it(e.$$.fragment,t),o=!0)},o(t){rt(e.$$.fragment,t),o=!1},d(t){ht(e,t)}}}function ne(e){let n;return{c(){n=k("p"),n.textContent="Loading..."},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}function oe(t){let e,n,o,s,l,i,r,c,u,a,f,d,h;c=new Pt({});let g={ctx:t,current:null,token:null,hasCatch:!0,pending:ne,then:te,catch:Zt,value:0,error:4,blocks:[,,,]};return function(t,e){const n=e.token={};function o(t,o,s,l){if(e.token!==n)return;e.resolved=l;let i=e.ctx;void 0!==s&&(i=i.slice(),i[s]=l);const r=t&&(e.current=t)(i);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(st(),rt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),lt())})):e.block.d(1),r.c(),it(r,1),r.m(e.mount(),e.anchor),c=!0),e.block=r,e.blocks&&(e.blocks[o]=r),c&&tt()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=q();if(t.then((t=>{J(n),o(e.then,1,e.value,t),J(null)}),(t=>{if(J(n),o(e.catch,2,e.error,t),J(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var s}(t[0],g),{c(){e=k("link"),n=O(),o=k("main"),s=k("h1"),s.textContent="Svítej!",l=O(),i=k("p"),i.innerHTML='Neboli <a href="https://pointa.cz/project/d323a733-b37c-11ec-a145-0242ac120006">Vítej</a>\n    ve <a href="https://svelte.dev/">Svelte</a>.',r=O(),ft(c.$$.fragment),u=O(),a=k("hr"),f=O(),d=k("div"),g.block.c(),M(e,"rel","stylesheet"),M(e,"href","https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"),M(s,"class","svelte-p3eir8"),M(d,"class","columns is-gapless is-multiline"),M(o,"class","svelte-p3eir8")},m(t,p){$(document.head,e),y(t,n,p),y(t,o,p),$(o,s),$(o,l),$(o,i),$(o,r),dt(c,o,null),$(o,u),$(o,a),$(o,f),$(o,d),g.block.m(d,g.anchor=null),g.mount=()=>d,g.anchor=null,h=!0},p(e,[n]){!function(t,e,n){const o=e.slice(),{resolved:s}=t;t.current===t.then&&(o[t.value]=s),t.current===t.catch&&(o[t.error]=s),t.block.p(o,n)}(g,t=e,n)},i(t){h||(it(c.$$.fragment,t),it(g.block),h=!0)},o(t){rt(c.$$.fragment,t);for(let t=0;t<3;t+=1){rt(g.blocks[t])}h=!1},d(t){w(e),t&&w(n),t&&w(o),ht(c),g.block.d(),g.token=null,g=null}}}function se(t){return[async function(){return await fetch("resources/pages_with_objects.json").then((t=>t.json()))}()]}return new class extends mt{constructor(t){super(),pt(this,t,se,oe,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
