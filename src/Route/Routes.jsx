import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home";
import ErrorPage from "../Components/ErrorPage/Error";
import LogIn from "../Components/SignIn/LogIn";
import SignUp from "../Components/SignUp/Signup";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../Components/pages/MyCart";
import AddClasses from "../Components/AddClasses/AddClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addClasses",
        element: <AddClasses></AddClasses>
      }
    ],
  },
  {
    path: "/logIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashBoard",
    element: <DashBoard></DashBoard>,
    children:[
       {
     path:"myCart",
     element:<MyCart></MyCart>
  }
    ]

  }
]);

export default router;
