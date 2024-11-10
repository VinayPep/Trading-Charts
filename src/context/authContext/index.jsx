import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const authData = localStorage.getItem("authData");
    if (authData) {
      const { user: storedUser, expiresAt } = JSON.parse(authData);

      if (Date.now() < expiresAt) {
        setUser(storedUser);
      } else {
        localStorage.removeItem("authData");
      }
    }
    setLoading(false);
  }, []);

  const login = (response) => {
    const { profileObj, tokenObj } = response;
    const authData = {
      user: profileObj,
      expiresAt: tokenObj.expires_at
    };

    localStorage.setItem("authData", JSON.stringify(authData));
    setUser(profileObj);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("authData");
    setUser(null);
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;
