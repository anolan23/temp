import { ChangeEventHandler } from 'react';
import styles from './index.module.scss';

interface CheckboxProps {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <label className={styles.root}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
