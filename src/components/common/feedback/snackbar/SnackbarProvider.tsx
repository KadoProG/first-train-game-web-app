import styles from '@/components/common/feedback/snackbar/Snackbar.module.scss';
import { SnackbarContext } from '@/components/common/feedback/snackbar/snackbarContext';
import React from 'react';

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = (props) => {
  const [messageObjects, setMessageObjects] = React.useState<
    { message: string; type: AlertColor; disabled: boolean }[]
  >([]);

  // メッセージを追加する関数
  const showSnackbar = React.useCallback((args: { message: string; type: AlertColor }) => {
    const newMessageObject = { ...args, disabled: false };
    setMessageObjects((prev) => [...prev, newMessageObject]);
  }, []);

  const setDisabledAll = React.useCallback(() => {
    setMessageObjects((prev) => prev.map((v) => ({ ...v, disabled: true })));
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {props.children}
      <div className={styles.snackbar} onClick={setDisabledAll}>
        <div className={styles.snackbar__container}>
          {messageObjects.map((v, i) => (
            <div
              key={i}
              className={`${styles.snackbar__content} ${v.disabled ? styles.force : ''} ${styles[v.type]}`}
            >
              <p>{v.message}</p>
              <span>×</span>
            </div>
          ))}
        </div>
      </div>
    </SnackbarContext.Provider>
  );
};
