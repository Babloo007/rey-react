import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from '../pics/smallLogo.png'

function Header() {
    return (
        <div className='flex flex-row justify-between'>
            <div className='logoContainer'>
                <img className='w-24' src={logo} />
            </div>
            <div>
                <ul className='flex flex-row'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About Us</li>
                    <li className='p-4'>Contact Us</li>
                    <li className='p-4'>Cart</li>
                </ul>
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <Header />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
