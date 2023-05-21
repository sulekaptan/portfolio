import React from 'react'
import foodieImg from '../public/assets/projects/foodie-project.png'
import randomPassImg from '../public/assets/projects/random-password-project.png'
import unitConverterImg from '../public/assets/projects/unit-converter-project.png'
import scoreboardImg from '../public/assets/projects/scoreboard-project.png'
import extImg from '../public/assets/projects/chrome-extension.png'
import contactsImg from '../public/assets/projects/contacts-app-project.png'
import gpt3Img from '../public/assets/projects/gpt-3.png'
import netflixImg from '../public/assets/projects/netflix.png'
import hfdytImg from '../public/assets/projects/how-fast-do-you-type.png'
import fyjappImg from '../public/assets/projects/find-your-job-app.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <h2 className='py-5 tracking-widest'>Projelerim</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Foodie App'
                        img={foodieImg}
                        desc='HTML & CSS'
                        url='https://github.com/sulekaptan/foodie-app'
                    />
                    <ProjectItem
                        title='GPT-3'
                        img={gpt3Img}
                        desc='React'
                        url='https://github.com/sulekaptan/gpt-3'
                    />
                    <ProjectItem
                        title='Netflix'
                        img={netflixImg}
                        desc='React'
                        url='https://github.com/sulekaptan/netflix'
                    />
                    <ProjectItem
                        title='How fast do you type?'
                        img={hfdytImg}
                        desc='React'
                        url='https://github.com/sulekaptan/speed-typing-game'
                    />
                    <ProjectItem
                        title='Random Password Generator'
                        img={randomPassImg}
                        desc='HTML & CSS & JS'
                        url='https://github.com/sulekaptan/random-password-generator'
                    />
                    <ProjectItem
                        title='Chrome Extension / Saving Tabs'
                        img={extImg}
                        desc='HTML & CSS & JS'
                        url='https://github.com/sulekaptan/chrome-extension'
                    />
                    <ProjectItem
                        title='Contacts App'
                        img={contactsImg}
                        desc='React'
                        url='https://github.com/sulekaptan/contacts-app'
                    />
                    <ProjectItem
                        title='Unit Converter App'
                        img={unitConverterImg}
                        desc='HTML & CSS & JS'
                        url='https://github.com/sulekaptan/unit-converter'
                    />
                    <ProjectItem
                        title='Scoreboard App'
                        img={scoreboardImg}
                        desc='HTML & CSS & JS'
                        url='https://github.com/sulekaptan/basketball-score-board'
                    />
                    <ProjectItem
                        title='Find Your Job App'
                        img={fyjappImg}
                        desc='React Native'
                        url='https://github.com/sulekaptan/find-your-job-app'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects