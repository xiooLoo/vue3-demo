<template>
    <div>new hello world
        {{count}}
    </div>
    <button @click="inc">增加</button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const count = ref(0)

    function inc() {
        count.value ++;
    }

    // 比如声明一个没有用到的属性 a
    const a = '1'
</script>