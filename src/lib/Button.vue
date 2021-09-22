<script lang="ts">
import { defineComponent } from 'vue'

const types = ['primary', 'success', 'warning', 'danger']
const sizes = ['big', 'small']

export default defineComponent({
  props: {
    type: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { type, size } = props
    const classes = {
      [`mp-button-${type}`]: types.includes(type),
      [`mp-button-${size}`]: sizes.includes(size),
    }
    return {
      classes
    }
  }
})
</script>

<template>
  <button class="mp-button" :class="classes" :disabled="disabled || loading">
    <span class="mp-button-loading" v-if="loading"></span>
    <slot></slot>
  </button>
</template>

<style lang="scss">
.mp-button {
  display: inline-block;
  padding: 10px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  color: #606266;
  background-color: #fff;
  font-size: 14px;
  line-height: 1;
  transition: all 250ms;

  &.mp-button-primary {
    color: #fff;
    border-color: #409eff;
    background-color: #409eff;
  }
  &.mp-button-success {
    color: #fff;
    border-color: #67c23a;
    background-color: #67c23a;
  }
  &.mp-button-warning {
    color: #fff;
    border-color: #e6a23c;
    background-color: #e6a23c;
  }
  &.mp-button-danger {
    color: #fff;
    border-color: #f56c6c;
    background-color: #f56c6c;
  }

  &.mp-button-big {
    padding: 12px 18px;
    font-size: 16px;
  }
  &.mp-button-small {
    padding: 8px 14px;
    font-size: 12px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;

    &.mp-button-primary {
      color: #fff;
      border-color: #66b1ff;
      background-color: #66b1ff;
    }
    &.mp-button-success {
      color: #fff;
      border-color: #85ce61;
      background-color: #85ce61;
    }
    &.mp-button-warning {
      color: #fff;
      border-color: #ebb563;
      background-color: #ebb563;
    }
    &.mp-button-danger {
      color: #fff;
      border-color: #f78989;
      background-color: #f78989;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: #c0c4cc;
    border-color: #e4e7ed;
    background-color: #fff;

    &.mp-button-primary {
      color: #fff;
      border-color: #a0cfff;
      background-color: #a0cfff;
    }
    &.mp-button-success {
      color: #fff;
      border-color: #b3e19d;
      background-color: #b3e19d;
    }
    &.mp-button-warning {
      color: #fff;
      border-color: #f3d19e;
      background-color: #f3d19e;
    }
    &.mp-button-danger {
      color: #fff;
      border-color: #fab6b6;
      background-color: #fab6b6;
    }
  }

  > .mp-button-loading {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 8px;
    border-color: #c0c4cc #c0c4cc #c0c4cc transparent;
    border-style: solid;
    border-width: 2px;
    margin-right: 4px;
    vertical-align: bottom;
    animation: mp-button-spin 1s infinite linear;
  }

  &.mp-button-primary,
  &.mp-button-success,
  &.mp-button-warning,
  &.mp-button-danger {
    > .mp-button-loading {
      border-color: #fff #fff #fff transparent;
    }
  }
}

@keyframes mp-button-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>