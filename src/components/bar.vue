<template>
  <div class="bar">
    转
  </div>
</template>

<script>
import {
  onMounted,
  ref
} from 'vue'

export default {
  components: {},
  setup () {
    const data = ref('')
    onMounted(() => {})
    return {}
  }
}
</script>

<style scoped lang="less">
.bar {
  width: 300px;
  height: 300px;
}
</style>
