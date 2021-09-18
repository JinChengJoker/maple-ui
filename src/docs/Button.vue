<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../lib/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {
      onClick
    }
  }
})
</script>

<template>
  <Button @click="onClick">我是按钮</Button>
</template>