import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Project from './Components/Project';
import Blog from './Components/Blog';

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
      {/* Blog component */}
      <Blog />
    </div>
  );
}

export default App;
