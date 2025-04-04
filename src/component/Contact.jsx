import { Mail, Phone } from "lucide-react";

export default function Contact() {
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
          Contact
        </p>
      </div>


      <div className="flex space-x-6">
        <div className=" shadow-lg bg-gray-100 max-w-full w-full px-10 py-6 mt-20 mb-30">
          <div className=" pb-8 border-b border-gray-500">
            <div className="flex">
              <div className="bg-red-600 text-white rounded-4xl p-2 ">
                <Phone />
              </div>
              <div className="text-md font-semibold pt-2 pl-3 ">
                Call To Us
              </div>
            </div>

            <p className=" text-sm text-gray-500 text-left pt-4">
              We are available 24/7, 7 days a week.

            </p>
            <div className="flex">
              <p className=" text-sm text-gray-600 text-left pt-1">
                Phone:

              </p>
              <p className=" text-sm text-gray-500 text-left pt-1">
                +8801611112222

              </p>
            </div>


          </div>

          <div className=" pt-8">
            <div className="flex">
              <div className="bg-red-600 text-white rounded-4xl p-2 ">
                <Mail />
              </div>
              <div className="text-md font-semibold pt-2 pl-3 ">
                Write To US
              </div>
            </div>

            <p className=" text-sm text-gray-500 text-left pt-4">
              Fill out our form and we will contact you within 24 hours.

            </p>
            <p className=" text-sm text-gray-600 text-left pt-5">
              Emails:
            </p>
            <p className=" text-sm text-gray-500 text-left pt-2">
              customer@exclusive.com
            </p>
            <p className=" text-sm text-gray-500 text-left pt-1">
              support@exclusive.com

            </p>


          </div>





        </div >


        <div className="bg-gray-100 p-6  shadow-lg mt-20 mb-30 flex ">
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1 ">
                <div className="flex items-center bg-gray-200 rounded-md p-3 focus-within:ring-2 focus-within:ring-red-400">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent outline-none"
                  />
                  <span className="text-red-500  text-left ml-1">*</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center bg-gray-200 rounded-md p-3 focus-within:ring-2 focus-within:ring-red-400">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent outline-none"
                  />
                  <span className="text-red-500 ml-1">*</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center bg-gray-200 rounded-md p-3 focus-within:ring-2 focus-within:ring-red-400">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="w-full bg-transparent outline-none"
                  />
                  <span className="text-red-500 ml-1">*</span>
                </div>
              </div>
            </div>


            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-200  pt-5 p-3 rounded-md h-32 outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
            <button
              type="submit"
              className="  w-60 pb-2 mt-10 ml-180 bg-red-600 text-white font-semibold py-3 px-4 hover:bg-red-600 transitionw-10 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>




    </>
  );
}
