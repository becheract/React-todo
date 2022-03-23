import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Help from './components/Help/Help'
import reportWebVitals from './reportWebVitals';
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/React-Web-App" element={<App />} />
      <Route path="/help" element={<Help />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
