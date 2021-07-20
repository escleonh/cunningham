import './Home.css';
import galleryImg from './work.jpeg';
import { HashLink as Link } from 'react-router-hash-link';


const Home = () => {
    return (<div>
                <div className="grassBgContainer">
                <h1 className="homeTaglinne">Tagline goes here</h1>
                <div className="homeCTABtns">
                    <button><Link to="#ourWork" >Our Work </Link></button>
                    <button><a href="tel:4799705075">Call Us</a></button>
                </div>
                    <div className="companyName">
                        <div>
                        <p>Cunningham's Lawn and Landscaping</p>
                        </div>
                    </div>
                </div> 
                <div className="titleHeading" id="services"><h1>Services</h1></div>
                <div className="servicesContiner" >
                    <div>
                        <div className="serviceOneImg">
                        </div>
                        <div className="serviceTitle">
                           <h2>Service One</h2>
                        </div>
                        <div className="serviceDescription">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div>
                        <div className="serviceOneImg">
                        </div>
                        <div className="serviceTitle">
                        <h2>Service Two</h2>
                        </div>
                        <div className="serviceDescription">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div>
                        <div className="serviceOneImg">
                        </div>
                        <div className="serviceTitle">
                        <h2>Service Three</h2>
                        </div>
                        <div className="serviceDescription">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div>
                        <div className="serviceOneImg">
                        </div>
                        <div className="serviceTitle">
                        <h2>Service Four</h2>
                        </div>
                        <div className="serviceDescription">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div>
                        <div className="serviceOneImg">
                        </div>
                        <div className="serviceTitle">
                        <h2>Service Five</h2>
                        </div>
                        <div className="serviceDescription">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="titleHeading" id="ourWork"><h1>Our Work</h1></div>

                <div className="OurWorkContainer">
                <img src={galleryImg} alt=""/>
                <img src={galleryImg} alt=""/>
                <img src={galleryImg} alt=""/>
                <img src={galleryImg} alt=""/>
                <img src={galleryImg} alt=""/>
                <img src={galleryImg} alt=""/>
                </div>
            </div>
    );
}
 
export default Home;