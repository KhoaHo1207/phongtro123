// gom reducer con lai voi nhau
import authReducer from "./authReducer";
import userReducer from "./userReducer";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
const commonConfig = {
  //muon refesh trang lai khong doi -> luu lai duoi local
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"], //noi cho redux perist muon giu gia tri nao duoi local, backlist-> khong luu
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer), //dung persist luu state duoi local
  user: userReducer,
});

export default rootReducer;
