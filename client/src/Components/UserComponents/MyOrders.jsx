import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const orders = [
    {
      id: 'ORD123456',
      date: '2025-05-12',
      status: 'Delivered',
      total: 450,
      items: [
        { name: 'Carrot', quantity: 2 },
        { name: 'Tomato', quantity: 1 },
      ],
    },
    {
      id: 'ORD123457',
      date: '2025-05-10',
      status: 'Processing',
      total: 300,
      items: [
        { name: 'Cabbage', quantity: 1 },
        { name: 'Onion', quantity: 2 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">My Orders</h2>

        {orders.map((order) => (
          <div key={order.id} className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-gray-700">Order #{order.id}</p>
                <p className="text-sm text-gray-500">Placed on: {order.date}</p>
                <p className="text-sm text-gray-500">Status: <span className={`font-medium ${order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</span></p>
              </div>
              <p className="text-lg font-bold text-gray-800">${order.total / 100}</p>
            </div>

            <ul className="mt-3 pl-4 text-sm text-gray-600 list-disc">
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} × {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {orders.length === 0 && (
          <p className="text-center text-gray-500">No orders found.</p>
        )}
        <Link to={'/home'}><button
                 
                 className="mt-6 w-full bg-emerald-300 text-green-950 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
               >
                 back home
               </button></Link>
      </div>
    </div>
  );
};

export default MyOrders;
