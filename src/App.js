import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// global styles
import GlobalStyle from "./globalStyles";
// componentes
import ScrollToTop from "./components/ScrollToTop";
// routes
import Routes from './routes';

const App = () => {
  return (
    <>
      <Router >
        <GlobalStyle />
        <ScrollToTop />
        <Routes />
      </Router>
    </>
  );
}

export default App;
