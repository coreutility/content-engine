//import { createObserver } from "../../../u/observe/index";
import { createApp } from "vue";
import type { _p_TYP, _$cb_TYP, _$p_TYP } from "../shared/types";
//set..
import Comp from "./index.vue";

const index = async (_p:_p_TYP) => {
    return {
        set: async (_$p:_$p_TYP,_$cb?:_$cb_TYP) => {
            /*const _$p = createObserver(_$p_, (path, key, oldVal, newVal) => {_$cb?.change({_$p:_$p_})});*/ //not supported in some browsers..
            console.log(`--hydrator [${_$p[`data`][`curr`].type}]`);


            //set..
            const props = {
                _p:_p,
                _$p:_$p,
                _$cb:_$cb,
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
                        _$cb?.change({_$p:_$p});
                    }
                }
            };
            //const mE = document.getElementById(_p.f.name(`root`));
            const mountEl = document.getElementById(_p.f.name("vue-root"));
            app.mount(mountEl!);
            /*mE!.onclick = () => { console.log(`--root`);};
            (async(mE) => {
            //set..
            _$cb?.add({$d:_$p[`data`].curr[`data`],el:mE!});
            })(mE);*/
            return _$r;
        },
    };
}


export {index, index as hydrator}