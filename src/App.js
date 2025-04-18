import "./styles.css";
import HomePage from "./page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
