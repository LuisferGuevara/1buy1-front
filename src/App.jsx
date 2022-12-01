import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Comparator } from "./pages/index";

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path="/comparator" element={<Comparator/>} />
    </Routes>
    </div>
  );
}

export default App;
