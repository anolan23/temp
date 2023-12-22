import clsx from 'clsx';
import styles from './index.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'transparent' | 'sky-blue' | 'red';
}

export function Button({
  color = 'sky-blue',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(styles.root, styles[color])} {...props}>
      {children}
    </button>
  );
}
