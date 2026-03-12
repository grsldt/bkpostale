import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Maintenance from "./pages/Maintenance"; // <--- AJOUTE CETTE LIGNE IMPÉRATIVEMENT
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          {/* Les routes suivantes renvoient vers Home ou Maintenance selon ton choix */}
          <Route path="/comptes/*" element={<Home />} />
          <Route path="/epargne/*" element={<Home />} />
          <Route path="/credits/*" element={<Home />} />
          <Route path="/assurances/*" element={<Home />} />
          <Route path="/mag/*" element={<Home />} />
          <Route path="/solutions/*" element={<Home />} />
          
          {/* La page de maintenance vers laquelle Login.jsx redirige */}
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;