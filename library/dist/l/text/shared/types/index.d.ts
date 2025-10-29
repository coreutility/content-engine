type _p_TYP = {
    f: {
        name: (v: string) => string;
        get_lib: (v: {
            name: string;
            run_from: any;
        }) => any;
    };
};
type _$p_TYP = {
    data: {
        curr: {
            "id": "";
            "type": "text";
            "data": {
                "data": string;
            };
        };
    };
};
type _$cb_TYP = {
    change: (_v: {
        _$p: _$p_TYP;
    }) => any;
    add: (_v: {
        $d: _$p_TYP[`data`][`curr`][`data`];
        el: HTMLElement;
    }) => any;
};
export type { _p_TYP, _$p_TYP, _$cb_TYP };
