<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.45 }, // Triggers when 15% of the element is visible
)
</script>

<template>
  <div ref="target" :class="{ 'reveal-active': isVisible }" class="reveal-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.reveal-wrapper {
  width: 100%;
}
</style>
