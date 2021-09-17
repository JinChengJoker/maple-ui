<script lang="ts">
import { ref, provide } from 'vue'

export default {
  setup() {
    const asideVisible = ref(true)
    provide('asideVisible', asideVisible)
  }
}
</script>

<template>
  <router-view></router-view>
</template>
