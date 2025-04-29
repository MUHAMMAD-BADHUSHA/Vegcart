import React, { useState } from 'react';
import AdminNav from './AdminNav';
import axios from 'axios'

function AddProducts() {
  const [name,setName]=useState('')
  const [price,setPrice]=useState()
  const [category,setCategory]=useState('')
  const handleAdd =()=>{
      axios.post('http://localhost:4000/admin/additem',{name,price,category})
      .then((response)=>console.log(response.message))
      .catch((err)=>console.log(err))

  }
  return (
    <>
      <AdminNav />
      <div className="pt-24 flex justify-center">
        <form  onSubmit={handleAdd} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-700">Add Product</h2>

          {/* Product Name */}
          <div>
            <label className="block text-gray-600 mb-1">Item Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter product name"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-gray-600 mb-1">Price (₹)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter product price"
              onChange={(e)=>setPrice(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-600 mb-1">Category</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue=""  onChange={(e)=>setCategory(e.target.value)}
            >
              <option value="" disabled>Select a category</option>
              <option value="vegetables">Vegetable</option>
              <option value="fruits">Fruit</option>
             

            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProducts;
