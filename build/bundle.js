var app=function(){"use strict";function n(){}function t(n){return n()}function e(){return Object.create(null)}function o(n){n.forEach(t)}function s(n){return"function"==typeof n}function r(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}let i,a,l;function c(n,t){return i||(i=document.createElement("a")),i.href=t,n===i.href}function u(t,e,o){t.$$.on_destroy.push(function(t,...e){if(null==t)return n;const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function d(n,t){n.appendChild(t)}function f(n,t,e){n.insertBefore(t,e||null)}function p(n){n.parentNode.removeChild(n)}function m(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function g(n){return document.createElement(n)}function h(n){return document.createTextNode(n)}function b(){return h(" ")}function v(){return h("")}function $(n,t,e,o){return n.addEventListener(t,e,o),()=>n.removeEventListener(t,e,o)}function k(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function y(n,t,e,o){null===e?n.style.removeProperty(t):n.style.setProperty(t,e,o?"important":"")}function w(n,t){for(let e=0;e<n.options.length;e+=1){const o=n.options[e];if(o.__value===t)return void(o.selected=!0)}n.selectedIndex=-1}function x(){if(void 0===a){a=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(n){a=!0}}return a}function z(n,t,e){n.classList[e?"add":"remove"](t)}function _(n){l=n}function j(){if(!l)throw new Error("Function called outside component initialization");return l}function O(){const n=j();return(t,e)=>{const o=n.$$.callbacks[t];if(o){const s=function(n,t,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,e,!1,t),o}(t,e);o.slice().forEach((t=>{t.call(n,s)}))}}}const W=[],L=[],E=[],C=[],M=Promise.resolve();let T=!1;function A(n){E.push(n)}const N=new Set;let H=0;function P(){const n=l;do{for(;H<W.length;){const n=W[H];H++,_(n),S(n.$$)}for(_(null),W.length=0,H=0;L.length;)L.pop()();for(let n=0;n<E.length;n+=1){const t=E[n];N.has(t)||(N.add(t),t())}E.length=0}while(W.length);for(;C.length;)C.pop()();T=!1,N.clear(),_(n)}function S(n){if(null!==n.fragment){n.update(),o(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(A)}}const q=new Set;let B;function I(){B={r:0,c:[],p:B}}function D(){B.r||o(B.c),B=B.p}function K(n,t){n&&n.i&&(q.delete(n),n.i(t))}function Z(n,t,e,o){if(n&&n.o){if(q.has(n))return;q.add(n),B.c.push((()=>{q.delete(n),o&&(e&&n.d(1),o())})),n.o(t)}}function F(n){n&&n.c()}function G(n,e,r,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=n.$$;a&&a.m(e,r),i||A((()=>{const e=l.map(t).filter(s);c?c.push(...e):o(e),n.$$.on_mount=[]})),u.forEach(A)}function J(n,t){const e=n.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function V(n,t){-1===n.$$.dirty[0]&&(W.push(n),T||(T=!0,M.then(P)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Y(t,s,r,i,a,c,u,d=[-1]){const f=l;_(t);const m=t.$$={fragment:null,ctx:null,props:c,update:n,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};u&&u(m.root);let g=!1;if(m.ctx=r?r(t,s.props||{},((n,e,...o)=>{const s=o.length?o[0]:e;return m.ctx&&a(m.ctx[n],m.ctx[n]=s)&&(!m.skip_bound&&m.bound[n]&&m.bound[n](s),g&&V(t,n)),e})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),s.target){if(s.hydrate){const n=function(n){return Array.from(n.childNodes)}(s.target);m.fragment&&m.fragment.l(n),n.forEach(p)}else m.fragment&&m.fragment.c();s.intro&&K(t.$$.fragment),G(t,s.target,s.anchor,s.customElement),P()}_(f)}class Q{$destroy(){J(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var R;!function(n){n.Off="Vypnuto",n.OneLanguage="Celá stránka v jednom jazyce",n.AllLanguages="Druhý jazyk"}(R||(R={}));const U=[];function X(t,e=n){let o;const s=new Set;function i(n){if(r(t,n)&&(t=n,o)){const n=!U.length;for(const n of s)n[1](),U.push(n,t);if(n){for(let n=0;n<U.length;n+=2)U[n][0](U[n+1]);U.length=0}}}return{set:i,update:function(n){i(n(t))},subscribe:function(r,a=n){const l=[r,a];return s.add(l),1===s.size&&(o=e(i)||n),r(t),()=>{s.delete(l),0===s.size&&(o(),o=null)}}}}const nn=X(["cs","ua"]),tn=X(R.Off);function en(n,t,e){const o=n.slice();return o[5]=t[e],o}function on(t){let e,o,s,r,i=t[5]+"";return{c(){e=g("option"),o=h(i),s=b(),e.__value=r=t[5],e.value=e.__value,e.selected=!0},m(n,t){f(n,e,t),d(e,o),d(e,s)},p:n,d(n){n&&p(e)}}}function sn(t){let e,o,s,r,i,a,l,c,u,h,v,y,x,z,_,j,O,W=Object.values(R),L=[];for(let n=0;n<W.length;n+=1)L[n]=on(en(t,W,n));return{c(){e=g("span"),e.textContent="Nastavení",o=b(),s=g("div"),r=g("div"),i=g("div"),i.innerHTML='<label class="label">Automatické přehrávání</label>',a=b(),l=g("div"),c=g("div"),u=g("div"),h=g("div"),v=g("select");for(let n=0;n<L.length;n+=1)L[n].c();y=b(),x=g("div"),x.innerHTML='<i class="fa-solid fa-play"></i>',z=b(),_=g("hr"),k(e,"class","navbar-link"),k(i,"class","field-label is-normal"),void 0===t[0]&&A((()=>t[3].call(v))),k(h,"class","select"),k(x,"class","icon is-small is-left"),k(u,"class","control has-icons-left"),k(c,"class","field is-narrow"),k(l,"class","field-body"),k(r,"class","navbar-item field is-horizontal"),k(_,"class","navbar-divider"),k(s,"class","navbar-dropdown is-right")},m(n,p){f(n,e,p),f(n,o,p),f(n,s,p),d(s,r),d(r,i),d(r,a),d(r,l),d(l,c),d(c,u),d(u,h),d(h,v);for(let n=0;n<L.length;n+=1)L[n].m(v,null);w(v,t[0]),d(u,y),d(u,x),d(s,z),d(s,_),j||(O=$(v,"change",t[3]),j=!0)},p(n,[t]){if(0&t){let e;for(W=Object.values(R),e=0;e<W.length;e+=1){const o=en(n,W,e);L[e]?L[e].p(o,t):(L[e]=on(o),L[e].c(),L[e].m(v,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=W.length}1&t&&w(v,n[0])},i:n,o:n,d(n){n&&p(e),n&&p(o),n&&p(s),m(L,n),j=!1,O()}}}function rn(n,t,e){let o,s;u(n,tn,(n=>e(1,o=n))),u(n,nn,(n=>e(2,s=n))),console.debug(JSON.stringify(s));let r=R[o],i=[...s];return n.$$.update=()=>{4&n.$$.dirty&&i!=s&&(console.debug("setting languageOrder",s,"to: ",i),nn.set(i)),3&n.$$.dirty&&r!=o&&(console.debug("setting autoplay",o,"to: ",r),tn.set(r))},[r,o,s,function(){r=function(n){const t=n.querySelector(":checked")||n.options[0];return t&&t.__value}(this),e(0,r)}]}class an extends Q{constructor(n){super(),Y(this,n,rn,sn,r,{})}}function ln(n,t,e){const o=n.slice();return o[16]=t[e],o}function cn(n,t,e){const o=n.slice();return o[16]=t[e],o[19]=t,o[20]=e,o}function un(n){let t,e,o,s,r,i=n[16];const a=()=>n[12](t,i),l=()=>n[12](null,i);function u(...t){return n[13](n[16],...t)}return{c(){t=g("audio"),e=g("source"),c(e.src,o="resources/audio/"+n[16].lang+"/"+n[16].lang+"_"+n[1]+".mp3")||k(e,"src",o),k(e,"type","audio/mpeg"),k(t,"preload","none")},m(n,o){f(n,t,o),d(t,e),a(),s||(r=$(t,"ended",u),s=!0)},p(t,s){n=t,6&s&&!c(e.src,o="resources/audio/"+n[16].lang+"/"+n[16].lang+"_"+n[1]+".mp3")&&k(e,"src",o),i!==n[16]&&(l(),i=n[16],a())},d(n){n&&p(t),l(),s=!1,r()}}}function dn(n){let t,e,o,s,r,i,a=n[16].text+"";function l(){return n[14](n[16])}return{c(){t=g("div"),e=g("p"),o=h(a),s=b(),y(e,"text-align","cs"==n[16].lang?"right":"left"),y(e,"font-size",n[7]+"px"),k(e,"class","svelte-18wbb0q"),z(e,"playing",n[6][n[16].lang]),k(t,"class","story svelte-18wbb0q"),y(t,"position","absolute"),y(t,"top",n[3][n[8].indexOf(n[16].lang)].top+"%"),y(t,"left",n[3][n[8].indexOf(n[16].lang)].left+"%"),y(t,"width",n[3][n[8].indexOf(n[16].lang)].width+"%"),y(t,"height",n[3][n[8].indexOf(n[16].lang)].height+"%"),y(t,"border","0px solid red")},m(n,a){f(n,t,a),d(t,e),d(e,o),d(t,s),r||(i=$(e,"click",l),r=!0)},p(s,r){n=s,4&r&&a!==(a=n[16].text+"")&&function(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}(o,a),4&r&&y(e,"text-align","cs"==n[16].lang?"right":"left"),128&r&&y(e,"font-size",n[7]+"px"),68&r&&z(e,"playing",n[6][n[16].lang]),268&r&&y(t,"top",n[3][n[8].indexOf(n[16].lang)].top+"%"),268&r&&y(t,"left",n[3][n[8].indexOf(n[16].lang)].left+"%"),268&r&&y(t,"width",n[3][n[8].indexOf(n[16].lang)].width+"%"),268&r&&y(t,"height",n[3][n[8].indexOf(n[16].lang)].height+"%")},d(n){n&&p(t),r=!1,i()}}}function fn(t){let e,o,s=t[2],r=[];for(let n=0;n<s.length;n+=1)r[n]=un(cn(t,s,n));let i=t[2],a=[];for(let n=0;n<i.length;n+=1)a[n]=dn(ln(t,i,n));return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=b();for(let n=0;n<a.length;n+=1)a[n].c();o=v()},m(n,t){for(let e=0;e<r.length;e+=1)r[e].m(n,t);f(n,e,t);for(let e=0;e<a.length;e+=1)a[e].m(n,t);f(n,o,t)},p(n,[t]){if(551&t){let o;for(s=n[2],o=0;o<s.length;o+=1){const i=cn(n,s,o);r[o]?r[o].p(i,t):(r[o]=un(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}if(476&t){let e;for(i=n[2],e=0;e<i.length;e+=1){const s=ln(n,i,e);a[e]?a[e].p(s,t):(a[e]=dn(s),a[e].c(),a[e].m(o.parentNode,o))}for(;e<a.length;e+=1)a[e].d(1);a.length=i.length}},i:n,o:n,d(n){m(r,n),n&&p(e),m(a,n),n&&p(o)}}}function pn(n,t,e){let o,s;u(n,nn,(n=>e(8,s=n)));const r=O();let{page:i}=t,{order:a}=t,{name:l}=t,{translations:c}=t,{positions:d}=t,{columnWidth:f}=t,p=new Map,m={};function g(n,t){e(6,m[n]=!1,m),console.log("ended:",i,n,t),r("message",{language:n,order:t})}function h(n){console.debug("playing lang",n),console.debug("audio map",p),e(6,m[n]=!0,m),p[n].play()}return n.$$set=n=>{"page"in n&&e(10,i=n.page),"order"in n&&e(0,a=n.order),"name"in n&&e(1,l=n.name),"translations"in n&&e(2,c=n.translations),"positions"in n&&e(3,d=n.positions),"columnWidth"in n&&e(11,f=n.columnWidth)},n.$$.update=()=>{2048&n.$$.dirty&&e(7,o=f/41)},[a,l,c,d,h,p,m,o,s,g,i,f,function(n,t){L[n?"unshift":"push"]((()=>{p[t.lang]=n,e(5,p)}))},(n,t)=>g(n.lang,a),n=>h(n.lang)]}class mn extends Q{constructor(n){super(),Y(this,n,pn,fn,r,{page:10,order:0,name:1,translations:2,positions:3,columnWidth:11,play:4})}get play(){return this.$$.ctx[4]}}function gn(t){let e,o,s,r,i;return{c(){e=g("div"),o=g("p"),o.textContent="„Ya ne ponimayu,“ řekla mi copatá holčička rusky. Seděla odstrčená na kraji\r\n    jednoho dejvického pískoviště. Byla polovina března 2022. „Ty rozumiyesh,“\r\n    odpověděla jsem ukrajinsky a dál jsem na ni mluvila česky. Přece si nebudeme\r\n    povídat rusky, když naše jazyky jsou si podobnější!",s=b(),r=g("div"),i=g("p"),i.textContent="«Я не понимаю», — сказала мені російською дівчинка з косичками. Вона\r\n    самотньо сиділа на краю пісочниці на Дейвіце. Це була середина березня 2022\r\n    року. «Ти розумієш», — відповіла я українською і продовжила з нею розмовляти\r\n    чеською. Ми ж не будемо говорити російською, коли наші мови більш схожі!",k(e,"class","cs pr-3 svelte-10wf235"),y(e,"position","absolute"),y(e,"top","15%"),y(e,"left","40%"),y(e,"font-size",t[0]+"px"),k(r,"class","ua pr-3 svelte-10wf235"),y(r,"position","absolute"),y(r,"top","48%"),y(r,"left","25%"),y(r,"font-size",t[0]+"px")},m(n,t){f(n,e,t),d(e,o),f(n,s,t),f(n,r,t),d(r,i)},p(n,[t]){1&t&&y(e,"font-size",n[0]+"px"),1&t&&y(r,"font-size",n[0]+"px")},i:n,o:n,d(n){n&&p(e),n&&p(s),n&&p(r)}}}function hn(n,t,e){let o,{columnWidth:s}=t;return n.$$set=n=>{"columnWidth"in n&&e(1,s=n.columnWidth)},n.$$.update=()=>{2&n.$$.dirty&&e(0,o=s/30)},[o,s]}class bn extends Q{constructor(n){super(),Y(this,n,hn,gn,r,{columnWidth:1})}}function vn(t){let e,o,s,r,i,a,l,c,u;return{c(){e=g("h2"),o=h("Povídání\r\n  "),s=g("br"),r=h("\r\n  modro-žluté krajiny"),i=b(),a=g("h2"),l=h("Розповідь\r\n  "),c=g("br"),u=h("\r\n  синьо-жовтого краю"),k(e,"class","title cs svelte-1fuchog"),y(e,"position","absolute"),y(e,"top","34%"),y(e,"left","8%"),y(e,"width","80%"),y(e,"font-size",t[0]+"rem"),k(a,"class","title ua svelte-1fuchog"),y(a,"position","absolute"),y(a,"top","50%"),y(a,"left","10%"),y(a,"width","80%"),y(a,"font-size",t[0]+"rem")},m(n,t){f(n,e,t),d(e,o),d(e,s),d(e,r),f(n,i,t),f(n,a,t),d(a,l),d(a,c),d(a,u)},p(n,[t]){1&t&&y(e,"font-size",n[0]+"rem"),1&t&&y(a,"font-size",n[0]+"rem")},i:n,o:n,d(n){n&&p(e),n&&p(i),n&&p(a)}}}function $n(n,t,e){let o,{columnWidth:s}=t;return n.$$set=n=>{"columnWidth"in n&&e(1,s=n.columnWidth)},n.$$.update=()=>{2&n.$$.dirty&&e(0,o=s/768*3)},[o,s]}class kn extends Q{constructor(n){super(),Y(this,n,$n,vn,r,{columnWidth:1})}}function yn(n,t,e){const o=n.slice();return o[11]=t[e],o[13]=e,o}function wn(n,t,e){const o=n.slice();return o[11]=t[e],o[14]=t,o[13]=e,o}function xn(n){let t,e;return t=new bn({props:{columnWidth:n[1]}}),{c(){F(t.$$.fragment)},m(n,o){G(t,n,o),e=!0},p(n,e){const o={};2&e&&(o.columnWidth=n[1]),t.$set(o)},i(n){e||(K(t.$$.fragment,n),e=!0)},o(n){Z(t.$$.fragment,n),e=!1},d(n){J(t,n)}}}function zn(n){let t,e;return t=new kn({props:{columnWidth:n[1]}}),{c(){F(t.$$.fragment)},m(n,o){G(t,n,o),e=!0},p(n,e){const o={};2&e&&(o.columnWidth=n[1]),t.$set(o)},i(n){e||(K(t.$$.fragment,n),e=!0)},o(n){Z(t.$$.fragment,n),e=!1},d(n){J(t,n)}}}function _n(n){let t,e,o=n[13];const s=()=>n[7](t,o),r=()=>n[7](null,o);let i={columnWidth:n[1],page:n[0].number,order:n[13],name:n[11].name,translations:n[11].translations,positions:n[11].positions_text};return t=new mn({props:i}),s(),t.$on("message",n[5]),{c(){F(t.$$.fragment)},m(n,o){G(t,n,o),e=!0},p(n,e){o!==n[13]&&(r(),o=n[13],s());const i={};2&e&&(i.columnWidth=n[1]),1&e&&(i.page=n[0].number),1&e&&(i.name=n[11].name),1&e&&(i.translations=n[11].translations),1&e&&(i.positions=n[11].positions_text),t.$set(i)},i(n){e||(K(t.$$.fragment,n),e=!0)},o(n){Z(t.$$.fragment,n),e=!1},d(n){r(),J(t,n)}}}function jn(n){let t,e,o=n[11].translations&&_n(n);return{c(){o&&o.c(),t=v()},m(n,s){o&&o.m(n,s),f(n,t,s),e=!0},p(n,e){n[11].translations?o?(o.p(n,e),1&e&&K(o,1)):(o=_n(n),o.c(),K(o,1),o.m(t.parentNode,t)):o&&(I(),Z(o,1,1,(()=>{o=null})),D())},i(n){e||(K(o),e=!0)},o(n){Z(o),e=!1},d(n){o&&o.d(n),n&&p(t)}}}function On(n){let t,e,o,s,r,i,a,l,u,m,h,v;return{c(){t=g("picture"),e=g("source"),s=b(),r=g("source"),a=b(),l=g("img"),v=b(),k(e,"type","image/webp"),k(e,"srcset",o="resources/images/"+n[11].name+".webp"),k(r,"type","image/png"),k(r,"srcset",i="resources/images/"+n[11].name+".png"),c(l.src,u="resources/images/"+n[11].name+".png")||k(l,"src",u),k(l,"id",m=n[11].name),k(l,"class","obj svelte-ok3l6"),k(l,"alt",h=n[11].name),y(l,"position","absolute"),y(l,"top",n[11].position_image.top+"%"),y(l,"left",n[11].position_image.left+"%"),y(l,"width",n[11].position_image.width+"%"),k(l,"loading","lazy")},m(n,o){f(n,t,o),d(t,e),d(t,s),d(t,r),d(t,a),d(t,l),d(t,v)},p(n,t){1&t&&o!==(o="resources/images/"+n[11].name+".webp")&&k(e,"srcset",o),1&t&&i!==(i="resources/images/"+n[11].name+".png")&&k(r,"srcset",i),1&t&&!c(l.src,u="resources/images/"+n[11].name+".png")&&k(l,"src",u),1&t&&m!==(m=n[11].name)&&k(l,"id",m),1&t&&h!==(h=n[11].name)&&k(l,"alt",h),1&t&&y(l,"top",n[11].position_image.top+"%"),1&t&&y(l,"left",n[11].position_image.left+"%"),1&t&&y(l,"width",n[11].position_image.width+"%")},d(n){n&&p(t)}}}function Wn(n){let t,e=n[11].position_image&&On(n);return{c(){e&&e.c(),t=v()},m(n,o){e&&e.m(n,o),f(n,t,o)},p(n,o){n[11].position_image?e?e.p(n,o):(e=On(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(n){e&&e.d(n),n&&p(t)}}}function Ln(n){let t,e,o,s,r,i,a,l,u,h,v,w,z;A(n[6]);let _=0==n[0].number&&xn(n),j=1==n[0].number&&zn(n),O=n[0].stories,W=[];for(let t=0;t<O.length;t+=1)W[t]=jn(wn(n,O,t));const L=n=>Z(W[n],1,1,(()=>{W[n]=null}));let E=n[0].stories,C=[];for(let t=0;t<E.length;t+=1)C[t]=Wn(yn(n,E,t));return{c(){t=g("div"),e=g("figure"),o=g("img"),i=b(),_&&_.c(),a=b(),j&&j.c(),l=b();for(let n=0;n<W.length;n+=1)W[n].c();u=b();for(let n=0;n<C.length;n+=1)C[n].c();c(o.src,s="resources/images/pozadi_"+n[0].number%2+".jpg")||k(o,"src",s),k(o,"alt",r="Page "+n[0].number),k(o,"class","background"),k(e,"class","image"),k(t,"class","column is-half mb-1"),y(t,"overflow",n[4]),A((()=>n[8].call(t)))},m(s,r){f(s,t,r),d(t,e),d(e,o),d(e,i),_&&_.m(e,null),d(e,a),j&&j.m(e,null),d(e,l);for(let n=0;n<W.length;n+=1)W[n].m(e,null);d(e,u);for(let n=0;n<C.length;n+=1)C[n].m(e,null);h=function(n,t){"static"===getComputedStyle(n).position&&(n.style.position="relative");const e=g("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const o=x();let s;return o?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=$(window,"message",(n=>{n.source===e.contentWindow&&t()}))):(e.src="about:blank",e.onload=()=>{s=$(e.contentWindow,"resize",t)}),d(n,e),()=>{(o||s&&e.contentWindow)&&s(),p(e)}}(t,n[8].bind(t)),v=!0,w||(z=$(window,"resize",n[6]),w=!0)},p(n,[i]){if((!v||1&i&&!c(o.src,s="resources/images/pozadi_"+n[0].number%2+".jpg"))&&k(o,"src",s),(!v||1&i&&r!==(r="Page "+n[0].number))&&k(o,"alt",r),0==n[0].number?_?(_.p(n,i),1&i&&K(_,1)):(_=xn(n),_.c(),K(_,1),_.m(e,a)):_&&(I(),Z(_,1,1,(()=>{_=null})),D()),1==n[0].number?j?(j.p(n,i),1&i&&K(j,1)):(j=zn(n),j.c(),K(j,1),j.m(e,l)):j&&(I(),Z(j,1,1,(()=>{j=null})),D()),43&i){let t;for(O=n[0].stories,t=0;t<O.length;t+=1){const o=wn(n,O,t);W[t]?(W[t].p(o,i),K(W[t],1)):(W[t]=jn(o),W[t].c(),K(W[t],1),W[t].m(e,u))}for(I(),t=O.length;t<W.length;t+=1)L(t);D()}if(1&i){let t;for(E=n[0].stories,t=0;t<E.length;t+=1){const o=yn(n,E,t);C[t]?C[t].p(o,i):(C[t]=Wn(o),C[t].c(),C[t].m(e,null))}for(;t<C.length;t+=1)C[t].d(1);C.length=E.length}(!v||16&i)&&y(t,"overflow",n[4])},i(n){if(!v){K(_),K(j);for(let n=0;n<O.length;n+=1)K(W[n]);v=!0}},o(n){Z(_),Z(j),W=W.filter(Boolean);for(let n=0;n<W.length;n+=1)Z(W[n]);v=!1},d(n){n&&p(t),_&&_.d(),j&&j.d(),m(W,n),m(C,n),h(),w=!1,z()}}}function En(n,t,e){let o,s,r;u(n,nn,(n=>e(9,s=n))),u(n,tn,(n=>e(10,r=n)));let{page:i}=t,a=0,l=0,c={};return n.$$set=n=>{"page"in n&&e(0,i=n.page)},n.$$.update=()=>{6&n.$$.dirty&&e(4,o=a/l<.9?"visible":"hidden")},[i,a,l,c,o,function(n){console.log("handling",n.detail);let t=parseInt(n.detail.order);if(r==R.OneLanguage&&i.stories.length>t+1)c[t+1].play(n.detail.language);else if(r==R.AllLanguages){let e=s.indexOf(n.detail.language);e>=0&&e+1<s.length&&c[t].play(s[e+1])}},function(){e(2,l=window.innerWidth)},function(n,t){L[n?"unshift":"push"]((()=>{c[t]=n,e(3,c)}))},function(){a=this.clientWidth,e(1,a)}]}class Cn extends Q{constructor(n){super(),Y(this,n,En,Ln,r,{page:0})}}function Mn(t){let e,o,s,r,i,a,l,c,u,m,h,v,$,y,w,x,z,_,j,O,W,L;return W=new an({}),{c(){e=g("nav"),o=g("div"),o.innerHTML='<a class="navbar-item" href="https://ukrajinskaknizka.cz"><img src="resources/images/holubice.png" alt="Logo holubice"/> \n      <h1 class="title is-5 pl-5">Povídání modro-žluté krajiny</h1></a> \n\n    <span role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onclick="document.querySelector(&#39;.navbar-menu&#39;).classList.toggle(&#39;is-active&#39;);"><span aria-hidden="true"></span> \n      <span aria-hidden="true"></span> \n      <span aria-hidden="true"></span></span>',s=b(),r=g("div"),i=g("div"),a=b(),l=g("div"),c=g("a"),c.textContent="O knížce",u=b(),m=g("a"),m.textContent="Tvůrci",h=b(),v=g("a"),v.textContent="Kontakt",$=b(),y=g("a"),y.innerHTML='<i class="fa-brands fa-facebook"></i> \n        <span class="is-hidden-desktop">Facebook: ukrajinskaknizka</span>',w=b(),x=g("a"),x.innerHTML='<i class="fa-brands fa-instagram"></i> \n        <span class="is-hidden-desktop">Instagram: ukrajinskaknizka</span>',z=b(),_=g("a"),_.innerHTML='<i class="fa-brands fa-github"></i> \n        <span class="is-hidden-desktop">GitHub: book-for-ukraine</span>',j=b(),O=g("div"),F(W.$$.fragment),k(o,"class","navbar-brand"),k(i,"class","navbar-start"),k(c,"class","navbar-item"),k(m,"class","navbar-item"),k(v,"class","navbar-item"),k(y,"class","navbar-item"),k(y,"href","https://www.facebook.com/ukrajinskaknizka"),k(x,"class","navbar-item"),k(x,"href","https://www.instagram.com/ukrajinskaknizka/"),k(_,"class","navbar-item"),k(_,"href","https://github.com/MikulasZelinka/book-for-ukraine"),k(O,"class","navbar-item has-dropdown is-hoverable"),k(l,"class","navbar-end"),k(r,"id","navbarBasicExample"),k(r,"class","navbar-menu"),k(e,"class","navbar is-fixed-top"),k(e,"aria-label","main navigation"),k(e,"id","navbar")},m(n,t){f(n,e,t),d(e,o),d(e,s),d(e,r),d(r,i),d(r,a),d(r,l),d(l,c),d(l,u),d(l,m),d(l,h),d(l,v),d(l,$),d(l,y),d(l,w),d(l,x),d(l,z),d(l,_),d(l,j),d(l,O),G(W,O,null),L=!0},p:n,i(n){L||(K(W.$$.fragment,n),L=!0)},o(n){Z(W.$$.fragment,n),L=!1},d(n){n&&p(e),J(W)}}}class Tn extends Q{constructor(n){super(),Y(this,n,null,Mn,r,{})}}function An(t){let e;return{c(){e=g("footer"),e.innerHTML='<div class="content has-text-centered"><p>Obrázky a texty: Tereza Axmannová,\n      grafické zpracování obrázků: Tereza Drnovcová,\n      sazba: Martin Koukl,\n      překlad Anastasia Litvincová,\n      redakce a korektura: Eva Trčková,\n      web: <a href="https://github.com/MikulasZelinka">Mikuláš Zelinka</a>.</p> \n\n    <p>Děkuji všem spolupracovníkům za pomoc uvést\n      projekt do života bez nároku na honorář.</p></div>',k(e,"class","footer")},m(n,t){f(n,e,t)},p:n,i:n,o:n,d(n){n&&p(e)}}}class Nn extends Q{constructor(n){super(),Y(this,n,null,An,r,{})}}function Hn(n,t,e){const o=n.slice();return o[1]=t[e],o[3]=e,o}function Pn(t){let e,o,s=t[4].message+"";return{c(){e=g("p"),o=h(s),y(e,"color","red")},m(n,t){f(n,e,t),d(e,o)},p:n,i:n,o:n,d(n){n&&p(e)}}}function Sn(n){let t,e,o=n[0],s=[];for(let t=0;t<o.length;t+=1)s[t]=qn(Hn(n,o,t));const r=n=>Z(s[n],1,1,(()=>{s[n]=null}));return{c(){for(let n=0;n<s.length;n+=1)s[n].c();t=v()},m(n,o){for(let t=0;t<s.length;t+=1)s[t].m(n,o);f(n,t,o),e=!0},p(n,e){if(1&e){let i;for(o=n[0],i=0;i<o.length;i+=1){const r=Hn(n,o,i);s[i]?(s[i].p(r,e),K(s[i],1)):(s[i]=qn(r),s[i].c(),K(s[i],1),s[i].m(t.parentNode,t))}for(I(),i=o.length;i<s.length;i+=1)r(i);D()}},i(n){if(!e){for(let n=0;n<o.length;n+=1)K(s[n]);e=!0}},o(n){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)Z(s[n]);e=!1},d(n){m(s,n),n&&p(t)}}}function qn(t){let e,o,s;return e=new Cn({props:{page:t[1]}}),{c(){F(e.$$.fragment),o=b()},m(n,t){G(e,n,t),f(n,o,t),s=!0},p:n,i(n){s||(K(e.$$.fragment,n),s=!0)},o(n){Z(e.$$.fragment,n),s=!1},d(n){J(e,n),n&&p(o)}}}function Bn(t){let e;return{c(){e=g("p"),e.textContent="Loading..."},m(n,t){f(n,e,t)},p:n,i:n,o:n,d(n){n&&p(e)}}}function In(n){let t,e,o,s,r,i,a,l,c;t=new Tn({});let u={ctx:n,current:null,token:null,hasCatch:!0,pending:Bn,then:Sn,catch:Pn,value:0,error:4,blocks:[,,,]};return function(n,t){const e=t.token={};function o(n,o,s,r){if(t.token!==e)return;t.resolved=r;let i=t.ctx;void 0!==s&&(i=i.slice(),i[s]=r);const a=n&&(t.current=n)(i);let l=!1;t.block&&(t.blocks?t.blocks.forEach(((n,e)=>{e!==o&&n&&(I(),Z(n,1,1,(()=>{t.blocks[e]===n&&(t.blocks[e]=null)})),D())})):t.block.d(1),a.c(),K(a,1),a.m(t.mount(),t.anchor),l=!0),t.block=a,t.blocks&&(t.blocks[o]=a),l&&P()}if((s=n)&&"object"==typeof s&&"function"==typeof s.then){const e=j();if(n.then((n=>{_(e),o(t.then,1,t.value,n),_(null)}),(n=>{if(_(e),o(t.catch,2,t.error,n),_(null),!t.hasCatch)throw n})),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,n),!0;t.resolved=n}var s}(n[0],u),l=new Nn({}),{c(){F(t.$$.fragment),e=b(),o=g("main"),s=g("div"),u.block.c(),r=b(),i=g("section"),i.innerHTML='<h1 class="title">O projektu</h1> \n  <div class="columns" style="overflow:hidden;"><div class="column"><h2 class="subtitle">Knížka</h2> \n      <p>Cílem je vystiknout a zdarma poskytnout knížku ukrajinským dětem.</p></div> \n    <div class="column"><h2 class="subtitle">Autoři</h2> \n      <p>Na projektu se dobrovolně a bez nároku na odměnu podílí:</p></div></div>',a=b(),F(l.$$.fragment),k(s,"class","columns is-gapless is-multiline"),k(o,"class","svelte-1mblqay"),k(i,"class","section is-medium")},m(n,p){G(t,n,p),f(n,e,p),f(n,o,p),d(o,s),u.block.m(s,u.anchor=null),u.mount=()=>s,u.anchor=null,f(n,r,p),f(n,i,p),f(n,a,p),G(l,n,p),c=!0},p(t,[e]){!function(n,t,e){const o=t.slice(),{resolved:s}=n;n.current===n.then&&(o[n.value]=s),n.current===n.catch&&(o[n.error]=s),n.block.p(o,e)}(u,n=t,e)},i(n){c||(K(t.$$.fragment,n),K(u.block),K(l.$$.fragment,n),c=!0)},o(n){Z(t.$$.fragment,n);for(let n=0;n<3;n+=1){Z(u.blocks[n])}Z(l.$$.fragment,n),c=!1},d(n){J(t,n),n&&p(e),n&&p(o),u.block.d(),u.token=null,u=null,n&&p(r),n&&p(i),n&&p(a),J(l,n)}}}function Dn(n){return[async function(){return await fetch("resources/pages.json").then((n=>n.json()))}()]}return new class extends Q{constructor(n){super(),Y(this,n,Dn,In,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
