import * as React from 'react';
import { RowId } from '../types/RowId';

export const useDataId = <TData>(data: TData[]): (RowId & TData)[] =>
  React.useMemo(() => data.map((d, index) => ({ ...d, __simple_id: index })), [data]);
