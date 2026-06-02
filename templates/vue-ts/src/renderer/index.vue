<template>
  <div :id="_p.f.name(`root`)" class="box">
    <p class="p-5">{{ _pp.data.curr.data.data }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { _p_TYP, _pp_TYP } from "../shared/types";

const {_p,_pp} = defineProps<{
    _p:_p_TYP,
    _pp:_pp_TYP,
}>();


</script>
