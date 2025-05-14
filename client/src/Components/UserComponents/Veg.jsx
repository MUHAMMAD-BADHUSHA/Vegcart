import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import cart from "../../assets/cart.svg";
import { showSuccess } from '../../ToastService';
import { AppContext } from '../../Context/AppContext';


function Veg() {
  const {setCartCount,cartCount} = useContext(AppContext)
  const token = localStorage.getItem("token")
  const [vegetables,setVegetables] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/getVegetables')
    .then((response)=>{
      console.log(response.data)
      setVegetables(response.data.data)
      
    })
    .catch((err)=>{console.log('err',err)})

  },[])

  const handleAddtoCart = (id)=>{
    axios.post('http://localhost:4000/addtocart/'+id)
    .then((response)=>{
      console.log(response.data.message)
      showSuccess(response.data.message)
      setCartCount(cartCount+1)
    })
    .catch((err)=>console.log('error from frontend',err.message))
  }
 
  return (
    <div>
      <div className="flex flex-wrap  justify-center gap-3 pt-20 pb-10">
                {vegetables.map((veg) => (
                  <div
                    key={veg._id}
                    className="bg-white hover:shadow-[0_0_15px_black]  ease-in-out duration-600 hover:scale-105 rounded-md shadow-md overflow-hidden  transition-transform z-9 "
                  >
                    <img
                      src={`http://localhost:4000${veg.image}`}
                      alt={veg.name}
                      className="w-full h-30 object-cover"
                    />
                    <div className="p-4">
                      <h3 className=" text-black text-lg font-semibold">{veg.name}</h3>
                      <p className="text-black font-bold">₹{veg.price}/kg</p>
                      <button onClick={()=>handleAddtoCart(veg._id)} className=" flex mt-2 px-4 py-2 bg-emerald-950 text-white rounded hover:bg-emerald-700 gap-1.5">
                        <img src={cart} alt="" width={20} height={30} /> Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
    </div>
  )
}

export default Veg
