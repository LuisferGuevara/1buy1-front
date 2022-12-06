import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import { Comparator, Home, Login, Register } from "./pages/index";
import Navbar from "./components/Header/Navbar";
import { checkSession } from "./redux/Auth/auth.functions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Profile from "./pages/Profile";
import CompraEficiente from "./pages/CompraEficiente";
import AboutUs from "./pages/AboutUs";




function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && checkSession(token, navigate, dispatch);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/comparator" element={<Comparator/>} />
      <Route path="/cart" element={<CompraEficiente/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/aboutUs" element={<AboutUs/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
