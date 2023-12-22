import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import clsx from 'clsx';

export type HistoryItemDefinition = {
  title: string;
  timestamp: string;
  status: string;
};

interface ItemProps {
  item: HistoryItemDefinition;
}

export function Item({ item }: ItemProps) {
  const navigate = useNavigate();
  const { title, timestamp, status } = item;
  const date = new Date(timestamp);

  const dateString = date.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  return (
    <div className={styles.root} onClick={() => navigate(`${timestamp}`)}>
      <span className={styles.title}>{title}</span>
      <div className={styles.info}>
        <span className={styles.calendar}>event_note</span>
        <span className={styles.date}>{dateString}</span>
        <div
          className={clsx(styles.status, {
            [styles.cancelled]: status === 'cancelled',
          })}
        >
          <span
            className={clsx(styles.text, {
              [styles.cancelled]: status === 'cancelled',
            })}
          >
            {status}
          </span>
        </div>
        <span className="material-icons history-item__info__right">
          chevron_right
        </span>
      </div>
    </div>
  );
}
