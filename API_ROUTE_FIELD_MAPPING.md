# API Route Field Mapping

Last updated: March 20, 2026
Scope completed in this phase:
1. GalleryApi
2. HomeApi
3. BlogApi (list + detail)
4. OfferingApi (list + detail with safe fallback)
5. PortfolioApi (list)
6. UniversityApi (list + detail)
7. SettingsApi
8. TestimonialApi

Base endpoint:
`https://admin.theglobalavenues.com/public/api?route=`

---

## 1) Central API Client Layer

Primary files:
- `src/services/apiClient.js`
- `src/services/contentApi.js`

Key behavior:
- Builds route URLs for both styles:
  - path style: `?route=university/slug`
  - query style: `?route=blog&post=slug`
- Throws on invalid/non-JSON payloads (important when PHP returns fatal HTML)
- Keeps all pages fallback-safe via page-level local data defaults

---

## 2) Route-by-Route Mapping

### A) `gallery`

Endpoint:
- `GET ?route=gallery`

Backend source (FileZilla):
- `GalleryApi.php`

Frontend service + consumers:
- `src/services/contentApi.js` -> `getGallery()`
- `src/pages/GalleryPage.jsx`

Field mapping:
- `category` -> `categoryLabel`
- `category` -> normalized `categoryKey`
- `images[].image` -> `item.image` (via `resolveMediaUrl`)
- `images[].caption` -> `item.title`

Fallback behavior:
- Empty/fail response -> uses `FALLBACK_GALLERY_RESPONSE`
- Invalid entries filtered
- Duplicate image URLs per category deduped
- UI still renders cards silently with fallback content

---

### B) `home`

Endpoint:
- `GET ?route=home`

Backend source:
- `HomeApi.php`

Frontend service + consumers:
- `src/services/contentApi.js` -> `getHomeContent()`
- `src/context/HomeContentContext.jsx`
- `src/components/home/HeroSection.jsx`
- `src/components/Services.jsx`

Field mapping:
- `hero[]` -> hero badge/title lines/description/cta labels+urls (when provided)
- `why_choose[]` -> end-to-end support cards on homepage
- `solutions[]` -> service cards on homepage

Fallback behavior:
- Empty/fail response -> existing hardcoded homepage content remains active
- No API/fallback warning messages are shown to users

---

### C) `blog` list + detail

Endpoints:
- `GET ?route=blog`
- `GET ?route=blog&post=<slug>` (confirmed from `BlogApi.php`)

Backend source:
- `BlogApi.php`

Frontend service + consumers:
- `src/services/contentApi.js`
  - `getBlogList()`
  - `getBlogDetail(slug)` (tries query style first)
- `src/pages/NewsVlogPage.jsx`
- `src/pages/NewsDetailPage.jsx`

Field mapping (list):
- `id` -> `id`
- `slug` -> `slug`
- `title` -> `title`
- `featured_image` -> `image/thumbnail`
- `author` -> `author`
- `created_at` -> `date`
- `read_time` -> `readTime`
- `category` -> `category`

Field mapping (detail):
- `data.post.*` -> detail article model
- `data.related[]` -> related cards

Fallback behavior:
- If list empty/fail -> uses `src/data/newsData.js`
- If detail missing/fail -> fallback post by slug/id from `newsData`

---

### D) `offerings` list + detail

Endpoints:
- `GET ?route=offerings`
- `GET ?route=offerings/<slug>`

Backend source:
- `OfferingApi.php`

Frontend service + consumers:
- `src/services/contentApi.js`
  - `getOfferings()`
  - `getOfferingDetail(slug)`
- `src/pages/WhatWeOfferPage.jsx`
- `src/pages/EducationProgramPage.jsx`

Field mapping (list):
- `slug` -> program key for tabs
- `title` -> program name
- `description` -> overview
- `countries` -> parsed countries chips/list

Field mapping (detail):
- `offering.duration` -> duration blocks
- `offering.partner_universities` -> institutions metric
- `offering.students_enrolled` -> students metric
- `programs[]` -> per-level enrich when available

Fallback behavior:
- If list/detail empty or fail -> static local datasets remain active

Live backend issue (confirmed March 20, 2026):
- `?route=offerings` currently returns PHP fatal:
  - unknown DB column `duration` in list query
- Frontend remains stable because local fallback content is retained

---

### E) `portfolio` list

Endpoint:
- `GET ?route=portfolio`

Backend source:
- `PortfolioApi.php`

Frontend service + consumers:
- `src/services/contentApi.js` -> `getPortfolioList()`
- `src/services/portfolioService.js` (CMS + local merge)
- Consumers:
  - `src/pages/PortfolioPage.jsx`
  - `src/components/PortfolioDisplay.jsx`
  - `src/components/Header.jsx`
  - `src/pages/UniversitiesPage.jsx`

Field mapping (list):
- `name/title` -> `title`
- `slug` -> `slug`
- `logo/image/featured_image` -> `image`
- `country` -> `country`
- Optional stats fields -> `studentsPlaced`, `programs`, `successRate`

Fallback behavior:
- If API empty/fail -> uses `src/data/portfolioData.js`
- If API has partial fields -> merges over local base by slug

---

### F) `university` list + detail

Endpoints:
- `GET ?route=university`
- `GET ?route=university/<slug>`

Backend source:
- `UniversityApi.php`

Frontend service + consumers:
- `src/services/contentApi.js`
  - `getUniversityList()`
  - `getUniversityDetail(slug)`
- `src/pages/UniversitiesPage.jsx` (list + merge overlay)
- `src/pages/PortfolioDetailPage.jsx` (detail enrichment)

Field mapping (detail):
- `university.name` -> institution title
- `university.logo` -> hero image
- `university.country/city` -> location
- `university.description` -> about block
- `specializations[].title` -> specialization tags
- `benefits[].title` -> highlight cards
- `programs[]` -> program counts/details
- `experiences[]` -> student testimonials cards

Fallback behavior:
- If detail route fails -> local portfolio detail remains rendered
- If list route empty -> page shows portfolio fallback list silently

---

### G) `settings`

Endpoint:
- `GET ?route=settings`

Backend source:
- `SettingsApi.php`

Frontend service + consumers:
- `src/services/contentApi.js` -> `getSettings()`
- `src/context/SettingsContext.jsx` -> `buildSiteConfig()`

Global propagation targets now reading settings-derived config:
- `src/components/Header.jsx` (logo, nav labels)
- `src/components/Footer.jsx` (email/phone/address + social links when provided)
- `src/components/home/HeroSection.jsx` (stats cards)
- `src/pages/AboutPage.jsx` (stats section)
- `src/pages/CollaboratePage.jsx` (email/phone/address/team cards/WhatsApp)
- `src/pages/UniversitiesPage.jsx` (top stats)

Field mapping examples:
- `site_name` -> `siteConfig.company.name`
- `logo / logo_light / logo_dark` -> `siteConfig.company.logo.*`
- `email` -> `siteConfig.contact.email.general`
- `phone` -> `siteConfig.contact.phone[]`
- `address/city/state/country/zipcode` -> `siteConfig.contact.address`
- `facebook/linkedin/instagram/twitter/whatsapp` -> `siteConfig.social.*`

Fallback behavior:
- Empty API fields do not override non-empty defaults from `src/config.js`

---

### H) `testimonials`

Endpoint:
- `GET ?route=testimonials`

Backend source:
- `TestimonialApi.php`

Frontend service + consumers:
- `src/services/contentApi.js` -> `getTestimonials()`
- `src/components/Testimonials.jsx`

Field mapping:
- `name` -> `name`
- `designation/location/city` -> `location`
- `message/review/content` -> `content`
- `photo` -> avatar image
- `rating` -> stars (clamped 1..5)

Fallback behavior:
- Empty/fail response -> uses local fallback testimonials array

---

## 3) Current Live API Snapshot Status (March 20, 2026)

- `settings`: success
- `home`: success (currently all arrays empty)
- `gallery`: success
- `blog`: success (currently empty list)
- `blog&post=test`: "Post not found" (expected)
- `offerings`: backend SQL fatal (known issue)
- `offerings/test`: "Offering not found" (route pattern works)
- `portfolio`: success (currently empty list)
- `university`: success (currently empty list)
- `testimonials`: success (currently empty list)

---

## 4) Quick Verify Commands

```powershell
$urls=@(
  'https://admin.theglobalavenues.com/public/api?route=gallery',
  'https://admin.theglobalavenues.com/public/api?route=home',
  'https://admin.theglobalavenues.com/public/api?route=blog',
  'https://admin.theglobalavenues.com/public/api?route=blog&post=test',
  'https://admin.theglobalavenues.com/public/api?route=offerings',
  'https://admin.theglobalavenues.com/public/api?route=portfolio',
  'https://admin.theglobalavenues.com/public/api?route=university',
  'https://admin.theglobalavenues.com/public/api?route=settings',
  'https://admin.theglobalavenues.com/public/api?route=testimonials'
)
foreach($u in $urls){ "`n=== $u ==="; curl.exe -sS -L --max-time 45 "$u" }
```

And frontend validation:

```bash
npm run lint
npm run build
```
