import SectionTitle from "../sectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating ,Star} from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";


const Testemonilas = () => {
  const[reviews , setReviews]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data => setReviews(data))

  },[])
  // console.log(reviews);
  const [rating, setRating] = useState(0) // Initial value
//  console.log(rating);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  return (
    <div className=" my-20">
    <div>
      <SectionTitle
      subHeading={"--- What Our Client Says ---"}
      heading={'TESTIMONIALS'}
      > </SectionTitle>
    </div>

    <div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews?.map(review =><SwiperSlide
          key={review._id}
          className=" py-10"
          >
            <div className=" flex flex-col space-y-3 justify-center items-center text-center">
            <Rating style={{ maxWidth: 250 }} value={review.rating} onChange={setRating} itemStyles={myStyles} />
              <FaQuoteLeft className=" text-5xl font-bold"></FaQuoteLeft>

            <div className=" py-5">
              <h4 className=" px-16">{review.details}</h4>
              <h3 className=" text-xl font-bold text-orange-400"> {review.name}</h3>
            </div>
              
            </div>
          </SwiperSlide>)}
        </div>
        
       
      </Swiper>
   
    </div>
    </div>
  );
};

export default Testemonilas;