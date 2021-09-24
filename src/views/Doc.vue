<script lang="ts">
import TopNav from '../components/TopNav.vue'
import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
  components: {
    TopNav
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const hideAside = (e: MouseEvent | TouchEvent) => {
      const clientWidth = document.documentElement.clientWidth
      const nodeName = (e.target as Node).nodeName
      if (asideVisible && nodeName === 'LI' && clientWidth <= 700) {
        asideVisible.value = false
      }
    }
    return { asideVisible, hideAside }
  }
})
</script>

<template>
  <div class="layout">
    <TopNav :show-aside-icon="true" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol @click="hideAside">
          <router-link to="/doc/button">
            <li>Button 组件</li>
          </router-link>
          <router-link to="/doc/switch">
            <li>Switch 组件</li>
          </router-link>
          <router-link to="/doc/dialog">
            <li>Dialog 组件</li>
          </router-link>
          <router-link to="/doc/tabs">
            <li>Tabs 组件</li>
          </router-link>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  position: relative;
  flex: 1;
}

aside {
  background: lightblue;
  width: 200px;
  padding: 16px;
  z-index: 10;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    li {
      padding: 4px 0;
    }
  }
}

main {
  flex: 1;
  padding: 20px;

  :deep(section) {
    + section {
      margin-top: 20px;
    }

    > .demo {
      padding: 20px;
      border: 1px solid #dcdfe6;
      margin-top: 10px;
    }
  }
}

@media (max-width: 700px) {
  aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
}
</style>