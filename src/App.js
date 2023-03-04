
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Admin/Login/Login';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Home from './Pages/Users/Home/Home';

function App() {
  return (
    <div className="App">
        <NavBar/> 
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin' element={<Login/>}></Route>
      
        </Routes>
    </div>
  );
}

export default App;
