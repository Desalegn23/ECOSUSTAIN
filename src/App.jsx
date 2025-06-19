import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services.jsx";
import ServiceDetails from "./Pages/ServiceDetails.jsx";
import EcoFriendlyConsulting from "./Components/ServiceDetail/EcoFriendlyConsulting";
import GreenTechnologySolutions from "./Components/ServiceDetail/GreenTechnologySolutions";
import EnvironmentalImpactAssessments from "./Components/ServiceDetail/EnvironmentalImpactAssessments";
import IsoCertificationSupport from "./Components/ServiceDetail/ISOCertificationSupport";
import EsgIntegrationReporting from "./Components/ServiceDetail/ESGIntegrationReporting";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import BlogPage from "./Pages/Blog.jsx";
import BlogDetail from "./Pages/BlogDetail";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route
          path="/eco-friendly-consulting"
          element={<EcoFriendlyConsulting />}
        />
        <Route
          path="/green-technology-solutions"
          element={<GreenTechnologySolutions />}
        />
        <Route
          path="/environmental-impact-assessments"
          element={<EnvironmentalImpactAssessments />}
        />
        <Route
          path="/iso-certification-support"
          element={<IsoCertificationSupport />}
        />
        <Route
          path="/esg-integration-reporting"
          element={<EsgIntegrationReporting />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
