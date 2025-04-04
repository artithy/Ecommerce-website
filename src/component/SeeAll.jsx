import { useState } from "react";
import { Eye } from "lucide-react"; // Eye icon import
import StarRating from "./StarRating"; // StarRating component
import WishList5 from "../assets/WishList5.png"; // Image imports
import WishList6 from "../assets/WishList6.png";
import WishList7 from "../assets/WishList7.png";
import WishList8 from "../assets/WishList8.png";
import MyWishlist from "./MyWishlist";

export default function SeeAll() {
    const [hovered, setHovered] = useState(null);

    return (
        <>
            <div className="flex">
                <div
                    className="relative w-[260px] mx-auto"
                    onMouseEnter={() => setHovered(5)} // Set hovered to 5 for card 5
                    onMouseLeave={() => setHovered(null)} // Reset hovered state when mouse leaves
                >
                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList5} alt="product" className="w-[150px] h-[150px] object-contain" />
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                            -35%
                        </div>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>
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
                                <span className="text-red-500 ">$960</span>
                                <span className="text-gray-400 line-through pl-2">$1160</span>
                            </div>
                        </div>
                        <div className="flex">
                            <StarRating rating={5} className="pl-5" />
                            <span className="text-gray-400 pl-2">(65)</span>
                        </div>
                    </div>
                </div>

                <div
                    className="relative w-[260px] mx-auto"
                    onMouseEnter={() => setHovered(6)} // Set hovered to 6 for card 6
                    onMouseLeave={() => setHovered(null)} // Reset hovered state when mouse leaves
                >
                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList6} alt="product" className="w-[150px] h-[150px] object-contain" />
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                            -25%
                        </div>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>
                        {hovered === 6 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                Add to Cart
                            </div>
                        )}
                    </div>
                    <div className="mt-3 text-left">
                        <h3 className="text-md">Dell XPS 13</h3>
                        <div className="flex">
                            <div className="flex pt-1 text-left text-sm">
                                <span className="text-red-500 ">$1250</span>
                                <span className="text-gray-400 line-through pl-2">$1400</span>
                            </div>
                        </div>
                        <div className="flex">
                            <StarRating rating={4} className="pl-5" />
                            <span className="text-gray-400 pl-2">(52)</span>
                        </div>
                    </div>
                </div>

                <div
                    className="relative w-[260px] mx-auto"
                    onMouseEnter={() => setHovered(7)} // Set hovered to 7 for card 7
                    onMouseLeave={() => setHovered(null)} // Reset hovered state when mouse leaves
                >
                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList7} alt="product" className="w-[150px] h-[150px] object-contain" />
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                            -20%
                        </div>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>
                        {hovered === 7 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                Add to Cart
                            </div>
                        )}
                    </div>
                    <div className="mt-3 text-left">
                        <h3 className="text-md">MacBook Pro</h3>
                        <div className="flex">
                            <div className="flex pt-1 text-left text-sm">
                                <span className="text-red-500 ">$1800</span>
                                <span className="text-gray-400 line-through pl-2">$2000</span>
                            </div>
                        </div>
                        <div className="flex">
                            <StarRating rating={4} className="pl-5" />
                            <span className="text-gray-400 pl-2">(47)</span>
                        </div>
                    </div>
                </div>

                <div
                    className="relative w-[260px] mx-auto"
                    onMouseEnter={() => setHovered(8)} // Set hovered to 8 for card 8
                    onMouseLeave={() => setHovered(null)} // Reset hovered state when mouse leaves
                >
                    <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
                        <img src={WishList8} alt="product" className="w-[150px] h-[150px] object-contain" />
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                            -15%
                        </div>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                <Eye size={16} className="text-gray-800" />
                            </div>
                        </div>
                        {hovered === 8 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center">
                                Add to Cart
                            </div>
                        )}
                    </div>
                    <div className="mt-3 text-left">
                        <h3 className="text-md">HP Pavilion Laptop</h3>
                        <div className="flex">
                            <div className="flex pt-1 text-left text-sm">
                                <span className="text-red-500 ">$850</span>
                                <span className="text-gray-400 line-through pl-2">$1000</span>
                            </div>
                        </div>
                        <div className="flex">
                            <StarRating rating={3} className="pl-5" />
                            <span className="text-gray-400 pl-2">(20)</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
