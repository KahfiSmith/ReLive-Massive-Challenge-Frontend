import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Artikel from "./pages/artikel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />, 
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/artikel",
    element: <Artikel/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard",
    element: <Dashboard />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
