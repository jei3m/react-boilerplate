import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import Router from './router';

import { TanstackProvider } from '@/context/tanstack-context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackProvider>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackProvider>
  </StrictMode>
);
