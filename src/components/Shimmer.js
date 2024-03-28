import React from 'react'


function Template() {
    return (
        <div className='w-48 h-32 bg-slate-100 rounded-lg animate-pulse flex flex-col'>
            <div className='w-full h-20 rounded-lg mb-2 bg-slate-200'></div>
            <div className="bg-slate-200 w-20 h-6"></div>
            <div className="bg-slate-200 w-15 h-6"></div>
        </div>
    )
}

function Shimmer() {

    let shim = [];

    for (let i = 0; i < 15; i++) {
        shim.push(<Template index={i} />);
    }

    return (
        <>
            <div className='p-2 pr-8 grid justify-items-end'>
                <button className='cursor-pointer border p-2 rounded-lg text-white-200'>Top Rated Restaurents</button>
            </div>
            <div className='flex flex-wrap gap-8'>
                {shim.map((temp) =>
                    <Template key={temp.props.index} />
                )}
            </div>
        </>
    )
}

export default Shimmer