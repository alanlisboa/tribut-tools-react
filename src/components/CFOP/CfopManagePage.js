import React, { useState, useEffect } from "react";
import CfopForm from "./CfopForm";
import CfopStore from "./CfopStore";
import { toast } from "react-toastify";
import * as CfopActions from "./CfopAction";

const CfopManagePage = (props) => {
  const [errors, setErrors] = useState({});
  const [cfops, setCfops] = useState(CfopStore.getCfops());
  const [cfop, setCfop] = useState({
    codigo: "",
    descricao: "",
  });

  useEffect(() => {
    CfopStore.addChangeListener(onChange);

    const codigo = props.match.params.codigo;

    if (cfops.length === 0) {
      CfopActions.loadCfops();
    } else if (codigo) {
      setCfop(CfopStore.getCourseByCode(codigo));
    }

    return () => CfopStore.removeChangeListener(onChange);
  }, [cfops.length, props.match.params.codigo]);

  function onChange() {
    setCfops(CfopStore.getCfops());
  }

  function handleChange({ target }) {
    setCfop({ ...cfop, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};

    if (!cfop.codigo) _errors.codigo = "Código é obrigatório";
    if (!cfop.descricao) _errors.descricao = "Descrição é obrigatório";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;

    CfopActions.saveCfop(cfop).then(() => {
      props.history.push("/cfops");
      toast.success("Cfop gravado com sucesso.");
    });
  }

  return (
    <div className="container">
      <h2 className="font-weight-lighter">CFOP - Código fiscal de operação</h2>
      <div className="mb-5" />
      <CfopForm
        errors={errors}
        cfop={cfop}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CfopManagePage;
