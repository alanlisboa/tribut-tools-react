import React from "react";
import TextInput from "../common/TextInput";

function NcmForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="row col-md-2">
        <TextInput
          id="codigo"
          label="Código"
          name="codigo"
          value={props.ncm.codigo}
          onChange={props.onChange}
          error={props.errors.codigo}
        />
      </div>
      <TextInput
        id="descricao"
        label="Descrição"
        name="descricao"
        onChange={props.onChange}
        value={props.ncm.descricao}
        error={props.errors.descricao}
      />
      <div className="mb-5" />
      <input type="submit" value="Salvar" className="btn btn-primary" />
    </form>
  );
}

export default NcmForm;
