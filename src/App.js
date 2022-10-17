import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AstgTest from "./Pages/AstgTest/AstgTest";
import DichotomyTest from "./Pages/DichotomyTest/DichotomyTest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Home page */}
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* ASTG test page */}
          <Route exact path="/astg" element={<AstgTest />} />

          {/* DICHOTOMY test page */}
          <Route exact path="/dichotomy" element={<DichotomyTest />} />

          {/* TODO: to add 404-Comp */}
          <Route exact path="*" element={<h2>404 - אין דף כזה באתר שלנו</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
