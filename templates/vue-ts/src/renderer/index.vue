<template>
  <div :id="_p.f.name(`root`)" class="box">
    <p>{{ _$p.data.curr.data.data }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { _p_TYP, _$p_TYP } from "../shared/types";

const {_p,_$p} = defineProps<{
    _p:_p_TYP,
    _$p:_$p_TYP,
}>();


</script>
