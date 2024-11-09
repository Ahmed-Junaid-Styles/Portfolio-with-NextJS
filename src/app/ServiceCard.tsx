import React from 'react'
import Image from 'next/image'

const ServiceCard = (props) => {
  return (
    <div className='w-9/12 mx-auto py-6'>
        <div className='flex flex-col w-6/12 mx-auto bg-gray-600 text-white py-14 rounded-xl'>
            <div className='flex justify-center'><Image alt='' className='w-16 h-16 rounded-full' src={props.logo}/></div>
            <h2 className='text-center font-bold text-lg py-2'>{props.heading}</h2>
            <div className='text-center w-9/12 mx-auto'>{props.detail} </div>
        </div>
    </div>
  )
}

export default ServiceCard