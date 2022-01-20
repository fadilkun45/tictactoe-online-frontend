import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'
import io from 'socket.io-client'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

const WaitingPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [user,setUser] = useState([])

    let backHandle = () => {
        navigate('/')
    }

    const socket = io.connect('http://localhost:3001',{
    })

    useEffect(() => {        

        fetch(`http://localhost:3001/api/rooms/${id}`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(response => 
            setUser(response?.data?.players)
        )
        .catch((err) => console.log(err))
    },[])

    useEffect(() => {
        socket.emit(`joinRoom/${id}`,(response) => {
          console.log(response)
        })
    },[socket])

    return (
       <div className="bg-stone-500">
           <div className="container flex items-center flex-col mx-auto px-4 py-6">
               <h1 className="text-white  font-bold text-3xl text-center">Waiting Room</h1>

               <div className="flex w-full justify-between mt-5">
                   <div className="w-2/6 flex flex-col py-2 px-5 bg-stone-600 rounded-md">

                        <h2 className="text-white font-bold text-center text-xl">Jumlah Player</h2>

                        <div className="flex flex-col py-2 px-4 mt-2 bg-stone-500 h-60">

                      {
                          user?.map((data) => (
                            <div className=" bg-stone-600 rounded-md py-3 mb-5">
                            <p className='text-center text-white text-xl'>{data?.username}</p>
                            <p className="text-green-500 text-base text-center mt-2">ready</p>
                        </div>
                          ))
                      }
                                                {/* <div className=" bg-stone-600 rounded-md py-3 mb-5">
                            <p className='text-center text-white text-xl'>nama player</p>
                            <p className="text-red-500 text-base text-center mt-2">ready</p>
                            </div> 
                            <div className=" bg-stone-600 rounded-md py-3 mb-5">
                            <p className='text-center text-white text-xl'>nama player</p>
                            <p className="text-red-500 text-base text-center mt-2">ready</p>
                            </div>  */}
                        </div>
                   </div>
                   <div className="w-3/6 flex flex-col py-2 px-5 bg-stone-600 rounded-md">

                   </div>
               </div>

               <button className='text-xl w-3/6 text-white mt-6 text-center px-4 py-3 bg-stone-600 mx-auto'>Ready ?</button>
               <button onClick={backHandle} className='text-xl w-3/6 text-white mt-6 text-center px-4 py-3 bg-stone-600 mx-auto'>back to home</button>
           </div>
       </div>
    )
}

export default WaitingPage

