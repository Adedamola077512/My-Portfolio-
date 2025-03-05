
import './App.css'
import Navbar from './Compornent/CustomNavbar'
import Header from './Compornent/Header'
import Project from './Compornent/Project'
// // import Education from './Compornent/Education'
import Service from './Compornent/Service'
import Testimonial from './Compornent/Testimonial'
import Contact from './Compornent/Contact'
import Footer from './Compornent/Footer'
function App() {

  return (
    <>
    <Navbar />
    <Header />
    <Project />
    {/* <Education /> */}
    <Service />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  )
}

export default App
