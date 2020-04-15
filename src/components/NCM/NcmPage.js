import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NcmList from "./NcmList";
import NcmStore from "./NcmStore";
import { loadNcms, deleteNcm } from "./NcmAction";
import ncmStore from "./NcmStore";

function NcmPage() {
  const [ncms, setNcms] = useState(ncmStore.getNcms());

  useEffect(() => {
    NcmStore.addChangeListener(onChange);
    if (NcmStore.getNcms().length === 0) loadNcms();
    return () => NcmStore.removeChangeListener(onChange);
  });

  function onChange() {
    setNcms(NcmStore.getNcms());
  }

  return (
    <div className="container">
      <h2 className="font-weight-lighter">NCM - Nomenclaturas do Mercosul</h2>
      <div className="mb-5" />
      <Link className="btn btn-primary" to="/ncm">
        Nova NCM
      </Link>
      <div className="mb-3" />
      <NcmList ncms={ncms} deleteNcm={deleteNcm} />
    </div>
  );
}

export default NcmPage;
