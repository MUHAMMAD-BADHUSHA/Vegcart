import React, { useEffect, useState } from "react";
import bg from "/bg1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Products() {
  const navigate=useNavigate()
  const [items, setItems] = useState([]);

  const handleDelete = (id)=>{
    window.confirm('are want to delete')
    axios.delete('http://localhost:4000/admin/delete/'+id)
    .then((response)=>console.log(response.data.message))
    location.reload()
    .catch((err)=>console.log(err.message))
  }
  

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/items")
      .then((response) => {
        console.log(response.data), setItems(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={bg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Table container */}
      <div className="flex justify-center pt-20 px-2">
        <div className="overflow-x-auto w-full max-w-5xl">
          <table className="w-full backdrop-blur-xl bg-black/30 shadow-md rounded-xl overflow-hidden z-9">
            <thead>
              <tr className="bg-emerald-950 text-white text-sm sm:text-base">
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-center">Image</th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-center">Name</th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-center">Price</th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-100/30 text-white text-sm sm:text-base"
                >
                  <td className="sm:py-3 sm:px-6 flex items-center justify-center">
                    <img
                      src={`http://localhost:4000${item.image}`}
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                    />
                  </td>
                  <td className="py-2 px-3 sm:py-3 sm:px-6 text-center">{item.name}</td>
                  <td className="py-2 px-3 sm:py-3 sm:px-6 text-center">₹{item.price}</td>
                  <td className="sm:py-3 sm:px-6">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <button onClick={()=>navigate('/editItem/'+item._id)} className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-1 rounded hover:bg-blue-600 text-xs sm:text-sm">
                        Edit
                      </button>
                      <button onClick={()=>handleDelete(item._id)} className="bg-red-500 text-white px-2 py-1 sm:px-4 sm:py-1 rounded hover:bg-red-600 text-xs sm:text-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
