<template>
  <div>嗨 wide {{ count }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
