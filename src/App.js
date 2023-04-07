import "react-toastify/dist/ReactToastify.css";

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
import Club from "./Pages/Users/CLub&Forum/Club";
import ClubAnnouncement from "./Pages/Users/CLub&Forum/Club/ClubAnnouncement";
import ClubBlogs from "./Pages/Users/CLub&Forum/Club/ClubBlogs";
import ClubActivitys from "./Pages/Users/CLub&Forum/Club/ClubActivitys";
import AllShortcut from "./Pages/Admin/Login/Dashboard/AllShortcut";
import RequestListClubForum from "./Pages/Admin/Login/Dashboard/RequestListClubForum";
import RequestForRoomBook from "./Pages/Admin/Login/Dashboard/RequestForRoomBook";
import VolunteerRequest from "./Pages/Admin/Login/Dashboard/VolunteerRequest";

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
        <Route path="/Club" element={<Club />}>
          <Route index element={<ClubAnnouncement />}></Route>
          <Route path="/Club/Activitys" element={<ClubActivitys />}></Route>
          <Route path="/Club/Blogs" element={<ClubBlogs />}></Route>
        </Route>
        <Route
          path="/request-for-create-new-club-or-forum"
          element={<NewClubForum />}
        ></Route>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<AllShortcut />}></Route>
          <Route
            path="/Dashboard/all-requested-club-forum"
            element={<RequestListClubForum />}
          ></Route>
          <Route
            path="/Dashboard/request-for-room-booking"
            element={<RequestForRoomBook />}
          ></Route>
          <Route
            path="/Dashboard/volunteerRequest"
            element={<VolunteerRequest />}
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
