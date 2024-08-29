// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { Provider } from "react-redux";
// import { Toaster } from "./components/ui/sonner";
// import store from "./redux/store.js";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//          <Provider store={store}>
//              <App />
//          </Provider>
//    <Toaster />
//   </StrictMode>
// );


import React from "react";
import ReactDom from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { Toaster } from "./components/ui/sonner";
import store from "./redux/store.js";
import { persistStore } from "redux-persist";  // this is help when you reload the page every time you need to log in , due to it not every reload you have to log in the page
import { PersistGate } from "redux-persist/integration/react";  // this is help when you reload the page every time you need to log in , due to it not every reload you have to log in the page

const persistor =  persistStore(store);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <App />
      </PersistGate>
    </Provider>

    <Toaster />
  </React.StrictMode>
);