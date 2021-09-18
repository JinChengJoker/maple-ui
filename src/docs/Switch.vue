<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from '../lib/Switch.vue'

export default defineComponent({
  components: {
    Switch
  },
  setup() {
    const checked = ref(false)
    return {
      checked,
    };
  },
});
</script>

<template>
  <Switch v-model:checked="checked" />
</template>