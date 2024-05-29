import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import Artikel from "./pages/artikel1";
import Artikel2 from "./pages/artikel2";
import Artikel4 from "./pages/artikel4";
import Artikel3 from "./pages/artikel3";
import ProfilUserPage from "./pages/profilUser";
import ChatUserPage from "./pages/chatUser";
import ChatDetailUserPage from "./pages/chatDetailUser";
import RiwayatUserPage from "./pages/riwayatUser";
import ProfilUserEditPage from "./pages/profilUserEdit";
import RiwayatDetailUserPage from "./pages/riwayatDetailUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/artikel1",
    element: <Artikel />,
  },
  {
    path: "/artikel2",
    element: <Artikel2 />,
  },
  {
    path: "/artikel3",
    element: <Artikel3 />,
  },
  {
    path: "/artikel4",
    element: <Artikel4 />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profil-user",
    element: <ProfilUserPage />,
  },
  {
    path: "/profil-user-edit",
    element: <ProfilUserEditPage />,
  },
  {
    path: "/chat-user",
    element: <ChatUserPage />,
  },
  {
    path: "/detail-chat-user",
    element: <ChatDetailUserPage />,
  },
  {
    path: "/riwayat-user",
    element: <RiwayatUserPage />,
  },
  {
    path: "/detail-riwayat-user",
    element: <RiwayatDetailUserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
