import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Companies from "../pages/TopJobCategories/Companies";
import Experiences from "../pages/TopJobCategories/Experiences";
import Fresher from "../pages/TopJobCategories/Fresher";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        
        path: "/",
        element: <Root></Root>,
        children: [
            {
               path: "/Fresher",
               element: <Fresher></Fresher> 
            },
            {
               path: "/Experiences",
               element: <Experiences></Experiences> 
            },
            {
               path: "/Companies",
               element: <Companies></Companies> 
            },
            {
               path: "/signIn",
               element: <SignIn></SignIn> 
            },
            {
               path: "/signUp",
               element: <SignUp></SignUp> 
            }
        ]
    }
])