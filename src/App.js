import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/Style.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
//basic of redux
// import { createStore } from "redux";
// const reducer = (state = 0, action) => {
//   //console.log("reducer is called");
//   if (action.type == "INCREMENT") return state + action.payload;
//   if (action.type == "DECREMENT") return state - action.payload;
//   return state;
// };
// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log("Current State", store.getState());
// });

// store.dispatch({
//   type: "INCREMENT",
//   payload: 5,
// });

// store.dispatch({
//   type: "DECREMENT",
//   payload: 2,
// });

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={ContactForm} path="/" exact></Route>
          <Route component={ContactList} path="/contactlist"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
