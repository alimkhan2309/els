<script setup>
import AnimateOnScroll from '../components/AnimateOnScroll.vue'
import FeatureItem from '../components/FeatureItem.vue'
import featuresData from '@/data/features.json'
const features = featuresData
</script>

<template>
  <section class="about-section" id="about">
    <!-- <AnimateOnScroll> </AnimateOnScroll> -->
    <div class="container">
      <AnimateOnScroll>
        <div class="text-header">
          <h1>WITH ABSOLUTE PRECISION,</h1>
          <h1>UNLOCK YOUR FLAWLESS SELF</h1>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div class="text-description">
          <p>
            Our advanced approach to medical aesthetics combines cutting-edge clinical technology
            with
          </p>
          <p>bespoke skin and body protocols, delivered in an ultra-premium environment</p>
          <p>dedicated to elevating your confidence and inner vitality.</p>
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
@use '@/styles/variables' as *;
.about-section {
  gap: 133px;
  background-color: $dark;
  .container {
    max-width: 908px;
    justify-content: center;
  }
  .text-header {
    color: $champaign;
    text-transform: none;
  }
  .text-description {
    color: $off-white;
    animation: fadeInUp 0.6s ease forwards;
  }
  .features-strip {
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
}
</style>
