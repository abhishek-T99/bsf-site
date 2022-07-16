import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Project from './Components/Project';
import Staffs from './Components/Staffs';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* Home Component */}
      <Home />
      {/* About component */}
      <About />
      {/* Service component */}
      <Service />
      {/* Project component */}
      <Project />
      {/* Staffs component */}
      <Staffs />
      {/* Blog component */}
      <Blog />
      {/* Contact component */}
      <Contact />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
