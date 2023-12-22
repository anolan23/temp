import styles from './index.module.scss';

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      className={styles.root}
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
      {...props}
    />
  );
}
