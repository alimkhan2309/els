<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <span class="tag-label">ARRANGE A BOOKING</span>
      <AnimateOnScroll>
        <div class="text-header">
          <h1>PLEASE SEND US YOUR DETAILS</h1>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div class="text-description">
          <p>
            Connect with our concierges via WhatsApp or submit a request to explore our digital menu
            and schedule your consultation.
          </p>
        </div>
      </AnimateOnScroll>

      <form>
        <div class="name">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
      </form>

      <div class="button-wrap">
        <button class="contact-button">MAKE A RESERVATION REQUEST</button>
        <a href="https://wa.me/41793200000" target="_blank">
          <button class="whatsapp-button">WHATSAPP US</button>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
.contact-section {
  // height: fit-content;
  gap: 133px;
  .container {
    max-width: 908px;
    justify-content: center;
  }
  .text-description {
    animation: fadeInUp 0.6s ease forwards;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
  }
  .name {
    display: flex;
    gap: 20px;
    width: 100%;
  }
  input {
    padding: 15px 20px;
    border: 1px solid $muted-color;
    font-size: 16px;
    width: 100%;
    background-color: $body-bg;
  }
  .button-wrap {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  .whatsapp-button {
    background-color: #25d366;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #1da851;
    }
  }
  .contact-button {
    background-color: transparent;
    border: 1px solid $muted-color;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    &:hover {
      background-color: #007bff;
      color: white;
    }
  }
}
</style>
