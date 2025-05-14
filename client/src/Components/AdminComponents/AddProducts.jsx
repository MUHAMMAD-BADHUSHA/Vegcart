import React, { useContext, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";

function AddProducts() {
  const { 
    name, setName,
    price, setPrice,
    category, setCategory,
    file, setFile  } =useContext(AppContext)
    
  const handleAdd =() => {
    const formData= new FormData()
    formData.append('image',file),
    formData.append('name',name),
    formData.append('price',price),
    formData.append('category',category)
    console.log(formData)
     axios.post("http://localhost:4000/admin/additem", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => {console.log(response.data)})
    .catch((err) => console.log(err));
  };
  return (
    <>
      <AdminNav />
      <div className="pt-24 flex justify-center bg-white">
        <form
          onSubmit={handleAdd}
          className="bg-emerald-50 p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-green-700">
            Add Item
          </h2>

          {/* Product Name */}
          <div>
            <label className="block text-gray-600 mb-1">Item Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter product name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-gray-600 mb-1">Price (₹)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter product price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-600 mb-1">Category</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue=""
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="vegetables">Vegetable</option>
              <option value="fruits">Fruit</option>
            </select>
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-gray-600 mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-emerald-300 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProducts;
