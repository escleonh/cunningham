import './Footer.css';
import facebookIcon from './facebook.png';
const Footer = () => {
    return ( 
    <footer>
        <p>Cunningham's Lawn and Landscaping</p>
        <a href="tel:4799705075">(479) 970-5075</a>        <p>Email@gmail.com</p>
        <div className="socialMedia">
        <a href="https://m.facebook.com/Cunninghams-Lawn-and-Landscaping-667926700332182/?tsid=0.5015142473219268&source=result"><img src={facebookIcon} alt="" width="20"/></a>
        </div>
    </footer> );
}
 
export default Footer;