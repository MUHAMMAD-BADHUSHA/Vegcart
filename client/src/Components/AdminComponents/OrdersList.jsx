import axios from "axios";
import React, { useEffect, useState } from "react";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/admin/orderList")
    .then((response) => {
        setOrders(response.data.data);
        console.log(response.data);
      })
    .catch((error) => {
        console.log("error in oderlist feching", error);
      });
  }, []);

  const handleMarkDelivered = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Delivered" } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">
        Orders
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow-2xl">
        <table className="table w-full  rounded-2xl shadow-sm">
          <thead className="bg-emerald-100 text-emerald-700">
            <tr>
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Items</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order,index) => (
              <tr key={order.id} className="hover:bg-emerald-50">
                <td className="py-3 px-4">{index+1}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`badge ${
                      order.status === "Delivered"
                        ? "badge-success"
                        : order.status === "Pending"
                        ? "badge-warning"
                        : "badge-info"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {order.items.map((item, index) => {
                    return <p key={index}>{item.name}-{item.quantity}</p>;
                  })}
                </td>

                <td className="py-3 px-4">{order.total}</td>

                <td className="py-3 px-4">
                  {order.status !== "Delivered" ? (
                    <button
                      onClick={() => handleMarkDelivered(order.id)}
                      className="btn btn-sm bg-emerald-500 text-white hover:bg-emerald-600"
                    >
                      Mark as Delivered
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold">
                      ✔ Delivered
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;
