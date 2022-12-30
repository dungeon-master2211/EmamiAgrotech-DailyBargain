// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Haldia from './components/Haldia';
import Home from './components/Home';
import Kandla from './components/Kandla';
function App() {
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/haldia' element={<Haldia/>}/>
        <Route path='/kandla' element={<Kandla/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
