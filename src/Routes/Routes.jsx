import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import SelectedClasses from "../Pages/Dashboards/Student-Dashboard/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboards/Student-Dashboard/EnrolledClasses";
import MyPayments from "../Pages/Dashboards/Student-Dashboard/MyPayments";
import ManageUser from "../Pages/Dashboards/Admin-Deshboard/ManageUser";
import ManageClass from "../Pages/Dashboards/Admin-Deshboard/ManageClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "selectedClasses",
        element: <SelectedClasses />,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses />,
      },
      {
        path: 'mypayments',
        element: <MyPayments></MyPayments>
      },
      {
        path: 'manageUsers',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'manageClasses',
        element: <ManageClass></ManageClass>
      }
    ]
  },
]);
