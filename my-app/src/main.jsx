import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import {Provider} from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import Store, { persistor } from './Redux/Store.jsx'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={Store}>
     <PersistGate loading={null} persistor={persistor}>
        <ToastContainer 
        theme='dark'
        position='top-right'
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
        />
        <App />
        </PersistGate>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)