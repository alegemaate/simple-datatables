import { RowsPerPageOption } from "components/SimpleTablePagination";
import { Order } from "utils/sort";

type ResponsiveMode = "simple" | "standard" | "vertical";

type SelectableRowsMode = "multiple" | "none" | "single";

type ToolbarPositioning = "above" | "none" | "replace";

export interface SimpleTableOptions {
  // Dense mode
  dense?: boolean;
  // Show empty rows
  displayEmptyRows?: boolean;

  // Enable download
  download?: boolean;
  // Enable filter
  filter?: boolean;
  // Header is fixed (TODO)
  fixedHeader?: boolean;
  // Starting page
  page?: number;
  // Enable pagination (TODO)
  pagination?: boolean;
  // Enable print
  print?: boolean;
  // Responsive mode (TODO)
  responsive?: ResponsiveMode;
  // Show hover effect on rows (TODO)
  rowHover?: boolean;
  // Initial rows per page
  rowsPerPage?: number;
  // Options for rows per page
  rowsPerPageOptions?: RowsPerPageOption[];
  // Search enabled
  search?: boolean;
  // Placeholder text for search box (TODO)
  searchPlaceholder?: string;
  // Start with search open (TODO)
  searchOpen?: boolean;
  // Always opened (TODO)
  searchAlwaysOpen?: boolean;
  // Initial search text (TODO)
  searchText?: string;
  // Configure selectable rows mode (TODO)
  selectableRows?: SelectableRowsMode;
  // Allow clicking rows to select  (TODO)
  selectableRowsOnClick?: boolean;
  // Toolbar placement (TODO)
  selectToolbarPlacement?: ToolbarPositioning;
  // Enables sort (TODO)
  sort?: boolean;
  // Adjust initial sort order
  sortOrder?: {
    name: string;
    direction: Order;
  };
}
