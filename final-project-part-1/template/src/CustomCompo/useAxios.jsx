import axios from "axios"
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const axiosURL = axios.create({
     baseURL:'http://localhost:5000'
})
const useAxios = () => {
const {logOut}=useAuth()
const navigate = useNavigate()

  axiosURL.interceptors.request.use(function(config){
    const token = localStorage.getItem('access_token')
    // console.log('connection stops by interceptors',token);
    config.headers.authorization =`Bearer ${token}`
    return config;
  },function(error){
    return Promise.reject(error)
  })

  axiosURL.interceptors.response.use(function(res){
    return res;
  },async function (error){
   const status = error.response.status
   if( status ===401 ||status===403){
       await logOut;
       navigate('/login')
   }

    return Promise.reject(error)
  })
  return axiosURL
};

export default useAxios;