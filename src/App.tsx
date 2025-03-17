
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavScrollExample from './Navbar';
import Herosection from './Herosection';
import Contactanimation from './Contactanimation';
import Galleryheadline from './Gallery/Galleryheadline';
import Gallery from './Gallery/Gallery';
import About from './About';
import B from './B';
import Portfolio from './Portfolio';
import Post from './Post';
import Projects from './Projects';

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
        <Route path='/gallery' element={
          <div>
            <Galleryheadline />
            <Gallery />
          </div>
        } />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<B />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>

    </div>
  )
}

export default App