import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import AllReducer from "./Components/Store/CompaineReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Create Store
const store = createStore(
  AllReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  // Reason for, I've used this line is Chrome Extension
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
