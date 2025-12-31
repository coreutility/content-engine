import { _p_TYP, _$p_TYP } from '../shared/types';
declare const index: (_p: _p_TYP) => Promise<{
    set: (_$p: _$p_TYP) => Promise<{
        r: string;
        style: string;
        evt: {
            change: () => void;
        };
    }>;
}>;
export { index, index as hydrator };
