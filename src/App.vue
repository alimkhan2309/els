<script setup>
import Navbar from './components/Navbar.vue'
import WhatsAppIcon from './components/WhatsAppIcon.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ServiceSection from './sections/ServiceSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'
import services from '@/data/services.json'
</script>

<template>
  <Navbar />
  <WhatsAppIcon />
  <HeroSection />
  <AboutSection />
  <ServiceSection v-for="service in services" :key="service.id" :service="service" />
  <ContactSection />
  <FooterSection />
</template>

<style lang="scss">
@use './styles/global.scss';
</style>
