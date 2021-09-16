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
  <main>
    <h1>Maple UI</h1>
    <div class="actions">
      <a href="https://github.com/JinChengJoker">GitHub</a>
      <router-link to="/doc">Start</router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>