import { Category } from '../../components/category';
import { Search } from '../../components/search';
import styles from './index.module.scss';

type CategoryItem = {
  name: string;
  qty?: number;
};

type CategoryDefinition = {
  id: string;
  name: string;
  items: CategoryItem[];
};

function ItemsPage() {
  const categories: Array<CategoryDefinition> = [
    {
      id: 'meat',
      name: 'Meat',
      items: [
        {
          name: 'Chicken',
        },
        {
          name: 'Beef',
        },
        {
          name: 'Pork',
        },
      ],
    },
    {
      id: 'snacks',
      name: 'Snacks',
      items: [
        {
          name: 'Oreos',
        },
        {
          name: 'European Chocolate',
        },
        {
          name: 'Cheetos',
        },
      ],
    },
  ];
  const renderCategories = function () {
    if (!categories) return null;
    return categories.map((category) => {
      return (
        <Category
          key={category.id}
          title={category.name}
          items={category.items}
        />
      );
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h1>
          <span className="highlight">Receipt Ranger</span> allows you take your
          shopping list wherever you go
        </h1>
        <Search />
      </div>
      {renderCategories()}
    </div>
  );
}
export default ItemsPage;
