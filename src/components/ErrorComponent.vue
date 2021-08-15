<template>
    <div>
        ErrorInfo~~
    </div>    
</template>
<script>
import {reactive} from 'vue'
export default {
    setup() {
        const obj = {
            a: 1,
            first: {
                b: 2,
                second: {
                    c: 3
                }
            }
        }

        const state = reactive(obj)

        console.log('aaaaaaaaa:', state)
        console.log('bbbbbbbbb', state.first)
        console.log('ccccccccc', state.first.second)
    }
}
</script>