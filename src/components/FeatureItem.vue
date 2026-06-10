<template>
  <AnimateOnScroll>
    <div
      class="feature-item"
      :style="{
        transitionDelay: `${index * 0.25}s`,
      }"
    >
      <div class="feature-item__icon-wrap">
        <img :src="`${baseUrl}img/${icon}`" :alt="text" class="feature-item__icon" />
      </div>
      <p class="feature-item__text">{{ text }}</p>
    </div>
  </AnimateOnScroll>
</template>

<script setup>
import AnimateOnScroll from './AnimateOnScroll.vue'

const baseUrl = import.meta.env.BASE_URL

defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: false,
    default: 0,
  },
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
// ─── Tokens ────────────────────────────────────────────────

$icon-size: 80px;
$text-leading: 1.65;
$transition:
  opacity 0.3s ease,
  transform 0.3s ease;

// ─── Component ─────────────────────────────────────────────
.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1 1 0;
  min-width: 160px;
  // max-width: 220px;
  max-width: 280px;
  gap: 28px;
  transition: $transition;

  &:hover {
    .feature-item__icon {
      opacity: 1;
      transform: translateY(-4px);
    }
  }

  // ── Icon wrapper ─────────────────────────────────────────
  &__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $icon-size + 16px; // consistent vertical rhythm across different icon heights
    drop-shadow: 0px 4px 6px $rose;
  }

  &__icon {
    width: auto;
    height: $icon-size;
    object-fit: contain;
    // filter: brightness(0) invert(1); // forces white tint on any PNG
    // opacity: 0.9;
    transition: $transition;
  }

  // ── Text ─────────────────────────────────────────────────
}

.reveal-wrapper:not(.reveal-active) {
  .feature-item {
    opacity: 0;
    transform: translateY(30px);
  }
}
.reveal-active {
  .feature-item {
    animation: fadeInUp 0.6s ease forwards;
  }
}
</style>
