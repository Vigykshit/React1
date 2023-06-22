import React from "react";
import './Footer.css'
const Footer = () =>{
    return(
        <>
        <footer>
            <a href="#">
            <p className="footing">&copy; Amazon 2023</p>
            <div id="naam">
                Amazon
            </div>
            <div className="aboutamazon">
                About Amazon
                <ul className="foottext">
                    <li>Who we are</li>
                    <li>Blog</li>
                    <li>Work with us</li>
                    <li>Report fraud</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="aboutamazon">
                Learn More
                <ul className="foottext">
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Term</li>
                    <li>Sitemap</li>
                    <li>Feeding india</li>
                </ul>
            </div>
            <div className="aboutamazon">
                Social Links
                <ul>
                    <div className="footlink">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="facebook" className="footlink footlink1"></img>
                        <img src="https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo.jpg" alt="instagram" className="footlink footlink1"></img>
                        <img src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" alt="youtube" className="footlink1 footlink"></img> 
                        <li> <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="apple store" className="footlink"></img> </li>
                        <li> <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="android store" className="footlink"></img> </li>
                    </div>
                </ul>
            </div>
            </a>
          </footer>
        </>
    )
}

export default Footer