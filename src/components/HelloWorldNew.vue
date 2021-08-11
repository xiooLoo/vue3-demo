<template>
    <div>new hello world
        {{count}}
        <button @click="inc">增加</button>
        <div>
            <template v-for="(item, index) in 3" :key="index">
                <span >item-{{index}}</span><br>
            </template>
        </div>
    </div>
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