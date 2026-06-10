<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const subscribeNewsletter = ref(false)
const acceptPrivacy = ref(false)
const isSubmitting = ref(false)
const submitAction = ref('appointment')
const statusMessage = ref('')
const submitCooldown = ref(false)

const endpoint = '/els/api/contact'

const sanitizeText = (value) => value.toString().trim().slice(0, 255)

const isSecureContext = () => {
  return (
    window.location.protocol === 'https:' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  )
}

const validateEmail = (value) => /\S+@\S+\.\S+/.test(value)
const validatePhone = (value) => /^\+?[0-9\s\-()]{7,20}$/.test(value)

const validateForm = () => {
  if (
    !firstName.value.trim() ||
    !lastName.value.trim() ||
    !email.value.trim() ||
    !phone.value.trim()
  ) {
    statusMessage.value = 'Please complete all required fields.'
    return false
  }
  if (!validateEmail(email.value.trim())) {
    statusMessage.value = 'Please enter a valid email address.'
    return false
  }
  if (!validatePhone(phone.value.trim())) {
    statusMessage.value = 'Please enter a valid phone number.'
    return false
  }
  if (!acceptPrivacy.value) {
    statusMessage.value = 'You must accept the Privacy Policy before submitting.'
    return false
  }
  if (!isSecureContext()) {
    statusMessage.value = 'Please use a secure HTTPS connection to submit this form.'
    return false
  }
  return true
}

const submitForm = async (event) => {
  event.preventDefault()

  if (isSubmitting.value || submitCooldown.value) {
    return
  }

  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  statusMessage.value = 'Sending request…'

  const payload = {
    firstName: sanitizeText(firstName.value),
    lastName: sanitizeText(lastName.value),
    email: sanitizeText(email.value).toLowerCase(),
    phone: sanitizeText(phone.value),
    subscribeNewsletter: subscribeNewsletter.value,
    acceptPrivacy: acceptPrivacy.value,
    action: submitAction.value,
    source: 'website-contact-form',
  }

  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error('Server rejected submission')
    }

    statusMessage.value =
      submitAction.value === 'newsletter'
        ? 'Your newsletter subscription request has been sent.'
        : 'Your appointment request has been sent.'
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    phone.value = ''
    subscribeNewsletter.value = false
    acceptPrivacy.value = false
  } catch (error) {
    statusMessage.value =
      'Unable to submit the form right now. Please try again later or contact us directly.'
    console.error('Contact form submission failed:', error)
  } finally {
    isSubmitting.value = false
    submitCooldown.value = true
    setTimeout(() => {
      submitCooldown.value = false
    }, 10000)
  }
}
</script>

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

      <form @submit="submitForm" novalidate>
        <div class="name">
          <input
            type="text"
            v-model="firstName"
            placeholder="First Name"
            autocomplete="given-name"
            required
          />
          <input
            type="text"
            v-model="lastName"
            placeholder="Last Name"
            autocomplete="family-name"
            required
          />
        </div>

        <input type="email" v-model="email" placeholder="Email" autocomplete="email" required />

        <input type="tel" v-model="phone" placeholder="Phone Number" autocomplete="tel" required />

        <label class="checkbox-field">
          <input type="checkbox" v-model="subscribeNewsletter" />
          <span> Yes, I want to receive newsletters, offers, and service updates by email. </span>
        </label>

        <label class="checkbox-field privacy-field">
          <input type="checkbox" v-model="acceptPrivacy" required />
          <span>
            I have read and accept the
            <a href="/els/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </span>
        </label>

        <p class="consent-note">
          By clicking the button below, you consent to our company contacting you at the email
          address provided for appointment-related communications. If you check the newsletter box,
          you also consent to receive marketing updates and promotions by email. You can unsubscribe
          at any time.
        </p>

        <div class="button-wrap">
          <button
            type="submit"
            class="contact-button"
            :disabled="isSubmitting || submitCooldown"
            @click="submitAction = 'appointment'"
          >
            MAKE A RESERVATION REQUEST
          </button>

          <a
            href="https://wa.me/41793200000"
            target="_blank"
            rel="noopener noreferrer"
            class="whatsapp-button"
          >
            WHATSAPP US
          </a>
        </div>

        <p class="status-message" v-if="statusMessage">{{ statusMessage }}</p>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
.contact-section {
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
    gap: 24px;
    width: 100%;
  }
  .name {
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  input[type='text'],
  input[type='email'],
  input[type='tel'] {
    padding: 15px 20px;
    border: 1px solid $muted-color;
    font-size: 16px;
    width: 100%;
    background-color: $body-bg;
    color: $text-color;
  }
  .checkbox-field {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 14px;
    color: $muted-color;
    input {
      margin-top: 4px;
      width: 18px;
      height: 18px;
    }
    a {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: $rose;
      }
    }
  }
  .privacy-field {
    max-width: 100%;
  }
  .consent-note {
    color: $muted-color;
    font-size: 14px;
    line-height: 1.6;
    max-width: 100%;
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
  .whatsapp-button,
  .newsletter-button,
  .contact-button {
    border-radius: 5px;
    font-size: 16px;
    padding: 15px 30px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
  .whatsapp-button {
    background-color: #25d366;
    color: white;
    border: none;
    &:hover {
      background-color: #1da851;
    }
  }
  .newsletter-button {
    background-color: $rose;
    color: white;
    border: none;
    &:hover {
      background-color: rgba($rose, 0.25);
      border: 1px solid $rose;
    }
  }
  .contact-button {
    background-color: transparent;
    border: 1px solid $muted-color;
    color: inherit;
    &:hover {
      background-color: $rose;
      color: white;
    }
  }
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .status-message {
    color: $muted-color;
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
