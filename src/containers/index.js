import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import jss from 'jss';
import jssNested from 'jss-nested';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'react-jss';
import 'normalize.css/normalize.css';
import theme from '../theme';

// import relative path
import Home from './Home';
import NotFound from './NotFound';

jss.use(jssNested());

const Main = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Main;
