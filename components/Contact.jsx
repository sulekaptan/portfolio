import React from 'react'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Image from 'next/image'
import sticker from '../public/assets/sticker.png'


const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <h2 className='text-2xl tracking-widest py-4'>İletişim</h2>
        <div className='grid lg:grid-cols-3 gap-5'>


          {/* mail atma kısmı */}
          <div className='max-w-[700px] col-span-2 w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-1 gap-4 w-full py-2'>

                  <div className='flex flex-col'>
                    <label className='text-sm py-2' htmlFor='name'>Adınız</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' placeholder='Adınız' type="text"></input>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='text-sm py-2' htmlFor='name'>E-mail</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' placeholder='Mail adresiniz' type="email"></input>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='text-sm py-2' htmlFor='name'>Konu</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 text-black' placeholder='Konu' type="text"></input>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='text-sm py-2' htmlFor='name'>Mesaj</label>
                    <textarea placeholder='Mesajınızı giriniz.' className='border-2 rounded-lg p-3 border-gray-300' cols="30" rows="3"></textarea>
                  </div>

                </div>

                <button className='w-full p-4 text-gray-100 mt-4'>Gönder</button>
              </form>
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1 w-full h-full m-auto items-center rounded-xl p-4'>
            <div>
              <Image src={sticker} />
            </div>
          </div>
        </div>
        <div className='flex py-12'>

          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-110 '>
              <HiOutlineChevronDoubleUp />
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
