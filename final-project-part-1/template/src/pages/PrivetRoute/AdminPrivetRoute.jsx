import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";

const AdminPrivetRoute = ({children}) => {
  const {user , loading} = useAuth()
   const [isAdmin,isAdminLoading] = useAdmin()

   const location = useLocation()
   if(loading || isAdminLoading)return <span className="text-center loading loading-infinity loading-lg"></span>
   if (user && isAdmin) {
     return children
   }
   return <Navigate to={'/'} state={{from:location}} ></Navigate>
};

export default AdminPrivetRoute;