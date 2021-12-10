import  styles  from './mywork.module.css';
import Relotrust from '../public/images/relotrust_website.PNG'
import Image from 'next/dist/client/image';


export default function MyWork (props){
    return(
    <div className=" section" id="work">
    <div className="row">
    <h2>My work</h2>
        <div className="col-5">
        
          <Image 
          src={Relotrust} 
          alt="Website Relotrust"></Image>
            <p className="project_title">www.relotrust.com</p>
            <p>I designed and developed the 
                website of Relotrust. Made in 
                Angular.</p>
           
            
        </div>
    </div>
</div>
)
}
