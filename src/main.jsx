import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home1 from "./pages/home/home";
import Login from "./pages/join/login/login";
import Signup from "./pages/join/signup/signup";
import NotFound from "./pages/not-found/not-found";
import "./index.css";
import Test from "./pages/Test/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
  },
  {
    path: "/join/login",
    element: <Login />,
  },
  {
    path: "/join/signup",
    element: <Signup />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
