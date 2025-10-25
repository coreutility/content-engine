"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=async s=>({set:async a=>{console.log(`--renderer [${a.data.curr.type}]`);const n={formatValue:(e,t)=>{switch(t.type){case"date":return new Date(e).toLocaleDateString();case"boolean":return e?"Yes":"No";case"number":return e.toString();default:return String(e)}},generateTableHeaders:()=>`
                      <thead>
                        <tr>
                          ${a.data.curr.data.columns.map(t=>{const o=t.sortable?"sortable":"",r=a.data.curr.data.sortBy===t.key?`<span class="sort-indicator">${a.data.curr.data.sortDirection==="asc"?"↑":"↓"}</span>`:"";return`
                          <th class="${o}" data-key="${t.key}">
                            ${t.title}
                            ${r}
                          </th>
                        `}).join("")}
                        </tr>
                      </thead>
                    `,generateTableRows:()=>`<tbody>${a.data.curr.data.rows.map(t=>{const o=a.data.curr.data.columns.map(r=>{const d=t[r.key],l=n.formatValue(d,r);return`<td class="${`cell-${r.type}`}">${l}</td>`}).join("");return`<tr data-id="${t.id}">${o}</tr>`}).join("")}</tbody>`};return{r:`
                <div class="${s.f.name("table")}" id="${s.f.name("table")}"  >
                <table >
                  ${n.generateTableHeaders()}
                  ${n.generateTableRows()}
                </table>
                </div>
                `,style:(()=>{let e="";return e=`
                .${s.f.name("table")} {
                   background: #cccccc;
                }
                `,e})()}}});exports.index=c;exports.renderer=c;
