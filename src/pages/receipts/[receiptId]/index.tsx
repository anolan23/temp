import { useParams } from 'react-router-dom';
import { useReceipt } from '../../../hooks/use-receipt';
import styles from './index.module.scss';
import { useReceiptItems } from '../../../hooks/use-receipt-items';

function ReceiptPage() {
  const { receiptId } = useParams();

  const { data: receipt } = useReceipt(receiptId);
  const { data: receiptItems } = useReceiptItems(receiptId);

  const { total_amount, store_name } = receipt || {};
  const totalAmount = total_amount ? +total_amount : 0;

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h1 className={styles.title}>{store_name}</h1>
        <data className={styles.value} value={totalAmount}>
          USD {total_amount}
        </data>
      </div>
      <div>
        {receiptItems?.map(
          ({
            id,
            receipt_id,
            category,
            category_id,
            created_at,
            updated_at,
            generated_item_name,
            item_name_raw,
            quantity,
            price_per_unit,
            total_price,
          }) => {
            return (
              <div key={id} className={styles.item}>
                <div>{category}</div>
                <div>{generated_item_name}</div>
                <div>{item_name_raw}</div>
                <div>{quantity}</div>
                <div>{price_per_unit}</div>
                <div>{total_price}</div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
export default ReceiptPage;
