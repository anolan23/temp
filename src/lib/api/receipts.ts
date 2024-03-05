import backend from '../../services/backend';
import { MonthlyTotalsResult, ReceiptData, ReceiptItemData } from '../types';

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

type CreateReceiptResult = {
  receipt_id: number;
};

export async function createReceipt(objectKey: string) {
  const response = await backend.post<CreateReceiptResult>(`/receipts`, {
    object_key: objectKey,
  });
  return response.data;
}

export async function getMonthlyTotals() {
  const response = await backend.get<MonthlyTotalsResult[]>(
    `/receipts/monthly-totals`
  );
  return response.data;
}
