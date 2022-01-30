import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import  io from 'socket.io-client'


const CardTic = ({data,roomId,index}) => {
    const socket = io.connect('http://localhost:3001')

    const playerClick = (data) => {
        socket.emit('playerMove',{
            Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`,
            roomUuid: roomId,
            moveIndex: [parseInt(data),parseInt(data.slice(2,3))]

        })
        console.log([parseInt(data),parseInt(data.slice(2,3))])
    }

  
  return (
    <div className='rounded-md bg-white text-black h-32 text-center flex items-center justify-center' onClick={() => {playerClick(index)}}>{
        data[parseInt(index)][parseInt(index.slice(2,3))] < 1 ? index  :  data[parseInt(index)][parseInt(index.slice(2,3))] == localStorage.getItem('accessToken') ? 'O' : 'X'
    }</div>
  );
};

export default CardTic;
