import React, { useState } from "react";
import { Search, Heart, ShoppingCart, User, LogOut, Star, XCircle, PackageCheck, Settings } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavItem = ({ label, to, isActive, setActive }) => (
    <li
        className={`cursor-pointer ${isActive ? "border-b-2 border-gray-500" : ""} text-gray-700`}
        onClick={() => setActive(to)}
    >
        <Link to={to}>{label}</Link>
    </li>
);

export default function TopMenu() {
    const [active, setActive] = useState("/");
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="w-full ">
            <nav className="bg-white border-b-2 w-full border-gray-300 text-white p-4 flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="text-xl font-semibold text-black">Exclusive</div>

                <ul className="flex space-x-4 text-md">
                    <NavItem label="Home" to="/" isActive={active === "/"} setActive={setActive} />
                    <NavItem label="Contact" to="/contact" isActive={active === "/contact"} setActive={setActive} />
                    <NavItem label="About" to="/about" isActive={active === "/about"} setActive={setActive} />
                    <NavItem label="Signup" to="/signup" isActive={active === "/signup"} setActive={setActive} />
                </ul>

                <div className="flex items-center space-x-4 relative">
                    <SearchBar />
                    {location.pathname !== "/signup" && location.pathname !== "/login" && (
                        <>
                            <IconButton icon={<Heart />} to="/wishlist" />
                            <IconButton icon={<ShoppingCart />} to="/cart" />
                            <button
                                className={`p-2 rounded-full transition-colors ${showUserMenu ? "bg-red-500 text-white" : "text-gray-700"}`}
                                onClick={() => setShowUserMenu(!showUserMenu)}
                            >
                                <User />
                            </button>
                        </>
                    )}
                </div>
            </nav>
            {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
        </div>
    );
}

const SearchBar = () => (
    <div className="relative">
        <input
            type="text"
            placeholder="What are you looking for?"
            className="p-2 pl-2 pr-12 rounded-lg bg-gray-100 text-gray-700 text-md focus:outline-none"
        />
        <Search className="absolute right-2 top-2 hover:text-black text-gray-700" size={20} />
    </div>
);

const IconButton = ({ icon, to }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(to)} className="text-gray-700 hover:text-black">
            {icon}
        </button>
    );
};

const UserMenu = ({ setShowUserMenu }) => {
    return (
        <div className="absolute right-4 mt-2 bg-gradient-to-r from-gray-200 to-gray-300 bg-opacity-90 shadow-lg rounded-lg w-56 p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <UserMenuItem icon={<Settings />} label="Manage My Account" to="/account" setShowUserMenu={setShowUserMenu} />
            <UserMenuItem icon={<PackageCheck />} label="My Order" to="/orders" setShowUserMenu={setShowUserMenu} />
            <UserMenuItem icon={<XCircle />} label="My Cancellations" to="/cancellations" setShowUserMenu={setShowUserMenu} />
            <UserMenuItem icon={<Star />} label="My Reviews" to="/reviews" setShowUserMenu={setShowUserMenu} />
            <UserMenuItem icon={<LogOut />} label="Logout" to="/logout" setShowUserMenu={setShowUserMenu} />
        </div>
    );
};

const UserMenuItem = ({ icon, label, to, setShowUserMenu }) => {
    const navigate = useNavigate();
    return (
        <button
            className="flex items-center w-full p-3 text-gray-800 hover:bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg transition-all duration-200 ease-in-out"
            onClick={() => {
                navigate(to);
                setShowUserMenu(false);
            }}
        >
            <span className="mr-2">{icon}</span> {label}
        </button>
    );
};
