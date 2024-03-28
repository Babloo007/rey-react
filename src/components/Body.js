import { useEffect, useState } from 'react';
import RestroCard from './RestroCard';
import Shimmer from './Shimmer';

const Body = () => {

    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);

    const [searchText, setSearchText] = useState('');

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return restList.length === 0 ?
        <Shimmer />
        :
        (<>
            <div className='p-2 pr-8 flex flex-row justify-between'>
                <div className='flex flex-row gap-2'>
                    <input type='text' className='border-orange-400' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className='p-2 bg-orange-600 rounded text-white'
                        onClick={() => {
                            const searchOutputList = restList.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestList(searchOutputList);
                        }}
                    >Search</button>
                </div>
                <button className='cursor-pointer border p-2 rounded-lg'
                    onClick={() => {
                        const filteredList = restList.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setFilteredRestList(filteredList);
                    }}>Top Rated Restaurents</button>
            </div>
            <div className='flex flex-wrap gap-8'>
                {
                    filteredRestList.map((res) => (
                        <RestroCard key={res.info.id} resData={res.info} />
                    ))
                }
            </div>
        </>)
}
export default Body;