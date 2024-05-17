import { useEffect, useState } from 'react';

const AllMenu = (cate) => {
  const [menu , setMenu]=useState([])
  const [loading , setLoading]=useState(true)
  useEffect(()=>{
    fetch('http://localhost:5000/menu')
    .then(res=>res.json())
    .then(data => {
      setMenu(data)
      setLoading(false)
    })
  },[cate])
  // console.log( typeof cate);
  const filterMenu = menu.filter(menu => menu.category === cate)
//  console.log(filterMenu);
  return loading , filterMenu
};

export default AllMenu;