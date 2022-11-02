import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home1 from "./pages/Home1/Home1";
import NotFound from "./pages/NotFound/NotFound";
import "./index.css";
import Test from "./pages/Test/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
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
