import { SnackbarProvider } from '@/components/common/feedback/snackbar/SnackbarProvider';
import { MyRouter } from '@/routes/Router';
import React from 'react';

export const App: React.FC = () => (
  <SnackbarProvider>
    <MyRouter />
  </SnackbarProvider>
);
