import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";

import Products from "../components/pages/Products";
import Blogs from "../components/pages/Blogs";
import Contacts from "../components/pages/Contacts";
import About from "../components/pages/About";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contacts",
        Component: Contacts,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
