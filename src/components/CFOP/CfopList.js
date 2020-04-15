import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CfopList(props) {
  return (
    <table className="table ">
      <col width="180"></col>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Código</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {props.cfops.map((cfop) => {
          return (
            <tr key={cfop.id}>
              <td>
                <Link
                  to={"/cfop/" + cfop.codigo}
                  className="btn btn-outline-primary btn-sm"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-outline-danger btn-sm ml-2"
                  onClick={() => props.deleteCfop(cfop.id)}
                >
                  Apagar
                </button>
              </td>
              <td>{cfop.codigo}</td>
              <td>{cfop.descricao}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CfopList;
