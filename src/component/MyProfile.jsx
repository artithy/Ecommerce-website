import React from 'react';

function MyProfile() {
    return (
        <>


            <div className='bg-gray-100 rounded-sm shadow-md mt-22 pt-10 pb-10 pl-10 pr-5  w-230'>

                <h2 className='text-lg text-red-700 text-left'>Edit Your Profile </h2>
                <div className="flex mt-4">
                    <div>
                        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 text-left">First Name</label>
                        <input
                            type="text"

                            placeholder="First Name"

                            className="bg-gray-200 p-2 rounded w-100 mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 text-left ml-10">Last Name</label>
                        <input
                            type="text"

                            placeholder="Last Name"

                            className="bg-gray-200 p-2 rounded w-100 ml-10 mt-1"
                        />
                    </div>
                </div>


                <div className="flex mt-4">
                    <div>
                        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                        <input
                            type="text"

                            placeholder="Email"

                            className="bg-gray-200 p-2 rounded w-100 mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 text-left ml-10">Address</label>
                        <input
                            type="text"

                            placeholder="Address"

                            className="bg-gray-200 p-2 rounded w-100 ml-10 mt-1"
                        />
                    </div>



                </div>

                <div className='text-left'>
                    <h3 className="block text-sm font-medium text-gray-700 text-left mt-5 mb-1 ">Password Changes</h3>

                    <input
                        type="password"
                        placeholder="Current Password"
                        className=" bg-gray-200 p-2 rounded w-210 mb-2"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="bg-gray-200 p-2 rounded w-210 mb-2"
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="bg-gray-200 p-2 rounded w-210 mb-4"
                    />

                    <div className="flex gap-2 ml-154 ">
                        <button className="text-gray-700 px-4 py-2 rounded">Cancel</button>
                        <button className="bg-red-700 text-white px-4 py-2 rounded">
                            Save Changes
                        </button>
                    </div>
                </div>




            </div>
        </>
    );
}

export default MyProfile;
