
const Cover = ({img, title , desc  ,h}) => {
  // console.log(h);
  return (
    <div className={`hero bg-fixed mb-10 ${h}`} style={{backgroundImage: `url(${img})`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content w-[70%] bg-black bg-opacity-40  py-10 text-center text-neutral-content">
      <div className=" w-full ">
        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
        <p className="mb-5">{desc}</p>
      </div>
    </div>
  </div>
  );
};

export default Cover;