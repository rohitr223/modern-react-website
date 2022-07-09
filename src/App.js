import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/project" element={<Project/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
