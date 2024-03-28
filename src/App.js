import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import OnMind from './components/OnMind';

function App() {
    return (
        <div className='p-2 flex flex-col min-h-screen'>
            <Header />
            <div className='mx-28'>
                {/* <OnMind /> */}
                <hr />
                <Body className='mb-4 ' />
            </div>
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
