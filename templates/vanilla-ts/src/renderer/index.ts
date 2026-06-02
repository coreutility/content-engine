import type { _p_TYP, _pp_TYP } from "../shared/types";
import "../style/index.ts";


const index = async (_p:_p_TYP) => {
    return {
        set: async (_pp:_pp_TYP) => {  
            console.log(`--renderer [${_pp[`data`][`curr`].type}]`);
            const _$u = {
                value: (): string => {
                    return _pp[`data`][`curr`].data[`data`];
                },
            };
            const _$r = {
                r: (() => {
                let _n = `
                <div class="${_p.f.name(`text`)}" id="${_p.f.name(`root`)}"  >
                  <div class="p-5">
                  ${_$u.value()}                  
                  </div>
                </div>
                `;
                return _n;
                })(),
                head: ``,
                style: (()=>{
                let _n = ``;
                _n = `
                .${_p.f.name(`text`)} {
                   background: transparent;
                }
                `;
                return _n;
                })(),

            };
            return _$r;
        },
    };
}


export {index, index as renderer}