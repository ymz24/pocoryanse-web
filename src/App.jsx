import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import History from "./routes/History";
import Movies from "./routes/Movies";
import Members from "./routes/Members";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/history" element={ <History /> } />
        <Route path="/Movies" element={ <Movies /> } />
        <Route path="/Members" element={ <Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;