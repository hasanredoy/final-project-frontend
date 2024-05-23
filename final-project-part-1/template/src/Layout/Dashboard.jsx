import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome,  FaList,  FaShoppingCart, FaStar, FaUser, FaUtensils, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { FaBurger } from "react-icons/fa6";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [cart]=useCart()
const[isAdmin]=useAdmin();

  return (
    <div className=" flex ">
      <div className="w-64 min-h-screen bg-orange-400 flex flex-col items-center ">
        <ul className=" p-3 flex flex-col justify-start items-start gap-5 ">
          {
            isAdmin?<>
            {/* admin navs  */}
              <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/adminHome"}
          >
            <FaHome></FaHome>
            Admin Home
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/addItems"}
          >
            <FaUtensils></FaUtensils>
            Add Items
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/manageItems"}
          >
            <FaList></FaList>
            Manage Items
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/bookings"}
          >
            <FaBook></FaBook>
            Manage Bookings
          </NavLink>
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/dashboard/users"}
          >
            <FaUser></FaUser>
            All Users
          </NavLink>
          
         
            </>:<>
            {/* user navs */}


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
            </>
          }


          {/* common links  */}
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
          <NavLink
            className={
              "flex gap-2 text-xl font-bold text-black justify-center items-center"
            }
            to={"/ourShop/contact"}
          >
            <FaEnvelope></FaEnvelope>
            Contact
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
