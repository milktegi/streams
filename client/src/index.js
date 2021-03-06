import React from 'react';
import RouteDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// 리덕스 푹
import reduxThunk from 'redux-thunk';

// 외부 컴포넌트 import
import App from './components/App';
import reducers from './reducers';

// redux setup!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

RouteDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
