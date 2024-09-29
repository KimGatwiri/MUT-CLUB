import './Tracks.css'
import Tracksimage from "../../assets/tracksimg.jpg";

import { FaShieldAlt,FaPencilAlt ,FaHtml5,FaMobileAlt,FaCloud} from "react-icons/fa";
    
function Trackssection({ShieldAltIcon,PencilAltIcon,Html5Icon,MobileAltIcon,CloudIcon,title,text}){
  return(
<div className="tracks-wrapper">
  <div className='ttitle'>
{ShieldAltIcon && <ShieldAltIcon />}
{PencilAltIcon && <PencilAltIconIcon />}
{Html5Icon && <Html5IconIcon />}
{MobileAltIcon && <MobileAltIcon />}
{MobileAltIcon && <MobileAltIcon />}



  <h3 className="trackstitle">{title}</h3>
  </div>
  <p className="tracksdetails">{text}</p>
</div>
  )
}
function Tracks(){
return(
 
  <div className="tracks-section-wrapper">
    <h1 class="h1-class">Our Tracks</h1>
    <img src={Tracksimage }class="tracks-image"></img>
    <div className="tracks-container">
  <Trackssection
  ShieldAltIcon={FaShieldAlt}
  title="CyberSecurity"
  text="Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks."

    // Passing icons again
 
/>

</div>
<div className="tracks-container">
<Trackssection
  ShieldAltIcon={FaPencilAlt}
  title="UI/UX"
  text="Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications."
    // Passing icons again
 
/>
</div>
<div className="tracks-container">
<Trackssection
  ShieldAltIcon={FaHtml5}
  title="WebDevelopment"
  text="Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."

    // Passing icons again
 
/>
</div>
<div className="tracks-container">
<Trackssection
  ShieldAltIcon={FaMobileAlt}
  title="Mobile App Development"
  text="Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."

    // Passing icons again
 
/>
</div>
<div className="tracks-container">
<Trackssection
  ShieldAltIcon={FaCloud}
  title="Cloud Engineering"
  text="Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks."

    // Passing icons again
 
/>
</div>
<div className="tracks-container">
<Trackssection
  ShieldAltIcon={FaMobileAlt}
  title="PowerPlatform"
  text="Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, students will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency."

    // Passing icons again
 
/>
</div>
<div className="h4-text">
<h4>Fill This Form to join us</h4>
</div>

</div>

)
}
        
    

export default Tracks;