import React from 'react';
import logo from '../../pics/smallLogo.png';

function Header() {
    return (
        <div className='flex flex-row justify-between border'>
            <div>
                <img className='w-24' src={logo} />
            </div>
            <div>
                <ul className='flex flex-row  px-2 pt-1'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About Us</li>
                    <li className='p-4'>Contact Us</li>
                    <li className='p-4'>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;