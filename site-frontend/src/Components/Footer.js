import React from 'react'

const Footer = () => {
  return (
    <footer className=" shadow bg-black fixed bottom-0 w-screen">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm  text-center text-gray-400">© 2023 <a href="https://github.com/NadavSofer" target='_blank' rel='noreferrer' className="hover:underline">Nadav Sofer</a>. All Rights Reserved.
        </span>
      </div>
    </footer>

  )
}

export default Footer