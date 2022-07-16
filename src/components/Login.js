import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import firebase from "firebase/app";
import { auth } from "./Firebase";
const Login = () => {
  return (
    <div id="login-chat">
      <div id="login-chat_caed">
        <h3>Welcome to MTchat</h3>
        <hr />
        <div
          className="login-btn google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sing In with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
