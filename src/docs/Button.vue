<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '../lib/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  setup() {
    const loading = ref(false)
    const changeLoading = () => {
      loading.value = !loading.value
    }
    return {
      loading,
      changeLoading
    }
  }
})
</script>

<template>
  <section>
    <h2>基础用法</h2>
    <div class="demo">
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
  </section>
  <section>
    <h2>不同尺寸</h2>
    <div class="demo">
      <Button size="big">大号按钮</Button>
      <Button>默认按钮</Button>
      <Button size="small">小号按钮</Button>
    </div>
  </section>
  <section>
    <h2>禁用状态</h2>
    <div class="demo">
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>危险按钮</Button>
    </div>
  </section>
  <section>
    <h2>加载中</h2>
    <div class="demo">
      <Button :loading="loading" @click="changeLoading">点我点我！</Button>
      <Button type="primary" loading>加载中</Button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  > .demo {
    > .mp-button {
      + .mp-button {
        margin-left: 10px;
      }
    }
  }
}
</style>