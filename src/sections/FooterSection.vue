<template>
  <footer class="clinic-footer" aria-label="Official Corporate Footer">
    <div class="footer-container">
      <div class="footer-info-block">
        <p class="company-legal-name">ELS Premier Polyclinic</p>
        <address class="clinic-address">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            Clinic #109, Bahawan Plaza Building, Sheikh Zayed Road, Umm Al Sheif, Dubai, United Arab
            Emirates
          </a>
        </address>
      </div>

      <div class="footer-regulatory-block">
        <p class="regulatory-text">
          <span>DHA Facility License No: <strong>DHA-XXXXXX-MED</strong></span>
          <span class="divider">|</span>
          <span>DHA Medical Advertisement Permit No: <strong>MOHAP/DHA-XXXX-XXXXXX</strong></span>
        </p>
        <p class="regulatory-disclaimer">
          All medical procedures are performed exclusively by DHA-licensed specialists under sterile
          clinical protocols conforming to Dubai Health Authority standards.
        </p>
      </div>

      <div class="footer-links-block">
        <nav class="legal-navigation" aria-label="Legal Links">
          <a href="/els/privacy">Privacy Policy</a>
          <a href="/els/terms">Terms & Conditions</a>
          <a href="/els/disclaimer">Medical Disclaimer</a>
        </nav>
      </div>

      <div class="footer-copyright-block">
        <p>&copy; 2026 ELS Premier Polyclinic. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.clinic-footer {
  width: 100%;
  height: fit-content;
  padding: 40px 20px;
  background: rgba(35, 12, 17, 0.94);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: $warm-white;

  .footer-container {
    max-width: $max-content-width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    align-items: start;
  }

  .footer-info-block,
  .footer-regulatory-block,
  .footer-links-block,
  .footer-copyright-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .company-legal-name {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $warm-white;
  }

  .clinic-address a {
    color: $champaign;
    text-decoration: underline;
    font-weight: 500;
    line-height: 1.6;
  }

  .footer-regulatory-block {
    .regulatory-text {
      color: $warm-white;
      font-size: 15px;
      line-height: 1.75;
      letter-spacing: 0.01em;
      font-weight: 400;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    .divider {
      color: $champaign;
      opacity: 0.85;
    }

    .regulatory-disclaimer {
      color: $warm-white;
      font-size: 14px;
      line-height: 1.8;
      opacity: 0.92;
      max-width: 100%;
    }
  }

  .legal-navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-items: center;

    a {
      color: $warm-white;
      text-decoration: underline;
      font-size: 14px;
      transition: color 0.2s ease;

      &:hover {
        color: $champaign;
      }
    }
  }

  .footer-copyright-block p {
    color: $muted-color;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    .footer-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
