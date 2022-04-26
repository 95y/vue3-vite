<template>
  <div>
    登录
  </div>
</template>

<script setup lang="ts">
import type { ILoginInfo } from '@/api/types/common'
import { ref } from '@vue/runtime-core'

const list = ref<ILoginInfo['slide']>([])

console.log(list.value)
</script>

<style scoped>

</style>
