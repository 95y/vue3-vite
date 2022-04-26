<template>
  <div>
    登录
  </div>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { ref } from '@vue/runtime-core'
getLoginInfo()
const list = ref<ILoginInfo['slide']>([])

console.log(list.value)
</script>

<style scoped>

</style>
