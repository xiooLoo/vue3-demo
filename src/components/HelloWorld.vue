<template>
  <div>
    <h1>title:{{ title }}</h1><br>
    <h1>size:{{ size }}</h1>
    <button @click="changePage">changePage</button>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
type Props = {
  title: string,
  size: number
}
const props = withDefaults(defineProps<Props>(), {
  title: 'aaa',
  size: 12
});

const emit = defineEmits(['change-page'])

function changePage() {
  emit('change-page')
}

</script>
