import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Send from './Send'

const App = () => {
    const socket = io.connect('http://localhost:3001',{
    })

    let [roomName,setRoomName] = useState()
    let [roomStat,setRoomStat ] = useState()
    let [listRoom,setListRoom] = useState([])

    let createRoom = () => {
        setRoomName('')
        socket.emit('createRoom',{roomType: "public",roomName: roomName,players: "tes"})
     
    }

    useEffect(() => {
        socket.on('createRoom',(data) => {
            setListRoom([...listRoom, data])
        })
        console.log(listRoom)
    },[socket])


    return (
      <div className="container mx-auto bg-stone-500 rounded-sm px-4 py-6 flex justify-around">

        <Send />

          <div className="w-3/6 bg-stone-600 rounded-xl py-6 px-4 ">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">Daftar Room</h2>

                <div className="flex mb-5 px-2 rounded-md py-2 bg-stone-500 text-white justify-between cursor-pointer">
                        <p className="text-base font-bold">nama room</p>
                        <p className="text-base font-bold">id room</p>
                        <p className="text-base font-bold">player</p>
                    </div>
                <div className="flex h-60 flex-col bg-stone-500 px-4 py-6 overflow-y-scroll">
                  
                {
                    listRoom?.map((data) => (
                        <div className="flex mb-5 px-2 rounded-md py-2 bg-stone-600 text-white justify-between cursor-pointer">
                        <p className="text-base font-bold">{data.roomName}</p>
                        <p className="text-base font-bold">{data.roomId}</p>
                        <p className="text-base font-bold">{data.players}</p>
                    </div>
                    ))
                }
                </div>  
          </div>

      </div>
    )
}

export default App
