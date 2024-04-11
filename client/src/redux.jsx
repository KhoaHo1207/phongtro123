//tao store cho App, tao persist store (co nhiem vu giu lai cai state)
import rootReducer from "./store/reducers/rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { createStore } from "redux"; //tao ra store
//ham tao store, return kieu obj (store, persistStore)
const reduxStore = () => {
  const store = createStore(rootReducer); //lien quan den middleware, xu ly bat dong bo
  const persistor = persistStore(store);

  return { store, persistor };
};

export default reduxStore;
