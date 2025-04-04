import { useState } from 'react';
import MyProfile from './MyProfile';
import MyWishList from './MyWishlist';

function AccountPage() {
  const [selectedPage, setSelectedPage] = useState('myProfile');

  const renderPageContent = () => {
    switch (selectedPage) {
      case 'myProfile':
        return <MyProfile />;
      case 'addressBook':
        return <div>Address Book Content</div>;
      case 'paymentOptions':
        return <div>My Payment Options Content</div>;
      case 'myReturns':
        return <div>My Returns Content</div>;
      case 'myCancellations':
        return <div>My Cancellations Content</div>;
      case 'myWishlist':
        return <MyWishList />;
      default:
        return <div>Choose an option</div>;
    }
  };

  return (
    <>
      {/* Conditionally render the breadcrumb based on the selected page */}
      {selectedPage !== 'myWishlist' && (
        <div className='flex text-left mt-10'>
          <p className='text-sm text-gray-400'>
            Home
          </p>
          <p className='text-sm text-gray-400'>
            /
          </p>
          <p className='text-sm text-gray-800'>
            My Account
          </p>
        </div>
      )}

      <div className="flex ">
        {/* Conditionally render the sidebar based on the selected page */}
        {selectedPage !== 'myWishlist' && (
          <div className="flex flex-col w-1/4 p-6">
            {/* Left Menu */}
            <div className="text-lg font-Normal text-left mt-20">Manage My Account</div>

            {/* Buttons */}
            <button
              className={`text-sm text-left mt-4 ml-6 ${selectedPage === 'myProfile' ? 'text-red-700' : 'text-gray-400'}`}
              onClick={() => setSelectedPage('myProfile')}
            >
              My Profile
            </button>
            <button
              className={`text-sm text-left mt-2 ml-6 ${selectedPage === 'addressBook' ? 'text-red-700' : 'text-gray-400'}`}
              onClick={() => setSelectedPage('addressBook')}
            >
              Address Book
            </button>
            <button
              className={`text-sm text-left mt-2 ml-6 ${selectedPage === 'paymentOptions' ? 'text-red-700' : 'text-gray-400'}`}
              onClick={() => setSelectedPage('paymentOptions')}
            >
              My Payment Options
            </button>

            <div className="text-lg font-Normal text-left mt-6">My Orders</div>
            <button
              className={`text-sm text-left mt-4 ml-6 ${selectedPage === 'myReturns' ? 'text-red-700' : 'text-gray-400'}`}
              onClick={() => setSelectedPage('myReturns')}
            >
              My Returns
            </button>
            <button
              className={`text-sm text-left mt-2 ml-6 ${selectedPage === 'myCancellations' ? 'text-red-700' : 'text-gray-400'}`}
              onClick={() => setSelectedPage('myCancellations')}
            >
              My Cancellations
            </button>

            <div className="text-lg font-Normal text-left mt-5">My Wishlist</div>
            <button
              className={`text-sm text-left mt-2 ml-6 ${selectedPage === 'myWishlist' ? 'text-red-700' : 'text-gray-400'}`}
              onClick={() => setSelectedPage('myWishlist')}
            >
              My Wishlist
            </button>
          </div>
        )}

        {/* Right Content */}
        <div className={`p-6 ${selectedPage === 'myWishlist' ? 'w-full' : ''}`}>
          {renderPageContent()}
        </div>
      </div>
    </>
  );
}

export default AccountPage;
