import React from 'react'
import onMindData from '../utils/onMindData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function OnMind() {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className='flex flex-row relative items-center text-nowrap w-inherit'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
                {onMindData.map((item, index) => {
                    <img key={index} className='h-56 w-56 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='logo' />
                })}
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
    )
}

export default OnMind
