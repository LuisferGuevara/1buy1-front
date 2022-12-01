import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Comparator, Login } from "./pages/index";

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path="/comparator" element={<Comparator/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;
