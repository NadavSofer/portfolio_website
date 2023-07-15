import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section className=' flex justify-center items-center' style={{height:'87vh'}}>
      <div>
        <h1 class="mb-10 text-4xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-7xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-sky-500">Welcome</span></h1>
        <div className='text-xl text-left'>
          <p className='mb-5 '>
            My name is Nadav Sofer, Front-end developer and overall geek. <br />
            I'm passionate about programming, UI/UX design and pixel-perfect and clean designs. <br />
            Analytical, organized and always looking for something new to learn.
          </p>
          <div>
            <p>
              If you want to learn more <button><Link to="/about" className='text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-500 hover:text-sky-400 duration-500'>about me</Link></button> or take a look at my <button><a href="https://docs.google.com/document/d/1JwVaZZT3SsTm8pExq7AcdeGzQQOaBKtSepEbPzMyMjs/edit?usp=sharing" target='_blank' rel='noreferrer' className='text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-500 hover:text-sky-400 duration-500'>resume.</a></button>
            </p>
            <p>
              To reach out to me you can go to my <button><Link to="/contact" className='text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400 hover:text-sky-500 duration-500'>contact</Link></button> and/or email me directly at <button>nadavsof5@gmail.com.</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
