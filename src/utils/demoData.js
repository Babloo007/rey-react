const resList = [{
    name: 'Chinese Work',
    cusinies: ['Chinese', 'Asian', 'Tibetian'],
    location: 'Adugodi',
    deliveryTime: 10,
    avgRating: "3.6",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597'
}, {
    name: 'Pizza Hut',
    cusinies: ['Pizzas'],
    location: 'Maruthi Nagar',
    deliveryTime: 12,
    avgRating: "3.6",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7'
}, {
    name: 'UBQ by Barbeque Nation',
    cusinies: ['North Indian', 'Barbeque'],
    location: 'Koramangala',
    deliveryTime: 30,
    avgRating: "3.9",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/muaktnk5xb3zop4bvj6l'
}, {
    name: 'Wow! Momo',
    cusinies: ['Tibetian', 'Healthy Food'],
    location: 'Koramangala',
    deliveryTime: 20,
    avgRating: "4.3",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666'
}, {
    name: 'BOOM Sandwich',
    cusinies: ['Snacks', 'Indian', 'Desserts'],
    location: 'Koramangala',
    deliveryTime: 11,
    avgRating: "4.1",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/96aaf72372ad1b0297b7cc304ced7e33'
}, {
    name: 'Chicago Pizza',
    cusinies: ['Pizzas', 'Fast Food', 'Italian'],
    location: 'Koramangala',
    deliveryTime: 25,
    avgRating: "4.2",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/80f040545552605e33eba09f8fa30be9'
}, {
    name: 'Andhra Gunpowder',
    cusinies: ['Andhra Biryani', 'South Indian'],
    location: 'Koramangala',
    deliveryTime: 15,
    avgRating: "4.9",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/byilgyrcfz690ryoasww'
}, {
    name: 'Big Bowl',
    cusinies: ['Chinese', 'North Indian'],
    location: 'Adugodi',
    deliveryTime: 25,
    avgRating: "4.1",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c99751d54e4e1847186c62b3309c1327'
}, {
    name: 'KFC',
    cusinies: ['Burgers', 'Biryani', 'American'],
    location: 'Koramangala',
    deliveryTime: 25,
    avgRating: "4.3",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4'
}, {
    name: 'Asha Tiffins',
    cusinies: ['Andhra', 'South Indian'],
    location: 'HSR Layouts',
    deliveryTime: 25,
    avgRating: "4.5",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n15vckntsiboiod3gpco'
}, {
    name: 'Nandhana Palace',
    cusinies: ['Andhra Biryani', 'South Indian'],
    location: 'Koramangala',
    deliveryTime: 15,
    avgRating: "4.2",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/195876a3181ef63f76e45e3a7b49b585'
}, {
    name: "Leon's - Burgers & Wings",
    cusinies: ['American', 'Snacks', 'Turkish'],
    location: 'Koramangala',
    deliveryTime: 20,
    avgRating: "4.4",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2edbc28b7b8219d6e0a9c049ce06658'
}, {
    name: 'Great Indian Khichidi by EatFit',
    cusinies: ['Home Food', 'Indian', 'South Indian'],
    location: 'Koramangala',
    deliveryTime: 15,
    avgRating: "4.4",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e44fd7f1e5cd9967edfe47c10247671'
}, {
    name: 'NH1 Bowls - Highway To North',
    cusinies: ['North Indian', 'Punjabi'],
    location: 'Koramangala',
    deliveryTime: 11,
    avgRating: "4.6",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/94654fdf308764cd0faf83dba35bcdc3'
}, {
    name: 'Jose Mess',
    cusinies: ['South Indian'],
    location: 'BTM Layouts',
    deliveryTime: 20,
    avgRating: "4.4",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lltunkievzpxrrcarfmy'
}, {
    name: 'Biryani Pot',
    cusinies: ['Biryani', 'Indian', 'South Indian'],
    location: 'BTM Layouts',
    deliveryTime: 25,
    avgRating: "4.1",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdipoyzfzsa7n7igskht'
}, {
    name: 'Nahdi Mandi Restaurant',
    cusinies: ['Biryani', 'Arabian', 'North Indian'],
    location: 'BTM Layouts',
    deliveryTime: 30,
    avgRating: "4.4",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8e82f6e42f5e5bde0649f1f8f48209d8'
}, {
    name: 'Bangalikhana',
    cusinies: ['Bengali', 'Mughlai', 'Sweets'],
    location: 'Koramangala',
    deliveryTime: 25,
    avgRating: "4.4",
    img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cmyox2baejs2n9xtmgs1'
}]

export default resList;