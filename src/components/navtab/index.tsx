import clsx from 'clsx';
import { ReactNode } from 'react';
import { useNavigate, useResolvedPath, useMatch, To } from 'react-router-dom';
import styles from './index.module.scss';

interface NavTabProps {
  to: To;
  icon: ReactNode;
}

export function NavTab({ to, icon }: NavTabProps) {
  const navigate = useNavigate();
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      onClick={() => navigate(to)}
      className={clsx(styles.root, {
        [styles.active]: !!match,
      })}
    >
      <span className="material-icons navbar__icon">{icon}</span>
    </div>
  );
}
