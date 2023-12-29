import useSWR from 'swr';
import { getReceipt } from '../lib/api/receipts';

export function useReceipt(receiptId?: string | number) {
  const fetcher = async function () {
    if (!receiptId) return;
    return getReceipt(receiptId);
  };

  const swrResponse = useSWR(
    receiptId ? `/receipts/${receiptId}` : null,
    fetcher
  );
  return swrResponse;
}
