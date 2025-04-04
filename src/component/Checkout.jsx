import { CreditCard, Banknote, CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartImage1 from "../assets/CartImage1.png";
import CartImage2 from "../assets/CartImage2.png";
import BkashImage from "../assets/BkashImage.png";
import VisaImage from "../assets/VisaImage.png";
import MastercardImage from "../assets/MastercardImage.png";
import NagadImage from "../assets/NagadImage.png";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(items);
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0).toFixed(2);
    };

    const handleOrderSuccess = () => {
        toast.success("🎉 Your order has been placed successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    };

    return (
        <div className="container mx-auto p-6">
            <ToastContainer />
            <nav className='flex mt-10 text-sm text-gray-400'>
                <p>Account / My Account / Product / View Cart / <span className='text-gray-800'>CheckOut</span></p>
            </nav>

            <h2 className="text-3xl font-medium mt-10 mb-6 text-left">Billing Details</h2>
            <div className="flex gap-10 text-left ">
                <form className="w-1/2 space-y-5 ">
                    {[
                        { label: "First Name", required: true },
                        { label: "Company Name" },
                        { label: "Street Address", required: true },
                        { label: "Apartment, floor, etc. (optional)" },
                        { label: "Town/City", required: true },
                        { label: "Phone Number", required: true },
                        { label: "Email Address", type: "email", required: true }
                    ].map(({ label, type = "text", required }, index) => (
                        <div key={index}>
                            <label className="block text-sm font-medium text-gray-400">
                                {label} {required && <span className="text-red-500">*</span>}
                            </label>
                            <input type={type} className="w-full p-3 mt-1 rounded bg-gray-100" required={required} />
                        </div>
                    ))}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 accent-red-500" />
                        <label>Save this information for faster checkout next time</label>
                    </div>
                </form>

                <div className="w-1/2 mt-10 ml-20">
                    {cartItems.length === 0 ? (
                        <p className="text-xl text-gray-600">Your cart is empty!</p>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div className="flex ">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                                        <p className="text-sm font-medium text-gray-800 mt-5 ml-2">{item.name} ({item.quantity || 1})</p>
                                    </div>
                                    <p className="text-sm">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                                </div>
                            ))}
                            <div className="bpt-3">
                                <div className="flex border-b-1 border-gray-300 justify-between">
                                    <span>Subtotal:</span>
                                    <span>${calculateTotal()}</span>
                                </div>
                                <div className="flex border-b-1 border-gray-300 justify-between mt-2">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between mt-2 font-semibold">
                                    <span>Total:</span>
                                    <span className="text-lg font-bold">${calculateTotal()}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-5 space-y-2">
                        <div className="flex items-center gap-2">
                            <input type="radio" name="payment" className="accent-black" />
                            <span className="text-black">Bank</span>
                            <div className="flex ml-auto gap-2">
                                {[BkashImage, VisaImage, MastercardImage, NagadImage].map((img, index) => (
                                    <img key={index} src={img} alt="Payment Option" className="w-12 h-8 rounded-full p-1" />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-5">
                            <input type="radio" name="payment" className="accent-black" />
                            <span>Cash on Delivery</span>
                        </div>
                    </div>

                    <div className="flex mt-5">
                        <input type="text" placeholder="Coupon Code" className="border p-2 w-3/4 h-10 mr-2" />
                        <button className="bg-red-700 text-white px-6 py-2 h-10">Apply Coupon</button>
                    </div>

                    <button
                        className="w-40 bg-red-700 text-white py-3 rounded mt-4 flex items-center justify-center gap-2"
                        onClick={handleOrderSuccess}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
