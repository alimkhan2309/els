<script setup>
const clinicName = 'ELS Premier Polyclinic'
const location = 'Dubai, UAE'
</script>

<template>
  <section class="legal-page">
    <div class="container">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how {{ clinicName }} ("we", "our") collects, uses, and
        discloses personal information in connection with our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect contact details, inquiry messages, and any information you voluntarily
        provide.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use personal information to respond to inquiries and to operate and improve the website.
      </p>

      <h2>Contact</h2>
      <p>For privacy questions please contact us at the clinic in {{ location }}.</p>
    </div>
  </section>
</template>

<style scoped>
.legal-page {
  padding: 120px 20px;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
