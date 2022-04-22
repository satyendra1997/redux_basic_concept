This  Project uses all the basic concept of Redux.

To Learn Redux we need to know about<br/>

1.Reducers ---it is nothing but functions that take the current state and an action as arguments and return a new state result(without modifying the state ex. state = state + action.payload; // don't modify the original state). 
In other words, (state, action) => newState.<br/>

2.Actions---An action is an object sent to the store.must have type property<br/>

Now first create a store to store the data like:<br/>
step 1. import { createStore } from "redux";<br/>
step 2.create a reducer like---<br/>

const reducer = (state = 0, action) => {
   if (action.type == "INCREMENT") return state + action.payload;
   if (action.type == "DECREMENT") return state - action.payload;
   return state;
 };
 
 step 3. const store = createStore(reducer); //this will create a store<br/>
 
 step 4. store.dispatch({
  type: "INCREMENT",
  payload: 5,
});
<br/>
store.dispatch({
  type: "DECREMENT",
 payload: 2,
 });
 //the object we are passing in dispatch function is action 
 
 to user the in different component we use Provider function to pass the store and use connect function to access the store
 
 like: <Provider store={store}>
    <App />
  </Provider>
  <br/>
  Dependecies to be install :
  1.redux
  2.react-redux
  3.react-router-dom
  4.uuid
  
  Looks like
  ![Screenshot (1237)](https://user-images.githubusercontent.com/52390883/164606211-7a4fcf5d-c4bf-4222-adb4-fbf4b77c2b29.png)

  ![Screenshot (1238)](https://user-images.githubusercontent.com/52390883/164606050-18266b1b-4091-44aa-aa91-e777507b9d35.png)

 App is live on:
 https://satyendra1997.github.io/redux_basic_concept/
