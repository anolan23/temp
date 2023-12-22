import { ReactNode } from 'react';
import styles from './index.module.scss';

interface PopupProps {
  show?: boolean;
  children: ReactNode;
}

export function Popup({ show, children }: PopupProps) {
  if (!show) return null;

  return (
    <div className={styles.root}>
      <div className={styles.window}>
        <span className={styles.close}>close</span>
        {children}
      </div>
    </div>
  );
}
