import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import "./notification.css";

// import { Container } from './styles';

function Notification() {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="navbar">
            <div className="wrapper">
              <b>Notification</b>
              <PersonIcon style={{ marginLeft: "770px" }} />{" "}
              <h4 style={{ marginLeft: "5px" }}> admin </h4>
            </div>
          </div>
          <div role="group" className="css5656">
            <input name="title" type="text" placeholder="Enter Title" className="css5757" value="" />
            <br />
            <textarea name="description" type="text" placeholder="Enter Description" className="css5858">
            </textarea><br />
            <button  type="submit" className="css5959">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
