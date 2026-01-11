import type { _p_TYP, _$p_TYP } from "../shared/types";
import { helper } from "../shared/util/helper/index";
import { uuid } from "../shared/util/uuid/index";
import { hydrator } from "../hydrator";
import { renderer } from "../renderer";
const index = async (_p:_p_TYP) => {
const _helper = await helper();
    
    return {
        set: async (_$p:_$p_TYP) => {
            const _$r = {
                r: ``,
                //style: ``,
            };
            const curr = _$p.data.curr || {
                id: uuid().set(),
                type: "text",
                data: {
                    data: "", //Text
                }
            };
            const _renderer = await renderer({
                my:{},
                f:{
                    ..._p.f,
                   name:(v:string)=>_helper.f.name({id:curr[`id`],name:v})
                },
            });
            const _hydrator = await hydrator({
                my:{},
                f:{
                    ..._p.f,
                   name:(v:string)=>_helper.f.name({id:curr[`id`],name:v})
                },
            });
            const _renderer_rsp = await _renderer.set({
                data:{
                    curr:curr,
                }
            });
            setTimeout(async() => {
            const _hydrator_rsp = await _hydrator.set({
                data:{
                    curr:curr,
                }
            },);
            //set..
            ((_mE)=>{
            const mE = document.createElement("style");
            mE.innerHTML = `${_hydrator_rsp.style}`;
            _mE.appendChild(mE);
            })(document.head);
            }, 200);
            //update..
            _$r[`r`] = _renderer_rsp[`r`];
            /*_$r[`style`] = `
            ${_renderer_rsp[`style`]}
            `;*/
            ((_mE)=>{
            const mE = document.createElement("style");
            mE.innerHTML = `${_renderer_rsp.style}`;
            _mE.appendChild(mE);
            })(document.head);


            //set..
            return _$r;
        }
    };
};

export {index, index as editor};