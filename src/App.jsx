import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Help from './pages/Help/Help.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  
  return (
     <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/help' element={<Help />}/>
        </Routes>
        
        </Router>
   
  )


} 

export default App
