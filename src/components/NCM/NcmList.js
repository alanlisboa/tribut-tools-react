import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NcmList(props) {
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
        {props.ncms.map((ncm) => {
          return (
            <tr key={ncm.id}>
              <td>
                <Link
                  to={"/ncm/" + ncm.codigo}
                  className="btn btn-outline-primary btn-sm"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-outline-danger btn-sm ml-2"
                  onClick={() => props.deleteNcm(ncm.id)}
                >
                  Apagar
                </button>
              </td>
              <td>{ncm.codigo}</td>
              <td>{ncm.descricao}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default NcmList;
