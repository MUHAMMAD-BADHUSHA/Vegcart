import React from 'react'
import apple from "../../assets/apple.png";
import grape from "../../assets/grape.png";
import cart from "../../assets/cart.svg";

const fruit=[
  { id: 4, name: "Grape", image: grape, price: 250 },
    { id: 1, name: "Apple", image: apple, price: 250 },
]
function Fruits() {
  return (
    <div>
    <div className="flex flex-wrap  justify-center gap-3 pt-20 pb-10">
              
              {fruit.map((Items) => (
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
                    <h2 className="text-lg font-semibold">{Items.name}</h2>
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

export default Fruits

