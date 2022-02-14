<template>
  <div class="index">
    <el-button @click="scroll">显示动态柱状图</el-button>
    <div>{{ count }}</div>
    <div>{{obj}}</div>
    <bar v-if="count >= 5" />
  </div>
</template>

<script>
import bar from '../components/bar.vue'

import {
  onMounted,
  ref,
  reactive,
  inject
} from 'vue'

export default {
  components: { bar },
  setup () {
    const count = ref(0)
    const dataa = inject('data')
    const obj = reactive({
      name: 'Bob',
      age: 18,
      active: data => {
        data.forEach(item => {
          itme * 7
        })
        return data
      }
    })
    onMounted(() => {
      console.log(dataa)
    })
    const scroll = () => {
      count.value++
    }
    return {
      // 变量
      dataa,
      count,
      obj,
      // 方法
      scroll
    }
  }
}
</script>

<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>

