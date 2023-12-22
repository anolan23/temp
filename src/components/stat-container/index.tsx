import { ReactNode } from 'react';
import styles from './index.module.scss';

interface StatContainerProps {
  title: string;
  children: ReactNode;
}

export function StatContainer({ title, children }: StatContainerProps) {
  return (
    <section className={styles.root}>
      <span className={styles.title}>{title}</span>
      <div className={styles.stats}>{children}</div>
    </section>
  );
}
