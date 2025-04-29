import React from "react";
import bg from '../assets/bg.jpg'
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <>
      <section id="contact"
            className="min-h-screen bg-cover bg-center flex items-center  justify-center pt-7 pb-7 pl-7 pr-7 "
            style={{ backgroundImage: `url(${bg})`, zIndex: "-1" }}>

      <div className="pt-[60px] w-full md:w-[450px] flex justify-center t">
        <div className=" backdrop-blur-md p-8  shadow-lg max-w-lg w-full rounded-2xl ">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            Sign In
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Password
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email address"
                required
              />
            </div>

           

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-emerald-900 rounded-lg hover:bg-emerald-400 transition duration-600"
              >
                LogIn
              </button>
            </div>
          </form>
          <p>You Don't have any account?  <Link to={'/signup'} className="underline text-cyan-950">SignUp</Link></p>
        </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
