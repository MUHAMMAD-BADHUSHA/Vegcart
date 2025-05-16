import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import UserNav from './UserNav';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { showError, showInfo } from '../../ToastService';

const UserCart = () => {
  const {cart,setCart,setCartCount} = useContext(AppContext)
  

  useEffect(() => {
    axios.get('http://localhost:4000/getCartItems')
    .then((response)=>{
      console.log(response.data)
      setCart(response.data.data)
    })
  }, []);

   const handleRemove = (id,quantity)=>{
   axios.delete('http://localhost:4000/deleteCartItem/'+id)
   .then((response)=>{
    console.log(response.data)
    showInfo(response.data.message)
    setCartCount((prevCount)=>prevCount-Number(quantity))
    setCart((prevCart) => prevCart.filter(item => item._id !== id));
    })
   .catch((err)=>console.log(err.message))
   }
  return (
    <>
    <UserNav/>
    <div className="overflow-x-auto p-4 mt-10 sm:p-6 bg-gray-50 min-h-screen">
  <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-6 text-center">Your Cart</h2>

  {cart && cart.length > 0 ? (
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-auto">
      <table className="min-w-full text-sm sm:text-base text-left">
        <thead className="bg-emerald-100 text-emerald-800 uppercase text-xs sm:text-sm">
          <tr>
            <th className="p-4">Item</th>
            <th className="p-4">Name</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Price</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id} className="border-t hover:bg-gray-50 transition">
              <td className="p-4">
                <img
                  src={`http://localhost:4000${item.image}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg shadow-sm"
                />
              </td>
              <td className="p-4 font-medium text-gray-700">{item.name}</td>
              <td className="p-4">{item.quantity}</td>
              <td className="p-4 font-semibold text-gray-800">
                ₹{item.price * item.quantity}
              </td>
              <td className="p-4">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm shadow"
                  onClick={() => handleRemove(item._id,item.quantity)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}

          {/* Total Row */}
          <tr className="border-t bg-gray-100 font-semibold text-gray-800">
            <td colSpan="3"></td>
            <td className="p-4">Total = ₹
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </td>
            <td className="p-4">
              <Link to={'/checkout'}><button className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-full text-sm shadow">
                Buy All
              </button></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div className='rounded-3xl bg-emerald-100 h-30 flex flex-col justify-center items-center gap-5 shadow-2xl'>  
        <p className="text-center text-gray-500 font-medium">Your cart is empty.</p>
        <Link to={'/home'} ><button className='bg-emerald-800 hover:bg-emerald-400 text-white px-5 py-2 rounded-full text-sm shadow'> Add to cart</button></Link>
    </div>
  )}
</div>

    </>
  );
};

export default UserCart;
