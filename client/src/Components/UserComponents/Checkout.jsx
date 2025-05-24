import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentButton from './PaymentButton';

const Checkout = () => {
  const [checkoutList,setCheckoutList] = useState([])
  
 useEffect(()=>{
  axios.get('http://localhost:4000/checkout')
  .then((response)=>{
    setCheckoutList(response.data.data)
    console.log(response.data)
  })
  .catch((err)=>console.log(err.message))
 },[])
  const totalAmount = checkoutList.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>

        <div className="space-y-4">
          {checkoutList.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-gray-700 font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="text-gray-800 font-semibold">₹{(item.price * item.quantity)}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
          <p>Total:</p>
          <p>₹{totalAmount}</p>
        </div>
        <Link to={'/home'}><button
          
          className="mt-6 w-full bg-gray-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          cancel
        </button></Link>
          
      <div className="mt-6">
  <PaymentButton amount={totalAmount} />
     </div>
      </div>
    </div>
  );
};

export default Checkout;
  