import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
// import Navbar from "../../shared/Navbar";
import { useContext } from "react";

// import axios from "axios";
import { AuthContext } from "../../authProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import GoogleLogin from "../../components/SocialLogin/GoogleLogin";

const Login = () => {

const {signIn}=useContext(AuthContext) 
  // console.log(name);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || "/";


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    // console.log(user);

    signIn(email, password)
      .then((res) => {
        // console.log(res.user);

 
        // const user = {email}
 
        toast.success('logged in successfully')
 
        setTimeout(()=>{
          navigate(from)

        },500)
    
      })
      .catch((err) => {
        toast.error('check password and email and try again')
        console.log(err)});
  };
  return (
    <div>
      
      <div className="hero my-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginImg} className=" w-full" alt="" />
          </div>
          <div className="card shrink-0 w-1/2  border p-10">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="text-xl font-bold-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary btn-outline">Login</button>
              </div>
            </form>
            <div className="divider">or</div>
            <div>
              <GoogleLogin></GoogleLogin>
            </div>
            <p className=" py-5 font-bold text-center text-lg">
              {" "}
              New Here{" "}
              <Link to={"/register"} className=" font-bold text-blue-600">
                Register
              </Link>{" "}
              !!
            </p>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
