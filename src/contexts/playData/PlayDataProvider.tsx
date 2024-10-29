import { PlayDataContext } from '@/contexts/playData/playDataContext';
import { UserStatus } from '@/const';
import React from 'react';
import { defaultUserStatus } from '@/const/masterData';
import { useForm } from 'react-hook-form';

interface Props {
  children: React.ReactNode;
}

export const PlayDataProvider: React.FC<Props> = (props) => {
  const { control, watch } = useForm<UserStatus>({
    defaultValues: defaultUserStatus,
  });

  const userStatus = watch();

  const value = React.useMemo(() => ({ control, userStatus }), [control, userStatus]);

  return <PlayDataContext.Provider value={value}>{props.children}</PlayDataContext.Provider>;
};
