import { MaterialIcon } from '../material-icon';
import styles from './index.module.scss';

export function Search() {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>
        <MaterialIcon icon="search" />
      </span>
      <input type="text" className={styles.input} placeholder="search items" />
    </div>
  );
}
