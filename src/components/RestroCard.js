function RestroCard({ resData }) {
    return (
        <div className='w-48 hover:border bg-slate-50 rounded-lg cursor-pointer'>
            <img className='h-32 w-full rounded-lg' alt='rest-logo' src={resData.img}></img>
            <h3>{resData.name}</h3>
            <h4>{resData.cusinies.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{(resData.deliveryTime) + " "}mins</h4>
            <h4>{resData.location}</h4>
        </div>
    )
}
export default RestroCard;