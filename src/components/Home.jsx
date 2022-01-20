import React, { useState,useEffect } from 'react'
import  io from 'socket.io-client'
import Send from './Send'
import ImputModal from './InputModal'

import ListRoomCard from './ListRoomCard'

const Home = ({auth,otherTab,showModal,setShowModal,setAuth}) => {
    const socket = io.connect('http://localhost:3001',{
        
    })

  

    let [listRoom,setListRoom] = useState([])

    useEffect(() => {
        socket.on('createRoom',(data) => {
            setListRoom([...listRoom, data])
            console.log(data)
        })
    },[socket])

    useEffect(() => {
        fetch('http://localhost:3001/api/rooms',{
            method: 'GET',
            headers: {
                Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => res.json())
        .then(data => setListRoom(data?.data?.roomsArray)) 
    },[])

    

    const setUsername = (username) => {
        console.log(username);
        console.log(JSON.stringify(username))
        fetch("http://localhost:3001/api/users/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username }),
          })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            if (response.data.accessToken) {
                setShowModal(false)
                setAuth(true)
                localStorage.setItem('accessToken', response.data.accessToken);
            }
         })
         
    }

    return (
      <>
        {
            auth ?  <div className="container mx-auto rounded-sm px-4 py-6 flex justify-around">

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
                            <ListRoomCard roomName={data.roomName} roomUuid={data.roomUuid} />
                        ))
                    }
                    </div>  
            </div>
    
            </div> :  <ImputModal showModal={showModal} submitHandle={setUsername}/>

        }

        {
            otherTab? <div className="fixed z-20 left-0 right-0 flex justify-center items-center h-screen top-0 bg-gray-600 text-3xl opacity-80 text-white text-center">tab ini sudah dibuka di tab lain</div> : ''
        }
      </>
    )
}

export default Home
