import { DialogBody } from '@/components/common/feedback/DialogBody';
import { DialogContainer } from '@/components/common/feedback/DialogContainer';
import { DialogContent } from '@/components/common/feedback/DialogContent';
import { DialogHeader } from '@/components/common/feedback/DialogHeader';
import { usePlayData } from '@/contexts/playData/playDataContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const UserStatusDialog: React.FC<Props> = (props) => {
  const { userStatus } = usePlayData();

  return (
    <DialogContainer isOpen={props.isOpen} onClose={props.onClose}>
      <DialogContent>
        <DialogHeader title="こんにちは" />
        <DialogBody>
          <p>あなたのステータスは{userStatus.hungerFullnessLevel}です。</p>
        </DialogBody>
      </DialogContent>
    </DialogContainer>
  );
};
