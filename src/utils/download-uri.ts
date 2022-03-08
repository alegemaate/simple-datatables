/**
 * Create URI from String
 * @param content Content to convert to object URL
 * @returns
 */
const createUriFromString = (content: string) =>
  window.URL.createObjectURL(new Blob([content]));

/**
 * Download a string as a file
 * @param uri File content
 * @param name Name of file
 */
export const downloadUri = (uri: string, name = "") => {
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = uri;
  link.download = name;

  document.body.appendChild(link);

  link.click();
  link.remove();
};

/**
 * Download a string as a file
 * @param str File content
 * @param name Name of file
 */
export const downloadString = (str: string, name = "") => {
  const uri = createUriFromString(str);
  downloadUri(uri, name);
};
