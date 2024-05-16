import { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import MenuCart from "../MenuCart/MenuCart";

const OurMenu = () => {
  const [menu , setMenu]=useState([])
  useEffect(()=>{
    fetch('menu.json')
    .then(res=>res.json())
    .then(data => setMenu(data))
  },[])
  console.log(menu);
  return (
    <div className=" my-16">
      <SectionTitle
      subHeading={"Check It Out"}
      heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2 ">
          {menu.slice(0,6).map(menu=><MenuCart
          key={menu._id} 
          items={menu}
          ></MenuCart>)}
      </div>
     <div className=" text-center">
     <button className=" mx-auto mt-5 btn btn-outline border-b-4 border-0">View Full Menu</button>
     </div>
    </div>
  );
};

export default OurMenu;