import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ResidentialDetails from "../pages/ResidentialDetails/ResidentialDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/residential/:id',
          element: <ResidentialDetails></ResidentialDetails>,
          loader: () => fetch('/data.json')
        },
      ],
    },
  ]);

  export default router;