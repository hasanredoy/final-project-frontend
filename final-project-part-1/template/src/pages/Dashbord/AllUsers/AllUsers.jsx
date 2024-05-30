import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomCompo/useAxios";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosURL = useAxios();

  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosURL.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (id,name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Make This User Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosURL.patch(`/users/admin/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${name} is Now An Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Remove This User!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove.",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosURL.delete(`/user/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Removed!",
              text: "User has been removed Successfully",
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
          subHeading={"--How Many??--"}
          heading={"manage users"}
        ></SectionTitle>
      </div>
      <div className=" bg-white p-5">
        <div className=" flex justify-evenly my-20 ">
          <h1 className=" text-3xl font-bold">Total Users : {users.length} </h1>
          <button className=" bg-orange-400 btn font-bold text-white">
            {" "}
            Pay{" "}
          </button>
        </div>
        <div className="overflow-x-auto rounded-t-xl">
          <table className="table rounded-t-lg ">
            <thead className=" bg-orange-400 rounded-xl  rounded-t-2xl">
              <tr>
                <th></th>
                <th className=" text-xl font-bold text-white">Name</th>
                <th className=" text-xl font-bold text-white">Email</th>
                <th className=" text-xl font-bold text-white">Role</th>
                <th className=" text-xl font-bold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((singleUser, index) => (
                <tr key={singleUser._id}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>{singleUser?.name}</td>
                  <td>
                    <h2>{singleUser?.email}</h2>
                  </td>
                  <td>
                   {
                    singleUser?.role==='admin'?'Admin':<button onClick={()=>handleMakeAdmin(singleUser._id,singleUser?.name)} title="make admin" className=" btn btn-circle bg-yellow-500 text-2xl text-white font-bold">
                    <FaUsers></FaUsers>
                    </button>
                   }
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(singleUser._id)}
                      className="btn bg-red-600 text-white"
                    >
                      <FaDeleteLeft className=" text-2xl"></FaDeleteLeft>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
