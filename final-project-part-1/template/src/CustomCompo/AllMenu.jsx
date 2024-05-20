import { useEffect, useState } from 'react';

const AllMenu = (category) => {

  const [menu , setMenu]=useState([])
  const [loading , setLoading]=useState(true)
  
  useEffect(()=>{
    fetch(`http://localhost:5000/menu?category=${category}`)
    .then(res=>res.json())
    .then(data => {
      setMenu(data)
      // console.log(data);
      setLoading(false)
    })
  },[category])
  // console.log( menu);
  return [menu]
};

export default AllMenu;