import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App bg-gray-800 h-screen text-slate-200 font-roboto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
