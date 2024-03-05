import useSWR from 'swr';
import { Button } from '../../components/button';
import { Receipt } from '../../components/receipt';
import { getReceipts } from '../../lib/api/receipts';
import styles from './index.module.scss';

function Home() {
  const { data: receipts } = useSWR('/receipts', getReceipts);

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h1>
          <span className="highlight">Receipt Ranger</span> will automatically
          analyze and categorize items from your scanned grocery receipts!
        </h1>
        <Button variant="link" to="/dashboard/receipts/add">
          Add Receipt
        </Button>
      </div>
      <div className={styles.receipts}>
        {receipts?.map((receipt) => (
          <Receipt key={receipt.id} receipt={receipt} />
        ))}
      </div>
    </div>
  );
}
export default Home;
