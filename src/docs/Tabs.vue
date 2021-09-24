<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'

export default defineComponent({
  components: {
    Tabs,
    Tab
  },
  setup() {
    const activeName = ref('first')
    return {
      activeName
    }
  }
})
</script>

<template>
  <section>
    <h2>示例</h2>
    <div class="demo">
      <Tabs v-model:active="activeName">
        <Tab label="User" name="first">内容1</Tab>
        <Tab label="标题2" name="second">内容2</Tab>
      </Tabs>
    </div>
  </section>
</template>