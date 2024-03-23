import React from 'react';

const LeftArrowButton = ({ prevItems }) => {
    return (
        <button
            className="transform bg-gray-200 rounded-full p-2 focus:outline-none"
            onClick={prevItems}
        >
            {'\u2190'}
        </button>
    );
};

export default LeftArrowButton;