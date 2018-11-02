import React from "react";
import ReactDom from "react-dom";

let ForgetPassword = () => {
  return (
    <form>
      <div>
        <p>User</p>
        <input id="text_user" type="text" required placeholder="user name" />
        <p> New Password</p>
        <input id="text_pass" type="password" required placeholder="password" />
        <p> Confirme Password</p>
        <input id="text_pass" type="password" required placeholder="password" />
        <br /> <br />
        <button id="button" onClick={this.onclick_send.bind(this)}>
          send
        </button>
        <button id="button" onClick={this.onClear.bind(this)}>
          clear
        </button>
      </div>
    </form>
  );
};
export default ForgetPassword;
