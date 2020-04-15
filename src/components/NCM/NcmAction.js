import dispatcher from "../../AppDispatcher";
import * as ncmApi from "../../api/ncmApi";
import actionTypes from "./NcmActionsTypes";

export function saveNcm(ncm) {
  return ncmApi.saveNcm(ncm).then((savedNcm) => {
    dispatcher.dispatch({
      actionType: ncm.Codigo ? actionTypes.UPDATE_NCM : actionTypes.CREATE_NCM,
      ncm: savedNcm,
    });
  });
}

export function loadNcms() {
  return ncmApi.getNcms().then((ncms) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_NCM,
      ncms: ncms,
    });
  });
}

export function deleteNcm(id) {
  return ncmApi.deleteNcm(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_NCM,
      id: id,
    });
  });
}
