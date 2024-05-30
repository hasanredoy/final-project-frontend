import { useForm } from "react-hook-form";
import useAxios from "../../../CustomCompo/useAxios";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { ToastContainer, toast } from "react-toastify";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const UpdateMenu = () => {
   const axiosURL = useAxios()
   const item=useLoaderData()
  //  console.log(item);
   const {name , price , recipe,category,_id}= item
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    // const imageFile = { image: data.image[0] };
    // const res = await axiosCommon.post(image_hosting_API, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });

    // if (res.data.success) {
      const menuData = {
        name: data?.name,
        category: data?.category,
        price: parseFloat(data?.price),
        recipe : data?.recipe,
        image : item.image
      };
      // now post the data on db 
      const menuRes = await axiosURL.patch(`/menu/${_id}`,menuData)
      // console.log(menuRes.data);
      if(menuRes.data.modifiedCount>0){
        toast.success('Item updated successfully')
      }
    // }
    // console.log('image response -->',res.data);
  };



  return (
    <div>
    <SectionTitle
      subHeading={"What's New"}
      heading={"Update an item"}
    ></SectionTitle>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="text-2xl font-bold">Name*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            defaultValue={name}
            {...register("name", { required: true })}
          />
        </div>
        <div className=" flex gap-3 my-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="text-2xl font-bold">Category*</span>
            </label>
            <select
              className=" select select-bordered w-full "
              defaultValue={category}

              {...register("category", { required: true })}
            >
              <option disabled value={"default"}>
                Select A Category.
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="desert">Desert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="text-2xl font-bold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              defaultValue={price}

              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
        </div>

        <div>
          <label className="form-control my-2">
            <div className="label">
              <span className="text-2xl font-bold">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              rows={5}
              defaultValue={recipe}
              className="textarea textarea-bordered "
              placeholder="Recipe Details"
            ></textarea>
          </label>
        </div>
        <div className=" my-5">
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button className=" btn bg-orange-400 my-2 " type="submit">
         Update Item <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
<ToastContainer></ToastContainer>
  </div>
  );
};

export default UpdateMenu;