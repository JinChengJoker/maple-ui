<script lang="ts">
import { defineComponent, provide, ref } from 'vue'

export default defineComponent({
  setup() {
    let clientWidth = document.documentElement.clientWidth
    const asideVisible = ref(clientWidth >= 700 ? true : false)
    window.addEventListener('resize', () => {
      clientWidth = document.documentElement.clientWidth
      if (clientWidth > 700) {
        asideVisible.value = true
      } else {
        asideVisible.value = false
      }
    })
    provide('asideVisible', asideVisible)
  }
})
</script>

<template>
  <router-view></router-view>
</template>
