import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA2SA1BjO_AF5jS7ts12ukQ4ggPqGgTa2g",
  authDomain: "react-chat-7133f.firebaseapp.com",
  projectId: "react-chat-7133f",
  storageBucket: "react-chat-7133f.appspot.com",
  messagingSenderId: "961071281142",
  appId: "1:961071281142:web:6507f97b616eeb009f8dd7",
  measurementId: "G-276C5PTL4S"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore
  }}>
    <App />
  </Context.Provider>
);
