
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Admin/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import ClubForum from './Pages/Users/CLub&Forum/ClubForum';
import Events from './Pages/Users/Events/Events';
import Home from './Pages/Users/Home/Home';

function App() {
  return (
    <div className="font-mono">
        <NavBar/> 
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin' element={<Login/>}></Route>
          <Route path='/BloodReq' element={<ClubForum/>}></Route>
          <Route path='/upcoming-events' element={<Events/>}></Route>
         
      
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
