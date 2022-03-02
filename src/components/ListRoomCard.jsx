import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ListRoomCard = ({roomName,roomUuid,socket,playerLength}) => {
    const navigate = useNavigate()


    // useEffect(() => {
    //     socket.on(`joinRoom/${roomUuid}`,{
    //         Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`
    //     })
    // },[socket])

    const joinHandle = (roomId) => {
        fetch(`http://localhost:3001/api/rooms/${roomId}` + `/capacity`,{
            headers: {
                Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if(data?.message){
              console.log(data?.message)
              toast.error(data?.message)
            }else{
                console.log(data)
                socket.emit(`joinRoom`,{
                    Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`,
                    roomUuid: roomId
                })
                navigate(`/waiting/${roomId}`)
            }
        })
    }

    return (
        <div  onClick={() => {joinHandle(roomUuid)}} className="flex mb-5 px-2 rounded-md py-2 bg-stone-600 text-white justify-between cursor-pointer">
            <p className="text-base font-bold">{roomName}</p>
            <p className="text-base font-bold">{roomUuid}</p>
            <p className="text-base font-bold">{playerLength}</p>
        </div>
    )
}

export default ListRoomCard
