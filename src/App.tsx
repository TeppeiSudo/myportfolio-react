import React, { ReactComponentElement } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Portfolio from "./views/pages/Portfolio";
import Header from "./views/components/modules/Header";
import Footer from "./views/components/modules/Footer";
import { ThemeProvider, Box } from "@material-ui/core";
import theme from "style/theme";

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
