import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';


function App() {
  return (
    <div className="App">
      {/* Home Component */}
      <Home />
      {/* About component */}
      <About />
      {/* Service component */}
      <Service />
    </div>
  );
}

export default App;
