import { SimpleTableColumn } from "types/Column";

const createURI = (content: string) =>
  window.URL.createObjectURL(new Blob([content]));

const downloadURI = (uri: string, name = "") => {
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = uri;
  link.download = name;

  document.body.appendChild(link);

  link.click();
  link.remove();
};

const escapeQuotes = (str: string) => str.replace(/"/gu, '""');

export const downloadCSV = <TData>(
  data: TData[],
  columns: SimpleTableColumn<TData>[],
  fileName = "data.csv",
): void => {
  const header = columns.map((column) => escapeQuotes(column.name)).join(",");

  const csv = data.map((row) =>
    columns
      .map((column) => `"${escapeQuotes(String(row[column.name]))}"`)
      .join(","),
  );

  const dataUri = createURI([header, ...csv].join("\n"));

  downloadURI(dataUri, fileName);
};
