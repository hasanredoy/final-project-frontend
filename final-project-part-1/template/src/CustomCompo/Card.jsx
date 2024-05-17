
const Card = ({item ,index}) => {
  const {image, recipe,name,price}=item
  return (
    <div className="card bg-base-200 shadow-xl">
    <figure className=" pt-10">
      <img
        src={image}
        alt=""
        className="rounded-xl w-full h-72"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="text-xl font-bold ">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
        <button className={index%2 === 1 ?"btn btn-outline border border-yellow-300 text-yellow-300 bg-orange-950 border-b-2" :"btn btn-outline border border-yellow-300 text-yellow-300 border-b-4"}>Add To Cart</button>
      </div>
    </div>
  </div>
  );
};

export default Card;