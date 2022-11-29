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
import ProfilePage from "./pages/User/ProfilePage/ProfilePage";
import MyCoursesPage from "./pages/User/MyCoursesPage/MyCoursesPage";
import AllCoursesComponent from "./components/UserComponents/MyCourses/AllCoursesComponent/AllCoursesComponent";
import MyListsComponent from "./components/UserComponents/MyCourses/MyListsComponent/MyListsComponent";
import WishListComponent from "./components/UserComponents/MyCourses/WishListComponent/WishListComponent";
import ArchivedComponent from "./components/UserComponents/MyCourses/ArchivedComponent/ArchivedComponent";
import LearningToolsComponent from "./components/UserComponents/MyCourses/LearningToolsComponent/LearningToolsComponent";
import ProfileSettingsComponent from "./components/UserComponents/Profile/ProfileSettingsComponent/ProfileSettingsComponent";
import BasicSettingsComponent from "./components/UserComponents/Profile/BasicSettingsComponent/BasicSettingsComponent";
import PhotoComponent from "./components/UserComponents/Profile/PhotoComponent/PhotoComponent";
import PrivacyComponent from "./components/UserComponents/Profile/PrivacyComponent/PrivacyComponent";
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
    path: "/user/profile",
    element: <ProfilePage />,
    children: [
      {
        path: "settings",
        element: <ProfileSettingsComponent />,
        children: [
          {
            path: "basic",
            element: <BasicSettingsComponent />,
          },
          {
            path: "photo",
            element: <PhotoComponent />,
          },
          {
            path: "privacy",
            element: <PrivacyComponent />,
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
        element: <AllCoursesComponent />,
      },
      {
        path: "lists",
        element: <MyListsComponent />,
      },
      {
        path: "wishlist",
        element: <WishListComponent />,
      },
      {
        path: "archived",
        element: <ArchivedComponent />,
      },
      {
        path: "learning-tools",
        element: <LearningToolsComponent />,
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
