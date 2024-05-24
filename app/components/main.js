"use client"
import React from 'react'
import { btnContext } from '../context/btnContext';
import { Button } from "@/components/ui/button";
import { useContext } from 'react';
import Model from './model';

const Main = () => {
    const{on,seton}=useContext(btnContext);
    const click=()=>{
        alert("Button Clicked")
    }
  return (
    <div className="bg-black h-screen text-white flex items-center justify-center">
    <div className="flex flex-col p-5 justify-center items-center">
    <div className="text-gray-500 sm:text-[16px] text-[12px] mb-2">Created by mr.vinay jadaun</div>
      <div className="text-gray-500 sm:text-[20px] text-[15px] mb-7">Press the button to open review pop-up</div>
      <div className='w-[100%]' ><Button onClick={()=>
        seton(true)} variant="outline" className="text-black w-[100%] bg-purple-600 outline-none border-none hover:bg-purple-400">Press me</Button></div>
    </div>
    {on?
    <div className='transition-all absolute h-[100%] w-[100%]'><Model/></div>:null}
  
   </div>
  )
}

export default Main