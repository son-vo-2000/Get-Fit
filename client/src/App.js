import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainApp from "./MainApp";
import Header from "./components/Header/Header";
import ClientExercises from "./ClientExercises";
import Navbar from "./components/Navbar/Navbar";

function App(props) {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/main" Component={MainApp} />
        <Route path="/main/clients/:clientId" Component={ClientExercises} />
      </Routes>
    </main>
  );
}

export default App;
