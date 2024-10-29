import React from 'react';

interface SnackbarContextType {
  showSnackbar: (args: { message: string; type: AlertColor }) => void;
}

export const SnackbarContext = React.createContext<SnackbarContextType>({
  showSnackbar: () => {}, // ダミー関数
});
