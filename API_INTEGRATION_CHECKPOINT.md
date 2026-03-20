# API Integration Checkpoint

Last updated: March 20, 2026

## Completed In This Phase

Routes integrated with fallback-safe frontend mapping:
1. `gallery`
2. `home`
3. `blog` (list + detail)
4. `offerings` (list + detail)
5. `portfolio`
6. `university` (list + detail)
7. `settings`
8. `testimonials`

## What Changed (Code)

1. API layer:
- `src/services/apiClient.js` (query route support + non-JSON safety)
- `src/services/contentApi.js` (all route helpers including blog query detail and university list)

2. Route consumers updated:
- `src/pages/GalleryPage.jsx`
- `src/pages/NewsVlogPage.jsx`
- `src/pages/NewsDetailPage.jsx`
- `src/pages/WhatWeOfferPage.jsx`
- `src/pages/EducationProgramPage.jsx`
- `src/services/portfolioService.js`
- `src/components/PortfolioDisplay.jsx`
- `src/pages/UniversitiesPage.jsx`
- `src/components/Header.jsx`
- `src/pages/PortfolioDetailPage.jsx`
- `src/components/Testimonials.jsx`
- `src/context/SettingsContext.jsx`
- `src/components/home/HeroSection.jsx`
- `src/components/Services.jsx`
- `src/context/HomeContentContext.jsx`
- `src/App.jsx`
- `src/components/Footer.jsx`

3. Documentation refreshed:
- `API_ROUTE_FIELD_MAPPING.md`
- `API_INTEGRATION_GUIDE.md`
- `API_INTEGRATION_CHECKPOINT.md`

## Live Backend Notes (Important)

- `offerings` list endpoint is currently broken server-side due SQL column mismatch (`duration`).
- Frontend is protected with fallback content, so UI does not break.
- `home`, `blog`, `portfolio`, `university`, `testimonials` currently return empty arrays in production, but fallback behavior is active.

## Verification Standard

Run before push:

```bash
npm run lint
npm run build
```

Optional live route check:

```powershell
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=settings"
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=home"
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=gallery"
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=blog"
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=offerings"
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=portfolio"
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=university"
curl.exe -sS -L "https://admin.theglobalavenues.com/public/api?route=testimonials"
```

## Resume Prompt

`Resume from API_INTEGRATION_CHECKPOINT.md. Start with backend fixes for offerings/portfolio routes, then integrate remaining APIs (home, partners, and any new routes) with fallback-safe frontend mapping and update all API docs.`
