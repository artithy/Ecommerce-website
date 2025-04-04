import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, SendHorizontal, Factory } from 'lucide-react';
import scanner from '../assets/scanner.png'

export default function Footer() {



    return (
        <>
            <footer className="bg-black text-white pt-10 mt-10 pl-10 pr-10">
                <div className="mx-auto gap-8 flex ">

                    {/* Exclusive Section */}
                    <div className=" text-left pl-17">
                        <div className='text-lg font-bold'>Exclusive</div>
                        <div className='text-md mt-2'>Subscribe</div>
                        <div className='text-sm mt-2 text-gray-200'>Get 10% off your first order</div>
                        <div className="relative mt-1 border-1 ">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="p-2 rounded-lg text-white-800 text-md focus:outline-none "
                            />
                            <SendHorizontal className="absolute  right-4 pb-2  top-3 hover:text-black text-white-700 " size={28} />
                        </div>



                    </div>

                    <div className=" text-left pl-10">
                        <div className='text-md font-semibold'>Support</div>
                        <div className='text-sm mt-2 text-gray-200'>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</div>
                        <div className='text-sm mt-2 text-gray-200'>exclusive@gmail.com</div>
                        <div className='text-sm mt-2 text-gray-200'>+88015-88888-9999</div>
                    </div>

                    <div className=" text-left pl-10">
                        <div className='text-md font-semibold'>Account</div>
                        <div className='text-sm mt-2 text-gray-200'>My Account</div>
                        <div className='text-sm mt-2 text-gray-200'>Login/Register</div>
                        <div className='text-sm mt-2 text-gray-200'>Cart </div>
                        <div className='text-sm mt-2 text-gray-200'>Wishlist </div>
                        <div className='text-sm mt-2 text-gray-200'>Shop </div>
                    </div>

                    <div className=" text-left pl-10">
                        <div className='text-md font-semibold'>Quick Link</div>
                        <div className='text-sm mt-2 text-gray-200'>Privacy Policy</div>
                        <div className='text-sm mt-2 text-gray-200'>Terms Of Use</div>
                        <div className='text-sm mt-2 text-gray-200'>FAQ </div>
                        <div className='text-sm mt-2 text-gray-200'>Contact </div>

                    </div>

                    <div className='text-left pl-10'>
                        <div className='text-md font-semibold'>Download App</div>
                        <div className='text-sm mt-2 text-gray-400'>$3 with App New User Only</div>

                        <div className='flex '>
                            <div className='pt-2'>
                                <img src={scanner} class="w-15 h-15"></img>
                            </div>
                            <div className='spcae-y-2 ml-3 mt-2'>
                                <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                className='w-24 '
                                />
                                 <img 
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"  
                                className='w-24 mt-1 '
                                />


                            </div>
                        </div>

                        <div className='flex space-x-6 mt-4'>
                            <Facebook  className='w-5 h-5'/>
                            <Twitter  className='w-5 h-5'/>
                            <Instagram className='w-5 h-5'/>
                            <Linkedin  className='w-5 h-5'/>
                        </div>
                    </div>
                    


                </div>
                <div className='text-sm pt-10 pb-3 text-gray-700'>
                © Copyright Rimel 2022. All rights reserved.
                </div>

                
            </footer>
        </>
    );
};

