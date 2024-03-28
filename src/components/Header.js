import React, { useState } from 'react';
import logo from '../../pics/smallLogo.png';

function Header() {

    const [logBtn, setLogBtn] = useState('Log In')

    return (
        <div className='flex flex-row justify-between border'>
            <div>
                <img className='w-24' src={logo} />
            </div>
            <div>
                <ul className='flex flex-row  px-2 pt-1 gap-2'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About Us</li>
                    <li className='p-4'>Contact Us</li>
                    <li className='p-4'>Cart</li>
                    <button className='p-2 bg-orange-600 rounded text-white'
                        onClick={() => logBtn === 'Login' ? setLogBtn('Log Out') : setLogBtn('Log In')}>
                        {logBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
}
export default Header;