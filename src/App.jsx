import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './Style.css';
import Footer from "./components/Footer";

// Lazy-loaded pages
const HomePage = lazy(() => import("./HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Testimonals = lazy(() => import("./pages/Testimonials"));
const TrainingsPage = lazy(() => import("./pages/TrainingsPage"));
const WorkshopsPage = lazy(() => import("./pages/WorkshopsPage"));
const ZakelijkeBeslissingenPage = lazy(() => import("./pages/ZakelijkeBeslissingenPage"));
const PersoonlijkPage = lazy(() => import("./pages/PersoonlijkPage"));
const EenOpEenPage = lazy(() => import("./pages/EenOpEenPage"));
const OverEdith = lazy(() => import("./pages/OverEdith"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/over-edith" element={<OverEdith />} />
          <Route path="/trainingen" element={<TrainingsPage />} />
          <Route path="/diensten" element={<ServicePage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/zakelijke-beslissingen" element={<ZakelijkeBeslissingenPage />} />
          <Route path="/persoonlijk" element={<PersoonlijkPage />} />
          <Route path="/een-op-een" element={<EenOpEenPage />} />
          <Route path="/testimonials" element={<Testimonals />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;