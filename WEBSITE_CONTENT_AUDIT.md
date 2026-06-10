# ELS Premier Polyclinic - Website Content Audit

**Date:** June 11, 2026  
**Purpose:** Complete content inventory for copywriter review

---

## Navigation & Header

### Navbar (Fixed at top)

- **Logo:** ELS Premier Polyclinic logo image (`/img/test2.png`)
- **Navigation Links:**
  - About (anchor link to #about)
  - Services (anchor link to #services)
  - Contact (anchor link to #contact)
- **Mobile Menu:** Hamburger menu for responsive design

---

## Home Page Content

### 1. Hero Section (Top of page)

**Section ID:** `#home`

**Background:** Video background with overlay

**Main Heading:**

```
ADVANCED MEDICAL AESTHETICS
& CLINICAL REJUVENATION
```

**Subheading:**

```
A curated portfolio of world-class aesthetic treatments, advanced laser technologies,
and medical-grade wellness therapies.

Performed by licensed specialists to deliver flawless, natural results in an
environment of absolute safety and luxury.
```

**Call-to-Action Button:** "BOOK YOUR PROGRAM"

**Bottom Tagline:**

```
Slow time, capture energy, preserve youth
```

(Centered text with decorative lines on both sides)

---

### 2. About Section

**Section ID:** `#about`

**Background:** Dark background

**Main Heading:**

```
WITH ABSOLUTE PRECISION,
UNLOCK YOUR FLAWLESS SELF
```

**Description:**

```
Our advanced approach to medical aesthetics combines cutting-edge clinical technology
with bespoke skin and body protocols, delivered in an ultra-premium environment
dedicated to elevating your confidence and inner vitality.
```

**Features Grid (5 items displayed horizontally/responsively):**

1. **Icon:** icon-graph.png
   - **Text:** "Proven outcomes utilizing the most sophisticated aesthetic methodologies available today"

2. **Icon:** icon-hourglass.png
   - **Text:** "Timeless beauty protocols that successfully diminish the outward markers of years past"

3. **Icon:** icon-globe.png
   - **Text:** "Deep diagnostic photographic imaging to build completely customized care paths for every individual"

4. **Icon:** icon-wholistic.png
   - **Text:** "A unified methodology blending external dermal enhancements with cellular vitamin infusions"

5. **Icon:** icon-group.png
   - **Text:** "A premier assembly of certified medical practitioners operating under strict government health regulations"

---

### 3. Service Sections (Repeated 6 times)

**Section Class:** `.service-section`

Each service section alternates between left and right image placement.

#### Service 1: Injectables

**Category Label:** "INJECTABLES"

**Main Heading:**

```
Precision
Redefined
```

**Description:**

```
Our expert injectors blend medical science with aesthetic artistry — delivering natural-looking results tailored to your unique facial anatomy.
```

**Services List:**

- Botox (Full Face / 3 zones) — From 1,600 AED
- Botox (Per Unit) — From 45 AED
- Dermal Fillers (Juvederm/Restylane - 1ml) — From 1,600 AED
- Profhilo (Skin Hydration - 2ml) — From 1,500 AED
- Lip Filler (Russian Lips / Natural) — From 1,700 AED

**CTA Button:** "Book Your Program"

**Image Position:** Left

---

#### Service 2: Facial Tech

**Category Label:** "FACIAL TECH"

**Main Heading:**

```
Clinical
Facial Tech
```

**Description:**

```
Our holistic approach to health and wellness combines evidence-based medicine with cutting-edge technology for visible, lasting skin transformation.
```

**Services List:**

- Hydrafacial Platinum (Cleanse + Peel + Hydrate) — From 850 AED
- Oxygeneo 3-in-1 Super Facial — From 650 AED
- Carbon Laser Peel (Hollywood Glow) — From 600 AED
- Morpheus8 (RF Microneedling - Face & Neck) — From 2,500 AED

**CTA Button:** "Book Your Program"

**Image Position:** Right

---

#### Service 3: Laser Hair Removal

**Category Label:** "LASER HAIR REMOVAL"

**Main Heading:**

```
Effortless
Smoothness
```

**Description:**

```
State-of-the-art laser technology delivers permanent hair reduction with precision — safe for all skin types, performed by DHA-licensed specialists.
```

**Services List:**

- Full Body (Female) — From 1,200 AED
- Full Body (Male) — From 1,800 AED
- Bikini & Underarms — From 450 AED
- Full Face — From 350 AED

**Note:** "25% discount on purchase of a 6-session package."

**CTA Button:** "Book Your Program"

**Image Position:** Left

---

#### Service 4: PRP & Wellness

**Category Label:** "PRP & WELLNESS"

**Main Heading:**

```
Restore &
Revitalise
```

**Description:**

```
Harness your body's own regenerative power. Our PRP and IV wellness protocols are designed to rejuvenate from within — skin, scalp, and cellular health.
```

**Services List:**

- PRP Therapy (Face Rejuvenation) — From 900 AED
- PRP for Hair Loss (Scalp) — From 1,100 AED
- IV Vitamin Drips (Energy / Glow / Radiance) — From 600 AED

**CTA Button:** "Book Your Program"

**Image Position:** Right

---

#### Service 5: Body Sculpting

**Category Label:** "BODY SCULPTING"

**Main Heading:**

```
Sculpt Your
Ideal Form
```

**Description:**

```
Non-invasive body contouring powered by electromagnetic muscle stimulation — build, tone, and transform without surgery or downtime.
```

**Services List:**

- Embosculpt (1 session - 30 min) — From 900 AED
- Body Transformation Package (10 sessions) — From 7,500 AED

**CTA Button:** "Book Your Program"

**Image Position:** Left

---

#### Service 6: Consultations

**Category Label:** "CONSULTATIONS"

**Main Heading:**

```
Your Skin,
Understood
```

**Description:**

```
Every great result begins with listening. Meet our DHA-licensed dermatologists for a personalised assessment — supported by 3D Visia skin analysis technology.
```

**Services List:**

- Initial Consultation with Dermatologist — 350 AED\*
- 3D Skin Analysis (Visia) — 250 AED

**Note:** "\*Complimentary when a procedure is performed on the same day."

**CTA Button:** "Book a Consultation"

**Image Position:** Right

---

### 4. Contact Section

**Section ID:** `#contact`

**Category Label:** "ARRANGE A BOOKING"

**Main Heading:**

```
PLEASE SEND US YOUR DETAILS
```

**Description:**

```
Connect with our concierges via WhatsApp or submit a request to explore our digital menu
and schedule your consultation.
```

#### Contact Form Fields:

1. **First Name** - Text input (required)
2. **Last Name** - Text input (required)
3. **Email** - Email input (required)
4. **Phone Number** - Tel input (required)

#### Checkboxes:

1. **Newsletter Opt-in** (optional):
   - "Yes, I want to receive newsletters, offers, and service updates by email."

2. **Privacy Policy Acceptance** (required):
   - "I have read and accept the [Privacy Policy](/els/privacy)."

#### Consent Text:

```
By clicking the button below, you consent to our company contacting you at the email
address provided for appointment-related communications. If you check the newsletter box,
you also consent to receive marketing updates and promotions by email. You can unsubscribe
at any time.
```

#### Call-to-Action Buttons:

1. **"MAKE A RESERVATION REQUEST"** - Primary button (submit)
2. **"WHATSAPP US"** - Secondary link button (opens https://wa.me/41793200000)

#### Form Status Messages (Conditional):

- "Please complete all required fields."
- "Please enter a valid email address."
- "Please enter a valid phone number."
- "You must accept the Privacy Policy before submitting."
- "Please use a secure HTTPS connection to submit this form."
- "Your appointment request has been sent."
- "Unable to submit the form right now. Please try again later or contact us directly."

---

### 5. Footer Section

**Address:**

```
clinic #109, Bahawan Plaza building - Sheikh Zayed Rd - Umm Al Sheif - Dubai - United Arab Emirates
```

(Linked to Google Maps)

**Copyright:**

```
© [Current Year] ELS Premier Polyclinic
```

---

## Legal Pages

### Privacy Policy Page

**Route:** `/els/privacy`

**Heading:** "Privacy Policy"

**Content:**

```
This Privacy Policy explains how ELS Premier Polyclinic ("we", "our") collects, uses, and
discloses personal information in connection with our website.

### Information We Collect
We may collect contact details, inquiry messages, and any information you voluntarily
provide.

### How We Use Information
We use personal information to respond to inquiries and to operate and improve the website.

### Contact
For privacy questions please contact us at the clinic in Dubai, UAE.
```

---

### Terms & Conditions Page

**Route:** `/els/terms`

**Heading:** "Terms & Conditions"

**Content:**

```
These Terms and Conditions govern your use of this website. By accessing the site you agree
to these terms.

### Use of Content
All content is provided for general information and may not be reproduced without
permission.

### Limitation
ELS Premier Polyclinic reserves the right to change content and site features without notice.
```

---

### Disclaimer Page

**Route:** `/els/disclaimer`

**Heading:** "Disclaimer"

**Content:**

```
The information provided on this website is for informational purposes only and is not a
substitute for professional medical advice, diagnosis, or treatment. Always seek the advice
of a qualified healthcare provider with any questions you may have regarding a medical
condition.

Reliance on any information provided on this site is solely at your own risk. If you think
you may have a medical emergency, call your doctor or local emergency services immediately.
```

---

## Content Summary

### Total Sections on Home Page:

1. Hero Section (with tagline)
2. About Section (with 5 feature items)
3. 6 Service Sections (Injectables, Facial Tech, Laser Hair Removal, PRP & Wellness, Body Sculpting, Consultations)
4. Contact Section (with form and buttons)
5. Footer

### Total Service Items Displayed:

- **Injectables:** 5 services
- **Facial Tech:** 4 services
- **Laser Hair Removal:** 4 services + 1 note
- **PRP & Wellness:** 3 services
- **Body Sculpting:** 2 services
- **Consultations:** 2 services + 1 note

**Total:** 20 service items + 2 special notes

### External Links:

- Privacy Policy: `/els/privacy`
- Google Maps: clinic location
- WhatsApp: https://wa.me/41793200000

### Currency:

All prices displayed in AED (United Arab Emirates Dirham)

### Key Brand Terms Used:

- "ADVANCED MEDICAL AESTHETICS & CLINICAL REJUVENATION"
- "DHA-licensed specialists"
- "ultra-premium environment"
- "absolute safety and luxury"
- "world-class aesthetic treatments"
- "cutting-edge clinical technology"

---

## Notes for Copywriter

- All service sections follow a consistent structure: Category → 2-line heading → description → service list → CTA button
- Service images alternate between left and right positions
- The form requires both consent checkboxes for submission
- Newsletter opt-in is separate from appointment request (single button handles both based on checkbox selection)
- All prices are in AED and marked as "From [price]" indicating starting prices
- Special offers/discounts are noted in service sections
- Form includes HTTPS enforcement and rate limiting (10-second cooldown between submissions)
