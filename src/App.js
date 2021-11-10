import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import { Main } from "./components/main/Main";
import { Countdown } from "./components/countdown/Countdown";
import { Book } from "./components/book/Book";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route  path="/" element={<Main />} />
        <Route  path="countdown" element={<Countdown />} />
        <Route  path="book" element={<Book />} />
        <Route  path="/*" element={<Main />} />
      </Routes>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
