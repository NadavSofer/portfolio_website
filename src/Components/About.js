import React from 'react'
import { BiLogoTailwindCss, BiLogoPython, BiLogoDjango, BiLogoJavascript, BiLogoReact, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { LiaNode, LiaSass } from 'react-icons/lia'
import { SiCss3 } from 'react-icons/si'
import { GiSandsOfTime, GiMagnifyingGlass, GiOrganigram } from 'react-icons/gi'


const About = () => {
  return (
    <section className='xl:w-3/5 xl:mx-auto h-fit'>
      <article className='my-20'>
        <h1 className='text-3xl mb-8'>languages</h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 w-2/5 mx-auto text-blue-500'>
          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoPython className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoDjango className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoJavascript className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoReact className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoTypescript className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <LiaNode className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <LiaSass className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoTailwindCss className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <SiCss3 className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

          <div className='duration-500 skew-y-12 w-fit border border-red-500 rounded mx-auto hover:-skew-y-12'>
            <BiLogoPostgresql className='duration-500 -skew-y-12 p-2 hover:skew-y-12 h-16 w-16' />
          </div>

        </div>

      </article>

      <article className='bg-blue-500'>
        <div className='flex justify-center gap-20'>
          <div>
            <GiSandsOfTime className='text-9xl mx-auto'/>
            <div>Time Management</div>
            <div>Continuous Learning</div>
            <div>Adaptability</div>

          </div>
          <div>
            <GiMagnifyingGlass className='text-9xl mx-auto'/>
            <div>Problem-Solving</div>
            <div>Attention to Detail</div>
            <div>Analytical Thinking</div>
          </div>
          <div>
            <GiOrganigram className='text-9xl mx-auto'/>
            <div>Communication</div>
            <div>Collaboration</div>
            <div>Attention to User Experience</div>
          </div>

        </div>
      </article>

      <div>personal</div>
    </section>
  )
}

export default About