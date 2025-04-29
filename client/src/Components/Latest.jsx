import React from "react";
import apple from "../assets/apple.png";
import veg1 from "../assets/cauliflower.png";
import veg2 from "../assets/capsicum.png";
import cart from "../assets/cart.svg";
import grape from "../assets/grape.png";
function Latest() {
  const latestItems = [
    { id: 1, name: "Apple", image: apple, price: 250 },
    { id: 2, name: "Cauliflower", image: veg1, price: 150 },
    { id: 3, name: "Capsicum", image: veg2, price: 180 },
    { id: 4, name: "Grape", image: grape, price: 250 },
  ];

  return (
    <section className="bg-white">
      <div className="bg-[#77B254]  rounded-t-4xl pt-10 pb-15 px-4 w-full h-full ">
        <h2 className="text-3xl font-bold text-center text-emerald-950 mb-10">
          Latest Items
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {latestItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md overflow-hidden shadow-2xl  hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-48 flex items-center justify-center bg-emerald-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className=" w-full overflow-hidden h-56  object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h5 className="text-xl font-semibold text-emerald-800">
                  {item.name}
                </h5>
                <p className="text-lg text-emerald-600 font-bold mt-2">
                  ₹ {item.price}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <a
                  href=""
                  className="bg-green-900 w-15 flex justify-center mb-5 rounded h-8"
                >
                  <img src={cart} alt="" width={20} height={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Latest;
