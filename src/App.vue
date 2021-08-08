<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld title="Hello Vue 3.0 + Vite" @changePage="changePage"/>
  <br>
  -----华丽的分割线----
  <br>
  <HelloWorldNew msg="Hello Vue 3.0 + Vite New" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorldNew from './components/HelloWorldNew.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorldNew
  },
  methods: {
    changePage() {
      console.log('修改u也')
    }
  }
}
</script>
