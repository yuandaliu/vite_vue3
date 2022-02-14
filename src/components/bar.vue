<template>
  <div class="bar">
    转
  </div>
</template>

<script>
import {
  onMounted,
  provide,
  ref
} from 'vue'

export default {
  components: {},
  setup () {
    const data = ref(99)
    provide('data', data)
    onMounted(() => {})
    return {
      // 变量
      data
      // 方法
    }
  }
}
</script>

<style scoped lang="less">
.bar {
  width: 300px;
  height: 300px;
}
</style>
