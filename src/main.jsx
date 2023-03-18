import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import SupabaseQuery from "./components/SupabaseQuery/SupabaseQuery";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <SupabaseQuery />
  </React.StrictMode>
);
