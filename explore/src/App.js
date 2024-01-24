import './App.css';
import Login  from './components/Login.js'; 
import Registro from './components/Registro.js';
import Perfil from './components/Pefil.js';
import Navbar from './components/Navbar.js'; 
import { BrowserRouter  as Router, Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
           <Router>
            <div>
             <Routes>
                 <Route path='/' element={<Navbar/>}/> 
                 <Route path='/login' element={<Login/>}/>
                 <Route path='/resgistro' element={<Registro/>}/> 
                 <Route path='/perfil' element={<Pefil/>}/> 
                </Routes>
                 
            </div>
           </Router>
    </div> 
  );
}
import { BrowserRouter } from 'react-router-dom';

export default App;
















