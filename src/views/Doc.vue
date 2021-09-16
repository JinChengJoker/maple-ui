<script lang="ts">
import TopNav from '../components/TopNav.vue'

export default {
  components: {
    TopNav
  }
}
</script>

<template>
  <TopNav />
  <div class="content">
    <aside>边栏</aside>
    <main>内容区域</main>
  </div>
</template>