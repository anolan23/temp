import { createColumnHelper } from '@tanstack/react-table';
import { Category, ReceiptItemData } from '../../lib/types';
import { useMemo } from 'react';
import { Table, TableProps } from '../table';
import { Select } from '../select';

interface ItemsTableProps extends Omit<TableProps<ReceiptItemData>, 'columns'> {
  categories?: Category[];
}

export function ItemsTable({ categories, ...props }: ItemsTableProps) {
  const columnHelper = createColumnHelper<ReceiptItemData>();
  const items = useMemo(() => {
    return (
      categories?.map((cat) => {
        return { label: cat.label, value: cat.id };
      }) || []
    );
  }, [categories]);
  const columns = useMemo(() => {
    return [
      columnHelper.accessor('category', {
        header: 'Category',
        cell: (info) => {
          const value = info.getValue();
          const selectedCategory = categories?.find(
            (cat) => cat.label === value
          );

          return (
            <Select
              renderWithPortal
              items={items}
              onSelectChange={() => []}
              selectedItem={
                selectedCategory
                  ? {
                      label: selectedCategory.label,
                      value: selectedCategory.id,
                    }
                  : undefined
              }
            />
          );
        },
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
