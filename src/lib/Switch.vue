<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    checked: {
      type: Boolean,
      required: false
    }
  },
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit('update:checked', !props.checked)
    }
    return {
      toggleSwitch,
    };
  },
});
</script>

<template>
  <button class="mp-switch" :class="{ checked }" @click="toggleSwitch">
    <span></span>
  </button>
</template>

<style lang="scss">
@use "sass:math";

$btnH: 22px;
$spanH: $btnH - 4px;

.mp-switch {
  width: $btnH * 2;
  height: $btnH;
  border: none;
  border-radius: math.div($btnH, 2);
  position: relative;
  background-color: #bfbfbf;
  cursor: pointer;

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