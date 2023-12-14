// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import NewPage from "./Component/NewPage";
import axios from "axios";
import { useState, useEffect } from "react";
import Test from "./Component/Test";
import './Style/Test.css'
function App() {
 
  return (
    <div className="App">
      {/* <Menu/> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:path" element={<NewPage />} />

        </Routes>
        </BrowserRouter> */}
        <Test/>
        <Test/>
        <Test/>
        <Test/>
        <Test/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
