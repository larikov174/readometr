import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { Main } from "./components/main/Main";
import { Countdown } from "./components/countdown/Countdown";
import { Book } from "./components/book/Book";
import { About } from "./components/about/About";
import { Guide } from "./components/guide/Guide";
import { Results } from "./components/results/Results";
import { Feedback } from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="countdown" element={<Countdown />} />
        <Route path="book" element={<Book />} />
        <Route path="about" element={<About />} />
        <Route path="guide" element={<Guide />} />
        <Route path="results" element={<Results />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
