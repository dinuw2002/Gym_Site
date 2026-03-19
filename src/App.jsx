import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Trainers from './components/Trainers';
import Packages from './components/Packages';


function App() {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Packages/>
      <Contact />
      <Footer />

    
    </div>
  )
}
export default App;