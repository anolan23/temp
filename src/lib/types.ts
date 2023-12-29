export type ReceiptData = {
  id: number;
  created_at: string;
  updated_at: string;
  object_key: string | null;
  store_name: string | null;
  total_amount: string | null;
  transaction_date: string | null;
  user_id: number;
};

export type ReceiptItemData = {
  id: number;
  created_at: string;
  updated_at: string;
  receipt_id: number;
  category_id: number | null;
  item_name_raw: string | null;
  generated_item_name: string | null;
  quantity: number | null;
  price_per_unit: string | null;
  total_price: string | null;
  category: string;
};
