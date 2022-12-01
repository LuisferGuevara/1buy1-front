import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import { Comparator, Login, Register } from "./pages/index";


function App() {
  return (
    <div className="app">
    <Header></Header>
    <Routes>
      <Route path="/comparator" element={<Comparator/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;
