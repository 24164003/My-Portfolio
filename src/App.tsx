
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavScrollExample from './Navbar';
import Herosection from './Herosection';
import Contactanimation from './Contactanimation';
import Blogheadline from './Blog/Blogheadline';
import Blog from './Blog/Blog';
import About from './About';
import Gallery from './Gallery';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <div>
      {/* Common Navbar */}
      <NavScrollExample />

      {/* Routing */}
      <Routes>
        <Route path='/My-Portfolio' element={
          <div>
            <Herosection />
            <Contactanimation />
          </div>
        }
        />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={
          <div>
            <Blogheadline />
            <Blog />
          </div>
        } />
        <Route path='/portfolio' element={<Portfolio />} />
       <Route path='/gallery' element={<Gallery />} />
      </Routes>

    </div>
  )
}

export default App