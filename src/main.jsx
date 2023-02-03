import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loggedinRoutes from "./routes/loggedinRoutes.jsx";
import nonLoggedinRoutes from "./routes/nonLoggedinRoutes.jsx";

let login = true;
let routes = nonLoggedinRoutes;

if (login) {
  routes = loggedinRoutes;
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
