import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/common/Header";
import HomePage from "./components/Home/HomePage";
import NcmPage from "./components/NCM/NcmPage";
import CfopPage from "./components/CFOP/CfopPage";

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ncm" component={NcmPage} />
          <Route path="/cfop" component={CfopPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
