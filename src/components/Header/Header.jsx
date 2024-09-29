import  "./header.css";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div className="header-wrapper">
            <div className="logo">
            MUT_CLUB
        </div>
       
<ol className="navigation-links">
<li><Link to="/">home</Link></li>

<li><Link to="/Leadership" className="navigation-links">leadership</Link></li>
<li><Link to="/Tracks" className="navigation-links">Tracks</Link></li>
<li><Link to="/Events" className="navigation-links">Events</Link></li>
</ol>
</div>

    )
}

function Header(){
    return(
       <header>
        <Navigation />
       
       </header>
    )
}
export default Header;