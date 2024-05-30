import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../CustomCompo/useAxiosCommon";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const {signInWithGoogle}=useAuth()
  const axiosCommon = useAxiosCommon()
  const navigate = useNavigate()

  const handleGoogleLogin = ()=>{
    signInWithGoogle()
    .then(res=>{
      // console.log(res.user);
      const userData = {
        name:res?.user?.displayName,
        email:res?.user?.email,
      }
      axiosCommon.post("/users",userData)
      .then(res=>{
        // console.log(res.data);
        navigate('/')
      })
    })
    .catch(err=>{
      console.log(err);      
    })
  }
  return (
    <div className=" flex justify-center">
      <button onClick={handleGoogleLogin} className="btn btn-outline btn-success btn-md flex justify-center items-center ">
          <FcGoogle></FcGoogle>
          Continue With Google
      </button>
    </div>
  );
};

export default GoogleLogin;