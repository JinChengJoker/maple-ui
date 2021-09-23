<script lang="ts">
import { defineComponent } from 'vue'
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'

export default defineComponent({
  components: {
    Tabs,
    Tab
  }
})
</script>

<template>
  <section>
    <h2>用法</h2>
    <div class="demo">
      <Tabs>
        <Tab title="标题1">内容1</Tab>
        <Tab title="标题2">内容2</Tab>
      </Tabs>
    </div>
  </section>
</template>