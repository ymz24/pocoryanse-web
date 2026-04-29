import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import History from "./routes/History";
import Movies from "./routes/Movies";
import HotSprings from "./routes/HotSprings";
import Ramen from "./routes/Ramen";
import Others from "./routes/Others";
import RankingRegister from "./routes/RankingRegister";
import RamenRegister from "./routes/RamenRegister";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/history" element={ <History /> } />
        <Route path="/Movies" element={ <Movies /> } />
        <Route path="/HotSprings" element={ <HotSprings /> } />
        <Route path="/Ramen" element={ <Ramen /> } />
        <Route path="/others" element={ <Others /> } />
        <Route path="/RankingRegister" element={ <RankingRegister /> } />
        <Route path="/RamenRegister" element={ <RamenRegister /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;