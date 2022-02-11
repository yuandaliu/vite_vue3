/**
 * @author  ...|...
 * @date 2022.02.11
 * @discription 引入vuex全局状态管理工具，将各个模块拆分为不同的文件引入
*/
import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export default createStore({
  actions,
  getters,
  mutations,
  state
})