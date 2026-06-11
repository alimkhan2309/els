<template>
  <section
    :class="['service-section', `service-section--img-${service.imagePosition}`, imageTypeClass]"
    :style="{ '--mobile-object-position': service.mobileObjectPosition || 'center' }"
    ref="sectionRef"
    :id="`service-${service.id}`"
  >
    <!-- Image side -->
    <div class="image">
      <img
        class="service-image"
        :src="`${baseUrl}${service.image}`"
        :alt="service.category"
        ref="imageRef"
      />
    </div>
    <!-- Content side -->
    <div class="content">
      <div class="inner">
        <!-- Tag label -->
        <AnimateOnScroll>
          <span class="tag-label">{{ service.category }}</span>
        </AnimateOnScroll>
        <!-- Title -->
        <AnimateOnScroll>
          <div class="text-header">
            <h1>{{ service.titleLine1 }}</h1>
            <h1>{{ service.titleLine2 }}</h1>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div class="wrapper">
            <!-- Description -->
            <p class="description">{{ service.description }}</p>

            <!-- Divider -->
            <div class="divider" />

            <!-- Services list -->
            <ul class="list">
              <li v-for="(item, index) in service.services" :key="index" class="list-item">
                <span class="list-name">{{ item.name }}</span>
                <span class="list-price">{{ item.price }}</span>
              </li>
            </ul>

            <!-- Optional note -->
            <p v-if="service.note" class="note">{{ service.note }}</p>

            <!-- CTA -->
            <a :href="service.ctaLink" class="cta" @click.prevent="handleOnClick">
              <button>{{ service.ctaLabel }}</button>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimateOnScroll from '../components/AnimateOnScroll.vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
  // Kept for backwards compatibility with the parent component.
  // Layout is now fully data-driven via service.imagePosition / service.imageFit,
  // so these are no longer used internally.
  index: {
    type: Number,
    required: false,
    default: 0,
  },
  isLast: {
    type: Boolean,
    required: false,
    default: false,
  },
})

// 'contain'  -> framed product / portrait shots that already sit on a dark
//               background (e.g. laser.png, sculpting.png). These are sized
//               down and placed on the image side instead of stretching to
//               fill the whole section.
// 'cover'    -> full-width photos that should fill the section as a backdrop.
// Default is 'cover' unless the service explicitly opts into 'contain'.
const imageTypeClass = computed(() => {
  return props.service.imageFit === 'contain'
    ? 'service-section--contain'
    : 'service-section--cover'
})

const baseUrl = import.meta.env.BASE_URL // Ensures correct path resolution in production
const sectionRef = ref(null)
const imageRef = ref(null)
let ctx = null

// onMounted(() => {
//   ctx = gsap.context(() => {
//     gsap.fromTo(
//       imageRef.value,
//       { scale: 1 },
//       {
//         scale: 1.12,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: sectionRef.value,
//           start: 'top bottom',
//           end: 'bottom top',
//           scrub: true,
//         },
//       },
//     )
//   })
// })

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})

function handleOnClick() {
  const formSection = document.getElementById('contact')
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.service-section {
  display: flex;
  position: relative;
  justify-content: flex-end;
  flex-direction: row;
  min-height: 620px;
  height: 99vh;
  padding: 0;
  overflow: hidden;
  background: $dark;

  &--img-left {
    justify-content: flex-start;
  }

  /* ------------------------------------------------------------ */
  /* Image layer                                                    */
  /* ------------------------------------------------------------ */
  .image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;

    img {
      display: block;
      transition: transform 0.4s ease;
      height: 100%;
      width: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
  }

  /* Full-bleed photos: cover the whole section, single smooth gradient
     fading toward the content side so text stays legible. */
  &--cover .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &--cover .image::after,
  &--contain .image::after {
    background: linear-gradient(
      to left,
      rgba($dark, 1) 0%,
      rgba($dark, 0.99) 32%,
      rgba($dark, 0.85) 42%,
      rgba($dark, 0.5) 78%,
      rgba($dark, 0.4) 100%
    );
  }

  &--cover.service-section--img-left .image::after,
  &--contain.service-section--img-left .image::after {
    background: linear-gradient(
      to right,
      rgba($dark, 0) 0%,
      rgba($dark, 0.1) 35%,
      rgba($dark, 0.5) 67%,
      rgba($dark, 0.85) 100%
    );
  }

  /* Framed product / portrait shots that already sit on a dark background.
     The image box itself is restricted to one half of the section (the
     "image side") and the <img> is always centered inside that box via
     flex - regardless of the image's natural size or aspect ratio. This
     means no per-image padding/positioning tweaks are ever needed. */
  &--contain .image {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    width: 50%;

    img {
      // width: auto;
      // height: auto;
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0;
    }
  }

  // imagePosition: "right" -> content is on the right, image sits in the
  // left half of the section.
  &--contain.service-section--img-right .image {
    left: 0;
    right: auto;
  }

  // imagePosition: "left" -> content is on the left, image sits in the
  // right half of the section.
  &--contain.service-section--img-left .image {
    right: 0;
    left: auto;
  }

  /* ------------------------------------------------------------ */
  /* Content layer                                                  */
  /* ------------------------------------------------------------ */

  .content {
    position: relative;
    z-index: 1;
    flex: 0 0 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
  }

  .inner {
    width: 100%;
    max-width: 559px;
    padding: 41px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .description {
      font-weight: 300;
      line-height: 1.7;
      color: $text-color;
      max-width: 400px;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background: $rose;
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
    font-size: 13px;
    font-weight: 300;
    color: $text-color;
  }

  .list-name {
    color: $text-color;
  }

  .list-price {
    white-space: nowrap;
    font-size: 12px;
    color: $off-white;
  }

  .note {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
    font-style: italic;
    line-height: 1.5;
  }

  .cta {
    display: inline-block;
    text-decoration: none;

    button {
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 18px 32px;
      font-weight: 500;
    }
  }

  /* ------------------------------------------------------------ */
  /* Mobile - image becomes a flat-overlaid background banner       */
  /* ------------------------------------------------------------ */
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 80vh;
    // min-height: unset;

    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      // height: 420px;
      display: block; // reset the flex-centering used for --contain on desktop
      padding: 0;

      img {
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: none;
        // object-fit: cover;
        object-position: var(--mobile-object-position, center);
      }
    }

    // Flat overlay everywhere on mobile - no gradient, regardless of image
    // type or imagePosition. All four selectors are listed explicitly so
    // each one matches (or beats) the specificity of its desktop gradient
    // counterpart - otherwise the higher-specificity img-left gradient
    // rules above would still win on mobile.
    &--cover .image::after,
    &--contain .image::after,
    &--cover.service-section--img-left .image::after,
    &--contain.service-section--img-left .image::after {
      content: '';
      background: rgba($dark, 0.75);
    }

    .content {
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 60px 24px 40px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    .inner {
      padding: 32px 24px;
      max-width: 900px;
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    height: fit-content;
    padding: 40px 0;
    .inner {
      padding: 24px 16px;
      align-items: center;

      .text-header {
        width: 100%;
        align-items: center;

        h1 {
          width: 100%;
          font-size: clamp(26px, 8vw, 46px);
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 400px) {
    .inner {
      padding: 24px 12px;
    }
  }
}

.reveal-wrapper:not(.reveal-active) {
  .wrapper {
    opacity: 0;
    transform: translateY(30px);
  }
}

.reveal-active {
  .text-header {
    max-width: 340px;
    h1 {
      font-size: clamp(36px, 5vw, 56px);
    }
  }
  .wrapper {
    width: 100%;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    animation: fadeInSlideUp 0.6s ease forwards;
  }
}
</style>
