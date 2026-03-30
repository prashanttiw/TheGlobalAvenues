import { API_BASE_URL } from './apiClient';

const DEFAULT_FORMS_API_BASE_URL = 'https://admin.theglobalavenues.com/api';
export const CONTACT_FORM_RECIPIENT_EMAIL = 'connect@theglobalavenues.com';

const deriveFormsApiBaseUrl = () => {
  const configured = import.meta.env.VITE_FORMS_API_BASE_URL;
  if (configured && String(configured).trim()) {
    return String(configured).trim().replace(/\/+$/, '');
  }

  const rawApiBase = String(API_BASE_URL || '').trim();
  if (!rawApiBase) return DEFAULT_FORMS_API_BASE_URL;

  if (rawApiBase.includes('/public/api?route=')) {
    return rawApiBase.replace('/public/api?route=', '/api').replace(/\/+$/, '');
  }

  if (rawApiBase.includes('?route=')) {
    const baseWithoutQuery = rawApiBase.split('?route=')[0].replace(/\/+$/, '');
    if (baseWithoutQuery.endsWith('/public/api')) {
      return `${baseWithoutQuery.replace(/\/public\/api$/, '')}/api`;
    }
    if (baseWithoutQuery.endsWith('/api')) {
      return baseWithoutQuery;
    }
    return `${baseWithoutQuery}/api`;
  }

  return rawApiBase.replace(/\/+$/, '');
};

const FORMS_API_BASE_URL = deriveFormsApiBaseUrl();

const normalizeText = (value) => {
  if (value === undefined || value === null) return '';
  return String(value).trim();
};

export const submitContactForm = async ({
  formName = 'Contact Form',
  source = '',
  fields = {},
}) => {
  const sourcePath = normalizeText(source);
  const endpoint = sourcePath === '/collaborate' ? 'contact-collaborate' : 'contact-home';

  const normalizedFields = Object.entries(fields).reduce((accumulator, [key, value]) => {
    const normalizedValue = normalizeText(value);
    if (!normalizedValue) return accumulator;
    accumulator[String(key).trim().toLowerCase()] = normalizedValue;
    return accumulator;
  }, {});

  const payload = {
    name: normalizedFields.name || normalizedFields.fullname || normalizedFields.full_name || '',
    email: normalizedFields.email || '',
    phone: normalizedFields.phone || '',
    subject: normalizedFields.subject || formName,
    message: normalizedFields.message || '',
    source_page: sourcePath || (typeof window !== 'undefined' ? window.location.pathname : ''),
    meta: normalizedFields,
  };

  const response = await fetch(`${FORMS_API_BASE_URL}/forms/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let responseData = null;
  try {
    responseData = await response.json();
  } catch (error) {
    responseData = null;
  }

  const isSuccess = Boolean(response.ok && (responseData?.status === true || responseData?.success === true));
  if (!isSuccess) {
    throw new Error(responseData?.message || 'Unable to submit form right now.');
  }

  return responseData;
};

export const subscribeToNews = async ({ email, source = '/news-blog' }) => {
  const normalizedEmail = normalizeText(email).toLowerCase();
  if (!normalizedEmail) {
    throw new Error('Email is required');
  }

  const response = await fetch(`${FORMS_API_BASE_URL}/forms/subscribe-news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: normalizedEmail,
      source_page: normalizeText(source) || '/news-blog',
    }),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload || payload.status !== true) {
    throw new Error(payload?.message || 'Unable to subscribe right now.');
  }

  return payload;
};
