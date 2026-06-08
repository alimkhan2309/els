<script setup>
import Navbar from './components/Navbar.vue'
import WhatsAppIcon from './components/WhatsAppIcon.vue'
import FooterSection from './sections/FooterSection.vue'
</script>

<template>
  <Navbar />
  <WhatsAppIcon />
  <router-view />
  <FooterSection />
</template>

<style lang="scss">
@use './styles/global.scss';
</style>
