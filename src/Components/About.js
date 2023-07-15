import React from 'react'
import { BiLogoTailwindCss, BiLogoPython, BiLogoDjango, BiLogoJavascript, BiLogoReact, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { LiaNode, LiaSass } from 'react-icons/lia'
import { SiCss3, SiDungeonsanddragons } from 'react-icons/si'
import { GiSandsOfTime, GiMagnifyingGlass, GiOrganigram, GiByzantinTemple } from 'react-icons/gi'
import {IoGameControllerSharp} from 'react-icons/io5'
import {FaRobot} from 'react-icons/fa'


const About = () => {
  return (
    <section className=' xl:mx-auto h-fit'>
      <article className='my-20'>
        <h1 className='text-3xl mb-8'>Technical skills</h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-10 w-2/5 mx-auto text-blue-500'>
          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoPython className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoDjango className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoJavascript className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoReact className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoTypescript className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <LiaNode className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <LiaSass className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoTailwindCss className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <SiCss3 className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-sky-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoPostgresql className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

        </div>

      </article>

      <article className='bg-blue-500 py-12 shadow-inner'>
        <div className='flex justify-center gap-20'>
          <div className='h-fit w-1/5 hover:scale-110 duration-500'>
            <GiSandsOfTime className='text-9xl mx-auto'/>
            <div>Time Management</div>
            <div>Continuous Learning</div>
            <div>Adaptability</div>

          </div>
          <div className='h-fit w-1/5 hover:scale-110 duration-500'>
            <GiMagnifyingGlass className='text-9xl mx-auto'/>
            <div>Problem-Solving</div>
            <div>Attention to Detail</div>
            <div>Analytical Thinking</div>
          </div>
          <div className='h-fit w-1/5 hover:scale-110 duration-500'>
            <GiOrganigram className='text-9xl mx-auto'/>
            <div>Communication</div>
            <div>Collaboration</div>
            <div>Attention to User Experience</div>
          </div>

        </div>
      </article>

      <article>
        <div className='my-8'>
        <h1 className='text-3xl '>Hobbies</h1>
        <p>Anything geeky</p>

        </div>

        <div>
          <div className='flex items-center justify-center gap-8'>
            <p className='text-3xl'>Video Games</p>
            <IoGameControllerSharp className='text-9xl'></IoGameControllerSharp>
          </div>
          <div className='flex items-center justify-center gap-8'>
            <SiDungeonsanddragons className='text-9xl'></SiDungeonsanddragons>
            <p className='text-3xl'>TTRPGs</p>
          </div>
          <div className='flex items-center justify-center gap-8'>
            <p className='text-3xl'>AI and AI art</p>
            <FaRobot className='text-9xl'></FaRobot>
          </div>
          <div className='flex items-center justify-center gap-8'>
            <GiByzantinTemple className='text-9xl'></GiByzantinTemple>
            <p className='text-3xl'>History and Anthropology</p>
          </div>
        </div>
        <br/><br/><br/>
      </article>
    </section>
  )
}

export default About