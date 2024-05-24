import { CrossCircledIcon,ThumbsUp, LinkedInLogoIcon, StarIcon } from '@radix-ui/react-icons'
import React, { useContext } from 'react'
import { btnContext } from '../context/btnContext'


const Model = () => {
  const{on,seton}=useContext(btnContext);
  return (
    <div className='fixed inset-0 bg-black flex h-screen justify-center items-center'>
        <div className='sm:w-[500px] w-[300px] sm:h-[600px] h-[500px] text-black bg-white p-5 rounded-md'>
            <CrossCircledIcon onClick={()=>seton(false)} className='h-7 text-black float-right w-7 cursor-pointer'/>
          <div className='text-black gap-[30px] font-semibold sm:text-[25px] text-[20px]'>
            <div className=' mb-5 mt-5 sm:text-[27px] text-[23px] font-bold'>Leave a Review</div>
            <div>Safety</div>
            <div className='flex flex-row gap-6'>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           </div>

            <div>Communication</div>
            <div className='flex flex-row gap-6'>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           <StarIcon className='h-8 w-8'/>
           </div>

            <div>Would You Recommend Trausti?</div>

            <div>Praise</div>
            <div>
            
            </div>

            </div>
        </div>

    </div>
  )
}

export default Model