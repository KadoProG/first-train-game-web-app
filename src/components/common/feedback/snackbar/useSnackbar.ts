import { SnackbarContext } from '@/components/common/feedback/snackbar/snackbarContext';
import React from 'react';

export const useSnackbar = () => React.useContext(SnackbarContext);
