import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import ExamplesGrid from './ExamplesGrid';
import examples from '../examples';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
  },
};

const theme = createTheme();

class Examples extends React.Component {
  returnHome = () => {
    this.props.history.push('/');
  };

  render() {
    const { classes } = this.props;

    var returnHomeStyle = { padding: '0px', margin: '20px 0 20px 0' };

    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <main className={classes.root}>
            <div className={classes.contentWrapper}>
              <Switch>
                <Route path="/" exact render={() => <ExamplesGrid examples={examples} />} />

                {Object.keys(examples).map((label, index) => (
                  <Route
                    key={index}
                    path={`/${label.replace(/\s+/g, '-').toLowerCase()}`}
                    exact
                    component={examples[label]}
                  />
                ))}
              </Switch>
              <div>
                {this.props.location.pathname !== '/' && (
                  <div style={returnHomeStyle}>
                    <Button color="primary" onClick={this.returnHome}>
                      Back to Example Index
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

const StyledExamples = withRouter(withStyles(styles)(Examples));

function App() {
  return (
    <Router hashType="noslash">
      <StyledExamples />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
