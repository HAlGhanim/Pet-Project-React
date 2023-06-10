import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import About from "./pages/About";
import Info from "./pages/Info";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets/:petId" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
