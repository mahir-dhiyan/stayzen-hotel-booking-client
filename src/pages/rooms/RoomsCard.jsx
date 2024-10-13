import { Link } from "react-router-dom";

const RoomsCard = ({ room }) => {
    const { room_name, description, price_per_night, room_size, availability, image, special_offers, _id } = room;

    return (
        <div className="card bg-[#ECECF2] flex md:flex-row m-4 dark:bg-gray-500 shadow-xl">
            <Link to={`/roomDetails/${_id}`}>
                <div className="  md:w-64 md:min-w-64   h-60">
                    <img className=" w-full  h-full object-cover md:rounded-l-xl rounded-xl md:rounded-none "
                        src={image}
                        alt="products" />
                </div>
            </Link>
            <div className="card-body dark:text-black   justify-between">
                <h2 className="card-title text-4xl">{room_name}</h2>
                <p className="text-xl">{description}</p>
                <div className="md:flex justify-between">
                    {/* Review Part-------------------> */}
                    <h3 className="text-lg font-medium dark:text-green-500 text-green-600">Total Reviews: <span className="text-base text-black">
                        {/* {rating}/5 */}
                    </span></h3>
                    <h3 className="text-lg font-medium text-yellow-500">Price Per Night: <span className="text-base text-black">{price_per_night}/- BDT</span></h3>
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;