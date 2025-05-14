import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = [
    { id: 1, name: 'Carrot', price: 100, quantity: 2 },
    { id: 2, name: 'Tomato', price: 150, quantity: 1 },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-gray-700 font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="text-gray-800 font-semibold">${(item.price * item.quantity) / 100}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
          <p>Total:</p>
          <p>${totalAmount / 100}</p>
        </div>
        <Link to={'/home'}><button
          
          className="mt-6 w-full bg-gray-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          cancel
        </button></Link>
          
       <Link to={'/order'}> <button
          onClick={() => alert('Payment function will be triggered')}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Pay Now
        </button></Link>
      </div>
    </div>
  );
};

export default Checkout;
