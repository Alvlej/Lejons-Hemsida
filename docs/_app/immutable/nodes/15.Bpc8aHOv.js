import{s as u,n}from"../chunks/scheduler.DwcAqyfO.js";import{S as h,i as f,e as d,s as _,c as v,k as p,f as M,g as i,d as r}from"../chunks/index.TGV8ojrZ.js";function y(m){let e,c="<title>Spin the wheel</title>",s,l,o=`<div class="container svelte-1a2llrd"><div class="spinBtn svelte-1a2llrd">Spin</div> <div class="wheel svelte-1a2llrd"><div class="number svelte-1a2llrd" style="--i:29;"><span class="svelte-1a2llrd">Login</span></div></div></div> <script>let wheel = document.querySelector(".wheel");
        let spinBtn = document.querySelector(".spinBtn");
        let value = Math.ceil(Math.random()* 3600);

        spinBtn.onclick = function(){
            wheel.style.transform= "rotate(" + value + "deg)"
            value += Math.ceil(Math.random()* 3600);

         
    }<\/script>`;return{c(){e=d("head"),e.innerHTML=c,s=_(),l=d("body"),l.innerHTML=o},l(t){e=v(t,"HEAD",{"data-svelte-h":!0}),p(e)!=="svelte-q90wcp"&&(e.innerHTML=c),s=M(t),l=v(t,"BODY",{"data-svelte-h":!0}),p(l)!=="svelte-zv3lhu"&&(l.innerHTML=o)},m(t,a){i(t,e,a),i(t,s,a),i(t,l,a)},p:n,i:n,o:n,d(t){t&&(r(e),r(s),r(l))}}}class x extends h{constructor(e){super(),f(this,e,null,y,u,{})}}export{x as component};
