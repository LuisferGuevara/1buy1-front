import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Comparator, Login, Register } from "./pages/index";
import Navbar from "./components/Header/Navbar";




function App() {
  return (
    <div className="app">
  <Navbar/>
    {/* <Header></Header> */}
    <Routes>
      <Route path="/comparator" element={<Comparator/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
