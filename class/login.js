import React from "react";
import ReactDOM from "react-dom";
import login from "../JSX/login.jsx";
import { Component } from "react-dom";
import { render } from "react-dom";
import Dashborad from "../JSX/Dashboard.jsx";
import "./styles.css";
class Login extends Component {
  CheckLogin(event) {
    let inputuser = document.getElementById("text_usuer").value;
    let inputpassword = document.getElementById("text_password").value;
    if (
      inputuser != this.state.perosna.user ||
      inputpassword != this.state.perosna.password
    ) {
      alert("user or password incorrect please try again");
    } else {
      alert("Welcome to myApplication");
      //return {<Dashborad />};
    }
  }
  render() {
    return (
      <div>
        <Dashborad />
      </div>
    );
  }
}
export default Login;
