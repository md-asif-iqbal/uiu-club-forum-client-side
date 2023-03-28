import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Login/Dashboard/Dashboard";
import Login from "./Pages/Shared/Account/Login";
import Registation from "./Pages/Shared/Account/Registation";
import Footer from "./Pages/Shared/Footer/Footer";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Forum from "./Pages/Users/CLub&Forum/Forum";
import ForumActivitys from "./Pages/Users/CLub&Forum/ForumActivity/ForumActivitys";
import ForumAnnouncment from "./Pages/Users/CLub&Forum/ForumActivity/ForumAnnouncment";
import ForumBlogs from "./Pages/Users/CLub&Forum/ForumActivity/ForumBlogs";
import Events from "./Pages/Users/Events/Events";
import Home from "./Pages/Users/Home/Home";
import NewClubForum from "./Pages/Users/NewClubForum/NewClubForum";
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
        <Route path="/news" element={<News />}></Route>
        <Route path="/Forum" element={<Forum />}>
          <Route index element={<ForumAnnouncment />}></Route>
          <Route path="/Forum/Activitys" element={<ForumActivitys />}></Route>
          <Route path="/Forum/Blogs" element={<ForumBlogs />}></Route>
        </Route>
        <Route
          path="/request-for-create-new-club-or-forum"
          element={<NewClubForum />}
        ></Route>
        <Route
          path="/Dashboard"
          element={<Dashboard />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
