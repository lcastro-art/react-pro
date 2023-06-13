import * as React from "react";
import * as ReactDOM from "react-dom/client";
import logo from '../logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import { About } from "../pages/About";

function Root () {
    return (

        <div className="main-layout">
            <nav>
                <img src={logo} alt="React log" />
                <ul>
                    <li>
                        <NavLink 
                            to="/home" className={({isActive}) => isActive ? "nav-active" : ""}   
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" className={({isActive}) => isActive ? "nav-active" : ""}   
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/users" className={({isActive}) => isActive ? "nav-active" : ""}   
                        >
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <h1>Home</h1>
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "users",
                element: <h1>Users page</h1>,
            }

        ]
    },
    {
        path: "/*",
        element: <Navigate to="/home" replace={true} />
    }
]);


export const Navigation = () => {
  return (
    <RouterProvider router={router} />
  )
}
