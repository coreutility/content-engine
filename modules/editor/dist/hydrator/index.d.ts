import { _$cb_TYP, _$p_TYP, _p_TYP } from '../shared/types';
declare const index: (_p: _p_TYP) => Promise<{
    set: (_$p: _$p_TYP, _$cb: _$cb_TYP) => Promise<{
        r: string;
        style: string;
    }>;
}>;
export { index, index as hydrator };
