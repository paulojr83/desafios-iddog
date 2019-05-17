import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/login";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Login />
    </Fragment>
  </Provider>
);

export default App;
