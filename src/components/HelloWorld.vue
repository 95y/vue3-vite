<template>
  <h1>Hello</h1>
  <abc />
  <Foo msg="Foo" />
</template>

<script setup lang="tsx">
import Foo from './foo'
const abc = <h1>abc</h1>
</script>
