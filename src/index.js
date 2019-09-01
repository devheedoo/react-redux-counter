import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// 스토어 생성
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers,
  // Redux Devtools 확장 프로그램 실행
  window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
