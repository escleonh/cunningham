import './Nav-bar.css';
const Navbar = () => {
    return <nav>
    <div className='mobileLeftNavCol'></div>
    <div>LOGO</div>
    <div className='mainMenu'>
    <ul >
        <li><a href="">Services</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
    </ul>
    </div>
    <div className='quoteBtn'>
        <a href="#">Free Quote</a>
    </div>

    <div className="menuIcon">
        <div></div>
        <div></div>
        <div></div>
    </div>

    <div className='slidebarmenu'>
    <ul>
        <li><a href="">Services</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
    </ul>
    </div>

    </nav>;
}
 
export default Navbar;