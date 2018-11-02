import React from "react";
import ReactDom from "react-dom";
let RegisterUser = () => {
  return (
    <div>
      <p>User Name</p>
      <input id="i1" type="text" required placeholder="User Name" />
      <p>Mail</p>
      <input id="i2" type="mail" required placeholder="Mail @" />
      <p>Password</p>
      <input id="i2" type="password" required placeholder="Password" />
      <button id="button" onClick={this.onclick_send.bind(this)}>
        Registrar
      </button>
    </div>
  );
};
export default RegisterUser;
