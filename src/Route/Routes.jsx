import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home";
import ErrorPage from "../Components/ErrorPage/Error";
import LogIn from "../Components/SignIn/LogIn";
import SignUp from "../Components/SignUp/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  }, 
  {
     path:"/logIn",
     element:<LogIn></LogIn>
  },
  {
     path:"/signUp",
     element:<SignUp></SignUp>
  }
]);

export default router;