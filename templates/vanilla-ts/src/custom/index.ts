import type { _p_TYP, _pp_TYP } from "../shared/types";
const index = async (_p:_p_TYP) => {
    console.log(`--custom [set]`);
    return {
        set: async (_pp:_pp_TYP) => {
            const _$r = {
                r: `<div>Custom</div>`,
                //style: ``,
            };
            


            //set..
            return _$r;
        }
    };
};

export {index, index as custom};