import type { _p_TYP, _$cb_TYP, _$p_TYP } from "../shared/types";
import { helper } from "../shared/util/helper/index";
import { uuid } from "../shared/util/uuid/index";
import { hydrator } from "../hydrator";
import { renderer } from "../renderer";
const index = async (_p:_p_TYP) => {
const _helper = await helper();
    
    return {
        set: async (_$p:_$p_TYP,_$cb?:_$cb_TYP) => {
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
                f:{
                    ..._p.f,
                   name:(v:string)=>_helper.f.name({id:curr[`id`],name:v})
                },
            });
            const _hydrator = await hydrator({
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
            },{
                add: (_v) => {
                    /*console.log(`--add`);
                    console.log(_v);*/
                    //set..
                    let _el = _v.el;
                    _el?.setAttribute(`contenteditable`,"true"); 
                    _el?.classList.add('block-content');
                    _el?.addEventListener("click", () => {
                       //alert(``);
                    });
                    _el?.addEventListener('input', function (event:any) { // input | keyup
                        const _curr = _el.innerHTML; //_el.textContent;
                        //update..
                        _v[`$d`].data = _curr;
                        _hydrator_rsp.evt.change();
                    });
                },
                change: (_v) => {
                    /*console.log(`--change`);
                    console.log(_v);*/
                    _$cb?.change(_v);
                }

            });
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