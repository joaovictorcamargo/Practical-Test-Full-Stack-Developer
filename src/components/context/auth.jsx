import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { createSession, api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  console.log("error", error);

  const notifyFail = (message) => toast(message);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async (user, password) => {
    try {
      const response = await createSession(user, password);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      if (password) {
        setUser(response.data.user);
      }

      navigate("/");
    } catch (error) {
      notifyFail(error.response.data.error);
    }
  };

  const logout = () => {
    navigate("/");
    setUser(null);
    api.defaults.headers.Authorization = null;
    localStorage.removeItem("user");
    localStorage.removeitem("token");
  };
  return (
    <>
      <ToastContainer />
      <AuthContext.Provider
        value={{ authenticated: !!user, user, loading, login, logout }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
