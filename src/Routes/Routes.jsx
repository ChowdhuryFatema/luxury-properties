import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ResidentialDetails from "../pages/ResidentialDetails/ResidentialDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ProtectedRoute from "./ProtectedRoute";
import Contact from "../pages/ContactUs/Contact";

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
          element: <ProtectedRoute>
            <ResidentialDetails></ResidentialDetails>
          </ProtectedRoute>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/update-profile',
          element: <ProtectedRoute>
            <UpdateProfile></UpdateProfile>
          </ProtectedRoute>,
        },
        {
          path: '/contact-us',
          element: <ProtectedRoute>
            <Contact></Contact>
            </ProtectedRoute>,
        },
      ],
    },
  ]);

  export default router;