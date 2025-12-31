//import { createObserver } from "../../../u/observe/index";
import type { _p_TYP, _$cb_TYP, _$p_TYP } from "../shared/types";

const index = async (_p:_p_TYP) => {
    return {
        set: async (_$p:_$p_TYP,_$cb?:_$cb_TYP) => {
            /*const _$p = createObserver(_$p_, (path, key, oldVal, newVal) => {_$cb?.change({_$p:_$p_})});*/ //not supported in some browsers..
            console.log(`--hydrator [${_$p[`data`][`curr`].type}]`);
            const _$u = {
            };
            const _$r = {
                r: (()=>{
                let _n = ``;
                return _n;
                })(),
                style: (() => {
                let _n = ``;
                /*_n = `
                .${_p.f.name(`text`)} {
                   background: #cccccc;
                }
                `;*/
                return _n;
                })(),
                //set..
                evt: {
                    change: () => {
                        _$cb?.change({_$p:_$p});
                    }
                }
            };
            const mE = document.getElementById(_p.f.name(`root`));
            /*mE!.onclick = () => {
                alert(`--root`);
            };*/
            (async(mE) => {
            //==test==//  [START]
            //1
            _p.my[`emitter`] = _p.f.new_emitter();
            _p.my[`emitter`].on("msg", async (_$: any) => {
                console.log(`_p.my.emitter.on`, _$);
            });
            await _p.my[`emitter`].emit("msg", {
                type: `on:change`,
                _p: _p,
                _$p: _$p,
            });
            //2
            _p.f.listen("msg", async(_$)=>{
                console.log(`_p.f.listen`, _$);
            });
            setTimeout(async() => {
                await _p.f.call("msg", {
                type:`on:change`,
                _p:_p,
                _$p:_$p,
               });
            }, 500);
            
            //==test==//  [END]


            //set..
            _$cb?.add({$d:_$p[`data`].curr[`data`],el:mE!});
            })(mE);
            return _$r;
        },
    };
}


export {index, index as hydrator}