import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainApp from "./MainApp";
import ClientExercises from "./ClientExercises";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./Contact";
import About from "./About";

function App(props) {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/main" Component={MainApp} />
        <Route path="/main/clients/:clientId" Component={ClientExercises} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
      </Routes>
    </main>
  );
}

export default App;
