import styles from './title.module.css'
import bg from "../public/images/background_site.jpg";
import Image from 'next/dist/client/image';

export default function Title (props){
    return(
        <div className="container section" className={styles.title} id="home">
        <div className="row">

            <div className="col-5">
                <div className={styles.vertical_center}>
                    <h1 className={styles.h1}>
                        David Heremans
                    </h1>
                    <div className={styles.sub_title}>

                        <p>
                            A web designer/web developer
                        </p>
                        <input className="btnWork" id="btnWork" type="button" value="My work"></input>
                        <input className="btnContact" id="btnContact" type="button" value="Say hello"></input>
                    </div>
                </div>
            </div>
            <div  className="col-7">
                <Image src={bg} alt='background image'  className={styles.bg_home} ></Image>
            </div>
        </div>
    </div>
    )
}