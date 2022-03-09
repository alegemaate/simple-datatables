import * as React from "react";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";
import PrintIcon from "@mui/icons-material/Print";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  tools: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

interface SimpleTableToolbarProps {
  numSelected: number;
  title?: string | null;
  onDownload: () => void;
  download: boolean;
  search: boolean;
  filter: boolean;
  print: boolean;
}

export const SimpleTableToolbar: React.FC<SimpleTableToolbarProps> = ({
  numSelected,
  title,
  onDownload,
  download,
  filter,
  search,
  print,
}) => {
  const classes = useStyles();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title ?? ""}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box className={classes.tools}>
          {search && (
            <Tooltip title="Search">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}
          {download && (
            <Tooltip title="Download CSV">
              <IconButton onClick={onDownload}>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
          )}
          {filter && (
            <Tooltip title="Filter list">
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
          {print && (
            <Tooltip title="Print">
              <IconButton>
                <PrintIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      )}
    </Toolbar>
  );
};
