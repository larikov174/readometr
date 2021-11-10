import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
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
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
      </nav>
      <Footer />
    </div>
  );
}

export default App;
