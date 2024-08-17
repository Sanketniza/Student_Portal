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

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    <Toaster />
  </React.StrictMode>
);