// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './Pages/Home';
import Stays from './Pages/Stays';
import Flights from './Pages/Flights';
import Cars from './Pages/Cars';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
// Components
import Navigation from './Components/Navigation';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Router>
        <Routes>
          <Route exact path="/" pages={Home} />
          <Route path="/stays" pages={Stays} />
          <Route path="/flights" pages={Flights} />
          <Route path="/cars" pages={Cars} />
          <Route path="/login" pages={Login} />
          <Route path="/signup" pages={Signup} />
        </Routes>
      </Router>

      <Header />
    </div>
  );
}

export default App;
