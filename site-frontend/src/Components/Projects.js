import React from 'react'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import kankaLog from '../assets/kankaLog.png'

const Projects = () => {
    return (
        <section style={{height:'87vh'}}>
            <div className='font-bold text-5xl my-4'>Projects</div>
            <article>
                <div className='flex flex-col flex-wrap items-center md:flex-nowrap	 md:flex-row md:w-2/3 xl:w-1/2 gap-4 mx-auto my-8'>
                    <img src={kankaLog} alt='kanka.log' className='h-1/4 w-1/2 my-auto' />
                    <div className='w-1/2'>
                        <div className='text-left'>
                            <h1 className='text-xl mb-2'>Kanka.Log</h1>
                            <p> Kanka.log is The ultimate supplement for worldbuilding and tabletop RPG campaign management. Save entities, track edits, and seamlessly upload them to the site. Unleash your creativity with AI-powered assistance for creating and expanding entities. Effortlessly integrate with the main site for streamlined workflow. Experience the future of campaign organization and storytelling with Kanka.log.</p>

                        </div>
                        <div className='flex justify-end mr-4 mt-2 gap-4'>
                            <a href='https://github.com/NadavSofer' target='_blank' rel='noreferrer' className='text-4xl'><FaGithub /></a>
                            <a href='https://kanka-log.onrender.com/https://github.com/NadavSofer' target='_blank' rel='noreferrer' className='text-4xl'><FaExternalLinkAlt /></a>
                        </div>
                    </div>
                </div>
                <hr className='w-3/5 my-8 mx-auto border-y-2 rounded'/>
            </article>
        </section>
    )
}

export default Projects