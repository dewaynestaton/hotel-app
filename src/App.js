// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
// Components
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Routes>
    </div>
  );
}

export default App;
