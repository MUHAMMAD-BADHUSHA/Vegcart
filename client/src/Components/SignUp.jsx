import React, { useState } from "react";
import bg from '../assets/bg.jpg'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function SignUp() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate()

  const handlSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/register/signup',{name,email,password})
    .then((response)=>{
      console.log(response.data)
      if(response.data.success){
        navigate('/signin')
      }
    })
    .catch((err)=>console.log(err))
    
  }
  return (
    <>
      <section id="contact"
            className="min-h-screen bg-cover bg-center flex items-center justify-center pt-7 pb-7 pl-7 pr-7 "
            style={{ backgroundImage: `url(${bg})`, zIndex: "10" }}>

      <div className="pt-[60px] w-full md:w-[450px] flex justify-center">
        <div className=" backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            Sign Up
          </h2>
          <form onSubmit={handlSubmit} method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}

                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter a password"
                onChange={(e)=>setPassword(e.target.value)}

                required
              />
            </div>

           

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-emerald-900 rounded-lg hover:bg-emerald-400 transition duration-600"
              >
                SignUp
              </button>
            </div>
          </form>
          <p>Do you have any account?<Link to={'/signin'} className="underline text-cyan-950">SignIn</Link></p>
        </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
