import salad from '../../assets/home/slide5.jpg'
import dessert from '../../assets/home/slide4.jpg'
import soup from '../../assets/home/slide3.jpg'
import SectionTitle from '../sectionTitle/SectionTitle';

const ChefRecommend = () => {
  return (
    <div className=' my-20'>
     <SectionTitle
     heading={"CHEF RECOMMENDS"}
     subHeading={'--- Should Try ---'}
     ></SectionTitle>
     <div className=' w-[90%] mx-auto flex flex-col lg:flex-row gap-4'> 
     <div className="card  w-[32%] bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src={salad}
            alt=""
            className="rounded-xl w-full h-72"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold ">Cheese Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border border-yellow-300 text-yellow-300 border-b-4">Add To Cart</button>
          </div>
        </div>
      </div>
    
     <div className="card w-[32%]  bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src={dessert}
            alt=""
            className="rounded-xl w-full h-72"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold ">French Desserts</h2>
          <p> Eggs, Parmesan Cheese, Flour ,Sugar , Milk , Chocolate and etc.</p>
          <div className="card-actions">
            <button className="btn btn-neutral border border-gray-900 text-yellow-400 border-b-4">Add To Cart</button>
          </div>
        </div>
      </div>
     <div className="card  w-[32%] bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src={soup}
            alt=""
            className="rounded-xl w-full h-72"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold ">Chicken Soup</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border border-yellow-300 text-yellow-300 border-b-4">Add To Cart</button>
          </div>
        </div>
      </div>
      </div> 
    </div>
  );
};

export default ChefRecommend;
