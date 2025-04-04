import { useState, useEffect, useRef } from 'react';
import HomeImage13 from "../assets/HomeImage13.png";
import HomeImage14 from "../assets/HomeImage14.png";
import HomeImage15 from "../assets/HomeImage15.png";
import HomeImage16 from "../assets/HomeImage16.png";
import StarRating from "./StarRating";
export default function Home() {
    return (
        <>
            <div className="relative flex flex-col items-center mt-10 mb-10">


                <div className="flex items-center justify-center w-full">
                    <div className="w-1/5 border-t-2 border-red-500"></div>
                    <span className="px-4 text-xl font-semibold text-gray-700">Here is our amazing Best Selling products</span>
                    <div className="w-1/5 border-t-2 border-red-500"></div>
                </div>

                <div className="flex justify-center space-x-4 mt-5">
                    <div className="mx-4">
                        <img src={HomeImage13} />
                        <div className="mt-3">
                            <h3 className="text-lg font-Medium text-left">The north coat</h3>
                        </div>
                        <div className="flex pt-1 text-left text-sm">
                            <span className="text-red-500 font-bold">$260</span>
                            <span className="text-gray-400 line-through pl-2">$360</span>
                        </div>
                        <div className='flex'>
                            <StarRating rating={5} />
                            <span className="text-gray-400 pl-2">(65)</span>

                        </div>
                    </div>

                    <div className="mx-4">
                        <img src={HomeImage14} />
                        <div className="mt-3">
                            <h3 className="text-lg font-Medium text-left">Gucci duffle bag</h3>
                        </div>
                        <div className="flex pt-1 text-left text-sm">
                            <span className="text-red-500 font-bold">$960</span>
                            <span className="text-gray-400 line-through pl-2">$1160</span>
                        </div>
                        <div className='flex'>
                            <StarRating rating={4} />
                            <span className="text-gray-400 pl-2">(65)</span>

                        </div>
                    </div>

                    <div className="mx-4"> {/* Add margin here to control gap between slides */}
                        <img src={HomeImage15} />
                        <div className="mt-3">
                            <h3 className="text-lg font-Medium text-left">RGB liquid CPU Cooler</h3>
                        </div>
                        <div className="flex pt-1 text-left text-sm">
                            <span className="text-red-500 font-bold">$160</span>
                            <span className="text-gray-400 pl-2">$170</span>
                        </div>
                        <div className='flex'>
                            <StarRating rating={4} />
                            <span className="text-gray-400  pl-2">(65)</span>

                        </div>
                    </div>

                    <div className="mx-4">
                        <img src={HomeImage16} />
                        <div className="mt-3">
                            <h3 className="text-lg font-Medium text-left">Small BookSelf</h3>
                        </div>
                        <div className="flex pt-1 text-left text-sm">
                            <span className="text-red-500 font-bold">$360</span>

                        </div>
                        <div className='flex'>
                            <StarRating rating={5} />
                            <span className="text-gray-400  pl-2">(65)</span>

                        </div>
                    </div>





                </div>
            </div>
        </>
    );
}