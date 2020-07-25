import React from "react";

import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import MessagesWindow from "./MessagesWindow/MessagesWindow";

import "../assets/styles/style.css";
import "./App.scss";

import users from "../users";

function App() {
  console.log(users, "users");
  return (
    <div className="app">
      <header>
        <Header users={users} />
      </header>
      <main className="main">
        <LeftBar />

        <MessagesWindow users={users} />
      </main>
    </div>
  );
}

export default App;
