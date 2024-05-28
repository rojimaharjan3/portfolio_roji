
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './containers/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <About /> */}
      <Projects />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
