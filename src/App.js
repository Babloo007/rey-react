import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
    return (
        <div className='p-2 flex flex-col min-h-screen'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
