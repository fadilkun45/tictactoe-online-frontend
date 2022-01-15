import React from 'react'
import { useState } from 'react/cjs/react.development'
import io  from 'socket.io-client'

const Send = () => {
    let [roomName,setRoomName] = useState()
    let [roomStat,setRoomStat ] = useState()

    const socket = io.connect('http://localhost:3001',{
    })

    let createRoom = () => {
        setRoomName('')
        socket.emit('createRoom', {
            roomType: roomStat,
            roomName: roomName,
            players: "tes",
            Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`
        })
    }

  
    return (
          <div className="w-2/6 text-white px-3 py-4 rounded-xl bg-stone-600">
              <h2 className='text-center mb-5 font-bold text-3xl'>Buat Room Baru</h2>
            <input type="text" className='w-full bg-transparent border-white border-b mb-5 text-xl text-white outline-none py-4' placeholder='nama room' value={roomName} onChange={(e) => {setRoomName(e.target.value)}} />
            <select className='w-full mb-5 py-1 bg-stone-500 rounded-xl outline-none' onChange={(e) => {setRoomStat(e.target.value)}}>
                <option className='w-full mb-5 text-center bg-stone-500 rounded-xl' value="private">Private</option>
                <option className='w-full mb-5 text-center bg-stone-500 rounded-xl' value="public">public</option>
            </select>
                <button onClick={createRoom} className='text-base rounded-xl py-1 text-center bg-stone-500 mb-5 w-full'>Create room</button>    
          </div>
    )
}

export default Send
