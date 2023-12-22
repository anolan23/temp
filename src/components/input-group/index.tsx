import { ReactNode } from 'react';
import styles from './index.module.scss';

interface InputGroupProps {
  htmlFor: string;
  labelText: string;
  children: ReactNode;
}

export function InputGroup({ htmlFor, labelText, children }: InputGroupProps) {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={htmlFor}>
        {labelText}
      </label>
      {children}
    </div>
  );
}
