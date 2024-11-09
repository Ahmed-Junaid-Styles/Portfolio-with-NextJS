import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Ahmed_pic from '@/app/images/Ahmed final pic.jpg'

const Home = () => {
  return (
    <div className='bg-gray-300 ' id='home'>
        <div className='text-gray-600 py-14 w-9/12 mx-auto'>
            <h2 className='text-center font-bold text-3xl leading-loose'>Hey there! My name is Ahmed Junaid</h2>
            <h3 className='text-center font-bold text-2xl leading-loose'> I am Web Developer</h3>
            <div className='w-9/12 mx-auto mt-6 font-mono text-lg '>
            {/* Unlock the power of the web with our full stack developement services-building seamless and innovative digital experiences. */}
            Welcome to my portfolio! Here, you&apos;ll find a collection of my work, showcasing my skills and creativity across various projects. I am passionate about Full stack web developement, and I strive to deliver innovative and high-quality results. Whether you&apos;re looking for inspiration or a potential collaborator, I hope my portfolio gives you a glimpse into my dedication to excellence and my approach to problem-solving. Feel free to explore, and don&apos;t hesitate to reach out!
            </div>
            <div className='flex justify-center m-12'>
            <button className=' w-3/12 h-8 text-lg bg-gradient-to-r from-emerald-400 to-emerald-700 text-white'><Link href={''}>Download CV</Link></button>

            </div>
            <div className='flex justify-center'><Image className='w-3/12 rounded-3xl' alt='abc' src={Ahmed_pic}/></div>
        </div>
    </div>
  )
}

export default Home