import { useState, useEffect, useRef } from 'react';
import { Heart, Eye, Trash2 } from "lucide-react";
import WishList1 from "../assets/WishList1.png";
import WishList2 from "../assets/WishList2.png";
import WishList3 from "../assets/WishList3.png";
import WishList4 from "../assets/WishList4.png";
import WishList5 from "../assets/WishList5.png";
import WishList6 from "../assets/WishList6.png";
import WishList7 from "../assets/WishList7.png";
import WishList8 from "../assets/WishList8.png";
import HomeImage6 from "../assets/HomeImage6.png";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";




function MyWishlist() {
    const [items, setItems] = useState([1, 2, 3, 4]); // Array to manage the visible items

    const handleDelete = (id) => {
        setItems(items.filter(item => item !== id)); // Remove the clicked item
    };
    const [hovered, setHovered] = useState(false);
    const handleMoveToBag = () => {
        navigate('/bag'); // Navigate to '/bag' page
    };

    const handleSeeAll = () => {
        navigate('/see-all'); // Redirect to the 'See All' page
    };
    return (


        <>

            <div className='text-lg font-normal text-left mt-10'>
                <div className="flex justify-between items-center">
                    <span>Wishlist (4)</span>
                    <button
                        onClick={handleMoveToBag}
                        className="text-black border-1 border-gray-400 py-2 px-4 rounded-md "
                    >
                        Move All to Bag
                    </button>
                </div>
            </div>
            <div className="flex space-x-4 mt-10 ">
                {/* Card 1 */}
                {items.includes(1) && (
                    <div
                        className="relative w-[260px] mx-auto"
                        onMouseEnter={() => setHovered(1)}
                        onMouseLeave={() => setHovered(null)}
                    >

                        <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                            {/* Discount Label -35% at top-right */}
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                                -35%
                            </div>
                            {/* Delete Icon (on the right side) */}
                            <div
                                className="absolute top-2 right-2 cursor-pointer p-2 bg-white rounded-full"
                                onClick={() => handleDelete(1)} // Delete when clicked
                            >
                                <Trash2 size={24} className="text-black w-5 h-5" />
                            </div>

                            <img src={WishList1} alt="product" className="w-[150px] h-[150px] object-contain" />

                            {hovered === 1 && (
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                    Add to Cart
                                </div>
                            )}
                        </div>

                        <div className="mt-3 text-left">
                            <h3 className="text-md">Gucci duffle bag</h3>
                            <div className="flex pt-1 text-left text-sm">
                                <span className="text-red-500 ">$960</span>
                                <span className="text-gray-400 line-through pl-2">$1160</span>
                            </div>
                        </div>
                    </div>
                )}


                {/* Card 2 */}
                {items.includes(2) && (
                    <div
                        className="relative w-[250px] mx-auto"
                        onMouseEnter={() => setHovered(2)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                            {/* Delete Icon (on the right side) */}
                            <div
                                className="absolute top-2 right-2 cursor-pointer p-2 bg-white rounded-full"
                                onClick={() => handleDelete(2)} // Delete when clicked
                            >
                                <Trash2 size={24} className="text-black w-5 h-5" />
                            </div>

                            <img src={WishList2} alt="product" className="w-[150px] h-[150px] object-contain" />

                            {hovered === 2 && (
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                    Add to Cart
                                </div>
                            )}
                        </div>

                        <div className="mt-3 text-left">
                            <h3 className="text-md">RGB liquid CPU Cooler</h3>
                            <div className="flex pt-1 text-left text-sm">
                                <span className="text-red-500 ">$1960</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Card 3 */}
                {items.includes(3) && (
                    <div
                        className="relative w-[250px] mx-auto"
                        onMouseEnter={() => setHovered(3)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                            {/* Delete Icon (on the right side) */}
                            <div
                                className="absolute top-2 right-2 cursor-pointer p-2 bg-white rounded-full"
                                onClick={() => handleDelete(3)} // Delete when clicked
                            >
                                <Trash2 size={24} className="text-black w-5 h-5" />
                            </div>

                            <img src={WishList3} alt="product" className="w-[150px] h-[150px] object-contain" />

                            {hovered === 3 && (
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                    Add to Cart
                                </div>
                            )}
                        </div>

                        <div className="mt-3 text-left">
                            <h3 className="text-md">GP11 Shooter USB Gamepad</h3>
                            <div className="flex pt-1 text-left text-sm">
                                <span className="text-red-500 ">$550</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Card 4 */}
                {items.includes(4) && (
                    <div
                        className="relative w-[250px] mx-auto"
                        onMouseEnter={() => setHovered(4)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                            {/* Delete Icon (on the right side) */}
                            <div
                                className="absolute top-2 right-2 cursor-pointer p-2 bg-white rounded-full"
                                onClick={() => handleDelete(4)} // Delete when clicked
                            >
                                <Trash2 size={24} className="text-black w-5 h-5" />
                            </div>

                            <img src={WishList4} alt="product" className="w-[150px] h-[150px] object-contain" />

                            {hovered === 4 && (
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                    Add to Cart
                                </div>
                            )}
                        </div>

                        <div className="mt-3 text-left">
                            <h3 className="text-md">Quilted Satin Jacket</h3>
                            <div className="flex">
                                <span className="text-red-500 ">$750</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <div className="flex text-left mt-20">
                <img src={HomeImage6} alt="Just For You" />
                <p className="text-md mt-2 ml-3 font-normal text-black">Just For You</p>
                <button className="p-2 bg-white text-black border-1 border-gray-400 rounded-md py-2 px-6 ml-235 ">
                    <Link to="/see-all" className="text-black">
                        See All
                    </Link>
                </button>
            </div>

            <div className='flex mt-12 space-x-2'>




                {/* card5 */}
                <div
                    className="relative w-[260px] mx-auto"
                    onMouseEnter={() => setHovered(5)}  // Set hovered to 5 for card 5
                    onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
                >

                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList5} alt="product" className="w-[150px] h-[150px] object-contain" />

                        {/* "New" label */}
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                            -35%
                        </div>

                        {/* Icon buttons */}
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">

                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>

                        {/* Show "Add to Cart" button only for the hovered image */}
                        {hovered === 5 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                Add to Cart
                            </div>
                        )}
                    </div>

                    <div className="mt-3 text-left">
                        <h3 className="text-md">ASUS FHD Gaming Laptop</h3>
                        <div className="flex">
                            <div className="flex pt-1 text-left text-sm">
                                <span className="text-red-500 font-bold">$960</span>
                                <span className="text-gray-400 line-through pl-2">$1160</span>
                            </div>

                        </div>

                        <div className='flex'>
                            <StarRating rating={5} className="pl-5" />
                            <span className="text-gray-400 pl-2">(65)</span>
                        </div>


                    </div>
                </div>



                {/* cart6 */}
                <div
                    className="relative w-[250px] mx-auto"
                    onMouseEnter={() => setHovered(6)}  // Set hovered to 6 for card 6
                    onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
                >

                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList6} alt="product" className="w-[150px] h-[150px] object-contain" />

                        {/* Icon buttons */}
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">

                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>

                        {/* Show "Add to Cart" button only for the hovered image */}
                        {hovered === 6 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                Add to Cart
                            </div>
                        )}
                    </div>

                    <div className="mt-3 text-left">
                        <h3 className="text-md">IPS LCD Gaming Monitor</h3>
                        <div className="flex">
                            <p className="text-red-500 mt-1 mr-2 text-sm">$1160</p>

                        </div>
                        <div className='flex'>
                            <StarRating rating={5} className="pl-5" />
                            <span className="text-gray-400 pl-2">(65)</span>
                        </div>

                        {/* Color options */}

                    </div>
                </div>

                {/* cart7 */}

                <div
                    className="relative w-[250px] mx-auto"
                    onMouseEnter={() => setHovered(7)}  // Set hovered to 7 for card 7
                    onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
                >

                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList7} alt="product" className="w-[150px] h-[150px] object-contain" />

                        {/* New product label */}
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-md rounded-br-md">
                            New
                        </div>

                        {/* Icon buttons */}
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">

                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>

                        {/* Show "Add to Cart" button only for the hovered image */}
                        {hovered === 7 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                Add to Cart
                            </div>
                        )}
                    </div>

                    <div className="mt-3 text-left">
                        <h3 className="text-md">HAVIT HV-G92 Gamepad</h3>
                        <p className="text-red-500  mt-1 mr-2 text-sm">$560</p>
                        <div className="flex">

                            <StarRating rating={5} className="pl-5" />
                            <span className="text-gray-400 pl-2">(65)</span>
                        </div>


                    </div>
                </div>



                {/* cart8 */}

                <div
                    className="relative w-[250px] mx-auto"
                    onMouseEnter={() => setHovered(8)}  // Set hovered to 8 for card 8
                    onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
                >

                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList8} alt="product" className="w-[150px] h-[150px] object-contain" />



                        {/* Icon buttons */}
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">

                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>

                        {/* Show "Add to Cart" button only for the hovered image */}
                        {hovered === 8 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                Add to Cart
                            </div>
                        )}
                    </div>

                    <div className="mt-3 text-left">
                        <h3 className="text-md">Quilted Satin Jacket</h3>
                        <p className="text-red-500 mt-1 mr-2 text-sm">$200</p>
                        <div className="flex">

                            <StarRating rating={5} className="pl-5" />
                            <span className="text-gray-400 pl-2">(65)</span>
                        </div>

                        {/* Color options */}

                    </div>
                </div>



            </div>

        </>

    );
}

export default MyWishlist;
