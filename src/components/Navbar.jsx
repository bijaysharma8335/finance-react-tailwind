import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const [nav, setNav] = useState(false);

    //handler function
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
            <ul className="hidden md:flex">
                <li className="p-4 cursor-pointer">Home</li>
                <li className="p-4 cursor-pointer">Company</li>
                <li className="p-4 cursor-pointer">Resources</li>
                <li className="p-4 cursor-pointer">About</li>
                <li className="p-4 cursor-pointer">Contact</li>
            </ul>
            <div className="block md:hidden cursor-pointer" onClick={handleNav}>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "ease-in-out duration-500 fixed left-[-100%] "
                }
            >
                <h1 className="w-full text-3xl font-bold text-[#36d93c] m-4">REACT</h1>{" "}
                <li className="p-4 border-gray-600 cursor-pointer">Home</li>
                <li className="p-4 border-gray-600 cursor-pointer">Company</li>
                <li className="p-4 border-gray-600 cursor-pointer">Resources</li>
                <li className="p-4 border-gray-600 cursor-pointer">About</li>
                <li className="p-4 ">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;
