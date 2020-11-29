import './App.css';
import Home from './components/Home'
import About from './components/About';
import Featured from './components/Featured';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Featured />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
