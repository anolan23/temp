import {
  ColumnDef,
  InitialTableState,
  OnChangeFn,
  RowSelectionState,
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import React, { ReactElement, ReactNode, useMemo, useState } from 'react';

import { Radio, RadioGroupRoot } from '../radio';
import { StatusIndicator } from '../status-indicator';

import { Card } from '../card';
import { Checkbox } from '../checkbox';
import { Empty } from '../empty';
import styles from './index.module.scss';
import { Thead } from './thead';

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  variant?: 'card' | 'embedded' | 'stacked';
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onRowClick?: (rowData: T) => unknown;
  header?: ReactElement;
  footer?: ReactElement;
  empty?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  error?: string;
  initialState?: InitialTableState;
  selectionType?: 'single' | 'multi';
  wrapLines?: boolean;
  resizableColumns?: boolean;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected: boolean;
  children: ReactNode;
}

interface FlexCellProps {
  children: ReactNode;
  text: string;
}

export type ColumnVisibility<T = any> = {
  [key in keyof T]?: boolean;
};

export const Table = <T,>({
  data,
  columns,
  variant = 'card',
  rowSelection,
  onRowSelectionChange,
  onRowClick,
  header,
  footer,
  empty,
  loading,
  loadingText = 'Loading resources',
  error,
  initialState,
  selectionType,
  wrapLines = true,
  resizableColumns,
  ...props
}: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();

  const [sorting, setSorting] = useState<SortingState>([]);

  const internalColumns = useMemo(() => {
    if (selectionType === 'multi') {
      return [
        columnHelper.display({
          id: 'select',
          size: 40,
          minSize: 40,
          header: ({ table }) => (
            <div className="center-cell">
              <Checkbox
                checked={table.getIsAllRowsSelected()}
                onChange={(checked) => table.toggleAllRowsSelected(!!checked)}
              />
            </div>
          ),
          cell: ({ row }) => (
            <div className="center-cell">
              <Checkbox
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            </div>
          ),
        }),
      ];
    }
    if (selectionType === 'single') {
      return [
        columnHelper.display({
          id: 'select',
          size: 40,
          minSize: 40,
          cell: (info) => (
            <div className="center-cell">
              <RadioGroupRoot
                onValueChange={info.row.getToggleSelectedHandler()}
              >
                <Radio
                  checked={info.row.getIsSelected()}
                  value={''}
                  id={info.row.index}
                />
              </RadioGroupRoot>
            </div>
          ),
        }),
      ];
    }
    return [];
  }, [columnHelper, selectionType]);

  const table = useReactTable<T>({
    data,
    defaultColumn: {
      cell: (info) => info.getValue() || '-',
    },
    columns: [...internalColumns, ...columns],
    initialState,
    state: {
      rowSelection,
      sorting,
    },

    onSortingChange: setSorting,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: false,
    enableSortingRemoval: false,
    sortDescFirst: false,
    enableMultiRowSelection: selectionType === 'multi',
    columnResizeMode: resizableColumns ? 'onChange' : undefined,
  });
  const hasHeader = !!header;
  const hasNoMatches = !table.getFilteredRowModel().rows.length;

  const getCardVariant = function () {
    switch (variant) {
      case 'card':
        return 'default';

      default:
        return variant;
    }
  };

  return (
    <Card
      variant={getCardVariant()}
      header={
        hasHeader && (
          <div>
            <div
              className={clsx(
                styles['header-tools'],
                styles[`variant-${variant}`]
              )}
            >
              {header}
            </div>
          </div>
        )
      }
      footer={footer}
    >
      <div className={clsx(styles.wrapper, styles[variant])}>
        <table
          className={clsx(styles.table, {
            [styles.resizable]: resizableColumns,
          })}
          data-cy="table"
          {...props}
        >
          <Thead
            table={table}
            resizableColumns={resizableColumns}
            wrapLines={wrapLines}
          />
          {!loading && (
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    selected={rowSelection ? row.getIsSelected() : false}
                    key={row.id}
                    onClick={() => {
                      if (!onRowClick) return;
                      onRowClick(row.original);
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className={clsx(styles.cell, {
                            [styles['no-wrapped-lines']]: !wrapLines,
                            [styles.select]: cell.column.id === 'select',
                          })}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </TableRow>
                );
              })}
            </tbody>
          )}
        </table>
        {loading ? (
          <div className={styles['loading']}>
            <StatusIndicator type="loading">{loadingText}</StatusIndicator>
          </div>
        ) : error ? (
          <Empty title={error} />
        ) : data.length === 0 ? (
          empty || <Empty />
        ) : hasNoMatches ? (
          <Empty title="No matches" description="We can’t find a match." />
        ) : null}
      </div>
    </Card>
  );
};

function TableRow({ selected, children, ...props }: TableRowProps) {
  return (
    <tr
      role="row"
      className={clsx(styles.row, selected && styles['row--selected'])}
      {...props}
    >
      {children}
    </tr>
  );
}
interface TableHeaderProps {
  title: ReactNode;
  text?: string;
  actions?: ReactNode;
  tools?: ReactNode;
}
export function TableHeader({
  text,
  actions,
  title,
  tools,
  ...props
}: TableHeaderProps) {
  return (
    <div className={styles.header} {...props}>
      <div className={styles['header__container']}>
        <div className={styles['header__content']}>
          {title}
          {text && <p className={styles['header__text']}>{text}</p>}
        </div>
        {actions && <div className={styles['header__actions']}>{actions}</div>}
      </div>
      {tools}
    </div>
  );
}

export function FlexCell({ children, text }: FlexCellProps) {
  return (
    <div className={styles['flex-cell']}>
      {children}
      <div className={styles['flex-cell__text']}>{text}</div>
    </div>
  );
}
