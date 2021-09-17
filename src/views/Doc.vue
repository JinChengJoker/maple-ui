<script lang="ts">
import TopNav from '../components/TopNav.vue'
import { defineComponent, provide, ref } from 'vue'

export default defineComponent({
  components: {
    TopNav
  },
  setup() {
    let clientWidth = document.documentElement.clientWidth
    const asideVisible = ref(clientWidth >= 700 ? true : false)
    const hideAside = () => {
      if (clientWidth <= 700) {
        asideVisible.value = false
      }
    }
    window.addEventListener('resize', () => {
      clientWidth = document.documentElement.clientWidth
      if (clientWidth > 700) {
        asideVisible.value = true
      } else {
        asideVisible.value = false
      }
    })
    provide('asideVisible', asideVisible)
    return { asideVisible, hideAside }
  }
})
</script>

<template>
  <div class="layout">
    <TopNav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch" @click="hideAside">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
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

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }
}

main {
  flex: 1;
  background-color: skyblue;
}

@media (max-width: 700px) {
  aside {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>