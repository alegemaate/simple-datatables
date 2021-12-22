import * as React from 'react';
import { DataKeys } from 'types/DataKeys';
import { getComparator, Order, stableSort } from '../utils/sort';

export interface UseColumnSortProps<TData> {
  data: TData[];
  page: number;
  rowsPerPage: number;
}

export const useColumnSort = <TData>({ page, data, rowsPerPage }: UseColumnSortProps<TData>) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<DataKeys<TData> | null>();

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof { [key in DataKeys<TData>]: number | string },
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = React.useMemo(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    console.log(startIndex, endIndex);

    if (orderBy) {
      return stableSort(data, getComparator(order, orderBy)).slice(startIndex, endIndex);
    }
    return data.slice(startIndex, endIndex);
  }, [data, order, orderBy, page, rowsPerPage]);

  return {
    order,
    orderBy,
    data: sortedData,
    handleRequestSort,
  };
};
