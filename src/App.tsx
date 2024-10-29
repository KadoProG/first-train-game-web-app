import { SnackbarProvider } from '@/components/common/feedback/snackbar/SnackbarProvider';
import { PlayDataProvider } from '@/contexts/playData/PlayDataProvider';
import { MyRouter } from '@/routes/Router';
import React from 'react';

export const App: React.FC = () => (
  <SnackbarProvider>
    <PlayDataProvider>
      <MyRouter />
    </PlayDataProvider>
  </SnackbarProvider>
);
