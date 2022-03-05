import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import Routers from "./Routers";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};
export default App;
