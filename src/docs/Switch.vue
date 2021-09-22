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
  <section>
    <h2>用法</h2>
    <div class="demo">
      <Switch v-model:checked="checked" />
    </div>
  </section>
</template>