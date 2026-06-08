<script setup>
import AnimateOnScroll from '../components/AnimateOnScroll.vue'
</script>

<template>
  <section class="hero-section" id="home">
    <div class="container">
      <AnimateOnScroll>
        <div class="label-wrapper">
          <!-- <p class="tag">ELS PREMIER POLYCLINIC</p> -->
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div class="text-header">
          <h1>ADVANCED MEDICAL AESTHETICS</h1>
          <h1>& CLINICAL REJUVENATION</h1>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div class="text-description">
          <p>
            A curated portfolio of world-class aesthetic treatments, advanced laser technologies,
            and medical-grade wellness therapies.
          </p>
          <p>
            Performed by licensed specialists to deliver flawless, natural results in an environment
            of absolute safety and luxury.
          </p>
        </div>
      </AnimateOnScroll>
      <button>BOOK YOUR PROGRAM</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  height: 89vh;
  // background: url('../assets/images/hero-bg.png') no-repeat center center;
  // background-size: cover;
  // height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  .container {
    .text-header {
      text-transform: uppercase;
    }
    .label-wrapper {
      display: flex;
      justify-content: center;
      .tag {
        text-transform: uppercase;
        font-weight: 500;
        text-transform: uppercase;
        font-weight: 500;
        color: white;
        letter-spacing: 0.18em;
        animation: fadeInSlideDown 0.7s ease-in-out both;
        animation-delay: 0.25s;
      }
    }
  }

  // Mobile adjustments
  @media (max-width: 400px) {
  }
}
</style>
