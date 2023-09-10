import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestraurntMenu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>)
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restraunt/:resId",
                element: <RestrauntMenu />
            }
        ],
        errorElement: <Error />,
    },

]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
