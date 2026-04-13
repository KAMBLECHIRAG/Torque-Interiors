import "./App.css";
import Navbar from "./Components/navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import Footer from "./Components/footer";
import PortfolioHeader from "./Projects/projectsHome";
import Services from "./Services/services";
import ContactUsPage from "./contact";
import AboutUs from "./aboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolioHeader" element={<PortfolioHeader />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUsPage" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
