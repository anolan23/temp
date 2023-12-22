import { HistoryCat } from '../../components/history-cat';
import styles from './index.module.scss';

type CategoryDefinition = {
  month: number;
  year: number;
  lists: [];
};

function HistoryPage() {
  const categories: Array<CategoryDefinition> = [];
  const renderCategories = function () {
    if (!categories) return null;
    if (!categories.length) {
      return <div className="empty">No shopping history</div>;
    }
    return categories.map((category, index) => {
      const { month, year, lists } = category;

      return (
        <HistoryCat key={index} title={`${month} ${year}`} items={lists} />
      );
    });
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Shopping history</h1>
      {renderCategories()}
    </div>
  );
}
export default HistoryPage;
