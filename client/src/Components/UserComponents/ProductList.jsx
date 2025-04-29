import React, { useState } from "react";
import bg from "../../assets/bg1.jpg";
import Veg from "./Veg";
import Fruits from "./Fruits";

function ProductList() {
  const [veg,setVeg]=useState(true)
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <img
          src={bg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-9 pt-20 pl-20 pr-20 ">
          <div className="backdrop-blur-lg  text-amber-50 bg-gray-600/3 rounded-xl">
          <div className="flex flex-wrap justify-evenly bg-emerald-200/30 h-10 rounded-2xl">

            <h6 className=" rounded w-1/2 text-center   hover:bg-emerald-600  hover:text-white text-xl  " onClick={()=>setVeg(true)}>Vegetables</h6>
            <h6 className=" rounded w-1/2 text-center  hover:bg-red-500 hover:text-white text-xl "onClick={()=>setVeg(false)}>Fruits</h6>
            
          </div> 
          {veg ? <Veg/>:<Fruits/>}
          
          </div>
         
          
        </div>
      </div>
    </>
  );
}

export default ProductList;
