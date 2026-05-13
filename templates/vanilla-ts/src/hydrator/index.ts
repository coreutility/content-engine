//import { createObserver } from "../../../u/observe/index";
import type { _p_TYP, _pp_TYP } from "../shared/types";

const index = async (_p:_p_TYP) => {
    return {
        set: async (_pp:_pp_TYP) => {
            console.log(`--hydrator [${_pp[`data`][`curr`].type}]`);
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
                        _p.f.call("msg",{
                            type:`change`,
                            _p:_p,
                            _pp:_pp,
                            custom:{},
                        });
                    }
                }
            };
            const mE = document.getElementById(_p.f.name(`root`));
            /*mE!.onclick = () => {
                alert(`--root`);
            };*/
            (async(mE) => {
            //==test==//  [START]
            /* await _p.f.wait_until(() => window.location !== null, 50); */


            //1
            _p.my[`emitter`] = _p.f.new_emitter();
            _p.my[`emitter`].on("msg", async (_$: any) => {
                console.log(`_p.my.emitter.on`, _$);
            });
            await _p.my[`emitter`].emit("msg", {
                type: `change`,
                _p: _p,
                _pp: _pp,
            });
            //2
            _p.f.listen("msg", async(_$)=>{
                console.log(`_p.f.listen`, _$);
            });
            setTimeout(async() => {
                await _p.f.call("msg", {
                type:`change`,
                _p:_p,
                _pp:_pp,
               });
            }, 500);
            
            //==test==//  [END]


            //set..
            _p.f.call("msg", {
                    type: `add`,
                    _p: _p,
                    _pp: _pp,
                    custom: {},
                    //set..
                    $d: _pp[`data`].curr[`data`],
                    el: mE!

            });

            })(mE);
            return _$r;
        },
    };
}


export {index, index as hydrator}