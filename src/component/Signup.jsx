import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import IconGoogle from '../assets/IconGoogle.png'
import SideImage from '../assets/SideImage.png'

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <>
      <div className="flex mt-10 ">
        <div className="w-200 h-150">
          <img src={SideImage}></img>
        </div>

        <div className="text-left max-w-xl ml-35 mt-20 mr-10">
          <h2 className="text-2xl">Create an account</h2>
          <p className="text-gray-700 text-sm mt-3">Enter your details below</p>

          <form className="mt-4 " onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-2 py-2 border-b focus:outline-none focus:border-gray-500"
              value={formData.name}
              onChange={handleChange}

            />

            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="w-full mt-5 px-2 py-2 border-b focus:outline-none focus:border-gray-500"
              value={formData.name}
              onChange={handleChange}

            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mt-5 px-2 py-2 border-b focus:outline-none focus:border-gray-500"
              value={formData.name}
              onChange={handleChange}

            />

            <button

              type="submit"
              className="w-full mt-8 items-center justify-center  py-2  rounded-sm bg-red-700 text-white px-4"
            >
              Create Account

            </button>



            <button
              className="w-full mt-2 flex items-center justify-center border py-2 rounded-sm hover:bg-gray-200"
            >
              <img src={IconGoogle} className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>

            <p className=" text-center mt-5">
            Already have an account?{' '}
            <Link to= "/Login" className="text-gray-700 border-b ">
            Log in
            </Link>
            </p>


          </form>
        </div>

      </div>

    </>
  )

};


export default Signup;