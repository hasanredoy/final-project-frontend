import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCartCheckFill } from "react-icons/bs";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]= useCart()
  const [isAdmin]=useAdmin()
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logged out successfully");
      })
      .catch();
  };
  const navs = (
    <div className=" flex  gap-4 font-bold text-lg">
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/contactUs"}>Contact Us</NavLink>

{user&&isAdmin&&<NavLink to={"/dashboard/adminHome"}>Dashboard</NavLink>}
{user&&!isAdmin&&<NavLink to={"/dashboard/userHome"}>Dashboard</NavLink>}
      

      <NavLink to={"/ourMenu"}>Our Menu</NavLink>

      <NavLink to={"/ourShop"}>Our Shop</NavLink>
     <NavLink to={'/dashboard/cart'}>
     <button className=" flex p-2 rounded-full bg-orange-900">
        <BsCartCheckFill className=" text-2xl"></BsCartCheckFill>
        <div className="badge badge-secondary">+{cart.length}</div>
      </button>
     </NavLink>
    </div>
  );
  return (
    <div className="navbar fixed z-50  bg-black bg-opacity-30 max-w-6xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navs}
          </ul>
        </div>
        <div className="flex flex-col  gap-0">
          <a className=" text-3xl font-bold ">Bistro Boss </a>
          <span className=" text-lg uppercase ">R e s t a u r a n t</span>
        </div>
      </div>
      <div className="navbar-end w-[80%] hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navs}</ul>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn text-white font-bold btn-error ml-2"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-accent text-white font-bold ml-2">
              Login
            </button>
          </Link>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
