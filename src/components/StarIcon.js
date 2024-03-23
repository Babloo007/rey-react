import React from 'react';

const StarIcon = ({ className }) => {
    return (
        <svg
            className={`fill-current ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M12 2l2.35 7.21H22l-6.05 4.39 2.35 7.21L12 17.25l-6.3 4.56 2.35-7.21L2 9.21h7.65L12 2z" />
        </svg>
    );
};

export default StarIcon;
