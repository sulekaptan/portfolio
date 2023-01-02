import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from 'react-icons/fa'
import sule from '../public/assets/sule.png'
import Image from 'next/image'

export const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <Image src={sule} />
        </div>
        <div>
          <h1 className='py-4 text-ffffff'>Merhaba, Ben <span className='text-[#d3cbd3]'>Şule</span></h1>
          <h2 className='py-4 text-ffffff'>Jr Front-End Developer</h2>
          <p className='py-4 text-ffffff max-w-[70%] m-auto'>Yeni mezun bir bilgisayar mühendisiyim ve kendimi front-end alanında geliştiriyorum. Çalışmalarıma github hesabımdan ve projeler kısmından erişebilirsiniz!</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaTwitter />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaMedium />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Main