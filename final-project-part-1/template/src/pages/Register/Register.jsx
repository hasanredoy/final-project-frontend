import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [validate , setValidate]=useState(true)
  // console.log(registerUser);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const user = { name, photo, email, password };
    if (password.length < 6) {
      toast.error("Password Should Be 6 Character or More");
      return;
    }
    if (!/[A-Z][a-z]/.test(password)) {
      toast.error(
        "Password Must Have Contain One Uppercase And One Lowercase Latter"
      );
      return;
    }

    // console.log(user);
    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        updateProfile(res.user, {
          displayName: name,
        });
        toast.success("Registered Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please Check Email And Password And Try Again");
      });
  };
  const doSubmit = (e) => {
    const validate = e.target.value
    console.log(validate);
    // let user_captcha_value =
    //   document.getElementById("user_captcha_input").value;
    
    if (validateCaptcha(validate) == true) {
      toast.success("validation success")
      setValidate(false)
    } else {
    toast.error('Wrong Information Try Again')
    setValidate(true)
    }
  };
  return (
    <div>
      <div className="hero my-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginImg} className=" w-full" alt="" />
          </div>
          <div className="card shrink-0 w-1/2  border p-10">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <LoadCanvasTemplate />
                <form >
                  <input onBlur={doSubmit} className=" input input-bordered w-full" type="text"  />
                </form>
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
              </div>
              <div className="form-control mt-6">
                <button className={`btn btn-error btn-outline ${validate?'btn-disabled':'btn'}`} >Register</button>
              </div>
            </form>
            <p className=" py-5 font-bold text-center text-lg">
              {" "}
              Already Have an Account{" "}
              <Link to={"/login"} className=" font-bold text-blue-600" >
                Login
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

export default Register;
