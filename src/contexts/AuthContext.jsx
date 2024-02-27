import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const initialAuth =
  localStorage.getItem("isAuth") != null
    ? localStorage.getItem("isAuth") === "true"
    : false;

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialAuth);

  const loginHandler = () => setIsAuth(true);
  const logoutHandler = () => setIsAuth(false);

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
