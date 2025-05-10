import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Products from "./Products";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import About from "./About";

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
    ],
  },
]);

export default router;
