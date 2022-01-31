import React, { useState } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardTic from "./CardTic";

const Playing = () => {
  const { id } = useParams();
  const socket = io.connect("http://localhost:3001");
  const [player,setPlayerTurn] = useState()
  const [cardArray, setCardArray] = useState([
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ]);


  useEffect(() => {
    socket.on(`room/${id}/playing/playerMove`, (res) => {
      console.log(res)
      setCardArray(res?.tictactoeArray)
    });
    console.log(cardArray)
  },[]);

  return (
    <div className="bg-stone-500 text-white pt-10 h-screen w-full">
      <div className="container flex flex-col mx-auto bg-stone-600 py-6 px-6 rounded-md">
        <h1 className="text-2xl text-center">NOW PLAYING : PLAYER</h1>
        <div className="grid grid-cols-3 mt-6 w-3/6 gap-6 mx-auto">
            <CardTic data={cardArray} roomId={id} index={'0,0'} key={1} />
            <CardTic data={cardArray} roomId={id} index={'0,1'} key={2} />
            <CardTic data={cardArray} roomId={id} index={'0,2'} key={3} />
            <CardTic data={cardArray} roomId={id} index={'1,0'} key={4} />
            <CardTic data={cardArray} roomId={id} index={'1,1'} key={5} />
            <CardTic data={cardArray} roomId={id} index={'1,2'} key={6} />
            <CardTic data={cardArray} roomId={id} index={'2,0'} key={7} />
            <CardTic data={cardArray} roomId={id} index={'2,1'} key={8} />
            <CardTic data={cardArray} roomId={id} index={'2,2'} key={9} />

        </div>
      </div>
    </div>
  );
};

export default Playing;
