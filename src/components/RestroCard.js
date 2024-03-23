import StarIcon from "./StarIcon";
import { CDN_URL } from '../utils/constants'

function RestroCard({ resData, index }) {
    return (
        <div className='w-48 hover:border bg-slate-50 rounded-lg cursor-pointer'>
            <img className='h-32 w-full rounded-lg mb-2' alt='rest-logo' src={CDN_URL + resData[index].info.cloudinaryImageId}></img>
            <h3 className="font-bold">{resData[index].info.name}</h3>
            <div className="flex flex-row justify-between font-semibold">
                <div className="flex flex-row">
                    <h4>{resData[index].info.avgRating}</h4>
                    <StarIcon className="w-6 h-5 text-green-700 pt-1" />
                </div>
                <div>
                    <h4>{(resData[index].info.sla.deliveryTime) + " "}mins</h4>
                </div>
            </div>
            <h4 className="font-light">{resData[index].info.cusinies.join(", ")}</h4>
            <h4 className="font-light">{resData[index].info.areaName}</h4>
        </div>
    )
}
export default RestroCard;