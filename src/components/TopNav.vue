<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
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
})
</script>

<template>
  <nav>
    <div class="asideIcon" @click="toggleAsideVisible"></div>
    <div class="logo">图标</div>
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
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 10;

  .asideIcon {
    display: none;
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  > ul {
    display: flex;

    > li {
      margin: 0 1em;
    }
  }
}
@media (max-width: 700px) {
  nav {
    justify-content: center;

    .asideIcon {
      display: block;
    }

    > ul {
      display: none;
    }
  }
}
</style>