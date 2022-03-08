import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import { createTheme, ThemeProvider, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StyledEngineProvider } from "@mui/material/styles";

import { ExamplesGrid } from "./ExamplesGrid";
import { EXAMPLES } from "../examples";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  contentWrapper: {
    width: "100%",
  },
  returnHome: { padding: "0px", margin: "20px 0 20px 0" },
});

const theme = createTheme();

export const Examples = () => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <main className={classes.root}>
          <div className={classes.contentWrapper}>
            <Routes>
              <Route path="/" element={<ExamplesGrid />} />

              {Object.keys(EXAMPLES).map((label, index) => (
                <Route
                  key={index}
                  path={label.replace(/\s+/g, "-").toLowerCase()}
                  element={EXAMPLES[label]}
                />
              ))}
            </Routes>

            <div>
              {location.pathname !== "/" && (
                <div className={classes.returnHome}>
                  <Link to="/">
                    <Button color="primary">Back to Example Index</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.BASE_PATH}>
    <Examples />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app-root"));
