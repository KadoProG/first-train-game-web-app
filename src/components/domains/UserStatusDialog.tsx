import { DialogBody } from '@/components/common/feedback/DialogBody';
import { DialogContainer } from '@/components/common/feedback/DialogContainer';
import { DialogContent } from '@/components/common/feedback/DialogContent';
import { DialogHeader } from '@/components/common/feedback/DialogHeader';
import { FormContainer } from '@/components/common/feedback/FormContainer';
import { Slider } from '@/components/common/input/Slider';
import { usePlayData } from '@/contexts/playData/playDataContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const UserStatusDialog: React.FC<Props> = (props) => {
  const { control } = usePlayData();

  return (
    <DialogContainer isOpen={props.isOpen} onClose={props.onClose}>
      <DialogContent style={{ maxWidth: 400 }}>
        <DialogHeader title="こんにちは" />
        <DialogBody>
          <FormContainer label="空腹・満腹">
            <Slider
              control={control}
              name="hungerFullnessLevel"
              labelOptions={[
                { value: 0, label: '空' },
                { value: 100, label: '満' },
              ]}
            />
          </FormContainer>
          <FormContainer label="自律神経">
            <Slider
              control={control}
              name="autonomicNervousLevel"
              labelOptions={[
                { value: 0, label: '副' },
                { value: 100, label: '交' },
              ]}
            />
          </FormContainer>
          <FormContainer label="ストレス">
            <Slider
              control={control}
              name="stressLevel"
              labelOptions={[
                { value: 0, label: '低' },
                { value: 100, label: '高' },
              ]}
            />
          </FormContainer>
        </DialogBody>
      </DialogContent>
    </DialogContainer>
  );
};
