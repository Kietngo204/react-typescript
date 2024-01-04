import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./home/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
