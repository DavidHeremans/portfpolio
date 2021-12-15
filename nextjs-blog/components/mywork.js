import styles from './mywork.module.css';
import Relotrust from '../public/images/relotrust_website.PNG'
import Image from 'next/dist/client/image';

export default function MyWork(props) {
    return (
        <div className="section" id="work">
                            <h2>My work</h2>

            <div className="row">
                <div className="col-lg-4 col-sm-12 content">
                    <Image src={Relotrust} alt="Website Relotrust"></Image>
                    <p className="project_title">www.relotrust.com</p>
                    <p>I designed and developed the website of Relotrust. Made in Angular.</p>

                </div>
            </div>
        </div>
    )
}
