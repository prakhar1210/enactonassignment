import React, { useState } from "react";
import ChefIcon from "../../Albums/Chef-Matt-horiz.png.png";
import CartIcon from "../../Albums/Group 36.png";
import WishlistIcon from "../../Albums/Group 35.png";

export default function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-75 text-white transition-transform duration-300 ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
                    } z-50 overflow-hidden`}
            >
                {/* Close Button */}
                {isOpen && (
                    <button
                        className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                        onClick={() => setIsOpen(false)}
                    >
                        &times; {/* "X" character */}
                    </button>
                )}

                {/* Sidebar Content */}
                {isOpen && (
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">
                            <img src={ChefIcon} alt="Menu" className="w-330 h-220" />
                        </h1>
                        <ul className="mt-6 space-y-4">
                            <li className="hover:bg-gray-700 p-2 rounded">Home</li>
                            <li className="hover:bg-gray-700 p-2 rounded">Products</li>
                            <li className="hover:bg-gray-700 p-2 rounded">Meet Chef Matt</li>
                            <li className="hover:bg-gray-700 p-2 rounded">FAQ</li>
                            <li className="hover:bg-gray-700 p-2 rounded">Contact With Us</li>
                        </ul>
                    </div>
                )}

                {/* Tech Support and Icons */}
                {isOpen && (
                    <div className="absolute bottom-4 left-4 w-full text-white text-sm">
                        <p className="text-center">Tech Support: 885522445</p>
                        <div className="border-t border-white pt-2 flex justify-center gap-4">
                            <img src={CartIcon} alt="Cart" className="w-20 h-10" />
                            <img src={WishlistIcon} alt="Wishlist" className="w-24 h-10" />
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Hamburger Icon */}
            {/* {!isOpen && (
                <div className="absolute top-4 left-4 z-50">
                    <button
                        className="text-3xl text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        &#9776;
                    </button>
                </div>
            )} */}
            {/* Hamburger Icon */}
            {!isOpen && (
                <div className="absolute top-4 left-4 z-50">
                    <button
                        className="text-3xl text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        &#9776;
                    </button>
                </div>
            )}

            {/* Golden Border */}
            {!isOpen && (
                <div
                    className="fixed top-0 right-0 h-full border-r-4 border-gold z-30"
                ></div>
            )}

        </div >
    );
}
