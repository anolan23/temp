import { Navbar } from '../../components/navbar';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

export function DashboardPage() {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.content}>
        <main className={styles.main}>
          <div className={styles.scrollable}>
            <Outlet />
          </div>
        </main>
        <div>sidebar</div>
      </div>
    </div>
  );
}
