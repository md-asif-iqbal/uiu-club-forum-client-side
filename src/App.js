import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Shared/Account/Login";
import Registation from "./Pages/Shared/Account/Registation";
import Footer from "./Pages/Shared/Footer/Footer";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Events from "./Pages/Users/Events/Events";
import Home from "./Pages/Users/Home/Home";
import News from "./Pages/Users/News/News";

function App() {
  return (
    <div className="font-mono">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singUp" element={<Registation />}></Route>
        <Route path="/upcoming-events" element={<Events />}></Route>
        <Route path="/news" element={<News />}>
          {" "}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
