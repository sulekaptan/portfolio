import React from 'react'


const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='py-4 text-xl tracking-widest '>Hakkımda</p>
          <h2 className='py-4'>Şule Kimdir?</h2>
          <p className='py-2 '>10 Mart 2000 Kastamonu doğumluyum. Temmuz 2022'de
            Ondokuz Mayıs Üniversitesi, Bilgisayar Mühendisliği'nden mezun oldum.
            O zamandan beri kendimi front-end alanında geliştirmeye çalışıyorum.
          </p>
          <p className='py-2'>Gerek çeşitli eğitimlerle gerekse kendi çabamla her geçen gün yeni beceriler 
            kazanmaya çalışıyorum. Çalışmalarıma GitHub hesabımdan ulaşabilirsiniz.
          </p>
          <p className='py-2 underline cursor-pointer'>
            Projelerime git.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src='https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-cute-girls-shop-avatar-png-image_2603683.jpg' alt='/'/>
        </div>

      </div>
        
    </div>
  )
}

export default About