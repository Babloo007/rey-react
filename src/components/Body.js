import { useEffect, useState } from 'react';
import RestroCard from './RestroCard';
// import resList from '../utils/demoData';

function Body() {

    let [list, setList] = useState();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3380151&lng=78.38259939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <>
            <div className='p-2 pr-8 grid justify-items-end'>
                <button className='cursor-pointer border p-2 rounded-lg'
                    onClick={() => {
                        const filteredList = list.filter(
                            (res) => res.avgRating > 4
                        )
                        setList(filteredList);
                    }}>Top Rated Restaurents</button>
            </div>
            <div className='flex flex-wrap gap-8'>
                {list.map((resObj, index) =>
                    <RestroCard key={resObj.name}
                        resData={resObj}
                        index={index}
                    />
                )}
            </div>
        </>
    )
}
export default Body;