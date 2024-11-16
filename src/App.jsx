import Home from "./pages/home/Home"
import Topbar from "./components/topbar/Topbar"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Setting from "./pages/setting/Setting"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="write" element={<Write />} />
          <Route path="post/:postId" element={<Single />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App