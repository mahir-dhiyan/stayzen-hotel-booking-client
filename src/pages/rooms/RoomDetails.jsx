import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const RoomDetails = () => {
    const { id } = useParams();
    const rooms = useLoaderData();
    const room = rooms.find(room => room._id === id);
    const { room_name, description, price_per_night, room_size, availability, image, special_offers } = room;
    console.log(room);
    return (
        <>
            <Helmet><title>Room Details-Stayzen</title></Helmet>
            <div className="bg-[#ECECF2] p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">  <span className="text-[#C56652]">Room</span> Details  </h2>
            </div>
            <div className="card bg-[#ECECF2] md:flex md:flex-row rounded-3xl m-4 shadow-xl">
                <div className="flex justify-center">
                    <img className="md:h-96 md:w-80  rounded-3xl"
                        src={image}
                        alt="products" />
                </div>
                <div className="card-body justify-between">
                    <h2 className="card-title text-2xl">{room_name}</h2>
                    <h3 className="text-lg font-medium text-gray-500">Room Size: <span className="text-base">{room_size}</span></h3>
                    <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-green-600">Availability: <span className="text-base text-black">{availability ? "Available" : "Not Available"}</span></h3>
                        <h3 className="text-lg font-medium text-yellow-500">Price: <span className="text-base text-black">{price_per_night}</span></h3>
                    </div>
                    <h3 className="text-lg font-medium text-gray-500">Details:</h3>
                    <div className=""><p className="">{description}</p></div>
                    <div className=" md:flex justify-between bordder-4 border-violet-500">
                        <h3 className="text-lg font-medium text-gray-500">Special Offer: <span className="text-base text-black block md:inline">{special_offers}</span></h3>
                        <h3 className="text-lg font-medium text-gray-500">Select Booking Date: <span className="text-base text-black">
                            {/* {stock_status} */}
                        </span></h3>
                    </div>
                    {/* <div className="">
                        <h3 className="text-lg font-medium text-gray-500">User Email: <span className="text-base text-black">{email}</span></h3>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-medium text-gray-500">User Name: <span className="text-base text-black">{name}</span></h3>
                    </div> */}
                    <div className="">
                        {/* <Link 
                    to={`/roomDetails/${_id}`}
                     className="w-full "> */}
                        <button className="btn btn-warning w-full text-white bg-[#A95543] border-none">Confirm Booking</button>
                        {/* </Link> */}
                    </div>

                </div>
            </div>
        </>
    );
};

export default RoomDetails;