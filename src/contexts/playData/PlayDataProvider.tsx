import { PlayDataContext } from '@/contexts/playData/playDataContext';
import { UserStatus } from '@/const';
import React from 'react';
import { defaultUserStatus } from '@/const/masterData';

interface Props {
  children: React.ReactNode;
}

export const PlayDataProvider: React.FC<Props> = (props) => {
  const [userStatus] = React.useState<UserStatus>(defaultUserStatus);

  const value = React.useMemo(() => ({ userStatus }), [userStatus]);

  return <PlayDataContext.Provider value={value}>{props.children}</PlayDataContext.Provider>;
};
