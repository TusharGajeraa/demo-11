import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import "./charity.css";

// import { Container } from './styles';

function Charity() {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="navbar">
            <div className="wrapper">
              <b>Charity</b>
              <PersonIcon style={{ marginLeft: "770px" }} />{" "}
              <h4 style={{ marginLeft: "5px" }}> admin </h4>
            </div>
          </div>
          <div className="css7171">
            <div className="css7272">
              <div className="css7373"></div>
              <div className="css7373">
                <div className="css7474">
                  <select className="css7575">
                    <option value="January">January 2022</option>
                    <option value="Fabruary">Fabruary 2022</option>
                    <option value="March">March 2022</option>
                    <option value="April">April 2022</option>
                    <option value="May">May 2022</option>
                    <option value="June">June 2022</option>
                    <option value="July">July 2022</option>
                    <option value="August">August 2022</option>
                    <option value="September">September 2022</option>
                    <option value="Octomber">Octomber 2022</option>
                    <option value="November">November 2022</option>
                    <option value="December">December 2022</option>
                  </select>
                  <div className="css7676"></div>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="css7777">
                  <div className="css7878">
                    <div className="css7979">
                      <small>Amount</small>
                    </div>
                    <input
                      placeholder="Amount"
                      disabled=" "
                      className="css79797"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charity;


