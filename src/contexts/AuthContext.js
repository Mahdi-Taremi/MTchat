import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Firebase from "../components/Firebase";
import React from "react";
import { auth } from "../components/Firebase";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const History = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if(user) History.push('/Chats')
    });
  }, [user, History]);
  const value = { user };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
