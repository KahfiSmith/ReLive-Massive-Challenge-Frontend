import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Login from "./components/Layouts/Login";
import Register from "./components/Layouts/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    element: <Login/>,
    element: <Register/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
