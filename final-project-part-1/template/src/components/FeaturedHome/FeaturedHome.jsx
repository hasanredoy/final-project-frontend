import SectionTitle from '../sectionTitle/SectionTitle';
import './FeaturedHome.css'
import featured from '../../assets/home/featured.jpg'
const FeaturedHome = () => {
  return (
    <div className="hero min-h-screen bg-fixed featured flex-col flex my-16" >
  <div className="hero-overlay  bg-opacity-50"></div>
  <div className=' text-white z-40 bg-black bg-opacity-60 w-full'>
    <SectionTitle
    subHeading={"--- Check It Out ---"}
    heading={"FROM OUR MENU"}
    ></SectionTitle>
  </div>
  <div className=" pt-10 flex gap-5 justify-center items-center text-center text-neutral-content pb-12 bg-black bg-opacity-60 w-full">
    <div>
      <img src={featured} className=' w-[500px] h-[400px]' alt="" />
    </div>
    <div className="max-w-md text-start">
      <h1 className="mb-5 text-xl font-bold">March 20, 2023 <br />
WHERE CAN I GET SOME?
</h1>
      <p className="mb-5">Will Present Our one of the best dessert and it will be one of the famous Dessert in the World We Are Working on it.</p>
      <button className="btn btn-outline border-b-4 text-white ">Read More</button>
    </div>
  </div>
</div>
  );
};

export default FeaturedHome;