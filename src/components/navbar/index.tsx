import { useNavigate } from 'react-router-dom';
import { NavTab } from '../navtab';
import Logo from '../../assets/logo.svg?react';
import styles from './index.module.scss';

export function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <Logo className={styles.logo} onClick={() => navigate('')} />
        <div className={styles.tabs}>
          <NavTab to="" icon="format_list_bulleted" />
          <NavTab to="history" icon="replay" />
          <NavTab to="statistics" icon="insert_chart_outlined" />
        </div>
      </ul>
    </nav>
  );
}
