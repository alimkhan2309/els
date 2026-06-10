<template>
  <nav class="navbar" :class="{ 'navbar--hidden': isHidden }">
    <router-link to="/" class="navbar__logo" @click="menuOpen = false">
      <img src="/img/test2.png" alt="Clinique La Prairie Logo" />
    </router-link>
    <ul class="navbar__links" :class="{ active: menuOpen }">
      <li><a href="#about" @click="menuOpen = false">About</a></li>
      <li><a href="#services" @click="menuOpen = false">Services</a></li>
      <li><a href="#contact" @click="menuOpen = false">Contact</a></li>
      <!-- <li><router-link to="/privacy" @click="menuOpen = false">Privacy Policy</router-link></li>
      <li>
        <router-link to="/terms" @click="menuOpen = false">Terms &amp; Conditions</router-link>
      </li>
      <li><router-link to="/disclaimer" @click="menuOpen = false">Disclaimer</router-link></li> -->
    </ul>
    <button class="navbar__burger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isHidden = ref(false)
const lastScrollY = ref(0)

const handleScroll = () => {
  const current = window.pageYOffset || document.documentElement.scrollTop
  if (menuOpen.value) {
    isHidden.value = false
    lastScrollY.value = current
    return
  }
  if (current > lastScrollY.value && current > 100) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }
  lastScrollY.value = current
}

onMounted(() => {
  lastScrollY.value = window.pageYOffset || 0
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="scss" scoped>
@use '@/styles/variables' as *;

.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 50px 40px;
  height: auto;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(246, 214, 179, 0.05);
  background-color: $night;
  // backdrop-filter: blur(10px);
  transition: transform 0.28s ease;

  @media (max-width: 768px) {
    padding: 30px 30px;
    height: 120px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
    background-color: $night;
  }

  &__logo img {
    fill: white;
    height: 60px;
    width: auto;

    @media (max-width: 480px) {
      height: 32px;
    }
  }

  &__logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1001;

    @media (max-width: 480px) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__links {
    list-style: none;
    display: flex;
    gap: 30px;
    align-items: center;
    text-transform: uppercase;

    @media (max-width: 768px) {
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      flex-direction: column;
      gap: 0;
      background-color: $body-bg;
      backdrop-filter: blur(10px);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      padding: 0;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin-top: 40px;

      &.active {
        max-height: 300px;
        padding: 20px 0;
      }

      li {
        width: 100%;
        padding: 32px 0;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        &:last-child {
          border-bottom: none;
        }
      }
    }
    @media (max-width: 480px) {
      margin-top: 20px;
      background-color: $night;
    }

    li a {
      text-decoration: none;
      color: $text-color;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: $primary-color;
      }
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    border: none;
    background: none;
    padding: 5px;

    @media (max-width: 768px) {
      display: flex;
    }

    span {
      width: 25px;
      height: 3px;
      background-color: $text-color;
      margin: 5px 0;
      transition: all 0.3s ease;
      border-radius: 2px;
    }

    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  }
}

.navbar--hidden {
  transform: translateY(-100%);
}
</style>
