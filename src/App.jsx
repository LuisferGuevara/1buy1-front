import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import { Comparator, Login, Register } from "./pages/index";

function App() {
  return (
    <div className="app">
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
