import{e as z,s as C,f as v,g as k,h as B,i as P,c as j,p as E,j as _,r as p,k as S,l as f,u as O,b as T,w as M,o as N,a as g}from"./P1BrqauZ.js";const I=Symbol.for("nuxt:client-only"),L=z({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const d=C(!1);v(()=>{d.value=!0});const s=k();return s&&(s._nuxtClientOnly=!0),E(I,!0),()=>{if(d.value){const r=e.default?.();return r&&r.length===1?[B(r[0],n)]:r}const i=e.fallback||e.placeholder;if(i)return P(i);const o=t.fallback||t.placeholder||"",a=t.fallbackTag||t.placeholderTag||"span";return j(a,n,o)}}}),w=async()=>({f:{name:t=>`${t.name}${t.id}`}}),$=async()=>({set:async t=>{console.log("--theme");try{if(!t.el_id)throw new Error("[el_id] is required");const e=t.name,n=document.getElementById(t.el_id);if(!n)throw new Error("[el_id] is invalid");(d=>{const s=i=>{(o=>{const a=o.getAttribute("data-ce");if(!a)return;const r=JSON.parse(a).filter(l=>l?.k.startsWith("t-"));if(r.length!=0)for(const l of r){const h=l.k,y=l.v.split(" ");if(h==`t-${e}-class`)for(const u of y)o.classList.add(u);else for(const u of y)o.classList.remove(u)}})(i)};for(const i of d.getElementsByTagName("*"))s(i);s(d)})(n)}catch(e){const n=`err: [theme] ${e}`;throw console.log(n),n}}});function A(t,e=1e3){let n={cnt:0};return new Promise(d=>{const s=()=>{console.log(`[setInterval] is running.. [count=${n.cnt}]`);try{t()&&(clearInterval(i),d())}catch{console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${e}]`)}n.cnt+=1},i=setInterval(()=>{s()},e);s()})}console.log("content_engine_lib");let c={lib:{inbuilt_lib:[],l:{},set:async t=>{const e=t?.lib||[];for(const[n,d]of e.entries()){const s=d,i=`${s.name}:${t.run_from}`,o=`${t.run_from}_src`;let a=s[o];const r=`${t.run_from}_src`;let l=t?.lazy_lib?.[r]||null;if(l&&(l=l.replace("{*}",`${s.name}`)),console.log(`_lazy_src: ${l}`),console.log(`_src: ${a}`),c.lib.l.hasOwnProperty(`${i}`)==!1){if(/^[a-zA-Z0-9]/.test(a)&&a.includes("/")==!1&&c.lib.inbuilt_lib.indexOf(`${s.name}`)===-1)if(l)a=l;else throw`[lib-name=${s.name},lib-src=${a}] not allowed or available in in-build mode. Need to use lazy-lib config.`;if(a.startsWith("./")||a.startsWith("../")){const h=await _(()=>import(`${a}`),[],import.meta.url);c.lib.l[`${i}`]={lib:h,src:a}}if(a.startsWith("http://")||a.startsWith("https://")){const h=await _(()=>import(`${a}`),[],import.meta.url);c.lib.l[`${i}`]={lib:h,src:a}}}}console.log(await c.lib.get_all({}))},get:async t=>{let e=null;const n=`${t.name}:${t.run_from}`;return c.lib.l.hasOwnProperty(`${n}`)==!1&&await c.lib.set({lib:[{renderer_src:t.name,hydrator_src:t.name,editor_src:t.name,name:t.name}],run_from:t.run_from,lazy_lib:t.lazy_lib}),e=c.lib.l[`${n}`],e},get_all:async t=>c.lib.l},path:{set:t=>{let e="",n="";const d=t.src.split("/");if(t.src.indexOf("://localhost")!==-1||t.src.indexOf("://127.0.0.1")!==-1||(n="/dist"),d.indexOf(t.type)!==-1)for(const[s,i]of d.entries()){let o=s==0?"":"/";if(e+=`${o}${i}`,i==t.type)return`${e}${n}${t.name}`}else for(const[s,i]of d.entries()){let o=s==0?"":"/";if(e+=`${o}${i}`,i=="src")return`${e}${n}${t.name}`}return`${e}${n}${t.name}`}}};const R=async t=>{const e=await w();return await c.lib.set({lib:t.lib,run_from:"renderer",lazy_lib:t.lazy_lib}),{set:async(n,d)=>{console.log("--renderer [set]");let s={r:"",style:"",head:""};return await(async()=>{for(const i of n.data?.value?.l||n.data.l){const o=await await c.lib.get({name:i.type,run_from:"renderer",lazy_lib:t.lazy_lib}),a=await(await o.lib.index({f:{name:r=>e.f.name({id:i.id,name:r}),get_lib:async r=>await await c.lib.get({name:r.name,run_from:r.run_from,lazy_lib:t.lazy_lib}),set_theme:async r=>await(await $()).set(r),path:r=>c.path.set({src:o.src,type:i.type,name:r})}})).set({data:{curr:i}},d);s.r+=a?.r||"",s.style+=a?.style||"",s.head+=a?.head||""}})(),s}}},D=async t=>{const e=await w();return await c.lib.set({lib:t.lib,run_from:"hydrator",lazy_lib:t.lazy_lib}),{set:async(n,d)=>{console.log("--hydrator [set]");let s={r:"",style:""};const i=async()=>{for(const o of n.data?.value?.l||n.data.l){const a=await await c.lib.get({name:o.type,run_from:"hydrator",lazy_lib:t.lazy_lib}),r=await(await a.lib.index({f:{name:l=>e.f.name({id:o.id,name:l}),get_lib:async l=>await await c.lib.get({name:l.name,run_from:l.run_from,lazy_lib:t.lazy_lib}),set_theme:async l=>await(await $()).set(l),path:l=>c.path.set({src:a.src,type:o.type,name:l})}})).set({data:{curr:o}},d);s.style+=r.style}};return await A(()=>document.readyState==="complete"||typeof window<"u",50),await i(),s}}},U={class:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"},V=["innerHTML"],b="https://raw.githubusercontent.com/coreutility/content-engine/refs/heads/main/docs.json",W={__name:"index",async setup(t){let e,n;const d=S(),s=p({l:[{id:"3e1bc78c-104f-4f6f-aa87-ee295db8ad7c",type:"explorer",data:{data:"",theme:"light",foo:{txt:""},title:"Content-engine Docs",files:[{id:"file-0",name:"welcome",type:"file",path:"/welcome",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`
<div>
<b>Welcome!</b>
<p>Content-Engine lets you build interfaces from pure data. These docs will guide you <br> through setup, custom modules, 
and everything else you need to integrate it into your app.</p>
</div>
                                          `,theme:"light",foo:""}}]}}},{id:"folder-22",name:"Module Development",type:"folder",path:"/src",children:[{id:"folder-27567",name:"vanilla-ts",type:"folder",path:"/src/components",children:[{id:"file-574574",name:"Create",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`

                                          <div class="h-5"></div>

                                          <b>Create via NPM </b>

                                          <div class="h-5"></div>

                                          <p>$ npm create content-engine@latest my-project -- --template vanilla-ts</p>

                                          <div class="h-8"></div>


                                          <b>Create via Github </b>


                                          <div class="h-5"></div>

                                          <p>$ npx github:coreutility/content-engine-cli my-project --template vanilla-ts</p>
                                          
                                          `,theme:"light",foo:""}}]}}},{id:"file-563484",name:"Build",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`

                                          <div class="h-5"></div>

                                          <b>Build via NPM </b>

                                          <div class="h-5"></div>

                                          <p>$ npm run build</p>

                                          
                                          `,theme:"light",foo:""}}]}}},{id:"file-76755897",name:"Publish",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`
<pre>
<b>Publish on Github </b>

<span>Step-1: Create a repository </span>
<span>(Recommended structure)</span>

[your_repo_name]
    modules
      [your_module_name_1]
        dist
      [your_module_name_2]
        dist
      ...
README.md


<span>Step-2: Load and Verify </span>
via (jsdelivr)
Url = "https://cdn.jsdelivr.net/gh/[github_username]/[repo_name]/modules/[your_module_name_1]/dist/renderer.es.js"

</pre>

 
                                          `,theme:"light",foo:""}}]}}},{id:"file-72554897",name:"Update",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`
<pre>
<b>Update on jsdelivr </b>

<span>Step-1: Open url = "<a class='underline' target='blank' href='https://www.jsdelivr.com/tools/purge'>https://www.jsdelivr.com/tools/purge</a>" </span>
 

<span>Step-2: Paste url and submit </span>
Example = "https://cdn.jsdelivr.net/gh/[github_username]/[repo_name]@latest"

</pre>

 
                                          `,theme:"light",foo:""}}]}}}]},{id:"folder-27545vue",name:"vue-ts",type:"folder",path:"/src/components",children:[{id:"file-574574vue",name:"Create",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`

                                          <div class="h-5"></div>

                                          <b>Create via NPM </b>

                                          <div class="h-5"></div>

                                          <p>$ npm create content-engine@latest my-project -- --template vue-ts</p>

                                          <div class="h-8"></div>


                                          <b>Create via Github </b>


                                          <div class="h-5"></div>

                                          <p>$ npx github:coreutility/content-engine-cli my-project --template vue-ts</p>
                                          
                                          `,theme:"light",foo:""}}]}}},{id:"file-563484vue",name:"Build",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`

                                          <div class="h-5"></div>

                                          <b>Build via NPM </b>

                                          <div class="h-5"></div>

                                          <p>$ npm run build</p>

                                          
                                          `,theme:"light",foo:""}}]}}},{id:"file-76755897vue",name:"Publish",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`
<pre>
<b>Publish on Github </b>

<span>Step-1: Create a repository </span>
<span>(Recommended structure)</span>

[your_repo_name]
    modules
      [your_module_name_1]
        dist
      [your_module_name_2]
        dist
      ...
README.md


<span>Step-2: Load and Verify </span>
via (jsdelivr)
Url = "https://cdn.jsdelivr.net/gh/[github_username]/[repo_name]/modules/[your_module_name_1]/dist/renderer.es.js"

</pre>

 
                                          `,theme:"light",foo:""}}]}}},{id:"file-72554897vue",name:"Update",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`
<pre>
<b>Update on jsdelivr </b>

<span>Step-1: Open url = "<a class='underline' target='blank' href='https://www.jsdelivr.com/tools/purge'>https://www.jsdelivr.com/tools/purge</a>" </span>
 

<span>Step-2: Paste url and submit </span>
Example = "https://cdn.jsdelivr.net/gh/[github_username]/[repo_name]@latest"

</pre>

 
                                          `,theme:"light",foo:""}}]}}}]}]},{id:"folder-1",name:"Implementation",type:"folder",path:"/src",children:[{id:"folder-2",name:"vanilla-ts",type:"folder",path:"/src/components",children:[{id:"file-3",name:"Installation",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:`

                                          <div class="h-5"></div>

                                          <b>Install the package via NPM </b>

                                          <div class="h-5"></div>

                                          <p>$ npm i content-engine-lib</p>

                                          <div class="h-8"></div>


                                          <b>Install the package via Github </b>


                                          <div class="h-5"></div>

                                          <p>$ npm install github:coreutility/content-engine-lib#main</p>
                                          
                                          `,theme:"light",foo:""}}]}}},{id:"file-765897",name:"Usage",type:"file",path:"/src/components/Button.tsx",content:{config:{lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules/{*}/dist/editor.es.js"}},data:{l:[{id:"3e1bc78c-104f-4f6f-aa87-ef295db8aj9s",type:"text",data:{data:"https://raw.githubusercontent.com/coreutility/content-engine/refs/heads/main/templates/vanilla-ts/test/test_1.ts",load:"remote",e_tag:"pre",theme:"light",foo:""}}]}}}]}]}],expandedFolders:["folder-1"],activeFile:"file-0"}}]});if(d.public.env=="prod"){const u=([e,n]=f(()=>fetch(b)),e=await e,n(),e),m=([e,n]=f(()=>u.json()),e=await e,n(),e);s.value=m}else console.warn(`Copy and Update this json on [location=${b}]`),console.log(JSON.stringify(s.value));v(()=>{const u=document.createElement("div");u.innerHTML=r.value;for(const m of u.querySelectorAll("*"))m.tagName.includes("title")||m.getAttribute("name")=="description"||document.head.appendChild(m)});const i=p(""),o=p(""),a=p("");p(""),p("");const r=p(""),l={lib:[],lazy_lib:{renderer_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",hydrator_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",editor_src:"https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"}},h=([e,n]=f(()=>R(l)),e=await e,n(),e),y=([e,n]=f(()=>D(l)),e=await e,n(),e);{const u=([e,n]=f(()=>h.set({data:s})),e=await e,n(),e);i.value=u.r,o.value=u.style,r.value=u.head}{const u=([e,n]=f(()=>y.set({data:s})),e=await e,n(),e);a.value=u.style}return O({title:"Content-engine Docs",meta:[{name:"description",content:"Content-engine Docs"}],style:[{innerHTML:o},{innerHTML:a}]}),(u,m)=>{const x=L;return N(),j("div",U,[T(x,null,{default:M(()=>[g("main",null,[g("div",{innerHTML:i.value},null,8,V)])]),_:1})])}}};export{W as default};
