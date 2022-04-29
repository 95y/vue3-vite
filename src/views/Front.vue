<template>
  <div>
    Count: {{ countStore.num }}
    refCount: {{ refCount.num }}
  </div>
  <div>
    <button
      class="bg-green-300 text-white rounded px-2 py-1"
      @click="countStore.increment()"
    >
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
