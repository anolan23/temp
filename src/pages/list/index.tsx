import { useParams, useNavigate } from 'react-router-dom';
import { Category } from '../../components/category';
import styles from './index.module.scss';

type CategoryDefinition = {
  name: string;
  items: [];
};

type ListDefinition = {
  title: string;
  timestamp: string;
  items: Array<any>;
};

export function ListPage() {
  const params = useParams();
  const navigate = useNavigate();
  const list: ListDefinition = {
    title: 'Sample List',
    timestamp: '',
    items: [],
  };
  const items = list.items;
  const categories: Array<CategoryDefinition> = [];
  console.log(list);

  const renderCategories = function () {
    if (!categories) return null;
    return categories.map((category, index) => {
      const { name, items } = category;
      return <Category key={index} title={name} items={items} />;
    });
  };

  if (!list) return null;
  const { timestamp } = list;

  const date = new Date(timestamp);

  const dateString = date.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <div className={styles.root}>
      <span className="link" onClick={() => navigate(-1)}>
        &larr; back
      </span>
      <div className={styles.title}>{list.title}</div>
      <div className={styles.date}>
        <span className={styles.calendar}>event_note</span>
        <span className={styles.text}>{dateString}</span>
      </div>
      {renderCategories()}
    </div>
  );
}
