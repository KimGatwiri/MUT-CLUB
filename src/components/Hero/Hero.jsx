import "./Hero.css";
import heroImage from "../../assets/hero.jpg";
function HeroSection() {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="Mut-club" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-text">welcome to MUTC</h1>
        <h4 className="hero-paragraph">where every opinion counts</h4>
        <div className="button-styles">
          <button className="hero-button">Join Us</button>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
