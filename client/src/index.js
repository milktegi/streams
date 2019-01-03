import React from 'react';
import RouteDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 외부 컴포넌트 import
import App from './components/App';
import reducers from './reducers';

// redux setup!

const store = createStore(reducers);

RouteDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root')
);
