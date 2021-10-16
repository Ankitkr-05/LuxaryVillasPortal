import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '././Component/App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/store/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
