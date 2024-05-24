import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../../CustomCompo/useAxiosCommon";
import useAxios from "../../../CustomCompo/useAxios";
import { ToastContainer, toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;

const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
  const axiosCommon = useAxiosCommon();
   const axiosURL = useAxios()


  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosCommon.post(image_hosting_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuData = {
        name: data?.name,
        category: data?.category,
        price: parseFloat(data?.price),
        recipe : data?.recipe,
        image : res?.data?.data?.display_url
      };
      // now post the data on db 
      const menuRes = await axiosURL.post('/menu',menuData)
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        toast.success('Item added successfully')
      }
    }
    console.log('image response -->',res.data);
  };

  return (
    <div>
      <SectionTitle
        subHeading={"What's New"}
        heading={"add an item"}
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
              {...register("name", { required: true })}
            />
          </div>
          <div className=" flex gap-3 my-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-2xl font-bold">Category*</span>
              </label>
              <select
                defaultValue={"default"}
                className=" select select-bordered w-full "
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
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
<ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItem;
