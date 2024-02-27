import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../components/Home/Home";

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate, isAuth]);

  return <Home />;
};

export default HomePage;
