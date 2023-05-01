import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/LoginSite/Login";
import Home from "../pages/Home";
import Booking from "../pages/Booking";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/booking",
                element: <Booking />
            },
        ]
    }
]);

export default Router;