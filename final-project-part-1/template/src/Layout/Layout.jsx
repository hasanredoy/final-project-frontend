import {Outlet, useLocation} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Layout = () => {
  const location = useLocation()
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
      <Outlet></Outlet>
      </div>
      {
        location?.pathname==='/contactUs'||<div>
        <Footer></Footer>
      </div>
      }
    </div>
  );
};

export default Layout;