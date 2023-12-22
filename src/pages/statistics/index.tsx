import { useRef } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Stat } from '../../components/stat';
import { StatContainer } from '../../components/stat-container';
import styles from './index.module.scss';

type Item = {
  name: string;
  percent: number;
};

type Category = {
  name: string;
  percent: number;
};

function Statistics() {
  const dashBoardMainEl = useRef(null);
  const items: Array<Item> = [];
  const categories: Array<Category> = [];
  const renderItems = function () {
    if (!items) return null;
    if (!items.length)
      return <div className="empty empty--small">No top items</div>;
    return items.map((item, index) => {
      const { name, percent } = item;
      return <Stat key={index} title={name} percent={percent} />;
    });
  };
  const renderCategories = function () {
    if (!categories) return null;
    if (!categories.length)
      return <div className="empty empty--small">No top categories</div>;
    return categories.map((category, index) => {
      const { name, percent } = category;
      return <Stat key={index} title={name} percent={percent} color="blue" />;
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.trending}>
        <StatContainer title="Top Items">{renderItems()}</StatContainer>
        <StatContainer title="Top Categories">
          {renderCategories()}
        </StatContainer>
      </div>
      <div className={styles.summary}>
        <StatContainer title="Monthly Summary">
          <ResponsiveContainer width="100%" height={275}>
            <LineChart data={[]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="itemsCount"
                stroke="#f9a109"
                strokeWidth={2}
                name="items"
              />
            </LineChart>
          </ResponsiveContainer>
        </StatContainer>
      </div>
    </div>
  );
}
export default Statistics;
