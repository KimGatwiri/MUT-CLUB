import HeroSection from "../../components/Hero/Hero"
import AboutSection from "../../components/About/About"
import Testimonies from "../../components/Testimonials/Testimonials"
import Title from "../../components/Title/Title"

function Home()
{
return(
    <>
    
     <HeroSection />
     <Title text="About-Us" />
     <AboutSection />
     <Title text="Testimonials" />
     <Testimonies />
   </>
)
}
export default Home;