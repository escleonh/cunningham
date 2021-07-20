import './Nav-bar.css';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  
    const handleMenuIconClick = (e)=>{
        let menuIcon = document.querySelectorAll('.iconLine');
        let slidebarmenu = document.querySelector('.slidebarmenu');
        let menuLines = [...menuIcon]
        slidebarmenu.classList.toggle('slidebar-show');
        document.body.classList.toggle('hidden');

        menuLines.forEach((element)=>{
            // console.log(element);
            element.classList.toggle('whiteMenuIcon');

        });
    };


    return <nav>
    <div className='mobileLeftNavCol'></div>
    <div>LOGO</div>
    <div className='mainMenu'>
    <ul >
        <li><Link to="#services" >Services</Link></li>
        <li><Link to="#ourWork">Our Work</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
    </ul>
    </div>
    <div className='quoteBtn'>
        <a href="#">Free Quote</a>
    </div>

    <div className="menuIcon" onClick={(e)=>handleMenuIconClick(e)}>
        <div className='iconLine'></div>
        <div className='iconLine'></div>
        <div className='iconLine'></div>
    </div>

    <div className='slidebarmenu'>
    <ul>
        <li onClick={(e)=>handleMenuIconClick(e)}><Link to="/" >Home</Link></li>
        <li onClick={(e)=>handleMenuIconClick(e)}><Link to="#services" >Services</Link></li>
        <li onClick={(e)=>handleMenuIconClick(e)}><Link to="#ourWork">Our Work</Link></li>
        <li onClick={(e)=>handleMenuIconClick(e)}><Link to="/About">About Us</Link></li>
        <li onClick={(e)=>handleMenuIconClick(e)}><Link to="/Contact">Contact Us</Link></li>
    
    </ul>
    </div>

    </nav>;
}
 
export default Navbar;