import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Resume from "./components/Resume";
import Parallax from "./components/Parallax";
import Bs from "./components/Bs";
import Fs from "./components/Fs";

function App() {
  return (
    <div className="App">
      <Parallax />
      <Header />
      <Resume />
      <Modal />
      <Bs />
      <Fs />
    </div>
  );
}

export default App;