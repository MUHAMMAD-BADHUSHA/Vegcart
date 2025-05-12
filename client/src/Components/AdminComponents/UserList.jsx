import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";



const UserList = () => {
  const {userList,setUserList} = useContext(AppContext)
  useEffect(()=>{
  axios.get('http://localhost:4000/admin/userList')
  .then((response)=>setUserList(response.data.data))
  .catch((error)=>{
    console.log(error)
  })
  },[])
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      console.log("Delete user with id:", id);
      axios.delete('http://localhost:4000/admin/deleteUser/'+id)
      .then((response)=>{
        console.log(response.data)
        location.reload()
      })
      .catch((error)=>{console.log(error)})
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl sm:text-4xl font-semibold text-green-700 mb-8 text-center">
      User List
    </h1>

    <div className="w-full overflow-x-auto bg-white shadow-xl rounded-2xl">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-green-100 text-green-700">
          <tr>
            <th scope="col" className="px-4 py-4 sm:px-6 font-semibold">Name</th>
            <th scope="col" className="px-4 py-4 sm:px-6 font-semibold">Email</th>
            <th scope="col" className="px-4 py-4 sm:px-6 font-semibold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr
              key={user._id}
              className="border-t hover:bg-green-50 transition-all duration-200"
            >
              <td className="px-4 py-4 sm:px-6">{user.name}</td>
              <td className="px-4 py-4 sm:px-6">{user.email}</td>
              <td className="px-4 py-4 sm:px-6 text-center">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-full shadow-sm transition-all text-sm sm:text-base"
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              <td
                colSpan="3"
                className="text-center px-4 py-8 text-gray-400"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>


  );
};

export default UserList;
