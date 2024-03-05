import { MonthlyTotalBarChart } from '../../components/monthly-total-chart';
import { Card } from '../../components/card';
import styles from './index.module.scss';
import { Header } from '../../components/header';
import useSWR from 'swr';
import { getMonthlyTotals } from '../../lib/api/receipts';

function StatisticsPage() {
  const { data } = useSWR('/receipts/monthly-totals', getMonthlyTotals);
  return (
    <div className={styles.root}>
      <div className={styles.summary}>
        <Card header={<Header variant="h2" title="Total by Month" />}>
          <MonthlyTotalBarChart
            data={
              data?.map((item) => {
                return {
                  name: item.month_name,
                  total: +item.total,
                };
              }) || []
            }
          />
        </Card>
      </div>
    </div>
  );
}
export default StatisticsPage;
