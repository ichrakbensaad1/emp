
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Headers from "./compoments/Headers/Headers";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
//import Edit from "./pages/Edit/Edit";
//import Profile from "./pages/Profile/Profile";
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <div>
    
   
   
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile/>} />

      
       
     

    </Routes> 
    </div>
  );
}

export default App;
