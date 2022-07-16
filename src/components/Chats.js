import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../components/Firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const History = useHistory();
  const { user } = useAuth();
  console.log(user);
  const handlerLogout = async () => {
    await auth.signOut();
    History.push("/");
  };
  return (
    <div className="chats-page">
      <div id="nav-bar">
        <div className="logo-tab">MTchat</div>
        <div className="logout-tab" onClick={handlerLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="100vh"
        userName="MahdiTaremi"
        userSecret="1234"
        projectID="b9f7c556-9c53-4faf-ab7b-f8b4ef016caa"
      />
    </div>
  );
};

export default Chats;
