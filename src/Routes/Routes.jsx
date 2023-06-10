import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import AdminDashboard from "../Pages/Dashboards/Admin-Deshboard/AdminDashboard";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>
    }
  ]);