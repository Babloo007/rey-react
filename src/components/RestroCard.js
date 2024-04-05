import StarIcon from "./StarIcon";
import { CDN_URL } from '../utils/constants'

function RestroCard({ resData }) {

    return (
        <div className='w-48 hover:scale-95 hover:shadow-lg duration-100 bg-slate-50 rounded-lg cursor-pointer'>
            <img className='h-32 w-full rounded-lg mb-2' alt='rest-logo' src={CDN_URL + resData.cloudinaryImageId}></img>
            <h3 className="font-bold">{resData.name}</h3>
            <div className="flex flex-row justify-between font-semibold">
                <div className="flex flex-row">
                    <h4>{resData.avgRating}</h4>
                    <StarIcon className="w-6 h-5 text-green-700 pt-1" />
                </div>
                <div>
                    <h4>{resData.deliveryTime + " "}mins</h4>
                </div>
            </div>
            <h4 className="font-light">{resData.cuisines.join(", ")}</h4>
            <h4 className="font-light">{resData.areaName}</h4>
        </div>
    )
}
export default RestroCard;