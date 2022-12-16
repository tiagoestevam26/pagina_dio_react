import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
//import { Teste } from "./pages/estudoHooks";     <Route path="/teste" element={<Teste />} />

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
