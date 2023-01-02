import React from 'react'
import Image from 'next/image'
import foodieImg from '../public/assets/projects/foodie-project.png'
import Link from 'next/link'

const ProjectItem = ({title, img, desc, url}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full  shadow-xl  rounded-xl p-4 group hover:bg-gradient-to-r text-white from-[#432342] to-[#432342]'>
    <Image className='rounded-xl group-hover:opacity-10' src={img} alt='/' />
    <div className='hidden group-hover:block absolute '>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{desc}</p>
        <Link href={url}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Proje detayları</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem
