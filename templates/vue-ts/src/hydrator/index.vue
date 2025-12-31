<template></template>
<script lang="ts" setup>
import type { _p_TYP, _$p_TYP } from "../shared/types";

const {_p,_$p} = defineProps<{
    _p:_p_TYP,
    _$p:_$p_TYP,
}>();

(async () => {
    //==test==//  [START]
    //1
    _p.my[`emitter`] = _p.f.new_emitter();
    _p.my[`emitter`].on("msg", async (_$:any) => {
        console.log(`_p.my.emitter.on`, _$);
    });
    await _p.my[`emitter`].emit("msg", {
        type: `on:change`,
        _p: _p,
        _$p: _$p,
    });

    
    //2
    _p.f.listen("msg", async (_$) => {
        console.log(`_p.f.listen`, _$);
    });
    setTimeout(async () => {
        await _p.f.call("msg", {
            type: `on:change`,
            _p: _p,
            _$p: _$p,
        });
    }, 500);

    //==test==//  [END]
})();

</script>
