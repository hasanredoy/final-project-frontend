import { FaDeleteLeft } from "react-icons/fa6";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../CustomCompo/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosURL = useAxios();
  const [cart, refetch] = useCart();
  const total = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Delete This Order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosURL.delete(`/cart/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"--My Cart--"}
          heading={"wanna add more"}
        ></SectionTitle>
      </div>
      <div className=" bg-white p-5">
        <div className=" flex justify-evenly my-20 ">
          <h1 className=" text-3xl font-bold">Total Orders : {cart.length}</h1>
          <h2 className=" text-3xl font-bold">Total Price : {total} $</h2>
          {
            cart.length?<Link to={'/dashboard/payment'}>
            <button className=" bg-orange-400 btn font-bold text-white">
              {" "}
              Pay{" "}
            </button></Link>:<button disabled className=" bg-orange-400 btn font-bold text-white">
              {" "}
              Pay{" "}
            </button>
          }
        </div>
        <div className="overflow-x-auto">
          <table className="table rounded-t-lg ">
            {/* head */}
            <thead className=" bg-orange-400 rounded-xl  rounded-t-2xl">
              <tr>
                <th></th>
                <th className=" text-xl font-bold text-white">Item Image</th>
                <th className=" text-xl font-bold text-white">Item Name</th>
                <th className=" text-xl font-bold text-white">Price</th>
                <th className=" text-xl font-bold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((singleCart, index) => (
                <tr key={singleCart._id}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={singleCart?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2>{singleCart?.name}</h2>
                  </td>
                  <td>{singleCart?.price}$</td>
                  <th>
                    <button
                      onClick={() => handleDelete(singleCart._id)}
                      className="btn bg-red-600 text-white"
                    >
                      <FaDeleteLeft className=" text-2xl"></FaDeleteLeft>
                    </button>
                  </th>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
