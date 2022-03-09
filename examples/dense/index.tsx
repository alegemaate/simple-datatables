import React, { useState } from "react";
import SimpleTable, { SimpleTableOptions } from "../../src";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { EMPLOYEES, EMPLOYEES_COLUMNS } from "../constants/employees";

export const Dense: React.FC = () => {
  const [dense, setDense] = useState(true);

  const options: SimpleTableOptions = {
    filter: false,
    print: false,
    download: false,
    search: false,
    dense,
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={dense}
            onChange={(e) => setDense(e.target.checked)}
            value="filterArray"
            color="primary"
          />
        }
        label="Dense"
      />
      <SimpleTable
        title="ACME Employee list"
        data={EMPLOYEES}
        columns={EMPLOYEES_COLUMNS}
        options={options}
      />
    </>
  );
};
