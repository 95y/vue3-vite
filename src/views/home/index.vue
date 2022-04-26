<template>
  <h1>首页</h1>
</template>

<script setup lang="ts">
import { useStore } from '../../store'

const store = useStore()

console.log(store.state.count)
</script>

<style lang="scss" scoped></style>
