import{S as Me,i as He,s as Ce,e as _,t as k,c as m,a as g,h as b,d as c,b as S,g as H,J as n,E as K,P as $e,L as Vl,k as w,m as P,f as z,X as ln,j as N,l as Se,M as Nt,N as xe,Y as zn,Z as Sn,I as nn,w as et,x as tt,y as lt,q as R,o as G,B as nt,n as Dt,p as Lt,_ as jn,Q as An,R as In}from"../chunks/index-801922c2.js";import{S as an,d as on,e as wn,c as yn,f as Tn,A as sn,a as Pn}from"../chunks/language.enum-a65672dd.js";import"../chunks/index-710a68a9.js";function Wn(l){let e,a,t,o,h,f,i,r;return{c(){e=_("section"),a=_("div"),t=_("p"),o=k("V p\xE1tek 10. 6. 2022 n\xE1s m\u016F\u017Eete nav\u0161t\xEDvit na "),h=_("strong"),f=_("a"),i=k("veletrhu Sv\u011Bt knihy v Praze"),r=k(" \u2013 podrobnosti p\u0159ipravujeme."),this.h()},l(s){e=m(s,"SECTION",{class:!0});var p=g(e);a=m(p,"DIV",{class:!0});var E=g(a);t=m(E,"P",{class:!0});var W=g(t);o=b(W,"V p\xE1tek 10. 6. 2022 n\xE1s m\u016F\u017Eete nav\u0161t\xEDvit na "),h=m(W,"STRONG",{});var y=g(h);f=m(y,"A",{href:!0});var v=g(f);i=b(v,"veletrhu Sv\u011Bt knihy v Praze"),v.forEach(c),y.forEach(c),r=b(W," \u2013 podrobnosti p\u0159ipravujeme."),W.forEach(c),E.forEach(c),p.forEach(c),this.h()},h(){S(f,"href","https://www.svetknihy.cz/"),S(t,"class","subtitle"),S(a,"class","hero-body pb-5"),S(e,"class","hero is-warning pt-5 ")},m(s,p){H(s,e,p),n(e,a),n(a,t),n(t,o),n(t,h),n(h,f),n(f,i),n(t,r)},p:K,i:K,o:K,d(s){s&&c(e)}}}class On extends Me{constructor(e){super(),He(this,e,null,Wn,Ce,{})}}function rn(l,e,a){const t=l.slice();return t[18]=e[a],t}function un(l,e,a){const t=l.slice();return t[18]=e[a],t[21]=e,t[22]=a,t}function fn(l){let e,a,t,o=l[18],h,f;const i=()=>l[14](e,o),r=()=>l[14](null,o);function s(...p){return l[15](l[18],...p)}return{c(){e=_("audio"),a=_("source"),this.h()},l(p){e=m(p,"AUDIO",{preload:!0});var E=g(e);a=m(E,"SOURCE",{src:!0,type:!0}),E.forEach(c),this.h()},h(){$e(a.src,t="audio/"+l[18].lang+"/"+l[18].lang+"_"+l[1]+".mp3")||S(a,"src",t),S(a,"type","audio/mpeg"),S(e,"preload","none")},m(p,E){H(p,e,E),n(e,a),i(),h||(f=Vl(e,"ended",s),h=!0)},p(p,E){l=p,E&6&&!$e(a.src,t="audio/"+l[18].lang+"/"+l[18].lang+"_"+l[1]+".mp3")&&S(a,"src",t),o!==l[18]&&(r(),o=l[18],i())},d(p){p&&c(e),r(),h=!1,f()}}}function cn(l){let e,a,t=l[18].texts[l[10]===an.default?on.get(l[18].lang):l[10]]+"",o,h,f,i;function r(){return l[16](l[18])}return{c(){e=_("div"),a=_("p"),o=k(t),h=w(),this.h()},l(s){e=m(s,"DIV",{class:!0,style:!0});var p=g(e);a=m(p,"P",{style:!0,class:!0});var E=g(a);o=b(E,t),E.forEach(c),h=P(p),p.forEach(c),this.h()},h(){z(a,"text-align",l[4]),z(a,"font-size",l[8]+"px"),S(a,"class","svelte-3ix91"),ln(a,"playing",l[7][l[18].lang]),S(e,"class","story svelte-3ix91"),z(e,"position","absolute"),z(e,"top",l[3][l[9].indexOf(l[18].lang)].top+"%"),z(e,"left",l[3][l[9].indexOf(l[18].lang)].left+"%"),z(e,"height",l[3][l[9].indexOf(l[18].lang)].height+"%"),z(e,"border","0px solid red")},m(s,p){H(s,e,p),n(e,a),n(a,o),n(e,h),f||(i=Vl(a,"click",r),f=!0)},p(s,p){l=s,p&1028&&t!==(t=l[18].texts[l[10]===an.default?on.get(l[18].lang):l[10]]+"")&&N(o,t),p&16&&z(a,"text-align",l[4]),p&256&&z(a,"font-size",l[8]+"px"),p&132&&ln(a,"playing",l[7][l[18].lang]),p&524&&z(e,"top",l[3][l[9].indexOf(l[18].lang)].top+"%"),p&524&&z(e,"left",l[3][l[9].indexOf(l[18].lang)].left+"%"),p&524&&z(e,"height",l[3][l[9].indexOf(l[18].lang)].height+"%")},d(s){s&&c(e),f=!1,i()}}}function Dn(l){let e,a,t=l[2],o=[];for(let i=0;i<t.length;i+=1)o[i]=fn(un(l,t,i));let h=l[2],f=[];for(let i=0;i<h.length;i+=1)f[i]=cn(rn(l,h,i));return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=w();for(let i=0;i<f.length;i+=1)f[i].c();a=Se()},l(i){for(let r=0;r<o.length;r+=1)o[r].l(i);e=P(i);for(let r=0;r<f.length;r+=1)f[r].l(i);a=Se()},m(i,r){for(let s=0;s<o.length;s+=1)o[s].m(i,r);H(i,e,r);for(let s=0;s<f.length;s+=1)f[s].m(i,r);H(i,a,r)},p(i,[r]){if(r&2119){t=i[2];let s;for(s=0;s<t.length;s+=1){const p=un(i,t,s);o[s]?o[s].p(p,r):(o[s]=fn(p),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=t.length}if(r&1980){h=i[2];let s;for(s=0;s<h.length;s+=1){const p=rn(i,h,s);f[s]?f[s].p(p,r):(f[s]=cn(p),f[s].c(),f[s].m(a.parentNode,a))}for(;s<f.length;s+=1)f[s].d(1);f.length=h.length}},i:K,o:K,d(i){Nt(o,i),i&&c(e),Nt(f,i),i&&c(a)}}}function Ln(l,e,a){let t,o,h;xe(l,wn,u=>a(9,o=u)),xe(l,yn,u=>a(10,h=u));const f=zn();let{page:i}=e,{order:r}=e,{name:s}=e,{translations:p}=e,{positions:E}=e,{align:W}=e,{columnWidth:y}=e,v=new Map,j={};function C(u,A){a(7,j[u]=!1,j),f("message",{language:u,order:A})}function I(u){a(7,j[u]=!0,j),v[u].play()}function J(u,A){Sn[u?"unshift":"push"](()=>{v[A.lang]=u,a(6,v)})}const B=(u,A)=>C(u.lang,r),D=u=>I(u.lang);return l.$$set=u=>{"page"in u&&a(12,i=u.page),"order"in u&&a(0,r=u.order),"name"in u&&a(1,s=u.name),"translations"in u&&a(2,p=u.translations),"positions"in u&&a(3,E=u.positions),"align"in u&&a(4,W=u.align),"columnWidth"in u&&a(13,y=u.columnWidth)},l.$$.update=()=>{l.$$.dirty&8192&&a(8,t=y/30)},[r,s,p,E,W,I,v,j,t,o,h,C,i,y,J,B,D]}class Nn extends Me{constructor(e){super(),He(this,e,Ln,Dn,Ce,{page:12,order:0,name:1,translations:2,positions:3,align:4,columnWidth:13,play:5})}get play(){return this.$$.ctx[5]}}function Vn(l){let e,a,t,o,h,f,i,r,s,p,E,W,y,v,j,C,I,J,B,D,u,A,d,V,we,F,Y,ue,Pe,Q,ze,je,le,x,ne,ee,Ae,Ie,X,ae,fe,oe,ye;return{c(){e=_("div"),a=_("p"),t=k("\u201EJa n\u011B panim\xE1ju,\u201C \u0159ekla mi copat\xE1"),o=w(),h=_("p"),f=k("hol\u010Di\u010Dka rusky. Sed\u011Bla odstr\u010Den\xE1 na"),i=w(),r=_("p"),s=k("kraji p\xEDskovi\u0161t\u011B. \u201ETy rozum\xEDje\u0161,\u201C"),p=w(),E=_("p"),W=k("odpov\u011Bd\u011Bla jsem ukrajinsky"),y=w(),v=_("p"),j=k("a d\xE1l jsem na ni mluvila \u010Desky."),C=w(),I=_("p"),J=k("Porozum\u011Bla a pak si \u0161la"),B=w(),D=_("p"),u=k("hr\xE1t s \u010Desk\xFDmi d\u011Btmi."),A=w(),d=_("div"),V=_("p"),we=k("\xAB\u042F \u043D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u044E\xBB, \u2014 \u0441\u043A\u0430\u0437\u0430\u043B\u0430 \u043C\u0435\u043D\u0456 \u0440\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u043E\u044E"),F=w(),Y=_("p"),ue=k("\u0434\u0456\u0432\u0447\u0438\u043D\u043A\u0430 \u0437 \u043A\u043E\u0441\u0438\u0447\u043A\u0430\u043C\u0438. \u0412\u043E\u043D\u0430 \u0441\u0430\u043C\u043E\u0442\u043D\u044C\u043E \u0441\u0438\u0434\u0456\u043B\u0430"),Pe=w(),Q=_("p"),ze=k("\u043D\u0430 \u043A\u0440\u0430\u044E \u043F\u0456\u0441\u043E\u0447\u043D\u0438\u0446\u0456. \xAB\u0422\u0438 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0448\xBB, \u2014 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043B\u0430"),je=w(),le=_("p"),x=k("\u044F \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E \u0456 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u043B\u0430 \u0437 \u043D\u0435\u044E"),ne=w(),ee=_("p"),Ae=k("\u0440\u043E\u0437\u043C\u043E\u0432\u043B\u044F\u0442\u0438 \u0447\u0435\u0441\u044C\u043A\u043E\u044E. \u0412\u043E\u043D\u0430 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0430,"),Ie=w(),X=_("p"),ae=k("\u0430 \u043F\u043E\u0442\u0456\u043C \u043F\u0456\u0448\u043B\u0430 \u0433\u0440\u0430\u0442\u0438\u0441\u044F"),fe=w(),oe=_("p"),ye=k("\u0437 \u0447\u0435\u0441\u044C\u043A\u0438\u043C\u0438 \u0434\u0456\u0442\u044C\u043C\u0438."),this.h()},l(U){e=m(U,"DIV",{class:!0,style:!0});var L=g(e);a=m(L,"P",{});var Te=g(a);t=b(Te,"\u201EJa n\u011B panim\xE1ju,\u201C \u0159ekla mi copat\xE1"),Te.forEach(c),o=P(L),h=m(L,"P",{});var Re=g(h);f=b(Re,"hol\u010Di\u010Dka rusky. Sed\u011Bla odstr\u010Den\xE1 na"),Re.forEach(c),i=P(L),r=m(L,"P",{});var Ue=g(r);s=b(Ue,"kraji p\xEDskovi\u0161t\u011B. \u201ETy rozum\xEDje\u0161,\u201C"),Ue.forEach(c),p=P(L),E=m(L,"P",{});var se=g(E);W=b(se,"odpov\u011Bd\u011Bla jsem ukrajinsky"),se.forEach(c),y=P(L),v=m(L,"P",{});var ce=g(v);j=b(ce,"a d\xE1l jsem na ni mluvila \u010Desky."),ce.forEach(c),C=P(L),I=m(L,"P",{});var We=g(I);J=b(We,"Porozum\u011Bla a pak si \u0161la"),We.forEach(c),B=P(L),D=m(L,"P",{});var Ze=g(D);u=b(Ze,"hr\xE1t s \u010Desk\xFDmi d\u011Btmi."),Ze.forEach(c),L.forEach(c),A=P(U),d=m(U,"DIV",{class:!0,style:!0});var Z=g(d);V=m(Z,"P",{});var ie=g(V);we=b(ie,"\xAB\u042F \u043D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u044E\xBB, \u2014 \u0441\u043A\u0430\u0437\u0430\u043B\u0430 \u043C\u0435\u043D\u0456 \u0440\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u043E\u044E"),ie.forEach(c),F=P(Z),Y=m(Z,"P",{});var he=g(Y);ue=b(he,"\u0434\u0456\u0432\u0447\u0438\u043D\u043A\u0430 \u0437 \u043A\u043E\u0441\u0438\u0447\u043A\u0430\u043C\u0438. \u0412\u043E\u043D\u0430 \u0441\u0430\u043C\u043E\u0442\u043D\u044C\u043E \u0441\u0438\u0434\u0456\u043B\u0430"),he.forEach(c),Pe=P(Z),Q=m(Z,"P",{});var Oe=g(Q);ze=b(Oe,"\u043D\u0430 \u043A\u0440\u0430\u044E \u043F\u0456\u0441\u043E\u0447\u043D\u0438\u0446\u0456. \xAB\u0422\u0438 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0448\xBB, \u2014 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043B\u0430"),Oe.forEach(c),je=P(Z),le=m(Z,"P",{});var Be=g(le);x=b(Be,"\u044F \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E \u0456 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u043B\u0430 \u0437 \u043D\u0435\u044E"),Be.forEach(c),ne=P(Z),ee=m(Z,"P",{});var Ge=g(ee);Ae=b(Ge,"\u0440\u043E\u0437\u043C\u043E\u0432\u043B\u044F\u0442\u0438 \u0447\u0435\u0441\u044C\u043A\u043E\u044E. \u0412\u043E\u043D\u0430 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0430,"),Ge.forEach(c),Ie=P(Z),X=m(Z,"P",{});var re=g(X);ae=b(re,"\u0430 \u043F\u043E\u0442\u0456\u043C \u043F\u0456\u0448\u043B\u0430 \u0433\u0440\u0430\u0442\u0438\u0441\u044F"),re.forEach(c),fe=P(Z),oe=m(Z,"P",{});var pe=g(oe);ye=b(pe,"\u0437 \u0447\u0435\u0441\u044C\u043A\u0438\u043C\u0438 \u0434\u0456\u0442\u044C\u043C\u0438."),pe.forEach(c),Z.forEach(c),this.h()},h(){S(e,"class","cs pr-3 svelte-1or7f0x"),z(e,"position","absolute"),z(e,"top","20%"),z(e,"right","5%"),z(e,"font-size",l[0]+"px"),S(d,"class","ua pr-3 svelte-1or7f0x"),z(d,"position","absolute"),z(d,"top","48%"),z(d,"right","5%"),z(d,"font-size",l[0]+"px")},m(U,L){H(U,e,L),n(e,a),n(a,t),n(e,o),n(e,h),n(h,f),n(e,i),n(e,r),n(r,s),n(e,p),n(e,E),n(E,W),n(e,y),n(e,v),n(v,j),n(e,C),n(e,I),n(I,J),n(e,B),n(e,D),n(D,u),H(U,A,L),H(U,d,L),n(d,V),n(V,we),n(d,F),n(d,Y),n(Y,ue),n(d,Pe),n(d,Q),n(Q,ze),n(d,je),n(d,le),n(le,x),n(d,ne),n(d,ee),n(ee,Ae),n(d,Ie),n(d,X),n(X,ae),n(d,fe),n(d,oe),n(oe,ye)},p(U,[L]){L&1&&z(e,"font-size",U[0]+"px"),L&1&&z(d,"font-size",U[0]+"px")},i:K,o:K,d(U){U&&c(e),U&&c(A),U&&c(d)}}}function Mn(l,e,a){let t,{columnWidth:o}=e;return l.$$set=h=>{"columnWidth"in h&&a(1,o=h.columnWidth)},l.$$.update=()=>{l.$$.dirty&2&&a(0,t=o/31)},[t,o]}class Hn extends Me{constructor(e){super(),He(this,e,Mn,Vn,Ce,{columnWidth:1})}}function Cn(l){let e,a,t,o,h,f,i,r,s;return{c(){e=_("h2"),a=k(`Pov\xEDd\xE1n\xED
	`),t=_("br"),o=k(`
	modro-\u017Elut\xE9 krajiny`),h=w(),f=_("h2"),i=k(`\u0420\u043E\u0437\u043F\u043E\u0432\u0456\u0434\u044C
	`),r=_("br"),s=k(`
	\u0441\u0438\u043D\u044C\u043E-\u0436\u043E\u0432\u0442\u043E\u0433\u043E \u043A\u0440\u0430\u044E`),this.h()},l(p){e=m(p,"H2",{class:!0,style:!0});var E=g(e);a=b(E,`Pov\xEDd\xE1n\xED
	`),t=m(E,"BR",{}),o=b(E,`
	modro-\u017Elut\xE9 krajiny`),E.forEach(c),h=P(p),f=m(p,"H2",{class:!0,style:!0});var W=g(f);i=b(W,`\u0420\u043E\u0437\u043F\u043E\u0432\u0456\u0434\u044C
	`),r=m(W,"BR",{}),s=b(W,`
	\u0441\u0438\u043D\u044C\u043E-\u0436\u043E\u0432\u0442\u043E\u0433\u043E \u043A\u0440\u0430\u044E`),W.forEach(c),this.h()},h(){S(e,"class","title cs svelte-1ps4jjk"),z(e,"position","absolute"),z(e,"top","34%"),z(e,"left","8%"),z(e,"width","80%"),z(e,"font-size",l[0]+"rem"),S(f,"class","title ua svelte-1ps4jjk"),z(f,"position","absolute"),z(f,"top","50%"),z(f,"left","10%"),z(f,"width","80%"),z(f,"font-size",l[0]+"rem")},m(p,E){H(p,e,E),n(e,a),n(e,t),n(e,o),H(p,h,E),H(p,f,E),n(f,i),n(f,r),n(f,s)},p(p,[E]){E&1&&z(e,"font-size",p[0]+"rem"),E&1&&z(f,"font-size",p[0]+"rem")},i:K,o:K,d(p){p&&c(e),p&&c(h),p&&c(f)}}}function Rn(l,e,a){let t,{columnWidth:o}=e;return l.$$set=h=>{"columnWidth"in h&&a(1,o=h.columnWidth)},l.$$.update=()=>{l.$$.dirty&2&&a(0,t=o/768*3)},[t,o]}class Un extends Me{constructor(e){super(),He(this,e,Rn,Cn,Ce,{columnWidth:1})}}function hn(l,e,a){const t=l.slice();return t[11]=e[a],t[13]=a,t}function pn(l,e,a){const t=l.slice();return t[11]=e[a],t[14]=e,t[13]=a,t}function _n(l){let e,a;return e=new Hn({props:{columnWidth:l[1]}}),{c(){et(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,o){lt(e,t,o),a=!0},p(t,o){const h={};o&2&&(h.columnWidth=t[1]),e.$set(h)},i(t){a||(R(e.$$.fragment,t),a=!0)},o(t){G(e.$$.fragment,t),a=!1},d(t){nt(e,t)}}}function mn(l){let e,a;return e=new Un({props:{columnWidth:l[1]}}),{c(){et(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,o){lt(e,t,o),a=!0},p(t,o){const h={};o&2&&(h.columnWidth=t[1]),e.$set(h)},i(t){a||(R(e.$$.fragment,t),a=!0)},o(t){G(e.$$.fragment,t),a=!1},d(t){nt(e,t)}}}function gn(l){let e,a=l[13],t;const o=()=>l[7](e,a),h=()=>l[7](null,a);let f={columnWidth:l[1],page:l[0].number,order:l[13],name:l[11].name,translations:l[11].translations,align:l[11].text_align,positions:l[11].positions_text};return e=new Nn({props:f}),o(),e.$on("message",l[5]),{c(){et(e.$$.fragment)},l(i){tt(e.$$.fragment,i)},m(i,r){lt(e,i,r),t=!0},p(i,r){a!==i[13]&&(h(),a=i[13],o());const s={};r&2&&(s.columnWidth=i[1]),r&1&&(s.page=i[0].number),r&1&&(s.name=i[11].name),r&1&&(s.translations=i[11].translations),r&1&&(s.align=i[11].text_align),r&1&&(s.positions=i[11].positions_text),e.$set(s)},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){G(e.$$.fragment,i),t=!1},d(i){h(),nt(e,i)}}}function dn(l){let e,a,t=l[11].translations&&gn(l);return{c(){t&&t.c(),e=Se()},l(o){t&&t.l(o),e=Se()},m(o,h){t&&t.m(o,h),H(o,e,h),a=!0},p(o,h){o[11].translations?t?(t.p(o,h),h&1&&R(t,1)):(t=gn(o),t.c(),R(t,1),t.m(e.parentNode,e)):t&&(Dt(),G(t,1,1,()=>{t=null}),Lt())},i(o){a||(R(t),a=!0)},o(o){G(t),a=!1},d(o){t&&t.d(o),o&&c(e)}}}function vn(l){let e,a,t,o,h,f,i,r,s,p,E,W;return{c(){e=_("picture"),a=_("source"),o=w(),h=_("source"),i=w(),r=_("img"),W=w(),this.h()},l(y){e=m(y,"PICTURE",{});var v=g(e);a=m(v,"SOURCE",{type:!0,srcset:!0}),o=P(v),h=m(v,"SOURCE",{type:!0,srcset:!0}),i=P(v),r=m(v,"IMG",{src:!0,id:!0,class:!0,alt:!0,style:!0,loading:!0}),W=P(v),v.forEach(c),this.h()},h(){S(a,"type","image/webp"),S(a,"srcset",t="images/"+l[11].name+".webp"),S(h,"type","image/png"),S(h,"srcset",f="images/"+l[11].name+".png"),$e(r.src,s="images/"+l[11].name+".png")||S(r,"src",s),S(r,"id",p=l[11].name),S(r,"class","obj svelte-7gf76f"),S(r,"alt",E=l[11].name),z(r,"position","absolute"),z(r,"top",l[11].position_image.top+"%"),z(r,"left",l[11].position_image.left+"%"),z(r,"width",l[11].position_image.width+"%"),S(r,"loading","lazy")},m(y,v){H(y,e,v),n(e,a),n(e,o),n(e,h),n(e,i),n(e,r),n(e,W)},p(y,v){v&1&&t!==(t="images/"+y[11].name+".webp")&&S(a,"srcset",t),v&1&&f!==(f="images/"+y[11].name+".png")&&S(h,"srcset",f),v&1&&!$e(r.src,s="images/"+y[11].name+".png")&&S(r,"src",s),v&1&&p!==(p=y[11].name)&&S(r,"id",p),v&1&&E!==(E=y[11].name)&&S(r,"alt",E),v&1&&z(r,"top",y[11].position_image.top+"%"),v&1&&z(r,"left",y[11].position_image.left+"%"),v&1&&z(r,"width",y[11].position_image.width+"%")},d(y){y&&c(e)}}}function kn(l){let e,a=l[11].position_image&&vn(l);return{c(){a&&a.c(),e=Se()},l(t){a&&a.l(t),e=Se()},m(t,o){a&&a.m(t,o),H(t,e,o)},p(t,o){t[11].position_image?a?a.p(t,o):(a=vn(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&c(e)}}}function Zn(l){let e,a,t,o,h,f,i,r,s,p,E,W,y;nn(l[6]);let v=l[0].number==0&&_n(l),j=l[0].number==1&&mn(l),C=l[0].stories,I=[];for(let u=0;u<C.length;u+=1)I[u]=dn(pn(l,C,u));const J=u=>G(I[u],1,1,()=>{I[u]=null});let B=l[0].stories,D=[];for(let u=0;u<B.length;u+=1)D[u]=kn(hn(l,B,u));return{c(){e=_("div"),a=_("figure"),t=_("img"),f=w(),v&&v.c(),i=w(),j&&j.c(),r=w();for(let u=0;u<I.length;u+=1)I[u].c();s=w();for(let u=0;u<D.length;u+=1)D[u].c();this.h()},l(u){e=m(u,"DIV",{class:!0,style:!0});var A=g(e);a=m(A,"FIGURE",{class:!0});var d=g(a);t=m(d,"IMG",{src:!0,alt:!0,class:!0}),f=P(d),v&&v.l(d),i=P(d),j&&j.l(d),r=P(d);for(let V=0;V<I.length;V+=1)I[V].l(d);s=P(d);for(let V=0;V<D.length;V+=1)D[V].l(d);d.forEach(c),A.forEach(c),this.h()},h(){$e(t.src,o="images/pozadi_"+l[0].number%2+".jpg")||S(t,"src",o),S(t,"alt",h="Page "+l[0].number),S(t,"class","background"),S(a,"class","image"),S(e,"class","column is-6-desktop is-12-tablet mb-1"),z(e,"overflow",l[4]),nn(()=>l[8].call(e))},m(u,A){H(u,e,A),n(e,a),n(a,t),n(a,f),v&&v.m(a,null),n(a,i),j&&j.m(a,null),n(a,r);for(let d=0;d<I.length;d+=1)I[d].m(a,null);n(a,s);for(let d=0;d<D.length;d+=1)D[d].m(a,null);p=jn(e,l[8].bind(e)),E=!0,W||(y=Vl(window,"resize",l[6]),W=!0)},p(u,[A]){if((!E||A&1&&!$e(t.src,o="images/pozadi_"+u[0].number%2+".jpg"))&&S(t,"src",o),(!E||A&1&&h!==(h="Page "+u[0].number))&&S(t,"alt",h),u[0].number==0?v?(v.p(u,A),A&1&&R(v,1)):(v=_n(u),v.c(),R(v,1),v.m(a,i)):v&&(Dt(),G(v,1,1,()=>{v=null}),Lt()),u[0].number==1?j?(j.p(u,A),A&1&&R(j,1)):(j=mn(u),j.c(),R(j,1),j.m(a,r)):j&&(Dt(),G(j,1,1,()=>{j=null}),Lt()),A&43){C=u[0].stories;let d;for(d=0;d<C.length;d+=1){const V=pn(u,C,d);I[d]?(I[d].p(V,A),R(I[d],1)):(I[d]=dn(V),I[d].c(),R(I[d],1),I[d].m(a,s))}for(Dt(),d=C.length;d<I.length;d+=1)J(d);Lt()}if(A&1){B=u[0].stories;let d;for(d=0;d<B.length;d+=1){const V=hn(u,B,d);D[d]?D[d].p(V,A):(D[d]=kn(V),D[d].c(),D[d].m(a,null))}for(;d<D.length;d+=1)D[d].d(1);D.length=B.length}(!E||A&16)&&z(e,"overflow",u[4])},i(u){if(!E){R(v),R(j);for(let A=0;A<C.length;A+=1)R(I[A]);E=!0}},o(u){G(v),G(j),I=I.filter(Boolean);for(let A=0;A<I.length;A+=1)G(I[A]);E=!1},d(u){u&&c(e),v&&v.d(),j&&j.d(),Nt(I,u),Nt(D,u),p(),W=!1,y()}}}function Bn(l,e,a){let t,o,h;xe(l,wn,v=>a(9,o=v)),xe(l,Tn,v=>a(10,h=v));let{page:f}=e,i=0,r=0,s={};function p(v){let j=parseInt(v.detail.order);if(h==sn.OneLanguage&&f.stories.length>j+1)s[j+1].play(v.detail.language);else if(h==sn.AllLanguages){let C=o.indexOf(v.detail.language);C>=0&&C+1<o.length&&s[j].play(o[C+1])}}function E(){a(2,r=window.innerWidth)}function W(v,j){Sn[v?"unshift":"push"](()=>{s[j]=v,a(3,s)})}function y(){i=this.clientWidth,a(1,i)}return l.$$set=v=>{"page"in v&&a(0,f=v.page)},l.$$.update=()=>{l.$$.dirty&6&&a(4,t=i/r<.9?"visible":"hidden")},[f,i,r,s,t,p,E,W,y]}class Gn extends Me{constructor(e){super(),He(this,e,Bn,Zn,Ce,{page:0})}}function Kn(l){let e,a,t,o,h,f=l[0]("about")+"",i,r,s,p=l[0]("aboutSection.goal")+"",E,W,y,v=l[0]("aboutSection.future")+"",j,C,I,J=l[0]("aboutSection.support")+"",B,D,u,A,d=l[0]("authors")+"",V,we,F,Y=l[0]("authorsSection.content")+"",ue,Pe,Q,ze,je,le,x,ne=l[0]("authorsSection.supervision")+"",ee,Ae,Ie,X,ae=l[0]("authorsSection.graphicDesign")+"",fe,oe,ye,U,L=l[0]("authorsSection.language")+"",Te,Re,Ue,se,ce=l[0]("authorsSection.editing")+"",We,Ze,Z,ie,he=l[0]("authorsSection.typesetting")+"",Oe,Be,Ge,re,pe=l[0]("authorsSection.graphicHelp")+"",Vt,Yt,$t,at,ot=l[0]("authorsSection.translation")+"",Mt,xt,st,_e,it,el,rt=l[0]("languages.uk")+"",Ht,tl,ll,ut,ft=l[0]("authorsSection.voice")+"",Ct,nl,De,me,ct,al,ht=l[0]("languages.cs")+"",Rt,ol,sl,ge,pt,il,_t=l[0]("languages.uk")+"",Ut,rl,ul,q,mt,gt=l[0]("authorsSection.web")+"",Zt,fl,de,Ke,cl,hl,qe,pl,_l,ml,ve,dt=l[0]("aboutSection.development")+"",Bt,gl,Le,vt,dl,vl,kl,kt,bt=l[0]("authorsSection.translation")+"",Gt,bl,Ne,ke,Et,El,St=l[0]("languages.en")+"",Kt,Sl,wl,$,wt,Pl,Pt=l[0]("languages.uk")+"",qt,zl,Je,jl,Al,Fe,Il,Jt,Ve,Qe,Xe,zt=l[0]("authorsSection.acknowledgement")+"",Ft;return{c(){e=_("section"),a=_("div"),t=_("div"),o=_("div"),h=_("h2"),i=k(f),r=w(),s=_("p"),E=k(p),W=w(),y=_("p"),j=k(v),C=w(),I=_("p"),B=k(J),D=w(),u=_("div"),A=_("h2"),V=k(d),we=w(),F=_("p"),ue=k(Y),Pe=k(": Tereza Axmannov\xE1, tereza.axmann"),Q=_("span"),ze=k("name"),je=k("@gmail.com"),le=w(),x=_("p"),ee=k(ne),Ae=k(": Viktor Vilhelm"),Ie=w(),X=_("p"),fe=k(ae),oe=k(": Tereza Drnovcov\xE1"),ye=w(),U=_("p"),Te=k(L),Re=k(": Petra Sou\u010Dkov\xE1"),Ue=w(),se=_("p"),We=k(ce),Ze=k(": Eva Tr\u010Dkov\xE1"),Z=w(),ie=_("p"),Oe=k(he),Be=k(": Linda Hrube\u0161ov\xE1, Minimax studio"),Ge=w(),re=_("p"),Vt=k(pe),Yt=k(": Martin Koukl"),$t=w(),at=_("h4"),Mt=k(ot),xt=w(),st=_("ul"),_e=_("li"),it=_("span"),el=w(),Ht=k(rt),tl=k(": Anastasia Litvincov\xE1"),ll=w(),ut=_("h4"),Ct=k(ft),nl=w(),De=_("ul"),me=_("li"),ct=_("span"),al=w(),Rt=k(ht),ol=k(": Tereza Axmannov\xE1"),sl=w(),ge=_("li"),pt=_("span"),il=w(),Ut=k(_t),rl=k(": Anastasia Litvincov\xE1"),ul=w(),q=_("div"),mt=_("h2"),Zt=k(gt),fl=w(),de=_("p"),Ke=_("a"),cl=k("Mikul\xE1\u0161 Zelinka"),hl=k(", mikulas"),qe=_("span"),pl=k("name"),_l=k("@zelinka.dev"),ml=w(),ve=_("p"),Bt=k(dt),gl=w(),Le=_("a"),vt=_("i"),dl=k(" GitHub"),vl=k("."),kl=w(),kt=_("h4"),Gt=k(bt),bl=w(),Ne=_("ul"),ke=_("li"),Et=_("span"),El=w(),Kt=k(St),Sl=k(": Mikul\xE1\u0161 Zelinka"),wl=w(),$=_("li"),wt=_("span"),Pl=w(),qt=k(Pt),zl=k(`:
						`),Je=_("a"),jl=k("Andrey Konovka"),Al=k(`,
						`),Fe=_("a"),Il=k("Charles Translator"),Jt=w(),Ve=_("section"),Qe=_("div"),Xe=_("p"),Ft=k(zt),this.h()},l(T){e=m(T,"SECTION",{class:!0});var O=g(e);a=m(O,"DIV",{class:!0});var Ml=g(a);t=m(Ml,"DIV",{class:!0,style:!0});var Ye=g(t);o=m(Ye,"DIV",{class:!0});var be=g(o);h=m(be,"H2",{id:!0});var Hl=g(h);i=b(Hl,f),Hl.forEach(c),r=P(be),s=m(be,"P",{});var Cl=g(s);E=b(Cl,p),Cl.forEach(c),W=P(be),y=m(be,"P",{});var Rl=g(y);j=b(Rl,v),Rl.forEach(c),C=P(be),I=m(be,"P",{});var Ul=g(I);B=b(Ul,J),Ul.forEach(c),be.forEach(c),D=P(Ye),u=m(Ye,"DIV",{class:!0});var M=g(u);A=m(M,"H2",{id:!0});var Zl=g(A);V=b(Zl,d),Zl.forEach(c),we=P(M),F=m(M,"P",{});var jt=g(F);ue=b(jt,Y),Pe=b(jt,": Tereza Axmannov\xE1, tereza.axmann"),Q=m(jt,"SPAN",{style:!0});var Bl=g(Q);ze=b(Bl,"name"),Bl.forEach(c),je=b(jt,"@gmail.com"),jt.forEach(c),le=P(M),x=m(M,"P",{});var yl=g(x);ee=b(yl,ne),Ae=b(yl,": Viktor Vilhelm"),yl.forEach(c),Ie=P(M),X=m(M,"P",{});var Tl=g(X);fe=b(Tl,ae),oe=b(Tl,": Tereza Drnovcov\xE1"),Tl.forEach(c),ye=P(M),U=m(M,"P",{});var Wl=g(U);Te=b(Wl,L),Re=b(Wl,": Petra Sou\u010Dkov\xE1"),Wl.forEach(c),Ue=P(M),se=m(M,"P",{});var Ol=g(se);We=b(Ol,ce),Ze=b(Ol,": Eva Tr\u010Dkov\xE1"),Ol.forEach(c),Z=P(M),ie=m(M,"P",{});var Dl=g(ie);Oe=b(Dl,he),Be=b(Dl,": Linda Hrube\u0161ov\xE1, Minimax studio"),Dl.forEach(c),Ge=P(M),re=m(M,"P",{});var Ll=g(re);Vt=b(Ll,pe),Yt=b(Ll,": Martin Koukl"),Ll.forEach(c),$t=P(M),at=m(M,"H4",{});var Gl=g(at);Mt=b(Gl,ot),Gl.forEach(c),xt=P(M),st=m(M,"UL",{});var Kl=g(st);_e=m(Kl,"LI",{});var At=g(_e);it=m(At,"SPAN",{class:!0}),g(it).forEach(c),el=P(At),Ht=b(At,rt),tl=b(At,": Anastasia Litvincov\xE1"),At.forEach(c),Kl.forEach(c),ll=P(M),ut=m(M,"H4",{});var ql=g(ut);Ct=b(ql,ft),ql.forEach(c),nl=P(M),De=m(M,"UL",{});var Qt=g(De);me=m(Qt,"LI",{});var It=g(me);ct=m(It,"SPAN",{class:!0}),g(ct).forEach(c),al=P(It),Rt=b(It,ht),ol=b(It,": Tereza Axmannov\xE1"),It.forEach(c),sl=P(Qt),ge=m(Qt,"LI",{});var yt=g(ge);pt=m(yt,"SPAN",{class:!0}),g(pt).forEach(c),il=P(yt),Ut=b(yt,_t),rl=b(yt,": Anastasia Litvincov\xE1"),yt.forEach(c),Qt.forEach(c),M.forEach(c),ul=P(Ye),q=m(Ye,"DIV",{class:!0});var te=g(q);mt=m(te,"H2",{});var Jl=g(mt);Zt=b(Jl,gt),Jl.forEach(c),fl=P(te),de=m(te,"P",{});var Tt=g(de);Ke=m(Tt,"A",{href:!0});var Fl=g(Ke);cl=b(Fl,"Mikul\xE1\u0161 Zelinka"),Fl.forEach(c),hl=b(Tt,", mikulas"),qe=m(Tt,"SPAN",{style:!0});var Ql=g(qe);pl=b(Ql,"name"),Ql.forEach(c),_l=b(Tt,"@zelinka.dev"),Tt.forEach(c),ml=P(te),ve=m(te,"P",{});var Wt=g(ve);Bt=b(Wt,dt),gl=P(Wt),Le=m(Wt,"A",{href:!0});var Nl=g(Le);vt=m(Nl,"I",{class:!0}),g(vt).forEach(c),dl=b(Nl," GitHub"),Nl.forEach(c),vl=b(Wt,"."),Wt.forEach(c),kl=P(te),kt=m(te,"H4",{});var Xl=g(kt);Gt=b(Xl,bt),Xl.forEach(c),bl=P(te),Ne=m(te,"UL",{});var Xt=g(Ne);ke=m(Xt,"LI",{});var Ot=g(ke);Et=m(Ot,"SPAN",{class:!0}),g(Et).forEach(c),El=P(Ot),Kt=b(Ot,St),Sl=b(Ot,": Mikul\xE1\u0161 Zelinka"),Ot.forEach(c),wl=P(Xt),$=m(Xt,"LI",{});var Ee=g($);wt=m(Ee,"SPAN",{class:!0}),g(wt).forEach(c),Pl=P(Ee),qt=b(Ee,Pt),zl=b(Ee,`:
						`),Je=m(Ee,"A",{href:!0});var Yl=g(Je);jl=b(Yl,"Andrey Konovka"),Yl.forEach(c),Al=b(Ee,`,
						`),Fe=m(Ee,"A",{href:!0});var $l=g(Fe);Il=b($l,"Charles Translator"),$l.forEach(c),Ee.forEach(c),Xt.forEach(c),te.forEach(c),Ye.forEach(c),Ml.forEach(c),O.forEach(c),Jt=P(T),Ve=m(T,"SECTION",{class:!0});var xl=g(Ve);Qe=m(xl,"DIV",{class:!0});var en=g(Qe);Xe=m(en,"P",{class:!0});var tn=g(Xe);Ft=b(tn,zt),tn.forEach(c),en.forEach(c),xl.forEach(c),this.h()},h(){S(h,"id","o-projektu"),S(o,"class","column"),S(A,"id","tvurci"),z(Q,"display","none"),S(it,"class","fi fi-ua"),S(ct,"class","fi fi-cz"),S(pt,"class","fi fi-ua"),S(u,"class","column"),S(Ke,"href","https://github.com/MikulasZelinka"),z(qe,"display","none"),S(vt,"class","fa-brands fa-github"),S(Le,"href","https://github.com/MikulasZelinka/book-for-ukraine"),S(Et,"class","fi fi-gb"),S(wt,"class","fi fi-ua"),S(Je,"href","https://github.com/Legionivo"),S(Fe,"href","https://lindat.cz/translation"),S(q,"class","column"),S(t,"class","columns is-desktop"),z(t,"overflow","hidden"),S(a,"class","content"),S(e,"class","section is-medium pb-3"),S(Xe,"class","subtitle"),S(Qe,"class","hero-body"),S(Ve,"class","hero has-text-centered")},m(T,O){H(T,e,O),n(e,a),n(a,t),n(t,o),n(o,h),n(h,i),n(o,r),n(o,s),n(s,E),n(o,W),n(o,y),n(y,j),n(o,C),n(o,I),n(I,B),n(t,D),n(t,u),n(u,A),n(A,V),n(u,we),n(u,F),n(F,ue),n(F,Pe),n(F,Q),n(Q,ze),n(F,je),n(u,le),n(u,x),n(x,ee),n(x,Ae),n(u,Ie),n(u,X),n(X,fe),n(X,oe),n(u,ye),n(u,U),n(U,Te),n(U,Re),n(u,Ue),n(u,se),n(se,We),n(se,Ze),n(u,Z),n(u,ie),n(ie,Oe),n(ie,Be),n(u,Ge),n(u,re),n(re,Vt),n(re,Yt),n(u,$t),n(u,at),n(at,Mt),n(u,xt),n(u,st),n(st,_e),n(_e,it),n(_e,el),n(_e,Ht),n(_e,tl),n(u,ll),n(u,ut),n(ut,Ct),n(u,nl),n(u,De),n(De,me),n(me,ct),n(me,al),n(me,Rt),n(me,ol),n(De,sl),n(De,ge),n(ge,pt),n(ge,il),n(ge,Ut),n(ge,rl),n(t,ul),n(t,q),n(q,mt),n(mt,Zt),n(q,fl),n(q,de),n(de,Ke),n(Ke,cl),n(de,hl),n(de,qe),n(qe,pl),n(de,_l),n(q,ml),n(q,ve),n(ve,Bt),n(ve,gl),n(ve,Le),n(Le,vt),n(Le,dl),n(ve,vl),n(q,kl),n(q,kt),n(kt,Gt),n(q,bl),n(q,Ne),n(Ne,ke),n(ke,Et),n(ke,El),n(ke,Kt),n(ke,Sl),n(Ne,wl),n(Ne,$),n($,wt),n($,Pl),n($,qt),n($,zl),n($,Je),n(Je,jl),n($,Al),n($,Fe),n(Fe,Il),H(T,Jt,O),H(T,Ve,O),n(Ve,Qe),n(Qe,Xe),n(Xe,Ft)},p(T,[O]){O&1&&f!==(f=T[0]("about")+"")&&N(i,f),O&1&&p!==(p=T[0]("aboutSection.goal")+"")&&N(E,p),O&1&&v!==(v=T[0]("aboutSection.future")+"")&&N(j,v),O&1&&J!==(J=T[0]("aboutSection.support")+"")&&N(B,J),O&1&&d!==(d=T[0]("authors")+"")&&N(V,d),O&1&&Y!==(Y=T[0]("authorsSection.content")+"")&&N(ue,Y),O&1&&ne!==(ne=T[0]("authorsSection.supervision")+"")&&N(ee,ne),O&1&&ae!==(ae=T[0]("authorsSection.graphicDesign")+"")&&N(fe,ae),O&1&&L!==(L=T[0]("authorsSection.language")+"")&&N(Te,L),O&1&&ce!==(ce=T[0]("authorsSection.editing")+"")&&N(We,ce),O&1&&he!==(he=T[0]("authorsSection.typesetting")+"")&&N(Oe,he),O&1&&pe!==(pe=T[0]("authorsSection.graphicHelp")+"")&&N(Vt,pe),O&1&&ot!==(ot=T[0]("authorsSection.translation")+"")&&N(Mt,ot),O&1&&rt!==(rt=T[0]("languages.uk")+"")&&N(Ht,rt),O&1&&ft!==(ft=T[0]("authorsSection.voice")+"")&&N(Ct,ft),O&1&&ht!==(ht=T[0]("languages.cs")+"")&&N(Rt,ht),O&1&&_t!==(_t=T[0]("languages.uk")+"")&&N(Ut,_t),O&1&&gt!==(gt=T[0]("authorsSection.web")+"")&&N(Zt,gt),O&1&&dt!==(dt=T[0]("aboutSection.development")+"")&&N(Bt,dt),O&1&&bt!==(bt=T[0]("authorsSection.translation")+"")&&N(Gt,bt),O&1&&St!==(St=T[0]("languages.en")+"")&&N(Kt,St),O&1&&Pt!==(Pt=T[0]("languages.uk")+"")&&N(qt,Pt),O&1&&zt!==(zt=T[0]("authorsSection.acknowledgement")+"")&&N(Ft,zt)},i:K,o:K,d(T){T&&c(e),T&&c(Jt),T&&c(Ve)}}}function qn(l,e,a){let t;return xe(l,Pn,o=>a(0,t=o)),[t]}class Jn extends Me{constructor(e){super(),He(this,e,qn,Kn,Ce,{})}}function bn(l,e,a){const t=l.slice();return t[2]=e[a],t[4]=a,t}function Fn(l){let e,a=l[5].message+"",t;return{c(){e=_("p"),t=k(a),this.h()},l(o){e=m(o,"P",{style:!0});var h=g(e);t=b(h,a),h.forEach(c),this.h()},h(){z(e,"color","red")},m(o,h){H(o,e,h),n(e,t)},p:K,i:K,o:K,d(o){o&&c(e)}}}function Qn(l){let e,a,t=l[1],o=[];for(let f=0;f<t.length;f+=1)o[f]=En(bn(l,t,f));const h=f=>G(o[f],1,1,()=>{o[f]=null});return{c(){for(let f=0;f<o.length;f+=1)o[f].c();e=Se()},l(f){for(let i=0;i<o.length;i+=1)o[i].l(f);e=Se()},m(f,i){for(let r=0;r<o.length;r+=1)o[r].m(f,i);H(f,e,i),a=!0},p(f,i){if(i&2){t=f[1];let r;for(r=0;r<t.length;r+=1){const s=bn(f,t,r);o[r]?(o[r].p(s,i),R(o[r],1)):(o[r]=En(s),o[r].c(),R(o[r],1),o[r].m(e.parentNode,e))}for(Dt(),r=t.length;r<o.length;r+=1)h(r);Lt()}},i(f){if(!a){for(let i=0;i<t.length;i+=1)R(o[i]);a=!0}},o(f){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)G(o[i]);a=!1},d(f){Nt(o,f),f&&c(e)}}}function En(l){let e,a;return e=new Gn({props:{page:l[2]}}),{c(){et(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,o){lt(e,t,o),a=!0},p:K,i(t){a||(R(e.$$.fragment,t),a=!0)},o(t){G(e.$$.fragment,t),a=!1},d(t){nt(e,t)}}}function Xn(l){let e,a=l[0]("loading")+"",t;return{c(){e=_("p"),t=k(a)},l(o){e=m(o,"P",{});var h=g(e);t=b(h,a),h.forEach(c)},m(o,h){H(o,e,h),n(e,t)},p(o,h){h&1&&a!==(a=o[0]("loading")+"")&&N(t,a)},i:K,o:K,d(o){o&&c(e)}}}function Yn(l){let e,a,t,o,h,f,i;e=new On({});let r={ctx:l,current:null,token:null,hasCatch:!0,pending:Xn,then:Qn,catch:Fn,value:1,error:5,blocks:[,,,]};return An(l[1],r),f=new Jn({}),{c(){et(e.$$.fragment),a=w(),t=_("main"),o=_("div"),r.block.c(),h=w(),et(f.$$.fragment),this.h()},l(s){tt(e.$$.fragment,s),a=P(s),t=m(s,"MAIN",{class:!0});var p=g(t);o=m(p,"DIV",{class:!0});var E=g(o);r.block.l(E),E.forEach(c),p.forEach(c),h=P(s),tt(f.$$.fragment,s),this.h()},h(){S(o,"class","columns is-gapless is-multiline"),S(t,"class","svelte-jirsbb")},m(s,p){lt(e,s,p),H(s,a,p),H(s,t,p),n(t,o),r.block.m(o,r.anchor=null),r.mount=()=>o,r.anchor=null,H(s,h,p),lt(f,s,p),i=!0},p(s,[p]){l=s,In(r,l,p)},i(s){i||(R(e.$$.fragment,s),R(r.block),R(f.$$.fragment,s),i=!0)},o(s){G(e.$$.fragment,s);for(let p=0;p<3;p+=1){const E=r.blocks[p];G(E)}G(f.$$.fragment,s),i=!1},d(s){nt(e,s),s&&c(a),s&&c(t),r.block.d(),r.token=null,r=null,s&&c(h),nt(f,s)}}}async function $n(){return await fetch("pages.json").then(l=>l.json())}function xn(l,e,a){let t;xe(l,Pn,h=>a(0,t=h));const o=$n();return[t,o]}class na extends Me{constructor(e){super(),He(this,e,xn,Yn,Ce,{})}}export{na as default};
