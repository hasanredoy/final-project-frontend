import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../sectionTitle/SectionTitle";

const Categories = () => {
  return (
    <div className=" my-24 ">
      <SectionTitle
      subHeading={"-- 11:00 am TO 10:00 pm --"}
      heading={'ONLINE ORDER'}
      ></SectionTitle>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide > 
            <img src={slide1} alt="" className=" w-[500px]"/>
            <h1 className=" text-center font-bold text-4xl text-white -mt-28 ">
              {" "}
              SALAD
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-[500px]" src={slide2} alt="" />
            <h1 className=" text-center font-bold text-4xl text-white -mt-28">
              PIZZA
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-[500px]" src={slide3} alt="" />
            <h1 className=" text-center font-bold text-4xl text-white -mt-28">
              {" "}
              SOUP
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-[500px]" src={slide4} alt="" />
            <h1 className=" text-center font-bold text-4xl text-white -mt-28">
              {" "}
              DESSERTS
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" w-[500px]" src={slide5} alt="" />
            <h1 className=" text-center font-bold text-4xl text-white -mt-28">
              {" "}
              SALAD
            </h1>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Categories;
