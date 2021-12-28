import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'

const App = () => {
    let [roomName,setRoomName] = useState()
    let [roomStat,setRoomStat ] = useState()
    let [listRoom,setListRoom] = useState([{'ruangan': '1212', "id" : '131313','player': '1/2'},{'ruangan': '31313', "id" : '131313','player': '1/2'}])

    let createRoom = () => {
        setListRoom([...listRoom, {'ruangan' : roomName,"id": nanoid(10) ,'player': '2/2'}])
        console.log(listRoom)
        setRoomName('')
    }

    useEffect(() => {
    },[listRoom])


    return (
      <div className="container mx-auto bg-stone-500 rounded-sm px-4 py-6 flex justify-around">

          <div className="w-2/6 text-white px-3 py-4 rounded-xl bg-stone-600">
              <h2 className='text-center mb-5 font-bold text-3xl'>Buat Room Baru</h2>
            <input type="text" className='w-full bg-transparent border-white border-b mb-5 text-xl text-white outline-none py-4' placeholder='nama room' value={roomName} onChange={(e) => {setRoomName(e.target.value)}} />
            <select className='w-full mb-5 py-1 bg-stone-500 rounded-xl outline-none' onChange={(e) => {setRoomStat(e.target.value)}}>
                <option className='w-full mb-5 text-center bg-stone-500 rounded-xl' value="private">Private</option>
                <option className='w-full mb-5 text-center bg-stone-500 rounded-xl' value="public">public</option>
            </select>
                <button onClick={createRoom} className='text-base rounded-xl py-1 text-center bg-stone-500 mb-5 w-full'>Create room</button>    
          </div>

          <div className="w-3/6 bg-stone-600 rounded-xl py-6 px-4 ">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">Daftar Room</h2>

                <div className="flex mb-5 px-2 rounded-md py-2 bg-stone-500 text-white justify-between cursor-pointer">
                        <p className="text-base font-bold">nama room</p>
                        <p className="text-base font-bold">id room</p>
                        <p className="text-base font-bold">player</p>
                    </div>
                <div className="flex h-60 flex-col bg-stone-500 px-4 py-6 overflow-y-auto">
                  
                {
                    listRoom?.map((data) => (
                        <div className="flex mb-5 px-2 rounded-md py-2 bg-stone-600 text-white justify-between cursor-pointer">
                        <p className="text-base font-bold">{data.ruangan}</p>
                        <p className="text-base font-bold">{data.id}</p>
                        <p className="text-base font-bold">{data.player}</p>
                    </div>
                    ))
                }
                </div>  
          </div>

      </div>
    )
}

export default App
