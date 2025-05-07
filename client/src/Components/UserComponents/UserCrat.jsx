import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/getCartItems')
    .then((response)=>{
      console.log(response.data)
      setCart(response.data.data)
    })
  }, []);

   const handleRemove = (id)=>{
   axios.delete('http://localhost:4000/deleteCartItem/'+id)
   .then((response)=>{
    console.log(response.data)
    location.reload()
    })
   .catch((err)=>console.log(err.message))
   }
  return (
    <>
    <UserNav/>
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart? (
        <table className="min-w-full text-sm text-left border rounded shadow bg-white">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
             <th className="p-3">items</th>
              <th className="p-3">name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="p-3"><img src={`http://localhost:4000${item.image}`} alt=""width={'100'}height={'100'} /></td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">₹{item.price}</td>
                <td className="p-3">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
    </>
  );
};

export default Cart;
