import { createRoot } from 'react-dom/client';
import { setBaseUrl, setAuthTokenGetter } from '@workspace/api-client-react';
import App from './App';
import './index.css';

// In production (Netlify), VITE_API_URL is set to the Render backend URL.
// In development (Replit), it's empty so relative /api/... paths work via the proxy.
setBaseUrl(import.meta.env.VITE_API_URL || '');

// Inject the stored JWT as a Bearer token for every API request
setAuthTokenGetter(() => localStorage.getItem('token'));

createRoot(document.getElementById('root')!).render(<App />);
