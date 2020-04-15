import { EventEmitter } from "events";
import Dispatcher from "../../AppDispatcher";
import actionTypes from "./NcmActionsTypes";

const CHANGE_EVENT = "change";
let _ncms = [];

class NcmStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getNcms() {
    return _ncms;
  }

  getCourseByCode(code) {
    return _ncms.find((ncm) => ncm.codigo === code);
  }
}

const ncmStore = new NcmStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_NCM:
      _ncms = _ncms.filter((ncm) => ncm.id !== action.id);
      ncmStore.emitChange();
      break;
    case actionTypes.CREATE_NCM:
      _ncms.push(action.ncm);
      ncmStore.emitChange();
      break;
    case actionTypes.UPDATE_NCM:
      _ncms = _ncms.map((ncm) => (ncm.id === action.ncm.id ? action.ncm : ncm));
      ncmStore.emitChange();
      break;
    case actionTypes.LOAD_NCM:
      _ncms = action.ncms;
      ncmStore.emitChange();
      break;
    default:
    // No defaults
  }
});

export default ncmStore;
