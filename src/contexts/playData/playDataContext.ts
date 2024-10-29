import { UserStatus } from '@/const';
import { defaultUserStatus } from '@/const/masterData';
import React from 'react';

interface PlayDataContextType {
  userStatus: UserStatus;
}

export const PlayDataContext = React.createContext<PlayDataContextType>({
  userStatus: defaultUserStatus,
});

export const usePlayData = () => React.useContext(PlayDataContext);
