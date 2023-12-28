import styles from './index.module.scss';

interface LoaderProps {
  size?: number;
  borderWidth?: number;
  speedMultiplier?: number;
}

export function Loader({
  size = 16,
  borderWidth = 3,
  speedMultiplier = 1.25,
}: LoaderProps) {
  const SPEED = 1;
  return (
    <div
      style={{
        borderWidth,
        width: size ? `${size}px` : undefined,
        height: size ? `${size}px` : undefined,
        animationDuration: `${SPEED / speedMultiplier}s`,
      }}
      className={styles.root}
    ></div>
  );
}
