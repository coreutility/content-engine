"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=async e=>({set:async(r,d)=>{console.log(`--renderer [${r.data.curr.type}]`);const a={value:()=>r.data.curr.data.data};return{r:`
                <div class="${e.f.name("text")}" id="${e.f.name("text")}"  >
                  ${a.value()}
                </div>
                `,style:(()=>{let t="";return t=`
                .${e.f.name("text")} {
                   background: transparent;
                }
                `,t})()}}});exports.index=n;exports.renderer=n;
