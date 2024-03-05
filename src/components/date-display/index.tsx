import dayjs from 'dayjs';
import { MaterialIcon } from '../material-icon';
import styles from './index.module.scss';

interface DateDisplayProps {
  dateString: string;
}

export function DateDisplay({ dateString }: DateDisplayProps) {
  const formatted = dayjs(dateString).format('ddd MM/DD/YYYY');
  return (
    <div className={styles.root}>
      <MaterialIcon className={styles.calendar} icon="event_note" />
      <span className={styles.date}>{formatted}</span>
    </div>
  );
}
