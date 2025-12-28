type _$ = {
    /**eg=> `on:change`, `on:add`  etc. */
    type: string,
    /**pass existing `_p` variable. */
    _p: any,
    /**pass existing `_$p` variable. */
    _$p: any,
    /**can be used to pass custom data. */
    custom?: object,
};
type Events = | "msg" ;
type _p_TYP = {
    f:{
        name:(v:string)=>string,
        get_lib:(v:{name:string,run_from:any})=> any,
        set_theme:(v:{name:string,el_id:string})=> any,
        path:(v:string)=>string,
        //set..
        call:(event:Events,_$: _$)=> any,
        listen: (event: Events, handler: (_$: _$) => any | Promise<any>) => any;
        emitter:{
            emit:(event:Events,_$: _$)=> any,
            on:(event: Events, handler: (_$: _$) => any | Promise<any>) => any;
        },
    }
};
type _$p_TYP = {
    data: {
        curr: {
            //set..
            "id": "",
            "type": "sample",
            "data": {
                "data": string,
            },
        }
    },
};
type _$cb_TYP = {
    change: (_v:{_$p:_$p_TYP}) => any,
    add: (_v:{/*_$p:_$p_TYP,*/$d:_$p_TYP[`data`][`curr`][`data`],el:HTMLElement}) => any,
};
export type {_p_TYP,_$p_TYP,_$cb_TYP};