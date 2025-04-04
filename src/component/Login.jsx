import { useState, useEffect } from "react";
import SideImage from '../assets/SideImage.png'

const Login = () => {
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
            <div className="flex mt-10 mb-50">
                <div className="w-140 h-90">
                    <img src={SideImage}></img>
                </div>

                <div className="text-left max-w-xl ml-35 mt-35 mr-10">
                    <h2 className="text-2xl">Log in to Exclusive</h2>
                    <p className="text-gray-700 text-sm mt-3">Enter your details below</p>

                    <form className="mt-4 " onSubmit={handleSubmit}>



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


                        <div className=" flex mt-8">
                            <button className="px-10 py-2 bg-red-700 text-white rounded-md ">
                                Login 
                            </button>
                            <p className="text-red-700 mt-2 ml-40 ">Forget Password </p>
                        </div>

                    </form>



                </div>



            </div>


        </>
    )



}

export default Login;