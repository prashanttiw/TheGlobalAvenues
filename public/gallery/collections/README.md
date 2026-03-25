Gallery Storage Pattern

Use this hierarchy for all new gallery assets:

`public/gallery/collections/<category-slug>/<collection-slug>/<image-file>`

Examples:

- `public/gallery/collections/partner-universities/european-partners/icn-business-school.jpg`
- `public/gallery/collections/campus-highlights/campus-showcase/iau-rak-campus.webp`
- `public/gallery/collections/counselling/counselling-events-2026/counselling-cover-consultation.jpg`

Mapping source:

- Update `src/data/galleryCollectionsData.js`
- Add collection `title` for display name
- Add `category` and `categorySlug` for grouping
- Add ordered `photos` array to control thumbnail and gallery order
- Put the preferred cover image as the first item in the `photos` array
- Prefer naming files with lowercase slugs, for example `counselling-icn-guidance-session.jpg`
