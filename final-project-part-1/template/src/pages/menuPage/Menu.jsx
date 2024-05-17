import Cover from "../../components/cover/Cover";
import banner1 from '../../assets/menu/banner3.jpg';

import banner3 from '../../assets/home/slide2.jpg';
import banner4 from '../../assets/home/slide3.jpg';
import banner5 from '../../assets/home/slide1.jpg';
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import AllMenu from "../../CustomCompo/AllMenu";
import MenuCart from "../../components/MenuCart/MenuCart";
const Menu = () => {
  const offer = AllMenu('offered')
  const dessert = AllMenu('dessert')
  const soup = AllMenu('soup')
  const pizza = AllMenu('pizza')
  const salad = AllMenu('salad')
  // console.log({dessert},{soup},{pizza},{drinks});
  return (
    <div>
      
      <div>
      <div>
        <Cover
        img={banner1}
        title={"our menu"}
        desc={'Would You Like To Take a Dish?'}
        h={'h-[600px]'}
        >
         
        </Cover>
      </div>
      {/* offer  */}
      <div className=" my-5">
        <SectionTitle subHeading={"---Don't Miss ---"}
        heading={"today's offer"}>
        </SectionTitle>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {
            offer?.map(offer => <MenuCart key={offer._id} items={offer}></MenuCart>)
          }
        </div>
        <div className="my-5 flex justify-center">
    <button className=" btn btn-outline font-bold bg-slate-100 border-0 border-b-4">Order You&apos;re Favorite Food</button></div> 
      </div>
      </div>
      {/* dessert */}
      <div>
      <div className=" my-20">
        <Cover
        img={"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg"}
        title={"desserts"}
        desc={"Don't miss our desserts, Checkout our all Deserts"}
        h={'h-[500px]'}
        >
         
        </Cover>
    
      </div>
      {/* offer  */}
      <div className=" my-5">
      
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {
          dessert?.slice(0,6).map(offer => <MenuCart key={offer._id} items={offer}></MenuCart>)
          }
        </div>
        <div className=" my-5 flex justify-center">
    <button className=" btn btn-outline font-bold bg-slate-100 border-0 border-b-4">Order Desserts</button></div>
      </div>
      </div>
      {/* pizza  */}
      <div>
      <div className=" my-20">
        <Cover
        img={banner3}
        title={"pizza"}
        desc={"Don't miss our Pizzas, Checkout all of our Pizzas"}
        h={'h-[500px]'}
        >
         
        </Cover>
    
      </div>
      {/* offer  */}
      <div className=" my-5">
      
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {
          pizza?.slice(0,6).map(offer => <MenuCart key={offer._id} items={offer}></MenuCart>)
          }
        </div>
        <div className=" my-5 flex justify-center">
    <button className=" btn btn-outline font-bold bg-slate-100 border-0 border-b-4">Order Pizza</button></div>
      </div>
      </div>
      {/* soup */}
      <div>
      <div className=" my-20">
        <Cover
        img={banner4}
        title={"soup"}
        desc={"Don't miss our delicious Soup, Checkout our all Soups"}
        h={'h-[500px]'}
        >
         
        </Cover>
    
      </div>
      {/* offer  */}
      <div className=" my-5">
      
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {
          soup?.slice(0,6).map(offer => <MenuCart key={offer._id} items={offer}></MenuCart>)
          }
        </div>
        <div className=" my-5 flex justify-center">
    <button className=" btn btn-outline font-bold bg-slate-100 border-0 border-b-4">Order Soup</button></div>
      </div>
      </div>
      {/* salad */}
      <div>
      <div className=" my-20">
        <Cover
        img={banner5}
        title={"salad"}
        desc={"Don't miss our organic Salads, Checkout our all Salads"}
        h={'h-[500px]'}
        >
         
        </Cover>
    
      </div>
      {/* offer  */}
      <div className=" my-5">
      
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {
          salad?.slice(0,6).map(offer => <MenuCart key={offer._id} items={offer}></MenuCart>)
          }
        </div>
        <div className=" my-5 flex justify-center">
    <button className=" btn btn-outline font-bold bg-slate-100 border-0 border-b-4">Order Salad</button></div>
      </div>
      </div>
    </div>
  );
};

export default Menu;