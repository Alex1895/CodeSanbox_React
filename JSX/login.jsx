import React from "react";
import ReactDom from "react-dom";

let mylogin = props => {
  return (
    <div id="container">
      <form>
        <label for="name">User name: </label>
        <input type="name" id="text_usuer" placeholder="user" required />
        <br />
        <br />
        <label for="username">Password: </label>
        <input
          type="password"
          id="text_password"
          placeholder="password"
          required
        />
        <p>
          <a href="#">Forgot your password?</a>
        </p>

        <div id="lower">
          <input type="checkbox" />
          <label class="check" for="checkbox">
            Keep me logged in
          </label>
          <br /> <br />
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};
export default mylogin;
