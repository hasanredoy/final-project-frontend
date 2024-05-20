import { useQuery } from "@tanstack/react-query";
import useAxios from "../CustomCompo/useAxios";
import useAuth from "./useAuth";
const useCart = () => {
  const {user}=useAuth()
  console.log(user);
  const axiosURL = useAxios()
  const {refetch,data:cart=[]} = useQuery({
     queryKey:['cart',user?.email],
     queryFn: async()=>{
       const res = await axiosURL.get(`/cart?email=${user.email}`)
       return res.data
     }
  })
  return [cart,refetch]
};

export default useCart;