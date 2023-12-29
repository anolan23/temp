import { Link } from 'react-router-dom';
import { ReceiptData } from '../../lib/types';
import styles from './index.module.scss';

interface ReceiptProps {
  receipt: ReceiptData;
}

export function Receipt({ receipt }: ReceiptProps) {
  const { total_amount, store_name } = receipt;
  const totalAmount = total_amount ? +total_amount : 0;
  return (
    <Link to={`/dashboard/receipts/${receipt.id}`} className={styles.root}>
      <div className={styles.title}>{store_name}</div>
      <div className={styles.content}>
        <data className={styles.value} value={totalAmount}>
          ${total_amount}
        </data>
      </div>
    </Link>
  );
}
