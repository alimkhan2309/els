<script setup>
import AnimateOnScroll from '../components/AnimateOnScroll.vue'
import FeatureItem from '../components/FeatureItem.vue'
import featuresData from '@/data/features.json'
const features = featuresData
</script>

<template>
  <section class="about-section" id="about">
    <AnimateOnScroll>
      <div class="line-text-container">
        <p>Slow time, capture energy, preserve youth</p>
      </div>
    </AnimateOnScroll>
    <div class="container">
      <AnimateOnScroll>
        <div class="text-header">
          <h1>STEP BY STEP,</h1>
          <h1>UNFOLD YOUR POTENTIAL</h1>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div class="text-description">
          <p>Our holistic approach to health and wellness combines evidence-based medicine with</p>
          <p>
            unique wellbeing, nutrition and movement plans, in the highly stimulating environment of
          </p>
          <p>the Swiss Riviera, surrounded by the very best of nature.</p>
        </div>
      </AnimateOnScroll>
    </div>
    <div class="features-strip__container">
      <FeatureItem
        v-for="(feature, index) in features"
        :key="feature.id"
        :icon="feature.icon"
        :text="feature.text"
        :index="index"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-section {
  height: fit-content;
  gap: 133px;
  .container {
    max-width: 908px;
    justify-content: center;
  }
  .text-description {
    animation: fadeInUp 0.6s ease forwards;
  }
  .features-strip {
    background-color: #0a0a0a;
    padding: 60px 40px;

    &__container {
      display: grid;
      //   align-items: flex-start;
      //   justify-content: space-between;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
      max-width: 1400px;
      margin: 0 auto;

      @media (max-width: 1200px) and (min-width: 801px) {
        align-items: center;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;

        // Target the 5th item and move it to the next row
        & > :nth-child(5) {
          grid-column: 2 / span 2; /* Spans across columns 2 and 3 */
          display: flex;
          width: 100%; /* Ensures it matches the width of a single column track */
          justify-self: center;
          align-self: center; /* Vertically centers the item if needed */
          //   max-width: ...;
          :deep(> *) {
            margin-left: auto;
            margin-right: auto;
          }
        }
      }

      @media (max-width: 800px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  }

  .line-text-container {
    display: flex;
    align-items: center;
    justify-content: center; /* Ensures the whole group stays centered */
    width: 100%;
    position: relative;
    margin-bottom: 40px;

    p {
      /* Text Styles */
      font-family: sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;

      /* The Fix: Lock the width */
      // flex: 0 1 800px;
      flex-grow: 0;
      flex-shrink: 0;
      // width: 332px;
    }

    &::before {
      content: '';
      background-color: #fff;
      height: 1px;
      margin-right: 20px;
      width: 100%; /* Take up remaining space to the left */
    }

    &::after {
      content: '';
      background-color: #fff;
      height: 1px;
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
}
</style>
