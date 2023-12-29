import useSWR from 'swr';
import { getReceiptItems } from '../lib/api/receipts';

export function useReceiptItems(receiptId?: string | number) {
  const fetcher = async function () {
    if (!receiptId) return;
    return getReceiptItems(receiptId);
  };

  const swrResponse = useSWR(
    receiptId ? `/receipts/${receiptId}/items` : null,
    fetcher
  );
  return swrResponse;
}
