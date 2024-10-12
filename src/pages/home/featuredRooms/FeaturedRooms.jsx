import { useEffect, useState } from "react";
import FeaturedRoomCard from "./FeaturedRoomCard";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/rooms")
            .then(res => res.json())
            .then(data => {
                const firstSixRooms = data.slice(0, 6);
                setRooms(firstSixRooms);

            })
    }, [])
    return (
        <div className="mt-4">
            <div className="bg-[#ECECF2] dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">  <span className="text-[#C56652]">Featured </span> Rooms</h2>
            </div>

            <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 mt-4">
                {
                    rooms.map(room => (
                        
                     
                        <FeaturedRoomCard key={room._id} room={room}></FeaturedRoomCard>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;