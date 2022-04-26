<template>
  <div>
    首页
    {{ $store.state.count }}
    {{ store.state.count }}
    <HelloWorld />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../../store'
import User from '@/api/user'
import HelloWorld from '@comp/HelloWorld.vue'
console.log(User)

const store = useStore()

console.log(store.state.count)
</script>

<style scoped>

</style>
