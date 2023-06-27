import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Conatct from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import "./App.css";
import Footer from "./Footer";
import Name from "./Name";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/name" Component={Name} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Conatct} />
        <Route exact path="/service" Component={Service} />
      </Routes>
      <br />
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
};

export default App;
