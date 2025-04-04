import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service1 from '../assets/Service1.png';
import Service2 from '../assets/Service2.png';
import Service3 from '../assets/Service3.png';
import Service4 from '../assets/Service4.png';
import Service5 from '../assets/Service5.png';
import Service6 from '../assets/Service6.png';
import Service7 from '../assets/Service7.png';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import SideImage2 from '../assets/SideImage2.png';
import { Twitter, Instagram, Linkedin } from "lucide-react";

const About = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleKeyDown = (event) => {
    if (sliderRef.current) {
      if (event.key === 'ArrowRight') {
        sliderRef.current.slickNext();
      } else if (event.key === 'ArrowLeft') {
        sliderRef.current.slickPrev();
      }
    }
  };

  
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className='flex mt-10'>
        <p className='text-sm text-gray-400'>
          Home
        </p>
        <p className='text-sm text-gray-400'>
          /
        </p>
        <p className='text-sm text-gray-800'>
          About
        </p>
      </div>

      <div className='flex'>
        <div className='mt-10'>
          <div className='text-3xl max-w-xl text-left mt-30'>
            Our Story
          </div>

          <p className="text-left text-sm text-gray-600 mt-10 max-w-lg mx-auto">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>

          <p className='text-left text-sm text-gray-600 mt-6 max-w-lg mx-auto'>
            Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer goods to fashion.
          </p>
        </div>

        <div className='w-150 h-150 ml-60 mt-10'>
          <img src={SideImage2} alt="SideImage2" />
        </div>
      </div >

      <div className="flex flex-wrap gap-6 justify-center mt-0 mb-2">
        {[
          { image: Service1, value: "10.5k", text: "Sellers active on our site" },
          { image: Service2, value: "33k", text: "Monthly Product Sale" },
          { image: Service3, value: "45.5k", text: "Customers active in our site" },
          { image: Service4, value: "25k", text: "Annual gross sale" },
        ].map(({ image, value, text }, idx) => (
          <div key={idx} className="bg-white h-50 w-70 text-center rounded-md border-1 border-gray-300 text-center hover:bg-red-500 hover:text-white">
            <img src={image} alt={text} className="w-12 h-12 mx-auto mb-3 mt-10" />
            <h3 className="text-xl font-bold">{value}</h3>
            <p className="text-gray-500 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <div className="carousel-container mt-20 relative">
        <Slider {...settings} ref={sliderRef}>
          {[
            { image: Image1, name: "Tom Cruise", role: "Founder & Chairman" },
            { image: Image2, name: "Emma Watson", role: "Managing Director" },
            { image: Image3, name: "Will Smith", role: "Product Designer" },
          ].map(({ image, name, role }, idx) => (
            <div key={idx} className="carousel-item p-6 rounded-md text-left w-full h-auto">
              <div className="bg-gray-200 rounded-md mx-auto">
                <img src={image} alt={name} className="w-64 h-74 rounded-md mx-auto" />
              </div>
              <h3 className="text-xl font-bold mt-4">{name}</h3>
              <p className="text-gray-600">{role}</p>

              <div className="flex justify-start mt-4 space-x-4">
                <Twitter className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                <Instagram className="text-gray-600 hover:text-pink-500 cursor-pointer" />
                <Linkedin className="text-gray-600 hover:text-blue-700 cursor-pointer" />
              </div>
            </div>
          ))}
        </Slider>
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
};

export default About;
