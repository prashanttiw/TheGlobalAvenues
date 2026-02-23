# API Integration Guide

## Overview

The application is built with a service layer architecture that makes it easy to connect to a backend API. Currently, it uses mock data, but you can seamlessly switch to real API calls.

---

## 📍 Service Layer Location

**File:** `src/services/portfolioService.js`

This file handles all portfolio data operations. It's structured to be backend-agnostic, meaning you can switch from mock data to API calls without changing component logic.

---

## 🔄 Current Architecture

### Service Layer Pattern

```
Component (uses service)
    ↓
Service Layer (portfolioService.js)
    ↓
Data Source (currently mock data)
    ↓
Return to Component
```

---

## 🛠️ Migrating to Backend API

### Step 1: Install HTTP Client (Optional)

```bash
npm install axios
# or use built-in fetch (no installation needed)
```

### Step 2: Update Service Methods

#### Before (Mock Data):
```javascript
export const getPortfolios = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfoliosData);
    }, 300);
  });
};
```

#### After (Real API):
```javascript
export const getPortfolios = async () => {
  try {
    const response = await fetch('/api/portfolios');
    if (!response.ok) throw new Error('Failed to fetch portfolios');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
```

---

## 📋 Example API Endpoints

### 1. Get All Portfolios
```
GET /api/portfolios

Response:
{
  success: true,
  data: [
    {
      id: 1,
      studentName: "John Doe",
      university: "MIT",
      country: "USA",
      ...
    }
  ]
}
```

### 2. Get Single Portfolio
```
GET /api/portfolios/:id

Response:
{
  success: true,
  data: {
    id: 1,
    studentName: "John Doe",
    ...
  }
}
```

### 3. Search Portfolios
```
GET /api/portfolios/search?q=john&country=USA

Response:
{
  success: true,
  data: [...]
}
```

### 4. Filter by Category
```
GET /api/portfolios/category/:category

Response:
{
  success: true,
  data: [...]
}
```

### 5. Get Featured Portfolios
```
GET /api/portfolios/featured?limit=3

Response:
{
  success: true,
  data: [...]
}
```

---

## 🔌 Complete API Integration Example

### Using Fetch API:

```javascript
// src/services/portfolioService.js

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Get all portfolios
export const getPortfolios = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    throw error;
  }
};

// Get single portfolio
export const getPortfolioById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    throw error;
  }
};

// Search portfolios
export const searchPortfolios = async (query) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/portfolios/search?q=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error searching portfolios:', error);
    return [];
  }
};

// Get portfolios by category
export const getPortfoliosByCategory = async (category) => {
  try {
    if (category === 'all') {
      return getPortfolios();
    }
    const response = await fetch(
      `${API_BASE_URL}/portfolios/category/${encodeURIComponent(category)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};

// Get featured portfolios
export const getFeaturedPortfolios = async (limit = 3) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/portfolios/featured?limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching featured:', error);
    throw error;
  }
};

// Get categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return ['all', ...result.data];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['all'];
  }
};
```

### Using Axios:

```javascript
import axios from 'axios';

const API_CLIENT = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

export const getPortfolios = async () => {
  const { data } = await API_CLIENT.get('/portfolios');
  return data.data;
};

export const getPortfolioById = async (id) => {
  const { data } = await API_CLIENT.get(`/portfolios/${id}`);
  return data.data;
};

export const searchPortfolios = async (query) => {
  try {
    const { data } = await API_CLIENT.get('/portfolios/search', {
      params: { q: query }
    });
    return data.data;
  } catch {
    return [];
  }
};

// ... rest of methods
```

---

## 📦 Environment Configuration

### Create `.env` file in root:

```
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENVIRONMENT=development
```

### For Production:

```
REACT_APP_API_URL=https://api.theglobalavenues.com
REACT_APP_ENVIRONMENT=production
```

---

## 🔐 Error Handling

### Recommended Error Handling Pattern:

```javascript
export const getPortfolios = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios`);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Unknown error occurred');
    }
    
    return result.data;
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    // Return empty array or null based on your needs
    throw error;
  }
};
```

---

## 🎯 Using Services in Components

### Example: PortfolioPage Component

```jsx
import { getPortfolios, getCategories } from '../services/portfolioService';

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await getPortfolios();
        const cats = await getCategories();
        
        setPortfolios(data);
        setCategories(cats);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // ... rest of component
}
```

---

## 🔄 Adding New Service Methods

When you need to add new API endpoints:

1. **Create method in `portfolioService.js`:**
```javascript
export const getUniversities = async () => {
  const response = await fetch(`${API_BASE_URL}/universities`);
  const result = await response.json();
  return result.data;
};
```

2. **Use in component:**
```javascript
const [universities, setUniversities] = useState([]);

useEffect(() => {
  getUniversities().then(setUniversities);
}, []);
```

---

## 📊 Data Transformation

Sometimes API responses need transformation:

```javascript
export const getPortfolios = async () => {
  const response = await fetch(`${API_BASE_URL}/portfolios`);
  const result = await response.json();
  
  // Transform API response to match component expectations
  return result.data.map(item => ({
    ...item,
    image: `${API_BASE_URL}${item.imageUrl}`, // Fix image URLs
    tags: item.tags.split(',').map(t => t.trim()), // Parse tags
  }));
};
```

---

## 🧪 Testing Services

### Mock Service for Testing:

```javascript
// src/services/__mocks__/portfolioService.js

export const getPortfolios = jest.fn(() =>
  Promise.resolve([
    { id: 1, studentName: 'John', university: 'MIT' }
  ])
);

// ... mock other methods
```

---

## 📈 Performance Optimization

### Implement Caching:

```javascript
const cache = new Map();

export const getPortfolios = async (useCache = true) => {
  if (useCache && cache.has('portfolios')) {
    return cache.get('portfolios');
  }
  
  const response = await fetch(`${API_BASE_URL}/portfolios`);
  const result = await response.json();
  const data = result.data;
  
  cache.set('portfolios', data);
  return data;
};
```

### Implement Pagination:

```javascript
export const getPortfolios = async (page = 1, limit = 10) => {
  const response = await fetch(
    `${API_BASE_URL}/portfolios?page=${page}&limit=${limit}`
  );
  const result = await response.json();
  return {
    data: result.data,
    total: result.total,
    pages: result.pages,
    currentPage: page,
  };
};
```

---

## 🔐 Authentication

When your API requires authentication:

```javascript
const API_CLIENT = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add token to every request
API_CLIENT.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors
API_CLIENT.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

---

## ✅ Checklist for API Integration

- [ ] Set up backend API endpoints
- [ ] Update `portfolioService.js` with real API calls
- [ ] Add environment variables
- [ ] Implement error handling
- [ ] Add loading states in components
- [ ] Test all endpoints
- [ ] Implement caching strategy
- [ ] Add request/response logging
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Load test the API
- [ ] Implement pagination
- [ ] Add authentication if needed

---

## 📞 Support

For issues with API integration, check:
1. Browser console for errors
2. Network tab in DevTools
3. API endpoint responses
4. Environment variables configuration

---

Last Updated: 2024
