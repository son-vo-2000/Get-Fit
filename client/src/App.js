import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainApp from "./MainApp";
import Header from "./Header";
import ClientExercises from "./ClientExercises";
import './styles/App.css'

function App(props) {
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/main" Component={MainApp} />
        <Route path="/main/clients/:clientId" Component={ClientExercises} />
      </Routes>
    </main>
  );
}

export default App;
