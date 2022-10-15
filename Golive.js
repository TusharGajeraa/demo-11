import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import "./golive.css";

// import { Container } from './styles';

function Golive() {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="navbar">
            <div className="wrapper">
              <b>Golive</b>
              <PersonIcon style={{ marginLeft: "770px" }} />{" "}
              <h4 style={{ marginLeft: "5px" }}> admin </h4>
            </div>
          </div>
          <div className="css6161">
            <div className="css6262">
              <div className="css6363">GO LIVE FOR : #6325, Title</div>
            </div>
            <div className="css6464">
              <div className="css6565">
                <div className="css6666">
                  <button type="button" className="css6767">
                    Complete Event?
                  </button>
                  <br />
                </div>
                <div className="css6868">
                  <button
                    type="button"
                    class="css68681"
                  >
                    Camera
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    class="css68682"
                  >
                    Comments
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    class="css68683"
                  >
                    Question
                  </button>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Golive;
