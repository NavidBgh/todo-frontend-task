import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.scss";
import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./redux/reducers";

const store = configureStore({ reducer: combineReducers });

const container = document.getElementById("todoapp")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
