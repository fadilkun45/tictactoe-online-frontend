import React, { useState,useEffect } from 'react'
import  io from 'socket.io-client'
import Send from './Send'
import ImputModal from './InputModal'
import checkTab from '../utilites/checkTab'

const Home = () => {
    const socket = io.connect('http://localhost:3001/',{
        
    })


    let [showModal,setShowModal] = useState(true)
    let [auth,setAuth] = useState(false)
    let [otherTab,setOtherTab] = useState(false)

    let [listRoom,setListRoom] = useState([])

    useEffect(() => {
        socket.on('createRoom',(data) => {
            setListRoom([...listRoom, data])
            console.log(data)
        })
    },[socket])

    useEffect(() => {
        if(localStorage.getItem('tokensUser')){
            console.log('true')
            setAuth(true)
            setShowModal(false)
           if(!checkTab()){
            setOtherTab(false)
           }else{
            setOtherTab(true)
           }
        }
    },[])

    const setUsername = (username) => {
        fetch("http://localhost:3001/users/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(username),
          })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setShowModal(false)
            setAuth(true)
            localStorage.setItem('tokensUser',JSON.stringify(json))
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
                            <div className="flex mb-5 px-2 rounded-md py-2 bg-stone-600 text-white justify-between cursor-pointer">
                            <p className="text-base font-bold">{data.roomName}</p>
                            <p className="text-base font-bold">{data.roomId}</p>
                            <p className="text-base font-bold">{data.players}</p>
                        </div>
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