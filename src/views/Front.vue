<template>
  <div>
    Count: {{ countStore.num }}
    refCount: {{ refCount.num }}
  </div>
  <div>
    <button @click="countStore.increment()">
      +1
    </button>
  </div>
</template>

<script setup lang="ts">
import useCountStore from '@/store/modules/useCountStore'
import { storeToRefs } from 'pinia'
const countStore = useCountStore()
const refCount = storeToRefs(countStore)
</script>

<style scoped lang="scss">

</style>
