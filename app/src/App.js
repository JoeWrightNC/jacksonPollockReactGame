import React from 'react';
import GameLogicBuild from "./components/gameLogicBuild";
import Jumbotron from "./components/jumbotron";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <GameLogicBuild /> 
  </div>
);

export default App;