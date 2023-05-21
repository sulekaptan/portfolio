import React from 'react'
import sule from './/../public/assets/suleka.jpeg'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4'>Şule Kimdir?</h2>
          <p className='py-2 '>Temmuz 2022'de
            Ondokuz Mayıs Üniversitesi, Bilgisayar Mühendisliği'nden mezun oldum.
            Ağustos ayında Techcareer.net tarafından düzenlenen 40 saatlik bir "Backend with C#" bootcamp'ine
            katılma fırsatı buldum. Fakat bu alan bana göre değildi. Bu yüzden,
            o zamandan beri kendimi front-end alanında geliştirmeye çalışıyorum.
          </p>
          <p className='py-2'>Daha sonra Archi's Academy tarafından verilen bir front-end 
            eğitimine kabul edildim. Burada yaklaşık dört ay boyunca HTML, CSS,
            JavaScript, React, Next.js, Tailwind CSS gibi teknolojileri öğrendim.
            Çeşitli projeler geliştirdim. 

          </p>
          <p className='py-2'>Gerek çeşitli eğitimlerle gerekse kendi çabamla her geçen gün yeni beceriler 
            kazanmaya çalışıyorum. Çalışmalarıma GitHub hesabımdan ulaşabilirsiniz.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={sule} alt='/'/>
        </div>

      </div>
        
    </div>
  )
}

export default About