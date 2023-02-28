import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col h-screen bg-primary">
      <Navbar />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;