import member1 from "../../assets/member 1.jpg";
import member2 from "../../assets/member 2.jpg";
import member3 from "../../assets/member 3.jpg";
import member4 from "../../assets/member 4.jpg";
import member5 from "../../assets/member 5.jpg";
import member6 from "../../assets/member 6.jpg";
import member7 from "../../assets/member 7.jpg";
import member8 from "../../assets/member 8.jpg";
import member9 from "../../assets/member 9.jpg";
import member10 from "../../assets/member 10.jpg";
import member11 from "../../assets/member11.jpg";
import'./leadership.css'
import { BsFacebook, BsLinkedin ,BsTwitter} from "react-icons/bs"; // Ensure correct import

function Leadershipsection({ MemberAvator, MemberName, title, text, FacebookIcon, LinkedinIcon,TwitterIcon }) {
  return (
    
    <div className="leaders-section-wrapper">
      <div className="leaders-details">
        <img src={MemberAvator} alt={MemberName} />
        <p className="leader-name">{MemberName}</p>
        <h4 className="leader-title">{title}</h4>
      </div>
      <p className="testimony-title">{text}</p>
      <div className="social-media-icons">
      {LinkedinIcon && <LinkedinIcon />}
        
        {TwitterIcon && <TwitterIcon />}{/* Render Instagram icon */}
        {FacebookIcon && <FacebookIcon />} 
      </div>
    </div>
   
  );
}

function Leadership() {
  return (
    <section>
      <div className="executives">
      <div className="patron-container">
        <Leadershipsection
          MemberAvator={member7}
          MemberName="Dr. John Ndia"
          title="Patron"
          text="I am Dr. John Ndia, a passionate advocate for technology and education with over 15 years of experience in the IT industry. My journey began as a software engineer, where I developed a keen interest in bridging the gap between technology and everyday life. As a mentor, I have dedicated my career to guiding aspiring tech enthusiasts, helping them navigate their professional paths. I believe in the power of community and collaboration to drive innovation, which is why I am proud to serve as the patron of the Tech Club. Together, we strive to cultivate a vibrant environment where creativity and technology thrive.Together, we’re not just learning technology; we’re shaping the future!





"
LinkedinIcon={BsLinkedin}
          TwitterIcon={BsTwitter} // Passing Instagram icon
          FacebookIcon={BsFacebook}  
        />
      </div>
      
      <div className="chair-container">
        <Leadershipsection
          MemberAvator={member4}
          MemberName="Victory Njeri"
          title="Chairperson"
          text="Hello, I'm Sarah Karanja, the Chairlady of the Tech Club, where I strive to cultivate a vibrant community of aspiring tech enthusiasts. With over ten years in software development and a passion for innovation, I aim to inspire and empower our members to push boundaries in technology. My journey has been shaped by a deep commitment to mentoring the next generation of leaders and fostering collaboration within the tech landscape. Together, we’re not just learning technology; we’re shaping the future!"
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter} // Passing Instagram icon
          FacebookIcon={BsFacebook}   // Passing icons again
         
        />
        </div>
      </div>
      
      <div className="leadership-wrapper">
      <div className="vice-container">
        <Leadershipsection
          MemberAvator={member9}
          MemberName="Allan Muhari"
          title="Vice Chairperson"
          text="Allan Muhari is a passionate tech enthusiast and the Vice President of the Tech Club, where he fosters innovation and collaboration among members. With a strong background in software development and a knack for problem-solving, he inspires others to explore new technologies. Allan believes in the power of teamwork and actively encourages discussions on emerging trends in the tech industry. Outside of club activities, he enjoys coding projects and sharing knowledge with fellow tech lovers."
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter} // Passing Instagram icon
         
         
        />
        
        <Leadershipsection
          MemberAvator={member1}
          MemberName="Bridget Gitonga"
          title="Secretary"
          text="My name is Bridget Gitonga, and I proudly serve as the secretary of our local tech club, where I facilitate communication and collaboration among our members. With a passion for technology and innovation, I help organize events and workshops that inspire and educate aspiring tech enthusiasts. My journey into the tech world began in high school, where I developed a keen interest in programming and web development. I believe in the power of technology to transform lives and communities."
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter} // Passing Instagram icon
            // Passing icons again
         
        />
        <Leadershipsection
          MemberAvator={member6}
          MemberName="Ruth Mutisya"
          title="Treasurer"
          text="My name is Ruth Mutisya, and I am the treasurer of our dynamic tech club. With a passion for technology and finance, I oversee our budget, ensuring that we allocate resources effectively for projects and events. My journey in tech began with coding workshops, where I discovered my love for problem-solving and collaboration. I am dedicated to empowering fellow members by fostering a culture of innovation and support. Through my role, I aim to bridge the gap between finance and technology, driving our club's success forward."
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter} // Passing Instagram icon
             // Passing icons again
         
        />
        </div>
        

      </div>
      <div className="other-leaders-1">
      <Leadershipsection
          MemberAvator={member3}
          MemberName="WebsterIfedha"
          title="CyberSecurity Lead"
          text="Webster Ifeedha is a dedicated cybersecurity expert and the current cybersecurity lead for the tech club. With over three years of experience in safeguarding digital infrastructure, Webster is passionate about developing innovative security solutions. . His goal is to educate others about the importance of cybersecurity ,"
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter}
          FacebookIcon={BsFacebook} // Passing Instagram icon
             // Passing icons again
         
        />
        <Leadershipsection
          MemberAvator={member5}
          MemberName="Manase Gunga"
          title="UI/UX Lead"
          text="Manase Gunga is a dedicated UI/UX designer for the tech club, passionate about creating intuitive and visually appealing interfaces. With a keen eye for detail, he focuses on enhancing user experiences across various digital platforms"
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter}
          FacebookIcon={BsFacebook} // Passing Instagram icon
             // Passing icons again
         
        />
        <Leadershipsection
          MemberAvator={member10}
          MemberName="Carolyne Githenduka"
          title="webdevelopment lead"
          text="My name is Ruth Mutisya, and I am the treasurer of our dynamic tech club. With a passion for technology and finance, I oversee our budget, ensuring that we allocate resources effectively for projects and events. My journey in tech began with coding workshops, where I discovered my love for problem-solving and collaboration. I am dedicated to empowering fellow members by fostering a culture of innovation and support. Through my role, I aim to bridge the gap between finance and technology, driving our club's success forward."
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter} 
          FacebookIcon={BsFacebook}// Passing Instagram icon
             // Passing icons again
          
        />
        </div>
        <div className="other-leaders-2">
        <Leadershipsection
          MemberAvator={member8}
          MemberName="Stanley Amunze"
          title="Mobile app development Lead"
          text="My name is Ruth Mutisya, and I am the treasurer of our dynamic tech club. With a passion for technology and finance, I oversee our budget, ensuring that we allocate resources effectively for projects and events. My journey in tech began with coding workshops, where I discovered my love for problem-solving and collaboration. I am dedicated to empowering fellow members by fostering a culture of innovation and support. Through my role, I aim to bridge the gap between finance and technology, driving our club's success forward."
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter} 
          FacebookIcon={BsFacebook}// Passing Instagram icon
             // Passing icons again
         
        />
        <Leadershipsection
          MemberAvator={member11}
          MemberName="Paul Karanja"
          title="Cloud Engineering lead"
          text="My name is Ruth Mutisya, and I am the treasurer of our dynamic tech club. With a passion for technology and finance, I oversee our budget, ensuring that we allocate resources effectively for projects and events. My journey in tech began with coding workshops, where I discovered my love for problem-solving and collaboration. I am dedicated to empowering fellow members by fostering a culture of innovation and support. Through my role, I aim to bridge the gap between finance and technology, driving our club's success forward."
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter}
          FacebookIcon={BsFacebook} // Passing Instagram icon
             // Passing icons again
         
        />
        <Leadershipsection
          MemberAvator={member2}
          MemberName="Evyonn Mbithe"
          title="Power Platform Lead"
          text="My name is Ruth Mutisya, and I am the treasurer of our dynamic tech club. With a passion for technology and finance, I oversee our budget, ensuring that we allocate resources effectively for projects and events. My journey in tech began with coding workshops, where I discovered my love for problem-solving and collaboration. I am dedicated to empowering fellow members by fostering a culture of innovation and support. Through my role, I aim to bridge the gap between finance and technology, driving our club's success forward."
          LinkedinIcon={BsLinkedin}
          
          TwitterIcon={BsTwitter}
          FacebookIcon={BsFacebook} // Passing Instagram icon
             // Passing icons again
         
        />
      </div>
      
    </section>
  );
}

export default Leadership;
