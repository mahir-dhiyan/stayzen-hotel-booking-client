import React, { useEffect, useState } from 'react';
import RoomsCard from './RoomsCard';

const Rooms = () => {
    const [rooms,setRooms]=useState([]);
    useEffect(()=>{
            fetch("http://localhost:5000/rooms")
            .then(res=>res.json())
            .then(data=>{
                
                setRooms(data);
            })
    },[])
    return (
        <div>
            <div className="bg-[#ECECF2] text-center mt-4 dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] ">
                <h2 className="text-5xl font-semibold">Available<span className="text-[#C56652]">Rooms</span> </h2>
            </div>
            {
                rooms.map(room=>(
                    <RoomsCard key={room._id} room={room}></RoomsCard>
                ))
            }
            
        </div>
    );
};

export default Rooms;