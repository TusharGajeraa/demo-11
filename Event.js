import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import "./event.css";
import axios from "axios";

// import { Container } from './styles';

function Events() {
  const [Character, setchar] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://admin.knowitallquiz.co.uk:3000/event/getAllEvents?page_number=0&data_per_page=5&sorting_order=1",
        {
          headers: {
            jwt_token: `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyLCJ0aW1lIjoiTW9uIFNlcCAwNSAyMDIyIDA1OjM2OjEyIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJpYXQiOjE2NjIzNTYxNzJ9.u9Nev9HwopN13ZUeZEZEHGTj38BGMyE7SjOZet8rEgA"}`,
          },
        }
      )
      .then(function (res) {
        // handle success
        // setchar(res.data.results);
        setchar(res.data.data.events);
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
              <b>Events</b>
              <PersonIcon style={{ marginLeft: "770px" }} />{" "}
              <h4 style={{ marginLeft: "5px" }}> admin </h4>
            </div>
          </div>
          <div className="css55">
            <button type="button" className="css56">
              Add 
           </button>
          </div>
          <table className="css51">
            <thead>
              <tr>
                <th className="css52">
                  <small>ID</small>
                </th>
                <th className="css52">
                  <small>TITLE</small>
                </th>
                <th className="css52">
                  <small>DESCRIPTION</small>
                </th>
                <th className="css52">
                  <small>DATE AND TIME</small>
                </th>
                <th className="css52">
                  <small>PRICE POT</small>
                </th>
                <th className="css52">
                  <small>STATUS</small>
                </th>
                <th className="css52">
                  <small>ACTION</small>
                </th>
                <th className="css52">
                  <small>DETAILS</small>
                </th>
              </tr>
            </thead>

            <tbody>
              {Character.map((item) => {
                return (
                  <>
                    <tr>
                      <td className="css53">
                        <small>{item.id}</small>
                      </td>
                      <td className="css53">
                        <small> {item.name} </small>
                      </td>
                      <td className="css53">
                        <small> {item.description} </small>
                      </td>
                      <td className="css53">
                        <small> {item.event_date_time} </small>
                      </td>
                      <td className="css53">
                        <small> {item.price_pot} </small>
                      </td>
                      <td className="css53">
                        <span className="css5355"> {item.status_label} </span>
                      </td>
                      <td className="css53">
                        <span className="css5353">Questions</span>
                      </td>
                      <td className="css53">
                        <span className="css5354">Detail</span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div className="paginationcss">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
