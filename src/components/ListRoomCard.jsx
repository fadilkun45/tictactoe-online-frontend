import React from 'react'
import { Link } from 'react-router-dom'

const ListRoomCard = ({roomName,roomUuid}) => {
    return (
        <Link to={`/waiting/${roomUuid}`} className="flex mb-5 px-2 rounded-md py-2 bg-stone-600 text-white justify-between cursor-pointer">
            <p className="text-base font-bold">{roomName}</p>
            <p className="text-base font-bold">{roomUuid}</p>
            <p className="text-base font-bold">{'data.players'}</p>
        </Link>
    )
}

export default ListRoomCard
