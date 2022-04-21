import { createStore } from "redux";
import contactReducer from "../reducers/contactReducers";

const store = createStore(contactReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
