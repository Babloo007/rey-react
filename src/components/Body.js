import { useEffect, useState } from 'react';
import RestroCard from './RestroCard';
import { restaurants } from '../utils/data'
import Shimmer from './Shimmer';

const Body = () => {

    // local state variables - super powerful variables
    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);

    const [searchText, setSearchText] = useState('');

    // whenever the state variables updates, react triggers the reconciliation cycle( re-render the component
    // console.log("Re-rendering");
    // console.log(restaurants);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        setRestList(restaurants);
        setFilteredRestList(restaurants);
    }

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
                        <RestroCard key={res.id} resData={res} />
                    ))
                }
            </div>
        </>)
}
export default Body;