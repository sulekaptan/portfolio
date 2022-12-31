import React from 'react'
import Image from 'next/image'
import foodieImg from '../public/assets/projects/foodie-project.png'
import Link from 'next/link'

const ProjectItem = ({title, img, desc, url}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full  shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#d3cbd3] to-[#d3cbd3]'>
    <Image className='rounded-xl group-hover:opacity-10' src={img} alt='/' />
    <div className='hidden group-hover:block absolute '>
        <h3 className='text-2xl text-black tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-black text-center'>{desc}</p>
        <Link href={url}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Proje detayları</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem
