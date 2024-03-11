import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHomePage from "./components/user/UserHomePage.jsx";
import Admin from "./components/admin/Admin.jsx";
import ListOfServices from "./components/Lists/ListOfServices.jsx";
import ListOfOrders from "./components/Lists/ListOfOrders.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserHomePage />,
    errorElement: <div>error DBH not found</div>,
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <div>error Admin page not found</div>,
    children: [
      {
        path: "services",
        element: <ListOfServices />,
        errorElement: <div>error services not found</div>,
      },
      {
        path: "orders",
        element: <ListOfOrders />,
        errorElement: <div>error orders not found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
