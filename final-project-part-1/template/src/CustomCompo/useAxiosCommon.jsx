import axios from "axios";

const axiosCommon = axios.create({
  baseURL:'https://bistro-boss-server-delta-ashy.vercel.app'
})
const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;