<template></template>
<script lang="ts" setup>
import type { _p_TYP, _pp_TYP } from "../shared/types";

const {_p,_pp} = defineProps<{
    _p:_p_TYP,
    _pp:_pp_TYP,
}>();

(async () => {
    //==test==//  [START]
    /* await _p.f.wait_until(() => window.location !== null, 50); */

    //1
    _p.my[`emitter`] = _p.f.new_emitter();
    _p.my[`emitter`].on("msg", async (_$:any) => {
        console.log(`_p.my.emitter.on`, _$);
    });
    await _p.my[`emitter`].emit("msg", {
        type: `on:change`,
        _p: _p,
        _pp: _pp,
    });

    
    //2
    _p.f.listen("msg", async (_$) => {
        console.log(`_p.f.listen`, _$);
    });
    setTimeout(async () => {
        await _p.f.call("msg", {
            type: `on:change`,
            _p: _p,
            _pp: _pp,
        });
    }, 500);

    //==test==//  [END]
})();

</script>
