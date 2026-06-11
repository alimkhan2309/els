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
  <ServiceSection
    v-for="(service, i) in services"
    :key="service.id"
    :service="service"
    :index="i"
    :is-last="i === services.length - 1"
  />
  <ContactSection />
</template>

<style lang="scss">
@use '../styles/global.scss';
</style>
