<template>
  <button class="mp-button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.mp-button {
  display: inline-block;
  padding: 12px 20px;
  border-radius: 4px;
  background-color: #409eff;
  border: 1px solid #409eff;
  color: #fff;
  transition: all 250ms;

  &:hover,
  &:focus {
    background-color: #66b1ff;
    border-color: #66b1ff;
    cursor: pointer;
    outline: none;
  }
}
</style>