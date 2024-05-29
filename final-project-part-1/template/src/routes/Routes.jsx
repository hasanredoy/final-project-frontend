import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Menu from "../pages/menuPage/Menu";
import OurShop from "../pages/OurShop/OurShop";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivetRoute from "../pages/PrivetRoute/PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashbord/Cart/Cart";
import AllUsers from "../pages/Dashbord/AllUsers/AllUsers";
import AddItem from "../pages/Dashbord/AddItem/AddItem";
import AdminPrivetRoute from "../pages/PrivetRoute/AdminPrivetRoute";
import ManageItems from "../pages/Dashbord/ManageItems/ManageItems";
import UpdateMenu from "../pages/Dashbord/updateMenu/UpdateMenu";
import Payment from "../pages/Dashbord/Payment/Payment";
import PaymentHistory from "../pages/Dashbord/PymentHistory/PaymentHistory";
import UserHome from "../pages/Dashbord/UserHome/UserHome";
import AdminHome from "../pages/Dashbord/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: (
          <PrivetRoute>
            <Menu></Menu>
          </PrivetRoute>
        ),
      },
      {
        path: "/ourShop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/ourShop/:category",
        element: (
          <PrivetRoute>
            <OurShop></OurShop>
          </PrivetRoute>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <PrivetRoute>
            <ContactUs></ContactUs>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin 
      {
        path: "adminHome",
        element: <AdminPrivetRoute><AdminHome></AdminHome></AdminPrivetRoute>,
      },
      {
        path: "addItems",
        element: <AdminPrivetRoute><AddItem></AddItem></AdminPrivetRoute>,
      },
      {
        path: "update/:id",
        element: <AdminPrivetRoute><UpdateMenu></UpdateMenu></AdminPrivetRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "manageItems",
        element: <AdminPrivetRoute><ManageItems></ManageItems></AdminPrivetRoute>,
      },
      {
        path: "users",
        element: <AdminPrivetRoute> <AllUsers></AllUsers></AdminPrivetRoute>,
      },
    ],
  },
]);

export default router;
