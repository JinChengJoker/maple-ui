<script lang="ts">
import { defineComponent, computed } from 'vue'
import Tab from './Tab.vue'

export default defineComponent({
  props: {
    active: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const slots = context.slots.default?.().filter(c => c.type === Tab)
    const tabs = slots?.map(slot => ({
      label: slot.props?.label,
      name: slot.props?.name
    }))
    const tab = computed(() => {
      return slots?.find(tab => tab.props?.name === props.active)
    })
    const clickLabel = (name: string) => {
      context.emit('update:active', name)
    }
    return {
      tabs,
      tab,
      clickLabel
    }
  }
})
</script>

<template>
  <div class="mp-tabs">
    <div class="mp-tabs-labels">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="mp-tabs-label"
        :class="{ 'mp-is-active': active === tab.name }"
        @click="clickLabel(tab.name)"
      >{{ tab.label }}</div>
    </div>
    <div class="mp-tabs-content">
      <component :is="tab" :key="tab?.props?.name"></component>
    </div>
  </div>
</template>

<style lang="scss">
@import "./variables.scss";

.mp-tabs-labels {
  display: flex;
  border-bottom: 2px solid $color-secondary;

  > .mp-tabs-label {
    height: 40px;
    padding: 4px 12px;
    font-weight: 500;
    line-height: 40px;
    cursor: pointer;
  }
}
.mp-tabs-content {
  padding: 20px;
}
</style>