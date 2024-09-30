import Title from "../Title/Title";
import "./about.css";
import aboutImage from "../../assets/about.jpg";

function AboutSection() {
  return (
    <section>
      <div className="about-content-wrapper">
        <div className="about-text">
          <h3> General Overview Of MutC</h3>

          <h4 className="about-text-title">Our Mission</h4>
          <p>
            To empower and inspire members through hands-on learning in
            technology, fostering creativity and collaboration in diverse fields
            while building a community for future innovators.{" "}
          </p>
          <h4 className="about-text-title">Our Vision</h4>
          <p>
            {" "}
            To empower individuals through innovative technology education,
            fostering a vibrant community of skilled leaders who drive positive
            change in the tech landscape
          </p>
          <h4 className="about-text-title">Core Values</h4>
          <p>
            Collaboration: We believe in the power of teamwork and actively
            encourage members to work together, share ideas, and support each
            other in achieving common goals. Innovation: We embrace creativity
            and strive for excellence by continually seeking new ideas,
            technologies, and methods to improve our learning experiences.
            Inclusivity: We value diversity and inclusiveness, welcoming members
            from all backgrounds and promoting an environment where everyone
            feels valued and respected. Continuous Learning: We are committed to
            lifelong learning, encouraging our members to develop new skills,
            expand their knowledge, and stay current in the ever-evolving tech
            landscape.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} className="about-section-image" />
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
