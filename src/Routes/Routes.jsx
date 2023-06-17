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
import AddClasses from "../Pages/Dashboards/Instructor-Dashboard/AddClasses";
import MyClasses from "../Pages/Dashboards/Instructor-Dashboard/MyClasses";
import Error from "../Components/Error/Error";
import UpdateClass from "../Pages/Dashboards/Instructor-Dashboard/UpdateClass";
import AdminFeedback from "../Pages/Dashboards/Admin-Deshboard/AdminFeedback";
import Payment from "../Pages/Dashboards/Student-Dashboard/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        // element: <PasswordForm></PasswordForm>

      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    errorElement: <Error></Error>,
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
      },
      {
        path: 'addclass',
        element: <AddClasses></AddClasses>
      },
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'updateclass/:id',
        element: <UpdateClass></UpdateClass>,
        loader: ({params}) => fetch(`https://educam-server.vercel.app/classes/${params.id}`)
        
      },
      {
        path: 'feedback/:id',
        element: <AdminFeedback></AdminFeedback>,
        loader: ({params}) => fetch(`https://educam-server.vercel.app/classes/${params.id}`)
        
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }
    ]
  },
]);
