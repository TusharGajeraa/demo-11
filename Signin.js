import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin.css";

// import { Container } from './styles';

function Signin() {
  // const [email, setEmail, password, setPassword] = useState({
  //   email: "",
  //   password: " ",
  // });
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent page refresh

    //  access input values here
    //  console.log("email ", email);
    //  console.log("password ", password);
    //  console.log({ email, password });

    axios
      .post("https://admin.knowitallquiz.co.uk:3000/admin/adminLogin", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result, "result");
        // alert("Login successfull");
        navigate("Home");

        if (result != null) {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("user", JSON.stringify(result.data));
        }
      })
      .catch((error) => {
        alert("Envalid userName or Password");
        console.log(error);
        // console.log("email",email);
        // console.log({email,pasasword});
        // console.log("password",pssword);
      });

    //  clear all input values in the form
    setEmail("");
    setPassword("");
  };

  // Add a request interceptor

  axios.interceptors.request.use(
    function (config) {
      Object.assign(config.headers, { test: "2121" });
      console.log(config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor

  axios.interceptors.response.use(
    function (response) {
      Object.assign(response, {
        data: { data: response.data },
      });
      console.log(response);
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form h1">Admin Login Area!!!</h1>
        <p className="text css-vapw0r">
          Enter your email and password to sign in
        </p>
        <label> Email </label>
        <input
          className="email"
          id="Email"
          name="Email"
          type="text"
          style={{ color: "black", marginBottom: "15px" }}
          placeholder="Enter Your email address"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
        />
        <label> Password </label>
        <input
          className="password"
          id="password"
          name="password"
          type="text"
          style={{ color: "black" }}
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <button className="button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Signin;
