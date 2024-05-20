import Cover from "../../components/cover/Cover";
import contactBanner from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

const ContactUs = () => {
  return (
    <div>
      <div className=" mb-20">
        <Cover title={"contact us"} img={contactBanner} h={"h-[600px]"}></Cover>
      </div>

      <div className=" my-10">
        <SectionTitle
          subHeading={"--- Visit Us ---"}
          heading={"our location"}
        ></SectionTitle>
      </div>

      <div className=" flex gap-5 w-[80%] mx-auto">
        <div className="  w-[800px] my-10 flex  flex-col border  justify-center items-center">
          <h2 className=" bg-[#D1A054] p-2 w-full flex justify-center text-center">
            <FaPhoneVolume className=" -rotate-45 text-2xl text-white"></FaPhoneVolume>
          </h2>
          <div className=" px-3 pb-3 w-full">
            <div className=" bg-base-200 w-full flex justify-center flex-col items-center pb-10 h-full">
              <h1 className=" text-2xl font-bold my-4">Phone</h1>
              <h2 className=" text-lg">+994994999</h2>
            </div>
          </div>
        </div>
        <div className="  w-[800px] my-10 flex   flex-col border  justify-center items-center">
          <h2 className=" bg-[#D1A054] p-2 w-full flex justify-center text-center">
            <FaLocationDot className=" text-2xl text-white"></FaLocationDot>
          </h2>
          <div className=" px-3 pb-3 w-full">
            <div className=" bg-base-200 w-full flex justify-center flex-col items-center pb-10 h-full">
              <h1 className=" text-2xl font-bold my-4">Location </h1>
              <h2 className=" text-lg">Al shati st , Abu Dhabi ,UAE</h2>
            </div>
          </div>
        </div>
        <div className="  w-[800px] my-10 flex  flex-col border  justify-center items-center">
          <h2 className=" bg-[#D1A054] p-2 w-full flex justify-center text-center">
            <IoMdTime className="  text-2xl text-white"></IoMdTime>
          </h2>
          <div className=" px-3 pb-3 w-full">
            <div className=" bg-base-200 w-full flex justify-center flex-col items-center pb-10 h-full">
              <h1 className=" text-2xl font-bold my-1">Working Hours</h1>
              <h2 className=" text-lg">
                Mon - Fri: 08:00 - 22:00
                <br />
                Sat - Sun: 10:00 - 23:00
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-10">
        <SectionTitle
          subHeading={"--- Send Us Message ---"}
          heading={"contact form"}
        ></SectionTitle>
      </div>
      <div className=" bg-base-200 p-10">
        <form className="card-body">
          {/* 1 row */}
          <div className=" flex flex-col lg:flex-row gap-5 w-full ">
            {/* input name   */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="text-xl font-bold">Full Name *</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered bg-white text-black w-full"
                required
                name="name"
              />
            </div>

            {/*email  */}
            <div className="form-control md:w-full">
              <label className="label">
                <span className="text-xl font-bold">Email *</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered bg-white text-black w-full"
                required
                name="email"
              />
            </div>
          </div>
          {/* 2 row  */}
          <div className=" flex flex-col lg:flex-row gap-5 w-full ">
            {/* Phone */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="text-xl font-bold">Phone Number *</span>
              </label>
              <input
                type="number"
                className="input input-bordered bg-white text-black w-full"
                required
                name="number"
              />
            </div>
          </div>

          {/* message */}
          <div className="form-control w-full">
            <label className="label">
              <span className="text-xl font-bold"> Message *</span>
            </label>
            <textarea
              rows={6}
              className=" p-3 bg-white text-black w-full"
              placeholder="Message"
              required
              name="massage"
            ></textarea>
          </div>
          <div className="form-control mt-6 flex justify-center">
            <button type="submit" className="btn w-[220px] mx-auto bg-[#835D23] text-white">
              Send Message{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
