import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Payers from "./pages/Payers";
import Providers from "./pages/Providers";
import Press from "./pages/Press";
import Inquire from "./pages/Inquire";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/payers" element={<Payers />} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/press" element={<Press />} />
      <Route path="/inquire" element={<Inquire />} />
    </Routes>
  );
}

export default App;
