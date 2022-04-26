<template>
  <h1>
    首页
    {{ $store.state.count }}
    {{ store.state.count }}
    <HelloWorld />
  </h1>
</template>

<script setup lang="ts">
import { useStore } from '../../store'
import HelloWorld from '@comp/HelloWorld.vue'

const store = useStore()

console.log(store.state.count)
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
h1 {
  color: $color;
}
</style>
