import { buildApiQueryUrl, buildApiUrl, fetchJson } from './apiClient';

const runWithFallback = async (urls, options) => {
  let lastError = null;

  for (const url of urls) {
    try {
      return await fetchJson(url, options);
    } catch (error) {
      if (error.name === 'AbortError') {
        throw error;
      }
      lastError = error;
    }
  }

  throw lastError || new Error('Request failed');
};

export const getGallery = (options) => fetchJson(buildApiUrl('gallery'), options);

export const getHomeContent = (options) => fetchJson(buildApiUrl('home'), options);

export const getBlogList = (options) => fetchJson(buildApiUrl('blog'), options);

export const getBlogDetail = (slug, options) =>
  runWithFallback(
    [
      buildApiQueryUrl('blog', { post: slug }),
      buildApiUrl('blog', slug),
    ],
    options
  );

export const getSettings = (options) => fetchJson(buildApiUrl('settings'), options);

export const getTestimonials = (options) => fetchJson(buildApiUrl('testimonials'), options);

export const getOfferings = (options) => fetchJson(buildApiUrl('offerings'), options);

export const getOfferingDetail = (slug, options) =>
  runWithFallback([buildApiUrl('offerings', slug)], options);

export const getPortfolioList = (options) => fetchJson(buildApiUrl('portfolio'), options);

export const getUniversityList = (options) => fetchJson(buildApiUrl('university'), options);

export const getUniversityDetail = (slug, options) =>
  fetchJson(buildApiUrl('university', slug), options);
