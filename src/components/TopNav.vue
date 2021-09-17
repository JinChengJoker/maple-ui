<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAsideVisible = () => {
      if (asideVisible) {
        asideVisible.value = !asideVisible.value
      }
    }
    return {
      toggleAsideVisible
    }
  }
}
</script>

<template>
  <nav>
    <div class="logo" @click="toggleAsideVisible">LOGO</div>
    <ul>
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > ul {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>