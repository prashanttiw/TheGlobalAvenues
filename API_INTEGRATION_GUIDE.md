# API Integration Guide

Last updated: March 20, 2026

This guide is the working process for safe React integration with deployed PHP APIs.

---

## 1) Standard Integration Flow (Per Route)

1. Verify live payload from production endpoint.
2. Open backend controller file in FileZilla (`*Api.php`) and confirm actual keys.
3. Add/update route helper in `src/services/contentApi.js`.
4. Map fields in page/component with null-safe normalization.
5. Keep fallback data path so UI never goes blank.
6. Run `npm run lint` and `npm run build`.
7. Update all API docs files.

---

## 2) Frontend API Files You Edit

Core:
- `src/services/apiClient.js`
- `src/services/contentApi.js`

Data orchestration:
- `src/services/portfolioService.js`
- `src/context/SettingsContext.jsx`

Route consumers:
- Home API: `src/context/HomeContentContext.jsx`, `src/components/home/HeroSection.jsx`, `src/components/Services.jsx`
- Gallery: `src/pages/GalleryPage.jsx`
- Blog: `src/pages/NewsVlogPage.jsx`, `src/pages/NewsDetailPage.jsx`
- Offerings: `src/pages/WhatWeOfferPage.jsx`, `src/pages/EducationProgramPage.jsx`
- Portfolio/University: `src/pages/PortfolioPage.jsx`, `src/pages/PortfolioDetailPage.jsx`, `src/pages/UniversitiesPage.jsx`, `src/components/Header.jsx`, `src/components/PortfolioDisplay.jsx`
- Settings-wide: `src/components/Header.jsx`, `src/components/Footer.jsx`, `src/components/home/HeroSection.jsx`, `src/pages/AboutPage.jsx`, `src/pages/CollaboratePage.jsx`, `src/pages/UniversitiesPage.jsx`
- Testimonials: `src/components/Testimonials.jsx`

---

## 3) Routes Covered in Current Phase

Completed and fallback-safe:
1. `settings`
2. `home`
3. `gallery`
4. `blog`
5. `offerings`
6. `portfolio`
7. `university`
8. `testimonials`

Important route format confirmation:
- Blog detail is query-style from backend:
  - `?route=blog&post=<slug>`

---

## 4) Known Backend Issues (Current Live)

1. `offerings` list route currently throws SQL fatal because of `duration` column mismatch.
2. `home`, `blog`, `portfolio`, `university`, `testimonials` are live but currently return empty lists.

Frontend does not break because fallback content paths are active.

---

## 5) FileZilla Backend Files to Open First

Core routing:
- `index.php`

Already used in this phase:
- `SettingsApi.php`
- `HomeApi.php`
- `GalleryApi.php`
- `BlogApi.php`
- `OfferingApi.php`
- `PortfolioApi.php`
- `UniversityApi.php`
- `TestimonialApi.php`

Support files:
- `header.php`
- `response.php`
- `cache.php`

---

## 6) QA Checklist Before Deploy

1. API fetch smoke test with `curl`.
2. Run:

```bash
npm run lint
npm run build
```

3. Manual check in browser:
- Header/footer settings data (logo, email, phone, address)
- Home hero stats
- Gallery cards load with fallback when API is empty/failing
- Blog list/detail routes still render when API has no posts
- Offerings pages render with local content if API fails
- Portfolio/university pages remain navigable with fallback cards/data
- Testimonials section renders fallback carousel when API empty

---

## 7) Documentation Rule

After every route or backend fix, update all three files immediately:
1. `API_ROUTE_FIELD_MAPPING.md`
2. `API_INTEGRATION_CHECKPOINT.md`
3. `API_INTEGRATION_GUIDE.md`
