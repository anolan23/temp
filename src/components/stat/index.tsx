import clsx from 'clsx';
import styles from './index.module.scss';

interface StatProps {
  title: string;
  percent: number;
  color?: string;
}

export function Stat({ title, percent, color }: StatProps) {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.percent}>{`${(percent * 100).toFixed(0)}%`}</div>
      </div>
      <div className={styles.container}>
        <div
          className={clsx(styles.bar, color && styles[color])}
          style={{ width: `${percent * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
