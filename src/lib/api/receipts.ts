import backend from '../../services/backend';
import { ReceiptData, ReceiptItemData } from '../types';

export async function getReceipt(receiptId: number | string) {
  const response = await backend.get<ReceiptData>(`/receipts/${receiptId}`);
  return response.data;
}

export async function getReceipts() {
  const response = await backend.get<ReceiptData[]>('/receipts');
  return response.data;
}

export async function getReceiptItems(receiptId: number | string) {
  const response = await backend.get<ReceiptItemData[]>(
    `/receipts/${receiptId}/items`
  );
  return response.data;
}
