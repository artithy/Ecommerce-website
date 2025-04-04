import { useState, useEffect, useRef } from 'react';
import HomeImage2 from "../assets/HomeImage2.png";
import HomeImage3 from "../assets/HomeImage3.png";
import HomeImage4 from "../assets/HomeImage4.png";
import HomeImage5 from "../assets/HomeImage5.png";
import HomeImage18 from "../assets/HomeImage18.png";
import HomeImage19 from "../assets/HomeImage19.png";
import HomeImage20 from "../assets/HomeImage20.png";
import HomeImage21 from "../assets/HomeImage21.png";
import HomeImage22 from "../assets/HomeImage22.png";
import HomeImage23 from "../assets/HomeImage23.png";
import HomeImage24 from "../assets/HomeImage24.png";
import HomeImage25 from "../assets/HomeImage25.png";


import StarRating from "./StarRating";
import { Heart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Home() {

  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  // Function to add product to cart
  const addToCart = (product) => {
    let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(product);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    navigate('/cart'); // Navigate to the Cart page
  };

  return (
    <>
      <div className="relative flex flex-col items-center mt-10 mb-10">


        <div className="flex items-center justify-center w-full">
          <div className="w-1/5 border-t-2 border-red-500"></div>
          <span className="px-4 text-xl font-semibold text-gray-700">Here is our amazing products</span>
          <div className="w-1/5 border-t-2 border-red-500"></div>
        </div>

        <div className="flex justify-center space-x-4 mt-5 ">

          {/* Product 1 */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55 ">
              <img
                src={HomeImage2}
                alt="product"
                className="w-[150px] h-[200px] object-contain"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">-35%</div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Heart size={16} className="text-gray-800" />
                </div>
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Eye size={16} className="text-gray-800" />
                </div>
              </div>

              {/* Only show the "Add to Cart" button when hovered */}
              {hovered === 1 && (
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center z-10"
                  onClick={() => addToCart({
                    id: 1,
                    name: "HAVIT HV-G92 Gamepad",
                    price: 120,
                    originalPrice: 160,
                    image: HomeImage2,
                    discount: 35,
                  })}
                >
                  Add to Cart
                </div>
              )}
            </div>
            <div className="mt-3 text-left">
              <h3 className="text-md">HAVIT HV-G92 Gamepad</h3>
              <div className="flex">
                <p className="text-red-500 mt-1 mr-2 ">$120</p>
                <span className="text-gray-400 line-through mt-1 pl-2">$160</span>
              </div>
              <div className='flex'>
                <StarRating rating={5} />
                <span className="text-gray-400  pl-2">(88)</span>

              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55 ">
              <img src={HomeImage3} alt="product" className="w-[150px] h-[200px] object-contain" />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">-35%</div>

              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Heart size={16} className="text-gray-800" />
                </div>
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Eye size={16} className="text-gray-800" />
                </div>
              </div>

              {/* Show "Add to Cart" button only for the hovered image */}
              {hovered === 2 && (
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                  onClick={() => addToCart({
                    id: 2,
                    name: "AK-900 Wired Keyboard",
                    price: 960,
                    originalPrice: 1160,
                    image: HomeImage3,
                    discount: 35,
                  })}
                >
                  Add to Cart
                </div>
              )}
            </div>
            <div className="mt-3 text-left">
              <h3 className="text-md">AK-900 Wired Keyboard</h3>
              <div className="flex">
                <p className="text-red-500 mt-1 mr-2 ">$960</p>
                <span className="text-gray-400 line-through pl-2">$1160</span>
              </div>
              <div className="flex">
                <StarRating rating={4} />
                <span className="text-gray-400 pl-2">(75)</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55 ">
              <img src={HomeImage4} alt="product" className="w-[150px] h-[200px] object-contain" />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">-30%</div>

              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Heart size={16} className="text-gray-800" />
                </div>
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Eye size={16} className="text-gray-800" />
                </div>
              </div>

              {/* Show "Add to Cart" button only for the hovered image */}
              {hovered === 3 && (
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                  onClick={() => addToCart({
                    id: 3,
                    name: "AK-900 Wired Keyboard",
                    price: 370,
                    originalPrice: 400,
                    image: HomeImage4,
                    discount: 30,
                  })}
                >
                  Add to Cart
                </div>
              )}
            </div>
            <div className="mt-3 text-left">
              <h3 className="text-md">AK-900 Wired Keyboard</h3>
              <div className="flex">
                <p className="text-red-500 mt-1 mr-2 ">$370</p>
                <span className="text-gray-400 line-through pl-2">$400</span>
              </div>
              <div className="flex">
                <StarRating rating={5} />
                <span className="text-gray-400 pl-2">(99)</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(4)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
              <img src={HomeImage5} alt="product" className="w-[150px] h-[200px] object-contain" />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">-25%</div>

              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Heart size={16} className="text-gray-800" />
                </div>
                <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                  <Eye size={16} className="text-gray-800" />
                </div>
              </div>

              {/* Show "Add to Cart" button only for the hovered image */}
              {hovered === 4 && (
                <div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                  onClick={() => addToCart({
                    id: 4,
                    name: "Samsung Galaxy Tab A",
                    price: 250,
                    originalPrice: 300,
                    image: HomeImage5,
                    discount: 25,
                  })}
                >
                  Add to Cart
                </div>
              )}
            </div>
            <div className="mt-3 text-left">
              <h3 className="text-md">Samsung Galaxy Tab A</h3>
              <div className="flex">
                <p className="text-red-500 mt-1 mr-2 ">$250</p>
                <span className="text-gray-400 line-through pl-2">$300</span>
              </div>
              <div className="flex">
                <StarRating rating={4} />
                <span className="text-gray-400 pl-2">(54)</span>
              </div>
            </div>
          </div>
        </div>
      </div>







      {/* flex1 start */}







      <div className="flex space-x-6  mr-6">
        {/* Card 1 */}
        <div
          className="relative w-[260px] mx-auto"
          onMouseEnter={() => setHovered(1)}  // Set hovered to 1 for card 1
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage18} alt="product" className="w-[150px] h-[150px] object-contain" />

            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 1 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 1,
                  name: "Breed Dry Dog Food",
                  price: 100,
                  originalPrice: 120,
                  image: HomeImage18,
                  discount: 15,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">Breed Dry Dog Food</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$100</p>
              <StarRating rating={3} className="pl-5" />
              <span className="text-gray-400 pl-2">(65)</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative w-[250px] mx-auto ml-4 "
          onMouseEnter={() => setHovered(2)}  // Set hovered to 2 for card 2
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage19} alt="product" className="w-[150px] h-[150px] object-contain" />

            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 2 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 2,
                  name: "CANON EOS DSLR Camera",
                  price: 360,
                  originalPrice: 400,
                  image: HomeImage19,
                  discount: 10,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">CANON EOS DSLR Camera</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$360</p>
              <StarRating rating={4} className="pl-5" />
              <span className="text-gray-400 pl-2">(95)</span>
            </div>
          </div>
        </div>


        {/* Card 3 */}
        <div
          className="relative w-[250px] mx-auto "
          onMouseEnter={() => setHovered(3)}  // Set hovered to 3 for card 3
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage20} alt="product" className="w-[150px] h-[150px] object-contain" />

            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 3 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 3,
                  name: "ASUS FHD Gaming Laptop",
                  price: 700,
                  originalPrice: 800,
                  image: HomeImage20,
                  discount: 12.5,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">ASUS FHD Gaming Laptop</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$700</p>
              <StarRating rating={5} className="pl-5" />
              <span className="text-gray-400 pl-2">(325)</span>
            </div>
          </div>
        </div>

        {/* cart4 */}
        {/* Card 4 */}
        <div
          className="relative w-[250px] mx-auto "
          onMouseEnter={() => setHovered(4)}  // Set hovered to 4 for card 4
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage21} alt="product" className="w-[150px] h-[150px] object-contain" />

            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 4 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 4,
                  name: "Curology Product Set",
                  price: 500,
                  originalPrice: 600,
                  image: HomeImage21,
                  discount: 16.67,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">Curology Product Set</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$500</p>
              <StarRating rating={4} className="pl-5" />
              <span className="text-gray-400 pl-2">(145)</span>
            </div>
          </div>
        </div>



      </div>


      {/* flex2 start */}
      <div className='flex mt-12 space-x-6 mr-6'>




        {/* Card 5 */}
        <div
          className="relative w-[260px] mx-auto"
          onMouseEnter={() => setHovered(5)}  // Set hovered to 5 for card 5
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage22} alt="product" className="w-[150px] h-[150px] object-contain" />

            {/* "New" label */}
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-md rounded-br-md">
              New
            </div>

            {/* Icon buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 5 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 5,
                  name: "Kids Electric Car",
                  price: 960,
                  originalPrice: 1200,
                  image: HomeImage22,
                  discount: 20,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">Kids Electric Car</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$960</p>
              <StarRating rating={5} className="pl-5" />
              <span className="text-gray-400 pl-2">(65)</span>
            </div>

            {/* Color options */}
            <div className="flex space-x-2 mt-1">
              <div className="w-6 h-6 mt-1 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
              </div>

              <div className="w-6 h-7 mt-1 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>




        {/* Cart 6 */}
        <div
          className="relative w-[250px] mx-auto ml-4"
          onMouseEnter={() => setHovered(6)}  // Set hovered to 6 for card 6
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage23} alt="product" className="w-[150px] h-[150px] object-contain" />

            {/* Icon buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 6 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 6,
                  name: "CANON EOS DSLR Camera",
                  price: 360,
                  image: HomeImage23,
                  rating: 4,
                  discount: 10,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">CANON EOS DSLR Camera</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$360</p>
              <StarRating rating={4} className="pl-5" />
              <span className="text-gray-400 pl-2">(95)</span>
            </div>

            {/* Color options */}
            <div className="flex space-x-2 mt-1">
              <div className="w-6 h-6 mt-1 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              </div>

              <div className="w-6 h-7 mt-1 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart 7 */}

        <div
          className="relative w-[250px] mx-auto"
          onMouseEnter={() => setHovered(7)}  // Set hovered to 7 for card 7
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage24} alt="product" className="w-[150px] h-[150px] object-contain" />

            {/* New product label */}
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-md rounded-br-md">
              New
            </div>

            {/* Icon buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 7 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 7,
                  name: "GP11 Shooter USB Gamepad",
                  price: 660,
                  image: HomeImage24,
                  rating: 4,
                  discount: 15,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">GP11 Shooter USB Gamepad</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$660</p>
              <StarRating rating={4} className="pl-5" />
              <span className="text-gray-400 pl-2">(55)</span>
            </div>

            {/* Color options */}
            <div className="flex space-x-2 mt-1">
              <div className="w-6 h-6 mt-1 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>

              <div className="w-6 h-7 mt-1 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>


        {/* cart8 */}

        <div
          className="relative w-[250px] mx-auto"
          onMouseEnter={() => setHovered(8)}  // Set hovered to 8 for card 8
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
            <img src={HomeImage25} alt="product" className="w-[150px] h-[150px] object-contain" />

            {/* Icon buttons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Heart size={16} className="text-gray-800" />
              </div>
              <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                <Eye size={16} className="text-gray-800" />
              </div>
            </div>

            {/* Show "Add to Cart" button only for the hovered image */}
            {hovered === 8 && (
              <div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md cursor-pointer w-[90%] text-center"
                onClick={() => addToCart({
                  id: 8,
                  name: "Quilted Satin Jacket",
                  price: 660,
                  image: HomeImage25,
                  rating: 4,
                  discount: 10,
                })}
              >
                Add to Cart
              </div>
            )}
          </div>

          <div className="mt-3 text-left">
            <h3 className="text-md">Quilted Satin Jacket</h3>
            <div className="flex">
              <p className="text-gray-600 mt-1 mr-2 text-sm">$660</p>
              <StarRating rating={4} className="pl-5" />
              <span className="text-gray-400 pl-2">(55)</span>
            </div>

            {/* Color options */}
            <div className="flex space-x-2 mt-1">
              <div className="w-6 h-6 mt-1 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              </div>

              <div className="w-6 h-7 mt-1 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}
