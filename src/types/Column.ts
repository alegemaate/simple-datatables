import { DataKeys } from "./DataKeys";

export interface SimpleTableColumn<TData> {
  name: DataKeys<TData>;
  label?: string;
  numeric?: boolean;
  disablePadding?: boolean;
}
