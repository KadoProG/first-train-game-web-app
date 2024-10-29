import { Button } from '@/components/common/button/Button';

export const SelectPage: React.FC = () => {
  const actionTypes = ['飯', '運動', '風呂', 'シャワーのみ', '趣味の時間', '勉強', '寝る'];

  return (
    <div>
      <h1>Select Page</h1>
      <p>11:13</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 120 }}>
        {actionTypes.map((actionType) => (
          <Button key={actionType} href="/2">
            {actionType}
          </Button>
        ))}
      </div>
    </div>
  );
};
