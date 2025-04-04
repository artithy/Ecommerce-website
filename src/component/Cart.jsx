import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2, ChevronUp, ChevronDown } from "lucide-react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage on component mount
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedItems = items.map(item => ({
            ...item,
            quantity: item.quantity > 0 ? item.quantity : 1, // Ensure quantity always starts at 1
        }));
        setCartItems(updatedItems);
    }, []);

    // Handle adding items to cart
    const addToCart = (product) => {
        let updatedCart = [...cartItems];
        const existingIndex = updatedCart.findIndex((item) => item.id === product.id);

        if (existingIndex !== -1) {
            updatedCart[existingIndex].quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }

        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Remove an item from the cart
    const removeItemFromCart = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Handle quantity changes
    const handleQuantityChange = (id, increment) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(1, (item.quantity || 1) + increment) } // Prevent NaN & ensure min 1
                : item
        );

        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Calculate the total price
    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + (item.price || 0) * (item.quantity || 1),
            0
        ).toFixed(2);
    };

    return (
        <>
            <div className="container mx-auto p-6">
                <div className="flex mt-10">
                    <p className="text-sm text-gray-400">Home</p>
                    <p className="text-sm text-gray-400">/</p>
                    <p className="text-sm text-gray-800">Cart</p>
                </div>

                {cartItems.length === 0 ? (
                    <p className="text-xl text-gray-600">Your cart is empty!</p>
                ) : (
                    <div className="space-y-6">
                        <div className="shadow-lg mt-20 bg-gray-100 border-gray-200 p-6 mb-6">
                            <div className="flex text-gray-600 font-medium pb-4">
                                <p className="flex-1">Product</p>
                                <p className="flex-1">Price</p>
                                <p className="flex-1">Quantity</p>
                                <p className="flex-1">Subtotal</p> {/* Aligned right */}
                            </div>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center shadow-lg py-4 bg-gray-100 border-gray-200 mb-4">
                                {/* Product Image and Name */}
                                <div className="flex items-center flex-1 ml-10">
                                    <img src={item.image} alt={item.name} className="w-15 h-15 object-contain" />
                                    <p className="text-sm font-medium ml-2 text-gray-800">{item.name}</p>
                                </div>

                                {/* Price Column with slight right shift */}
                                <div className="flex-1 ">
                                    <p className="text-lg font-semibold text-gray-800">${item.price}</p>
                                </div>

                                {/* Quantity Controls with slight right shift */}
                                <div className="flex items-center flex-1 justify-center ml-5">
                                    <ChevronUp className="cursor-pointer text-gray-600" size={16} onClick={() => handleQuantityChange(item.id, 1)} />
                                    <p className="mx-2 text-lg font-semibold">{item.quantity || 1}</p>
                                    <ChevronDown className="cursor-pointer text-gray-600" size={16} onClick={() => handleQuantityChange(item.id, -1)} />
                                </div>

                                {/* Subtotal Column with slight right shift */}
                                <div className="flex-1">
                                    <p className="text-lg font-semibold text-gray-800 ml-5">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                                </div>

                                {/* Remove Button */}
                                <button className="bg-red-500 text-white p-2 rounded-full mr-2" onClick={() => removeItemFromCart(item.id)}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Buttons for Navigation */}
            <div className="flex justify-between mb-6">
                <Link to="/" className="border-2 mt-5 border-gray-300 px-4 py-2 rounded-md text-gray-700 ml-6">
                    Return to Shop
                </Link>
                <button
                    onClick={() => window.location.reload()}
                    className="border-2 mt-5 border-gray-300 px-4 py-2 rounded-md text-gray-700 mr-6"
                >
                    Update Cart
                </button>
            </div>

            {/* Coupon & Cart Total Box */}
            <div className="flex justify-between">
                {/* Coupon Section */}
                <div className="flex mt-5">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="border-1 p-2 w-80 h-10 mr-2"
                    />
                    <button className="bg-red-700 text-white px-6 py-2 h-10 w-auto whitespace-nowrap">
                        Apply Coupon
                    </button>
                </div>

                <div className="border-2 w-80 p-4 mt-5">
                    {/* Cart Total Heading */}
                    <p className="text-lg font-semibold text-left text-gray-700 mb-4">Cart Total</p>

                    {/* Subtotal */}
                    <div className="flex justify-between border-b pb-2 mb-2">
                        <p className="text-gray-600">Subtotal:</p>
                        <span className="text-lg">${calculateTotal()}</span>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between border-b pb-2 mb-2">
                        <p className="text-gray-600">Shipping:</p>
                        <span className="text-lg">Free</span>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between">
                        <p className="text-gray-600">Total:</p>
                        <span className="text-lg">${calculateTotal()}</span>
                    </div>

                    {/* Checkout Button */}
                    <Link to="/checkout" className="bg-red-700 text-white px-5 py-3 block mt-5 mb-2 rounded-sm text-center">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cart;
