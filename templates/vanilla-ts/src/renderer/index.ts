import type { _p_TYP, _$cb_TYP, _$p_TYP } from "../shared/types";

const index = async (_p:_p_TYP) => {
    return {
        set: async (_$p:_$p_TYP,_$cb?:_$cb_TYP) => {  
            console.log(`--renderer [${_$p[`data`][`curr`].type}]`);
            const _$u = {
                value: (): string => {
                    return _$p[`data`][`curr`].data[`data`];
                },
            };
            const _$r = {
                r: (() => {
                let _n = `
                <div class="${_p.f.name(`text`)}" id="${_p.f.name(`text`)}"  >
                  ${_$u.value()}
                </div>
                `;
                return _n;
                })(),
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