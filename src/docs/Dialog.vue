<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

export default defineComponent({
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false)
    const toggleVisible = () => {
      visible.value = !visible.value
    }
    const onCancel = () => {
      toggleVisible()
    }
    const onOk = () => {
      toggleVisible()
    }
    return {
      visible,
      toggleVisible,
      onCancel,
      onOk
    }
  }
})
</script>

<template>
  <section>
    <h2>用法</h2>
    <div class="demo">
      <Button type="primary" @click="toggleVisible">点我打开 Dialog</Button>
    </div>
  </section>
  <Dialog title="Dialog 标题" :visible="visible" :onCancel="onCancel" :onOk="onOk">
    <p>Dialog 内容</p>
    <p>Dialog 内容</p>
    <p>Dialog 内容</p>
  </Dialog>
</template>