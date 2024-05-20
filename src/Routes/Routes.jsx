
import {
    createBrowserRouter
  
  } from "react-router-dom"; 
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Product from "../pages/Product/Product";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'product',
          element:<Product></Product>
        }
      ]
    },
  ]);


  export default router