function y(){}const F=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function P(){return Object.create(null)}function E(t){t.forEach(v)}function q(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function U(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function B(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t){let n;return m(t,e=>n=e)(),n}function D(t,n,e){t.$$.on_destroy.push(m(n,e))}function G(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],d=Math.max(n.dirty.length,o.length);for(let s=0;s<d;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,l){if(o){const d=x(n,e,r,l);t.p(d,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){return t&&q(t.destroy)?t.destroy:y}let f;function _(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){k().$$.on_mount.push(t)}function N(t){k().$$.after_update.push(t)}const a=[],g=[];let u=[];const b=[],w=Promise.resolve();let p=!1;function O(){p||(p=!0,w.then(M))}function Q(){return O(),w}function z(t){u.push(t)}const h=new Set;let c=0;function M(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,_(n),A(n.$$)}}catch(n){throw a.length=0,c=0,n}for(_(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,h.clear(),_(t)}function A(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function R(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{K as A,U as a,z as b,D as c,F as d,N as e,g as f,P as g,M as h,q as i,B as j,R as k,f as l,_ as m,y as n,L as o,v as p,a as q,E as r,S as s,Q as t,O as u,C as v,G as w,I as x,J as y,H as z};
