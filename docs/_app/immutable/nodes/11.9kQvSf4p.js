import{H as I}from"../chunks/control.CYgJF_JY.js";import{k as L,l as N,m as w,p as P,s as z,n as f,d as E}from"../chunks/scheduler.DwcAqyfO.js";import{z as A,n as G,A as R,m as B,S as D,i as F,y as C,g as p,d as _,e as b,t as J,s as T,c as v,a as j,b as K,f as x,k as q,l as g,h as Q,j as U,u as V}from"../chunks/index.TGV8ojrZ.js";import{e as y}from"../chunks/each.D6YF6ztN.js";function H(s,e){const l=e.token={};function t(n,r,d,h){if(e.token!==l)return;e.resolved=h;let m=e.ctx;d!==void 0&&(m=m.slice(),m[d]=h);const u=n&&(e.current=n)(m);let a=!1;e.block&&(e.blocks?e.blocks.forEach((c,i)=>{i!==r&&c&&(A(),G(c,1,1,()=>{e.blocks[i]===c&&(e.blocks[i]=null)}),R())}):e.block.d(1),u.c(),B(u,1),u.m(e.mount(),e.anchor),a=!0),e.block=u,e.blocks&&(e.blocks[r]=u),a&&P()}if(L(s)){const n=N();if(s.then(r=>{w(n),t(e.then,1,e.value,r),w(null)},r=>{if(w(n),t(e.catch,2,e.error,r),w(null),!e.hasCatch)throw r}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,s),!0;e.resolved=s}}function W(s,e,l){const t=e.slice(),{resolved:n}=s;s.current===s.then&&(t[s.value]=n),s.current===s.catch&&(t[s.error]=n),s.block.p(t,l)}function X(s,e){throw new I(s,e)}new TextEncoder;const Y=!1,Z=!1;async function $({params:s,fetch:e}){console.log(s.pokemon);const l=await e("https://pokeapi.co/api/v2/pokemon/"+s.pokemon,{method:"GET"});if(l.status!=200)throw X(l.status,{message:l.statusText});let t=await l.json();return console.log(t),{params:s,response:t}}const ie=Object.freeze(Object.defineProperty({__proto__:null,load:$,prerender:Z,ssr:Y},Symbol.toStringTag,{value:"Module"}));function O(s,e,l){const t=s.slice();return t[2]=e[l],t}function ee(s){return{c:f,l:f,m:f,p:f,d:f}}function te(s){let e,l=s[1].response.name+"",t,n,r,d,h,m="",u=y(Object.entries(s[1].response.sprites)),a=[];for(let c=0;c<u.length;c+=1)a[c]=M(O(s,u,c));return{c(){e=b("h1"),t=J(l),n=T(),r=b("article");for(let c=0;c<a.length;c+=1)a[c].c();d=T(),h=b("section"),h.innerHTML=m,this.h()},l(c){e=v(c,"H1",{class:!0});var i=j(e);t=K(i,l),i.forEach(_),n=x(c),r=v(c,"ARTICLE",{class:!0});var o=j(r);for(let k=0;k<a.length;k+=1)a[k].l(o);o.forEach(_),d=x(c),h=v(c,"SECTION",{"data-svelte-h":!0}),q(h)!=="svelte-ctfnqo"&&(h.innerHTML=m),this.h()},h(){g(e,"class","svelte-1iwvw9s"),g(r,"class","svelte-1iwvw9s")},m(c,i){p(c,e,i),Q(e,t),p(c,n,i),p(c,r,i);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(r,null);p(c,d,i),p(c,h,i)},p(c,i){if(i&1&&l!==(l=c[1].response.name+"")&&U(t,l),i&1){u=y(Object.entries(c[1].response.sprites));let o;for(o=0;o<u.length;o+=1){const k=O(c,u,o);a[o]?a[o].p(k,i):(a[o]=M(k),a[o].c(),a[o].m(r,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=u.length}},d(c){c&&(_(e),_(n),_(r),_(d),_(h)),V(a,c)}}}function S(s){let e,l;return{c(){e=b("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0}),this.h()},h(){E(e.src,l=s[2][1])||g(e,"src",l),g(e,"alt","")},m(t,n){p(t,e,n)},p(t,n){n&1&&!E(e.src,l=t[2][1])&&g(e,"src",l)},d(t){t&&_(e)}}}function M(s){let e,l=typeof s[2][1]=="string"&&S(s);return{c(){l&&l.c(),e=C()},l(t){l&&l.l(t),e=C()},m(t,n){l&&l.m(t,n),p(t,e,n)},p(t,n){typeof t[2][1]=="string"?l?l.p(t,n):(l=S(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&_(e),l&&l.d(t)}}}function le(s){let e,l=".. waiting";return{c(){e=b("p"),e.textContent=l},l(t){e=v(t,"P",{"data-svelte-h":!0}),q(e)!=="svelte-ju3n2x"&&(e.textContent=l)},m(t,n){p(t,e,n)},p:f,d(t){t&&_(e)}}}function se(s){let e,l,t={ctx:s,current:null,token:null,hasCatch:!1,pending:le,then:te,catch:ee,value:1};return H(l=s[0],t),{c(){e=C(),t.block.c()},l(n){e=C(),t.block.l(n)},m(n,r){p(n,e,r),t.block.m(n,t.anchor=r),t.mount=()=>e.parentNode,t.anchor=e},p(n,[r]){s=n,t.ctx=s,r&1&&l!==(l=s[0])&&H(l,t)||W(t,s,r)},i:f,o:f,d(n){n&&_(e),t.block.d(n),t.token=null,t=null}}}function ne(s,e,l){let{data:t}=e;return s.$$set=n=>{"data"in n&&l(0,t=n.data)},[t]}class ue extends D{constructor(e){super(),F(this,e,ne,se,z,{data:0})}}export{ue as component,ie as universal};
