import React, { ReactComponentElement } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Portfolio from './views/pages/Portfolio';
import Top from './views/pages/Top';
import Header from './views/components/modules/Header';
import Footer from './views/components/modules/Footer';
import { ThemeProvider } from '@material-ui/core';
import theme from 'style/theme';

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Route exact path='/'>
            <Top />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
        </Router>
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;