import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const isMainLocation = location.pathname === '/';

    const [isScrolled, setIsScrolled] = useState(false);
    const [defaultNav, setDefaultNav] = useState(!isMainLocation);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        if (isMainLocation) {
            window.addEventListener('scroll', handleScroll);
        } else {
            setDefaultNav(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMainLocation]);

    
    return (
        <div
            className={`NAVBAR fixed top-0 left-0 right-0 h-[60px] w-full z-10 transition-all duration-400 ${
                defaultNav
                    ? 'bg-emerald-500 border-b-1 text-gray-100'
                    : isScrolled
                    ? 'bg-emerald-500 border-b-1 text-gray-100'
                    : 'bg-transparent'
            }`}
        >
            <div 
            className="NAV_ITEMS 
            flex absolute top-1/2 transform -translate-y-1/2 w-full"
            >
                <div 
                className="LOGO_CONTAINER">
                    <abbr className='no-underline' title="Garden stash keeps your cash">
                    <div 
                    className="LOGO p-1 text-[18px] ml-4 font-bold border-l-2 border-l-gray-300 pl-2 cursor-pointer"
                    > Garden Stash </div>
                    </abbr>
                </div>
                <div 
                className="ANCHERS flex gap-12 ml-auto mr-auto "
                >
                    <Link 
                    to="/" 
                    className="hover:bg-white hover:text-black transition duration-450 
                    rounded-[5px] py-[8px] px-[12px] text-center"> Home </Link>
                    <Link 
                    to="/plants" 
                    className="hover:bg-white hover:text-black transition duration-450
                    rounded-[5px] py-[8px] px-[12px] text-center"
                    > Plants </Link>
                    <Link 
                    to="/comunity" 
                    className="hover:bg-white hover:text-black transition duration-450
                    rounded-[5px] py-[8px] px-[12px] text-center"
                    > Comunity </Link>

                    <a href='./phaser/GardenPlanner.html'
                    className="hover:bg-white hover:text-black transition duration-450
                    rounded-[5px] py-[8px] px-[12px] text-center"> Your Garden </a>
                </div>
                <div 
                className="AUTH flex gap-5 ml-auto mr-5"
                >
                    <Link 
                    to="/login"
                    >
                        <div 
                        className="LOGIN 
                        h-fit w-fit text text-white py-[8px] px-[12px] 
                        hover:bg-white hover:text-black hover:border-white border 
                        border-white cursor-pointer transition duration-fast rounded-[5px]"
                        > Login </div>
                    </Link>
                    <Link 
                    to="/signup"
                    >
                        <div 
                        className="SIGN_UP 
                        h-fit w-fit bg-white text text-black py-[8px] px-[12px] 
                        hover:bg-transparent hover:text-white border hover:border-white 
                        cursor-pointer transition duration-fast rounded-[5px]"> Sign up </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
