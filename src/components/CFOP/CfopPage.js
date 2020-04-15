import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CfopList from "./CfopList";
import CfopStore from "./CfopStore";
import { loadCfops, deleteCfop } from "./CfopAction";
import cfopStore from "./CfopStore";

function CfopPage() {
  const [cfops, setCfops] = useState(cfopStore.getCfops());

  useEffect(() => {
    CfopStore.addChangeListener(onChange);
    if (CfopStore.getCfops().length === 0) loadCfops();
    return () => CfopStore.removeChangeListener(onChange);
  });

  function onChange() {
    setCfops(CfopStore.getCfops());
  }

  return (
    <div className="container">
      <h2 className="font-weight-lighter">CFOP - Código fiscal de operação</h2>
      <div className="mb-5" />
      <Link className="btn btn-primary" to="/cfop">
        Novo CFOP
      </Link>
      <div className="mb-3" />
      <CfopList cfops={cfops} deleteCfop={deleteCfop} />
    </div>
  );
}

export default CfopPage;
