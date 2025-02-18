import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import History from "./routes/History";
import Movies from "./routes/Movies";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/history" element={ <History /> } />
        <Route path="/Movies" element={ <Movies /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;