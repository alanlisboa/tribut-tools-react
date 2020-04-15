import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/common/Header";
import HomePage from "./components/Home/HomePage";

import NcmPage from "./components/NCM/NcmPage";
import NcmManagePage from "./components/NCM/NcmManagePage";

import CfopPage from "./components/CFOP/CfopPage";
import CfopManagePage from "./components/CFOP/CfopManagePage";

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <ToastContainer autoClose={3000} hideProgressBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ncms" component={NcmPage} />
          <Route path="/cfops" component={CfopPage} />
          <Route path="/cfop/:codigo" component={CfopManagePage} />
          <Route path="/cfop" component={CfopManagePage} />
          <Route path="/ncms" component={NcmPage} />
          <Route path="/ncm/:codigo" component={NcmManagePage} />
          <Route path="/ncm" component={NcmManagePage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
