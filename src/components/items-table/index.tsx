import { createColumnHelper } from '@tanstack/react-table';
import { ReceiptItemData } from '../../lib/types';
import { useMemo } from 'react';
import { Table, TableProps } from '../table';

interface ItemsTableProps
  extends Omit<TableProps<ReceiptItemData>, 'columns'> {}

export function ItemsTable({ ...props }: ItemsTableProps) {
  const columnHelper = createColumnHelper<ReceiptItemData>();
  const columns = useMemo(() => {
    return [
      columnHelper.accessor('category', {
        header: 'Category',
      }),
      columnHelper.accessor('generated_item_name', {
        header: 'Item name',
      }),
      columnHelper.accessor('quantity', {
        header: 'Quantity',
      }),
      columnHelper.accessor('price_per_unit', {
        header: 'Price',
      }),
      columnHelper.accessor('total_price', {
        header: 'Total price',
      }),
    ];
  }, [columnHelper]);

  return <Table {...props} columns={columns} />;
}
