import styles from './title.module.css'
import back from '../public/images/Ellipse.svg'
import Image from 'next/dist/client/image'

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
                            A web designer/developer
                        </p>
                        <input className="btnWork" id="btnWork" type="button" value="My work"></input>
                        <input className="btnContact" id="btnContact" type="button" value="Say hello"></input>
                    </div>
                </div>
            </div>
            <div  className="col-7">
                <div className={styles.svg}>
                <Image  src={back} height={438} width={438} />
                </div>
            </div>
        </div>
    </div>
    )
}