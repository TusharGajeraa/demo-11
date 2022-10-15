import React, { useEffect, useState } from "react";
import "./player.css";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

// import { Container } from './styles';

function Player() {
  const [character, setchar] = useState([]);

  useEffect(() => {
    axios
      .get(
        "",
        {
          headers: {
            jwt_token: `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyLCJ0aW1lIjoiTW9uIFNlcCAwNSAyMDIyIDA1OjM2OjEyIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJpYXQiOjE2NjIzNTYxNzJ9.u9Nev9HwopN13ZUeZEZEHGTj38BGMyE7SjOZet8rEgA"}`,
          },
        }
      )
      .then(function (res) {
        // handle success
        // setchar(res.data.results);
        console.warn(res.data.data.event_settings);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="navbar">
            <div className="wrapper">
              <b>Player</b>
              <PersonIcon style={{ marginLeft: "770px" }} />{" "}
              <h4 style={{ marginLeft: "5px" }}> admin </h4>
            </div>
          </div>
          <div className="css9090">
          <div className="css9019">
            <input type="search" placeholder="Search By Email"></input>
            <button className="css9091">  
              <SearchIcon />
            </button>
          </div>
          </div>
          <div>
            <table className="css12">
              <thead>
                <tr>
                  <th className="css23">
                    <small>ID</small>
                  </th>
                  <th className="css23">
                    <small>USERNAME</small>
                  </th>
                  <th className="css23">
                    <small>EMAIL</small>
                  </th>
                  <th className="css23">
                    <small>BIRTHDATE</small>
                  </th>
                  <th className="css23">
                    <small>LIVES</small>
                  </th>
                  <th className="css23">
                    <small>ACTION</small>
                  </th>
                  <th className="css23"></th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>

            {/* <ul className="pagination">
              <li>
                <a>
                  <button>prev</button>
                </a>
              </li>
              <li className="active">
                <a>
                  <button>1</button>
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
