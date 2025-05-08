import React, { useEffect,useContext } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

function EditItem() {
    const {id}=useParams()
    const { 
     name, setName,
     price, setPrice,
     category, setCategory,
     file, setFile  } = useContext(AppContext)

  useEffect(()=>{
    axios.get('http://localhost:4000/admin/editItem/'+id)
    .then((response)=>{
        const item = response.data.data
        if (item) {
          setName(item.name);
          setPrice(item.price);
          setCategory(item.category);
          setFile(item.image);
        }
    })
    .catch((err)=>console.log('err from server',err.message))
  },[id])
  const navigate=useNavigate()
  const handlesave = (e)=>{
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name',name);
    formdata.append('price',price);
    formdata.append('category',category);
    
  if (file instanceof File) {
    formdata.append('image', file);
  }

    axios.put('http://localhost:4000/admin/updateItem/'+id,formdata,{
      headers: { "Content-Type": "multipart/form-data" },})
    .then((response)=>{
      alert(response.data.message)
      console.log(response.data.data)
      navigate('/dashbord')
    })
    .catch((err)=>{console.log('server err',err.message)})


  }
  return (
    <>
      <AdminNav />
      <div className="pt-24 flex justify-center">
        <form
         onSubmit={handlesave}
          className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Edit item
          </h2>

          {/* Product Name */}
          <div>
            <label className="block text-gray-600 mb-1">Item Name</label>
            <input
              type="text"
              value={name}
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
              value={price}

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
              
              value={category}

              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="vegetables">Vegetable</option>
              <option value="fruits">Fruit</option>
            </select>
          </div>

          {/* item image */}
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
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            save 
          </button>
        </form>
      </div>
    </>
  );
}

export default EditItem;
