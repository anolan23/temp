import { HistoryItemDefinition, Item } from './item';
import styles from './index.module.scss';

interface HistoryCatProps {
  title: string;
  items: Array<HistoryItemDefinition>;
}

export function HistoryCat({ title, items }: HistoryCatProps) {
  const renderItems = () => {
    if (!items) return null;
    return items.map((item, index) => {
      return <Item key={index} item={item} />;
    });
  };

  return (
    <section className={styles.root}>
      <span className={styles.title}>{title}</span>
      <div className={styles.lists}>{renderItems()}</div>
    </section>
  );
}
