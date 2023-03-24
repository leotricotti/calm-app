import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Payers from "./pages/Payers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payers" element={<Payers />} />
    </Routes>
  );
}

export default App;
