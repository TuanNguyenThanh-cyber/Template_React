import React from "react";
import ReactDOM from "react-dom";
import "./styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Setup redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";

const middleware = applyMiddleware(thunk);
const enhancer = compose(
  middleware, // middleware
  // redux devtools: Dùng để theo dõi các action, state thay đổi như thế nào trên redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
