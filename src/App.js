
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, createHashHistory } from 'history';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import '@babel/polyfill';
//  import 'sanitize.css/sanitize.css';

import rootReducer from './reducers';
import rootSaga from './sagas';
import LoginPage from './containers/LoginPageContainer';
import HomePage from './containers/HomePageContainer';
import NoRouteFound from './components/NoRouteFound';


const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);


const App = () => {

  return (
  
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NoRouteFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  );
};
export default App;

