<script setup>
import AnimateOnScroll from '../components/AnimateOnScroll.vue'
import VideoBackground from '../components/VideoBackground.vue'
</script>

<template>
  <VideoBackground>
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
              Performed by licensed specialists to deliver flawless, natural results in an
              environment of absolute safety and luxury.
            </p>
          </div>
        </AnimateOnScroll>
        <button>BOOK YOUR PROGRAM</button>
      </div>

      <div class="line-text-container">
        <p>Slow time, capture energy, preserve youth</p>
      </div>
    </section>
  </VideoBackground>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
.hero-section {
  position: relative;
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

  .line-text-container {
    position: absolute; // Pulls out of flow
    bottom: 3rem; // Adjust as needed
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; /* Ensures the whole group stays centered */

    p {
      /* Text Styles */
      font-family: sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 12px;

      /* The Fix: Lock the width */
      // flex: 0 1 800px;
      flex-grow: 0;
      flex-shrink: 0;
      // width: 332px;
    }

    &::before {
      content: '';
      background-color: $champaign;
      height: 0.5px;
      margin-right: 20px;
      width: 100%; /* Take up remaining space to the left */
    }

    &::after {
      content: '';
      background-color: $champaign;
      height: 0.5px;
      margin-left: 20px;
      width: 100%; /* Take up remaining space to the left */
    }

    @media (max-width: 800px) {
      p {
        flex-grow: 1; /* Allow text to grow and take up available space */
        flex-shrink: 1; /* Allow text to shrink if necessary */
        width: auto; /* Let the width be determined by content and flex properties */
      }
      &::before,
      &::after {
        margin: 0 10px;
      }
    }
  }

  // Mobile adjustments
  @media (max-width: 400px) {
  }
}
</style>
