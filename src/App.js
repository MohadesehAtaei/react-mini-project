import { BrowserRouter, Route, Routes } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"   // js
import './App.css';

import Header from './Components/Header';
import Home from './pages/Home.jsx'
import AdvanceSearch from './pages/AdvanceSearch'
import About from './pages/About'
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/AdvanceSearch' element={<AdvanceSearch/>}/>
        <Route path='/user/About' element={<About/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/signup" element={<Signup/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
