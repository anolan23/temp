import { MaterialIcon } from '../material-icon';
import styles from './index.module.scss';

type CategoryItem = {
  name: string;
  qty?: number;
};

interface CategoryProps {
  title: string;
  items: Array<CategoryItem>;
  onItemClick?: (item: CategoryItem) => void;
}

export function Category({ title, items, onItemClick }: CategoryProps) {
  const renderIcon = function (qty?: number) {
    if (qty) {
      return <span className={styles.qty}>{`${qty} pcs`}</span>;
    }
    return (
      <span className={styles.icon}>
        <MaterialIcon icon="add" />
      </span>
    );
  };

  const renderItems = function () {
    if (!items) return null;
    return items.map((item, index) => {
      const { name, qty } = item;
      return (
        <div
          key={index}
          className={styles.item}
          onClick={() => onItemClick && onItemClick(item)}
        >
          <span className={styles.name}>{name}</span>
          {renderIcon(qty)}
        </div>
      );
    });
  };

  return (
    <section className={styles.root}>
      <span className={styles.title}>{title}</span>
      <div className={styles.items}>{renderItems()}</div>
    </section>
  );
}
