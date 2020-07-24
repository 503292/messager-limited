import React from "react";

import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import MessagesWindow from "./MessagesWindow/MessagesWindow";

import "./App.css";

function App() {
  return (
    <div className="app">
      <LeftBar className="main"/>
      <main>
        <Header />
        <MessagesWindow />
      </main>
    </div>
  );
}

export default App;
