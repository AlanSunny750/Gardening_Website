import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const scrollingUp = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);

        if (currentScrollPos === 0) {
            setVisible(true);
        } else if (scrollingUp) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const scrollingUp = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);

            if (currentScrollPos === 0) {
                setVisible(true);
            } else if (scrollingUp) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`NAVBAR flex fixed top-0 left-0 right-0 h-[70px] w-full bg-emerald-500 shadow-black shadow-md z-10 ${visible ? '' : 'hidden'}`}>
            <div className="NAV_ITEMS text-white flex absolute top-1/2 transform -translate-y-1/2 w-full">
                <div className="LOGO_CONTAINER">
                    <div className="LOGO p-1 text-white text-[18px] ml-4 font-bold"> Gardener.com </div>
                </div>
                <div className="ANCHERS flex gap-20 ml-auto mr-auto">
                    <Link to="/" className="hover:bg-white hover:text-black transition duration-450 rounded-[5px] py-[8px] px-[12px] text-center"> Home </Link>
                    <Link to="/plants" className="hover:bg-white hover:text-black transition duration-450 rounded-[5px] py-[8px] px-[12px] text-center"> Plants </Link>
                    <Link to="" className="hover:bg-white hover:text-black transition duration-450 rounded-[5px] py-[8px] px-[12px] text-center"> Your Garden </Link>
                </div>
                <div className="AUTH flex gap-5 ml-auto mr-5">
                    <Link to="/login">
                        <div className="LOGIN h-fit w-fit text text-white py-[8px] px-[12px] hover:bg-white hover:text-black hover:border-white border border-white cursor-pointer transition duration-fast rounded-[5px]"> Login </div>
                    </Link>
                    <Link to="/signup">
                        <div className="SIGN_UP h-fit w-fit bg-white text text-black py-[8px] px-[12px] hover:bg-transparent hover:text-white border hover:border-white cursor-pointer transition duration-fast rounded-[5px]"> Sign up </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
