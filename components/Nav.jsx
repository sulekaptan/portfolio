import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from 'react-icons/fa'
import logo from '../public/assets/logo.png'
import { useRouter } from 'next/router'

const Nav = () => {

  const [nav, setNav] = useState(false)
  const [navBg, setNavBg] = useState('#432342')
  const router = useRouter()

  useEffect(() => {
    if(router.pathname === '/' || 
    router.pathname === '/#about' ||
    router.pathname === '/#skills' ||
    router.pathname === '/#projects' ||
    router.pathname === '/#contact') {
      setNavBg('#432342')
    }
  }, [router])


  const handleNav = () => {
    setNav(!nav)
  }

  // const [shadow, setShadow] = useState(false)
  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.ShadowY > 90) {
  //       setShadow(true)
  //     } else {
  //       setShadow(false)
  //     }
  //   }
  //   window.addEventListener('shadow', handleShadow)
  // }, [])

return (
  <div style={{backgroundColor: `${navBg}`}} className='fixed w-full h-20 shadow-xl z-[100]'>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Image
        src={logo}
        alt='/'
        width='50'
        height='50' />
      <div>
        <ul className='hidden md:flex'>
          <Link href='#'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Anasayfa</li>
          </Link>
          <Link href='/#about'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Hakkında</li>
          </Link>
          <Link href='/#skills'>
            <li className='ml-10 text-sm uppercase hover:border-b'>BECERİLER</li>
          </Link>
          <Link href='/#projects'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projeler</li>
          </Link>
          <Link href='/#contact'>
            <li className='ml-10 text-sm uppercase hover:border-b'>İLETİŞİM</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>


    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full  h-screen bg-black/70' : ''}>
      <div className=
        {nav
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#432342] text-[#ffffff] p-10 ease-in duration-500'
          : 'fixed left-[-100%] top-0 duration-500'}>
        <div className='flex w-full items-center justify-between'>
          <Image
            src={logo}
            alt='/'
            width='50'
            height='50' />
          <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
            <AiOutlineClose />
          </div>
        </div>
        <div className='border-b border-gray-300 my-4'>
          <p className='w-[85%] md:w-[90] py-4'>I will try my best</p>
        </div>
        <div>
          <ul>
            <Link href='/'>
              <li onClick={()=> setNav(false)}className=' py-4 text-sm'>Anasayfa</li>
            </Link>
            <Link href='/#about'>
              <li onClick={()=> setNav(false)}className='text-sm py-4'>Hakkında</li>
            </Link>
            <Link href='/#skills'>
              <li onClick={()=> setNav(false)}className='text-sm py-4'>Beceriler</li>
            </Link>
            <Link href='/£projects'>
              <li onClick={()=> setNav(false)}className='text-sm py-4'>Projeler</li>
            </Link>
            <Link href='/#contact'>
              <li onClick={()=> setNav(false)}className='text-sm py-4'>İletişim</li>
            </Link>
          </ul>
          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#d3cbd3]'>Let's Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaTwitter />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaMedium />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Nav