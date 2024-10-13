
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../home/Home";
import ErrorPage from "../errorpage/ErrorPage";
import Register from "../register/Register";

import Login from "../login/Login";

import PrivateRoutes from "./PrivateRoutes";
import Rooms from "../rooms/Rooms";
import MyBookings from "../myBookings/MyBookings";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import RoomDetails from "../rooms/RoomDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        // {
        //   path: "/allart",
        //   element: <PrivateRoutes><AllArt></AllArt></PrivateRoutes>,
        //   loader: ()=> fetch("https://art-and-craft-store-server-rouge.vercel.app/art")
        // },
        // {
        //   path: "/myart",
        //   element: <PrivateRoutes><MyArt></MyArt></PrivateRoutes>,
        // },
        // {
        //   path: "/updateItem/:id",
        //   element: <PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
        //   loader: ()=> fetch("https://art-and-craft-store-server-rouge.vercel.app/art")
        // },
        
        // {
        //   path: "/addart",
        //   element: <PrivateRoutes><AddArt></AddArt></PrivateRoutes>,
        // },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>,
        },
        {
          path: "/myBookings",
          element: <MyBookings></MyBookings>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/roomDetails/:id",
          element: <RoomDetails></RoomDetails>,
          loader: ()=> fetch("http://localhost:5000/rooms")
        },
        // {
        //   path: "/subCatView/:name",
        //   element: <SubCatView></SubCatView>,
        //   loader: ()=>fetch("https://art-and-craft-store-server-rouge.vercel.app/art")
        // },
        // {
        //   path: "/viewDetails/:id",
        //   element: <ViewDetails></ViewDetails>,
        //   loader: ()=>fetch("https://art-and-craft-store-server-rouge.vercel.app/art")
        // },
      ],
    },
  ]);


export default router;