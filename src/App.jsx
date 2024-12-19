import React from "react";
import Heading from "./Heading";
import Emojipedia from "./Emojipedia";
import "./App.css";

function App() {
  return (
    <>
      <Heading />
      <dl className="dictionary">
      <Emojipedia />
      </dl>
    </>
  );
}

export default App;
