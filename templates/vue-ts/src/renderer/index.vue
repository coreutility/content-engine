<template>
  <div class="box">
    <h2>{{ title }}</h2>
    <p>Total items: {{ count }}</p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  count: number;
}

const props = defineProps<Props>();
const { title, count } = props;
</script>
