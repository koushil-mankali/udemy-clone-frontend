import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePages/HomePage/HomePage";
import LoggedInUserHomePage from "./pages/HomePages/LoggedInUserHomePage/LoggedInUserHomePage";
import Login from "./pages/Join/login/Login";
import Signup from "./pages/Join/signup/Signup";
import Cart from "./pages/Cart/Cart";
import CoursePage from "./pages/CoursePage/CoursePage";
import CategoryCoursePage from "./pages/CategoryCoursePage/CategoryCoursePage";
import MyCoursesPage from "./pages/User/MyCoursesPage/MyCoursesPage";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";
import "./index.css";
import Test from "./pages/Test/Test";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomePage />,
    element: <LoggedInUserHomePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
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
    path: "/course/:id",
    element: <CoursePage />,
  },
  {
    path: "/courses",
    element: <CategoryCoursePage />,
    children: [
      {
        path: ":catId",
        element: <CategoryCoursePage />,
        children: [
          {
            path: ":subCatId",
            element: <CategoryCoursePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/user/my-courses",
    element: <MyCoursesPage />,
    children: [
      {
        path: "learning",
        element: <CategoryCoursePage />,
      },
      {
        path: "lists",
        element: <CategoryCoursePage />,
      },
      {
        path: "whishlist",
        element: <CategoryCoursePage />,
      },
      {
        path: "archived",
        element: <CategoryCoursePage />,
      },
      {
        path: "learning-tool",
        element: <CategoryCoursePage />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
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
