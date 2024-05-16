import {Link} from 'react-router-dom'

const Navbar = () => {
  const navs = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <Link>Our Menu</Link>
      </li>
      <li>
        <Link>Our Shop</Link>
      </li>
    
    </>
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
        <a className="btn btn-ghost text-2xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navs}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
