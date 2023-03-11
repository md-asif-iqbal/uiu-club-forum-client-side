
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Admin/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Home from './Pages/Users/Home/Home';

function App() {
  return (
    <div className="font-mono">
        <NavBar/> 
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin' element={<Login/>}></Route>
      
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
