import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'  
import useAxios from "./useAxios";
import { toast } from "react-toastify";
import useCart from "../hooks/useCart";


const Card = ({item ,index}) => {
  const {image, recipe,name,price,_id}=item
  const axiosURL =useAxios()
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [,refetch] = useCart()
  
  const handleAddCart=cart=>{
    const {image,name,price,_id}=cart
    if(user && user?.email){
        const cartItem={
          menuId:_id,
          email : user.email,
          image,
          name,
          price
        }
        axiosURL.post('/cart',cartItem)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){ toast.success(`${name} added to 
          your cart`)
          // refetch the api after item added in data base 
          refetch()
          }
        })
    } else{
      Swal.fire({
        title: "You're Not Logged In.",
        text: " Are You sure You Want Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}})
        }
      });
      
    }
  }
  return (
    <div className="card bg-base-200 shadow-xl">
    <figure className=" pt-10">
      <img
        src={image}
        alt=""
        className="rounded-xl w-full h-72"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="text-xl font-bold ">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
        <button onClick={()=>handleAddCart(item)} className={index%2 === 1 ?"btn btn-outline border border-yellow-300 text-yellow-300 bg-orange-950 border-b-2" :"btn btn-outline border border-yellow-300 text-yellow-300 border-b-4"}>Add To Cart</button>
      </div>
    </div>
  </div>
  );
};

export default Card;