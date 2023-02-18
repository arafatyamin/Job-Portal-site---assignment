import { createBrowserRouter } from "react-router-dom";
import ApplayForm from "../components/ApplayForm";
import Root from "../Layout/Root";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Job from "../pages/Job";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Companies from "../pages/TopJobCategories/Companies";
import Experiences from "../pages/TopJobCategories/Experiences";
import Fresher from "../pages/TopJobCategories/Fresher";
import PrivetRoute from "./PrivetRoute";

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
               element: <PrivetRoute><Fresher></Fresher></PrivetRoute> 
            },
            {
               path: "/Experiences",
               element: <PrivetRoute><Experiences></Experiences></PrivetRoute> 
            },
            {
               path: "/Companies",
               element: <PrivetRoute><Companies></Companies></PrivetRoute> 
            },
            {
               path: "/applyform",
               element: <PrivetRoute><ApplayForm></ApplayForm></PrivetRoute> 
            },
            {
               path: "/about",
               element: <About></About>
            },
            {
               path: "/job",
               element: <Job></Job>
            },
            {
               path: "/contact",
               element: <Contact></Contact>
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