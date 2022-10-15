import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Widget from "./components/widget/Widget";
// import { Container } from './styles';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Home;
