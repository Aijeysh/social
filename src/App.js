import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import Post from './features/Post';
import LoggedDashboard from './pages/LoggedDashboard';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoggedDashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
