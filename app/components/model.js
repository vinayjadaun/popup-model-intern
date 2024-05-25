"use client"
import { CrossCircledIcon, LinkedInLogoIcon, StarIcon } from '@radix-ui/react-icons'
import React, { useContext, useEffect, useState } from 'react'
import { btnContext } from '../context/btnContext'
import { ThumbsDown, ThumbsUp } from 'lucide-react'


const Model = () => {
  const{on,seton}=useContext(btnContext);
  const[safety1,setsafety1] = useState(true);
  const[safety2,setsafety2] = useState(true);
  const[safety3,setsafety3] = useState(true);
  const[safety4,setsafety4] = useState(true);
  const[safety5,setsafety5] = useState(true);


  const[com1,setcom1] = useState(true);
  const[com2,setcom2] = useState(true);
  const[com3,setcom3] = useState(true);
  const[com4,setcom4] = useState(true);
  const[com5,setcom5] = useState(false);

  useEffect(()=>{
    setsafety1(safety1)
    console.log(safety1);
    setsafety2(safety2)
    console.log(safety2);
    setsafety3(safety3)
    console.log(safety3);
    setsafety4(safety4)
    console.log(safety4);
    setsafety5(safety5)
    console.log(safety5);
    
  }
  ,[safety1,safety2,safety3,safety4,safety5])


  useEffect(()=>{
    setcom1(com1)
    console.log(com1);
    setcom2(com2)
    console.log(com2);
    setcom3(com3)
    console.log(com3);
    setcom4(com4)
    console.log(com4);
    setcom5(com5)
    console.log(com5);
    
  }
  ,[com1,com2,com3,com4,com5])

  const[poor,setpoor]=useState(false);
  const[average,setaverage]=useState(false);
  const[vg,setvg]=useState(true);

  const[like,setlike]=useState(true);
  const[dislike,setdislike]=useState(false);

    return (
    <div className='fixed inset-0 bg-black flex h-screen justify-center items-center'>
        <div className='sm:w-[500px] w-[350px] sm:h-[600px] h-[550px] text-black bg-white p-5 rounded-md'>
            <CrossCircledIcon onClick={()=>seton(false)} className='h-7 text-black float-right w-7 cursor-pointer'/>
          <div className='text-black gap-[30px] font-semibold sm:text-[25px] text-[20px]'>
            <div className=' mb-8 mt-5 sm:text-[27px] text-[23px] font-bold'>Leave a Review</div>
            <div className='mb-2'>Safety</div>
            <div className='flex flex-row gap-6 justify-between md:lg:xl:xxl:px-4 px-10 py-3'>
           <StarIcon onClick={()=>{setsafety1(!safety1),setsafety2(false),setsafety3(false),setsafety4(false),setsafety5(false)}} className={`h-8 w-8 ${safety1?'text-yellow-500':'text-gray-500'}`}/>
           <StarIcon onClick={()=>{setsafety1(true),setsafety2(!safety2),setsafety3(false),setsafety4(false),setsafety5(false)}} className={`h-8 w-8 ${safety2?'text-yellow-500':'text-gray-500'}`}/>
           <StarIcon onClick={()=>{setsafety1(true),setsafety2(true),setsafety3(!safety3),setsafety4(false),setsafety5(false)}} className={`h-8 w-8 ${safety3?'text-yellow-500':'text-gray-500'}`}/>
           <StarIcon onClick={()=>{setsafety1(true),setsafety2(true),setsafety3(true),setsafety4(!safety4),setsafety5(false)}} className={`h-8 w-8 ${safety4?'text-yellow-500':'text-gray-500'}`}/>
           <StarIcon onClick={()=>{setsafety1(true),setsafety2(true),setsafety3(true),setsafety4(true),setsafety5(!safety5)}} className={`h-8 w-8 ${safety5?'text-yellow-500':'text-gray-500'}`}/>
           </div>

            <div className='mb-2'>Communication</div>
            <div className='flex flex-row gap-6 justify-between md:lg:xl:xxl:px-4 px-10 py-3'>
            <StarIcon onClick={()=>{setcom1(!com1),setcom2(false),setcom3(false),setcom4(false),setcom5(false)}} className={`h-8 w-8 ${com1?'text-yellow-500':'text-gray-500'}`}/>
            <StarIcon onClick={()=>{setcom1(true),setcom2(!com2),setcom3(false),setcom4(false),setcom5(false)}} className={`h-8 w-8 ${com2?'text-yellow-500':'text-gray-500'}`}/>
            <StarIcon onClick={()=>{setcom1(true),setcom2(true),setcom3(!com3),setcom4(false),setcom5(false)}} className={`h-8 w-8 ${com3?'text-yellow-500':'text-gray-500'}`}/>
            <StarIcon onClick={()=>{setcom1(true),setcom2(true),setcom3(true),setcom4(!com4),setcom5(false)}} className={`h-8 w-8 ${com4?'text-yellow-500':'text-gray-500'}`}/>
            <StarIcon onClick={()=>{setcom1(true),setcom2(true),setcom3(true),setcom4(true),setcom5(!com5)}} className={`h-8 w-8 ${com5?'text-yellow-500':'text-gray-500'}`}/>
</div>

            <div className='mb-2'>Would You Recommend Trausti?</div>
            <div className='flex flex-row justify-between p-5'>
              <ThumbsDown onClick={()=>{setlike(false),setdislike(true)}} className={`h-10 w-10 ${dislike?'text-red-500':'text-gray-500'}`}/>
              <div className='text-[18px] mr-10 text-gray-500'>NO</div>
              <ThumbsUp onClick={()=>{setlike(true),setdislike(false)}} className={`${like?'text-green-500':'text-gray-500'} h-10 w-10`}/>
              <div className='text-[18px] mr-10 text-gray-500'>YES</div>

            </div>

            <div className='mb-4'>Praise</div>
            <div className='flex flex-row text-[15px] justify-between p-1'>
              <div onClick={()=>{setpoor(!poor),setvg(false),setaverage(false)}} className={`p-1  px-3 ${poor?'bg-yellow-500 text-white':'bg-gray-400 text-black'} rounded-[25px]`}>Poor</div>
              <div onClick={()=>{setpoor(false),setvg(false),setaverage(!average)}} className={`p-1  px-3 ${average?'bg-yellow-500 text-white':'bg-gray-400 text-black'}  rounded-[25px]`}>Average</div>
              <div onClick={()=>{setpoor(false),setaverage(false),setvg(!vg)}} className={`p-1  px-3 ${vg?'bg-yellow-500 text-white':'bg-gray-400 text-black'}  rounded-[25px]`}>Excellent</div>
              
            </div>
            <div>
            
            </div>

            </div>
        </div>

    </div>
  )
}

export default Model