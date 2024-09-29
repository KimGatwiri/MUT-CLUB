
import Title from "../Title/Title";
import './testimonials.css'
;
import member1 from "../../assets/member 1.jpg"
import member2 from "../../assets/member 2.jpg"
import member3 from "../../assets/member 3.jpg"

function Testimoniessection({MemberAvator,MemberName,title,text}){
    return(
    <div className="testimonialcard">
        <div className="testimonialcarddetails">
            <img src={MemberAvator}   alt={MemberName}/>
            <h4 className="testimonialcardname">{MemberName}</h4>
                 </div>
                 <h4 className="testimony-title">{title}</h4>
                 <p className="testimonytitle">{text}</p>

    </div>
    );
}

    function Testimonies(){
        return(
            <section>
                <div className="testimonies-wrapper">
                <div className="testimoniescontainer">
                    <Testimoniessection
                       MemberAvator={member1}
                       MemberName="Mellisa  Adams"
                       title="Member"       
                       text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim nulla vero, atque, omnis nemo aut accusamus possimus quos ipsa dolores consequuntur. Hic dignissimos dolore mollitia consectetur! Perferendis, iure numquam"
                    />
                </div>
                <div className="testimoniescontainer">
                    <Testimoniessection
                       MemberAvator={member2}
                       MemberName="Breana Wanjiru"
                       title="Member"       
                       text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim nulla vero, atque, omnis nemo aut accusamus possimus quos ipsa dolores consequuntur. Hic dignissimos dolore mollitia consectetur! Perferendis, iure numquam"
                    />
                </div>
                <div className="testimoniescontainer">
                    <Testimoniessection
                       MemberAvator={member3}
                       MemberName="Scotts Mwenda"
                       title="Member"       
                       text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim nulla vero, atque, omnis nemo aut accusamus possimus quos ipsa dolores consequuntur. Hic dignissimos dolore mollitia consectetur! Perferendis, iure numquam"
                    />
                </div>
                </div>
                
            </section>
        )


    }




export default Testimonies;