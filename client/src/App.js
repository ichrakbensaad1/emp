
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from "./compoments/Headers/Headers";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
//import Edit from "./pages/Edit/Edit";
//import Profile from "./pages/Profile/Profile";
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import Edit from './pages/Edit/Edit'



function App() {
  return (
    <div>
    
   
    <Headers />
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/edit' element={<Edit/>} />

      
       
     

    </Routes> 
    </div>
  );
}

export default App;
