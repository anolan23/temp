import styles from './index.module.scss';

type DropdownItem = {
  id: string;
  name: string;
};

interface DropdownProps {
  items: Array<DropdownItem>;
  show?: boolean;
  onItemClick?: (item: DropdownItem) => void;
}

export function Dropdown({ items, show, onItemClick }: DropdownProps) {
  if (!show) return null;
  const renderItems = () => {
    if (!items) return null;
    return items.map((item) => {
      return (
        <div
          key={item.id}
          className={styles.item}
          onClick={() => onItemClick && onItemClick(item)}
        >
          <span className={styles.text}>{item.name}</span>
        </div>
      );
    });
  };
  return (
    <div className={styles.root}>
      <div className={styles.menu}>{renderItems()}</div>
    </div>
  );
}
