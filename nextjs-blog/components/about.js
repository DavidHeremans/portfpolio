import me  from "../public/images/photos_site/me.jpg";
import Image from "next/image";
import style  from "./about.module.css";


export default function About(){
    return(
        <div className=" section" id="about">
        <div className="row">
            <div className="col-3 section-title">
                <h2>About Me</h2>
            </div>

            <div className="col-5">
                <div className={style.image_container}>
                <Image src={me} alt="Me in the Ardennes" className={style.img}></Image>
                </div>
                <p>I’m 23 years old and live in the city of Leuven, Belgium.</p>
                <p>In my free time I like to watch / play football. I support my local club OHL every time they play.
                </p>
            </div>

            <div className="col-4 educ">
                <h3 className="section-subtitle">Education</h3>
                <div className="edu-school">
                <p className="school">Erasmus University College</p>
                <p className="place">Brussels</p>
                <p>Bachelor in Mulitmedia &
                    Communicationtechnology</p>
                </div>
                <br></br>
                <div className="edu-school">
                <p className="school">UCLL</p>
                <p className="place">Leuven</p>
                <p>Bachelor management &
                    entrepreneurship</p>
                </div>
            </div>
        </div>
    </div>
    )
}