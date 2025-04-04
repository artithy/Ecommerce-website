import { useState, useEffect, useRef } from 'react';
import { Heart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HomeImage1 from "../assets/HomeImage1.png";
import HomeImage2 from "../assets/HomeImage2.png";
import HomeImage3 from "../assets/HomeImage3.png";
import HomeImage4 from "../assets/HomeImage4.png";
import HomeImage5 from "../assets/HomeImage5.png";
import HomeImage6 from "../assets/HomeImage6.png";
import HomeImage7 from "../assets/HomeImage7.png";
import HomeImage8 from "../assets/HomeImage8.png";
import HomeImage9 from "../assets/HomeImage9.png";
import HomeImage10 from "../assets/HomeImage10.png";
import HomeImage11 from "../assets/HomeImage11.png";
import HomeImage12 from "../assets/HomeImage12.png";
import HomeImage13 from "../assets/HomeImage13.png";
import HomeImage14 from "../assets/HomeImage14.png";
import HomeImage15 from "../assets/HomeImage15.png";
import HomeImage16 from "../assets/HomeImage16.png";
import HomeImage17 from "../assets/HomeImage17.png";
import HomeImage18 from "../assets/HomeImage18.png";
import HomeImage19 from "../assets/HomeImage19.png";
import HomeImage20 from "../assets/HomeImage20.png";
import HomeImage21 from "../assets/HomeImage21.png";
import HomeImage22 from "../assets/HomeImage22.png";
import HomeImage23 from "../assets/HomeImage23.png";
import HomeImage24 from "../assets/HomeImage24.png";
import HomeImage25 from "../assets/HomeImage25.png";
import HomeImage26 from "../assets/HomeImage26.png";
import HomeImage27 from "../assets/HomeImage27.png";
import HomeImage28 from "../assets/HomeImage28.png";
import HomeImage288 from "../assets/HomeImage288.png";
import HomeImage299 from "../assets/HomeImage299.png";
import Service5 from "../assets/Service5.png";
import Service6 from "../assets/Service6.png";
import Service7 from "../assets/Service7.png";

import Arrow from "../assets/Arrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from './StarRating';
import { Link } from "react-router-dom";
import ViewAll from "../component/ViewAll"
import BestViewAll from "../component/BestViewAll"

export default function Home() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };








  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };


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
      <div className="flex">
        <div className="text-left ml-4 mt-13 text-sm text-gray-700 space-y-7">
          <div className="flex">
            <p>Woman’s Fashion</p>
            <img src={Arrow} className="ml-10" />
          </div>
          <div className="flex">
            <p>Men’s Fashion</p>
            <img src={Arrow} className="ml-15" />
          </div>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        <div className="border-r-2 border-gray-300 h-105 ml-2"></div>
        <div className="ml-12 mt-12 mb-35">
          <img src={HomeImage1} className="w-240" />
        </div>
      </div>

      <div className="mb-5">
        <div className="flex text-left">
          <img src={HomeImage6} />
          <p className="text-md mt-2 ml-3 font-semibold text-red-500">Today’s</p>
        </div>
        <div className="flex">
          <div className="text-3xl space-x-6 pt-11 font-semibold">Flash Sales</div>
          <div className="flex justify-center mt-6 ml-10 space-x-6">
            <div className="text-center">
              <div className="text-black text-sm">Days</div>
              <div className="flex items-center justify-center">
                <div className="text-3xl pl-5 font-semibold">{timeLeft.days}</div>
                <div className="text-center pl-7 pt-1 font-bold text-red-500">:</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-black text-sm">Hours</div>
              <div className="flex items-center justify-center">
                <div className="text-3xl pl-7 font-semibold">{timeLeft.hours}</div>
                <div className="text-center pl-7 pt-1 font-bold text-red-500">:</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-black text-sm">Minutes</div>
              <div className="flex items-center justify-center">
                <div className="text-3xl pl-5 font-semibold">{timeLeft.minutes}</div>
                <div className="text-center pt-1 pl-7 font-bold text-red-400">:</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-black text-sm">Seconds</div>
              <div className="text-3xl font-semibold">{timeLeft.seconds}</div>
            </div>
          </div>
        </div>
      </div>










      <div className="relative border-b-2 border-gray-300 gap-6 overflow-x-auto">
        <Slider ref={sliderRef} {...settings} className="flex gap-6">



          {/* Product 1 */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
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
            <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
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
            <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center w-70 h-55">
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


        </Slider>

        {/* Navigation buttons */}
        <div className="absolute top-1/3 left-0 transform -translate-y-1/2">
          <button onClick={goPrev} className="text-gray-700 bg-gray-200 rounded-full p-3">
            &#60;
          </button>
        </div>

        <div className="absolute top-1/3 right-0 transfrm -translate-y-1/2">
          <button onClick={goNext} className="text-gray-700 bg-gray-200 rounded-full p-3">
            &#62;
          </button>
        </div>

        <button className="p-2 bg-red-500 rounded-sm mb-12 mt-15 px-6">
          <Link to="/ViewAll" className="text-white">View All Products</Link>
        </button>
      </div>





      <div className="mb-5 mt-10 border-b-2 border-gray-300">
        <div className="flex text-left">
          <img src={HomeImage6} />
          <p className="text-md mt-2 ml-3  font-semibold text-red-500">Categories</p>
        </div>

        <div className="text-3xl space-x-6 pt-5 text-left font-semibold">Browse By Category</div>
        <div className="flex flex-wrap gap-6 justify-center mt-0 mb-2 pt-15 pb-15">
          {[
            { image: HomeImage7, text: "Phones" },
            { image: HomeImage8, text: "Computers" },
            { image: HomeImage9, text: "SmartWatch" },
            { image: HomeImage10, text: "Camera" },
            { image: HomeImage11, text: "HeadPhones" },
            { image: HomeImage12, text: "Gaming" },
          ].map(({ image, text }, idx) => (
            <div key={idx} className="bg-white h-40 w-45 text-center rounded-sm border-1 border-gray-300 text-center hover:bg-red-500 hover:text-white">
              <img src={image} alt={text} className="w-12 h-12 mx-auto mb-3 mt-10" />

              <p className="text-gray-500 text-sm">{text}</p>
            </div>
          ))}
        </div>

      </div>




      <div className='mt-10'>
        <div className='flex'>
          <img src={HomeImage6} />


          <p className="text-md mt-2 ml-3 font-semibold text-red-500">This Month</p>

        </div>
        <div className='flex'>
          <div className="text-3xl space-x-6 pt-5 font-semibold text-left">Best Selling Products</div>
          <button className="p-2 bg-red-500 rounded-sm mb-12 mt-5 ml-195 px-6 ">
            <Link to="/BestViewAll" className='text-white px-4'>View All</Link>
          </button>
        </div>



        <div className="relative ">
          <Slider ref={sliderRef} {...settings}>
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
          </Slider>
        </div>

      </div >






      <div className=' w-300 h-100 mt-30 pb-20 ml-5'>
        <img src={HomeImage17}></img>
      </div>










      <div className='flex mt-40'>
        <img src={HomeImage6} />


        <p className="text-md mt-2 ml-3 font-semibold text-red-500">Our Products</p>

      </div>
      <div className="text-3xl space-x-6 pt-5 text-left font-semibold pb-15">Explore Our Products</div>



      {/* flex1 start */}







      <div className="flex space-x-4">
        {/* Card 1 */}
        <div
          className="relative w-[260px] mx-auto"
          onMouseEnter={() => setHovered(1)}  // Set hovered to 1 for card 1
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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
          className="relative w-[250px] mx-auto"
          onMouseEnter={() => setHovered(2)}  // Set hovered to 2 for card 2
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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
          className="relative w-[250px] mx-auto"
          onMouseEnter={() => setHovered(3)}  // Set hovered to 3 for card 3
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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
          className="relative w-[250px] mx-auto"
          onMouseEnter={() => setHovered(4)}  // Set hovered to 4 for card 4
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >
          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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
      <div className='flex mt-12 space-x-2'>




        {/* Card 5 */}
        <div
          className="relative w-[260px] mx-auto"
          onMouseEnter={() => setHovered(5)}  // Set hovered to 5 for card 5
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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
          className="relative w-[250px] mx-auto"
          onMouseEnter={() => setHovered(6)}  // Set hovered to 6 for card 6
          onMouseLeave={() => setHovered(null)}  // Reset hovered state when mouse leaves
        >

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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

          <div className="relative bg-gray-100 p-4 rounded-md flex items-center justify-center">
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

      <button className="p-2 bg-red-500 rounded-sm mb-12 mt-15 px-6 ">
        <Link to="/ViewAll" className="text-white">
          View All Products
        </Link>
      </button>






      <div className="flex  mt-20 text-left">
        <img src={HomeImage6} />
        <p className="text-md mt-2 ml-3 font-semibold text-red-500">Featured</p>
      </div>

      <div className="text-3xl space-x-6 pt-8 text-left font-semibold pb-20">New Arrival</div>



      <div className='flex space-x-2 ml-5 '>
        <div
          className="relative w-[520px] h-[500px] bg-cover bg-center pt-10 pl-5 pr-5"
          style={{ backgroundImage: `url(${HomeImage26})`, backgroundColor: 'black' }}
        >

          <h3 className="text-left pt-80 text-xl font-semibold text-white text-left  ">
            PlayStation 5
          </h3>
          <p className='text-sm text-left pt-2 text-gray-300'>Black and White version of the PS5<br /> coming out on sale.</p>
          <p className="text-sm font-semibold text-left text-white pt-2 relative">
            Shop Now
            <span className="block w-[17%] pt-1 border-t-1 border-gray-400 absolute left-0"></span>
          </p>
        </div>

        <div className='space-y-7 ml-5 '>
          <div
            className="relative w-150 h-[265px] bg-cover bg-center   pt-10 pl-5 pr-5"
            style={{ backgroundImage: `url(${HomeImage27})`, backgroundColor: 'black' }}
          >


            <div className='text-left pr-30 pt-25'>
              <h3 className="text-left  text-xl font-semibold text-white text-left  ">
                Women’s Collections
              </h3>
              <p className='text-sm text-left pt-2 text-gray-300'>Featured woman collections that<br /> give you another vibe.</p>
              <p className="text-sm font-semibold text-left text-white pt-2 relative">
                Shop Now

                <span className="block w-[12%] pt-1 border-t-1 border-gray-400 absolute left-0"></span>
              </p>
            </div>
          </div>

          <div className='flex space-x-8'>

            <img src={HomeImage288} className='w-71 h-51' />
            <img src={HomeImage299} className='w-71 h-51' />


          </div>

        </div>

      </div>




      <div className="flex flex-wrap gap-6 justify-center mt-25 mb-20">
        {[
          { image: Service5, value: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
          { image: Service6, value: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
          { image: Service7, value: "MONEY BACK GUARANTEE", text: "30-day return policy" },
        ].map(({ image, value, text }, idx) => (
          <div key={idx} className="bg-white h-50 w-70 text-center rounded-md text-center">
            <img src={image} alt={text} className="w-12 h-12 mx-auto mb-3 mt-10" />
            <h3 className="text-l font-semibold">{value}</h3>
            <p className="text-gray-500 text-sm">{text}</p>
          </div>
        ))}
      </div>

















    </>

  );
}
