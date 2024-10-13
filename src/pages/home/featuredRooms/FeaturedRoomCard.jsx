import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedRoomCard = ({ room }) => {
    const { room_name, description, image, _id } = room;
    console.log(_id)
    return (
        <div className="card bg-[#ECECF2] dark:bg-gray-500 md:max-w-96 shadow-xl">
            <figure>
                <img className="h-96 w-full"
                    src={image}
                    alt="products" />
            </figure>
            <div className="card-body flex flex-col dark:text-black justify-between">
                <h2 className="card-title ">{room_name}</h2>
                
                <h3 className="text-lg font-medium text-gray-500 dark:text-fuchsia-50">Details:</h3>
                <p>{description}</p>
                <div className="card-actions  ">
                    <Link 
                    to={`/roomDetails/${_id}`}
                     className="w-full ">
                        <button className="btn btn-warning w-full text-white bg-[#A95543] border-none">Book Now</button>
                     </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRoomCard;