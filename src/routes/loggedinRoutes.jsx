import HomePage from "../pages/HomePages/HomePage/HomePage";
import LoggedInUserHomePage from "../pages/HomePages/LoggedInUserHomePage/LoggedInUserHomePage";
import Login from "../pages/JoinPages/LoginPage/Login";
import Signup from "../pages/JoinPages/Signup/Signup";
import Cart from "../pages/Cart/Cart";
import CoursePage from "../pages/CoursePage/CoursePage";
import CategoryCoursePage from "../pages/CategoryCoursePage/CategoryCoursePage";
import ProfilePage from "../pages/User/ProfilePage/ProfilePage";
import MyCoursesPage from "../pages/User/MyCoursesPage/MyCoursesPage";
import AllCoursesComponent from "../components/UserComponents/MyCourses/AllCoursesComponent/AllCoursesComponent";
import MyListsComponent from "../components/UserComponents/MyCourses/MyListsComponent/MyListsComponent";
import WishListComponent from "../components/UserComponents/MyCourses/WishListComponent/WishListComponent";
import ArchivedComponent from "../components/UserComponents/MyCourses/ArchivedComponent/ArchivedComponent";
import ProfileSettingsComponent from "../components/UserComponents/Profile/ProfileSettingsComponent/ProfileSettingsComponent";
import BasicSettingsComponent from "../components/UserComponents/Profile/BasicSettingsComponent/BasicSettingsComponent";
import PhotoComponent from "../components/UserComponents/Profile/PhotoComponent/PhotoComponent";
import PrivacyComponent from "../components/UserComponents/Profile/PrivacyComponent/PrivacyComponent";
import ToolsComponent from "../components/UserComponents/ToolsComponent/ToolsComponent";
import ResourcesComponent from "../components/UserComponents/ResourcesComponent/ResourcesComponent";
import Checkout from "../pages/Checkout/Checkout";
import PublicProfile from "../pages/User/PublicProfile/PublicProfile";
import CourseViewPage from "../pages/CourseViewPage/CourseViewPage";
import NotFound from "../pages/NotFound/NotFound";
import "../index.css";
import Test from "../pages/Test/Test";

import OverViewTabComponent from "../components/CourseVideoComponents/CourseViewTabComponents/OverViewTabComponent/OverViewTabComponent";
import NotesTabComponent from "../components/CourseVideoComponents/CourseViewTabComponents/NotesTabComponent/NotesTabComponent";
import QuestionsTabComponent from "../components/CourseVideoComponents/CourseViewTabComponents/QuestionsTabComponent/QuestionsTabComponent";
import ReviewsTabComponent from "../components/CourseVideoComponents/CourseViewTabComponents/ReviewsTabComponent/ReviewsTabComponent";
import AnnouncementsTabComponent from "../components/CourseVideoComponents/CourseViewTabComponents/AnnouncementsTabComponent/AnnouncementsTabComponent";
import SearchTabComponent from "../components/CourseVideoComponents/CourseViewTabComponents/SearchTabComponent/SearchTabComponent";
import CourseContentTabComponent from "../components/CourseVideoComponents/CourseViewTabComponents/CourseContentTabComponent/CourseContentTabComponent";

import InstructorCoursePage from "../pages/InstructorPages/InstructorCoursePage/InstructorCoursePage";
import CreateCourseSteps from "../pages/InstructorPages/CreateCourseSteps/CreateCourseSteps";
import CreateCourse from "../pages/InstructorPages/CreateCourse/CreateCourse";

const loggedinRoutes = [
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
    path: "/user/:id",
    element: <PublicProfile />,
  },
  {
    path: "/user/profile",
    element: <ProfilePage />,
    children: [
      {
        path: "courses",
        element: <InstructorCoursePage />,
      },
      {
        path: "communication",
        element: <ResourcesComponent />,
      },
      {
        path: "performance",
        element: <ResourcesComponent />,
      },
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
      {
        path: "tools",
        element: <ToolsComponent />,
      },
      {
        path: "resources",
        element: <ResourcesComponent />,
      },
    ],
  },
  {
    path: "/courses/create/:step",
    element: <CreateCourseSteps />,
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
  {
    path: "/course/view/:id",
    element: <CourseViewPage />,
    children: [
      {
        path: "",
        element: <SearchTabComponent />,
      },
      {
        path: "search",
        element: <SearchTabComponent />,
      },
      {
        path: "content",
        element: <CourseContentTabComponent />,
      },
      {
        path: "overview",
        element: <OverViewTabComponent />,
      },
      {
        path: "questions",
        element: <QuestionsTabComponent />,
      },
      {
        path: "notes",
        element: <NotesTabComponent />,
      },
      {
        path: "announcements",
        element: <AnnouncementsTabComponent />,
      },
      {
        path: "reviews",
        element: <ReviewsTabComponent />,
      },
    ],
  },
  {
    path: "/instructor/create-course",
    element: <CreateCourse />,
  },
];

export default loggedinRoutes;
