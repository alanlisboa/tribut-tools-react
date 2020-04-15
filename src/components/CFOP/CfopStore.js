import { EventEmitter } from "events";
import Dispatcher from "../../AppDispatcher";
import actionTypes from "./CfopActionsTypes";

const CHANGE_EVENT = "change";
let _cfops = [];

class CfopStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCfops() {
    return _cfops;
  }

  getCourseByCode(code) {
    return _cfops.find((cfop) => cfop.codigo === code);
  }
}

const cfopStore = new CfopStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_CFOP:
      _cfops = _cfops.filter((cfop) => cfop.id !== action.id);
      cfopStore.emitChange();
      break;
    case actionTypes.CREATE_CFOP:
      _cfops.push(action.cfop);
      cfopStore.emitChange();
      break;
    case actionTypes.UPDATE_CFOP:
      _cfops = _cfops.map((cfop) =>
        cfop.id === action.cfop.id ? action.cfop : cfop
      );
      cfopStore.emitChange();
      break;
    case actionTypes.LOAD_CFOP:
      _cfops = action.cfops;
      cfopStore.emitChange();
      break;
    default:
    // No defaults
  }
});

export default cfopStore;
