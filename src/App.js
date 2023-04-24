import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";
import Home from "./components/Home";
import Landing from "./components/Landing";

import Servics from "./components/Servics";
import Contect from "./components/Contect";
import About from "./components/About";




function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
    <Home/>
    <Router>
      <div className="App">
        
        <Routes>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/about" element={<About/>}/>
          <Route path="/servics" element={<Servics/>}/>
          <Route path="/" element={<Landing/>} />
          <Route
            exact
            path="/login"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
