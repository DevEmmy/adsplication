import logo from './logo.svg';
import './App.css';
import AuthPage from './Components/AuthPage';
import Profile from './Components/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
