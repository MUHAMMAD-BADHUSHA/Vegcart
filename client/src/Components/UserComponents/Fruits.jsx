import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cart from "../../assets/cart.svg";


function Fruits() {
  const [fruits,setFruits] = useState([])
   useEffect(()=>{

    axios.get('http://localhost:4000/getFruits')
    .then((response)=>{
      console.log(response.data)
      setFruits(response.data.data)})
    .catch((err)=>{console.log('err:',err)})

   },[])
   
  const handleAddtoCart = (id)=>{
    axios.post('http://localhost:4000/addtocart/'+id)
    .then((response)=>console.log(response.data.message))
    .catch((err)=>console.log(err.message))
  }
  return (
    <div>
    <div className="flex flex-wrap  justify-center gap-3 pt-20 pb-10">
              
              {fruits.map((fruit) => (
                <div
                  key={fruit.id}
                  className="bg-white/80  hover:shadow-[0_0_15px_white] transition-transform ease-in-out duration-600 hover:scale-105  rounded-md shadow-md overflow-hidden  z-9  "
                >
                  <img
                    src={`http://localhost:4000${fruit.image}`}
                    alt={fruit.name}
                    className="w-full h-30 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-black text-lg font-semibold">{fruit.name}</h2>
                    <p className="text-black font-bold">₹{fruit.price}-1kg</p>
                    <button  onClick={()=>handleAddtoCart(fruit._id)} className=" flex mt-2 px-4 py-2 bg-emerald-950 text-white rounded hover:bg-emerald-700 gap-1.5">
                      <img src={cart} alt="" width={20} height={30} /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
  </div>
  )
}

export default Fruits

