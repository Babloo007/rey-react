import { useState } from 'react';
import RestroCard from './RestroCard';
import resList from '../utils/demoData';

function Body() {

    let [list, setList] = useState(resList);

    return (
        <div className='mx-28'>
            <div className='p-2 pr-8 grid justify-items-end'>
                <button className='cursor-pointer border p-2 rounded-lg'
                    onClick={() => {
                        // filter logic
                        const filteredList = list.filter(
                            (res) => res.avgRating > 4
                        )
                        setList(filteredList);
                    }}>Top Rated Restaurents</button>
            </div>
            <div className='flex flex-wrap gap-8'>
                {list.map((resObj) => <RestroCard key={resObj.name} resData={resObj} />)}
            </div>
        </div>
    )
}
export default Body;