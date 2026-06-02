<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content">
        <p class="address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=clinic+%23109+Bahawan+Plaza+building+Sheikh+Zayed+Rd+Umm+Al+Sheif+Dubai+United+Arab+Emirates"
            target="_blank"
            rel="noopener"
            >clinic #109, Bahawan Plaza building - Sheikh Zayed Rd - Umm Al Sheif - Dubai - United
            Arab Emirates</a
          >
        </p>
        <p class="copy">
          &copy; <span>{{ year }}</span> ELS Premier Polyclinic
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.footer-section {
  width: 100%;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.03);

  .container {
    max-width: $max-content-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-content {
    text-align: center;
    color: $muted-color;

    .address {
      margin-bottom: 8px;

      a {
        color: $text-color;
        text-decoration: underline;
        font-weight: 500;
      }
    }

    .copy {
      font-size: 14px;
      color: $muted-color;
    }
  }
}
</style>
