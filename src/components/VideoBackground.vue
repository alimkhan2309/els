<template>
  <div class="video-background-container">
    <!-- The native video element acts as the background layer -->
    <video autoplay loop muted playsinline class="background-video" preload="metadata">
      <source :src="`${baseUrl}video/background-video.mp4`" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay slot to place any content (text, buttons, forms) on top -->
    <div class="video-content-overlay">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const baseUrl = import.meta.env.BASE_URL // Ensures correct path resolution in production
</script>

<style scoped>
.video-background-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height to match your section needs */
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Forces the video to cover the container without stretching */
  transform: translate(-50%, -50%);
  z-index: -1; /* Pushes the video behind your overlay text */
}

.video-content-overlay {
  position: relative;
  z-index: 1; /* Places content safely above the video */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
