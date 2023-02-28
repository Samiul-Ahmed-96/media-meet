import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";

const routes = createBrowserRouter([
    {
        path:'/login',
        element : <Login/>
    },
    {
        path:'/register',
        element : <Register/>
    },
    {
        path:'/',
        element: <Main/>,
        children : [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/profile/:id',
                element:<Profile/>
            },
        ]
    }
])

export default routes;