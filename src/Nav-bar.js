import './Nav-bar.css';
const Navbar = () => {

  
    const handleMenuIconClick = (e)=>{
        let menuIcon = document.querySelectorAll('.iconLine');
        let slidebarmenu = document.querySelector('.slidebarmenu');
        let menuLines = [...menuIcon]
        slidebarmenu.classList.toggle('slidebar-show');

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
        <li><a href="">Services</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
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
        <li><a href="">Services</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
    </ul>
    </div>

    </nav>;
}
 
export default Navbar;