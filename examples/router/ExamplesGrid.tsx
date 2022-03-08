import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Typography, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { EXAMPLES } from "../examples";

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  card: {
    "&:hover": {
      background: "lightgrey",
      fontWeight: 500,
    },
  },
  cardContent: {
    "&:last-child": {
      padding: 8,
    },
  },
  link: {
    textDecoration: "none",
  },
  label: {
    fontWeight: "inherit",
  },
});

export const ExamplesGrid: React.FC = () => {
  const classes = useStyles();
  const [searchVal, setSearchVal] = React.useState("");

  const examplesSortedKeys = React.useMemo(
    () =>
      Object.keys(EXAMPLES).filter((item) => {
        if (searchVal === "") {
          return true;
        }
        return item.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1;
      }),
    [searchVal],
  );

  console.log(searchVal, examplesSortedKeys);

  return (
    <>
      <Typography variant="h5" align="center">
        Choose an Example
      </Typography>
      <Typography variant="subtitle2" align="center">
        ({examplesSortedKeys.length}) Examples
      </Typography>

      <Typography variant="subtitle2" align="center" style={{ margin: "10px" }}>
        <TextField
          placeholder="Search Examples"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </Typography>

      <Grid container className={classes.container} spacing={1}>
        {examplesSortedKeys.map((label, index) => (
          <Grid key={index} item md={2}>
            <Link
              className={classes.link}
              to={label.replace(/\s+/g, "-").toLowerCase()}
            >
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="subtitle1"
                    className={classes.label}
                    align="center"
                  >
                    {label}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
