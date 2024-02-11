import Hero from "./Hero"
import Services from "./services"
import About from "./about"
import Stories from './stories'
import Appointment from "./appointment"
const Home = () => {

  return (
  <section className=' flex flex-col'>
    <Hero/>
    <Services/>
    <About/>
    <Stories/>
    <Appointment/>
  </section>
  )
}
export default Home