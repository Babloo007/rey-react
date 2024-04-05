import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { restaurants } from '../utils/data'

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const fetchMenu = () => {
        const foundRestaurant = restaurants.find((restaurant) => restaurant.id === resId);
        if (foundRestaurant) {
            setResInfo(foundRestaurant);
            console.log(foundRestaurant);
        } else {
            console.log("Restaurant not found");
        }
    }

    useEffect(() => {
        fetchMenu();
    }, [])

    if (resInfo === null) return <Shimmer />;

    let cuisines = resInfo?.cuisines;
    // console.log(restaurants);

    const name = resInfo.name;
    const costForTwo = resInfo.costForTwo;
    const avgRating = resInfo.avgRating;
    const menu = resInfo.menu;
    // console.log(menu);

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwo}</p>
            <p>{avgRating}</p>
            <h2>Menu</h2>
            <ol>
                {
                    menu.map((item) => (<li key={item.id}>{item.name}</li>))
                }
            </ol>
        </div>
    )
}

export default RestaurantMenu