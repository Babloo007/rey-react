import React from 'react';

const RightArrowIcon = ({ nextItems }) => {
    return (
        <button
            className="transform bg-gray-200 rounded-full p-2 focus:outline-none"
            onClick={nextItems}
        >
            {'\u2192'}
        </button>
    );
};
export default RightArrowIcon;