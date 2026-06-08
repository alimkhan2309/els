<script setup>
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import ServiceSection from '@/sections/ServiceSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import services from '@/data/services.json'
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ServiceSection v-for="service in services" :key="service.id" :service="service" />
  <ContactSection />
</template>

<style lang="scss">
@use '../styles/global.scss';
</style>
