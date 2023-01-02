import React from 'react'
import Image from 'next/image'
import html from './/../public/assets/skills/html-icon.png'
import css from './/../public/assets/skills/css-icon.png'
import js from './/../public/assets/skills/javascript-icon.png'
import react from './/../public/assets/skills/react-icon.png'
import next from './/../public/assets/skills/nextjs-icon.png'
import tailwind from './/../public/assets/skills/tailwindcss-icon.png'
import sass from './/../public/assets/skills/sass-icon.png'

const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='py-10 tracking-widest'>Beceriler</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image className='rounded-xl' width='64' height='64' src={html} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image className='rounded-xl' width='64' height='64' src={css} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image className='rounded-xl' width='64' height='64' src={js} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image className='rounded-xl' width='64' height='64' src={react} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACT</h3>
                            </div>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image className='rounded-xl' width='64' height='64' src={next} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NEXT</h3>
                            </div>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image className='rounded-xl' width='64' height='64' src={sass} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SASS</h3>
                            </div>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image className='rounded-xl' width='64' height='64' src={tailwind} alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TAILWIND</h3>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills
