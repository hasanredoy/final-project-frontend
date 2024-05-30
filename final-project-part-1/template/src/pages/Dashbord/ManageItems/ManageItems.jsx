import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../../CustomCompo/useAxiosCommon';
import Swal from 'sweetalert2';
import useAxios from '../../../CustomCompo/useAxios';
import { Link } from 'react-router-dom';

const ManageItems = () => {
   const axiosCommon =useAxiosCommon()
   const axiosURL = useAxios()
  const {data:items=[],refetch}=useQuery({
    queryKey:['items'],
    queryFn: async()=>{
      const res=await axiosCommon.get('/menu')
      return res.data
    }
  })
  // console.log(items);
  const handleDelete = (id,name) => {
    // console.log(id);
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
        axiosURL.delete(`/menu/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Removed!",
              text: `${name} has been removed Successfully`,
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
          subHeading={"--Hurry Up??--"}
          heading={"manage items"}
        ></SectionTitle>
      </div>
      <div className=" bg-white p-5">
        <div className=" flex justify-evenly my-20 ">
          <h1 className=" text-3xl font-bold">Total Items : {items.length} </h1>
          
        </div>
        <div className="overflow-x-auto rounded-t-xl">
          <table className="table rounded-t-lg ">
            <thead className=" bg-orange-400 rounded-xl  rounded-t-2xl">
              <tr>
                <th></th>
                <th className=" text-xl font-bold text-white">Image</th>
                <th className=" text-xl font-bold text-white">Name</th>
                <th className=" text-xl font-bold text-white">Price</th>
                <th className=" text-xl font-bold text-white">Role</th>
                <th className=" text-xl font-bold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((singleItems, index) => (
                <tr key={singleItems._id}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td><img className=' w-20 h-20' src={singleItems?.image} alt="" /></td>
                  <td>{singleItems?.name}</td>
                  <td>
                    <h2>$ {singleItems?.price}</h2>
                  </td>
                  <td>
                   <Link to={`/dashboard/update/${singleItems._id}`}>
                   {
                    <button  className=" btn btn-circle bg-yellow-500 text-2xl text-white font-bold">
                    <FaEdit></FaEdit>
                    </button>
                   }</Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(singleItems._id,singleItems.name)}
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

export default ManageItems;