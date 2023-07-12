import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Contact = () => {
  return (
    <section>
      <form action="https://formspree.io/f/mgebeedl" method="POST" className="w-1/2 xl:w-2/5 h-1/2 grid grid-rows-6 grid-flow-col gap-1 p-7 bg-gray-600 mx-auto mt-24 rounded">
        <div className='flex justify-start items-center text-3xl mb-7 font-bold'>Contact me:</div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none h-4/6">
            <svg className="w-4 h-4 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 6 6 0 0 1 6-6h6a6 6 0 0 1 6 6Zm-9-8a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
            </svg>
          </div>
          <input type="text" id="name-address-icon" className="bg-gray-800 text-gray-800 text-sm text-slate-200 rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Name" name="name" required />
        </div>
        {/* ----------------------------------------------------------------------------------------- */}

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none h-4/6">
            <svg className="w-4 h-4 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input type="text" id="email-address-icon" className="bg-gray-800 text-gray-900 text-sm text-slate-200 rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Email" name="email" required />
        </div>

        {/* ----------------------------------------------------------------------------------------- */}

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none h-4/6">
            <svg className="w-4 h-4 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.72 14.456l1.761-.508 10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635l-.52 1.82zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635h3.592z" />
            </svg>
          </div>
          <textarea type="text" id="message-address-icon" className="bg-gray-800 text-gray-900 text-sm text-slate-200 rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="message" name="message" required />
        </div>

        <div className="flex justify-end">
          <button className="form-part submit w-full md:w-1/2 mt-2 bg-blue-700 rounded" type="submit">Submit</button>
        </div>

        <div className="flex justify-end mt-4 gap-5 mr-2">
          <a href='www.linkedin.com/in/nadav-sofer' target='_blank' rel='noreferrer' className='text-4xl'><FaLinkedin/></a>
          <a href='https://github.com/NadavSofer' target='_blank' rel='noreferrer' className='text-4xl'><FaGithub/></a>
        </div>
      </form>
    </section>
  )
}

export default Contact