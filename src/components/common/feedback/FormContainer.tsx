import styles from '@/components/common/feedback/FormContainer.module.scss';
import React from 'react';

interface Props {
  children: React.ReactNode;
  width?: number;
  label: string;
}

export const FormContainer: React.FC<Props> = (props) => (
  <div className={styles.container}>
    <p className={styles.label} style={{ width: props.width ?? 100 }}>
      {props.label}
    </p>
    <div className={styles.formContent}>{props.children}</div>
  </div>
);
