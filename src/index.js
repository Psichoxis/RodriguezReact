import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrMTcnP_grCg5F62t3Fjj71JSlEXMJjFI",
  authDomain: "galacticcakess.firebaseapp.com",
  projectId: "galacticcakess",
  storageBucket: "galacticcakess.appspot.com",
  messagingSenderId: "633443165962",
  appId: "1:633443165962:web:f96d127debc53f0b617cf3",
  measurementId: "G-ZSMMERGHZ1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();