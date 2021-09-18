<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
const toggleSwitch = () => {
  checked.value = !checked.value
}
</script>

<template>
  <button :class="{ checked }" @click="toggleSwitch">
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
@use "sass:math";

$btnH: 22px;
$spanH: $btnH - 4px;

button {
  width: $btnH * 2;
  height: $btnH;
  border: none;
  border-radius: math.div($btnH, 2);
  position: relative;
  background-color: #bfbfbf;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &.checked {
    background-color: #1890ff;

    > span {
      left: $btnH * 2 - $spanH - 2;
    }
  }

  > span {
    width: $spanH;
    height: $spanH;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 250ms;
  }
}
</style>