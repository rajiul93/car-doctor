import { createBrowserRouter } from "react-router-dom";
import About from "../Page/About/About";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";
import Home from "../Page/Home/Home";
import Service from "../Page/Services/Service";
import Root from "../Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
