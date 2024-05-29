import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "../CustomCompo/useAxios";

const useAdmin = () => {
  const {user, loading}=useAuth()
  const axiosURL = useAxios()
  const {data:isAdmin,isPending: isAdminLoading}= useQuery({
    queryKey:[user?.email,'admin'],
    enabled: !loading,
    queryFn: async()=>{
      const res = await axiosURL.get(`/users/admin/${user?.email}`)
      // console.log(res.data);
      return res.data.admin;
    }
  })
  return [isAdmin , isAdminLoading];
};

export default useAdmin;