
import { Parallax} from "react-parallax";




const Cover = ({img, title , desc  ,h}) => {

  
  return (

    <Parallax  className={`${h}`} bgImage={img} blur={{ min: -1, max: 3 }}>
    <div  className={`hero  mb-10 ${h}`} 
    >
     <div className=" hero-overlay bg-opacity-50 bg-black"></div>
    <div className="hero-content w-[70%] bg-black bg-opacity-40  py-10 text-center text-neutral-content">
      <div className=" w-full text-white ">
        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
        <p className="mb-5">{desc}</p>
      </div>
    </div>
  </div>
  </Parallax>

  );
};

export default Cover;