import React from "react";

import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import MessagesWindow from "./MessagesWindow/MessagesWindow";

import "../assets/styles/style.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <LeftBar className="main" />

        <MessagesWindow />
      </main>
    </div>
  );
}

export default App;
