import { useEffect, useState } from 'react';
import RestroCard from './RestroCard';
import restaurants from '../utils/demoData';

const Body = () => {

    let [list, setList] = useState(restaurants);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className='p-2 pr-8 grid justify-items-end'>
                <button className='cursor-pointer border p-2 rounded-lg'
                    onClick={() => {
                        const filteredList = list.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setList(filteredList);
                    }}>Top Rated Restaurents</button>
            </div>
            <div className='flex flex-wrap gap-8'>
                {
                    list.map((res) => (
                        <RestroCard key={res.info.cloudinaryImageId} resData={res.info} />
                    ))
                }
            </div>
        </>
    )
}
export default Body;