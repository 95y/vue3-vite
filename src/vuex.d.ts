/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // interface State {
  //   count: number
  // }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
