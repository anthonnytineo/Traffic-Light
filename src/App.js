import React, { useState } from 'react';
import './App.css';

function App() {

  const [selectColor, setselectcolor] = useState ("");

  return (
    <div className="container">
        <div className="row">
          <div className="col-3">""""""""""</div>
          <div className="intubo col-4">.<br/><br/><br/></div>
          <div className="col-3">""</div>
        </div>
      <div className="home">
        <div onClick={() => setselectcolor ("red")} 
          className={"light red" + (selectColor === "red" ? " glow" : "")}></div>
        <div onClick={() => setselectcolor ("yellow")}
          className={"light yellow" + (selectColor === "yellow" ? " glow" : "")}></div>
        <div onClick={() => setselectcolor ("green")}
          className={"light green" + (selectColor === "green" ? " glow" : "")}></div>
      </div>
    </div>
  );
}

export default App;
