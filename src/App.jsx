import HomePage from "./HomePage"
import './Style.css'
import Footer from "./components/Footer"
import ContactPage from "./pages/ContactPage"
import Testimonals from "./pages/Testimonials"
import TrainingsPage from "./pages/TrainingsPage"
import WorkshopsPage from "./pages/WorkshopsPage"

function App() {
 
  return (
    <>
      <HomePage />
      <TrainingsPage />
      <WorkshopsPage />
      <Testimonals />
      <ContactPage />
      <Footer />
    </>
  )
}

export default App
