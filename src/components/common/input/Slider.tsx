import styles from '@/components/common/input/Slider.module.scss';
import React from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

export type SliderProps<T extends FieldValues> = UseControllerProps<T> & {
  label?: string;
  /** フォーム上の名前 */
  name: string;
  /** プレースホルダー */
  placeholder?: string;
  /** 必須項目にするか */
  required?: boolean;
  /** デザインの追記 */
  style?: React.CSSProperties;
  /** ロード時フォームフォーカス */
  autoFocus?: boolean;
  /** フィールドフォーカス解除時の動作 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** フィールドが有効か否か */
  isActiveFocus?: boolean;
  /**min */
  min?: number;
  /**max */
  max?: number;
  /**ラベルオプション */
  labelOptions?: {
    value: number;
    label: string;
  }[];
};

export const Slider = <T extends FieldValues>(props: SliderProps<T>) => {
  const min = React.useMemo(() => props.min ?? 0, [props.min]);
  const max = React.useMemo(() => props.max ?? 100, [props.max]);

  const ref = React.useRef<HTMLInputElement>(null);

  const { field, fieldState } = useController<T>({
    name: props.name,
    control: props.control,
    rules: {
      ...props.rules,
      required: props.required ? '入力必須の項目です' : undefined,
    },
  });

  return (
    <div className={styles.container} style={props.style}>
      {props.label && (
        <div>
          <label htmlFor={props.name}>{props.label}</label>
          {props.required && <span className={styles.required}>*</span>}
        </div>
      )}
      <input
        id={props.name}
        {...field}
        ref={ref}
        placeholder={props.placeholder}
        disabled={props.disabled}
        type="range"
        autoFocus={props.autoFocus}
        className={`${styles.Input} ${fieldState.error ? styles.InputError : ''}`}
        onBlur={props.onBlur}
        min={min}
        max={max}
      />
      {props.labelOptions?.map((option) => (
        <span
          key={option.value}
          className={styles.labelOption}
          style={{
            position: 'absolute',
            left: `${((option.value - min) / (max - min)) * 100}%`,
            top: -10,
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
          }}
        >
          {option.label}
        </span>
      ))}
      {fieldState.error && <p className={styles.errorText}>{fieldState.error.message}</p>}
    </div>
  );
};
