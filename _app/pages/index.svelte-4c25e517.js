import{R as Ne,T as Se,C as ne,S as W,i as X,s as Y,U as Ae,V as Ce,e as v,v as V,j as F,t as B,c as k,a as P,w as j,d as p,l as M,g as D,b as m,f as O,Q as h,x as q,W as Z,h as G,p as C,n as R,A as J,k as ue,K as U,X as se,O as re,N as me,m as x,o as ee,Y as Le,u as he,Z as Be,_ as pe,$ as De}from"../chunks/vendor-9cf13998.js";import{c as ae,l as _e,L as Re,g as Fe,a as Me,b as Oe}from"../chunks/Loader-b4c421be.js";import"../chunks/singletons-a42a5e91.js";const oe=Ne(10),de=ne([]),te=ne(0),K=ne([]),He=Se([K,oe,te],([a,e,l])=>a.slice(l*e,l*e+e));function Ue(a){let e,l,t,n,u,r,s,o,c,i,_,f,b,d,S,w;return n=new Ae({props:{path:Ce,color:"#929395"}}),{c(){e=v("article"),l=v("div"),t=v("label"),V(n.$$.fragment),u=F(),r=v("input"),s=F(),o=v("span"),c=B(a[0]),i=B(" results"),_=F(),f=v("p"),b=B(`This list represents the order of Pok\xE9mon in the National Pok\xE9dex. Name or
    number. Use the advanced search to find Pok\xE9mon by type, weakness, talent,
    and more !`),this.h()},l(y){e=k(y,"ARTICLE",{});var E=P(e);l=k(E,"DIV",{class:!0});var L=P(l);t=k(L,"LABEL",{for:!0});var g=P(t);j(n.$$.fragment,g),g.forEach(p),u=M(L),r=k(L,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),s=M(L),o=k(L,"SPAN",{class:!0});var I=P(o);c=D(I,a[0]),i=D(I," results"),I.forEach(p),L.forEach(p),_=M(E),f=k(E,"P",{class:!0});var $=P(f);b=D($,`This list represents the order of Pok\xE9mon in the National Pok\xE9dex. Name or
    number. Use the advanced search to find Pok\xE9mon by type, weakness, talent,
    and more !`),$.forEach(p),E.forEach(p),this.h()},h(){m(t,"for","search"),m(r,"id","search"),m(r,"type","text"),m(r,"placeholder","Filter pokemon by name"),m(r,"class","svelte-mi22sa"),m(o,"class","svelte-mi22sa"),m(l,"class","centered-y-flex svelte-mi22sa"),m(f,"class","svelte-mi22sa")},m(y,E){O(y,e,E),h(e,l),h(l,t),q(n,t,null),h(l,u),h(l,r),h(l,s),h(l,o),h(o,c),h(o,i),h(e,_),h(e,f),h(f,b),d=!0,S||(w=Z(r,"input",a[1]),S=!0)},p(y,[E]){(!d||E&1)&&G(c,y[0])},i(y){d||(C(n.$$.fragment,y),d=!0)},o(y){R(n.$$.fragment,y),d=!1},d(y){y&&p(e),J(n),S=!1,w()}}}function Ve(a,e,l){let t=[],n=200;de.subscribe(r=>{t=r});function u(r){const{value:s}=r.target;K.update(()=>{const o=t.filter(c=>c.name.includes(s));return l(0,n=o.length),o})}return[n,u]}class je extends W{constructor(e){super();X(this,e,Ve,Ue,Y,{})}}function ge(a,e,l){const t=a.slice();return t[1]=e[l],t}function ve(a){let e;return{c(){e=v("aside"),this.h()},l(l){e=k(l,"ASIDE",{class:!0}),P(e).forEach(p),this.h()},h(){m(e,"class","svelte-dosiqy")},m(l,t){O(l,e,t)},d(l){l&&p(e)}}}function qe(a){let e,l=new Array(a[0]).fill(null),t=[];for(let n=0;n<l.length;n+=1)t[n]=ve(ge(a,l,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=ue()},l(n){for(let u=0;u<t.length;u+=1)t[u].l(n);e=ue()},m(n,u){for(let r=0;r<t.length;r+=1)t[r].m(n,u);O(n,e,u)},p(n,[u]){if(u&1){const r=l.length;l=new Array(n[0]).fill(null);let s;for(s=r;s<l.length;s+=1)ge(n,l,s),t[s]||(t[s]=ve(),t[s].c(),t[s].m(e.parentNode,e));for(s=l.length;s<r;s+=1)t[s].d(1);t.length=l.length}},i:U,o:U,d(n){se(t,n),n&&p(e)}}}function Je(a,e,l){let t;return re(a,oe,n=>l(0,t=n)),[t]}class We extends W{constructor(e){super();X(this,e,Je,qe,Y,{})}}function ke(a){let e,l;return e=new Re({}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function Xe(a){let e,l,t,n,u,r,s,o,c=ae(a[0])+"",i,_,f,b=_e(a[2].map(a[8]))+"",d,S,w,y,E,L=be(a[3])+"",g,I,$,H,z,T=a[5]&&ke();return{c(){e=v("article"),l=v("img"),u=F(),T&&T.c(),r=F(),s=v("div"),o=v("h2"),i=B(c),_=F(),f=v("h3"),d=B(b),S=F(),w=v("i"),y=v("span"),E=B("#"),g=B(L),this.h()},l(N){e=k(N,"ARTICLE",{class:!0,style:!0});var A=P(e);l=k(A,"IMG",{style:!0,class:!0,src:!0,alt:!0}),u=M(A),T&&T.l(A),r=M(A),s=k(A,"DIV",{class:!0});var Q=P(s);o=k(Q,"H2",{class:!0});var ce=P(o);i=D(ce,c),ce.forEach(p),_=M(Q),f=k(Q,"H3",{class:!0});var fe=P(f);d=D(fe,b),fe.forEach(p),Q.forEach(p),S=M(A),w=k(A,"I",{class:!0});var le=P(w);y=k(le,"SPAN",{class:!0});var ie=P(y);E=D(ie,"#"),ie.forEach(p),g=D(le,L),le.forEach(p),A.forEach(p),this.h()},h(){m(l,"style",t=$e(a[5],a[4])),m(l,"class","pokemon-image svelte-byg31h"),me(l.src,n=a[1])||m(l,"src",n),m(l,"alt",a[0]),m(o,"class","svelte-byg31h"),m(f,"class","types"),m(s,"class","infos svelte-byg31h"),m(y,"class","svelte-byg31h"),m(w,"class","list-index svelte-byg31h"),m(e,"class","centered-y-flex scale-on-hover svelte-byg31h"),m(e,"style",I=ye(a[2]))},m(N,A){O(N,e,A),h(e,l),h(e,u),T&&T.m(e,null),h(e,r),h(e,s),h(s,o),h(o,i),h(s,_),h(s,f),h(f,d),h(e,S),h(e,w),h(w,y),h(y,E),h(w,g),$=!0,H||(z=[Z(l,"load",a[7]),Z(e,"click",a[6])],H=!0)},p(N,[A]){(!$||A&48&&t!==(t=$e(N[5],N[4])))&&m(l,"style",t),(!$||A&2&&!me(l.src,n=N[1]))&&m(l,"src",n),(!$||A&1)&&m(l,"alt",N[0]),N[5]?T?A&32&&C(T,1):(T=ke(),T.c(),C(T,1),T.m(e,r)):T&&(x(),R(T,1,1,()=>{T=null}),ee()),(!$||A&1)&&c!==(c=ae(N[0])+"")&&G(i,c),(!$||A&4)&&b!==(b=_e(N[2].map(N[8]))+"")&&G(d,b),(!$||A&8)&&L!==(L=be(N[3])+"")&&G(g,L),(!$||A&4&&I!==(I=ye(N[2])))&&m(e,"style",I)},i(N){$||(C(T),$=!0)},o(N){R(T),$=!1},d(N){N&&p(e),T&&T.d(),H=!1,Le(z)}}}function be(a){return a<=9?`000${a}`:a>=10&&a<=99?`00${a}`:a>=100&&a<=999?`0${a}`:a}function ye(a){const e=a.map(n=>n.type.name).shift(),l=(n,u)=>`background-color: ${n}; color: ${u}`;return{grass:l("#b3e1b2","#f1fff6"),bug:l("#b3e1b2","#f1fff6"),fire:l("#fcd2b1","#fff4f0"),electric:l("#f8df93","#fffef4"),water:l("#b5e8ef","#f4feff"),psychic:l("#b4a2ff","#f7f4ff"),poison:l("#b4a2ff","#f7f4ff"),ground:l("#dcab88","#fdf5ee")}[e]||l("#dadada","#f6f6f6")}function $e(a,e){return`opacity: ${a?0:1}; position: ${a?"absolute":"relative"}; transform: scaleX(${e})`}function Ye(a,e,l){let{pokemonName:t=null}=e,{pokemonImage:n=null}=e,{pokemonTypes:u=null}=e,{pokemonPokemonId:r=null}=e,s=null,o=1,c=!0;he(()=>{i()}),Be(()=>{clearInterval(s)}),te.subscribe(()=>{l(5,c=!0)}),K.subscribe(()=>{l(5,c=!0)});function i(){let d=0;s=setInterval(()=>{d%2==0?l(4,o=1):l(4,o=-1),d++},1e3)}function _(){Fe(`/pokemon/${t}`)}function f(){l(5,c=!1)}const b=d=>ae(d.type.name);return a.$$set=d=>{"pokemonName"in d&&l(0,t=d.pokemonName),"pokemonImage"in d&&l(1,n=d.pokemonImage),"pokemonTypes"in d&&l(2,u=d.pokemonTypes),"pokemonPokemonId"in d&&l(3,r=d.pokemonPokemonId)},[t,n,u,r,o,c,_,f,b]}class ze extends W{constructor(e){super();X(this,e,Ye,Xe,Y,{pokemonName:0,pokemonImage:1,pokemonTypes:2,pokemonPokemonId:3})}}function Ge(a){let e,l,t=a[0]+1+"",n,u,r,s;return{c(){e=v("button"),l=v("span"),n=B(t),this.h()},l(o){e=k(o,"BUTTON",{class:!0});var c=P(e);l=k(c,"SPAN",{});var i=P(l);n=D(i,t),i.forEach(p),c.forEach(p),this.h()},h(){m(e,"class",u=""+(pe(a[0]===a[1]&&"active")+" svelte-1eb03fw"))},m(o,c){O(o,e,c),h(e,l),h(l,n),r||(s=Z(e,"click",a[2]),r=!0)},p(o,[c]){c&1&&t!==(t=o[0]+1+"")&&G(n,t),c&3&&u!==(u=""+(pe(o[0]===o[1]&&"active")+" svelte-1eb03fw"))&&m(e,"class",u)},i:U,o:U,d(o){o&&p(e),r=!1,s()}}}function Ke(a,e,l){let{page:t}=e,n=0;te.subscribe(r=>{l(1,n=r)});function u(){te.set(t)}return a.$$set=r=>{"page"in r&&l(0,t=r.page)},[t,n,u]}class Qe extends W{constructor(e){super();X(this,e,Ke,Ge,Y,{page:0})}}function Pe(a,e,l){const t=a.slice();return t[3]=e[l],t[5]=l,t}function Ee(a){let e,l;return e=new Qe({props:{page:a[5]}}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},p:U,i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function Ze(a){let e,l,t=a[0],n=[];for(let r=0;r<t.length;r+=1)n[r]=Ee(Pe(a,t,r));const u=r=>R(n[r],1,1,()=>{n[r]=null});return{c(){e=v("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=k(r,"DIV",{class:!0});var s=P(e);for(let o=0;o<n.length;o+=1)n[o].l(s);s.forEach(p),this.h()},h(){m(e,"class","svelte-1y8sxyi")},m(r,s){O(r,e,s);for(let o=0;o<n.length;o+=1)n[o].m(e,null);l=!0},p(r,[s]){if(s&1){t=r[0];let o;for(o=0;o<t.length;o+=1){const c=Pe(r,t,o);n[o]?(n[o].p(c,s),C(n[o],1)):(n[o]=Ee(c),n[o].c(),C(n[o],1),n[o].m(e,null))}for(x(),o=t.length;o<n.length;o+=1)u(o);ee()}},i(r){if(!l){for(let s=0;s<t.length;s+=1)C(n[s]);l=!0}},o(r){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)R(n[s]);l=!1},d(r){r&&p(e),se(n,r)}}}function xe(a,e,l){let t;re(a,oe,r=>l(1,t=r));let n=[];K.subscribe(r=>{u(r.length)});function u(r){const s=Math.ceil(r/t);l(0,n=new Array(s).fill(null))}return[n]}class et extends W{constructor(e){super();X(this,e,xe,Ze,Y,{})}}function tt(a){let e,l,t,n,u,r,s,o,c,i,_,f,b,d,S;return{c(){e=v("footer"),l=v("p"),t=B("Pok\xE9mon data from "),n=v("a"),u=B("Pok\xE9Api"),r=F(),s=v("p"),o=B("created with "),c=v("a"),i=B("Svelte Framework"),_=F(),f=v("p"),b=B("crafterd with \u2764 by Jean-Baptiste Thery | freelance frontend developper "),d=v("a"),S=B("flameapp.fr"),this.h()},l(w){e=k(w,"FOOTER",{class:!0});var y=P(e);l=k(y,"P",{class:!0});var E=P(l);t=D(E,"Pok\xE9mon data from "),n=k(E,"A",{href:!0,target:!0,rel:!0,class:!0});var L=P(n);u=D(L,"Pok\xE9Api"),L.forEach(p),E.forEach(p),r=M(y),s=k(y,"P",{class:!0});var g=P(s);o=D(g,"created with "),c=k(g,"A",{href:!0,target:!0,rel:!0,class:!0});var I=P(c);i=D(I,"Svelte Framework"),I.forEach(p),g.forEach(p),_=M(y),f=k(y,"P",{class:!0});var $=P(f);b=D($,"crafterd with \u2764 by Jean-Baptiste Thery | freelance frontend developper "),d=k($,"A",{href:!0,target:!0,rel:!0,class:!0});var H=P(d);S=D(H,"flameapp.fr"),H.forEach(p),$.forEach(p),y.forEach(p),this.h()},h(){m(n,"href","https://pokeapi.co/"),m(n,"target","_blank"),m(n,"rel","noopener"),m(n,"class","svelte-h57e6r"),m(l,"class","svelte-h57e6r"),m(c,"href","https://kit.svelte.dev/"),m(c,"target","_blank"),m(c,"rel","noopener"),m(c,"class","svelte-h57e6r"),m(s,"class","svelte-h57e6r"),m(d,"href","https://flameapp.fr/"),m(d,"target","_blank"),m(d,"rel","noopener"),m(d,"class","svelte-h57e6r"),m(f,"class","svelte-h57e6r"),m(e,"class","svelte-h57e6r")},m(w,y){O(w,e,y),h(e,l),h(l,t),h(l,n),h(n,u),h(e,r),h(e,s),h(s,o),h(s,c),h(c,i),h(e,_),h(e,f),h(f,b),h(f,d),h(d,S)},p:U,i:U,o:U,d(w){w&&p(e)}}}class lt extends W{constructor(e){super();X(this,e,null,tt,Y,{})}}function Ie(a,e,l){const t=a.slice();return t[3]=e[l],t}function nt(a){let e,l;return e=new We({}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},p:U,i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function st(a){let e,l,t,n,u,r=a[1],s=[];for(let i=0;i<r.length;i+=1)s[i]=Te(Ie(a,r,i));const o=i=>R(s[i],1,1,()=>{s[i]=null});let c=a[1].length===0&&we();return n=new et({}),{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=F(),c&&c.c(),l=F(),t=v("nav"),V(n.$$.fragment)},l(i){for(let f=0;f<s.length;f+=1)s[f].l(i);e=M(i),c&&c.l(i),l=M(i),t=k(i,"NAV",{});var _=P(t);j(n.$$.fragment,_),_.forEach(p)},m(i,_){for(let f=0;f<s.length;f+=1)s[f].m(i,_);O(i,e,_),c&&c.m(i,_),O(i,l,_),O(i,t,_),q(n,t,null),u=!0},p(i,_){if(_&2){r=i[1];let f;for(f=0;f<r.length;f+=1){const b=Ie(i,r,f);s[f]?(s[f].p(b,_),C(s[f],1)):(s[f]=Te(b),s[f].c(),C(s[f],1),s[f].m(e.parentNode,e))}for(x(),f=r.length;f<s.length;f+=1)o(f);ee()}i[1].length===0?c||(c=we(),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null)},i(i){if(!u){for(let _=0;_<r.length;_+=1)C(s[_]);C(n.$$.fragment,i),u=!0}},o(i){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)R(s[_]);R(n.$$.fragment,i),u=!1},d(i){se(s,i),i&&p(e),c&&c.d(i),i&&p(l),i&&p(t),J(n)}}}function Te(a){let e,l;return e=new ze({props:{pokemonName:a[3].name,pokemonImage:a[3].sprites.front_default,pokemonTypes:a[3].types,pokemonPokemonId:a[3].order}}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},p(t,n){const u={};n&2&&(u.pokemonName=t[3].name),n&2&&(u.pokemonImage=t[3].sprites.front_default),n&2&&(u.pokemonTypes=t[3].types),n&2&&(u.pokemonPokemonId=t[3].order),e.$set(u)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function we(a){let e,l;return{c(){e=v("i"),l=B("No pokemon found \u{1F622}"),this.h()},l(t){e=k(t,"I",{class:!0});var n=P(e);l=D(n,"No pokemon found \u{1F622}"),n.forEach(p),this.h()},h(){m(e,"class","no-results svelte-sf9o8s")},m(t,n){O(t,e,n),h(e,l)},d(t){t&&p(e)}}}function rt(a){let e,l,t,n,u,r,s,o,c,i,_,f,b,d,S,w;c=new je({});const y=[st,nt],E=[];function L(g,I){return g[0]?1:0}return f=L(a),b=E[f]=y[f](a),S=new lt({}),{c(){e=v("meta"),l=F(),t=v("article"),n=v("header"),u=v("h1"),r=B("Svelte Ts Pok\xE9dex"),s=F(),o=v("section"),V(c.$$.fragment),i=F(),_=v("section"),b.c(),d=F(),V(S.$$.fragment),this.h()},l(g){const I=De('[data-svelte="svelte-h2bs1i"]',document.head);e=k(I,"META",{name:!0,content:!0}),I.forEach(p),l=M(g),t=k(g,"ARTICLE",{class:!0});var $=P(t);n=k($,"HEADER",{});var H=P(n);u=k(H,"H1",{class:!0});var z=P(u);r=D(z,"Svelte Ts Pok\xE9dex"),z.forEach(p),H.forEach(p),s=M($),o=k($,"SECTION",{class:!0});var T=P(o);j(c.$$.fragment,T),T.forEach(p),i=M($),_=k($,"SECTION",{class:!0});var N=P(_);b.l(N),N.forEach(p),$.forEach(p),d=M(g),j(S.$$.fragment,g),this.h()},h(){document.title="JB-THERY | Svelte Typescript Pokedex",m(e,"name","description"),m(e,"content","Simple svelte typescript pokedex for testing the Svelete framework"),m(u,"class","svelte-sf9o8s"),m(o,"class","app-grid"),m(_,"class","app-grid"),m(t,"class","app-grid")},m(g,I){h(document.head,e),O(g,l,I),O(g,t,I),h(t,n),h(n,u),h(u,r),h(t,s),h(t,o),q(c,o,null),h(t,i),h(t,_),E[f].m(_,null),O(g,d,I),q(S,g,I),w=!0},p(g,[I]){let $=f;f=L(g),f===$?E[f].p(g,I):(x(),R(E[$],1,1,()=>{E[$]=null}),ee(),b=E[f],b?b.p(g,I):(b=E[f]=y[f](g),b.c()),C(b,1),b.m(_,null))},i(g){w||(C(c.$$.fragment,g),C(b),C(S.$$.fragment,g),w=!0)},o(g){R(c.$$.fragment,g),R(b),R(S.$$.fragment,g),w=!1},d(g){p(e),g&&p(l),g&&p(t),J(c),E[f].d(),g&&p(d),J(S,g)}}}function at(a,e,l){let t;re(a,He,r=>l(1,t=r));let n=!0;he(()=>{u()});async function u(){try{l(0,n=!0);const{results:r}=await Me(),s=r.map(c=>Oe(c.name)),o=await Promise.all(s);de.set(o),K.set(o)}catch(r){console.error(r)}finally{l(0,n=!1)}}return[n,t]}class it extends W{constructor(e){super();X(this,e,at,rt,Y,{})}}export{it as default};
