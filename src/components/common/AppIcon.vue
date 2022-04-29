<template>
  <span
    class="iconify"
    :data-icon="props.icon"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>

<style scoped lang="scss">

</style>
