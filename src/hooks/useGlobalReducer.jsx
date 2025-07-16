// src/hooks/useGlobalReducer.js
import { useContext } from "react";
import { GlobalContext } from "../main.jsx";

export default function useGlobalReducer() {
  return useContext(GlobalContext);
}
