import { SimpleTableColumn } from "types/Column";
import { downloadString } from "./download-uri";

/**
 * Serialize CSV cell
 * @param content Content to serialize
 * @returns Stringified and escaped cell content
 */
const serializeCell = (content: unknown) =>
  `"${String(content).replace(/"/gu, '""')}"`;

/**
 * Create Header
 * @description Creates a header row for the csv file
 * @param columns Column definition used determine header
 * @returns
 */
const createHeader = <TData>(columns: SimpleTableColumn<TData>[]) =>
  columns.map((column) => serializeCell(column.name)).join(",");

/**
 * Create Body
 * @description Create body rows for csv
 * @param data Content to be placed in csv body
 * @param columns Column definition used to order cells
 * @returns
 */
const createBody = <TData>(
  data: TData[],
  columns: SimpleTableColumn<TData>[],
) =>
  data.map((row) =>
    columns.map((column) => serializeCell(row[column.name])).join(","),
  );

/**
 * Download CSV
 * @description Create and download a csv file from the browser
 * @param data Content to be placed in csv body
 * @param columns Column definition used to order cells, and build header
 * @param fileName Name of output file
 */
export const downloadCsv = <TData>(
  data: TData[],
  columns: SimpleTableColumn<TData>[],
  fileName = "data.csv",
): void => {
  const content = [createHeader(columns), ...createBody(data, columns)].join(
    "\n",
  );

  downloadString(content, fileName);
};
