import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "../JSX/Dashboard.jsx";
import Login from "../JSX/login.jsx";
import Root from "./components/Root";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Login CheckLogin={this.CheckLogin.bind(this)} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
