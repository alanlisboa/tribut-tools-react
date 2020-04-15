import dispatcher from "../../AppDispatcher";
import * as cfopApi from "../../api/cfopApi";
import actionTypes from "./CfopActionsTypes";

export function saveCfop(cfop) {
  return cfopApi.saveCfop(cfop).then((savedCfop) => {
    dispatcher.dispatch({
      actionType: cfop.Codigo
        ? actionTypes.UPDATE_CFOP
        : actionTypes.CREATE_CFOP,
      cfop: savedCfop,
    });
  });
}

export function loadCfops() {
  return cfopApi.getCfops().then((cfops) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_CFOP,
      cfops: cfops,
    });
  });
}

export function deleteCfop(id) {
  return cfopApi.deleteCfop(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_CFOP,
      id: id,
    });
  });
}
