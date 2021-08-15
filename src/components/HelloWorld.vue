<template>
  <div label="父子关系" class="testdom">
    <h1>{{ title }}</h1><br>
    <h1>size:{{ size }}</h1>
    <button @click="changePage">changePage</button>
    <input type="text" v-focus v-model="size" />
  </div>
  <div label="模态框">
    <button @click="showDialog = true">打开模态框</button>
    <teleport to="body">
      <div class="modal" v-if="showDialog">
        我是一个模态框
        <button @click="showDialog = false">关闭</button>
        <HelloWorldNew :msg="msg" />
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineExpose, onMounted, reactive, shallowReactive } from 'vue';
import vFocus from '../utils/vFocus';
import HelloWorldNew from './HelloWorldNew.vue'

// 父子关系
type Props = {
  title: string,
  size: number,
  ffc: Function
}
const props = withDefaults(defineProps<Props>(), {
  title: 'aaa',
  size: 12,
  ffc: () => {}
});
let size = ref(2)
const emit = defineEmits(['change-page'])
function changePage() {
  size.value++
  // emit('change-page', 'aaa')
  // 或
  props.ffc('aaac')
}
function inc() { console.log('sssssss') }

// 模态框
const showDialog = ref(false);
const msg = ref('-----测试模态框内容----')

// shallowReactive
const obj = {
    a: 1,
    first: {
        b: 2,
        second: {
            c: 3
        }
    }
}
const state = shallowReactive(obj)
console.log('aaaaaaaaa:', state)
console.log('bbbbbbbbb', state.first)
console.log('ccccccccc', state.first.second)

/**
 * 对外暴露属性
 */
defineExpose({
  inc
})
</script>
<style scoped>
.modal {
  position: fixed;
  top: 20vh;
  left: 40%;
  right: 50%;
  width: 20vw;
  height: 30vh;
  background-color: lightskyblue;
}
</style>