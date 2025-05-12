import React, { useState } from "react";
import Veg from "./Veg";
import Fruits from "./Fruits";

function ProductList() {
  const [veg,setVeg]=useState(true)
  return (
    <>
      <div className="relative min-h-screen overflow-hidden  rounded-t-2xl">
        {/* <img
          src={bg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        /> */}
        <div className="relative z-9 pt-20 pl-20 pr-20 ">
          <div className="backdrop-blur-lg  text-amber-50  rounded-xl shadow-2xl">
          <div className="flex flex-wrap justify-evenly bg-emerald-200 h-10 rounded-xl">

            <h6 className=" rounded-xl w-1/2 text-center   hover:bg-emerald-300   text-xl text-black " onClick={()=>setVeg(true)}>Vegetables</h6>
            <h6 className=" rounded-xl w-1/2 text-center  hover:bg-emerald-300  text-xl text-black"onClick={()=>setVeg(false)}>Fruits</h6>
            
          </div> 
          {veg ? <Veg/>:<Fruits/>}
          
          </div>
         
          
        </div>
      </div>
    </>
  );
}

export default ProductList;
