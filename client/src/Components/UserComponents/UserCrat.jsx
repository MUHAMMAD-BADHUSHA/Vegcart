import React from 'react'

function UserCrat() {
  return (
    <div>
     <div class="p-4 max-w-6xl mx-auto">
  <h1 class="text-2xl font-semibold mb-6">Your Cart</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
      <img src="https://via.placeholder.com/150" alt="Item" class="w-full h-40 object-cover rounded-xl mb-4" />
      <h2 class="text-lg font-bold">Apple</h2>
      <p class="text-gray-500">Category: Fruit</p>
      <p class="text-green-600 font-semibold text-xl mt-2">₹120</p>
      <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">Remove</button>
    </div>

    {/* <!-- Another Item --> */}
    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
      <img src="https://via.placeholder.com/150" alt="Item" class="w-full h-40 object-cover rounded-xl mb-4" />
      <h2 class="text-lg font-bold">Carrot</h2>
      <p class="text-gray-500">Category: Vegetable</p>
      <p class="text-green-600 font-semibold text-xl mt-2">₹60</p>
      <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">Remove</button>
    </div>

    {/* <!-- Add more items similarly --> */}
  </div>

  <div class="mt-10 text-center">
    <button class="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition">
      Buy All
    </button>
  </div>
</div>

    </div>
  )
}

export default UserCrat
