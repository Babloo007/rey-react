import React from 'react'
import { useState } from 'react';
import onMindData from '../utils/onMindData'
import LeftArrowButton from './LeftArrowButton'
import RightArrowButton from './RightArrowButton'

function OnMind() {

    let leftPointer = 0;
    let rightPointer = 6;
    let len = onMindData.length;

    const [list, setList] = useState(onMindData);

    function prevItems() {
        if (leftPointer > 2) {
            console.log('prev button clicked')
            leftPointer = leftPointer - 3;
            rightPointer = leftPointer + 3;
            parseData();
        }

    }

    function nextItems() {
        if (rightPointer < len - 3) {
            console.log('next button clicked')
            leftPointer = leftPointer + 3;
            rightPointer = leftPointer + 3;
            parseData();
        }
    }

    function parseData() {
        let activeData = onMindData;
        let j = 0;
        for (let i = 0; i < len; i++) {
            if (i >= leftPointer && i <= rightPointer)
                activeData[i].isActive = true;
            else
                activeData[i].isActive = false;
        }
        setList(activeData);
    }

    return (
        <>
            <div className='m-8 mb-0 flex flex-row justify-between'>

                <h3>What's on your mind?</h3>

                <div className='flex flex-row gap-2'>
                    <LeftArrowButton
                        className={`w-10 h-5 text-gray-500 border rounded ${leftPointer === 0 ? 'opacity-0' : 'opacity-100'}`}
                        prevItems={prevItems}
                    />
                    <RightArrowButton
                        className={`w-10 h-5 text-gray-500 border rounded ${rightPointer === len - 1 ? 'opacity-0' : 'opacity-100'}`}
                        nextItems={nextItems}
                    />
                </div>
            </div>
            <div className='flex flex-row text-nowrap w-inherit'>
                {list.map((item) =>
                    <img key={item.img}
                        className={`h-56 w-56 ${item.isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}

                        src={item.img}
                    ></img>)}
            </div>
        </>
    )
}

export default OnMind
