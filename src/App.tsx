import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./home/About";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/firebase" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
