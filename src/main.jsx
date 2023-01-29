import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Add from "./components/Add/Add";
import ArchiveTable from "./components/ArchiveTable/ArchiveTable";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/archive",
    element: <ArchiveTable />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
