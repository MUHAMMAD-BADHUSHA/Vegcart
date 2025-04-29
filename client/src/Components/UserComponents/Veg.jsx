import React from 'react'
import veg1 from "../../assets/cauliflower.png";
import veg2 from "../../assets/capsicum.png";
import cart from "../../assets/cart.svg";

const vege=[
 
  { id: 2, name: "Cauliflower", image: veg1, price: 150 },
  { id: 3, name: "Capsicum", image: veg2, price: 180 },
  { id: 2, name: "Cauliflower", image: veg1, price: 150 },
  { id: 3, name: "Capsicum", image: veg2, price: 180 },
]
function Veg() {
  return (
    <div>
      <div className="flex flex-wrap  justify-center gap-3 pt-20 pb-10">
                {vege.map((Items) => (
                  <div
                    key={Items.id}
                    className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-2xl transition-shadow z-9"
                  >
                    <img
                      src={Items.image}
                      alt={Items.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{Items.name}</h3>
                      <p className="text-black font-bold">₹{Items.price}-1kg</p>
                      <button className=" flex mt-2 px-4 py-2 bg-emerald-950 text-white rounded hover:bg-emerald-700 gap-1.5">
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
