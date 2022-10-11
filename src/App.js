import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AstgTest from "./Pages/AstgTest/AstgTest";
import DichotomyTest from "./Pages/DichotomyTest/DichotomyTest";

function App() {
	return (
		<div className="App">
			<Router>
				{/* Home page */}
				<Routes>
					<Route exact path="/" element={<Home />} />

					{/* ASTG test page */}
					<Route path={"/astg"} element={<AstgTest />} />

					{/* DICHOTOMY test page */}
					<Route path={"/dichotomy"} element={<DichotomyTest />} />

					{/* TODO: to add 404-Comp */}
					<Route path="*" element={<h2>404 - אין דף כזה באתר שלנו</h2>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
