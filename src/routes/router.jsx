import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AllVisas from "../components/AllVisas";
import MyAddedVisas from "../components/MyAddedVisas";
import AddVisa from "../components/AddVisa";
import NotFound from "../components/NotFound";
import PrivateRoute from "../components/PrivateRouter";
import VisaDetails from "../components/VisaDetails";
import MyVisaApplications from "../components/MyVisaApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('https://visa-navigate-server-five.vercel.app/visa')
       },
      {
        path: "all-visas",
        element: <AllVisas></AllVisas>,
        loader: ()=>fetch('https://visa-navigate-server-five.vercel.app/visa')
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
       {
        path: "add-visa",
        element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute> ,
      },
      {
        path: "my-added-visas",
        element:<PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute> ,
      },
      {
        path: "my-visa-applications",
        element: <PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute> ,
      },
      {
        path: "visa-details/:id",
        element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute> ,
      }
    ],
  },{
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default router;
