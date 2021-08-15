<template>
    <div>
        <h1>{{ msg }}</h1><br>
        {{count}}
        <button @click="inc">增加</button>
        <div>
            <template v-for="(item, index) in 3" :key="index">
                <span >item-{{index}}</span><br>
            </template>
        </div><br>
    </div>
    <div label="异步组件加载">
        <button @click="showButton">展示异步组件</button>
        <template v-if="isShowButton">
            <Suspense>
                <template #default>
                    <HelloWorld title="测试异步组件"></HelloWorld>
                </template>
                <template #fallback>
                    <div>组件加载中...</div>
                </template>
            </Suspense>
        </template>
    </div>
</template>

<script>
    import { ref, toRef, toRefs, defineAsyncComponent } from 'vue';
    import ErrorComponent from './ErrorComponent.vue'
    export default {
        name: 'HelloWorldNew',
        components: {
            HelloWorld: defineAsyncComponent({
                delay: 3000,
                timeout: 3000,
                loader: () => import("./HelloWorld.vue"),
                errorComponent: ErrorComponent,
                onError(error, retry, fail, attempts) {
                    if (attempts <= 3) {
                        retry();
                    } else {
                        ail();
                    }
                },
            })
        },
        props: ['msg'],
        setup() {
            const obj = {
                name: 'v3测试',
                age: 22,
                gender: 0
            }
            const count = ref(0)
            const objRef = toRef(obj, 'name')
            const objsRef = toRefs(obj)
            function inc() {
                count.value ++;
                console.log('ref：', count.value)
                console.log('objRef：', objRef.value)
                console.log('objsRef：', objsRef)
            }

            // 声明一个没有用到的属性 a
            const a = '1'

            // 异步组件加载
            const isShowButton = ref(false);
            function showButton() {
                isShowButton.value = true;
            }

            return { 
                count,
                inc,
                isShowButton,
                showButton
            }
        }
    }
</script>