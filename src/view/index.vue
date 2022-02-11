<template>
  <div class="index">
    <el-button @click="scroll">显示动态柱状图</el-button>
    <div>{{ count }}</div>
    <bar v-if="count >= 5" />
  </div>
</template>

<script>
import bar from '@/components/bar'

import {
  onMounted,
  ref
} from 'vue'

export default {
  components: { bar },
  setup () {
    const count = ref(0)
    onMounted(() => {})
    const scroll = () => {
      count.value++
    }
    return {
      // 变量
      count,
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

