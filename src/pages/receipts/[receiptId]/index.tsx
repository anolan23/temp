import { useParams } from 'react-router-dom';
import { ItemsTable } from '../../../components/items-table';
import { useReceipt } from '../../../hooks/use-receipt';
import { useReceiptItems } from '../../../hooks/use-receipt-items';
import styles from './index.module.scss';
import {
  Tab,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../components/tabs';
import { useCategories } from '../../../hooks/use-categories';
import { DateDisplay } from '../../../components/date-display';

function ReceiptPage() {
  const { receiptId } = useParams();

  const { data: receipt } = useReceipt(receiptId);
  const { data: receiptItems, isLoading: isItemsLoading } =
    useReceiptItems(receiptId);
  const { data: categories } = useCategories();

  const { total_amount, store_name, transaction_date } = receipt || {};
  const totalAmount = total_amount ? +total_amount : 0;

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <div>
          <h1 className={styles.title}>{store_name}</h1>
          <div>
            {transaction_date && <DateDisplay dateString={transaction_date} />}
          </div>
        </div>
        <data className={styles.value} value={totalAmount}>
          USD {total_amount}
        </data>
      </div>
      <div className={styles.content}>
        <Tabs defaultValue="receipt-data">
          <TabsList loop={false}>
            <TabsTrigger value="receipt-data" asChild>
              <Tab title="Receipt data" />
            </TabsTrigger>
            <TabsTrigger value="store-info" asChild>
              <Tab title="Store information" />
            </TabsTrigger>
            <TabsTrigger value="ocr-text" asChild>
              <Tab title="OCR text" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="receipt-data">
            <ItemsTable
              data={receiptItems || []}
              categories={categories}
              loading={isItemsLoading}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
export default ReceiptPage;
