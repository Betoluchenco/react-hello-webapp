import React, { useReducer, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes.jsx";
import { reducer, initialState } from "./store.js";
import "./index.css";

export const GlobalContext = createContext();

const Main = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
