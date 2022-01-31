import React from 'react';
import {toast} from 'react-toastify'

const CardTic = ({data,roomId,index,disable,socket}) => {
    const playerClick = (data) => {
        disable ? toast.error('not your turn') : socket.emit('playerMove',{
          Authorization: `Bearer JWT ${localStorage.getItem('accessToken')}`,
          roomUuid: roomId,
          moveIndex: [parseInt(data),parseInt(data.slice(2,3))]

      })
        console.log([parseInt(data),parseInt(data.slice(2,3))])
    }


  

  
  return (
    <div className='rounded-md bg-white text-black h-32 text-center flex items-center justify-center' onClick={() => {playerClick(index)}}>
      {
        data[parseInt(index)][parseInt(index.slice(2,3))] < 1 ? index  :  data[parseInt(index)][parseInt(index.slice(2,3))] == localStorage.getItem('accessToken') ? 'O' : 'X'
    }
    </div>
  );
};

export default CardTic;
