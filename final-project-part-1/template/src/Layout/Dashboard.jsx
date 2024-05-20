import { FaAd, FaCalendar, FaHome, FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { FaBurger } from "react-icons/fa6";
import useCart from "../hooks/useCart";
const Dashboard = () => {
  const [cart]=useCart()
  return (
    <div className=" flex ">
      <div className="w-64 min-h-screen bg-orange-400 flex flex-col items-center ">
        <ul className=" p-3 flex flex-col justify-start items-start gap-5 ">
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/userHome"}
          >
            <FaHome></FaHome>
            User Home
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/reservation"}
          >
            <FaCalendar></FaCalendar>
            Reservation
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/payment"}
          >
            <FaAd></FaAd>
            Payment History
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/cart"}
          >
            <FaShoppingCart></FaShoppingCart>
            Cart ({cart.length})
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/review"}
          >
            <FaStar></FaStar>
            Add Review
          </NavLink>
          
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/myBooking"}
          >
            <FaCalendar></FaCalendar>
            My Booking
          </NavLink>
          <div className="divider"></div>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/"}
          >
            <FaHome></FaHome>
            Home
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/ourShop/salad"}
          >
            <FaBurger></FaBurger>
            Menu
          </NavLink>
        </ul>
      </div>
      <div className=" flex-1 bg-base-200 p-14">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
