import "./Hero.css";
import heroImage from "../../assets/hero.jpg";

import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="image-hero-div">
      <img src={heroImage} alt="Mut-club" className="hero-image" />
      <div className="overly-darkened"></div>
      <div className="hero-content">
        <h1 className="hero-text">welcome to MUTC</h1>
        <h4 className="hero-paragraph">where every opinion counts</h4>
        <div className="button-styles">
        <Link to="/RegistrationForm" >
         <button class="hero-button">Join Us</button>
         </Link>

        </div>
      </div>
      </div>
    </section>
  );
}
export default HeroSection;
