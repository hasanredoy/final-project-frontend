
const MenuCart = ({items}) => {
  const {name, recipe, image, price}=items
  return (
    <div className=" flex gap-4">
      <img className=" w-[200px] rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px]" src={image} alt="" />
<div>
  <h3 className=" text-lg font-bold">{name}----------</h3>
  <h5>{recipe}</h5>
</div>
<p className=" text-yellow-400 font-semibold">${price}</p>
    </div>
  );
};

export default MenuCart;