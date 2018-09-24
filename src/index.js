import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import configureStore from "./store/index";

import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = configureStore()
console.log('configureStore:', configureStore)
ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
   
  </Provider>, document.getElementById('root'));
registerServiceWorker();
