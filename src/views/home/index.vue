<template>
  <div>
    首页
    {{ $store.state.count }}
    {{ store.state.count }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../../store'

const store = useStore()

console.log(store.state.count)
</script>

<style scoped>

</style>
