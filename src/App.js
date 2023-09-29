import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Navbar2 from './components/Navbar2';
import Couresel from './components/Couresel';

function App() {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Couresel />
      <Work />
      <Contact />
      <Navbar2 />
    </div>
  );
}

export default App;
