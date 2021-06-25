<template>
  <div class="home">
    <h2>Home</h2>
    <el-button>个人信息</el-button>
  </div>
</template>

<script setup>
import { getUser } from '../server/user'
import { reactive } from 'vue'

const state = reactive({
  loading: false,
  tableData: []
})

const onSubmit = () => {
  state.loading = true
  getUser().then(res => {
    state.loading = false
    state.tableData = res.data
    console.log(state.tableData);
  })
}
</script>

<style scoped lang="less">
</style>
