import React, { useState } from 'react'

const InputModal = ({showModal,submitHandle}) => {
let [username,setUserName] = useState()

    return (
        showModal ?   <div className="w-full h-screen flex justify-center fixed top-0 z-20 items-center">
        <div className="bg-gray-600 absolute top-0 bottom-0 w-full h-full opacity-80 z-10"></div>
        <div className="bg-white absolute z-20 w-2/6 px-5 py-5 ">
            <input type="text" onChange={(e) => {setUserName(e.target.value)}} className='w-5/6 outline-none px-4 py-2 mx-auto mb-4 border-b border-b-black' placeholder='masukan username'/>
            <button className='ml-4 bg-stone-500 text-white py-2 px-4' onClick={() => {submitHandle(username)}}> submit</button>
        </div>
    </div> : ""
    )
}

export default InputModal
