import { UserStatus } from '@/const';
import React from 'react';
import { Control } from 'react-hook-form';

interface PlayDataContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<UserStatus, any>;
}

export const PlayDataContext = React.createContext<PlayDataContextType>({
  control: {} as Control<UserStatus>,
});

export const usePlayData = () => React.useContext(PlayDataContext);
