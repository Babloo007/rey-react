import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import OnMind from './components/OnMind';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
    return (
        <div className='p-2 flex flex-col min-h-screen'>
            <Header />
            <div className='mx-28'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body className='mb-4' />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
                // resId={resId}
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
