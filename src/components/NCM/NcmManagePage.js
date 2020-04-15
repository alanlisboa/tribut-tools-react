import React, { useState, useEffect } from "react";
import NcmForm from "./NcmForm";
import NcmStore from "./NcmStore";
import { toast } from "react-toastify";
import * as NcmActions from "./NcmAction";

const NcmManagePage = (props) => {
  const [errors, setErrors] = useState({});
  const [ncms, setNcms] = useState(NcmStore.getNcms());
  const [ncm, setNcm] = useState({
    codigo: "",
    descricao: "",
  });

  useEffect(() => {
    NcmStore.addChangeListener(onChange);

    const codigo = props.match.params.codigo;

    if (ncms.length === 0) {
      NcmActions.loadNcms();
    } else if (codigo) {
      setNcm(NcmStore.getCourseByCode(codigo));
    }

    return () => NcmStore.removeChangeListener(onChange);
  }, [ncms.length, props.match.params.codigo]);

  function onChange() {
    setNcms(NcmStore.getNcms());
  }

  function handleChange({ target }) {
    setNcm({ ...ncm, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};

    if (!ncm.codigo) _errors.codigo = "Código é obrigatório";
    if (!ncm.descricao) _errors.descricao = "Descrição é obrigatório";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;

    NcmActions.saveNcm(ncm).then(() => {
      props.history.push("/ncms");
      toast.success("Ncm gravado com sucesso.");
    });
  }

  return (
    <div className="container">
      <h2 className="font-weight-lighter">NCM - Nomenclaturas do Mercosul</h2>
      <div className="mb-5" />
      <NcmForm
        errors={errors}
        ncm={ncm}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default NcmManagePage;
