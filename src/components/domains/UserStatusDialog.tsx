import { DialogBody } from '@/components/common/feedback/DialogBody';
import { DialogContainer } from '@/components/common/feedback/DialogContainer';
import { DialogContent } from '@/components/common/feedback/DialogContent';
import { DialogHeader } from '@/components/common/feedback/DialogHeader';
import { FormContainer } from '@/components/common/feedback/FormContainer';
import { Slider } from '@/components/common/input/Slider';
import { TextField } from '@/components/common/input/TextField';
import { usePlayData } from '@/contexts/playData/playDataContext';
import { useWatch } from 'react-hook-form';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const UserStatusDialog: React.FC<Props> = (props) => {
  const { control } = usePlayData();

  const mealLog = useWatch({ control, name: 'mealLog' });
  const items = useWatch({ control, name: 'items' });

  return (
    <DialogContainer isOpen={props.isOpen} onClose={props.onClose}>
      <DialogContent style={{ maxWidth: 400 }}>
        <DialogHeader title="ステータス" />
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
          <FormContainer label="カフェイン">
            <Slider
              control={control}
              name="caffeineLevel"
              labelOptions={[
                { value: 0, label: '0' },
                { value: 100, label: '1' },
              ]}
              max={400}
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
          <FormContainer label="眠気">
            <Slider
              control={control}
              name="sleepinessLevel"
              labelOptions={[
                { value: 0, label: '無' },
                { value: 100, label: '眠' },
              ]}
            />
          </FormContainer>
          <FormContainer label="筋肉痛">
            <Slider
              control={control}
              name="musclePainLevel"
              labelOptions={[
                { value: 0, label: '無' },
                { value: 70, label: '痛' },
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
          <FormContainer label="自己肯定感">
            <Slider
              control={control}
              name="selfEsteemLevel"
              labelOptions={[
                { value: 0, label: '低' },
                { value: 50, label: '中' },
                { value: 100, label: '高' },
              ]}
            />
          </FormContainer>
          <FormContainer label="所持金">
            <TextField control={control} name="money" type="number" />
          </FormContainer>
          <FormContainer label="集中力">
            <Slider
              control={control}
              name="concentrationLevel"
              labelOptions={[
                { value: 0, label: '低' },
                { value: 100, label: '高' },
              ]}
            />
          </FormContainer>
          <FormContainer label="知識">
            <Slider
              control={control}
              name="studyLevel"
              labelOptions={[
                { value: 0, label: '0' },
                { value: 100, label: '1' },
              ]}
            />
          </FormContainer>
          <FormContainer label="免疫">
            <Slider
              control={control}
              name="immunityLevel"
              labelOptions={[
                { value: 0, label: '不調' },
                { value: 100, label: '健康' },
              ]}
            />
          </FormContainer>
          <FormContainer label="ポイント">
            <TextField control={control} name="point" type="number" />
          </FormContainer>
          <FormContainer label="食事">
            {mealLog.map((meal, index) => (
              <div key={index}>
                <TextField control={control} name={`mealLog.${index}.date`} type="date" />
                {meal.meal.map((_, mealIndex) => (
                  <TextField
                    key={mealIndex}
                    control={control}
                    name={`mealLog.${index}.meal.${mealIndex}`}
                    type="text"
                  />
                ))}
              </div>
            ))}
          </FormContainer>
          <FormContainer label="アイテム">
            {items.map((_, index) => (
              <div key={index}>
                <TextField control={control} name={`items.${index}`} type="text" />
              </div>
            ))}
          </FormContainer>
        </DialogBody>
      </DialogContent>
    </DialogContainer>
  );
};
