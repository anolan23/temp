import styles from './index.module.scss';

export function Cart({ cartSize = 0 }) {
  const sidebar = document.querySelector('#sidebar');

  return (
    <div
      className={styles.root}
      onClick={() => {
        sidebar?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className="material-icons">shopping_cart</span>
      {cartSize && (
        <div className={styles.count} data-testid="count">
          {cartSize}
        </div>
      )}
    </div>
  );
}
