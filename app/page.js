"use client"
import React, { useContext, useState } from 'react'

import { Button } from "@/components/ui/button";
import Model from './components/model';
import { btnContext } from './context/btnContext';
import Main from './components/main';


const Page = () => {
  const[on,seton]=useState(false);
  return (
    <btnContext.Provider value={{on,seton}}>
      <div>
        <Main/>
      </div></btnContext.Provider>
  )
}

export default Page