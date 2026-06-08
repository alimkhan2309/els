<script setup>
const clinicName = 'ELS Premier Polyclinic'
</script>

<template>
  <section class="legal-page">
    <div class="container">
      <h1>Terms & Conditions</h1>
      <p>
        These Terms and Conditions govern your use of this website. By accessing the site you agree
        to these terms.
      </p>

      <h2>Use of Content</h2>
      <p>
        All content is provided for general information and may not be reproduced without
        permission.
      </p>

      <h2>Limitation</h2>
      <p>{{ clinicName }} reserves the right to change content and site features without notice.</p>
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
