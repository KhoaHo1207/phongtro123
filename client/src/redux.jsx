//tao store cho App, tao persist store (co nhiem vu giu lai cai state)
import rootReducer from "./store/reducers/rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { createStore, applyMiddleware } from "redux"; //tao ra store
//ham tao store, return kieu obj (store, persistStore)
import {thunk} from "redux-thunk";
const reduxStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk)); //lien quan den middleware, xu ly bat dong bo, thunk -> cho phep goi api trong luc dispatch action len redcuers
  const persistor = persistStore(store);

  return { store, persistor };
};

export default reduxStore;
