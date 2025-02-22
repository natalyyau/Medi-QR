import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Assessment from "./pages/assessment";
import Results from "./pages/results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;



