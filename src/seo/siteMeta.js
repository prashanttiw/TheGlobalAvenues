export const SITE_NAME = 'The Global Avenues';
export const SITE_URL = String(import.meta.env.VITE_SITE_URL || 'https://theglobalavenues.com').replace(
  /\/+$/,
  ''
);

export const DEFAULT_TITLE = 'International Education Partnerships and Recruitment';
export const DEFAULT_DESCRIPTION =
  'The Global Avenues helps institutions grow through market-entry strategy, admissions support, and trusted global education partnerships.';
export const DEFAULT_IMAGE = '/videos/hero-poster.jpg';

const ABSOLUTE_URL_PATTERN = /^https?:\/\//i;

export const stripHtml = (value) => String(value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

export const trimDescription = (value, maxLength = 160) => {
  const text = stripHtml(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}...`;
};

export const buildPageTitle = (title) => {
  const cleanTitle = String(title || '').trim();
  if (!cleanTitle) return `${SITE_NAME} | ${DEFAULT_TITLE}`;
  const includesBrand = cleanTitle.toLowerCase().includes(SITE_NAME.toLowerCase());
  const withBrand = includesBrand ? cleanTitle : `${cleanTitle} | ${SITE_NAME}`;
  if (withBrand.length <= 60) return withBrand;
  if (cleanTitle.length <= 60) return cleanTitle;
  return `${cleanTitle.slice(0, 59).trim()}...`;
};

export const toAbsoluteUrl = (value) => {
  const raw = String(value || '').trim();
  if (!raw) return SITE_URL;
  if (ABSOLUTE_URL_PATTERN.test(raw)) return raw;
  return `${SITE_URL}${raw.startsWith('/') ? raw : `/${raw}`}`;
};
