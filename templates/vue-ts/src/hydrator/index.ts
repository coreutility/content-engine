import { createApp } from "vue";
import type { _p_TYP, _pp_TYP } from "../shared/types";
//set..
import Comp from "./index.vue";

const index = async (_p:_p_TYP) => {
    return {
        set: async (_pp:_pp_TYP,) => {
            console.log(`--hydrator [${_pp[`data`][`curr`].type}]`);


            //set..
            const props = {
                _p:_p,
                _pp:_pp,
            };
            const app = createApp(Comp, props);
            //console.log(app);
            


            //set..
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
            //const mE = document.getElementById(_p.f.name(`root`));
            const mountEl = document.getElementById(_p.f.name("vue-root"));
            app.mount(mountEl!);
            /*mE!.onclick = () => { console.log(`--root`);};
            (async(mE) => {
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
            })(mE);*/
            return _$r;
        },
    };
}


export {index, index as hydrator}