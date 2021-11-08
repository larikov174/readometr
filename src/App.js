import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import { Main } from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/empty" element={ <div>EMPTY PAGE</div> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
