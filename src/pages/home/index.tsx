import useSWR from 'swr';
import { Search } from '../../components/search';
import styles from './index.module.scss';
import { getReceipts } from '../../lib/api/receipts';
import { Receipt } from '../../components/receipt';

function Home() {
  const { data: receipts } = useSWR('/receipts', getReceipts);

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h1>
          <span className="highlight">Receipt Ranger</span> allows you take your
          shopping list wherever you go
        </h1>
        <Search />
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
