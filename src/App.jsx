import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import { Comparator } from "./pages/index";

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path="/comparator" element={<Comparator/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
