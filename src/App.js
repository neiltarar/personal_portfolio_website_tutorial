import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/NavBar";
import HomePage from "./components/Pages/HomePage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import ContactPage from "./components/Pages/ContactPage";
import AboutPage from "./components/Pages/About";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/portfolio' element={<PortfolioPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</Router>
	);
}

export default App;
