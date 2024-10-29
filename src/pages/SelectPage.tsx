import { Button } from '@/components/common/button/Button';
import { actionOptions } from '@/const/masterData';

export const SelectPage: React.FC = () => (
  <div>
    <h1>Select Page</h1>
    <p>11:13</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 120 }}>
      {actionOptions.map((actionOption) => (
        <Button key={actionOption.name} href={`/2?action=${actionOption.name}`}>
          {actionOption.name}
        </Button>
      ))}
    </div>
  </div>
);
