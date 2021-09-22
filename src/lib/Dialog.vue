<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  components: {
    Button
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    onCancel: {
      type: Function,
      required: false
    },
    onOk: {
      type: Function,
      required: false
    }
  }
})
</script>

<template>
  <div class="mp-overlay" v-if="visible">
    <div class="mp-dialog">
      <div class="mp-dialog-header" v-if="title">Dialog 标题</div>
      <div class="mp-dialog-content">
        <slot></slot>
      </div>
      <div class="mp-dialog-footer">
        <Button @click="onCancel">取 消</Button>
        <Button type="primary" @click="onOk">确 定</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mp-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.mp-dialog {
  width: 50%;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  > .mp-dialog-header {
    padding: 20px;
    font-size: 18px;
    color: #303133;
  }

  > .mp-dialog-content {
    padding: 20px;
  }

  > .mp-dialog-footer {
    padding: 20px;
    text-align: right;

    > .mp-button {
      margin-left: 10px;
    }
  }
}
</style>