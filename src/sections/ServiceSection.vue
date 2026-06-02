<template>
  <section
    class="service-section"
    :class="`service-section--img-${service.imagePosition}`"
    ref="sectionRef"
  >
    <!-- Image side -->
    <div class="image">
      <img class="service-image" :src="service.image" :alt="service.category" ref="imageRef" />
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimateOnScroll from '../components/AnimateOnScroll.vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
})

const sectionRef = ref(null)
const imageRef = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    // Starts at scale 0.8 and scrubs up to scale 1 as you scroll
    gsap.fromTo(
      imageRef.value,
      { scale: 0.8 },
      {
        scale: 1,
        ease: 'none', // Important for smooth scrolling math
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top bottom', // Start when top of section hits bottom of viewport
          end: 'bottom top', // End when bottom of section hits top of viewport
          scrub: true, // Binds the animation directly to the scrollbar
        },
      },
    )
  })
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert() // Cleans up GSAP instances to prevent memory leaks
})

// Smooth scroll to contact form when CTA is clicked
function handleOnClick() {
  // redirect to #form
  const formSection = document.getElementById('contact')
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style lang="scss" scoped>
@use '@/styles/variables' as *;

// ─── Layout ────────────────────────────────────────────────
.service-section {
  display: flex;
  position: relative;
  justify-content: flex-end; // DEFAULT: Content on the RIGHT
  flex-direction: row;
  height: 100vh;
  min-height: 620px;
  padding: 0;
  overflow: hidden;
  background: $body-bg;

  // ALTERNATE LAYOUT: When class is .service-section--img-left
  &--img-left {
    justify-content: flex-start; // FIXED TYPO: Content moves to the LEFT
  }

  // ── Image ───────────────────────────────────────────────
  .image {
    position: absolute; // Pulled out of flow to act as a full background
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      filter: grayscale(90%);
      display: block;
    }

    // Dark gradient toward content side to make text legible
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      // Default (Content on Right): Dark on the right side
      background: linear-gradient(to left, rgba(2, 3, 3, 0.75) 0%, transparent 60%);
    }
  }

  // ── Content wrapper ─────────────────────────────────────
  .content {
    position: relative; // Tells the browser to respect z-index layering
    z-index: 1; // Places text safely on top of the background image
    flex: 0 0 50%; // Restricts content to exactly half the screen width
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
  }

  // ── Dashed inner box (matches screenshot) ──────────────
  .inner {
    width: 100%;
    max-width: 559px;
    padding: 41px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .wrapper {
    // width: 100%;
    // padding: 40px;
    // display: flex;
    // flex-direction: column;
    // gap: 32px;
  }

  // ── Description ─────────────────────────────────────────
  .description {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    max-width: 400px;
  }

  // ── Divider ─────────────────────────────────────────────
  .divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
  }

  // ── Service list ────────────────────────────────────────
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
    color: rgba(255, 255, 255, 0.85);
  }

  .list-price {
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.55);
    font-size: 12px;
  }

  // ── Note ────────────────────────────────────────────────
  .note {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
    font-style: italic;
    line-height: 1.5;
  }

  // ── CTA ─────────────────────────────────────────────────
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

  // ── Responsive ──────────────────────────────────────────
  @media (max-width: 1000px) {
    flex-direction: column !important;
    height: auto;
    min-height: unset;

    .image {
      position: relative; // Return to normal flow so image stacks above text on mobile
      flex: 0 0 300px;
      width: 100%;

      &::after {
        background: linear-gradient(to bottom, transparent 50%, rgba(2, 3, 3, 0.8) 100%) !important;
      }
    }

    .content {
      flex: none;
      width: 100%;
      padding: 40px 24px;
    }

    .inner {
      padding: 32px 24px;
      max-width: 800px;
    }
  }
}

.service-section--img-left {
  justify-content: flex-start;
}

.service-section--img-left .image::after {
  background: linear-gradient(to right, rgba(2, 3, 3, 0.75) 0%, transparent 60%);
}

// ─── Animation (inherits from global .reveal-active) ─
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
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    animation: fadeInSlideUp 0.6s ease forwards;
    // animation-delay: 0.3s;
  }
}
</style>
