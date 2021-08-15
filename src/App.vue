<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="hello-box">
    <HelloWorld ref="helloWorldRef" title="-----HelloWorld组件----" :ffc="handleffc" @changePage="changePage"/>
    <HelloWorldNew msg="-----HelloWorldNew组件----" />
  </div>
</template>

<script>
import { ref, toRef } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import HelloWorldNew from './components/HelloWorldNew.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    HelloWorldNew
  },
  setup() {
    const helloWorldRef = ref(null);

    function changePage(info) {
      console.log('helloWorldRefinfo:', info)
      console.log('helloWorldRef:', helloWorldRef.value)
    }
    function handleffc(info) {
      console.log('打印ffc:', info)
    }

    return { changePage, handleffc }
  }
} 
</script>
<style scoped>
.hello-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
</style>