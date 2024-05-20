import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivetRoute = ({children}) => {
  const location = useLocation()
const{user,loading} = useAuth()
console.log(user,loading);
  if(loading)return <span className="text-center loading loading-infinity loading-lg"></span>
  if (user) {
    return children
  }
  return <Navigate to={'/login'} state={{from:location}} ></Navigate>
};

export default PrivetRoute;