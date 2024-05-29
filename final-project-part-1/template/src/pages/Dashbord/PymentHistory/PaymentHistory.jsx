import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomCompo/useAxios";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const {user}=useAuth()
const email = user?.email
  const axiosURL=useAxios()
  const {data: payments=[] }=useQuery({
    queryKey:['payments',email],
    queryFn:async()=>{
      const res = axiosURL.get(`/payments/${email}`)
      console.log(res.data);
      return res
    }
  })
  console.log(payments);
  return (
    <div>
      
    </div>
  );
};

export default PaymentHistory;