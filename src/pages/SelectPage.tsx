import { Button } from '@/components/common/button/Button';
import { UserStatusDialog } from '@/components/domains/UserStatusDialog';
import { actionOptions } from '@/const/masterData';
import React from 'react';

export const SelectPage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div>
      <h1>Select Page</h1>
      <Button onClick={() => setIsOpen(true)}>ユーザーステータス</Button>
      <p>11:13</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 120 }}>
        {actionOptions.map((actionOption) => (
          <Button key={actionOption.name} href={`/2?action=${actionOption.name}`}>
            {actionOption.name}
          </Button>
        ))}
      </div>
      <UserStatusDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
