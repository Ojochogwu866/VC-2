import Hero from "./Hero"
import Services from "./services"
import About from "./about"

const Home = () => {

  return (
  <section className=' flex flex-col'>
    <Hero/>
    <Services/>
    <About/>
  </section>
  )
}
export default Home