import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainApp from "./MainApp";
import ClientExercises from "./ClientExercises";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./Contact";
import About from "./About";
import Login from "./components/AuthForm/Login";
import Register from "./components/AuthForm/Register";
import NotFound from "./NotFound";

function App(props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/main" element={<MainApp />} />
        <Route path="/main/clients/:clientId" element={<ClientExercises />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
