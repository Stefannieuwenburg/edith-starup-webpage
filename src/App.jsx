import HomePage from "./HomePage"
import './Style.css'
import Footer from "./components/Footer"
import ContactPage from "./pages/ContactPage"
import ServicePage from "./pages/ServicePage"
import Testimonals from "./pages/Testimonials"
import TrainingsPage from "./pages/TrainingsPage"
import WorkshopsPage from "./pages/WorkshopsPage"
import ZakelijkeBeslissingenPage from "./pages/ZakelijkeBeslissingenPage"
import PersoonlijkPage from "./pages/PersoonlijkPage"
import EenOpEenPage from "./pages/EenOpEenPage"

function App() {
 
  return (
    <>
      <HomePage />
      <TrainingsPage />
      <ServicePage />
      <WorkshopsPage />
      <ZakelijkeBeslissingenPage />
      <PersoonlijkPage />
      <EenOpEenPage />
      <Testimonals />
      <ContactPage />
      <Footer />
    </>
  )
}

export default App
